/*
JavaScript Image slideshow:
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free JavaScript here!
*/

var slideimages=new Array()
var slidelinks=new Array()
function slideshowimages(){
	for (i=0;i<slideshowimages.arguments.length;i++){
		slideimages[i]=new Image()
		slideimages[i].src=slideshowimages.arguments[i]
	}
}

function slideshowlinks(){
	for (i=0;i<slideshowlinks.arguments.length;i++)
		slidelinks[i]=slideshowlinks.arguments[i]
}

function gotoshow(){
	if (!window.winslide||winslide.closed)
		winslide=window.open(slidelinks[whichlink])
	else
		winslide.location=slidelinks[whichlink]
	winslide.focus()
}

// slideshowimages("http://2.bp.blogspot.com/-_fomtYGGIbc/VjaYR3e8PZI/AAAAAAAAA0Q/XOgtREJ8mf0/s1600/download.jpe")

// shortlisted by Nafeen
slideshowimages("http://image.shutterstock.com/z/stock-photo-interior-with-blue-sofa-d-illustration-316818080.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-sofa-d-illustration-345625571.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-brown-sofa-d-illustration-326006075.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-white-sofa-d-illustration-323521139.jpg","http://image.shutterstock.com/z/stock-photo-modern-fictitious-living-room-with-white-sofa-and-copy-space-for-your-own-image-248564731.jpg")

// slideshowimages("http://image.shutterstock.com/z/stock-photo-interior-with-grey-sofa-d-illustration-337850762.jpg","https://pixabay.com/static/uploads/photo/2013/09/21/14/30/sofa-184551_960_720.jpg","http://image.shutterstock.com/z/stock-photo-snow-white-living-room-interior-in-modern-style-35054671.jpg","http://image.shutterstock.com/z/stock-photo-minimalist-monochromatic-living-room-interior-with-grey-decor-and-a-single-armchair-standing-on-a-283558697.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-sofa-d-illustration-345625571.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-blue-sofa-d-illustration-316818080.jpg","http://image.shutterstock.com/z/stock-photo-interior-details-white-brick-wall-part-of-interior-with-couch-and-decorative-pillows-white-265130447.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-brown-sofa-d-illustration-326006075.jpg","http://image.shutterstock.com/z/stock-photo-living-room-minimalism-d-render-using-d-s-max-294632066.jpg","http://image.shutterstock.com/z/stock-photo-modern-fictitious-living-room-with-white-sofa-and-copy-space-for-your-own-image-248564731.jpg","http://image.shutterstock.com/z/stock-photo-modern-interior-room-with-nice-furniture-inside-75620635.jpg","http://image.shutterstock.com/z/stock-photo-interior-with-white-sofa-d-illustration-323521139.jpg","http://image.shutterstock.com/z/stock-photo-minimalist-living-room-d-render-image-324981635.jpg","http://image.shutterstock.com/z/stock-photo-modern-living-room-d-rendering-with-white-sofa-and-copy-space-for-your-own-image-photos-on-the-226872184.jpg")

// slideshowlinks("http://image.shutterstock.com/z/stock-photo-interior-with-grey-sofa-d-illustration-337850762.jpg","http://food.epicurious.com/run/recipe/view?id=10092","http://food.epicurious.com/run/recipe/view?id=100975","http://food.epicurious.com/run/recipe/view?id=2876","http://food.epicurious.com/run/recipe/view?id=20010")

//configure the speed of the slideshow, in miliseconds
var slideshowspeed=5000

var whichlink=0
var whichimage=0
function slideit(){
if (!document.images)
	return
document.images.slide.src=slideimages[whichimage].src
whichlink=whichimage
if (whichimage<slideimages.length-1)
	whichimage++
else
	whichimage=0
setTimeout("slideit()",slideshowspeed)
}
