
function logout(){

    let ROLE = localStorage.getItem("ROLE");
    let url;
    if(ROLE.includes("Wrizto")){
        url = "./login";
        $(".logout").attr('href',url);
    }else{
        url = "./login";
        $(".logout").attr('href',url);
    }
    localStorage.removeItem("JWT_TOKEN");
	localStorage.removeItem("ROLE");
	localStorage.removeItem("CLIENT_ID");
    localStorage.removeItem("ORG_NAME");
	localStorage.removeItem("FULL_NAME");
	localStorage.removeItem("PACKAGES");
	localStorage.removeItem("APPOINTMENTS");
	localStorage.removeItem("USER_ID");
    window.location.href = url;
}