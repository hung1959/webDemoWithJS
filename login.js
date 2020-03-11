var adminUsername = 'admin';
var adminPassword = 'admin';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form_login');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
} 
else{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == adminUsername && password == adminPassword){
        // window.moveTo('homepage.html');
        window.open('homepage.html');
    }
    else{
        alert('Username hoặc password không đúng');
    }
}

jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});

