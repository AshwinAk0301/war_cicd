var JWT_TOKEN ="";
var CLIENT_ID ="";
var ROLE ="";
var ORG_NAME="";
var FULL_NAME="";
var PACKAGES="";
var APPOINTMENTS="";
var USER_ID="";
var KIT_ID="";


function hideClientErrorText(){
	if($("#errorClientMessage1").is(":visible")){
		$('#errorClientMessage1').fadeOut("slow");	
	}
	if($("#errorClientMessage2").is(":visible")){
		$('#errorClientMessage2').fadeOut("slow");	
	}
}

function loginByPhone(){
	
	console.log("loginByPhone-->start: ", $("#phoneBox").val());
		
	if( $("#phoneNum").val()== ""){
		$("#errorClientMessage1").text("Empty input field found!");
		$('#errorClientMessage1').fadeIn("slow");
		return;
	}

	/* Disable Button, show spinner */
	$('#sendBtn').prop('disabled', true);
	$('#sendSpinner').show();
	let jsonData = JSON.stringify({
		"phoneNo":$("#phoneNum").val(),"countryId":1
	});
	//API CALL
	$.ajax({
		type:'POST',
		url: CONF_SERVER_PATH + "/loginByPhone",
		data:jsonData,
		contentType: "application/json",
        success: function(result) {
	
			/* Reset Button parameters */
			$('#sendBtn').prop('disabled', false);
			$('#sendSpinner').hide();
			
//        	console.log('loginByPhone-->success: ',result);
        	if(!result.hasOwnProperty('error')){	
				alert("Token not exist");
			}
        	let {message, content, error} = result;
        	if(error == true){
				$("#errorClientMessage1").val(message);
				$('#errorClientMessage1').fadeIn("slow");
			} else{
//				console.log(content.otp)
				$('#sendBtn').hide();
				$('#otpBox').show();
				$('#verifyBtn').show();
				if(content.hasOwnProperty("otp"))
				$('#phoneOtp').val(content.otp);
			}
        	
        	  				        	
    	},
    	error : function(xhr, status, error) {
			//console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
			$('#sendBtn').prop('disabled', false);
			$('#sendSpinner').hide();
			if(xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')){	
				$("#errorClientMessage1").text(xhr.responseJSON.message);
			}else {
				$("#errorClientMessage1").text("Server error");
			}
			
			$('#errorClientMessage1').fadeIn("slow");		
		}
    });
}

function verifyOtp(){
	
	console.log("verifyOtp-->start: ", $("#phoneOtp").val());
	
	if( $("#phoneOtp").val()== ""){
		$("#errorClientMessage2").text("Empty input field found!");
		$('#errorClientMessage2').fadeIn("slow");
		return;
	}
	/* Disable Button, show spinner */
	$('#verifyBtn').prop('disabled', true);
	$('#verifySpinner').show();
	var jsonData = JSON.stringify({
		phoneNo:$("#phoneNum").val(),otp:$("#phoneOtp").val(),countryId:1
	});
	//API CALL
	$.ajax({
		type:'POST',
		url: CONF_SERVER_PATH + "/verifyOtp",
		data:jsonData,
		contentType: "application/json",
        success: function(result) {
	
			/* Reset Button parameters */
			$('#sendBtn').prop('disabled', false);
			$('#sendSpinner').hide();
			
        	console.log('verifyOtp-->success: ',result);
        	if(!result.hasOwnProperty('content') || !result.content.hasOwnProperty('token')){	
				alert("Token not exist");
			}
        	let {content, message, error} = result;
        	if(error == true){
				$("#errorClientMessage2").val(message);
				$('#errorClientMessage2').fadeIn("slow");
			}
        	let {token, clientId, role, organization, fullName} = content;
        	localStorage.setItem("JWT_TOKEN",token);
			localStorage.setItem("CLIENT_ID",clientId);
			localStorage.setItem("ROLE",role);
			localStorage.setItem("ORG_NAME",organization);
			localStorage.setItem("FULL_NAME",fullName);


        	JWT_TOKEN 	= token;
			CLIENT_ID 	= clientId;
			ROLE 		= role;
			ORG_NAME 	= organization;
			FULL_NAME 	= fullName;

        	
        	/* Hide Menu Item - Manage Client link for Non-Wrizto Admin*/   
        	//$("#menu-item-client").hide();       	
        	var url = "./products";
			window.location.href= url;			        	
    	},
    	error : function(xhr, status, error) {
			//console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
			$('#verifyBtn').prop('disabled', false);
			$('#verifySpinner').hide();
			if(xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')){	
				$("#errorClientMessage2").text(xhr.responseJSON.message);
			}else {
				$("#errorClientMessage2").text("Server error");
			}
			
			$('#errorClientMessage2').fadeIn("slow");		
		}
    });
}

