let currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMMM Do')); //format example --> Wednesday, April 13th 

let containerEl = $('.container');

function createCalender() {
    for (let i=9; i<24;i++) {
        let timeBlockEl = $('<div>');
        timeBlockEl.addClass('time-block');
        let hourContainerEl = $('<div>');
        hourContainerEl.addClass('hour');
        hourContainerEl.text(i);
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
    }
}

createCalender()