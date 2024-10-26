

let slider_img = document.querySelector('.slider-img');
let images = ['3d-car-city-street (1).jpg','3d-car-city-street (2).jpg','3d-car-city-street.jpg','3d-car-with-minimal-background.jpg','3d-car-with-simple-background.jpg','view-3d-car.jpg'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}