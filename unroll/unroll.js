const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

let array=[]

function unroll(squareArray) {
  squareArray.map((arr)=>{
    arr.map((item)=>{
      array.push(item)
    })
  })
return array
}

let text=unroll(smallerSquare)
// let number=unroll(square)
console.log(text)
// console.log(number)
module.exports = unroll;
