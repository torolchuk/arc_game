import { BasicObject } from "../core/basic-object";
import { summVectors } from "../functions/vectors";
import { OBJECTS_TYPES } from "../_const";

export class Bullet extends BasicObject {
    constructor({ pos, parrent }) {
        super({pos, color: '#fff', size: 2, parrent});
        this.vector = {
            x: 0, 
            y: -2
        };
    }

    tick(timestamp) {
        this.pos = summVectors(this.pos, this.vector);
        this.vector = summVectors(this.vector, {x: 0, y: -.2});

        if (this.pos.y < 0) {
            this.deleteSelf();
        }
    }

    deleteSelf() {
        this.parrent.deleteObject(OBJECTS_TYPES.BULLET, this);
    }
}