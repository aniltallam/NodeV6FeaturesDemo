var mySet= new Set([0,1]); // 0, 1
mySet.add(2); // 0, 1, 2
mySet.add(2); // 0, 1, 2
mySet.add("Hello"); // 0, 1, 2, 'Hello'
mySet.add({a:1, b:2}); // 0, 1, 2, 'Hello', {a:1, b:2}

mySet.add(function(){}); // 0, 1, 2, 'Hello', {a:1, b:2}, [Function]

mySet.has("Hello"); // ture
mySet.delete("Hello"); // 'Hello' deleted
mySet.has("Hello"); // false

mySet.size; // 5

mySet.clear(); // Set Cleared
