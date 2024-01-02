function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonalityUsingFunction(vectors) {
    for (let pair of vectors) {
        let v1 = pair[0];
        let v2 = pair[1];
        let ps = dotProduct(v1, v2);
        
        if (ps === 0) {
            console.log("Vectors are orthogonal");
        } else {
            console.log("Vectors are not orthogonal");
        }
    }
}
// Example usage:
let vectorsExample = [
    [[1, 2, 3], [4, 5, 6]],
    [[-1, 0, 2], [2, 0, -1]]
];

checkOrthogonalityUsingFunction(vectorsExample);