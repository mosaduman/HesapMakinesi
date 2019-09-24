function GecmisAl(){
	return document.getElementById("gecmis-deger").innerText;
}
function GecmisYaz(sayi){
	document.getElementById("gecmis-deger").innerText=sayi;
}
function SonucAl(){
	return document.getElementById("sonuc-deger").innerText;
}
function SonucYaz(sayi){
	if(sayi==""){
		document.getElementById("sonuc-deger").innerText=sayi;
	}
	else{
		document.getElementById("sonuc-deger").innerText=SayiBicimlendir(sayi);
	}	
}
function SayiBicimlendir(sayi){
	if(sayi=="-"){
		return "";
	}
	var n = Number(sayi);
	var value = n.toLocaleString("en");
	return value;
}

function SayiBiciminiKaldir(sayi){
	return Number(sayi.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="sil"){
			GecmisYaz("");
			SonucYaz("");
		}
		else if(this.id=="tekteksil"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
				sayi= sayi.substr(0,sayi.length-1);
				SonucYaz(sayi);
			}
		}
		else if(this.id=="kare"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
						SonucYaz(Math.pow(sayi,2));
					}
		}
		else if(this.id=="kup"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
						SonucYaz(Math.pow(sayi,3));
					}
		}
		else if(this.id=="bolu"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
						SonucYaz(1/sayi);
					}
		}
		else if(this.id=="kok"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
						SonucYaz(Math.sqrt(sayi));
					}
		}
			else if(this.id=="nokta"){
			var sayi=SayiBiciminiKaldir(SonucAl()).toString();
			if(sayi){
			var a=parseFloat(sayi+".");
						SonucYaz(a);
					}
		}
		else{
			var SonucSayi=SonucAl();
			var GecmisSayi=GecmisAl();
			if(SonucSayi==""&&GecmisSayi!=""){
				if(isNaN(GecmisSayi[GecmisSayi.length-1])){
					GecmisSayi= GecmisSayi.substr(0,GecmisSayi.length-1);
				}
			}
			if(SonucSayi!="" || GecmisSayi!=""){
				SonucSayi= SonucSayi==""?SonucSayi:SayiBiciminiKaldir(SonucSayi);
				GecmisSayi=GecmisSayi+SonucSayi;
				if(this.id=="="){
					var İslemSonuc=eval(GecmisSayi);
					SonucYaz(İslemSonuc);
					GecmisYaz("");
				}
				else{
					GecmisSayi=GecmisSayi+this.id;
					GecmisYaz(GecmisSayi);
					SonucYaz("");
				}
			}
		}
		
	});
}
var rakam = document.getElementsByClassName("rakam");
for(var i =0;i<rakam.length;i++){
	rakam[i].addEventListener('click',function(){
		var sonuc=SayiBiciminiKaldir(SonucAl());
		if(sonuc!=NaN){ //if output is a number
			sonuc=sonuc+this.id;
			SonucYaz(sonuc);
		}
	});
}