var unit1 = require('Unit1') ;

function main(){
  var ecran = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES");
  
  var champLibOpe = ecran.WinFormsObject("tlp_principal").WinFormsObject("tbx_libelle");
  var c = new Champ(champLibOpe);
  c.ecrire("blabla");
  
  //unit1.ecrire(champLibOpe, "TEST");
}

function Champ(champ) {
  this._champ = champ;
  this.ecrire = function(text) {
    unit1.ecrire(this._champ, text);
  }
}