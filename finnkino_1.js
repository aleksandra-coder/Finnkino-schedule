

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
    table = "<tr><th>Movie Title</th><th>Poster</th><th>Genre</th><th>Language and Display</th></tr>";
 
    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("RatingImageUrl")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("PresentationMethodAndLanguage")[0].childNodes[0].nodeValue + "</td></tr>";
               
        document.getElementById("schedule").innerHTML = table;
    }
    
    }
        
}
// for each selected cinema from the list, get data for this cinema
    var selectCinema = document.getElementById("searchCinema").value;
    if ( selectCinema == "Omena") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Sello") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Itis") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Kinopalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Maxim") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Tennispalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033&dt=24.11.2020", true);
        xmlhttp.send();
    } else if (selectCinema == "Flamingo") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013&dt=24.11.2020", true);
        xmlhttp.send();
    } 
   
}


   // const root = document.querySelector(".autocomplete");
    // root.innerHTML = `
    // <label><b>Movie list for today</b></label>
    // <div class="dropdown">
    //     <div class="dropdown-menu">
    //         <div class="dropdown-content results" >
    //         </div>
    //     </div>
    // </div>
    // `;

//    const input = document.querySelector("input"); 
//     const dropdown = document.querySelector(".dropdown");
//     const resultsWrapper = document.querySelector(".results");

    // dropdown.classList.add("is-active");
    
    // looping through the data by tags and adding them to the table, fetching title, genres, image (only link) I have to figure out how to display photo, language
    // for(let movie of movieTitle) {
    //     const option = document.createElement("a");

    //     option.classList.add("dropdown-item");
    //     option.innerHTML = `
    //     <img src="${movie.RatingImageUrl}" />
    //     ${movie.Title}

    //     `;
    //     resultsWrapper.appendChild(option);
    // }
    