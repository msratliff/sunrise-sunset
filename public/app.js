
window.onload = function(){
	console.log("Window Is Loaded");
	
	var request = new XMLHttpRequest();
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Miami,FL,us&APPID=b924568f082bbfc63060a2f33860589f"
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE){
			var response = JSON.parse(request.responseText);
			var sunrise = response.sys.sunrise;
			var sunset = response.sys.sunset;
			var currentTime = new Date().getTime()/1000
			var noon = new Date().setHours(12,0,0,0)/1000;
			var elapsedSeconds = currentTime - sunrise;


			var sun_x = (elapsedSeconds/(sunset-sunrise))*100
			var sun_y = -0.035*Math.pow(sun_x-52, 2)+80
			

			var sun = document.getElementById('sun');
			sun.style.left = sun_x+'%';
			sun.style.bottom = sun_y+'%';

			
		}
		
		
	}

	request.open('GET', url, true);
	request.send();



}
