$.ajax({
  "url":"https://www.kimonolabs.com/api/4jmwg1y2?apikey=xsQYe5UGp2VeuXjGEKtWWjuCGl5HxI58",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data
  

  var collection = response.results.collection1;

    for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      var twitterecstatic = collection[i].twitterecstatic.text;
      // var timeStamp = collection[i].timestamp.text;
      //console log(collection[i]);
      // console.log(twittersad);
      // console.log(timeStamp);
      console.log(collection[i]);

      $('.group7').append('<p>' + twitterecstatic + '</p>');
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

})