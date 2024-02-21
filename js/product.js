const url = "https://mymxopdswecfhtqjjdaj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("DOMContentLoaded", getSvampe);

//fetch id
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
//kalder på data
function showSvamp(svampe) {
  console.log(svampe);

  // Ændring af indhold
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

  //season ikoner loop
  console.log("svampe.seasonicons", svampe.seasonicons);

  svampe.seasonicons.forEach((icon, index) => {
    document.querySelector(`.seasons_${index}`).classList.remove("hide");
    document.querySelector(`.seasons_${index}`).src = icon;
  });

  // If skov image og name is missing, hide the corresponding image and name element
  if (svampe.skov_img_2 !== null) {
    document.querySelector(".skov_img_2").src = svampe.skov_img_2;
    document.querySelector(".skov_img_2").style.display = "block";
    document.querySelector(".box_2").classList.remove("no-display");
  } else {
    document.querySelector(".skov_img_2").style.display = "none";
    document.querySelector(".box_2").classList.remove("no-display");
  }
  // Check for place_2
  if (svampe.place_2 !== null) {
    document.querySelector(".skov_name_2").textContent = svampe.place_2;
    document.querySelector(".box_2").style.display = "block";
  } else {
    document.querySelector(".box_2").style.display = "none";
  }
}

// Menu links
document.querySelector(".spring_link2").href = `productlist.html?season=Spring`;
document.querySelector(".summer_link2").href = `productlist.html?season=Summer`;
document.querySelector(".autumn_link2").href = `productlist.html?season=Autumn`;
document.querySelector(".winter_link2").href = `productlist.html?season=Winter`;
