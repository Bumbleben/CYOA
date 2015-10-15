var userPass = {ben175:"bensam", happy:"yolo", sexy:"shmexy"}
var checkPass = function() {
	var user = prompt("Put in your username.","Username");
	var pass = prompt("Put in your password.", "Password");
	if (userPass[user] === pass) {
		alert("We're in.")
	} else {
		alert("We're still trying.")
	}
}