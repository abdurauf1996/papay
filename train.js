const last = (arr) => {
  if (arr.length > 0) {
    const firstItem = arr.shift();
    arr.push(firstItem);
  }
  return arr;
};

const myArray = [1, 2, 3, 4];
const newArray = last(myArray);
console.log(newArray); // Natija: [2, 3, 4, 1]
