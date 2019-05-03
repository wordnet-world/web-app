import { GameBuilder } from "./game";

export class Team {
    name: string;
    id: string;
    score: number;

    constructor(name, id, score) {
        this.name = name;
        this.id = id;
        this.score = score;
    }
}

export class TeamBuilder {
    private _name: string;
    private _id: string;

    name(name: string):TeamBuilder {
        this._name = name;
        return this;
    }

    id(id: string): TeamBuilder {
        this._id = id;
        return this;
    }

    build(): Team {
        return new Team(this._name, this._id, 0);
    }


}
