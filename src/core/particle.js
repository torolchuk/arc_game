import { GRAVITY_VECTOR } from "../_const.js";
import { getRandomColorCode, hexToRgbCode } from "../functions/helpers.js";
import { summVectors } from "../functions/vectors.js";

export class Particle {
  constructor({ pos, lifetime, parrent, vector, size, color }) {
    this.pos = pos;
    this.vector = vector || {
      x: Math.random() * 4 - 2,
      y: Math.random() * 4 - 2
    };
    this.size = size || 5;
    this.color = hexToRgbCode(color || getRandomColorCode());
    this.fillCode = "";
    this.lifestamp = 0;
    this.lifetime = lifetime;
    this.borntime = new Date().getTime();
    this.deathtime = this.borntime + lifetime;
    this.parrent = parrent;
  }

  draw(_drawer) {
    _drawer.drawMeCircle(
      this.pos,
      this.size * (1 - this.lifestamp),
      this.fillCode
    );
  }

  tick(time) {
    this.lifestamp = (time - this.borntime) / this.lifetime;

    if (this.pos.y > this.parrent.element.height) {
      this.vector.y = -1 * this.vector.y / 2;
    }

    this.vector = summVectors(this.vector, GRAVITY_VECTOR);
    this.pos = summVectors(this.pos, this.vector);
    this.fillCode = `rgba(${this.color}, ${1 - this.lifestamp})`;

    if (this.lifestamp > 1) {
      this.parrent.deleteObject(this);
    }
  }
}
