const container = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    // Loop over the array - forEach
    products.forEach((product) => {
      // 1. create an element and assign a class to it
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}"/>
        <h3>${product.title}</h3>
        <p>N${product.price}</p>
        `;

      // 2. insert the element in DOM
      container.appendChild(card);
    });
  });
