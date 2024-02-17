//https://mymxopdswecfhtqjjdaj.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
window.addEventListener("DOMContentLoaded", getSvampe);

function getSvampe() {
  fetch("https://mymxopdswecfhtqjjdaj.supabase.co/rest/v1/Svampe", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXhvcGRzd2VjZmh0cWpqZGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTc1NzksImV4cCI6MjAyMzM5MzU3OX0.7qo3PlF20tNiwd1eHKnvFFIqGTxqqFUHABvXwE-T_fc",
    },
  })
    .then((res) => res.json())
    .then(showData);
}

function showData(svampe) {
  console.log(svampe);
  let skov_image = document.querySelector(".skov_img_1");
  document.querySelector(".svampe_name").textContent = svampe.name;
  document.querySelector(".answer_picking").textContent = svampe.picking;
  document.querySelector(".answer_spot").textContent = svampe.spot;
  document.querySelector(".skov_name").textContent = svampe.place;
  document.querySelector(".skov_name_2").textContent = svampe.place_2;
  document.querySelector(".description").textContent = svampe.description;

  // Assuming svampe_img and skov_img are properties of the svampe object
  let svampe_img = svampe.svampe_img;
  let skov_img = svampe.skov_img;
  document.querySelector(".svampe").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${svampe_img}.png`; // vis ikke billeder type png. rette til jpg eller webp.
  // Update the image source and alt attributes
  skov_image.src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${skov_img}.jpg`;
  skov_image.alt = svampe.name;
  // Assuming skov_img_2 is another property of the svampe object
  let skov_img_2 = svampe.skov_img_2; // Replace with the actual property name
  document.querySelector(".skov_img_2").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${skov_img_2}.jpg`;
  document.querySelector(".skov_img_2").alt = svampe.name;
}

getSvampe();
