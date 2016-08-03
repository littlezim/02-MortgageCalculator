/*
$("#btnCalculateWeight").clic(function()) {
	var userWeight = $("#userWeight").val();

	var planetWeight = $('#planetWeight option:selected').text();
	var planetValue = $('#planetWeight option:selected').val();

	var weightOnPlanet = userWeight * planetMultiplier;

	$("#output").text('If you wer on ' + planetName + ', you would weigh' + weightOnPlanet + ' lbs.');
}
*/
$("#btnCalculate").click(function() {
	var loanB = $('#loanBalance').val();					//asign input variables
	var interestR = $('#interestRate').val();
	var loanT = $('#loanTerm').val();
	var loanP = $('#period option:selected').text();		
	var loanCheck 
	var interestCheck 
	var termCheck

	if (loanP === "Monthly"){							//check and asign select values
		loanP = 12
	}
	else {
		loanP = 6
	}
 
	if (isNaN(loanB)){
		loanCheck = false
	}
	else {
		loanCheck = true;
	}

	if (isNaN(interestR)){
		interestCheck = false
	}
	else {
		interestCheck = true;
	}
	if (isNaN(loanT)){
		termCheck = false
	}
	else {
		termCheck = true;
	}


	if (loanCheck === true && interestCheck === true && termCheck === true){
		var numberOfPayments = loanT * loanP;						

		var monthlyInterestRate = (interestR / 100) / loanP;

		var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);	//possible syntax error

		var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

		var monthlyPayment = Math.round((loanB * interestQuotient) * 100) / 100;

		$("p1").html('Your mortgage payment will be $' + monthlyPayment);
	}
	else{
		$("p1").html('Please input correct values in the fields above.');
	}
});