function createComparisonFunction(pName){
    return function(object1, object2){
        var value1 = object1[pName];
        var value2 = object2[pName];
        
        if (value1 < value2){
           return -1;
        }
        else if (value1 > value2){
           return 1;
        }
        else {
           return 0;
         }
  }
}

var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}]

console.log(data.sort(createComparisonFunction("age")));
