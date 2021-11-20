var names = document.getElementById('name')
var password = document.getElementById('password')
var message = document.getElementById('message')

function login(){
var ajax = new XMLHttpRequest()
ajax.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
// alert()
message.innerHTML = this.responseText
}
}
ajax.open('GET','test.txt',true)
ajax.send()
var crypt = {
secret: "THESECRET",
encrypt: function(password){
var encrypted = CryptoJS.AES.encrypt(password, crypt.secret);
encrypted = encrypted.toString()
return encrypted
},
decrypt: function(encrypted){
var decrypted = CryptoJS.AES.decrypt(encrypted, crypt.secret)
decrypted = decrypted.toString(CryptoJS.enc.Utf8)
return decrypted
}
}
var encrypted = crypt.encrypt(password.value)
console.log(encrypted)
var decrypted = crypt.decrypt(encrypted)
console.log(decrypted)
}

