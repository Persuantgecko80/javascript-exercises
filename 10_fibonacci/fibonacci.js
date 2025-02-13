const fibonacci = function(num) {
    if (num < 0) return "OOPS!";
    if (num === 0) return 0;

    let first = 1;
    let second = 0;

    for (let i = 2: i <= num; i++) {
        let now = first + second;
        second = first;
        first = now;
    }
    return first

};

// Do not edit below this line
module.exports = fibonacci;
