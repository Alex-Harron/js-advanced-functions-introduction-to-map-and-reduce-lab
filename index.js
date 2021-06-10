// Your code here
function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(-1 * sourceArray[i])
    }
    return r
}

function mapToNoChange(arr) {
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(arr[i])
    }
    return r
}

function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(2 * sourceArray[i])
    }
    return r
}

function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * sourceArray[i])
    }
    return r
}

function reduceToTotal(arr, start=0) {
    let total = start
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i]) return true
    }
    return false
}



