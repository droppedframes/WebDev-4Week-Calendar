function loadCalendar() {

    var year = 2022
    var yearPadding = 3;
    
    for (i = 0 + yearPadding; i < 365 + yearPadding; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(dayToDate(year, i));
    li.appendChild(text);
    li.style.setProperty('background',monthColor(year, i),'');
    
    const today = new Date();
    const calDate = new Date(year, 0, i);

    if (today.toDateString() === calDate.toDateString()){
        li.style.setProperty('background','red','');
    }

    document.getElementById("day-grid").appendChild(li);
    }

}

function monthColor(year, day) {
    
    var color1 = "#eeeeee"
    var color2 = "#ffffff"
/*
    var color1 = "#1F7A8C"
    var color2 = "#728f95"

    */
    var colorgradeient = ["#fafa6e","#cdef72","#a4e27a","#7dd382","#58c389","#35b28e","#0ea18f","#008f8c","#007d85","#146b79","#23596a","#2a4858"]

    var colors = [color1,color2,color1,color2,color1,color2,color1,color2,color1,color2,color1,color2]

    const date = new Date(year, 0, day);
    let monthnum = date.getMonth()
    return colors[monthnum];
  }



function dayToDate(year, day) {
    const date = new Date(year, 0, day);
    let dayofmonth = date.getDate();
    /*let month = date.getMonth() + 1;
    let text = month + '/' + dayofmonth */;  
    let text = dayofmonth;
    return text;
  }


