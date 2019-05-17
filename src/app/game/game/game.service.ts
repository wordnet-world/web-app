import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export class UpdateMessage {
  type: string;
  guess: string;
  correct: boolean;
  newNodeID: number;
  newNodeText: string;
  newNodeNeighbors: number[];
}

export class StartMessage {
  type: string;
  rootID: number;
  rootText: string;
  rootNeighbors: number[];
}

export class EndMessage {
  type: string;
}

export class Node {
  nodeID: number;
  text: string;
  x: number;
  y: number;
  index: number;
  vx: number;
  vy: number;
}

export class Edge {
  source: Node;
  target: Node;
  index: number;
}

export class Graph {
  nodes: Map<number, Node>;
  edges: Map<string, Edge>;
}

@Injectable()
export class GameService {

  private socket: WebSocket;
  private graph: Graph;
  private messageResponders: Map<string, (any) => void> = new Map<string, (any) => void>();
  messageSubject: Subject<UpdateMessage> = new Subject<UpdateMessage>();
  graphSubject: Subject<Graph> = new Subject<Graph>();


  constructor() {
    this.graph = new Graph();
    this.graph.nodes = new Map<number, Node>();
    this.graph.edges = new Map<string, Edge>();
    this.messageResponders.set('start', (message) => this.handleStartMessage(message));
    this.messageResponders.set('update', (message) => this.handleUpdateMessage(message));
    this.messageResponders.set('end', console.log);
    this.messageSubject.subscribe(message => {
      const type = message.type;
      this.messageResponders.get(type)(message);
    });

  }

  subscribe(observer: (message: UpdateMessage) => void) {
    this.messageSubject.subscribe(observer);
  }


  handleJoinGame(teamID: string) {
    this.graph = new Graph();
    this.graph.nodes = new Map<number, Node>();
    this.graph.edges = new Map<string, Edge>();
    this.socket = new WebSocket(`ws://${window.location.host}/api/joinGame?teamID=${teamID}`);
    this.socket.addEventListener('message', event => this.messageSubject.next(JSON.parse(event.data)));
  }

  handleGuess(guess: string) {
    this.socket.send(JSON.stringify({"guess": guess}))
  }

  handleStartMessage(message: StartMessage) {
    this.createRootNode(message);
    this.createRootConnectedNodes(message);
    this.createRootEdges(this.graph.nodes.get(message.rootID), message);
    this.graphSubject.next(this.graph);
  }

  createRootNode(message: StartMessage) {
    const root: Node = new Node();
    root.nodeID = message.rootID;
    root.text = message.rootText;
    root.x = 0, root.y = 0;
    this.graph.nodes.set(root.nodeID, root);
  }

  createRootConnectedNodes(message: StartMessage) {
    message.rootNeighbors.forEach(neighborID => {
      const neighbor: Node = new Node();
      neighbor.nodeID = neighborID;
      neighbor.text = null;
      neighbor.x = 0, neighbor.y = 0;
      this.graph.nodes.set(neighborID, neighbor);
    });
  }

  createRootEdges(rootNode: Node, message: StartMessage) {
    message.rootNeighbors.forEach(neighborID => {
      const edge: Edge = new Edge();
      edge.source = rootNode;
      edge.target = this.graph.nodes.get(neighborID);
      this.graph.edges.set(`${edge.source.nodeID}.${edge.target.nodeID}`, edge);
    });
  }

  handleUpdateMessage(message: UpdateMessage) {
    if (!message.correct) return;
    this.addTextToExistingNode(message);
    this.mergeNewNeighborNodes(message);
    this.mergeNewEdges(message);
    this.graphSubject.next(this.graph);
  }

  addTextToExistingNode(message: UpdateMessage) {
    const existingNode: Node = this.graph.nodes.get(message.newNodeID);
    if (!existingNode) {
      console.log(`Node ${message.newNodeID} does not exist!`);
      return;
    }
    existingNode.text = message.newNodeText;
    this.graph.nodes.set(message.newNodeID, existingNode);
  }

  mergeNewNeighborNodes(message: UpdateMessage) {
    message.newNodeNeighbors.forEach(neighborID => {
      if(this.graph.nodes.get(neighborID)) {
        return;
      }
      const neighbor: Node = new Node();
      neighbor.nodeID = neighborID;
      neighbor.text = null;
      neighbor.x = 0; neighbor.y = 0;
      this.graph.nodes.set(neighborID, neighbor);
    });
  }

  mergeNewEdges(message: UpdateMessage) {
    message.newNodeNeighbors.forEach(neighborID => {
      if(this.graph.edges.get(`${message.newNodeID}.${neighborID}`)) {
        return;
      }
      const edge: Edge = new Edge();
      edge.source = this.graph.nodes.get(message.newNodeID);
      edge.target = this.graph.nodes.get(neighborID);
      this.graph.edges.set(`${message.newNodeID}.${neighborID}`, edge);
    });
  }



}
