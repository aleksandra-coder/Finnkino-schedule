

// fucntion is called after the user clicks the search button
function loadDoc() {
    
var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", url, true);

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //    save the response data in a variable
        var xmlDoc = xmlhttp.responseXML;
        // use getElementsByTagName to easily get data from xml files by tags
    var movieTitle = xmlDoc.getElementsByTagName("Show");
    var table ="<Shows>";
    // looping through the data by tags and adding them to the table, fetching title, genres, image (only link) I have to figure out how to display photo, language
    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td></tr>" + movieTitle[i].getElementsByTagName("RatingImageUrl")[0].childNodes[0].nodeValue + "</td></tr>" + movieTitle[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td></tr>" + movieTitle[i].getElementsByTagName("PresentationMethodAndLanguage")[0].childNodes[0].nodeValue + "<br>";
        console.log(table);
        document.getElementById("schedule").innerHTML = table;
    }
    
    }
        
}
// for each selected cinema from the list, get data for this cinema
    var selectCinema = document.getElementById("searchCinema").value;
    if ( selectCinema == "Omena") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Sello") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Itis") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Kinopalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Maxim") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Tennispalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033&dt=23.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Flamingo") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013&dt=23.11.2020", true);
        xmlhttp.send();
    } 
    //xmlhttp.send();
}


    