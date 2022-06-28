var people = [
    {name: "Tergel", number: 88127462},
    {name: "Saruul", number: 99192025},
    {name: "Dulguun", number: 97502221},
    {name: "Enkhsaikhan", number: 80526472},
    {name: "Chingun", number: 95123656},
    {name: "Tsagaanbars", number: 88889776},
    {name: "Uchralt", number: 88802585},
    {name: "Anurad", number: 99114887},
    {name: "Emujin", number: 99569876},
    {name: "Nominzul", number: 92568425}
]

const axios = require('axios')
const readline = require('readline-sync')

var people

console.log('Commands:\n    "s" - to sort by alphabet\n    "l" - to list all users\n    "o" - to get operator number\n    "q" - to quit')
var inp = readline.question('Enter action: ')

function sortNames(arr) {
    arr.sort(function(a, b) {
        var name1 = a.name.toLowerCase();
        var name2 = b.name.toLowerCase();
        if (name1 > name2) {
            return 1
        } else if (name1 < name2) {
            return -1
        } else {
            return 0
        }
    })
    return arr
}

function getNumberOperator(arr, inp) {
    var num = 0, unitel = 8, mobicom = 9
    if(inp.toLowerCase() == 'm') {
        for (var i=0; i<arr.length; i++) {
            if (Number(String(arr[i].number).charAt(0)) == mobicom) {
                num += 1
            }
        }
        return 'There are ' + num + ' numbers of Mobicom.'
    } else if (inp.toLowerCase() == 'u') {
        for (var i=0; i<arr.length; i++) {
            if (Number(String(arr[i].number).charAt(0)) == unitel) {
                num += 1
            }
        }
        return 'There are ' + num + ' numbers of Unitel.'
    } else {
        return 'Invalid operator!!'
    }
}

while (inp.toLowerCase() != 'q') {

    if (inp.toLowerCase() == 's') {
    axios.get('http://localhost:5000/users').then(resp => {
        people = resp.data
    }) 
    sortNames(people);
    console.log('Sorted.')
    var inp = readline.question('Enter action: ');
    } else if (inp.toLowerCase() == 'o') {
        var inp_op = readline.question('Enter operator: "m" for mobicom, "u" for unitel ')
        axios.get('http://localhost:5000/users').then(resp => {
            people = resp.data
            getNumberOperator(people, inp_op)
    }) 
        console.log(getNumberOperator(people, inp_op))
        var inp = readline.question('Enter action: ');
    } else if (inp.toLowerCase() == 'l') {
        console.log(people)
        var inp = readline.question('Enter action: ');
    } else {
        console.log('Invalid command!')
        var inp = readline.question('Enter action: ');
    }
}

