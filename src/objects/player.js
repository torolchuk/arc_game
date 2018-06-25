import { BasicObject } from "../core/basic-object.js";
import { summVectors, decriceVectorByCoef } from "../functions/vectors.js";
import { Bullet } from "./bullet.js";
import { OBJECTS_TYPES } from "../_const.js";

export const DEFAULT_DODGE_STATE = Object.freeze({
    active: false,
    startTimestamp: null,
    startPos: null,
    vector: {x: 0, y: 0}
});
export const DODGE_DURATION = 1000;

export class Player extends BasicObject {
    constructor({ pos, color, parrent }) {
      super({ pos, color, size: 10 });
      this.movingDir = 0;
      this.vector = { x: 0, y: 0 };
      this.floor = pos.y + 40;
      this.dodgeState = Object.assign({}, DEFAULT_DODGE_STATE);
      this.parrent = parrent;

      this.init();
    }

    init() {
      this.parrent.keyboardEventBinder.register(
        [65, 68, 32, 16],
        this.keyboardHandler.bind(this)
      );
    }
  
    keyboardHandler(event) {
      if (event.type === "keydown") {
        switch (event.keyCode) {
          case 65: {
            this.movingDir -= 1;
            break;
          }
          case 68: {
            this.movingDir += 1;
            break;
          }
          case 32: {
            this.parrent.createObject(
              OBJECTS_TYPES.BULLET,
              new Bullet({
                pos: Object.assign({}, this.pos),
                parrent: this.parrent
              })
            )
            break;
          }
          case 16: {
            this.activateDodge();
          }
        }
      } else if (event.type === "keyup") {
        switch (event.keyCode) {
          case 65: {
            this.movingDir += 1;
            break;
          }
          case 68: {
            this.movingDir -= 1;
            break;
          }
        }
      }
    }
  
    activateDodge() {
       if (!this.dodgeState.active) {
         this.dodgeState.startPos = Object.assign({}, this.pos);
         this.dodgeState.active = true;
         this.dodgeState.startTimestamp = new Date().getTime();
         this.dodgeState.vector = {
          x: 16 * this.movingDir,
          y: 0 
         };
       }
    }
  
    updateDodge(timestamp) {
        if (this.dodgeState.active) {
            this.dodgeState.vector = decriceVectorByCoef(this.dodgeState.vector, 1.2);
            if (this.dodgeState.startTimestamp + DODGE_DURATION < timestamp) {
              this.dodgeState = Object.assign({}, DEFAULT_DODGE_STATE);
            }
        }
    }

    draw(_drawer) {
      _drawer.drawMeCircle(this.pos, this.size, this.color);
    }
  
    tick(timestamp) {
      this.updateDodge(timestamp);

      this.pos = summVectors(summVectors(this.pos, this.vector), this.dodgeState.vector);
      
      if (this.pos.x > this.parrent.element.width) {
        this.pos.x = 0;
      } else if (this.pos.x < 0) {
        this.pos.x = this.parrent.element.width;
      }
  
      if (this.movingDir === 1 && this.vector.x < 4) {
        this.vector = summVectors(this.vector, { x: 0.1, y: 0 });
      } else if (this.movingDir === -1 && this.vector.x > -4) {
        this.vector = summVectors(this.vector, { x: -0.1, y: 0 });
      } else if (this.movingDir === 0) {
        if (this.vector.x > 0) {
          this.vector = summVectors(this.vector, { x: -0.1, y: 0 });
        } else if (this.vector.x < 0) {
          this.vector = summVectors(this.vector, { x: 0.1, y: 0 });
        }
      }
    }
  }