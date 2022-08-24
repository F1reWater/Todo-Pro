let inptask = document.querySelector('.inp-task')
let inpdescr = document.querySelector('.inp-descr')
let inpday = document.querySelector('.inp-day')
let inpmonth = document.querySelector('.inp-month')
let btnadd = document.querySelector('.add')
let important1 = document.querySelectorAll('.important1')
let important2 = document.querySelectorAll('.important2')
let important3 = document.querySelectorAll('.important3')


let thisDay = new Date().getDate()

let arr = JSON.parse(localStorage.getItem('todos')) || [
    {
        name: 'Buy iPhone' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 22 ,
        month: 'august'
    } ,
    {
        name: 'Buy milk' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 22 ,
        month: 'august'
    } ,
    {
        name: 'Buy moon' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 22 ,
        month: 'august'
    } ,
    {
        name: 'Complete all works' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 23 ,
        month: 'august'
    } ,
    {
        name: 'Buy car' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 23 ,
        month: 'august'
    } ,
    {
        name: 'Go to a cafe' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 23 ,
        month: 'august'
    } ,
    {
        name: 'Talk to the teacher' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 27 ,
        month: 'september'
    } ,
    {
        name: 'Buy gift' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 31 ,
        month: 'august'
    } ,
    {
        name: 'Read the book' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 13 ,
        month: 'october'
    } ,
    {
        name: 'Make a presentation' ,
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cum.' ,
        day: 24 ,
        month: 'september'
    } , 
]
let today = document.querySelector('.today')
let tomorrow = document.querySelector('.tomorrow')
let later = document.querySelector('.later')
let spanToday = document.querySelector('.span-today')
let spanTomorrow = document.querySelector('.span-tomorrow')
let spanLater = document.querySelector('.span-later')
let all = document.querySelector('.all')
let i = 0
let a = 0
let b = 0
let c = 0

function create(data) {
    data.forEach(item => {
        let box = document.createElement('div')
        let task = document.createElement('h4')
        let description = document.createElement('span')
        let status = document.createElement('span')
        let checkbox = document.createElement('input')

        box.classList.add('box')
        task.classList.add('task')
        description.classList.add('description')
        status.classList.add('status')
        checkbox.classList.add('check')

        task.innerHTML = item.name
        description.innerHTML = item.descr

        checkbox.type = 'checkbox'

        box.append(task)
        box.append(description)
        box.append(status)
        box.append(checkbox)


        let time = item.day - thisDay
        if (time === 0) {
            status.innerHTML = 'Today'
        } else if (time === 1) {
            status.innerHTML = 'Tomorrow'
        } else {
            status.innerHTML = item.day + " " + item.month
        }

        if(status.innerHTML.toLowerCase() === 'today') {
            today.append(box)
                i++
                c++
                all.innerHTML = c
                spanToday.innerHTML = i
        } else if (status.innerHTML.toLowerCase() === 'tomorrow') {
            tomorrow.append(box)
            a++
            c++
                all.innerHTML = c
            spanTomorrow.innerHTML = a
        } else {
            later.append(box)
            b++
            c++
                all.innerHTML = c
            spanLater.innerHTML = b
        }
    });
    localStorage.setItem('todos' , JSON.stringify(arr))
}
create(arr)

// inpday.onkeyup = () => {
//     let num = 0
//     let num2 = 0 - inpday.value 
//     console.log(num2)
// }

btnadd.onclick = () => {
    let num2 = 0 - inpday.value 
    let obj = {
        name: inptask.value , 
        descr: inpdescr.value ,
        day: inpday.value ,
        month: inpmonth.value
    }
        if (inptask.value.length > 0) {
           if (inpday.value.length > 0) {
            if (inpmonth.value.length > 0) {
                // if (num2 == "NaN") { 
                //     alert('Enter date!')  
                // } else{
                    arr.push(obj)
                    today.innerHTML = ''
                    tomorrow.innerHTML = ''
                    later.innerHTML = ''
                     i = 0
                    a = 0
                    b = 0
                    c = 0
                    create(arr)  
                // }
            } else {
                alert('fill placeholders!')
            }
           } else {
            alert('fill placeholders!')
        }
        } else {
            alert('fill placeholders!')
        }
}
