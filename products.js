import { supabase } from "./supabase.js"

async function loadProducts() {

  const { data, error } = await supabase
    .from("products")
    .select("*")

  const container = document.getElementById("product-list")

  data.forEach(product => {

    const productCard = `
      <div class="product">
        <img src="${product.image}" width="150">
        <h3>${product.name}</h3>
        <p>${product.price} RWF</p>
      </div>
    `

    container.innerHTML += productCard

  })
}

loadProducts()
