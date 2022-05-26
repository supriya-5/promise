// Write one example explaining how you can write a callback function ?

 
 // function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('vishnu', callMe);


//  "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const countingNumber = () => {

      setTimeout(() => {
          console.log(1);

          setTimeout(() => {
              console.log(2);

              setTimeout(() => {
                  console.log(3);

                  setTimeout(() => {
                      console.log(4);

                      setTimeout(() => {
                          console.log(5);

                          setTimeout(() => {
                              console.log(6);

                              setTimeout(() => {
                                  console.log(7);
                              }, 7000);
                          }, 6000);
                      }, 5000);
                  }, 4000);
              }, 3000);
          }, 2000);
      }, 1000);

}
   
 countingNumber ();

// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const promise = new Promise ((resolve,reject)=>{
    resolve()
})
promise.then(()=>{
    setTimeout(() => {
      console.log("1");  
    }, 1000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("2");  
    }, 2000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("3");  
    }, 3000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("4");  
    }, 4000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("5");  
    }, 5000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("6");  
    }, 6000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("7");  
    }, 7000);
})
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
 const pass = new Promise((resolve,reject) =>{
     let x = 0   //x is not equal to 0 then it will go to else and then caught by .catch() method                                                   
     if(x==0){
         resolve(x);
     }
     else{
         reject(err);
     }
 })

 pass
 .then((x) =>{
     console.log("Passed") 
 })
 .catch((err) =>{
     console.log("Not passed");
 })

// Create examples to explain callback function


const name1 = (nameOfStudent) => {
    console.log("Hi",nameOfStudent);
}
const greeting = (student, callbackFunction) =>{
    callbackFunction(student);
}
greeting("Durga", name1);

// Create examples to explain callback hell function


const getEmployeeID = () => {
   
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1,2,3,4,5];
        console.log(id);
        
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
            
            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
               
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);
           
            }, 2000);
        
        }, 2000)
  
    },2000);
}


// getEmployeeID();



//Create examples to explain promises function

const getEmployeeDetails = new Promise((resolve, reject) =>{
    setTimeout (() => {
        let employeeDetails = {
            name : "durga",
            age : 23
        }
       
        resolve(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

    }, 3000, );
   })

.then((employeeDetails) =>{
   console.log(employeeDetails);
})



//Create examples to explain async await function
const fn1 = () => {
    return "I am function one";
}
const fn3 = () => {
    return "I am function three"
}
const fn2 = () => {
    return new Promise((resolve,reject) =>  {
        setTimeout(() => {
            resolve ("I am function two")
        }, 3000);
    })
}

const callFns = async () =>{
    let res1 = fn1();
    console.log(res1);

    let res2 = await fn2();
    console.log(res2);


    let res3 = fn3();
    console.log(res3);
}

 callFns();

//  Create examples to explain promise.all function

const p1 = Promise.resolve(3);
const p2 = 2003;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise");
  }, 1000);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // 
});

//The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.