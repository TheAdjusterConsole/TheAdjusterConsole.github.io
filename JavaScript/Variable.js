//Restricted Use License
//
//This code is provided under the following terms and conditions:
//
//1. You are not allowed to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code in any form, modified or unmodified, without express written permission from the author.
//
//2. You are not allowed to use this code for any illegal or unethical purpose.
//
//3. This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//
//4. This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
//By using this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
//
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole.com.

function RESET() {
  document.getElementById("textarea3").value = "";
  document.getElementById("textarea2").value = "";
  document.getElementById("textarea1").value = "CONTACT:   \rPAYMENT:   \rZIPCODE:   \rMILEAGE:   \rDISTANCE:   \rTIME:   ";
  document.getElementById("partname1").value = "";
  document.getElementById("partname2").value = "";
  document.getElementById("partname3").value = "";
  document.getElementById("partname4").value = "";
  document.getElementById("partname5").value = "";
  document.getElementById("partname6").value = "";
  document.getElementById("partname7").value = "";
  document.getElementById("partnum").value = "";
  document.getElementById("rfprice").value = "";
  document.getElementById("msrp").value = "";
  document.getElementById("partname2").style.display = "none";
  document.getElementById("partname3").style.display = "none";
  document.getElementById("partname4").style.display = "none";
  document.getElementById("partname5").style.display = "none";
  document.getElementById("partname6").style.display = "none";
  document.getElementById("partname7").style.display = "none";
  document.getElementById("RFIBBTN").style.display = "inline-block";
  document.getElementById("TGAFBTN").style.display = "inline-block";
  didntHave();
  rfbaseFour();
  authforOSB();
  OOPADCB();
  shipADCB();
  bothADDCB();
  hideSnip();
  ClearText();
  localStorage.setItem("newpartcount","2");
  document.getElementById("transferTemplate").style.display = "none";
  document.getElementById("statNote").style.display = "none";
  document.getElementById("newAuthstyle").style.display = "none";
  document.getElementById("TPDiv").style.display = "none";
}

function CloseIt(){
  document.getElementById("snipbox").style.display = "none";
}

function ClearText(){
  document.getElementById("Snippings").value = "";
}

function COPYIt(){
  let textarea = document.getElementById("Snippings");
  textarea.select();
  document.execCommand("copy");
}

function authforOSB(){
  document.getElementById("TGAFOBTN").style.display = "none";
  document.getElementById("TGAFSBTN").style.display = "none";
  document.getElementById("TGAFBBTN").style.display = "none";
}

function OOPADCB() {
  document.getElementById("TGAFOABTN").style.display = "none";
  document.getElementById("TGAFODBTN").style.display = "none";
  document.getElementById("TGAFOCBTN").style.display = "none";
}

function shipADCB() {
  document.getElementById("TGAFSABTN").style.display = "none";
  document.getElementById("TGAFSDBTN").style.display = "none";
  document.getElementById("TGAFSCBTN").style.display = "none";
}

function bothADDCB() {
  document.getElementById("TGAFOSABTN").style.display = "none";
  document.getElementById("TGAFOSDSBTN").style.display = "none";
  document.getElementById("TGAFOSDBBTN").style.display = "none";
  document.getElementById("TGAFOSCBTN").style.display = "none";
}

function TGAF(){
  if (checkOpen()) { return; }
  ClearText();
  hideSnip();
  document.getElementById("TGAFBTN").style.display = "inline-block";
  document.getElementById("TGAFOBTN").style.display = "inline-block";
  document.getElementById("TGAFSBTN").style.display = "inline-block";
  document.getElementById("TGAFBBTN").style.display = "inline-block";
}

function showVM() {
  document.getElementById("NALVM").style.display = "inline-block";
  document.getElementById("NANVM").style.display = "inline-block";
}

function hideVM() {
  document.getElementById("NALVM").style.display = "none";
  document.getElementById("NANVM").style.display = "none";
}

function setVMpos() {
  document.getElementById("NALVM").style.left = "270px";
  document.getElementById("NANVM").style.left = "270px";
}

function changeVMpos() {
  document.getElementById("NALVM").style.left = "400px";
  document.getElementById("NANVM").style.left = "400px";
}

function rfbaseFour() {
  document.getElementById("RFIBDH").style.display = "none";
  document.getElementById("PNLCBTN").style.display = "none";
  document.getElementById("TOTALBTN").style.display = "none";
  document.getElementById("RFAUTHBTN").style.display = "none";
}

function didntHave() {
  document.getElementById("RFIBND").style.display = "none";
  document.getElementById("RFIBNE").style.display = "none";
  document.getElementById("RFIBNF").style.display = "none";
  document.getElementById("RFIBNV").style.display = "none";
}

function TGAFO() {
  document.getElementById("TGAFOABTN").style.display = "inline-block";
  document.getElementById("TGAFODBTN").style.display = "inline-block";
  document.getElementById("TGAFOCBTN").style.display = "inline-block";
  showVM();
  var VMREASON = "Called CH to get auth for OOPC.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFS() {
  document.getElementById("TGAFSABTN").style.display = "inline-block";
  document.getElementById("TGAFSDBTN").style.display = "inline-block";
  document.getElementById("TGAFSCBTN").style.display = "inline-block";
  showVM();
  authforOSB();
  var VMREASON = "Called CH to get auth for shipping.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFB() {
  changeVMpos();
  document.getElementById("TGAFOSABTN").style.display = "inline-block";
  document.getElementById("TGAFOSDSBTN").style.display = "inline-block";
  document.getElementById("TGAFOSDBBTN").style.display = "inline-block";
  document.getElementById("TGAFOSCBTN").style.display = "inline-block";
  showVM();
  authforOSB();
  var VMREASON = "Called CH to get auth for OOPC and shipping.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFOA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH approved OOPC.\rWill call RF to give auth info\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB();
  authforOSB();
  hideVM();
}

