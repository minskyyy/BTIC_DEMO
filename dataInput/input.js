var headerID = "header";
var textID = "text";
var header = "";
var text = "";

function changeContent(szenario){
  var i = 0;
  if (szenario==1) {
    var mydata = JSON.parse(digikamSZ1);
    for (var element in mydata) {
      if (mydata.hasOwnProperty(element)) {
        header = mydata[i].header;
        text = mydata[i].text;
        document.getElementById(headerID).innerHTML = header;
        document.getElementById(textID).innerHTML = text;
        i++;
        headerID = "header"+i;
        textID = "text"+i;
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
