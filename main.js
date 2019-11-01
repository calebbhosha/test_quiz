let questions = [];

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        questions.push(myObj);
    }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

console.log(questions);