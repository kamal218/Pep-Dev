const fs = require("fs");
let input = process.argv[2];
let data = fs.readFileSync(input, "utf-8");
let count = 0;
let arr = data.split("\r\n");
for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = 0; j < curr.length; j++) {
        if (curr[j] == 'n') {
            count++;
        }
    }
}
console.log(count);