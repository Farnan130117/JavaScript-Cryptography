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

