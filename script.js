const res = document.querySelector("#result")

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault()
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    if(height <= 0 || height == "NaN" || height == null){
    res.innerHTML = "Please Enter a valid Height"
    }
    else if(weight <= 0 || weight == "NaN" || weight == null){
    res.innerHTML = "Please Enter a valid Weight"
       }
  
    else {res.innerHTML = "Your BMI is : " + (weight / ((height * height) / 10000).toFixed(2) )}
})