
// window.onload =function(){


// fetch('products.json')
//   .then(response => response.json())
//   .then(data => {
//     // Process the retrieved data
//     // Call a function to display the products
//     displayProducts(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   function displayProducts(products) {


//     let productHTML =''

//     for(let i = 0; i<products.length; i++){
//       let element = products[i]

//       let product = `
//       <div class="products">
//                     <img src="${element.image}" alt="24 hours service">
//                     <p>${element.title}</p>
//                     <p>${element.description}</p>
//                     <p>${element.price}</p>
//                 </div>
//       `

//       productHTML += product

//     }

    
//   const productContainer = document.getElementsByClassName('products');
//     productContainer.innerHTML = productHTML

//   console.log(productContainer)

  
// }



// }

let http = new XMLHttpRequest();


http.open('get', 'products.json', true);

http.send();

http.onload = function(){

  if(this.readyState == 4 && this.status == 200){

    let products = JSON.parse(this.responseText);

    let output = "";

    for(let item of products){

      output += `
      
      <div class="product">
      
      <img src="${item.image}" alt="${item.image}">
      
      <p class="title">${item.title}</p>

      <p class="description">${item.description}</p>

      <p class="price">
      <span>$</span>
      <span>${item.price}</span>
      
      
      </p>

      <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
      </div>
      
      `;


    }

    document.querySelector(".products").innerHTML = output
  }
}


