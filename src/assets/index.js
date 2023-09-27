
function toggleProfileCard() {
  const profileCard = document.getElementById('profileCard');
  profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
}
function moreinfo() {
  const infoCard = document.getElementById('infocard');
  infoCard.style.display = infoCard.style.display === 'none' ? 'block' : 'none';
}











// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showMap);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function showMap(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;

//   var mapImage = document.getElementById("map-image");
//   mapImage.src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&markers=${latitude},${longitude}&key=YOUR_API_KEY`;

//   var locationDiv = document.getElementById("location");
//   locationDiv.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
// }











const findMyState=()=>
{

  const status=document.querySelector('.status');
  const success=(position)=>
  {
    console.log(position);
  }
  const error=()=>
  {
    status.textContent="Unable your location";

  }
  navigator.geolocation.getCurrentPosition(success,error);

}