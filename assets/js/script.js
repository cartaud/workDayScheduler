let containerEl = $('.container');
let currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMMM Do')); //format example --> Wednesday, April 13th 

let currentHourMinute = moment().format(); //format example --> 2022-04-14T13:07:00-07:00
let currentHour = currentHourMinute[11]+currentHourMinute[12]; //returns just the hour 01-24
containerEl.on('click', 'button', saveText)
function createCalender() {
    for (let i=9; i<24;i++) {
        let timeBlockEl = $('<div>');
        timeBlockEl.addClass('time-block');
        let hourContainerEl = $('<div>');
        hourContainerEl.addClass('hour');
        let rowEl = $('<div>');
        rowEl.addClass('row');
        let inputTextEl = $('<textarea>');
        let lockButtonEl = $('<button>');
        lockButtonEl.append('<i class="fa-solid fa-floppy-disk"></i>');
        lockButtonEl.addClass('saveBtn');
        containerEl.append(timeBlockEl);
        timeBlockEl.append(hourContainerEl);
        timeBlockEl.append(rowEl)
        rowEl.append(inputTextEl);
        rowEl.append(lockButtonEl);
        setHour(i, hourContainerEl);
        setColor(i, inputTextEl);
    }
}

function setHour(hour, hourEl){
    if (hour < 12) {
        hourEl.text(hour + 'am');
    }
    else if (hour == 12) {
        hourEl.text(hour + 'pm');
    }
    else {
        hourEl.text(hour-12 +'pm');
    }
}

function setColor(i, inputEl) {
    if (i < currentHour) {
        inputEl.addClass('past');
    }
    else if (i==currentHour) {
        inputEl.addClass('present');
    }
     else {
         inputEl.addClass('future')
     }
}

function saveText(e) {
    console.log($(this).siblings().val())
}

createCalender()