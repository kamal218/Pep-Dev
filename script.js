// // let a = 10;
// // let a = 20;
// // console.log(a);

// // var a = 10;
// // var a = 20;
// // console.log(a);

// // const a = 10;
// // const a = 20;
// // console.log(a);

// // let a = 10;
// // a = 20;
// // console.log(a);

// // var b = 10;
// // b = 20;
// // console.log(b);

// // const c = 10;
// // c = 20;
// // console.log(c);


// function temp() {
//     var a = 30;
//     {
//         let b = 40;

//     }
//     // console.log(b);
//     console.log(a);
// }
// temp()

// // let a = 10;
// // {
// //     let a = 20;
// //     console.log(a);
// //     {
// //         let a = 30;
// //         console.log(a);
// //     }
// // }

// let arr=[];
//  arr=[1,2,3,4];
// console.log(arr);
// arr[0]=10;
// arr[10]=11;//others will be empty
// arr.push(12);
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);

// let arr=new Array(5);
// console.log(arr);

// let arr=new Array(1.5);
// console.log(arr);

// let arr=new Array('b');
// console.log(arr);

// let arr = new Array(1, 2, 3, 4, 4);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i] + " ");
// }

// for (var i = 0; i < 2; i++) {
//     for (var i = 0; i < 1; i++) {
//         console.log(i);
//     }
// }

// let arr = [1, 2, 3, 4];
// for( i in arr){
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4];
// arr.forEach(function(data,index){
//     console.log(index,data);
// });

// arr=arr.map(function(data,index){
//     return data+2;
// });

// delete arr[1];//only value delete
// arr.splice(1,1);
// arr.splice(2);
// arr.splice(-2);
// arr.splice(-10);
// arr.splice(10);
// console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 0) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

arr = arr.filter(function (data, index) {
    if (data % 2 == 0)
        return false;
    else
        return true;
});
console.log(arr);