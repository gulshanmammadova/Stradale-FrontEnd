//IMage Hover Zoom
// function zoom(e){
//     var zoomer = e.currentTarget;
//     e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//     e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//     x = offsetX/zoomer.offsetWidth*100
//     y = offsetY/zoomer.offsetHeight*100
//     zoomer.style.backgroundPosition = x + '% ' + y + '%';
//   }

function PlsCount() {
 document.querySelector('.count-inp').value+1;
  console.log( document.querySelector('.count-inp').value+1)
}
// Tab
 
// Tab
// POPPEVERB

// POPPEVERB
// Gallery Modal
	// JavaScript (for modal functionality)
let currentModalImg;

// function openModal(img) {
//   const modal = document.querySelector('.modal');
//    const modalImg = modal.querySelector('.modal-content');
//  const closeModalBtn = modal.querySelector('.close');

//   currentModalImg = img;
//   modalImg.src = img.src;
//   modal.style.display = 'block';

//   closeModalBtn.addEventListener('click', closeModal);
//   window.addEventListener('click', outsideClick);
// }

// function closeModal() {
//   const modal = document.querySelector('.modal');
//   const closeModalBtn = modal.querySelector('.close');

//   modal.style.display = 'none';
//   closeModalBtn.removeEventListener('click', closeModal);
//   window.removeEventListener('click', outsideClick);
// }

// function outsideClick(e) {
//   const modal = document.querySelector('.modal');
//   if (e.target === modal) {
//     closeModal();
//   }
// }

// Keyboard navigation for modal gallery
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeModal();
//   } else if (e.key === 'ArrowLeft') {
//     const prevImg = currentModalImg.previousElementSibling;
//     if (prevImg) {
//       currentModalImg = prevImg;
//       openModal(currentModalImg);
//     }
//   } else if (e.key === 'ArrowRight') {
//     const nextImg = currentModalImg.nextElementSibling;
//     if (nextImg) {
//       currentModalImg = nextImg;
//       openModal(currentModalImg);
//     }
//   }
// });

// Gallery Modal
// Slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  }

 
});
// Slider
// Basket
$(document).ready(function() {
  
    $(" .close-div").click(function(){
      $(".basket-all").css({"display":"none"});
    })

});
// Basket
// Cart-Product-Count

$(document).ready(function() {
  $('tr').each(function() {
    var count = $(this).find('.count-input').val();
    var price = $(this).find('.price-column').text().replace('$', '');
    var total = count * price;
    $(this).find('.total-price-column').text('$' + total);
  });
   $('.count-input').on('change', function() {
    $('tr').each(function() {
      var count = $(this).find('.count-input').val();
      var price = $(this).find('.price-column').text().replace('$', '');
      var total = count * price;
      $(this).find('.total-price-column').text('$' + total);
    });
  });
});

// Cart-Product-Count
