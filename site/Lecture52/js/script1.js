;(function (window) {
	var oleksiiGreeter = {}
	oleksiiGreeter.name = 'Oleksii'
	var greeting = 'Hello '
	oleksiiGreeter.sayHello = function () {
		console.log(greeting + oleksiiGreeter.name)
	}
	window.oleksiiGreeter = oleksiiGreeter
})(window)
