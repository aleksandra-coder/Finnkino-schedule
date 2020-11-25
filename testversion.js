
// fucntion is called after the user clicks the search button
function loadDoc() {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
    
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //    save the response data in a variable
            var xmlDoc = xmlhttp.responseXML;
            // use getElementsByTagName to easily get data from xml files by tags
            var movieTitle = xmlDoc.getElementsByTagName("Titles");
            var theaterNames = xmlDoc.getElementsByTagName("Name");
            var theaterIDs = xmlDoc.getElementsByTagName("ID");
                        
            // looping through the data by tags and adding them to the table, fetching title, genres, image (only link) I have to figure out how to display photo, language
            for (i = 0; i <theaterNames.length; i++) { 
                var theaterID = theaterIDs[i].innerHTML;
                var theaterText = theaterNames[i].innerHTML;                

                document.getElementById("theaterNames").innerHTML += "<option value='" + theaterID + "'>" + theaterText + "</option>";
            }    
        }        
    }
}

$(document).ready(function(){
    loadDoc();
});