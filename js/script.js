const multiplicacaoForm = document.querySelector("#multiplicacao-form");
const numberInput = document.querySelector("#number");
const multiplicationNumber = document.querySelector("#multiplicator");

multiplicacaoForm.addEventListener("click", (e)=>{
    e.preventDefault();
    const insertNumber = +numberInput.value;
    const insertNumberMultiplication = +multiplicationNumber.value;
    if(!insertNumber || !insertNumberMultiplication)return
    createTable(insertNumber, insertNumberMultiplication)
})

function createTable (number, multiplicationNumber) {
    const operations = document.querySelector("#multiplication-operations");
    operations.innerText = "";

    for(i = 1; i <= multiplicationNumber; i++){
        const result = number * i;
        const calcular = `
        <div class="row">
            <div class="operation">
                ${number} x ${i} = 
            </div>
            <div class="result">${result}</div>
        </div>
        `;
        
        parse = new DOMParser();
        const htmlCalcular = parse.parseFromString(calcular, "text/html");
        const row = htmlCalcular.querySelector(".row");
        operations.appendChild(row);
    }
    const multiplicationTitle = document.querySelector("#multiplication-title span");
    multiplicationTitle.innerText = number;
}