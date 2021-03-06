// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (array, size) => {
//   const copy = [...array];
//   const chunked = [];
//   while (copy.length) {
//     const chunk = [];
//     for (let i = 0; i < size && copy.length; i++)
//       chunk.push(copy.shift());
//     chunked.push(chunk);
//   }
//   return chunked;
// };

// const chunk = (array, size) => {
//   const chunked = [[]];
//   array.forEach(el => {
//     const lastChunk = chunked[chunked.length - 1];
//     if (lastChunk.length !== size)
//       lastChunk.push(el);
//     else
//       chunked.push([el]);
//   });
//   return chunked;
// };

// const chunk = (array, size) => {
//   const copy = [...array];
//   const chunked = [];
//   while (copy.length)
//     chunked.push(copy.splice(0, size));
//   return chunked;
// };

const chunk = (array, size) => {
  const chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
};

module.exports = chunk;
