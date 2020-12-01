

// fucntion is called after the user clicks the search button
function loadDoc() {
    clearMovieInfo();
    var xmlhttp = new XMLHttpRequest();
    // adding an event listener to xmlhttp, after getting a response, browser can run the function
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        
      }
    };
    // for each selected cinema from the list, get data for this cinema
    var selectCinema = document.getElementById("searchCinema").value;
    if ( selectCinema == "Omena") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039", true);
        xmlhttp.send();
    } else if (selectCinema == "Sello") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038", true);
        xmlhttp.send();
    } else if (selectCinema == "Itis") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045", true);
        xmlhttp.send();
    } else if (selectCinema == "Kinopalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031", true);
        xmlhttp.send();
    } else if (selectCinema == "Maxim") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032", true);
        xmlhttp.send();
    } else if (selectCinema == "Tennispalatsi") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033", true);
        xmlhttp.send();
    } else if (selectCinema == "Flamingo") {
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013", true);
        xmlhttp.send();
    } 
    
  }
  function myFunction(xml) {
    // saving the response data in a variable for easy processing
    var i;
    var xmlDoc = xml.responseXML;
    // searching elements by tag name
    var movieTitle = xmlDoc.getElementsByTagName("Show");
    
// looping through all the shows and fetching information for each show, placing the info in a table
    table = "<tr><th>Movie Title</th><th>Poster</th><th>Genre</th><th>Language and Display</th><th>Length in minutes</th></tr>";
    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr onclick='showEvent(" + movieTitle[i].getElementsByTagName("EventID")[0].childNodes[0].nodeValue + ")'><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td><img src='" + movieTitle[i].getElementsByTagName("EventSmallImageLandscape")[0].childNodes[0].nodeValue + "'/></td><td>" + movieTitle[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("PresentationMethodAndLanguage")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("LengthInMinutes")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    //  inserting data into a html element
    document.getElementById("schedule").innerHTML = table;
  
    console.log(movieTitle);  
}

//  this is function to get more info after clicking on a movie from the list using parameter eventId
  function showEvent(eventId) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Events?eventID=" + eventId, true);
    xmlhttp.send();
// adding an event listener to xmlhttp, after getting a response, browser can run the function
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xmlDoc = xmlhttp.responseXML;
        var readMore = xmlDoc.getElementsByTagName("Event");
       
        // parsing data from xml file
        document.getElementById("movieInfo").innerHTML =
        "<b>Title: " +
        readMore[0].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</b>" +
        "<br>Synopsis: " +
        readMore[0].getElementsByTagName("ShortSynopsis")[0].childNodes[0].nodeValue +
        "<br>Year: " + 
        readMore[0].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue;
      }
    }    
  }   


// custom search for a movie - user types a title, clicks the button search, and gets more information
  function movieSearch(e) {    
    e.preventDefault(); //prevent the form from being submitted
    // setting up a variable for user's input in the search field
    var keyword = document.getElementById("moviesearch").value;
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://www.finnkino.fi/xml/Events/';
    xmlhttp.open("GET", url, true);
 	  xmlhttp.send();
    xmlhttp.onreadystatechange = function() {

		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            console.log(xmlDoc);

            var readMore = xmlDoc.getElementsByTagName("Event");
            var info ="";
          // looping through all events searching by title 
            for (i = 0; i < readMore.length; i++) {
              var title = readMore[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue;

              // condition if title equals keyword (user's input) show information about the movie
              if (title === keyword) {
                // parsing data from xml file
                info += "<tr><td><b>";
                info += readMore[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</b></td><br><hr>";
                info += "<td><img src='" + readMore[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/></td></tr><br><hr>"; 
                info += "<tr>" + readMore[i].getElementsByTagName("Synopsis")[0].childNodes[0].nodeValue + "</tr><br><hr>";
                info += "</td><td><img src='" + readMore[i].getElementsByTagName("EventLargeImageLandscape")[0].childNodes[0].nodeValue + "'/></td></tr><br><hr>";
                info += "<tr>Genre: " + readMore[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</tr><br>";
                info += "<tr>Rating: " + readMore[i].getElementsByTagName("Rating")[0].childNodes[0].nodeValue + "</tr><br>";
                info += "<tr>Original title: " + readMore[i].getElementsByTagName("OriginalTitle")[0].childNodes[0].nodeValue + "</tr><br>";
                info += "<tr>Production year: " + readMore[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue + "</tr>";
              }                
            }
            // placing parsed data into an html element
              document.getElementById("movieInfo").innerHTML = info;
              
        }
    }
}
// clear movie content inside element with id ≈ movieInfo
function clearMovieInfo() {
  document.getElementById("movieInfo").innerHTML = "";
}

//  jQuery functions for animation effects: slide down
  $('.search').click(function() {
    $('.searchForm').hide();
    $('.searchForm').slideDown(2000);
  });

// jQuery function for fading in an image
  $('.show').click(function() {
    $('.safety').fadeIn(2000);
  });

// jQuery function for fading out an image after clicking on this image
  $('.safety').click(function() {
   $('.safety').fadeOut(1000);
  });
