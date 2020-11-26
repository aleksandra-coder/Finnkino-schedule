function loadSchedule(area, eventID, date) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=" + area + "&dt=" + date + "&eventID=" + eventID, true);
    xmlhttp.send();    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        populateData(this);
      }
    };    
}

function loadQueryValues() {
    // load values from query strings
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function populateData(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var movieTitle = xmlDoc.getElementsByTagName("Show"); 
    table = "";
    
    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("RatingLabel")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("LengthInMinutes")[0].childNodes[0].nodeValue + "</td><td>";
                   
    }
    document.getElementById("detail").innerHTML += table;
  }

$(document).ready(function () {
    // Get event id, time (window.location)
    var queryValues = loadQueryValues();
    // Load schedule (xml rest api)
    loadSchedule(queryValues["area"], queryValues["eventID"], queryValues["dt"]);
});