function getClientList(product=false){
	console.log("getClientList-->1");

	/* API CALL */
	$.ajax({
		type:'GET',
		url: CONF_SERVER_PATH + "/getClientList",
		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function(result) {
        	console.log('getClientList-->2', result);
        	if(!result.hasOwnProperty('content')){	
				alert("Token not exist");
			}
        	let {content, message} = result;
        	let {clientList} = content;
        	let clientDropdownList ="<option selected>All (Clients)</option>";
        	
        	for (let client of clientList){
				clientDropdownList += "<option value="+ client.id +" >"+client.name+"</option>"	
				//console.log(client);
			}
			
        	console.log('getClientList-->3',+ clientDropdownList );
        	if(product){
				$("#productClientSelect").html(clientDropdownList);
			}       	
        	//getRoles();
    	},
    	error : function(xhr, status, error) {
			console.log('error: ', error);
			//$("#otpBox").show();
		}
    });
}

function getRoles(){
	console.log("getRoles-->1");
	//$("#otpBox").hide();
	//$("#phoneBox").hide();
	//API CALL
	$.ajax({
		type:'GET',
		url: CONF_SERVER_PATH + "/getRoles",
		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function(result) {
        	console.log("getRoles-->2: ",result);
        	if(!result.hasOwnProperty('content')){	
				alert("Token not exist");
			}
        	let {content, message} = result;
        	//let {token} = content;
        	//console.log('getClientList-->2', );
    	},
    	error : function(xhr, status, error) {
			//console.log("getRoles-->3 : ",error);
			//$("#otpBox").show();
		}
    });
}

function hideErrorText(){
	if($("#errorMessage").is(":visible")){
		$('#errorMessage').fadeOut("slow");	
	}
}

