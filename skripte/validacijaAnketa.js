function validacija() {
	if(document.getElementById('spol1').checked == false && document.getElementById('spol2').checked == false) {
		alert("Niste odabrali spol.");
		return false;
	}

	if(document.getElementById('god1').checked == false && document.getElementById('god2').checked == false && document.getElementById('god3').checked == false && document.getElementById('god4').checked == false) {
		alert("Niste odabrali godine.");
		return false;
	}

	if(document.getElementById('put1').checked == false && document.getElementById('put2').checked == false && document.getElementById('put3').checked == false && document.getElementById('put4').checked == false && document.getElementById('put5').checked == false && document.getElementById('put6').checked == false) {
		alert("Niste rekli koliko često putujete.");
		return false;
	}

	if(document.getElementById('mot1').checked == false && document.getElementById('mot2').checked == false && document.getElementById('mot3').checked == false && document.getElementById('mot4').checked == false && document.getElementById('mot5').checked == false) {
		alert("Niste odabrali motiv vaših putovanja.");
		return false;
	}

	if(document.getElementById('kako1').checked == false && document.getElementById('kako2').checked == false && document.getElementById('kako3').checked == false && document.getElementById('kako4').checked == false && document.getElementById('kako5').checked == false) {
		alert("Kako organizujete svoja putovanja?");
		return false;
	}

	if(document.getElementById('oblik1').checked == false && document.getElementById('oblik2').checked == false && document.getElementById('oblik3').checked == false && document.getElementById('oblik4').checked == false && document.getElementById('oblik5').checked == false && document.getElementById('oblik6').checked == false && document.getElementById('oblik7').checked == false && document.getElementById('oblik8').checked == false && document.getElementById('oblik9').checked == false) {
		alert("Niste odabrali koji vas oblik putovanja najviše privlači.");
		return false;
	}

	if(document.getElementById('tur1').checked == false && document.getElementById('tur2').checked == false && document.getElementById('tur3').checked == false) {
		alert("Da li smatrate da je turizam u BiH dovoljno aktivan u odnosu na zemlje u regiji?");
		return false;
	}

	alert("Hvala vam. Vaši glasovi su zabilježeni.");
	return true;
}