
function calculateMonthlyIncome(income){

    const numberOfMonths = 12;
    return income / numberOfMonths

}


const $calculateButton = document.querySelector("#calculate-income")
$calculateButton.onclick = function(){

    const anualIncome = Number(document.querySelector("#anual-income").value)
    const monthlyIncome = calculateMonthlyIncome(anualIncome)
    document.querySelector("#monthly-income").value = monthlyIncome;

    return false;

}