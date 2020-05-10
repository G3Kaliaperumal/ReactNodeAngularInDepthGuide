// var - function scope
// let - block scope
// const - block scope

function runApp(firstName, lastName) {
  // fScope without declaration returns **undefined** value
  console.log(fScope);
  console.log('Good luck! ' + firstName + ' ' + lastName);
  {
    var fScope = 'FUNCTION SCOPE';
    let bScope = 'BLOCK SCOPE';
    console.log('Inside block: ' + fScope);
    console.log('Inside block: ' + bScope);
  }
  console.log('Outside block: ' + fScope);
  // The below statement will throw **Reference error**. So comment the line
  // console.log('Outside block: ' + bScope); 
}

runApp('GAYATHRI', 'KALIAPERUMAL');
