var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Cuarto");

console.log(myMap);
console.log(myMap.get(1));

//to get keys
for(let key of myMap.keys()){
  console.log(`key is ${key}`)
};

//to get values
for(let value of myMap.values()){
  console.log(`value is ${value}`)
};

// to get key value pair
for(let [k,v] of myMap){
  console.log(`key is ${k} & value is ${v}`)
};

//use of forEach
myMap.forEach((key) => console.log(`key is ${key}`) );
myMap.forEach((value) => console.log(`key is ${value}`) );
myMap.forEach((v,k) => console.log(`value is ${v} & key is ${k}`) );

//to delete element
myMap.delete(4);
console.log(myMap)

//size of map
console.log(myMap.size);


/*
Output:

Map(4) { 1 => 'Uno', 2 => 'dos', 3 => 'tres', 4 => 'Cuarto' }
Uno

key is 1
key is 2
key is 3
key is 4

value is Uno
value is dos
value is tres
value is Cuarto

key is 1 & value is Uno
key is 2 & value is dos
key is 3 & value is tres
key is 4 & value is Cuarto

key is Uno
key is dos
key is tres
key is Cuarto

key is Uno
key is dos
key is tres
key is Cuarto

value is Uno & key is 1
value is dos & key is 2
value is tres & key is 3
value is Cuarto & key is 4

Map(3) { 1 => 'Uno', 2 => 'dos', 3 => 'tres' }

3
*/