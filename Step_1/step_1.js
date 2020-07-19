//https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=2
//Step_1 
// two run in js file in node runtime environemnt
// in windows->CMD -> go to js file path -> 
// write : node step_1.js ( then the js file will execute)

		console.log('Test Farnan')
//Variable
		let firstName= "Cryptography" // camel notation
		console.log(firstName)	

		//variable can't have keyword name
		//meaningfull name
		//can't start with number
		//can't use space and - inside variable
		//case sensitive
//Constant variable
		const x=0.33
		console.log(x)
/* 	
	Data type: 
	1. Primitive Type
   		- number , string , boolean, undefiend , null
	2. Reference Type
   		- object , array , function

*/

//Object type

		let person = {

			name : 'Mokammal', 
			age  : 27
		}
		console.log(person)
        //one way of calling
		person.name='hossen'
		console.log(person.name)

        //another way of calling

        person['name']= 'farnan'
        console.log(person.name)

        //we can use the second way
        // for using the variable dynamically
        let selection= 'name'       
        person[selection] = 'Md. Mokammal Hossen Farnan'
        console.log(person.name)

	// Create an object (older method)
	var person = {
	  firstName: "John",
	  lastName : "Doe",
	  id     : 5566,
	  fullName : function() {
	    return this.firstName + " " + this.lastName;
	  }
	};

	// Display data from the object:
	document.getElementById("demo").innerHTML = person.fullName;

//OOP- Defining object 
let person = { 
    first_name:'Mukul', 
    last_name: 'Latiyan', 
  
    //method 
    getFunction : function(){ 
        return (`The name of the person is  
          ${person.first_name} ${person.last_name}`) 
    }, 
    //object within object 
    phone_number : { 
        mobile:'12345', 
        landline:'6789'
    } 
} 
console.log(person.getFunction());  
console.log(person.phone_number.landline); 

//OOP - using a constructor 
function person(first_name,last_name){ 
   this.first_name = first_name; 
   this.last_name = last_name; 
} 
//creating new instances of person object 
let person1 = new person('Mukul','Latiyan'); 
let person2 = new person('Rahul','Avasthi'); 
  
console.log(person1.first_name); 
console.log(`${person2.first_name} ${person2.last_name}`);

//array
		let selectColour = ['cricket' , 'football']
		selectColour[1] = 'tennis'
		console.log(selectColour.length)

//function
        //performing of task
 		function deed(name){
 			console.log('Inside Function')
 			console.log('hello' + name)
 		}
 		deed('jhon');
 		deed('mery');

        // calculating inside function
        function square(number){
        	 return number * number;
        }
        let number = square(4);
        console.log(number)

