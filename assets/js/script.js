let containerEl = $('.container');
let currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMMM Do')); //format example --> Wednesday, April 13th 

let currentHourMinute = moment().format('LT');
let currentHour = currentHourMinute[0]+currentHourMinute[1];

let amOrPm = currentHourMinute[6]+currentHourMinute[7]
if (amOrPm == 'PM' && currentHour!=12) {
    currentHour = currentHour +12;
}


function createCalender() {
    for (let i=9; i<24;i++) {
        let timeBlockEl = $('<div>');
        timeBlockEl.addClass('time-block');
        let hourContainerEl = $('<div>');
        hourContainerEl.addClass('hour');
        let rowEl = $('<div>');
        rowEl.addClass('row');
        let inputTextEl = $('<input>');
        let lockButtonEl = $('<button>');
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


createCalender()