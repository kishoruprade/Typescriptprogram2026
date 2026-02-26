//Enum : Enumeration data types : hold set of constants
//numeric
//string
//heterogeneous
///<reference lib="es2022" />
//numeric type of enum 
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 4] = "Firefox";
    Browser[Browser["Safari"] = 8] = "Safari";
    Browser[Browser["Edge"] = 9] = "Edge"; //3
})(Browser || (Browser = {}));
console.log(Browser.Chrome);
console.log(Browser.Edge);
console.log(Browser);
//other type of enum
var BrowserCheck;
(function (BrowserCheck) {
    BrowserCheck[BrowserCheck["Firefox1"] = 0] = "Firefox1";
    BrowserCheck[BrowserCheck["Safari1"] = 1] = "Safari1";
    BrowserCheck[BrowserCheck["Edge1"] = getVersion('chrome') * 2] = "Edge1";
    BrowserCheck[BrowserCheck["Chrome1"] = getVersion('chrome')] = "Chrome1";
})(BrowserCheck || (BrowserCheck = {}));
function getVersion(browserName) {
    if (browserName == "chrome") {
        return 115;
    }
    return -1;
}
console.log(BrowserCheck.Chrome1);
console.log(BrowserCheck.Edge1);
//String Enum
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment);
console.log(environment['STAGE']);
//Heterogenous enum means mix of string and numeric
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
})(Status || (Status = {}));
console.log(Status);
