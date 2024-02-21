const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";
const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

window.addEventListener("DOMContentLoaded", getSvampe);

function getSvampe() {
  console.log("season", season);
  fetch(url + `/rest/v1/Svampe?season=ilike.*${season}*`, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(showProducts);

  function showProducts(products) {
    console.log(products);
    document.querySelector(".season_name").textContent = season;

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
    copy.querySelector(".mushroom_name").textContent = product.name;

    // Link
    copy.querySelector(".mushroom_link").href = `/product.html?id=${product.id}`;

    // Fjern alle tidligere sæsonklasser
    copy.querySelector(".mushroom_article").classList.remove("spring", "summer", "autumn", "winter");

    // Tilføj klasse baseret på sæson
    if (season === "Spring") {
      copy.querySelector(".mushroom_article").classList.add("spring");
    } else if (season === "Summer") {
      copy.querySelector(".mushroom_article").classList.add("summer");
    } else if (season === "Autumn") {
      copy.querySelector(".mushroom_article").classList.add("autumn");
    } else if (season === "Winter") {
      copy.querySelector(".mushroom_article").classList.add("winter");
    }

    //appende
    document.querySelector(".gallery").appendChild(copy);
  }

  // Link
  document.querySelector(".spring_link2").href = `productlist.html?season=Spring`;
  document.querySelector(".summer_link2").href = `productlist.html?season=Summer`;
  document.querySelector(".autumn_link2").href = `productlist.html?season=Autumn`;
  document.querySelector(".winter_link2").href = `productlist.html?season=Winter`;
}
