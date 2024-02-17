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
  document.querySelector(".svampe_name").textContent = svampe.name;
  document.querySelector(".answer_picking").textContent = svampe.picking;
  document.querySelector(".answer_spot").textContent = svampe.spot;
  document.querySelector(".svampe").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${svampe_img}.png`;
  document.querySelector(".skov_img_1").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${skov_img}.jpg`;
  document.querySelector(".skov_img_1").src.alt = svampe.name;
  document.querySelector(".skov_img_2").src = `https://mymxopdswecfhtqjjdaj.supabase.co/images/webp/640/${skov_img_2}.jpg`;
  document.querySelector(".skov_img_2").src.alt = svampe.name;
}

getSvampe();
