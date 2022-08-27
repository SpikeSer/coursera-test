;(function (window) {
	var johnGreeter = {}

	johnGreeter.name = 'John'
	johnGreeter.sayHi = function () {
		console.log('Hi ' + johnGreeter.name)
	}
	window.johnGreeter = johnGreeter
})(window)
