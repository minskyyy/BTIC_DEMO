function changeContent(szenario){
  var headerID = "header";
  var textID = "text";
  var header = "";
  var text = "";
  var e;
  var i = 0;
  if (szenario==1) {
    var mydata = JSON.parse(digikamSZ1);
    i = 0;
    e = 0;
    for (var element in mydata) {
      if (mydata.hasOwnProperty(element)) {
        headerID = "header"+e;
        textID = "text"+e;
        header = mydata[i].header;
        text = mydata[i].text;
        document.getElementById(headerID).innerHTML = header;
        document.getElementById(textID).innerHTML = text;
        i++;
        e++
      }
    }
  }
  else if (szenario==2) {
    e = 6;
    var mydata = JSON.parse(sofiaSZ2);
    for (var element in mydata) {
      if (mydata.hasOwnProperty(element)) {
        headerID = "header"+e;
        textID = "text"+e;
        header = mydata[i].header;
        text = mydata[i].text;
        document.getElementById(headerID).innerHTML = header;
        document.getElementById(textID).innerHTML = text;
        i++;
        e++
      }
    }
  }
  else{
    alert("Error")
  }

}
// forEach((item, i) => {
//   document.getElementById("modelType").setAttribute("src", "images/turbine.glb")
// });
