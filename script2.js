var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    //objects are the same
    console.log("JSON are equal");
}
else{
  console.log("JSON are not equal");
}