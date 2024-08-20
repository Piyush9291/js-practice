
// // if else

// else if

// let age = 15;
// let hasvotercard ="no"

// if(age>=14 && hasvotercard == "yes"){
//     alert("you can vote ");
// }

//  else if(age>=14 && hasvotercard == "no"){
//     alert("get your voter id card")
//  }

// else{
//     alert("you can not vote")
// }



// nested if


// let age = 15;
// let hasvotercard ="yes"

// if(age>=14){

//     if( hasvotercard == 'yes' ){
//         alert("you can vote ");
//     }

//     else{
//         alert("get your voter id card")
//      }
 
// }

// else{
//     alert("you can not vote")
// }



// switch case


/* if input = 1  ,"y", "yes" output = continue
/* if input = 0 ,"n" , "no" output = end

// if else 

/*
let input;

input = "";

if( input === 1){
    document .write ("continue");
}else if(input === "y"){
    document .write ("continue");
}else if(input === "yes"){
    document .write ("continue");
}else if( input === 0){
    document .write ("end");
}else if(input === "n"){
    document .write ("end");
}else if(input === "no"){
    document .write ("end");
}else{
    document . write("wrong input");
} 
*/

// switch case


// let input;

// input = "y";

// switch(input){
//     case 1:
//     document.write("continue");
//       break;

//     case "y":
//     document.write("continue");
//     break;
    
//     case "yes":
//     document.write("continue");
//     break;

//     case 0:
//     document.write("end");
//     break;

//     case "n":
//     document.write("end");
//     break;

//     case "no":
//     document.write("end");
//     break;

//     default :
//     document.write("wrong input");
// }




// loops in js

/* 3 type of loops in java script
 1 while loop 
 2 dowhile 
 3for*/

// let counter = 1;

//  while( counter <= 10){
//     document.write("piyush");
//     counter++ ;
//  }


// let counter =1;

// let sum = 0;
// while(counter <= 200){
     
//     if(counter % 2 == 0){
//        sum = sum + counter;
//     }
//     counter++;
// }
// document.write(sum);



// let counter = 1;

// do{
//     document.write("piyush");
//     counter++;
// }while(counter <= 10);



// for (let counter = 1; counter <= 10; counter++) {
//         document.write("piyush");  
// }



















// 3 types of date type

// 1 String  " true"
// 2 Boolean  true
// 3 Number    22



// String
// let type = "true"
// alert(typeof type);


// Number
// let type = 5 + null;
// alert(typeof type);
// console.log("type");

// Boolean
//  let type = true;
//  alert(typeof type);

//  number ko string ma change ase karte hai

// let type = 4;
// console.log(typeof type);

// let newtype = String(type);
// console.log(typeof newtype);


// Boolean ko string ma change ase karte hai

// let type = true;
// console.log(typeof type);

// let newtype = String(type);
// console.log(typeof newtype);


// String ko change ase karte hai number ma

// let type = "hello";
// console.log(typeof type);

// let newtype = Number(type);
// console.log(typeof newtype);



// string ko ase change ase karte hai boolean ma 

// let type = "true";
// console.log(typeof type);

// let newtype = Boolean(type);
// console.log(newtype);
// console.log(typeof newtype);



// Array

// let book = ["math","physics","bio","computer science"];


// // book[2] = "english"  changes ase karte hai arry ma

// console.log(book[1]);


// arrry ma length ase pta karte hai

//   let book1 = ["math","physics","bio","computer science"];

//  book1.splice(1,2)  splice sa kisse bhi element ko beech sa huyya sakte hai 

//  book.length = 0 ; arry lo empty asa kaste hai 

//  let position = book.indexOf("bio") kisee ek element ki position asa pta  karte hai

// console.log(position);


// Array hai ya nhi asa check karte hai (Array.isArray)



// function   ();  

// 1 types of function predefine
// 2 user difine function

// 2 ka table

// for(i=1; i<=10; i++){
//     document.write(`2 x ${i} = ${2*1}`);
//     document.write("<br>")
// }


// function table(){

//     for(i=1; i<=10; i++){
//         document.write(`2 x ${i} = ${2*i}`);
//         document.write("<br>");
//     }
//     document.write("<br>")
// }

// table();

// document.write("<br>")

// table();


//  arrguments object in java scriptuu

// function add(){

//    if(arguments.length === 0){

//    console.log("no arrguments passed")

//    }else{
    
//     let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//        sum = sum + arguments[i];
//   }
//    console.log(sum);
// }

// }
   
// //  let addition = add;

