function arithmetic()
{
    let n1 = parseInt(prompt("Enter first number", ""));
let n2=parseInt( prompt("Enter second number", ""));
let op = prompt("Enter the operator (+, -, *, /, %):");
let res;
switch(op)
{
    case '+':
        res=n1+n2;
        break;
    case '-':
        res=n1-n2;
        break;
    case '*':
        res=n1*n2;
        break;
    case '/':
        res=n1/n2;
        break;
    case '%':
        res=n1%n2;
        break;
    default:
        alert("Invalid operation. Please use +, -, *, /, or %.");
        break;
}
alert(`The result of ${n1} ${op} ${n2} is: ${res}`);
}
