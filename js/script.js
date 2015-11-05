// Pseudo-Code

// GET names of cities (input)

//     IF city = NY, NYC, New york, New York City
//         change background to ny.jpg
//     ELSE IF city = SF, San Francisco, Bay Area
//         change background to sf.jpg
//     ELSE IF city = LA, LAX, Los Angeles
//         change background to la.jpg
//     ELSE IF city = ATX, Austin
//         change background to austin.jpg    
//     ELSE IF city = SYD, Sydney
//         change background to syd.jpg 
//     ELSE = any other input
//         create alert
    
// END        

$(document).ready(function(){
  var images=["images/austin.jpg","images/citipix_skyline.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jpg"];

  function changeBackground() {
    event.preventDefault();

    var city = $('#city-type').val();

// Convert all input to lowercase  
    city = city.toLowerCase().trim();

    if (city === 'nyc' || city === 'new york city' || city === 'new york') {
        $('body').css('background-image', "url('images/nyc.jpg')");
    } else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
        $('body').css('background-image', "url('images/sf.jpg')");
    } else if (city === 'la' || city === 'lax' || city === 'los angeles') {
        $('body').css('background-image', "url('images/la.jpg')");
    } else if (city === 'atx' || city === 'austin') {
        $('body').css('background-image', "url('images/austin.jpg')");
    } else if (city === 'syd' || city === 'sydney') {
        $('body').css('background-image', "url('images/syd.jpg')");   
    } else {
        // console.log('testing incorrect value');
            alert("Please enter the correct value.");
    }
  }

  $('#submit-btn').click(changeBackground);
});




