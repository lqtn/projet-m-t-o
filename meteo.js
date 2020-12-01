function recherche(){
	var ville = document.getElementById('ville').value;
	var latitude =0;
	var longitude = 0;
		var exist = 0;
	$.getJSON('ville.json', function(data){
			for (let i = 0; i < data.length; i++) {
				 if(data[i]['name'].toLowerCase() ==ville.toLowerCase() && data[i]['name'].toLowerCase() != "")
				 {
					 latitude=data[i]['coord']['lat'];
					 longitude=data[i]['coord']['lon'];
					 exist=1;
					 i=data.length;
				 }
			}
			
			if(exist != 1){
				
				window.alert("cette ville n'existe pas");
			}else  {
				var url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude=hourly&units=metric&lang=fr&appid=e84c2d7fc10a977226db541d940f2447"
			
				fetch(url)
				.then(resultat =>resultat.json())
				.then(json =>{console.log(json);
				var ladate=new Date()
				
					var icone =  json.current.weather[0].icon;
					document.getElementById('jour1-icone').src = "http://openweathermap.org/img/wn/"+icone+"@2x.png";
					document.getElementById('jour1-temps').innerHTML = json.current.weather[0].description;
					document.getElementById('jour1-température').innerHTML = "Actuellement : "+Math.round(json.current.temp)+'°C';
					document.getElementById('jour1-date').innerHTML = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
					
					ladate.setDate(ladate.getDate()+1);
					icone = json.daily[1].weather[0].icon;
					document.getElementById('jour2-icone').src = "http://openweathermap.org/img/wn/"+icone+"@2x.png";
					document.getElementById('jour2-temps').innerHTML = json.daily[1].weather[0].description;
					document.getElementById('jour2-temperature-matin').innerHTML = "matinée : "+Math.round( json.daily[1].temp.morn)+'°C';
					document.getElementById('jour2-temperature-apres-midi').innerHTML = "après-midi : "+Math.round(json.daily[1].temp.day)+'°C';
					document.getElementById('jour2-date').innerHTML = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
					
					ladate.setDate(ladate.getDate()+1);
					icone =json.daily[2].weather[0].icon;
					document.getElementById('jour3-icone').src = "http://openweathermap.org/img/wn/"+icone+"@2x.png";
					document.getElementById('jour3-temps').innerHTML = json.daily[2].weather[0].description;
					document.getElementById('jour3-temperature-matin').innerHTML = "matinée : "+Math.round(json.daily[2].temp.morn)+'°C';
					document.getElementById('jour3-temperature-apres-midi').innerHTML = "après-midi : "+Math.round(json.daily[2].temp.day)+'°C';
					document.getElementById('jour3-date').innerHTML = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
			})
			}
	});
}

