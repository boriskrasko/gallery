// Get the modal
const modal = document.getElementById('myModal');
let currentImage = document.querySelectorAll('.gallery_iner img'),
	thumbs	= document.querySelectorAll('.gallery_items div');


// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelector('.gallery_iner'),
	modalImg = document.getElementById('img');

[].forEach.call(thumbs, function(thumb, n) {
		thumb.index = n;
		thumb.addEventListener('click', function() {
			modal.style.display = 'block';
  			modalImg.src = currentImage[n].src;
		})
	});
		
// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close-modal')[0],
 	modalContent = document.getElementsByClassName('modal-content')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};

modalContent.onclick = function() { 
  modal.style.display = "none";
}