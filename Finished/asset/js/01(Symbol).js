//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    displaySymbol();

    displaySymbolEquality();

    displaySymbolObject();



})


function displaySymbol() {

    // 1. Create an id constant that store Symbol with id debugging string 
    const id3 = Symbol("id");

    //2. Display the symbol on ui as string using toString()
    const value=id3.toString();

    symbolResult.innerHTML = value;

}

function displaySymbolEquality() {

    // 1. Create an id1 constant that store Symbol with id debugging string 
    const id1= Symbol('id');

    // 2. Create an id2 constant that store Symbol with id debugging string 
    const id2= Symbol("id");

    // 3. Compare their equality (===) , store it on result variable
    var result;
    if (id1===id2){
        result=id1.toString; 
    }

    //2. Display the result variable [Remove the string once you have the variable]
    symbolEquality.innerHTML = result;



}

function displaySymbolObject() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }

    // 1. Create an id constant that store Symbol with id debugging string 
    const id4=Symbol("id")

    //2. Add the symbol property to the object [this will be considered as hidden property]
    student[id4];
    //3. Let the Id value be 1234
    student[id4]=1234
    // Note : user [] 


    //Display the object on console 
    console.log(student);

    symbolObject.innerHTML = "View it On Console";

}
