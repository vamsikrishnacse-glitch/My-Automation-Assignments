function launchBrowser(browserName){
    if (browserName === "chrome"){
        console.log("This is chrome");
    } else
        console.log("This is not Chrome")
}

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running Smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "performance":
            console.log("Running performane tests");
            break; 
        default:
            console.log("Running SMoke Tests(Default)");
             
    }
}
launchBrowser("chrome")
launchBrowser("Firefox")
runTests ("default")
