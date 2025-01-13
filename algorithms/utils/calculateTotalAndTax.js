export function calculateTotalAndTax(cart, tax){
    
    let amount = cart.reduce((total, item) => {
        return total + (item.quantity * item.price)
    }, 0)

    return amount + (amount* tax)/100
}
