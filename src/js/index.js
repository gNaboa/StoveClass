
import Stove from './Model/Stove.js'


const myStove = new Stove("black", "brastemp", [60, 60, 60])
myStove.oven.door.glass.setGlassDimensions([20, 20, 20])
myStove.oven.lamp.setOvenLight(true)
myStove.addBurner("green")
myStove.addBurner("red")
myStove.addBurner("blue")
myStove.addBurner("orange")
myStove.addBurner("gray")



window.onload = () => {
    console.log(myStove)
    var stove_brand = document.getElementById('brand')
    var stove_color = document.getElementById("color")
    var stove_dimensions = document.getElementById("dimensions")
    var stove_burners = document.getElementById("burners")
    var stove_mouths = document.getElementById("mouths")
    var stove_lamp = document.getElementById("lamp")
    var stove_glassdoor = document.getElementById("glassdoor")

    stove_brand.innerHTML = JSON.stringify(myStove.getBrand())
    stove_color.innerHTML = JSON.stringify(myStove.getColor())
    stove_dimensions.innerHTML = JSON.stringify(myStove.getDimensions())
    stove_burners.innerHTML = JSON.stringify(myStove.getBurners())
    stove_mouths.innerHTML = JSON.stringify(myStove.getMouths())
    stove_lamp.innerHTML = JSON.stringify(myStove.oven.lamp.getOvenLight())
    stove_glassdoor.innerHTML = JSON.stringify(myStove.oven.door.glass.getGlassDimensions())
}