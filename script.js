function loadCalendar() {
    //alert("Hello! I am an alert box!!");

    var array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];
    var yearPadding = 2;
    
    for (i = 0 + yearPadding; i < 365 + yearPadding; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(dayToDate(2023, i));
    li.appendChild(text);

    

    li.style.setProperty('background',monthColor(2023, i),'');

    document.getElementById("day-grid").appendChild(li);
    }

}

function monthColor(year, day) {
    colors1 = ["#fafa6e","#cdef72","#a4e27a","#7dd382","#58c389","#35b28e","#0ea18f","#008f8c","#007d85","#146b79","#23596a","#2a4858"]

    colors = ["#1F7A8C","#728f95","#1F7A8C","#728f95","#1F7A8C","#728f95","#1F7A8C","#728f95","#1F7A8C","#728f95","#1F7A8C","#728f95"]

    const date = new Date(year, 0, day);
    let monthnum = date.getMonth()
    return colors[monthnum];
  }



function dayToDate(year, day) {
    const date = new Date(year, 0, day);
    let dayofmonth = date.getDate();
    let month = date.getMonth();
    let text = month + '/' + dayofmonth;  
    return text;
  }