//  addition(5,19);
//  add(4,4,6,7);


// function ko var ma change ase karte hai 

// let addition = add;


// immediatley invoked function


// (function() {
//     console.log("hellow world")
//     alert("hello word");
// })();



// Object properties

// let person = {
//     firstname : 'piyush',
//     lastname : 'singh'
// }


// person.firstname = 'pankaj';    change ase karte hai onject ma

// person.age = 20;   add ase karte hai object ma 

// delete person.lastname;   delete ase karte hai object ma 

// // console.log(person.lastname);
// console.log(person['lastname']);


// for in loop sa hum object ka sare properties dekh sakte hai
// for( let key in person){
//     console.log(key + " :" + person[key]);
// }


// date and object

// let x = new Date("october 3,2005 10:51:33")

// console.log(x.getTime());



// object constuctor

// function student(first,last,age,cls){

//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.class = cls;
// }

// var student1 = new student("piyush" , "singh ", 20 ,12);


// student1.name = function() {
//     return this.firstname + " " + this.lastname;
// }

// console.log(student1 . name());


// hosting  iska mtlb hota hai khechna na badana 


// isma java script ka  diclartion ko utake upar lajat hai hosting

// let     
//         //    {in donu ma humko undifind likhe batana hoga or var ma nhi likhna hota}
// const 

// DOM

// YA ek terha ka api hai jisa hum html ma chnages karte hai 

// API = application programing language



// append element

// let list1= document.getElementById("list");

// let item = document.createElement("li");

// item.textContent = "new list";

// list1.appendChild(item);


// DOM EVENT

// oneclick event

// function btnclick(){
//     alert("button was clicked");
// }


// let btn = document.getElementById("btn");

// btn.addEventListener('click' , function(){
//     console.log("btn was clicked")
// })

// btn.addEventListener('mouseover' , function(){
//     console.log("mouse over is activated")
// })

// btn.addEventListener('mouseout' , function(){
//     console.log("mouse out is activated")
// })



// key down event


// window.addEventListener('keydown' , checkkey);

// function checkkey(event){
//     console.log(event.key);
// }

 
// class and object

// class person{ 

//     constructor(a,b){                        //constructor method
//     this.name = a;
//     this.age = b;
//     }

//     sayHi(){
//         console.log("hellow");              /// prototype method
//     }
    
//       static piyush = "bora";


//      static hellow(){
//         console.log("hellow");             // satic method   //   object ko kabhi static function nhi milta hai vo class ka sath he rha jata hai
                                            
//     }

       

//     }

   

//     let person1 = new person("piyush singh bora" , 18);

//     person1.sayHi();

//     console.log(person.piyush);

//     person.hellow();

//     console.log(person1);



// part 2 inheritance



// spread and rest operator(...)


// spread operat0r arry or object ma kam ata hai 

// let piyush = ["piyush" , "singh" , "bora"];


// let pankaj = [...piyush , "singh"];

// console.log(pankaj);


// let person = {
//     name : "piyush",
//     age : 20
// }


    
// let newpwrson = {
//     ...person,
// }

// console.log(newpwrson);


//rest operator

// array destructuring
// const arr = ["piyush", "pooja", "tanisha", "bhumika"];
// const[nam1, nam2, nam3] = arr;


// Object destructuring
// const obj = {
//     name: "Piyush",
//     age: 19,
// }
// const{name, age} = obj;
// console.log(age)


// rest operator
// const restOpt = (a,b,c,...pooja) => {
//   console.log(pooja)
// }

// restOpt(2,3,4,5,6,6,7,"piyush")

// spread operator: we can use spread operator for merging and copy and array.
// const originalArray = [1, 2, 3];
// const originalArray2 = [4, 5, 6];

// const newArray = [...originalArray2] + [...originalArray];

// console.log(newArray); 



// setTimeout

// console.log("one")
// console.log("two")
// console.log("three")
                            //  {this is called asynchronous}
// setTimeout(() =>{
//     console.log("five")
// } , 2000)

// console.log("four")


// callback function

// function sayhello(){
//      console.log("hello")
// }

// function sayhi(){
//     console.log("hi")
// }

// function add(a , b , kdbbsd){
//     const sum = a + b
//     kdbbsd(sum);
// };

// add(21, 22, (sum)=>{
//     console.log(23 + sum)
// });

// add(10,20 ,sayhello);

// add(10,20 ,sayhi);


//fetch api

// let getfact = async () =>{
//     let reposnse = await fetch(url)
//     console.log(reposnse)
// }





