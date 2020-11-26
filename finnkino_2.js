// fucntion is called after the user clicks the search button
function loadDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    // for each selected cinema from the list, get data for this cinema
    var selectCinema = document.getElementById("searchCinema").value;
    if ( selectCinema == "Omena") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Sello") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Itis") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Kinopalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Maxim") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Tennispalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033&dt=25.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Flamingo") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013&dt=25.11.2020", true);
        xmlhttp.send();
    } 
    
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var movieTitle = xmlDoc.getElementsByTagName("Show"); 
    table = "";

    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td><img src='" + movieTitle[i].getElementsByTagName("EventSmallImageLandscape")[0].childNodes[0].nodeValue + "'/></td><td>" + movieTitle[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("PresentationMethodAndLanguage")[0].childNodes[0].nodeValue + "</td><td>" ;
                   
    }
    document.getElementById("schedule").innerHTML += table;
  }
