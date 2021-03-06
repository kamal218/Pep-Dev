#!/usr/bin/env node
// console.log("Hello");

// BASIC READ AND WRITE
// const fs=require('fs');
// fs.writeFileSync("abc.txt","Good bye!");
// let data=fs.readFileSync("abc.txt","utf-8");
// console.log(data);

// MAKING ABLE TO READ FILES (wcat file1 file2 .................)
// const fs = require('fs');
// let cmds = process.argv.slice(2);//index0-> node path, index->1 is file(wcat path) path

// function readFile(cmds) {
//     if (cmds.length == 0) {
//         console.log("please specify File name");//no fime name is given to read
//         return;
//     }
//     for (i in cmds) {
//         if (!fs.existsSync(cmds[i])) {//incorrect file name is given
//             console.log(cmds[i] + " file doesnot exists");
//         } else {
//             let data = fs.readFileSync(cmds[i], "utf-8");
//             console.log(data);
//         }
//     }
// }
// readFile(cmds);


// MAKING ABLE TO READ WITHOUT ANY EXTRA LINES(wcat -s file name)
let cmds = process.argv.slice(2);
const fs = require("fs");
function readWithoutLine(cmds) {
    let options = cmds.filter(function (data, index) {
        return data.startsWith("-");
    });
    let files = cmds.filter(function (data, index) {
        return !data.startsWith("-");
    });
    if (files.length == 0) {
        console.log("Please specify a file name to read.");
        return;
    }

    for (i in files) {
        if (!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }

    for (i in files) {
        let data = fs.readFileSync(files[i], "utf-8");
        if (options.includes("-s")) {
            let lines = data.split("\r\n");
            // let allText = "";
            for (j in lines) {
                if (lines[j] != "") {
                    console.log(lines[j]);
                    // allText += lines[j] + "\n";
                }
            }
            // console.log(allText);
            // console.log(lines);
        } else {
            console.log(data);
        }
    }
}

readWithoutLine(cmds);
