
import {Door} from './Door.js'
import { Lamp } from './Lamp.js'
export class Oven {
    constructor() {
        this.lamp = new Lamp();
        this.door = new Door();
    }
}