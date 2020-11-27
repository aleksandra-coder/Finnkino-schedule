

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
    var i;
    var xmlDoc = xml.responseXML;
    var movieTitle = xmlDoc.getElementsByTagName("Show");
    

    table = "<tr><th>Movie Title</th><th>Poster</th><th>Genres</th><th>Language and Display</th><th>Length in minutes</th></tr>";
    for (i = 0; i <movieTitle.length; i++) { 
        table += "<tr onclick='showEvent(" + i + ")'><td>" + movieTitle[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td><img src='" + movieTitle[i].getElementsByTagName("EventSmallImageLandscape")[0].childNodes[0].nodeValue + "'/></td><td>" + movieTitle[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("PresentationMethodAndLanguage")[0].childNodes[0].nodeValue + "</td><td>" + movieTitle[i].getElementsByTagName("LengthInMinutes")[0].childNodes[0].nodeValue + "</td>";
    }
    document.getElementById("schedule").innerHTML = table;
  
    console.log(movieTitle);
       
    
  }

//   this is function to get more info after clik´cking on a movie from the list
  function showEvent(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Events/", true);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;
    var readMore =xmlDoc.getElementsByTagName("Event");
    document.getElementById("movieInfo").innerHTML =
    "Title: " +
    readMore[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue +
    "<br>Synopsis: " +
    readMore[i].getElementsByTagName("Synopsis")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    readMore[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue;
  }   




  // var xmlhttp = new XMLHttpRequest();

// xmlhttp.open("GET", "https://www.finnkino.fi/xml/Events/", true);
// xmlhttp.send();
// var xmlDoc = xmlhttp.responseXML;
// var readMore = xmlDoc.getElementsByTagName("Event");
// var table ="<Events>";
// for (i = 0; i < readMore.length; i++) { 
//     table += "<tr onclick='showEvent(" + i + ")'><td>";
//     table += readMore[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
//     table += "</td><td>";
//     table +=  readMore[i].getElementsByTagName("RatingImageUrl")[0].childNodes[0].nodeValue;
//     table += "</td></tr>";  
//   }
// document.getElementById("synopsis").innerHTML = table;

// function showEvent(i) {
//   document.getElementById("synopsis").innerHTML =
//   "Title: " +
//   readMore[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue +
//   "<br>Synopsis: " +
//   readMore[i].getElementsByTagName("Synopsis")[0].childNodes[0].nodeValue +
//   "<br>Year: " + 
//   readMore[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue;
// }

// custom search for a movie - user types a title and gets info
  function movieSearch(url) {
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://www.finnkino.fi/xml/Events/';
    xmlhttp.open("GET", url, true);
 	xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // mFunction(this);
            var xmlDoc = xml.responseXML;
            console.log(xmlDoc);

            var readMore = xmlDoc.getElementsByTagName("Event");
            var info ="";

            for (i = 0; i < readMore.length; i++) {
                info += "<tr><td>";
                info += readMore[i].getElementsByTagName("Title").childNodes[0].nodeValue;
                info += "</td><td><img src='" + readMore[i].getElementsByTagName("EventLargeImagePortrait")[0].childNodes[1].nodeValue + "'/></td></tr>"; 
                info += "<tr>Synopsis: " + readMore[i].getElementsByTagName("Synopsis")[0].childNodes[0].nodeValue + "</tr>"; 
                info += "<tr>Year: " + readMore[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue + "</tr>";
            }
              document.getElementById("movieInfo").innerHTML = info;
              
        }
    }
}

// All the below commented codes are several diferent trials and unfortunately errors to get the search by title working
   
			// document.getElementById("movieInfo").innerHTML = xmlhttp.responseText;
// 	var movieSearch = document.getElementById("moviesearch").value;
// 	var url = "https://www.finnkino.fi/xml/Events/?eventID=" + movieSearch;
// 	xmlhttp.open("GET", url, true);
// 	xmlhttp.send();

// }

//     function mFunction(xml) {
//         var i;
//         var xmlDoc = xml.responseXML;
//             var readMore = xmlDoc.getElementsByTagName("Event");
//             var info ="";
//             // looping through all events to find the searched title
//         for (i = 0; i < readMore.length; i++) {
//             info += "<tr><td>";
//             info += readMore[i].getElementsByTagName("Title").childNodes[0].nodeValue;
//             info += "</td><td><img src='" + readMore[i].getElementsByTagName("EventLargeImagePortrait")[0].childNodes[1].nodeValue + "'/></td></tr>"; 
//             info += "<tr>Synopsis: " + readMore[i].getElementsByTagName("Synopsis")[0].childNodes[0].nodeValue + "</tr>"; 
//             info += "<tr>Year: " + readMore[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue + "</tr>";
//         }
//           document.getElementById("movieInfo").innerHTML = info;
                
//     }
            
			
                    
    // function movieSearch() {

    //     $(document).ready(
    //         function (){
    //             $.ajax({                    

    //                 url: "https://www.finnkino.fi/xml/Events",

    //                 dataType: "xml",

    //                 success: xmlParser

    //             });
    //         }
    //     );
    //         function xmlParser(xml) {
    //             $(xml).find("Event").each(function() {
    //                 $("#movieInfo").append('<option value="' + $(this).find("Title").text() +'">' + '</option>');
    //             }
    //             );
    //         }
    //           // SHOW SELECTED VALUE.
    //     $('#movieinfo').change(function () {
    //         $('#msg').text('Selected Item: ' + this.options[this.selectedIndex].text);
    //     });
    
    
    
//         $(function() {
//         $.ajax({
//             type: "GET",
//             url: "https://www.finnkino.fi/xml/Events",
//             dataType: "xml",
//             success: parseXml
//         });
//     });
//     function parseXML(xml) {
//     var $select = $('#moviesearch');

//     $('<option />', { text: 'Please make a selection' }).appendTo($select);

//     $(xml).find('Event').each(function(){
//         var title = $(this).attr('name');
//         $('<option />', { text: title, value: title }).appendTo($select);
//     });

//     $select.on("change", function() {
//         var value = $(this).val();
//         var $node = $(xml).find('<option value="' + value.Title + '">' + value.Synopsis + '</option>');

//         $("#title").val($node.find("Title").text());
//         $("#synopsis").val($node.find("Synopsis").text());
//         $("#year").val($node.find("ProductionYear").text());
//         $("#length").val($node.find("LengthInMinutes").text());
//     });
// }


