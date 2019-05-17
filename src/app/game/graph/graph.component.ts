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
    this.gameService.graphSubject.subscribe(this.handleGraphUpdate);
  }

  ngOnInit() {

    this.svg = d3.select('svg');
    const width = parseInt(this.svg.style('width'), 10);
    const height = parseInt(this.svg.style('height'), 10);

    this.color = d3.scaleOrdinal(d3.schemeCategory10);

    const manyBodyForce = d3.forceManyBody();
    manyBodyForce.strength(-800);

    const linkForce = d3.forceLink().id(function (d: any) { return d.id; });
    linkForce.distance(200);

    this.simulation = d3.forceSimulation()
      .force('collision', d3.forceCollide(40))
      .force('link', linkForce)
      .force('charge', manyBodyForce)
      .force('center', d3.forceCenter(width / 2, height / 2));

    this.g = this.svg.append('g').attr('class', 'everything');


    // Zoom functions
    const zoom_actions = () => {
      this.g.attr('transform', d3.event.transform);
    };

    // add zoom capabilities

    this.zoom = d3.zoom();
    const zoom_handler = this.zoom
      .on('zoom', zoom_actions);

    zoom_handler(this.svg);

    this.restart({ "nodes": [], "edges": []});
  }

  handle(event) {
    switch (event) {
      case 'reset': {
        this.svg.call(this.zoom.transform, d3.zoomIdentity);
      }
    }
  }

  handleGraphUpdate(graph: Graph) {
    this.restart(graph);
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

    this.link = this.g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.edges)
      .enter().append('line')
      .attr('stroke-width', 5);

    this.node = this.g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('circle')
      .attr('r', 30)
      .attr('fill',  (d: any) => { return this.color(d.group); })
      .on('click', clicked)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    this.label = this.g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('text')
      .text(function (d: any) {return d.id})
      .attr('text-anchor', 'middle');

    const ticked = () => {
      this.link
        .attr('x1', function (d: any) { return d.source.x; })
        .attr('y1', function (d: any) { return d.source.y; })
        .attr('x2', function (d: any) { return d.target.x; })
        .attr('y2', function (d: any) { return d.target.y; });

      this.node
        .attr('cx', function (d: any) { return d.x; })
        .attr('cy', function (d: any) { return d.y; });

      this.label
        .attr('x', function (d: any) { return d.x })
        .attr('y', function (d: any) { return d.y });
    };

    this.simulation
      .nodes(graph.nodes)
      .on('tick', ticked);

    this.simulation.force('link')
      .links(graph.edges);
  }
}
