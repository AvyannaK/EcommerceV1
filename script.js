// const menutoggle = document.querySelector(".menutoggle");
const navMenu = document.querySelector(".navdrop");
const hamburger = document.querySelector(".hamburger");

let show = false;

hamburger.addEventListener("click", () => {
   let showClass = document.querySelector(".show");
    if(!show){
        navMenu.style.display = "flex"
        show = true;
    }else{
        navMenu.style.display = "none"
        show = false;
    }
    
})


// prevent defaut behavior when button is submitted 
// document.getElementById("submit").addEventListener("click", function(event){
//     event.preventDefault()
//        });


  //      fetch('products.json')
  // .then(response => response.json())
  // .then(data => {
  //   // Process the retrieved data
  //   // Call a function to display the products
  //   displayProducts(data);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });

  