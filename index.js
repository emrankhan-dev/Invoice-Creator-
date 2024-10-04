/* My JS*/

const addBtn = document.getElementById('add-btn')
const input = document.getElementById('input')
const price = document.getElementById('price')
const task = document.getElementById('task')
const total = document.getElementById('total')

addBtn.addEventListener('click', addTask)

function addTask() {
    let inputValue = input.value
    let priceValue = price.value

    if (inputValue) {
        const newRow = document.createElement('tr')
        newRow.innerHTML += `
            <td class="flex">${inputValue}<p class="remove">Remove</p></td>
            <td>Tk ${priceValue}</td>
        `
        task.append(newRow)
        newRow.querySelector('.remove').addEventListener('click', function() {
            newRow.remove()
            updateTotal(-Number(priceValue))
        })
        updateTotal(Number(priceValue))
        clearInput()
    }
    

}

function updateTotal(amount) {
    const currentTotal = Number(total.innerText.substring(3)) || 0
    const newTotal = currentTotal + amount
    total.innerText = `Tk ${newTotal}`
}

function clearInput() {
    input.value = ""
    price.value = ""
}

