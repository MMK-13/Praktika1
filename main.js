var app = new Vue({
	el: '#app',
	data: {
		inputs: '',
		output: 0,
	},
	methods: {
		addNumber: function(number) {
			this.inputs += number;
		},
		addOperator: function(operator) {
			let operators = ['+', '-', '/', '*'];
			if (operator.includes(operator)) {
				this.inputs += operator;
			}
		},
		clear: function() {
			this.inputs = '';
			this.output = 0;
		},
		result: function() {
			this.output = eval(this.inputs);
		}
	}
})