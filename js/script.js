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
<<<<<<< HEAD
		let imgArray = data.imgPath;
	let places="<ul>";
	let images="<ul>";
    $.each(placeArray, function(key, value){
		places+='<li><a href="#" data-year="'+value.year+'" data-imgPath="'+value.imgPath+'">' + value.place + '<div class="inner"></div></a></li>';
	});
	
    //each--smplify for loop^
    places += "<ul>";
    console.log(places);
    $('#content').append(places);
    //append--attach
=======
		let places="<ul>";
		$.each(placeArray, function(key, value){
			places+='<li><a href="#" data-year="'+value.year+'">' + value.place + '<div class="inner" id ></div></a></li>';
    	});
    	
    	//each--smplify for loop^
    	places += "<ul>";
    	console.log(places);
    	$('#content').append(places);
    	//append--attach
>>>>>>> 3a1d9b3c34148d9177846dc5c3c2b8c70347c7db
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
<<<<<<< HEAD
// $(document).ajaxSuccess(function(){
	
//     $("li a").click(function(){

//     $('.inner').slideUp();
// 	let year = $(this).data('year');
// 	$('.inner').html(year);

//     $(this).find('.inner').slideDown();
    
//     })

// });
var jsonURL = "data.json";
$.getJSON(jsonURL, function(json) {
	var imgList= "";
	$.each(json.places, function() {
		imgList += '<li><img src= "' + this.imgPath + '"></li>';
	});
	console.log(imgList);
	$('.inner').append(imgList);
});



=======

});


>>>>>>> 3a1d9b3c34148d9177846dc5c3c2b8c70347c7db
$(document).ajaxSuccess(function(){
	
    $("li a").click(function(){

    $('.inner').slideUp();
	let year = $(this).data('year');
	
	let image = $(this).data('imgPath');
	$('.inner').html(year);
	$('.inner').html(image);

    $(this).find('.inner').slideDown();
    $(this).find('.inner').slideDown();
    
<<<<<<< HEAD
	})
=======
    })

>>>>>>> 3a1d9b3c34148d9177846dc5c3c2b8c70347c7db
});