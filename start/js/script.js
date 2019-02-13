$(document).ready(function(){
	
$.ajax({
	type: 'GET',
	url: 'data.json',
	dataType: 'json',
	beforeSend: function(xhr){
	    if (xhr.overrideMimeType) {
	      xhr.overrideMimeType("application/json");
	    }
  	},
	success: function(data) {
		
		let placeArray = data.places;
		let places="<ul>";
		$.each(placeArray, function(key, value){
			places+='<li><a href="#" data-year="'+value.year+'">' + value.place + '<div class="inner" id ></div></a></li>';
    	});
    	
    	//each--smplify for loop^
    	places += "<ul>";
    	console.log(places);
    	$('#content').append(places);
    	//append--attach
	},
	error: function() {
		window.alert('Failed');
	}
});

var jsonURL = "data.json";
$.getJSON(jsonURL, function(json) {
	var imgList= "";
	$.each(json.products, function() {
		imgList += '<li><img src= "' + this.imgPath + '"></li>';
	});
	$('#dvProdList').append(imgList);
});

});


$(document).ajaxSuccess(function(){
	
    $("li a").click(function(){

    $('.inner').slideUp();
	let year = $(this).data('year');
	$('.inner').html(year);

    $(this).find('.inner').slideDown();
    
    })

});