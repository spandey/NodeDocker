let person = {
    name: 'Max',
    age: 30
  };
  
  const copiedPerson = { ...person };
  
  let cp = person;
  
  cp.age =25 // shallow copy 
  copiedPerson.name = "smin";
  
  console.log("person " + person.age)
  console.log("person " + person.name)
  console.log("person " + copiedPerson.name, copiedPerson.age)