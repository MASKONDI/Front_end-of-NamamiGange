var fristname=document.forms["form1"]["fristname"];
var lastname=document.forms["form1"]["lastname"];
var email=document.forms["form1"]["email"];
var password=document.forms["form1"]["password"];
var confirmpassword=document.forms["form1"]["password-confirmation"];
var birthday=document.forms["form1"]["birthday"];
var gender=document.forms["form1"]["gender"];

var fristname_error=document.getElementById("fristname_error");
var lastname_error=document.getElementById("lastname_error");
var email_error=document.getElementById("email_error");
var password_error=document.getElementById("password_error");
var confirmpassword_error=document.getElementById("confirmpassword_error");
var birthday_error=document.getElementById("birthday_error");

var gender_error=document.getElementById("gender_error");
fristname.addEventListener("blur", fristnameVerify,true);
lastname.addEventListener ("blur", lastnameVerify,true);
fristname.addEventListener("blur", emailVerify,true);
fristname.addEventListener("blur", passwordVerify,true);
fristname.addEventListener("blur", confirmpasswordVerify,true);
function validate()
{
	if(fristname.value==' ')
	{
		fristname.style.border='1px solid red';
		fristname_error.textContent='frist name is required';
		fristname.focus();
		return false;
		}
		if(lastname.value==' ')
	{
		lastname.style.border='1px solid red';
		lastname_error.textContent='last name is required';
		lastname.focus();
		return false;
		}
		if(fristname.value==' ')
	{
		email.style.border='1px solid red';
		email_error.textContent='email is required';
		email.focus();
		return false;
		}
		if(password.value==' ')
	{
		password.style.border='1px solid red';
		password_error.textContent='password is required';
		password.focus();
		return false;
		}
	}
function fristnameverify()
	{
		if(fristname.value != "")
		{
			fristname.style.border="1px solid red";
			fristname_error.innerHTML="";
			return true;
			}
	}
function lastnameverify()
	{
		if(lastname.value != "")
		{
			lastname.style.border="1px solid red";
			lastname_error.innerHTML="";
			return true;
			}
	}
function emaileverify()
	{
		if(email.value != "")
		{
			email.style.border="1px solid red";
			email_error.innerHTML="";
			return true;
			}
	}
function passwordverify()
	{
		if(passwordname.value != "")
		{
			password.style.border="1px solid red";
			password_error.innerHTML="";
			return true;
			}
	}



