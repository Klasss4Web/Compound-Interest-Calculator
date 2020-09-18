document.getElementById('loan-form').addEventListener('submit', computeResult);

//Calculate Payments: Amount Borrowed and Payable
function computeResult(e){
    

    //UI variables
    const amount = document.getElementById('principal');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    //Compound Interest Calculations
    const principal = parseFloat(amount.value);
    const time = years.value;
    const rate = parseFloat(interest.value/100);
    const y = Math.pow(1 + rate, time);
    const calculatedPayments = principal*y;
    const calculatedInterest = calculatedPayments-principal;
    const monthly = calculatedPayments/12;
   

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = calculatedPayments.toFixed(2);
        totalInterest.value = calculatedInterest.toFixed(2);
        
    }else{
        displayError('Please check your input values');
    }

    e.preventDefault();
}

//Display Error
function displayError(error){
    //create a div element for the error message
    const errorDiv = document.createElement('div');

    //Get HTML Elements for the Placing of the Error Message(errorDiv)
    const headers = document.getElementById('headers');
    const heading = document.getElementById('heading');

    //Add Class to the errorDiv
    errorDiv.className = 'errorAlert';

    //Create Text Node and append to the created errorDiv
    errorDiv.appendChild(document.createTextNode(error));

    //Adding Styles to The Error Message
    errorDiv.style.backgroundColor = "red";
    errorDiv.style.height = "30px";
    errorDiv.style.color = "white";

    // Insert error above heading

    headers.insertBefore(errorDiv, heading);

    //Clear after 3 seconds
    setTimeout(clearError, 3500);

    
}
    //Clear error
    function clearError(){
        document.querySelector('.errorAlert').remove();
    }