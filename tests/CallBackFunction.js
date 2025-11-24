function checkAvailability(movieName, callBack){
    console.log("Check Availability ...");
    
}
function checkAvailability(callBack)
setTimeout (() => {
    console.log('Movie ${movieName} is available');
    callBack();
    
}, 2000);

function playMovie (){
    console.log("play the Movie");
    
}

checkAvailability ("OG",playMovie)
