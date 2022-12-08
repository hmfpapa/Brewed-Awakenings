import { getEmployees } from "./database.js"

const employees = getEmployees()

import { getOrders } from "./database.js"

const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const findNumber = (employee) => {
    let numberofProducts = 0
    for (const order of orders){
        if (order.employeeId === employee.id){
            numberofProducts += 1
        }
    }
    return numberofProducts
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("employee")){
            
            const [, employeeId] = itemClicked.id.split("--")
        
            for (const employee of employees){
                if (employee.id === parseInt(employeeId)){
                    let number = findNumber(employee)
                    
                    window.alert(`${employee.name} sold ${number} products`)
                }
            }
        }
    }
)

