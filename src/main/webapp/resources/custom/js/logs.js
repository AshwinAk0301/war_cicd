var	JWT_TOKEN = "", ROLE = "", CLIENT_ID = "";
var FULL_NAME 	= "";
var ORG_NAME 	= "";
$(document).ready(function(){
	JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
	CLIENT_ID = localStorage.getItem("CLIENT_ID");
	ROLE = localStorage.getItem("ROLE");
	ORG_NAME = localStorage.getItem("ORG_NAME");
	FULL_NAME = localStorage.getItem("FULL_NAME");
	
	if(ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0){
		var url = "./cLogin";
		window.location.href=url;
		return;
	}
	else if(ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin"){
		$(".hide-admin-unauth").css("display","none");
	}
	else if(ROLE === "Client Admin"){
		$(".hide-unauth").css("display","none");
	}
	let portalDetails = "<h5>"+FULL_NAME+"</h5>";
	// portalDetails += "<p>"+ORG_NAME+"</p>";
	portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>"+ROLE+"</p>";

	$(".portal-user-name").html(portalDetails);
})