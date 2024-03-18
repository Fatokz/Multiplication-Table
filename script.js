let out = document.getElementById("show");
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");

function get() {
    out.innerHTML = ""
    if(inp1.value > inp2.value){
        alert("Incorrect arrangement the first input must be lesser than the second input");
    }
    else{
        for(let i = inp1.value; i <= inp2.value; i++){
            for(let k = 1;  k <= 20; k++){
                out.innerHTML += `<h1> ${i} * ${k} = ${i * k}</h1>`
            }
        }
    }
}