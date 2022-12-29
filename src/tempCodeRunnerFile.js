class Myclass{
    constructor(){
    console.log("initiate");
    }

add(arg1,arg2)
{
    var result;
    result=arg1+arg2;
    return result;
}
sub(arg1,arg2)
{
    var result;
    result=arg1-arg2;
    return result;
}
}
module.exports=Myclass;