function loginByUserName(){
	console.log("loginByUserName-->start",);
	//console.log("Check: ", $("#wriztoUN").val(), ", rst: ",$("#wriztoUN").val()== "")
	if( $("#wriztoUN").val()== "" || $("#wriztoPWD").val()==""){
		$("#errorMessage").text("Empty input field found!");
		$('#errorMessage').fadeIn("slow");
		return;
	}
	/* Disable Button, show spinner */
	$('#signInBtn').prop('disabled', true);
	$('#signInSpinner').show();
	//$("#otpBox").hide();
	//$("#phoneBox").hide();
	var jsonData = JSON.stringify({
		username:$("#wriztoUN").val(),password:$("#wriztoPWD").val()
	});
	//API CALL
	$.ajax({
		type:'POST',
		url: CONF_SERVER_PATH + "/loginByUserName",
		data:jsonData,
		contentType: "application/json",
        success: function(result) {

			/* Reset Button parameters */
			$('#signInBtn').prop('disabled', false);
			$('#signInSpinner').hide();

        	console.log('success: ',result.content.token);
        	if(!result.hasOwnProperty('content') || !result.content.hasOwnProperty('token')){	
				alert("Token not exist");
			}
        	let {content, message, error} = result;
        	if(error == true){
				$("#errorMessage").val(message);
				$('#errorMessage').fadeIn("slow");
			}
            let kitIDs = [];
			kitIDs = content.kitPermission;
			console.log(content);
			for (var kitSerial of kitIDs) {

			var kitId = kitSerial.kitSerialNum;
            console.log("KIT ID",kitId);
            localStorage.setItem("KIT_ID",kitId);
			}
            //let kitSerialNo = kitSerial.kitSerialNum
            //console.log(kitSerialNo);
        	let {token, role, organization, fullName, clientId, userId} = content;
        	localStorage.setItem("JWT_TOKEN",token);
			localStorage.setItem("ROLE",role);
        	localStorage.setItem("ORG_NAME",organization);
			localStorage.setItem("FULL_NAME",fullName);
            localStorage.setItem("USER_ID",userId);
			//localStorage.setItem("KIT_ID",kitSerialNo);


			JWT_TOKEN 	= token;
			ROLE 		= role;
			ORG_NAME 	= organization;
			FULL_NAME 	= fullName;
			CLIENT_ID   = clientId;
            USER_ID     = userId;
            KIT_ID      = kitId;

			if (role == 'Client Admin'){
			console.log(role,JWT_TOKEN.length,clientId,userId);
			localStorage.setItem("CLIENT_ID",clientId)
//			localStorage.setItem("JWT_TOKEN",token)
            var url = "./products ";
            window.location.href= url;
             getClientSettings();
            } else if (role == 'Wrizto Super Admin') {
            //console.log(role,JWT_TOKEN.length);
            var url = "./clients";
            window.location.href= url;
            }else {
            var url = "./login";
            window.location.href= url;
            }
//        	if (result.error == false) {
//                getClientSettings();
//            }
    	},
    	error : function(xhr, status, error) {
			//console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
			$('#signInBtn').prop('disabled', false);
			$('#signInSpinner').hide();
			if(xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')){	
				$("#errorMessage").text(xhr.responseJSON.message);
			}else {
				$("#errorMessage").text("Server error");
			}
			
			$('#errorMessage').fadeIn("slow");		
		}
    });
}
//ENTER KEY PRESS

$("#loginByUserName").keyup(function(event) {
        if (event.which === 13) {
            $("#signInSpinner").click();
        }
    });


//GET CLIENT SETTING API INTEGRATION

function getClientSettings() {


// console.log("CLIENT ID IN GET CLIENT SETTINGS",CLIENT_ID);
//console.log("JWT_TOKEN IN GET CLIENT SETTINGS",JWT_TOKEN);
    $.ajax({
    		type:'GET',
    		url: CONF_SERVER_PATH + "/getClientSettings?clientId=" + CLIENT_ID,
    		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
    		success: function(result) {


                let clientSetting = result.content.clientSetting;
                console.log('success: ',clientSetting);
            	let {content, message, error} = clientSetting;
            	if(error == true){

    			}
            	let appointments = clientSetting.appointments;
            	let packages = clientSetting.packages;

            	localStorage.setItem("APPOINTMENTS",appointments);
    			localStorage.setItem("PACKAGES",packages);
            	//localStorage.setItem("CLIENT_ID",clientId);



    			APPOINTMENTS 	= appointments;
    			PACKAGES 		= packages;

                //console.log("Appointments and packages",appointments,packages)


        	},
        	error : function(xhr, status, error) {
    			//console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
    			$('#signInBtn').prop('disabled', false);
    			$('#signInSpinner').hide();
    			if(xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')){
    				$("#errorMessage").text(xhr.responseJSON.message);
    			}else {
    				$("#errorMessage").text("Server error");
    			}

    			$('#errorMessage').fadeIn("slow");
    		}
        });
}

//if (role == 'Wrizto Super Admin'){
//if (performance.navigation.type == 2) {
//localStorage.removeItem("JWT_TOKEN");
//          	localStorage.removeItem("ROLE");
//          	localStorage.removeItem("CLIENT_ID");
//            localStorage.removeItem("ORG_NAME");
//          	localStorage.removeItem("FULL_NAME");
//          	localStorage.removeItem("PACKAGES");
//          	localStorage.removeItem("APPOINTMENTS");
//          	localStorage.removeItem("USER_ID");
//
//
//    }
//
//}


