
$.getJSON('./data.json',function(products){
    console.log(products)
    let container=$("#wrap")
    let productsArray=[]

    $.each(products,function(key,item){
        productsArray.push(
            `
            <div id="columns" class="columns_4">
                <figure>
                    <figcaption>${item.title}</figcaption>
                    <img src=${item.image}>
                    <span class="price">$${item.price}</span>
                    <a class="button" href="#">Add to cart</a>
                </figure>
            </div>
            `     
        )
    })
     container.append(productsArray)
});

// Side Navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var slideIndex = 0;
showSlides();

//Slide shows for index.html
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

