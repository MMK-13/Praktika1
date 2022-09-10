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
			if (this.inputs[this.inputs.length -1] != '+' && this.inputs[this.inputs.length -1] != '-' && this.inputs[this.inputs.length -1] != '/' && this.inputs[this.inputs.length -1] != '*') {
				this.inputs += operator;
			}
		},
		clear: function() {
			this.inputs = '';
		},
		result: function() {
			this.output = eval(this.inputs);
		}
	}
})