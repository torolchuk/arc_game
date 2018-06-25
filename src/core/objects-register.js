export class ObjectRegister {
    constructor() {
        this.register = [];
    }

    add(object) {
        this.register.push(object);
    }

    remove(object) {
        this.register = this.register.filter(item => item !== object);
    }

    get() {
        return this.register;
    }

    update(timestamp) {
        this.register.forEach(item => {
            if (!!item.tick) item.tick(timestamp);
        })
    }

    draw(drawer) {
        this.register.forEach(item => {
            if (!!item.draw) item.draw(drawer);
        })
    }

}