import { getRandomColorCode } from "../functions/helpers";
import { TIMESTAMP_CORRECTION, GRAVITY_VECTOR } from "../_const";
import { summVectors } from "../functions/vectors";

export class FloatingDot {
    constructor({ pos, parrent }) {
      this.pos = pos;
      this.vector = { x: 0, y: 0 };
      this.color = getRandomColorCode();
      this.deathTime = new Date().getTime() + 5000;
      this.parrent = parrent || null;
      this.size = 0;
      this.initialSize = this.size;
      this.floatOffset = Math.random() * 50 * 100;
      this.mousePos = null;
    }
  
    tick(timestamp) {
      this.size += 1;
      const _correctTimestamp =
        (timestamp + this.floatOffset) / TIMESTAMP_CORRECTION;
      this.vector = summVectors(
        {
          x: Math.cos(_correctTimestamp) / 4,
          y: Math.sin(_correctTimestamp) / 4
        },
        GRAVITY_VECTOR
      );
      this.pos = summVectors(this.pos, this.vector);

      if (this.deathTime < timestamp) {
        this.parrent.deleteObject(this);
      }
    }
  
    draw(_drawer) {
      _drawer.drawMeCircle(this.pos, this.size, this.color);
    }
  }