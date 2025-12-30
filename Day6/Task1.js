//Closure mainlly use for hiding private data from outside world
//Example of Private Variable Pattern using Closure
function BankAccount(initialBalance){
    let balance=initialBalance //private variable
    function deposit(amount){
        balance+=amount
        console.log(`Deposited: ${amount}, New Balance: ${balance}`)
    }
    function withdraw(amount){
        if(amount>balance){
            console.log("Insufficient Funds")
        }else{
            balance-=amount
            console.log(`Withdrew: ${amount}, New Balance: ${balance}`)
        }
    }
    return {
        deposit,
        withdraw
    }
}

const myAccount=BankAccount(1000)
myAccount.deposit(500) // Deposited: 500, New Balance: 1500
myAccount.withdraw(200) // Withdrew: 200, New Balance: 1300

//Helps to hide the balance variable from outside world

console.log(myAccount.balance)
 // Insufficient Funds
//console.log(myAccount.balance) // Undefined, cannot access private variable