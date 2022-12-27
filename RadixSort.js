

function RadixSort(array) {
    const max = Math.max(...Array.prototype.slice.call(array));
    let divisor = 1;
    while (divisor < max) {
        const buckets = [...Array(10)].map(() => []);
        for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const bucketIndex = Math.floor((num % (divisor * 10)) / divisor);
        buckets[bucketIndex].push(num);
        }
        array = [].concat(...buckets);
        divisor *= 10;
    }
    return array;
}

export default RadixSort;