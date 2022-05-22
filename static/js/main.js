var temp = false;
productChanhday = () => {
  temp = !temp;
  if (temp) {
    document.getElementById("rProduct").style.display = "block";
     document.getElementById("rProduct2").style.display = "none";
     document.getElementById("rProduct3").style.display = "none";
  } else document.getElementById("rProduct").style.display = "none";
};
var temp2 = false;
productSocola = () => {
  temp2 = !temp2;
  if (temp2) {
    document.getElementById("rProduct2").style.display = "block";
    document.getElementById("rProduct").style.display = "none";
     document.getElementById("rProduct3").style.display = "none";
  } else document.getElementById("rProduct2").style.display = "none";
};
var temp3 = false;
productTraitim = () => {
    temp3 = !temp3;
    if (temp3) {
      document.getElementById("rProduct3").style.display = "block";
      document.getElementById("rProduct").style.display = "none";
      document.getElementById("rProduct2").style.display = "none";
    } else document.getElementById("rProduct3").style.display = "none";
}
