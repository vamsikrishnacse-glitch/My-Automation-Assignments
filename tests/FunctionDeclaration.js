//Function Declaration
function userProfile (name)
{
console.log("Hello, " + name + " !");
}
userProfile("Sunny");

//Arrow Function
const double = (num) => {
    return num * 2 ;
}
console.log(double(3));

//Anonymous Function With setTimeOut
setTimeout (() => {
    console.log("This Message is delayed by 2 seconds");
    
} , 2000);
//CallBack Function
function getUserData(callBack){
    setTimeout (() => {
       callBack();
        
    } , 3000);
}
    getUserData (function() {

        console.log("Call Back Function");
    });


