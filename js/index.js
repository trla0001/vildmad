const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";

window.addEventListener("DOMContentLoaded", getSvampe);

function getSvampe() {
  fetch(url + `/rest/v1/Svampe?select=*`, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(showProducts);

  function showProducts(products) {
    console.log(products);

    // Link
    document.querySelector(".spring_link").href = `productlist.html?season=Spring`;
    document.querySelector(".summer_link").href = `productlist.html?season=Summer`;
    document.querySelector(".autumn_link").href = `productlist.html?season=Autumn`;
    document.querySelector(".winter_link").href = `productlist.html?season=Winter`;

    document.querySelector(".spring_link2").href = `productlist.html?season=Spring`;
    document.querySelector(".summer_link2").href = `productlist.html?season=Summer`;
    document.querySelector(".autumn_link2").href = `productlist.html?season=Autumn`;
    document.querySelector(".winter_link2").href = `productlist.html?season=Winter`;
  }
}
