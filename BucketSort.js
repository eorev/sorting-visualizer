
function BucketSort(array) {
    const max = Math.max(...Array.prototype.slice.call(array));
    const min = Math.min(...Array.prototype.slice.call(array));
    const buckets = [...Array(max - min + 1)].map(() => []);
    for (let i = 0; i < array.length; i++) {
      buckets[array[i] - min].push(array[i]);
    }
    return [].concat(...buckets);
  }

export default BucketSort;