function TGAFOD(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH declined repairs at this time.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB();
  authforOSB();
  hideVM();
}

function TGAFOC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH will call back with decision.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB();
  authforOSB();
  hideVM();
}

function TGAFSA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH approved shipping.\rWill call RF to inform and order part\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFSD(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH declined shipping and will use RF parts.\rCH has agreed to the OOPC.\rWill call RF to inform and give auth";
  } else {
  document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFSC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH will call back with decision\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFOSA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH approved OOPC and shipping.\rWill call RF to inform and order parts.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSDS(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH declined shipping and will use RF parts.\rCH has agreed to the OOPC.\rWill call RF to inform and give auth";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSDB(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH declined repairs at  this time.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH will call back with decision.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function RFIB() {
  if (checkOpen()) { return; }
  ClearText();
  hideSnip();
  document.getElementById("RFIBDH").style.display = "inline-block";
  document.getElementById("PNLCBTN").style.display = "inline-block";
  document.getElementById("TOTALBTN").style.display = "inline-block";
  document.getElementById("RFAUTHBTN").style.display = "inline-block";
}


function RFIBDH(){
  document.getElementById("RFIBND").style.display = "inline-block";
  document.getElementById("RFIBNE").style.display = "inline-block";
  document.getElementById("RFIBNF").style.display = "inline-block";
  document.getElementById("RFIBNV").style.display = "inline-block";
  rfbaseFour();
}

function RFIBND(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check === null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have a complete diagnostic\rADV RF of requirements to open claim\rRF understood and will call back when diag is complete\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNE(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have estimate ready\rADV RF of requirements to open claim\rRF understood and will call back with estimate\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNF(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have verified cause of failure\rADV RF of requirements to open claim\rRF understood and will call back when ready\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNV(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rCH vehicle is not at RF\rADV RF of requirements to open claim\rRF understood and will call back when vehicle has returned\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function PNLC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  document.getElementById("Snippings").style.visibility = "visible";
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in with the following concerns:\r\rADV PNLC";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  rfbaseFour();
}

function TOTAL(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to go over totals.\rADV RF of totals. RF understood.";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  rfbaseFour();
}

function GAR(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to get auth info.\rVerified OOPC was authed via notes.\rGave RF auth and payment details.";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  rfbaseFour();
}

function NAV() {
  showSnip();
  document.getElementById("Snippings").value = localStorage.getItem("VMREASON");
  document.getElementById("Snippings").value += "No answer - Left voicemail\rTasked to CS callbacks\r";
  COPYIt();
  OOPADCB();
  authforOSB();
  shipADCB();
  bothADDCB();
  hideVM();
  setVMpos();
}

function NAN() {
  showSnip();
  document.getElementById("Snippings").value = localStorage.getItem("VMREASON");
  document.getElementById("Snippings").value += "No answer - No voicemail available\rTasked to CS callbacks\r";
  COPYIt();
  OOPADCB();
  authforOSB();
  shipADCB();
  bothADDCB();
  hideVM();
  setVMpos();
}

function RESETNOTE() {
  document.getElementById("RFIBBTN").style.display = "inline-block";
  document.getElementById("TGAFBTN").style.display = "inline-block";
  rfbaseFour();
  didntHave();
  authforOSB();
  OOPADCB();
  shipADCB();
  bothADDCB();
  hideSnip();
  hideVM();
  localStorage.removeItem("VMREASON");
  ClearText();
  setVMpos();
}

function showSnip() {
  document.getElementById("Snippings").style.display = "inline-block";
}

function hideSnip() {
  document.getElementById("Snippings").style.display = "none";
}

function BuilderShow() {
  var menuOpen = localStorage.getItem("menuOpen");
  var toggleMaster = document.getElementById("toggleMaster");
  var BtnBuilder = document.getElementById("BtnBuilder");
  if (toggleMaster.style.display == "none") {
    toggleMaster.style.display = "inline-block";
    BtnBuilder.innerText = "\u2666 Hide Toggle \u2666";
  } else {
    toggleMaster.style.display = "none";
    BtnBuilder.innerText = "\u2666 Toggle On/Off \u2666";
    if (menuOpen == 'true'){
      MENU();
    }
  }
}

document.onkeydown = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    document.getElementById('myInfo').style.display = "inline-block";
  }
};

document.onkeyup = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    document.getElementById('myInfo').style.display = "none";
  }
};

document.onkeydown = function(e) {
  if (e.ctrlKey && e.shiftKey && e.which == 70) {
    anotherView();
  }
};

function anotherView() {
  var hlc = document.getElementById('hlc');
  var ITSBRITTNEY = document.getElementById('ITSBRITTNEY');

  var allBut = document.getElementById('allBut');
  var snipbox2 = document.getElementById('snipbox2');
  var textarea = document.getElementById('textarea2');
  var NUMBERS2 = document.getElementById('NUMBERS2');

  if (ITSBRITTNEY.style.display == 'inline-block') {
    ITSBRITTNEY.style.display = "none";
    textarea.style.display = "none";

  } else {

    hlc.style.display = "inline-block";
    ITSBRITTNEY.style.display = "inline-block";
    textarea.style.display = "inline-block";
  }
}
