function sum(x){
    return function (y){
         return x+y;
     };
 }
 var add=sum(5);
 console.log(add(3));    //8
 
 console.log(sum(10)(3));//13