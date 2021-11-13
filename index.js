let num = '';
let answer = '';
function add(value){
    num += value;
    document.getElementById('result').value = num;
}
function ans(){
    answer = eval(num);
    document.getElementById('result').value = answer;
    answer = '';
    num = '';
}
function clr(){
    num = '';
    document.getElementById('result').value = '';
}