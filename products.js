import { supabase } from "./supabase.js";

export async function loadProducts(containerId = "product-list") {
  const container = document.getElementById(containerId);
  if (!container) return;
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Unable to load products:", error);
    return;
  }
  container.replaceChildren();
  for (const product of data ?? []) {
    const card = document.createElement("article");
    card.className = "product-card-modern";
    const title = document.createElement("h3");
    title.textContent = product.name ?? "Untitled product";
    const price = document.createElement("p");
    price.textContent = `${product.price ?? ""} RWF`;
    card.append(title, price);
    if (product.image) {
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name ?? "Product";
      img.loading = "lazy";
      card.prepend(img);
    }
    container.appendChild(card);
  }
}
