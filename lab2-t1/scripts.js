var pib = document.getElementById('formPIB');
var id = document.getElementById('formID');
var date = document.getElementById('formDate');
var adress = document.getElementById('formAdress');
var email = document.getElementById('formEmail');

var pibRgex = /^[A-ZА-ЯЄІЇ][a-zа-яєії]+\s[A-ZА-ЯЄІЇ]\.[A-ZА-ЯЄІЇ"]\.$/i;
var idRgex = /^[А-ЯЄІЇ]{2}\s№[0-9]{6}$/i;
var dateRgex = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i;
var adressRgex = /^[мс]\.\s[А-ЯЄІЇа-яєії\s\-]+$/i;
var emailRgex = /^[a-z]+@[a-z]+\.com$/i;

function classNameChange(b, e) {
	if (b) {
		e.classList.remove('is-invalid');
		e.classList.add('is-valid');
	} else {
		e.classList.remove('is-valid');
		e.classList.add('is-invalid');
	}
}

function pibIsValid() {
	return (pib != null && pib.value.length > 6 && pib.value.length < 121 && pibRgex.test(pib.value));
}

function idIsValid() {
	return (id != null && idRgex.test(id.value));
}

function dateIsValid() {
	return (date != null && dateRgex.test(date.value));
}

function adressIsValid() {
	return (adress != null && adress.value.length > 4 && adress.value.length < 121 && adressRgex.test(adress.value));
}

function emailIsValid() {
	return (email != null && email.value.length > 6 && email.value.length < 121 && emailRgex.test(email.value));
}

pib.addEventListener("keyup", () => {classNameChange(pibIsValid(), pib)});
id.addEventListener("keyup", () => {classNameChange(idIsValid(), id)});
date.addEventListener("keyup", () => {classNameChange(dateIsValid(), date)});
adress.addEventListener("keyup", () => {classNameChange(adressIsValid(), adress)});
email.addEventListener("keyup", () => {classNameChange(emailIsValid(), email)});

var myform = document.getElementById('myform');
var result = document.getElementById('result');
myform.addEventListener("submit", (event) => {
	event.preventDefault();
	if (pibIsValid() && idIsValid() && dateIsValid() && adressIsValid() && emailIsValid()) {
		myform.classList.add('d-none');
		result.classList.remove('d-none');
		result.innerHTML = "<h1>Результат</h1>" +
		"	<p>" +
		"		<b>ПІБ:</b> " + pib.value + "<br>" +
		"		<b>ID-card:</b> " + id.value + "<br>" +
		"		<b>Дата народження:</b> " + date.value + "<br>" +
		"		<b>Адреса:</b> " + adress.value + "<br>" +
		"		<b>e-mail:</b> " + email.value + "<br>" +
		"	</p>";
	}
});