const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function funcView() {
    document.getElementById("age").innerHTML = person.age;
    document.getElementById("name").innerHTML = person.firstName;
    document.getElementById("surname").innerHTML = person.lastName;
    document.getElementById("eyeColor").innerHTML = person.eyeColor;
    document.getElementById("pPhoto").style.display = "none";
    document.getElementById("imgPhoto").style.display = "block";
}