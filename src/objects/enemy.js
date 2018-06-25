import { BasicObject } from "../core/basic-object";
import { summVectors } from "../functions/vectors";
import { getRandomColorCode, getRndInteger } from "../functions/helpers";
import { OBJECTS_TYPES } from "../_const";

export class Enemy extends BasicObject {
    constructor({pos, size, parrent, deathPoint}) {
        super({pos, size, color: getRandomColorCode()});
        this.parrent = parrent;
        this.deathPoint = deathPoint;
        this.vector = {x: 0, y: getRndInteger(10, 30) / 10};
    }

    tick(timestamp) {
        this.pos = summVectors(this.pos, this.vector);
        this.vector = summVectors(this.vector, {x: 0, y: .05});

        if (this.pos.y > this.deathPoint) {
            this.parrent.deleteObject(OBJECTS_TYPES.ENEMY, this);
        }
    }    
}