import { supabase } from "./supabase.js";
export async function loadProducts(containerId="product-list"){
 const container=document.getElementById(containerId); if(!container) return;
 const {data,error}=await supabase.from("products").select("id,name,price,image,category,origin").eq("is_active",true).order("created_at",{ascending:false});
 if(error){container.textContent="Unable to load products."; return;}
 container.innerHTML=(data||[]).map(p=>`<article class="product-card"><div class="product-image"><img src="${String(p.image).replace(/"/g,'&quot;')}" alt=""></div><div class="product-info"><h3>${String(p.name).replace(/[&<>]/g,'')}</h3><p class="product-price">${Number(p.price).toLocaleString()} RWF</p></div></article>`).join("");
}
