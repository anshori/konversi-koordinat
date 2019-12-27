function konversi() {
  var longD = parseFloat(document.getElementById("longdegree").value);
  var longM = parseFloat(document.getElementById("longminutes").value);
  var longS = parseFloat(document.getElementById("longseconds").value);
  var latD = parseFloat(document.getElementById("latdegree").value);
  var latM = parseFloat(document.getElementById("latminutes").value);
  var latS = parseFloat(document.getElementById("latseconds").value);

  if (longD > 0) {
    document.getElementById('long').value = longD + ((longM + (longS/60))/60);
  } else {
    document.getElementById('long').value = longD - ((longM + (longS/60))/60);
  }
  if (latD > 0) {
    document.getElementById('lat').value = latD + ((latM + (latS/60))/60);
  } else {
    document.getElementById('lat').value = latD - ((latM + (latS/60))/60);
  }
}