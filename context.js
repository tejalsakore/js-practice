// Example 1
var drink ="wine";
var foo ={
    drink : "beer",
    getDrink :function()
    {
        return drink;
    }
};
console.log(foo.getDrink()); // wine -> because in "foo" "drink" is property not variable

// Example 2
var drink ="wine";
var foo ={
    drink : "beer",
    getDrink :function()
    {
        return this.drink;
    }
};
console.log(foo.getDrink()); // beer -> this kwd refers property "drink" in "foo"

// Example 3
var drink ="wine";
var foo ={};
foo.drink = "beer";
foo.getDrink = function()
    {
        return this.drink;
    };
console.log(foo.getDrink()); // beer
