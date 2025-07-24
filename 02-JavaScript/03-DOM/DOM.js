// JavaScript source code
let check = document.getElementById("check");
check.innerHTML = "Hello DOM";
console.log(check.outerHTML);

let confinguration = document.getElementById("configuration");
confinguration.append("append();");
confinguration.prepend("prepend();");
confinguration.before("h2 добавление элементов к ноде h2;");
confinguration.after("end");