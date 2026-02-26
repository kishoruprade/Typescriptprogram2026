/// <reference lib="es2022" />
///<reference lib="es2022" />
//union "|"
var userId;
userId = 10001;
userId = "Ram";
function getUserInformation(customerId) {
    if (typeof (customerId) === 'number') {
        return 90001 + "_Ram";
    }
    else if (typeof (customerId) == 'string') {
        return customerId + "_RamString";
    }
    else if (typeof (customerId) == 'boolean') {
        return customerId + "_RamsBoolean";
    }
}
console.log(getUserInformation(10001));
console.log(getUserInformation("Sita"));
console.log(getUserInformation(true));
console.log(getUserInformation("Ram2"));
