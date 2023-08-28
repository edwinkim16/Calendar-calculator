function add(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 + num2;
}

function subtract(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 - num2;
}

function multiply(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 * num2;
}

function divide(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 / num2;
}

// Calendar code 

function validate(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    

    if(num1==''){
        alert('enter num1');
        num1.focus();
        return false;
        
    }else if(num2=='') {
        alert('enter num2');
        num2.focus();
        return false
    }else
    return false
   
}

const calendarContainer = document.getElementById("calendar");
function createCalendar(year,month){
    const daysInMonth = new Date (year, month + 1,0).getDate();
    const firstDayOfWeek = new Date(year,month,1).getDay();

    let calendarHTML = "";

    for (let i=0;i<firstDayOfWeek;i++){
        calendarHTML+= "<div class='day'></div";
    }

    for (let day=1;day<=daysInMonth;day++){
        calendarHTML+= `<div class="day">${day}</div>`;
       
    }

    calendarContainer.innerHTML = calendarHTML;
   
}

const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());