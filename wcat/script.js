#!/usr/bin/env node
// console.log("Hello");

// BASIC READ AND WRITE
// const fs = require('fs');
// fs.writeFileSync("abc.txt", "Good bye!");
// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);

// MAKING ABLE TO READ FILES (wcat file1 file2 .................)
const fs = require('fs');
let cmds = process.argv.slice(2);//index0-> node path, index->1 is file(wcat path) path

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
// let cmds = process.argv.slice(2);
// const fs = require("fs");
// function readFiles(cmds) {
//     let options = cmds.filter(function (data, index) {
//         return data.startsWith("-");
//     });
//     let files = cmds.filter(function (data, index) {
//         return !data.startsWith("-");
//     });
//     if (files.length == 0) {
//         console.log("Please specify a file name to read.");
//         return;
//     }

//     if (options.length == 0) {
//         for (let i in files) {
//             let data = fs.readFileSync(files[i], "utf-8");
//             console.log(data);
//         }
//     }


//     for (i in files) {
//         if (!fs.existsSync(files[i])) {
//             console.log(files[i] + " does not exist");
//             return;
//         }
//     }

//     for (i in files) {
//         let data = fs.readFileSync(files[i], "utf-8");
//         if (options.includes("-s")) {
//             let lines = data.split("\r\n");
//             // let allText = "";
//             for (j in lines) {
//                 if (lines[j] != "") {
//                     console.log(lines[j]);
//                     // allText += lines[j] + "\n";
//                 }
//             }
//             // console.log(allText);
//             // console.log(lines);
//         } else {
//             console.log(data);
//         }
//     }
//     // -n means numbering -s means no empty lines
//     let num = 1;
//     for (let i in files) {
//         let data = fs.readFileSync(files[i], "utf-8");
//         if (options.includes("-n")) {
//             if (options.includes("-s")) {//number without space
//                 let lines = data.split("\r\n");
//                 for (let j in lines) {
//                     if (lines[j] != "") {
//                         console.log(num + "." + lines[j]);
//                         num++;
//                     }
//                 }
//             } else {//number with space
//                 let lines = data.split("\r\n");
//                 for (let j in lines) {
//                     console.log(num + "." + lines[j]);
//                     num++;
//                 }
//             }

//         } else {//without space
//             if (options.includes("-s")) {
//                 let lines = data.split("\r\n");
//                 for (let j in lines) {
//                     if (lines[j] != "") {
//                         console.log(lines[j]);
//                     }
//                 }
//             } else {
//                 console.log(data);
//             }
//         }
//     }
// }

// readFiles(cmds);



// WRITING FILE FROM ONE TO ANOTHER


function write(cmds) {
    let files = cmds.filter(function (data) {
        return !data.startsWith("-");
    });
    let Option = cmds.filter(function (data) {
        return data.startsWith("-");
    });

    if (files.length == 0) {
        console.log("Please specify file name");
    }
    for (let j in files) {
        if (!fs.existsSync(files[j])) {
            console.log("Invalid file name" + files[j]);
            return;
        }
    }
    //Write in second file the data of first file
    if (Option.includes("-w")) {
        if (files.length != 2 || Option.length != 1 || cmds.indexOf("-w") != 1) {
            console.log("Invalid command");
            return;
        }
        let data = fs.readFileSync(files[0], "utf-8");
        fs.writeFileSync(files[1], data);
    }

    //Append data of 1st file into another file
    if (Option.includes("-a")) {
        if (files.length != 2 || Option.length != 1 || cmds.indexOf("-a") != 1) {
            console.log("Invalid command");
            return;
        }
        let data1 = fs.readFileSync(files[0], "utf-8");
        let data2 = fs.readFileSync(files[1], "utf-8");
        fs.writeFileSync(files[1], data1 + "\n" + data2);
        return;
    }

    // Append without empty Lines
    if (Option.includes("-ws")) {
        if (files.length != 2 || Option.length != 1 || cmds.indexOf("-ws") != 1) {
            console.log("Invalid command");
            return;
        }
        let data1 = fs.readFileSync(files[0], "utf-8");
        data1 = data1.split("\r\n");
        let data2 = fs.readFileSync(files[1], "utf-8");
        let data = "";
        for (let i in data1) {
            if (data1[i] != "") {
                data += data1[i] + "\n";
            }
        }

        fs.writeFileSync(files[1], data2 + "\n" + data);
        return;
    }
}
write(cmds);