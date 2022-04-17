let containerEl = $('.container');
let currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMMM Do')); //displays current date on page in format --> Wednesday, April 13th 

let currentHourMinute = moment().format(); //format example --> 2022-04-14T13:07:00-07:00
let currentHour = currentHourMinute[11]+currentHourMinute[12]; //returns just the hour 01-24

containerEl.on('click', 'button', saveText) //targets all buttons that are within the containerEl tree

//This function creates all the time blocks for the calender and appends them to page
function createCalender() {
    for (let i=9; i<18;i++) {
        let timeBlockEl = $('<div>');
        timeBlockEl.addClass('time-block');
        let hourContainerEl = $('<div>');
        hourContainerEl.addClass('hour');
        let rowEl = $('<div>');
        rowEl.addClass('row');
        let inputTextEl = $('<textarea>');
        inputTextEl.text(localStorage.getItem(`toDo${i}`) || ''); //creates a local storage for each textarea
        let lockButtonEl = $('<button>');
        lockButtonEl.append('<i class="fa-solid fa-floppy-disk"></i>');//adds save icon to button
        lockButtonEl.addClass('saveBtn');
        lockButtonEl.attr('id', `${i}`) //each button has different id (used to match button to textarea for saving text)
        containerEl.append(timeBlockEl);
        timeBlockEl.append(hourContainerEl);
        timeBlockEl.append(rowEl)
        rowEl.append(inputTextEl);
        rowEl.append(lockButtonEl);
        setHour(i, hourContainerEl);
        setColor(i, inputTextEl);
    }
}

function setHour(hour, hourEl){ //sets the displayed hour for each time block
    if (hour < 12) { //when hour is less than 12, we append am to hour
        hourEl.text(hour + 'am');
    }
    else if (hour == 12) { //when hour equals 12, we append pm to hour
        hourEl.text(hour + 'pm');
    }
    else {  //when hour is greater than 12, we want to restart and show (1pm-11pm) so we subtract 12 from hour
        hourEl.text(hour-12 +'pm');
    }
}

//depending on the current hour, the background of textarea will change
function setColor(i, inputEl) {
    if (i < currentHour) {//makes background grey for timeblocks that have past
        inputEl.addClass('past');
    }
    else if (i==currentHour) {//makes the current timeblock background red
        inputEl.addClass('present');
    }
     else {//makes future timeblocks green
         inputEl.addClass('future')
     }
}

//saves the text of each individual textarea to local storage on button click
function saveText() {
    for (let i=9; i<18;i++){
        if ($(this).attr('id') == i) { //matches the id of the button that was clicked to the specified local storage
            localStorage.setItem(`toDo${i}`, $(this).siblings().val()); 
        }
    }
}

createCalender()