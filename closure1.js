function init(){
    var firstName="Tejal";
    function showName(){
        console.log(firstName);
    };
    return showName;
}
var value=init();
value();

//Tejal