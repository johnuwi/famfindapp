 
//get client data using navigator
    // console.log(navigator.cookieEnabled);
    // console.log(navigator.online);
    // console.log(navigator.appVersion);
    // console.log(navigator.userAgent)
    // console.log(navigator.platform);

    // //get window metadata using window
    // console.log(window.location.href);//get full url
    // console.log(window.location.protocol);
    // console.log(window.location.hostname);

    // function redirect(url){
    //   window.location.assign(url);//redirects the page to another url
    // }

   /* window.onload(function(event){
      console.log("Page has loaded");
      
      //do other javascript stuff here
    })*/

/*Timer function
let result = document.querySelector('#result');
    let timer;
    
    //print the current time to the dom
    function printDate(){
      result.innerHTML = new Date().toLocaleTimeString();
    }
    
    function startTimer(){
       //execute printDate() ever second
       timer =  setInterval(printDate, 1000);
    }

    function endTimer(){
      clearInterval(timer); // stops the timer
    }
*/

/*open in page*/
/*map*/
var showMap = $('#show-map');

function initialize() {
    var mapOptions = {
	    center: {  lat:-34.397, lng: 150.644},
	    zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

$(document).ready(function(){
    $('#show-map').on('click',initialize)
});


    async function postData(url, data){
  try{

     let response = await fetch(
       url, 
       {
            method: 'POST',
            body: JSON.stringify(data)
       },//convert data to JSON string
     );//1. Send http request and get response
     
     let result = await response.text();//2. Get message from response
     console.log(result);//3. Do something with the message
   
   }catch(error){
     console.log(error);//catch and log any errors
   }
}


//the Event object is passed to any event handler called via an event attribute eg onclick, onsubmit etc
function submit(event){
 event.preventDefault();//prevents page redirection
     
 //event target returns the element on which the event is fired upon ie event.target === myForm

 //get data from form using elements property
 let myform = event.target.elements;

 let data = {
   username: myform['username'].value,
    fname: myform['fname'].value,
    lname: myform['lname'].value,
   password: myform['password'].value,
   email: myform['email'].value
 }
 //send data to an api endpoint expecting the data
 postData('https://nmendezapps.firebaseio.com/users.json', data);
 myForm.reset();//clears the fields of the form
}


  let form = document.querySelector('#myForm');

  form.addEventListener('submit', submit);


