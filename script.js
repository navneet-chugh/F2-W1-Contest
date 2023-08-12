let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    const developers = arr.filter(person => person.profession === 'developer');
  console.log('Developers:', developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    const newData = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newData);
  console.log('New data added:', newData);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const nonAdmins = arr.filter(person => person.profession !== 'admin');
    console.log('Array without admins:', nonAdmins);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = arr.concat([
        { id: 5, name: 'jessica', age: 25, profession: 'manager' },
        { id: 6, name: 'peter', age: 23, profession: 'developer' }
      ]);
      console.log('Concatenated array:', newArray);
    
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }