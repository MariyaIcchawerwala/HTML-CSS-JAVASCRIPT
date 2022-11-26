console.log("this is for a tutorial");

let name1='mariya';
let name2='harry';
let name3='shubham';
let text='goodmorning'
// funtionn
function greet(name, text='hey')//this hey is default value for text when text will will not be passed then this value will be used if any value we have passed then it uses that passed value
{
       console.log(text +" "+name);
       console.log(name +" is a good person");
}
greet(name1);
greet(name2,text);
greet(name3,text);

function sum(a,b,c){
    let d=a+b+c;
    return d;
}
let num=sum(10,30,40);
console.log(num);