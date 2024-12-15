var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
}

// Enable-when behavior
var enableGender = document.getElementById('linkitem-4.2.1').value;
var enableDiabetic = document.querySelector('input[name="diabetic"]:checked').value;
var enableBDate = Date.parse(document.getElementById('bDate').value);
checkEnablePregnant();
checkEnableDiabetic();
checkEnableGestational();
checkEnableMamogram();

function enableGenderChange() {
  enableGender = document.getElementById('linkitem-4.2.1').value;
  checkEnablePregnant();
  checkEnableDiabetic();
  checkEnableGestational();
  checkEnableMamogram();
}

function enableDiabeticChange() {
  enableDiabetic = document.querySelector('input[name="diabetic"]:checked').value;
  checkEnableDiabetic();
  checkEnableGestational();
}

function enableBDateChange() {
  BDate = document.getElementById('bDateText').value;
  
  if (BDate.length==10 && !isNaN(Date.parse(BDate))) {
    enableBDate = Date.parse(BDate);
    $("#bDateText").removeAttr("style")
  } else {
    enableBDate = NaN;
    $("#bDateText").attr("style", "color:red")
  }

  checkEnableMamogram();
}

function checkEnablePregnant() {
  if (enableGender=='female') {
    $("#enablePregnant").removeAttr("style");
    $("#pregyes").removeAttr("disabled");
    $("#pregno").removeAttr("disabled");
    $("#pregunknown").removeAttr("disabled");
  } else {
    $("#enablePregnant").attr("style", "color:grey");
    $("#pregyes").attr("disabled","disabled");
    $("#pregno").attr("disabled","disabled");
    $("#pregunknown").attr("disabled","disabled");
  }
}

function checkEnableDiabetic() {
  if (enableGender=='female') {
    $("#enableDiabetic").removeAttr("style");
  } else {
    $("#enableDiabetic").attr("style", "visibility:hidden");
  }
}

function checkEnableGestational() {
  if (enableGender=='female' && enableDiabetic=='Y') {
    $("#enableGestational").removeAttr("style");
    $("#gestationalyes").removeAttr("disabled");
    $("#gestationalno").removeAttr("disabled");
    $("#gestationalunknown").removeAttr("disabled");
  } else {
    $("#enableGestational").attr("style", "color:grey");
    $("#gestationalyes").attr("disabled","disabled");
    $("#gestationalno").attr("disabled","disabled");
    $("#gestationalunknown").attr("disabled","disabled");
  }
}

function checkEnableMamogram() {
  age = 0
  if (!isNaN(enableBDate)) {
    var ageDifMs = Date.now() - enableBDate;
    var ageDate = new Date(ageDifMs);
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  if (enableGender=='female' && age > 40) {
    $("#enableMamogram").removeAttr("style");
    $("#mamogramyes").removeAttr("disabled");
    $("#mamogramno").removeAttr("disabled");
    $("#mamogramunknown").removeAttr("disabled");
  } else {
    $("#enableMamogram").attr("style", "color:grey");
    $("#mamogramyes").attr("disabled","disabled");
    $("#mamogramno").attr("disabled","disabled");
    $("#mamogramunknown").attr("disabled","disabled");
  }
}
