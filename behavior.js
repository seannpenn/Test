function validate() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("password").value;

    if (text == "admin" && password == "pass") {

        alert("Welcome Sean Milbert!");
        return false;
    } else {
        alert("Enter your right credentials!!");
    }





}