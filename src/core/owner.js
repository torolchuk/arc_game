import { Drawer } from "./drawer";
import { Particle } from "./particle";
import { KeyboardEventBinder } from "./keyboard-event-binder.js";
import { getRandomTrueFalse, getRndInteger, getRandomColorCode } from "../functions/helpers";
import { Enemy } from "../objects/enemy";
import { getVectorLength } from "../functions/vectors";
import { FloatingDot } from "../objects/floating-dot";
import { RegistersOwner } from "./registers-owner";
import { OBJECTS_TYPES } from "../_const";
import { Player } from "../objects/player";

export class Owner {
  constructor(element) {
    this.element = element;
    this.objectsRegister = new RegistersOwner();
    this.drawer = new Drawer(this.element);
    this.lastFrameTime = new Date().getTime();
    this.keyboardEventBinder = new KeyboardEventBinder();
    this.score = 0;
    this.player = new Player({
      pos: {
        x: this.element.width / 2,
        y: this.element.height - 40
      },
      color: getRandomColorCode(),
      parrent: this
    });

    this.ongoing = true;

    this.init();
  }

  init() {
    this.tick();
  }

  checkPlayerCollissions() {
    const enemyArray = this.objectsRegister.get(OBJECTS_TYPES.ENEMY);
    if (!enemyArray) return;
    
    enemyArray.forEach(item => {
      const length = getVectorLength(this.player.pos, item.pos);
      const size = this.player.size + item.size;
      if (length < size) {
        this.ongoing = false;
      }
    })
  }

  checkBulletCollisions() {
    const enemyArray = this.objectsRegister.get(OBJECTS_TYPES.ENEMY);
    const bulletArray = this.objectsRegister.get(OBJECTS_TYPES.BULLET);

    if (enemyArray === null || bulletArray === null) return;

    bulletArray.forEach(bullet => {
      enemyArray.forEach(enemy => {
        const length = getVectorLength(bullet.pos, enemy.pos);
        const size = bullet.size + enemy.size;
        if (length < size) {
          bullet.deleteSelf();
          enemy.deleteSelf();

          this.score += 1;
          this.spamParticles(bullet.pos, 4);
        }
      })
    })
  }

  deleteObject(flag, object) {
    this.objectsRegister.remove(flag, object);
  }

  createObject(flag, object) {
    this.objectsRegister.add(
      flag, 
      object
    )
  }

  createEnemy() {
    if (getRandomTrueFalse(10)) {
      const bullet = new Enemy({
        pos: {
          x: getRndInteger(0, this.element.width),
          y: -5
        },
        size: 5,
        color: getRandomColorCode,
        parrent: this,
        deathPoint: this.element.height + 5
      });

      this.createObject(
        OBJECTS_TYPES.ENEMY,
        bullet
      )
    }
  }

  tick() {
    const timestamp = new Date().getTime();

    this.drawer.clear();

    if (this.ongoing) {
      this.createEnemy();

      this.objectsRegister.update(timestamp);
      this.objectsRegister.draw(this.drawer);

      this.player.tick(timestamp);
      this.player.draw(this.drawer);

      this.checkPlayerCollissions();
      this.checkBulletCollisions();
    } else {
      this.drawer.fillText(
        {x: this.element.width / 2, y: this.element.height / 2},
        'YOU DIED',
        '#fff',
        90
      );

      if (getRandomTrueFalse(10)) {

        const floatDot = new FloatingDot({
          pos: {
            x: getRndInteger(0, this.element.width),
            y: getRndInteger(0, this.element.height)
          },
          parrent: this
        });

        this.createObject(
          OBJECTS_TYPES.PARTICLE,
          floatDot
        )
      }
    }

    this.drawer.fillText(
      {x: this.element.width / 2, y: 40},
      `SCORE: ${Math.ceil(this.score)}`,
      '#fff',
      16
    );

    requestAnimationFrame(this.tick.bind(this));
  }

  spamParticles(pos, amount = 5) {
    for (let i = 0; i < amount; i++) {
      const particle = new Particle({
        pos: pos,
        lifetime: 2000,
        parrent: this
      });
      this.createObject(
        OBJECTS_TYPES.PARTICLE,
        particle
      );
    }
  }
}
