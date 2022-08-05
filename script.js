function daysHours() {
  let msg = document.getElementById("msg");
  const img = document.getElementsByTagName("img");
  let data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();

  msg.innerHTML = `Agora são ${hour}:${minutes}:${seconds}`;

  if (hour >= 6 && hour < 12) {
    img.src = "manha.gif";
    document.body.style.background = "#62a6d2";
  } else if (hour >= 12 && hour <= 18) {
    img.src = "tarde.gif";
    document.body.style.background = "#fee2d1";
  } else if (hour >= 18 && hour <= 0) {
    img.src = "anoitecer.jpg";
    document.body.style.background = "#84686d";
  } else {
    img.src = "noite.gif";
    document.body.style.background = "#4a485f";
  }
}
setInterval(daysHours, 1000);
