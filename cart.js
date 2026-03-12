import { supabase } from "./supabase.js"

async function addToCart(productId) {

  const userId = "USER_ID"

  const { data, error } = await supabase
    .from("cart")
    .insert([
      {
        user_id: userId,
        product_id: productId,
        quantity: 1
      }
    ])

  alert("Product added to cart!")
}
