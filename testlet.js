
// completely block scoped.
function func1 () {
  if (true) {
    var myVar = 100
    let myLet = 200
    const myC = 300
  }
  console.log(myVar) // 100
  console.log(myLet) // ReferenceError: myLet is not defined
  console.log(myC) // ReferceError
}

// Temporal dead zone : No hoisting
try {
  func2()
} catch (e) {

}
function func2 () {
  if (true) {
    console.log(myVar) // undefined
    console.log(myLet) // ReferenceError: myLet is not defined
    console.log(myC) // ReferceError

    var myVar = 100
    let myLet = 200
    const myC = 300
  }
}

// console.log('ttest')
// No multiple declaration
try {
  function fun3 () {
    if (true) {
      var myVar = 100
      let myLet = 200
      const myC = 300

      var myVar = 100 // OK
      // let myLet = 200; // Error: already declared
      // const myC = 300 // Error: already declared
      // var myLet = 1
    }
  }
} catch (e) {

}

// In loops it gets fresh binding
function func4 () {
  let arr = []
  let i = -1
  for (let i = 0; i < 3; i++) {
    arr.push(i)
  }
  let arr1 = []
  var j = -1
  for (var j = 0; j < 3; j++) {
    arr1.push(j)
  }

  console.log(arr) // [0,1,2]
  console.log(i) // -1

  let arr2 = []
  const k = -1
  k = 10
  for (const k = 0; k < 3; k++) {
    arr2.push(k)
  }



  console.log(arr1) // [0,1,2]
  console.log(j) // 3

  console.log(arr2) // [0,1,2]
  console.log(k) // 3
}
func4()
