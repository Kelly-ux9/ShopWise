import { supabase } from "./supabase.js";
export async function addToCart(productId, quantity=1){
  const { data: { user } } = await supabase.auth.getUser();
  if(!user){ window.location.href="login.html"; return {error:new Error("Please sign in first")}; }
  return await supabase.from("cart").upsert({user_id:user.id,product_id:productId,quantity},{onConflict:"user_id,product_id"});
}
window.addToCart=addToCart;
