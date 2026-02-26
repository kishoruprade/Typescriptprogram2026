//Enum : Enumeration data types : hold set of constants
//numeric
//string
//heterogeneous
///<reference lib="es2022" />
//numeric type of enum 
enum Browser{
    Chrome,  //0
    Firefox = 4, //1
    Safari=8,  //2
    Edge  //3
}

console.log(Browser.Chrome);
console.log(Browser.Edge);
console.log(Browser);

//other type of enum
 enum BrowserCheck{
     
    Firefox1, //0
    Safari1,  //1
    Edge1 =getVersion('chrome')*2,  //2
    Chrome1 = getVersion('chrome'), 
}
  function getVersion(browserName:string):number{
    if (browserName=="chrome"){
        return 115;
    }
    return -1;
  }
console.log(BrowserCheck.Chrome1);
console.log(BrowserCheck.Edge1);

//String Enum

enum environment{
    DEV = "dev",
    QA= "qa",
    STAGE = "stage",
    PROD ="prod"
}

console.log(environment);
console.log(environment['STAGE']);

//Heterogenous enum means mix of string and numeric
enum Status{
    ACTIVE = "active",
    DEACTIVE = 1
}

console.log(Status);

