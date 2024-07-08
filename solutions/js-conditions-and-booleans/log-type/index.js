let data;
data = "hello";
switch (typeof data) {
    case "object":
        // since null, array and object are alltogether considered objects
        // we need to do some more checks within the object case.
        if (data === null) {
            console.log("this is null");
        } else if (Array.isArray(data)) {
            console.log("this is an array");
        } else {
            console.log("this is an object");
        }
        break;
    case "number":
        if (Number.isNaN(data)) {
            console.log("this is a NOT a number");
        } else {
            console.log("this is a number");
        }
        break;
    case "string":
        console.log("this is a string");
        break;
    case "boolean":
        console.log("this is a boolean");
        break;
    case "bigint":
        console.log("this is a bigint");
        break;
    case "function":
        console.log("this is a function");
        break;
    case "undefined":
        console.log("this is a function");
        break;
    default:
        console.log("no idea what this is");
}
