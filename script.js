var h1 = document.getElementById('title')
var input = document.getElementById('display')
var table = document.getElementById('tableCalc')



h1.textContent = 'Título'
input.setAttribute('placeholder', '0.00')


for(let i = 0; i < 3; i++){
    var row = table.insertRow(i)

    for(let j = 0; j < 3; j++){
        var cell = row.insertCell(j)
        
        var button = document.createElement('button')
        button.innerHTML = `${(i*3+j+1)}`

        cell.appendChild(button)
    }
}




