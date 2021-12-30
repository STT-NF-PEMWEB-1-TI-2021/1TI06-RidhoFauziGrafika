function login(e){
    e.preventDefault()
    let user = document.getElementById("user").value
    let pasword = document.getElementById("pasword").value

    if(user == "ahmad2017" && pasword == "integrity"){
        location.href = "berhasil.html"
    }else{
        alert("Login Gagal")
    }
}