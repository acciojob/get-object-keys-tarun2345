//your JS code here. If required.
let student={
	name:"tarun",
}

Object.prototype.getKeys = function () {
	return Object.keys(student);
}

let ans = student.getKeys();