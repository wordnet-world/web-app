import { Team } from "./team";

export class Game {
    name: string;
    id: string;
    startingNode: string;
    teams: Team[];

    constructor(name, id, startingNode, teams) {
        this.name = name;
        this.id = id;
        this.startingNode = startingNode;
        this.teams = teams;
    }
}

export class GameBuilder {

    private _name: string;
    private _id: string;
    private _startingNode: string;
    private _teams: Team[];

    constructor() {
        this._teams = [];
    }

    name(name: string): GameBuilder {
        this._name = name;
        return this;
    }

    id(id: string): GameBuilder {
        this._id = id;
        return this;
    }

    startingNode(startingNode: string): GameBuilder {
        this._startingNode = startingNode;
        return this;
    }

    team(team: Team): GameBuilder {
        this._teams.push(team);
        return this;
    }

    build(): Game {
        return new Game(this._name, this._id, this._startingNode, this._teams);
    }

}
