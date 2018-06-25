import { CIRCLE_LENGTH } from "../_const.js";
import { hexToRgbCode } from "../functions/helpers.js";

export class Drawer {
  constructor(element) {
    this.element = element;
    this.context = element.getContext("2d");
  }

  clear() {
    this.context.save();
    this.context.fillStyle = `rgba(${hexToRgbCode('#333')}, .5)`;
    this.context.fillRect(0, 0, this.element.width, this.element.height);
    this.context.restore();
  }

  drawMe(pos, size, color) {
    this.context.save();
    this.context.fillStyle = color;
    this.context.fillRect(pos.x - size / 2, pos.y - size / 2, size, size);
    this.context.restore();
  }

  drawMeCircle(pos, size, color) {
    if (size < 0) return;
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(pos.x, pos.y, size, 0, CIRCLE_LENGTH);
    this.context.fill();
  }

  line(start, end, size, color) {
    if (size < 0) return;
    this.context.beginPath();
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(end.x, end.y);
    this.context.stroke();
  }

  fillText(pos, text, color, size) { 
    this.context.save();
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillStyle = color;
    this.context.font = `${size}px Helvetica`;
    this.context.fillText(text, pos.x, pos.y)
    this.context.restore();
  }

  fillTile(pos, tileset) {
    this.context.drawImage(tileset, pos.x, pos.y);
  }
}
