const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("DOMContentLoaded", getSvampe);

function getSvampe() {
  const selectUrl = `https://mymxopdswecfhtqjjdaj.supabase.co/rest/v1/Svampe?select=id,name,picking,spot,place,place_2,description,svampe_img,skov_img,skov_img_2`;

  fetch(selectUrl, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(showData);
}

function showData(svampe) {
  console.log(svampe);
  document.querySelector(".svampe_name").textContent = svampe.name;
  document.querySelector(".answer_picking").textContent = svampe.picking;
  document.querySelector(".answer_spot").textContent = svampe.spot;
  document.querySelector(".skov_name").textContent = svampe.place;
  document.querySelector(".skov_name_2").textContent = svampe.place_2;
  document.querySelector(".description").textContent = svampe.description;
  // Update the image source and alt attributes
  document.querySelector(".svampe").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${svampe.svampe_img}.png`;
  document.querySelector(".svampe").alt = svampe.name;

  // Assuming skov_img and skov_img_2 are properties of svampe
  document.querySelector(".skov_img_1").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${svampe.skov_img}.jpg`;
  document.querySelector(".skov_img_1").alt = svampe.place;

  document.querySelector(".skov_img_2").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${svampe.skov_img_2}.jpg`;
  document.querySelector(".skov_img_2").alt = svampe.place_2;
}

getSvampe();
