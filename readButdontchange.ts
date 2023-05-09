// You are building an application that involves managing a list of orders.
// Each order has an ID, a date, and a total amount. You want to make the ID property read-only,
// so that it cannot be changed once it is set.

interface Order {
    readonly id: number,
    date: string,
    totalAmount: number

}

// Error free Order
const useOrder = (order: Order): void => {
    console.log(`The id of the order is ${order.id} and we have ${order.totalAmount} orders`)
}

// This won't work
const breakTheOrder = (order: Order): string=> {
    // order.id = 2324443; this line will the break the funct
    return `the commented line will the break the code`
}