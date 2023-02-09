export class Lamp {
    constructor() {
        this.status = false;
    }

    setOvenLight(status) {
        this.status = status;
    }
    getOvenLight() {
        return this.status
    }
}

