var temp = false;
tabs1 = () => {
  temp = !temp;
  if (temp) {
    document.getElementById("proflie").style.display = "block";
    document.getElementById("payment").style.display = "none";
    document.getElementById("subcription").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById(" privacy").style.display = "none";
  } else    document.getElementById("proflie").style.display = "hiden";
};
var temp2 = false;
tabs2= () => {
  temp2 = !temp2;
  if (temp2) {
    document.getElementById("payment").style.display = "block";
    document.getElementById("proflie").style.display = "none";
    document.getElementById("subcription").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("privacy").style.display = "none";
  } else   document.getElementById("payment").style.display = "hiden";
};
var temp3 = false;
tabs3 = () => {
    temp3 = !temp3;
    if (temp3) {
        document.getElementById("subcription").style.display = "block";
        document.getElementById("payment").style.display = "none";
        document.getElementById("proflie").style.display = "none";
        document.getElementById("setting").style.display = "none";
        document.getElementById("privacy").style.display = "none";
    } else    document.getElementById("subcription").style.display = "hiden";
};
var temp4 = false;
tabs4 = () => {
    temp4 = !temp4;
    if (temp4) {
        document.getElementById("privacy").style.display = "block";
        document.getElementById("subcription").style.display = "none";
        document.getElementById("payment").style.display = "none";
        document.getElementById("proflie").style.display = "none";
        document.getElementById("setting").style.display = "none";
    } else  document.getElementById("privacy").style.display = "hiden";
};
var temp5 = false;
tabs5 = () => {
    temp5 = !temp5;
    if (temp5) {
        document.getElementById("setting").style.display = "block";
        document.getElementById("privacy").style.display = "none";
        document.getElementById("payment").style.display = "none";
        document.getElementById("proflie").style.display = "none";
        document.getElementById("subcription").style.display = "none";
    } else    document.getElementById("setting").style.display = "hiden";
}
