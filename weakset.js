var myWeakSet = new WeakSet([{a:1}]);
var obj1 = {o:1};
var obj2 = {o:2};
myWeakSet.add(obj1);
myWeakSet.has(obj1); // true
myWeakSet.has(obj2); // false
myWeakSet.add(obj2);
myWeakSet.has(obj2); // true
delete obj2;
myWeakSet.has(obj2); // false, cause you deleted obj2, so WeakSet releases it automatically
myWeakSet.delete(obj1); //obj1 deleted from the set
myWeakSet.length; // 2
myWeakSet.add(2); // ERROR, no primitive value
