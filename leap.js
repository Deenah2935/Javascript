let year= Number(prompt("Enter year:"));
let result=(year%4==0 && year%100) ||( year%400===0)
    ? "Leap year"
    : "Not a leap year";
alert(result);
