var arr = [];
function save() {
    var obj = {
        email : document.getElementById("userEmail").value,
        pass : document.getElementById("userPass").value
    }
    if (obj.email === "" || obj.email === " ") {
        alert("email required");
    }
    else if (obj.pass === "" || obj.pass === " ") {
        alert("password required");
    }
    else {
        if (localStorage.getItem("data") === null) {
            localStorage.setItem("data",JSON.stringify(obj));
        }
        else {
            if (arr.length === 0) {
                var data = JSON.parse(localStorage.getItem("data"));
                arr = [data];
            }
            else {
                arr.push(obj);
                localStorage.setItem("data",JSON.stringify(arr));
                console.log(data);
            }
        }
    }
}
function login() {
    email = document.getElementById("userEmail").value;
    pass = document.getElementById("userPass").value;
    if (email === "" || email === " ") {
        alert("email required");
    }
    else if (pass === "" || pass === " ") {
        alert("password required");
    }
    else {
        data = localStorage.getItem("data");
        data = JSON.parse(data);
        if (data.email === email && data.pass === pass) {
            alert("login successful");
            //document.getElementById("userEmail").value = "";
            //document.getElementById("userPass").value = "";
        }
        else {
            alert("Error")
        }
    }
}