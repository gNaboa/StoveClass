
import { Oven } from '../Classes/Oven.js'
import {Burner} from '../Classes/Burner.js'
export default class Stove {
  constructor(color, brand, dimensions) {
    this.color = color;
    this.brand = brand;
    this.dimensions = dimensions;
    this.burners = [];
    this.oven = new Oven();
    this.mouth = 4;
  }

  addBurner(color) {
    if (this.burners.length < 5) {
      this.burners.push(new Burner(color));
    }
  }
  getBurners(){
    return this.burners
  }
  
  getOven(){
    return this.oven
  }
  getColor(){
    return this.color
  }
  getBrand(){
    return this.brand
  }
  getDimensions(){
    return this.dimensions
  }
  getMouths(){
    return this.mouth
  }
   
}





