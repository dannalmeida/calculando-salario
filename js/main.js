$(document).ready(function () {
	$('#botao').click(function() {
		salarioBruto = $('#appendedInputButton').val();
		if (salarioBruto <= 1174) {
			descontoInss = salarioBruto*0.08;
		}
		else if(salarioBruto > 1174 && salarioBruto <= 1958){
			descontoInss = salarioBruto*0.08;
		}
		else if (salarioBruto > 1958 && salarioBruto <= 3916) {
			descontoInss = salarioBruto*0.11;
		}
		else {
			descontoInss = 430;
		};
		salarioIR = salarioBruto - descontoInss;
		if (salarioIR <= 1637) {
			descontoIR = 0;
		}
		else if (salarioIR > 1637 && salarioIR <= 2453) {
			descontoIR = (salarioIR*0.075)-122;
		}
		else if (salarioIR > 2453 && salarioIR <= 3271) {
			descontoIR = (salarioIR*0.15)-306;
		}	
		else if (salarioIR > 3271 && salarioIR <=4087) {
			descontoIR = (salarioIR*0.225)-552;
		};

		somaDescontos = descontoIR + descontoInss;
		salarioLiquido = salarioBruto - somaDescontos;

		$('<h5> '+descontoInss+' </h5>').insertAfter('h4#inss');
		$('<h5> '+descontoIR+' </h5>').insertAfter('h4#ir');
		$('<h5> '+salarioLiquido+' </h5>').insertAfter('h4#liquido');
		return false;	
	})
})