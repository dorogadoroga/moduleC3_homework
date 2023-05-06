function hasProperty(str, obj){
  return str in obj; 
};
  
let parent = {
  name: 'Oleg',
  surname: 'Petrov',
  age: 36
};

console.log(hasProperty('name', parent));
console.log(hasProperty('salary', parent));