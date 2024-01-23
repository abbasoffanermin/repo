let first_num = Number(prompt("ilk ədədi daxil edin"))
let operation = prompt("əməliyyatı daxil edin")
let second_num = Number(prompt("Ikinci ədədi daxil edin"))
const obj = {}
obj.first_num = first_num
obj.second_num = second_num
obj.operation = operation

if (obj.operation == "+") {

    console.log("nəticə:", obj.first_num + obj.second_num);
} else if (obj.operation == "-") {
    console.log("nəticə:", obj.first_num - obj.second_num);
} else if (obj.operation == "/") {
    console.log("nəticə:", first / obj.second_num);
} else if (obj.operation == "*") {
    console.log("nəticə:", first * obj.second_num);
} else {
    console.log("Əməliyyatı düzgün daxil edin");
}

