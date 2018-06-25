import { ObjectRegister } from "./objects-register";

export class RegistersOwner {
    constructor() {
        this.registersMap = {};
    }

    add(flag, object) {
        if (!this.registersMap[flag]) {
            this.registersMap[flag] = new ObjectRegister();
        }

        this.registersMap[flag].add(object);
    }

    remove(flag, object) {
        if (!this.registersMap[flag]) return;
        this.registersMap[flag].remove(object);
    }

    get(flag) {
        if (!this.registersMap[flag]) return null;
        return this.registersMap[flag].get();
    }

    update(timestamp) {
        for (let key in this.registersMap) {
            this.registersMap[key].update(timestamp);
        }
    }

    draw(drawer) {
        Object.keys(this.registersMap)
            .forEach(key => {
                this.registersMap[key].draw(drawer);
            });
    }
}