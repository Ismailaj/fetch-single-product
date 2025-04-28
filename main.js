


let productId = 7;
// Fetch the product details
// let url = 'https://fakestoreapi.com/products/' + productId;
let url = `https://fakestoreapi.com/products/${productId}`;

fetch(url) // step 1
  .then(response => response.json()) // step 2
  .then(data => {
    console.log(data);
    // Call the function to display the product
    displayProduct(data);
  }) // step 3
  .catch(error => console.error('Error:', error)); // final step 4



  function displayProduct(data){
        alert("Product fetched!");
        console.log(data);
        // Display the product details
        // document.getElementById('productName').innerText = data.title;
        // document.getElementById('productDescription').innerText = data.description;
        // document.getElementById('productPrice').innerText = data.price;
        // document.getElementById('productCategory').innerText = data.category;
        // document.getElementById('productImage').src = data.image;


        let product = `
        <div class="card">
            <img src="${data.image}" alt="Denim Jeans" style="width:100%">
            <h1>${data.title}</h1>
            <p class="price">$${data.price}</p>
            <p>${data.category}</p>
            <p>${data.description}</p>
            <p><button>Add to Cart</button></p>
        </div>
        `;


        document.getElementById('displayProduct').innerHTML = product;

  }