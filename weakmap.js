//instantiating a weakWeakMap
var myWeakMap = new WeakMap();
//set things in WeakMap
// myWeakMap.set(someObjectAsKey, somethingElseAsValue);
//get the value back from WeakMap
// weakWeakMap.get(someObjectAsKey);

/* Some more examples */
var dummyObject = {a:1};
var dummyFunc = function () {
    // body...
};

var yourWeakMap = new WeakMap();


yourWeakMap.set({a:1}, "I am for new object");
yourWeakMap.get({a:1}); //undefined

yourWeakMap.set(dummyObject, "I am for dummy object");
yourWeakMap.get(dummyObject); //I am for dummy object

//ERRORS
yourWeakMap.set(dummyFunc, "I am for dummy function"); //ERROR
yourWeakMap.set("person", { name: "Paul Shan" }); // ERROR

var theirMap = new Map([
    [dummyObject, "David Palmer"]
]);

theirMap.get(dummyObject); //David Palmer
