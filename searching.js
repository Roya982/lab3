var student=prompt("are you a med student?");
var work=prompt("do you work in the medical field?");

var welcommessage;

if(student == "yes"){
    welcommessage="you're in the right place welcome";
}
else if(work == "yes"){
    welcommessage="you're a bit advanced, but welcome anyway";
}
else{
    welcommessage="if you're a curios person I hope you enjoy";
}

document.write(welcommessage);
confirm("are you sure you want to cary on?");
alert("thank you");