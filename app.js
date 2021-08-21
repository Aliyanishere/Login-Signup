let signupPage = () => {
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Sign Up
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="exampleInputName1" class="form-label" style="font-size: 17px;">Name:</label>
                    <input type="name" id="name" class="form-control" required>
                    <div id="three" style="color: red;"></div>
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                        address:</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    <div id="one" style="color: red;"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                        style="font-size: 17px;">Password:</label>
                    <input type="password" id="password" class="form-control" required>
                    <div id="two" style="color: red;"></div>
                </div>
                <button
                    style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                    onclick="loginPage()" id="log">Login?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" id="signup" onclick="signup()" class="btn btn-outline-success">Sign Up</button>
        </div>
    </div>
</div>`;
}

let loginPage = () => {
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Login
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                    address:</label>
                <input type="email" id="email2" class="form-control" aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div id="one" style="color: red;"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" style="font-size: 17px;">Password:</label>
                <input type="password" id="password2" class="form-control" required>
                <div id="two" style="color: red;"></div>
            </div>
            <button
                style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                onclick="signupPage()">Sign
                Up?</button>
            <button
                style="float: right; padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                onclick="admin()">Admin?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" onclick="login()" class="btn btn-outline-success">Login</button>
        </div>
    </div>
</div>`
}

let admin = () =>{
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Admin Pannel
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                    address:</label>
                <input type="email" id="adminEmail" class="form-control" aria-describedby="emailHelp" required>
                <div id="one" style="color: red;"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" style="font-size: 17px;">key:</label>
                <input type="password" id="adminKey" class="form-control" required>
                <div id="two" style="color: red;"></div>
            </div>
            <button
                style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                onclick="loginPage()">Login?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" onclick="Adminlogin()" class="btn btn-outline-success">Login</button>
        </div>
    </div>
</div>`
}


let signup = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (name == "") {
        document.getElementById("three").innerHTML = "Please enter your name";
        return false;
    }
    else {
        document.getElementById("three").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (email.indexOf("@") == -1 || email.charAt(email.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (password.length <= 7) {
        document.getElementById("two").innerHTML = "Password must be 8-digits long";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created successfully");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("log").click();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}

let login = () => {
    var email = document.getElementById("email2").value;
    var password = document.getElementById("password2").value;
    if (email == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (email.indexOf("@") == -1 || email.charAt(email.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("two").innerHTML = "Please fill this feild";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        document.getElementById("close").click();
        localStorage.setItem("userEmail",document.getElementById("email2").value);
        window.location.replace("todo.html");
    })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

let Adminlogin = () => {
    var Adminemail = document.getElementById("adminEmail").value;
    var Adminkey = document.getElementById("adminKey").value;
    if (Adminemail == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (Adminemail.indexOf("@") == -1 || Adminemail.charAt(Adminemail.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (Adminkey == "") {
        document.getElementById("two").innerHTML = "Please fill this feild";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    if(Adminemail == "admin@gmail.com" || Adminkey == "Tracing"){
        window.location.replace("adminpage.html");
    }
}

let signout = () => {
    window.location.replace("index.html");
}