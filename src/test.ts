let str:string = "你好";
console.log(str);

//boolean
let isFound:boolean = false;
console.log(typeof isFound);

//string
console.log(typeof str);


//联合类型
let a: string | number = 'hello';
console.log(a.toString()); // toString()是联合类型变量a的公共方法 

//数组
let arr: number[] = [];
let arr1:Array<number> = [];//两种申明方法皆可
let address:[string,number]=['Chengdu',610000];//固定元素类型

const numArr:number[] = [5,78,89,4547,1223];
function myFunc(value:number,index:number,array:number[]){
    return value>18;
}
const myArr=[1,2,3,4,5,6];
var v=myArr.find(value=>value>4);
console.log(v);// 5

