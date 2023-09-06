//document.getElementById('test').innerHTML = "Geänderte Überschrift";
//window.onload = function(){document.getElementById('test').innerHTML = "Geänderte Überschrift";};



//Klasse
function Auto(elektro, farbe, ausstattung, marke) {
  this.elektro = elektro;
  this.farbe = farbe;
  this.ausstattung = ausstattung;
  this.marke = marke;
  this.geschwindigkeit = 0;
  this.beschleunigen = function(beschleunigung) {
    this.geschwindigkeit = this.geschwindigkeit + beschleunigung;
    console.log("Neue Geschwindigkeit ist " + this.geschwindigkeit + " km/h");
  }
}

//Erzeugung einer Instanz
var fiat = new Auto(false, "schwarz", "Leder", "Fiat");
fiat.beschleunigen(20);

//Funktionen und Variablen einer Instanz






function rechteck(a,b) {
  return a * b;
}




var test = 0;


function durchschnitt(array) {
  var sum = 0;
  array.forEach(function(zahl) {
    sum = sum + zahl;
  });
  console.log(sum / array.length);
}

console.log(sum);





function evenOdd(zahl) {
  if (zahl % 2 == 0) {
    return "Gerade";
  } else {
    return "Ungerade";
  }
}






function Konto(owner, kontostand) {
  this.owner = owner;
  this.gesperrt = false;
  this.kontostand = kontostand;
  this.zinssatz = 0.02;
  this.einzahlung = function(betrag) {
    this.kontostand += betrag;
    console.log("Neuer Kontostand: " + kontostand);
  }
  this.auszahlung = function(betrag) {
    if (betrag <= this.kontostand) {
      this.kontostand -= betrag;
      console.log("Neuer Kontostand: " + kontostand);
    } else {
      console.log("Kontostand zu gering");
    }
  this.prüfung = function(name) {
    if (this.owner === name) {
      console.log("Confirmed");
    } else {
      console.log("Not Confirmed");
    }
  }
  this.überweisung = function(betrag, name) {
    if (betrag <= this.kontostand) {
      this.kontostand -= betrag;
      console.log("Neuer Kontostand: " + kontostand);
      name.einzahlung(betrag);
    } else {
      console.log("Kontostand zu gering");
    }
  }
  this.sperren = function() {
    this.gesperrt = true;
  }
  this.zinsen = function() {
    this.kontostand = (this.zinssatz + 1) * this.kontostand;
  }
}








//end
