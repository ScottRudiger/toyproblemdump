// implement merge sort for arrays

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const m = Math.ceil(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, m)),
    mergeSort(arr.slice(m))
  );
};

const merge = (arr1, arr2, merged = []) => {
  if (!arr1.length || !arr2.length) return [...merged, ...arr1, ...arr2];
  if (arr1[0] <= arr2[0]) {
    merged.push(arr1.shift());
    return merge(arr1, arr2, merged);
  } else {
    merged.push(arr2.shift());
    return merge(arr1, arr2, merged);
  }
};
// one-liner version
s=(a,d=a.length)=>d<2?a:(d/=2|0,m(s(a.slice(0,d)),s(a.slice(d))))
m=(a,b,r=[])=>a==0|b==0?[...r,...a,...b]:m(a,b,[...r,(b[0]>a[0]?a:b).shift()])

/*
  [5, 1, 8, 3, 2, 9, 4, 7, 6, 10]
                /  \
  [5, 1, 8, 3, 2] [9, 4, 7, 6, 10]
         /  \           /     \
  [5, 1, 8] [3, 2] [9, 4, 7] [6, 10]
  [5, 1] [8] [3] [2] [9, 4] [7] [6] [10]
  [5] [1] [8] [3] [2] [9] [4] [7] [6] [10]
  [1, 5] [3, 8] [2, 9] [4, 7] [6, 10]
  [1, 3, 5, 8] [2, 4, 7, 9] [6, 10]
  [1, 2, 3, 4, 5, 7, 8, 9] [6, 10]
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

const {expect} = require('chai');

describe('mergeSort function', () => {
  it('should sort an array', () => {
    const arr = [5, 1, 8, 3, 2, 9, 4, 7, 6, 10];
    expect(mergeSort(arr)).to.eql(arr.sort((a, b) => a - b));
    expect(s(arr)).to.eql(arr.sort((a, b) => a - b));
  });
  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(mergeSort(arr)).to.eql(arr.sort((a, b) => a - b));
    expect(s(arr)).to.eql(arr.sort((a, b) => a - b));
  });
  it('should sort a reversed ordered array', () => {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSort(arr)).to.eql(arr.sort((a, b) => a - b));
    expect(s(arr)).to.eql(arr.sort((a, b) => a - b));
  });
});
