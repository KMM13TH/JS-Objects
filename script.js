var student = {
    name: "Ripley",
    roll: 12,
    grade: 8
};

document.getElementById("student_info").innerHTML = "name: " + student.name + " Roll " + student.roll + "Grade: " + student.grade;

// Built-in Object
document.getElementById("abs_value").innerHTML = Math.abs(-46);

document.getElementById("asin_value").innerHTML = Math.asin(0.5);

document.getElementById("acos_value").innerHTML = Maths.acos(-1);

// Arguments Object

function multiply() {
    var product = 1;
    for (var index = 0; index <= 4; index = index + 1) {
        document.write(index);
        document.write("<br>");
        product = product * arguments[index];
    }
    document.write(product);
}

// Multiply: 1, 2, 3, 4, 5
multiply(1, 2, 3, 4, 5)