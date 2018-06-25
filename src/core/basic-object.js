export class BasicObject {
  constructor({ pos, color, size, parrent }) {
    this.pos = pos;
    this.parrent = parrent;
    this.color = color;
    this.size = size;
  }

  tick() {
    return null;
  }

  draw(_drawer) {
    _drawer.drawMeCircle(this.pos, this.size, this.color);
  }

  deleteSelf() {
    return null;
  }
}
