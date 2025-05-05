let testUser = new Object ();
testUser.name = "Marina";
testUser.age = 33;
testUser.city = "Moscow";
testUser.car = "Audi";

console.log(testUser); // Задали объекты через new Object  и использовали свойства объекта через точку - testUser.car и тд

let testUser = { name:"Marina",
        age: 33,
        city: "Moscow",
        car: "Audi"
}

console.log(testUser); // Задали объекты через литералы, JSON формат 

let testUserArray = new Array ("Marina", 33, "Moscow","Audi");
console.log (testUserArray) // Массивы тоже являются объектами

let testUserfunction = new Function(
    "userName",
    "age",
    "city",
    "return userName + age + city"
);
    
    console.log(testUserfunction("Marina", 33, "Moscow")); // функции тоже по факту могут быть объектами 

    ˜

testUser.car = "Ford" // добавить свойсвто можем
console.log(testUser); 

let newProp = "car";
let  value = "Ford";
testUser[newProp] = value

console.log(testUser) // еще один вариант добавления свойств через переменную 
 
if(testUser.age > 30 && testUser.car == "Ford") {console.log("We can offer a credit for you")

} else {console.log("You are too youg ")

}  //работа с условиями

let anotherTestUser = testUser
console.log(anotherTestUser)
anotherTestUser.name = "Yana"
console.log(testUser) // можем изменять значения свойства. тогда оно поменяется и в изначальной переменной 

let calculation = { 
    april: 1000,
    may: 2000,
    june: 3000,
    calculateAverage: function() {
        let average = (calculation.april + calculation.may + calculation.june)/3;
        console.log(`Average for ${calculation.april} + ${calculation.may} + ${calculation.june} is ${average}`) // calculateAverage как свойство внутри которого функция
    }
}
    calculation.calculateAverage(); 