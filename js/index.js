const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";

fetch(url + "/rest/v1/Svampe?select=season", {
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
  // fanger vores template
  const template = document.querySelector("template").content;

  //cloner
  const clone = template.cloneNode(true);

  // ændrer indhold
  clone.querySelector(".season_icons a").href = url + `/rest/v1/Svampe?select=season${product.category}`;

  //appende
  document.querySelector(".gallery").appendChild(copy);
}
