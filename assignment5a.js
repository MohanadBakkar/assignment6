function findSumOfDistinctElements(set1, set2) {
    let sumOfDistinctElements = 0;

    // Iterate through elements of set1
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sumOfDistinctElements += set1[i];
        }
    }

    // Iterate through elements of set2
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sumOfDistinctElements += set2[i];
        }
    }

    return sumOfDistinctElements;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findSumOfDistinctElements(set1, set2);
console.log(result);