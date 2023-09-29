function handleGetFormData(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const inputData = {
        height : Number(height),
        weight : Number(weight)
    };

    return inputData;
}

function calculateBmi(){
    const inputUser = handleGetFormData();

    console.log(inputUser);

    return Math.round(inputUser.weight / ((inputUser.height / 100) ** 2));
    

}

function showResult(){
    const valueBmi = calculateBmi();

    if (valueBmi <= 18.5){
        return "Underweight 🙁";
    } else if (valueBmi >= 18.5 && valueBmi <= 24.9){
        return "Normal weight 😊";
    } else if (valueBmi >= 25 && valueBmi <= 29.9){
        return "Overweight 😥";
    } else if (valueBmi >= 30){
        return "Obesity 😱";
    }
}


function submit(event) {
    event.preventDefault();

    resultBmi = calculateBmi();
    resultCategory = showResult();

    displayResult = document.querySelector('.result-section p');

    if (!isNaN(resultBmi) && resultBmi !== undefined) {
        displayResult.innerHTML = `Your BMI is <span>${resultBmi}</span> which means You are <span>${resultCategory}</span>`;
    } else {
        displayResult.innerHTML = "<span #warning>👆 Harap masukkan data pada form kosong 👆</span>";
    }
}


const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submit);