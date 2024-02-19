const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("DOMContentLoaded", getSvampe);

function getSvampe() {
  const selectUrl = `https://mymxopdswecfhtqjjdaj.supabase.co/rest/v1/Svampe?id=eq.${id}`;
  fetch(selectUrl, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      showSvamp(json[0]);
    });
}

function showSvamp(svampe) {
  console.log(svampe);
  document.querySelector(".svampe_name").textContent = svampe.name;
  document.querySelector(".answer_picking").textContent = svampe.picking;
  document.querySelector(".answer_spot").textContent = svampe.spot;
  document.querySelector(".skov_name").textContent = svampe.place;
  document.querySelector(".skov_name_2").textContent = svampe.place_2;
  document.querySelector(".description").textContent = svampe.description;
  // Update the image source and alt attributes
  document.querySelector(".svampe").src = svampe.svampe_img;
  document.querySelector(".svampe").alt = svampe.name;
  // Assuming skov_img and skov_img_2 are properties of svampe
  document.querySelector(".skov_img_1").src = svampe.skov_img;
  document.querySelector(".skov_img_1").alt = svampe.place;

  document.querySelector(".skov_img_2").src = svampe.skov_img_2;
  document.querySelector(".skov_img_2").alt = svampe.place_2;

  console.log("svampe.seasonicons", svampe.seasonicons);

  svampe.seasonicons.forEach((icon, index) => {
    document.querySelector(`.seasons_${index}`).src = icon;
  });

  /*
  const nullElement = document.querySelector(".skov_img_1 .skov_img_2 .skov_name .skov_name_2");
  if (svampe.nullElement) {
    nullElement.style.display = "block";
  } else {
    nullElement.style.display = "none";
  }*/
}

getSvampe();
