let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let jam = document.getElementById('jam');
let tujuan = document.getElementById('tujuan');
let tiket = document.getElementById("tiket");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs(e) {
	e.preventDefault();
	let usernameValue = username.value.trim();
	let emailValue = email.value.trim();
	let jamValue = jam.value.trim();
	let tujuanValue = tujuan.value.trim();
    let tiketValue = tiket.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Nama Pelanggan tidak boleh kosong');
	} else {
		setSuccessFor(username, '');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email tidak boleh kosong');
	} else {
		setSuccessFor(email, '');
	}
	
	if(jamValue === '') {
		setErrorFor(jam, 'Jam tidak boleh kosong');
	} else {
		setSuccessFor(jam, '');
	}
	
	if(tujuanValue === '') {
		setErrorFor(tujuan, 'Tujuan Keberangkatan tidak boleh kosong');
	} else{
		setSuccessFor(tujuan, '');
	}

    if(tiketValue === '') {
		setErrorFor(tiket, 'Tiket tidak boleh kosong');
	} else{
		setSuccessFor(tiket, '');
	}
}

function setErrorFor(input, message) {
	let form = input.parentElement;
	let small = form.querySelector('small');
	small.innerHTML = message;
}

function setSuccessFor(input, message) {
	let form = input.parentElement;
	let small = form.querySelector('small');
	small.innerHTML = '';
}

function hasildata() {
	let form = document.getElementById("form")
	let data = document.getElementById("data")
	let hasil = form.querySelectorAll("input")
	let teks = form.querySelectorAll("label")
	for (let i = 0; i <= form.length; i++) {
	data.innerHTML += teks[i].textContent + " : " + hasil[i].value + "<br>" 
	}
}