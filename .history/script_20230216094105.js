// Cложность алгоритма - O(n log n) в лучшем и среднем случае, где n - количество элементов в сортируемом массиве.
// В худшем случае, когда выбор опорного элемента всегда оказывается крайним или сильно выбивающимся, сложность алгоритма может достигать O(n^2).
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];
  arr.forEach(element => {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      middle.push(element);
    }
  });
  return [...quickSort(left), ...middle, ...quickSort(right)];
}