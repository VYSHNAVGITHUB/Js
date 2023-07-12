car={name:'Honda City',manufacture:"Honda",price:1400000,model:'sedan'}
// display manufacture
console.log(car.manufacture);

// model is present or not
console.log("model"in car);

// add property variant manual/automatic
car["variant"]="manual"

/// add property color white,grey,black
car["colours"]=["white","grey","black"]

// increment the price by 5k
car.price+=5000
console.log(car);