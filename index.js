const btnE1=document.getElementById("btn");
const bmiInputE1=document.getElementById("bmiresult");
const weightconditionE1=document.getElementById("weight-condition");



function calcluateBMI(){
    const heightValue=document.getElementById("height").value/100 
    const weightValue=document.getElementById("weight").value

    const bmiValue=weightValue /(heightValue*heightValue)

    bmiInputE1.value=bmiValue;

    if(bmiValue<18.5){
        weightconditionE1.innerText="Under Weight";
    }
    else if(bmiValue >= 18.5 && bmiValue<=24.9){
        weightconditionE1.innerText="Normal Weight";
    }
    else if(bmiValue >=25 && bmiValue <=29.9){
        weightconditionE1.innerText="OverWeight"
    }
    else if(bmiValue >=30){
        weightconditionE1.innerText="Obesity";
    }


    

}

btnE1.addEventListener("click",calcluateBMI)