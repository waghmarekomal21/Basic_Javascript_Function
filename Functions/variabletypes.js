//var a=5;
//var a=5;
function varScope ()
{
    //var a=5;
    //var a=6;
    console.log("Inside function it self",a);
    {
        var a=5;
        console.log("Inside block",a);
    }
}
//console.log("Out side of function",a);
varScope();




//Let variable


//let a=4;
function letScope()
{
    const a=4;
    //a=8;
    //a=5;
    console.log("Inside function",a);
    {
        //const a=4;
        //a=5;
        console.log("Inside block",a);
    }
}
console.log("Out side of function",a);
letScope();