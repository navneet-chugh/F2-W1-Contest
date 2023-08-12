let arr = [
  { id: 1, name: 'Navneet', age: 26, profession: 'developer' },
  { id: 2, name: 'Priyanka', age: 26, profession: 'developer' },
  { id: 3, name: 'Chumki', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.


// printing only develpoers
function PrintDeveloper() {
  console.log(arr.filter((employee)=>
  employee.profession==='developer')
)
};


//pushing one employee

function addData() {

  arr.push({
    id: 4, name: 'Shruti', age: 23 , profession: 'developer'
  });
  
  console.log(arr);
}


// remove admin
function removeAdmin() {
arr =  arr.filter((employee)=>
  employee.profession!='admin')
console.log(arr);

};

// append another array in main array
function concatenateArray() {
  let newArr = [
    { id: 5, name: 'Subhadeep', age: 25, profession: 'developer' },
  { id: 6, name: 'Vishal', age: 24, profession: 'Quality Head' }
  ];
  
  arr=arr.concat(newArr);
  console.log(arr);
}


// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}