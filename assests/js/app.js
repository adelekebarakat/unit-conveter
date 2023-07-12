document.addEventListener("DOMContentLoaded", () => {
    const converter = document.getElementById("convert")
    const fromTo = document.getElementById("inputField")
    const fromToUnit = document.getElementById("unit-btn")
    const changeLabel = document.getElementById("label")
    const outputField = document.getElementById("output")





converter.addEventListener("click", (event) => {
    event.preventDefault()

    const convert = () => {
        const unitConvert = parseInt(fromTo.value);
        
        


        // validate input field

        const validateinputField = (unitConvert) => {
            if (unitConvert <= 0) {
             alert("please enter valid number")
            }
            //  else if(unitConvert === String()){
            //     alert("enter something")
            // } 
            else if(unitConvert>0){

                // start convertion
                const fromUnit = fromToUnit.value;
                

                if (fromUnit == "Meter(m) to Centimeter(cm)"){
                    ans = unitConvert * 100;
                    

                } else if (fromUnit == "Centimeter(cm) to meter(m)"){
                    ans = unitConvert / 100
                   
                } else if(fromUnit =="Milimeter(mm) to centimter(cm)"){
                    ans = unitConvert / 10
                    
                }
                else if(fromUnit =="Centimeter(cm) to Milimeter(mm)"){
                    ans = unitConvert * 10
                    
                }else{
                    ans = unitConvert / 12
                }
                return ans
                

            }


        }
        
      document.getElementById("resultLine").innerHTML=unitConvert+" " + fromToUnit.value + "= " +  (validateinputField(unitConvert))  + ""
      validateinputField(unitConvert)


      outputField.value = validateinputField(unitConvert)
    }
    
    
    convert()

})


// changing the label

fromToUnit.addEventListener("change", (event) =>{
    const labelTo = () => {
        changeLabel.textContent = fromToUnit.value;
    }

    labelTo()
})
    
    

})