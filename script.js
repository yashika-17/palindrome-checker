const input=document.getElementById("input");
function check(){
    const value=input.value;
    const reverse=reverseStr(value);
    if(value===reverse){
        alert("Yes!! it is a palindrome")
    }
    else{
        alert("Nope:( it is not a palindrome");
    }
}
function reverseStr(str){
    return str.split("").reverse().join("");

}