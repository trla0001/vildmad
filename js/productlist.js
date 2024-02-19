const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";

fetch(url + "/rest/v1/Svampe?select=id,name,svampe_img", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  console.log(products);
  //looper og kalder showProducts
  products.forEach(showProduct);
}
function showProduct(product) {
  //fange template
  const template = document.querySelector("template").content;

  //lave kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".mushroom_img").src = product.svampe_img;
  copy.querySelector(".mushroom_name").textContent = product.name;

  // Link
  copy.querySelector(".mushroom_link").href = `/product.html?id=${product.id}`;

  // Tilføj layout tilfældigt
  const randomNumber = Math.random(); // Generer et tilfældigt tal mellem 0 og 1

  if (randomNumber < 0.25) {
    // 25% chance for small_mushroom, big_mushroom, big_mushroom2 eller small_mushroom2 css layout
    copy.querySelector(".mushroom_article").classList.add("small_mushroom");
    copy.querySelector(".mushroom_name").classList.add("mushroom_name2");
  } else if (randomNumber < 0.5) {
    copy.querySelector(".mushroom_article").classList.add("small_mushroom2");
    copy.querySelector(".mushroom_name").classList.add("mushroom_name2");
  } else if (randomNumber < 0.75) {
    copy.querySelector(".mushroom_article").classList.add("big_mushroom");
    copy.querySelector(".mushroom_name").classList.add("mushroom_name");
  } else {
    copy.querySelector(".mushroom_article").classList.add("big_mushroom2");
    copy.querySelector(".mushroom_name").classList.add("mushroom_name");
  }

  //appende
  document.querySelector(".gallery").appendChild(copy);
}
