function getOwnProperty(obj){
    for(let prop in obj){
      if (obj.hasOwnProperty(prop)){
        console.log(`${prop} : ${obj[prop]}`)
      }
    }
  };
  
  let parent = {
    name: 'Oleg',
    surname: 'Petrov',
    age: 36
  };
  
  let son = Object.create(parent);
  
  son.name = 'Ivan';
  son.age = 14;
  
  console.log(son);
  getOwnProperty(son);
