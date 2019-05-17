import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {GameService, Graph} from "../game/game.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private svg: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  private g: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  private zoom;
  private currentSelected;
  private currentSelectedData;
  private node;
  private link;
  private label;
  private simulation;
  private color;

  constructor(private gameService: GameService) {
    this.gameService.graphSubject.subscribe((graph) => this.handleGraphUpdate(graph));
  }

  ngOnInit() {

    this.svg = d3.select('svg');
    const width = parseInt(this.svg.style('width'), 10);
    const height = parseInt(this.svg.style('height'), 10);

    this.color = d3.scaleOrdinal(d3.schemeCategory10);

    const manyBodyForce = d3.forceManyBody();
    manyBodyForce.strength(-800);

    const linkForce = d3.forceLink([]);//.id(function (d: any) { return d; });
    linkForce.distance(200);

    const ticked = () => {
      // this.link.attr('x1', /4);
      this.link
        .attr('foo', 'true')
        .attr('x1', function (d: any) { return d.source.x; })
        .attr('y1', function (d: any) { return d.source.y; })
        .attr('x2', function (d: any) { return d.target.x; })
        .attr('y2', function (d: any) { return d.target.y; });


      this.node
        .attr('cx', function (d: any) { return d.x; })
        .attr('cy', function (d: any) { return d.y; });

      this.label
        .text(d => { return d.text;})
        .attr('x', function (d: any) { return d.x })
        .attr('y', function (d: any) { return d.y });
    };

    this.simulation = d3.forceSimulation()
      .force('collision', d3.forceCollide(40))
      .force('link', linkForce)
      .force('charge', manyBodyForce)
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    this.g = this.svg.append('g').attr('class', 'everything');

    this.link = this.g.append('g')
      .attr('class', 'links')
      .selectAll('line');

    this.node = this.g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle');

    this.label = this.g.append('g')
      .attr('class', 'labels')
      .selectAll('text');

    // Zoom functions
    const zoom_actions = () => {
      this.g.attr('transform', d3.event.transform);
    };

    // add zoom capabilities

    this.zoom = d3.zoom();
    const zoom_handler = this.zoom
      .on('zoom', zoom_actions);

    zoom_handler(this.svg);

    this.restart({ "nodes": new Map(), "edges": new Map()});
  }

  handle(event) {
    switch (event) {
      case 'reset': {
        this.svg.call(this.zoom.transform, d3.zoomIdentity);
      }
    }
  }

  restart(graph: Graph) {
    const dragstarted = (d) => {
      if (!d3.event.active) {
        this.simulation.alphaTarget(.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragended = (d) => {
      if (!d3.event.active) {
        this.simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    };

    const clicked = (d, index, nodes) => {
      d3.select(this.currentSelected).attr('class', '');
      this.currentSelected = nodes[index];
      this.currentSelectedData = d;
      d3.select(this.currentSelected).attr('class', 'selected');
    };


    this.link = this.link.data(Array.from(graph.edges.values()), (d: any) => {return d.source.nodeID + "-" + d.target.nodeID;});
    this.link.exit().remove();
    this.link = this.link
      .enter().append('line')
      .attr('stroke-width', 5)
      .merge(this.link);

    this.node = this.node.data(Array.from(graph.nodes.values()), (d: any) => {return d.nodeID});
    this.node.exit().remove();
    this.node = this.node
      .enter().append('circle')
      .attr('r', 30)
      .attr('fill',  (d: any) => {return this.color(1);})
      .on('click', clicked)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)).merge(this.node);
      // .exit().remove();

    this.label = this.label.data(Array.from(graph.nodes.values()), (d: any) => { return d.nodeID; });
    this.label.exit().remove();
    this.label = this.label
      .enter().append('text')
      .text(function (d: any) {return d.text})
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .merge(this.label);
      // .exit().remove();

    this.simulation.nodes(Array.from(graph.nodes.values()));
    this.simulation.force('link').links(Array.from(graph.edges.values()));
    this.simulation.alpha(1).restart();


    // this.simulation
    //   .nodes()
    //   .on('tick', ticked);
    //
    // this.simulation.force('link')
    //   .links();
    //
    // this.simulation.sta
  }

  handleGraphUpdate(graph: Graph) {
    this.restart(graph);
  }
}
