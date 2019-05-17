import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export class UpdateMessage {
  type: string;
  guess: string;
  correct: boolean;
  newNodeId: number;
  newNodeText: string;
  newNodeNeightbors: number[];
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

}

export class Edge {
  aID: number;
  bID: number;
}

export class Graph {
  nodes: Node[];
  edges: Edge[];
}

@Injectable()
export class GameService {

  private socket: WebSocket;
  private graph: Graph;
  private messageResponders: Map<string, (any) => void> = new Map<string, (any) => void>();
  messageSubject: Subject<UpdateMessage> = new Subject<UpdateMessage>();
  graphSubject: Subject<Graph> = new Subject<Graph>();


  constructor() {
    this.graph.nodes = [];
    this.graph.edges = [];
    this.messageResponders.set('start', this.handleStartMessage);
    this.messageResponders.set('update', console.log);
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
    this.socket = new WebSocket(`ws://${window.location.host}/api/joinGame?teamID=${teamID}`);
    this.socket.addEventListener('message', event => this.messageSubject.next(JSON.parse(event.data)));
  }

  handleGuess(guess: string) {
    this.socket.send(JSON.stringify({"guess": guess}))
  }

  handleStartMessage(message: StartMessage) {
    const rootNode: Node = this.createRootNode(message);
    const connectedNodes: Node[] = this.createRootConnectedNodes(message);
    const rootEdges: Edge[] = this.createRootEdges(message);
    this.graph.nodes.push(rootNode);
    this.graph.nodes.concat(connectedNodes);
    this.graph.edges.concat(rootEdges);
    this.graphSubject.next(this.graph);
  }

  createRootNode(message: StartMessage) {
    const root: Node = new Node();
    root.nodeID = message.rootID;
    root.text = message.rootText;
    return root;
  }

  createRootConnectedNodes(message: StartMessage) {
    const nodes: Node[] = [];
    message.rootNeighbors.forEach(neighborID => {
      const neighbor: Node = new Node();
      neighbor.nodeID = neighborID;
      neighbor.text = null;
      nodes.push(neighbor);
    });
    return nodes;
  }

  createRootEdges(message: StartMessage) {
    const edges: Edge[] = [];
    message.rootNeighbors.forEach(neighborID => {
      const edge: Edge = new Edge();
      edge.aID = message.rootID;
      edge.bID = neighborID;
      edges.push(edge);
    });
    return edges;
  }


}
