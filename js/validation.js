function submitvalidation()
{
    var fullname=document.getElementById("fullname").value;
	var addressbox=document.getElementById("addressbox").value;
	var telephonenumber=document.getElementById("telephonenumber").value;
	var emailaddress=document.getElementById("emailaddress").value;
	var message=document.getElementById("message").value;
	
    
    var error=0;
	
    if(fullname == "")
    {
        var msg="please enter name";
        document.getElementById("error-fullname").innerHTML=msg; 
        error++;
    }
    else
    {
        document.getElementById("error-fullname").innerHTML="";
    }
	
	
	
	
	if(addressbox == "")
    {
        var msg="please enter address";
        document.getElementById("error-address").innerHTML=msg;
       error++;
    }
    else
    {
        document.getElementById("error-address").innerHTML="";
    }
	
	
	if(telephonenumber == "")
    {
        var msg="please enter contact no.";
        document.getElementById("error-telephonenumber").innerHTML=msg;
        error++;
    }
    else
    {
        var reg=/^([0-9]{7,12})$/;
        if(reg.test(telephonenumber) == false)
        {
            var msg="insert valid contact no.";
            document.getElementById("error-telephonenumber").innerHTML=msg;
            error++;
        }
        else
        {
            document.getElementById("error-telephonenumber").innerHTML="";
        }
    }
	
	if(emailaddress == "")
    {
        var msg="please enter email";
        document.getElementById("error-emailaddress").innerHTML=msg;
        error++;
    }
    else
    {
         // following pattern specifies the rules for email
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(emailaddress) == false)
        {
            var msg="please enter valid email";
            document.getElementById("error-emailaddress").innerHTML=msg;
            error++;
        }
        else
        {
            document.getElementById("error-emailaddress").innerHTML="";
        }
    }
	
	
	
	
	if(message == "")
    {
        var msg="please enter the message";
        document.getElementById("error-message").innerHTML=msg; 
        error++;
    }
    else
    {
        document.getElementById("error-message").innerHTML="";
    }
	


        if(error > 0) 
    {
		
		var msg="Message Status : Error";
        document.getElementById("messagesend").innerHTML=msg; 
        return false;
		
			
			
    }
	 else 
    {
       	alert("Your Message has been Send !!");
    	return true;
		
    }
	
	

}
