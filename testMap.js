//instantiating a map
var myMap = new Map();
//set things in Map
// myMap.set(somethingAsKey, somethingElseAsValue);
// //get the value back from Map
// map.get(somethingAsKey);

/* Some more examples */
var dummyObject = {a:1};
var dummyFunc = function () {
    // body...
};

var yourMap = new Map();

yourMap.set("person", { name: "Paul Shan" });
yourMap.set(13, "Unlucky number");
yourMap.set(null, "I am null");

yourMap.get("person"); //{ name: "Paul Shan" }
yourMap.get(13); //Unlucky number
yourMap.get(null); //I am null

yourMap.set(undefined, "I am undefined");
yourMap.get(undefined); //I am undefined

yourMap.set({a:1}, "I am for new object");
yourMap.get({a:1}); //undefined

yourMap.set(dummyObject, "I am for dummy object");
yourMap.get(dummyObject); //I am for dummy object

yourMap.set(dummyFunc, "I am for dummy function");
yourMap.get(dummyFunc); //I am for dummy function


var theirMap = new Map([
    ["president", "David Palmer"],
    ["country", "United States"]
]);

theirMap.get("president"); //David Palmer
theirMap.get("country"); //United States
