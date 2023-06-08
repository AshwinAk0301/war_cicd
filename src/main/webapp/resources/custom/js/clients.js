var JWT_TOKEN = "";
var ROLE = "";
var FULL_NAME = "";
var ORG_NAME = "";
var PACKAGES="";
var APPOINTMENTS="";
var ProviderId = [];
var ID="";
const DEF_DELAY = 1000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

$(document).ready(function () {

    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    ROLE = localStorage.getItem("ROLE");
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");
    PACKAGES = localStorage.getItem("PACKAGES");
    APPOINTMENTS = localStorage.getItem("APPOINTMENTS");
    //console.log("PACKAGES AND APPOINTMENTS IN CLIENT TABLE",PACKAGES,PACKAGES)
    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    }
    loadClientTable();

    $(".hide-admin-unauth").css("display", "none");

    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);
})

function loadClientTable() {

    $('#clientTable').hide();
    $("#client-table-error").hide();
    $("#client-table-spinner").show();
    $('#client-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });
    //API CALL

    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getClientTable?clientIds&size=" + CONF_MAX_LIMIT + "&sort=lastUpdated,DESC",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#client-table-spinner").hide();

            //console.log('success: ', result);
            if (result.error == true) {
                $("#client-table-error").show();
                $('#client-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#client-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('clients')) {
                    alert("Client field not exist");
                }
                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#clientTable').show();
                //console.log("CLIENT ID",content.clients.clientList);
                $('#clientTable').DataTable({
                    data: content.clients.clientList,
                    columns: [
                        {
                            data: 'clientName'
                        },
                        {
                            data: 'id'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                let address = "";
                                if (row.addressLine1) address = row.addressLine1 + ", ";
                                if (row.addressLine2) address += row.addressLine2 + ", ";
                                if (row.city) address += row.city + ", ";
                                if (row.state) address += row.state + ", ";
                                if (row.pinCode) address += row.pinCode;
                                return address;
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.totalKits ? row.totalKits : 0;
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.status === true ? 'Active' : 'Inactive';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.lastUpdated ? new Date(row.lastUpdated).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateClient(' + JSON.stringify(row) + ', true);\'>Update Client</button>' ;
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'deleteUserModal('+ JSON.stringify(row) + ');\'>Delete User</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'createClientAccount('+ JSON.stringify(row) + ');\'>Create Teams Account</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'createChannel('+ JSON.stringify(row) + ');\'>Create Channel</button>' ;
                                    if (row.logoPath == null) {
                                    menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'uploadLogo('+ JSON.stringify(row) + ');\'>Upload Logo</button>';
                                    } else{
                                     menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'uploadLogo('+ JSON.stringify(row) + ');\'>Update Logo</button>';
                                    }


                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                "order": [[4, "desc"]]

                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#client-table-spinner").hide();
            $("#client-table-error").show();
            $('#client-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = './login';
                    })()
                }
                $("#client-table-error").text(xhr.responseJSON.message);
            } else {
                $("#client-table-error").text("No Data Found!");
            }

        }
    });
}

//EMAIL VALIDATION
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

function addClient() {
    console.log("Inside invite client");
    var x=$("#invitePackages").is(":checked");
    var y=$("#inviteAppointments").is(":checked");
    let jsonData;
    let formPincode = $("#inviteClientPinCode").val();
    let clientEmail = $("#inviteClientEmail").val();
    console.log(formPincode.length)
    let formClientName = $("#inviteClientName").val();
    let clientPhone = $("#inviteClientPhone").val();
    let clientADD1 = $("#inviteClientAddLine1").val();
    let clientADD2 = $("#inviteClientAddLine2").val();
    let clientCity = $("#inviteClientCity").val();
    let formclientState = $("#inviteClientState").val();
    let providerId = $("#vcProvider").val();
    let serviceId = $("#authorizationId").val();
    let maxLicense = $("#invitemaxVcLicense").val();
     console.log(clientPhone);
    console.log(clientPhone.length);

    if ($("#inviteClientName").val() == "") {
        toastr.error('Empty name input field found!')
        return;
    }
    if (formClientName.length < 2) {
            toastr.error('Provide valid Name!')
            return;
        }
    else if ($("#inviteClientPhone").val() == "") {
        toastr.error('Empty phone number field found!')
        return;
    }
    else if (clientPhone.length < 10) {
        toastr.error('Phone number should valid!')
        return;
        }
    else if ($("#inviteClientEmail").val() == "") {
        toastr.error('Empty email field found!')
        return;
    }
    else if (IsEmail(clientEmail)==false) {
        toastr.error('invalid email found!')
        return;
    }
    else if ($("#inviteClientAddLine1").val() == "") {
        toastr.error('Empty address line 1 field found!')
        return;
    }
     else if (clientADD1.length < 2) {
        toastr.error('Provide valid address Line 1!')
        return;
        }
     else if (clientADD2.length == 1 && clientADD2.length < 2) {
        toastr.error('Provide valid address line 2!')
        return;
        }
    else if ($("#inviteClientCity").val() == "") {
        toastr.error('Empty city field found!')
        return;
    }
    else if (clientCity.length < 2) {
            toastr.error('Provide valid city name!')
            return;
        }
    else if ($("#inviteClientState").val() == "") {
        toastr.error('Empty state field found!')
        return;
    }
     else if (formclientState.length < 2) {
                toastr.error('Provide valid state name!')
                return;
            }
    else if ($("#inviteClientPinCode").val() == "") {
        toastr.error('Empty pin code field found!')
        return;
    }
    else if (formPincode.length < 6) {
        toastr.error('Pin code should valid')
        return;
    } else if(y == true && $("#vcProvider").val() == 'Select VC Provider' ){
    toastr.error('Please select VC Provider Field')
    return;
    }else if(y == true && $("#authorizationId").val() == 'Choose Service Id'){
         toastr.error('Please select Service Id')
         return;
    }else if(y == true && $("#invitemaxVcLicense").val() == ''){
              toastr.error('Please Enter Maximum License')
              return;
              }
        //console.log(PACKAGES,APPOINTMENTS);

        let serviceVcId =  $("#vcProvider").val();
        let licenseProvider = $("#authorizationId").val();
        let maxVc = $("#invitemaxVcLicense").val();

        console.log(serviceVcId,licenseProvider,maxVc);
    let formData = {
        "ownerFirstname": $("#inviteClientName").val(),
        "contactNo": $("#inviteClientPhone").val(),
        "ownerEmail": $("#inviteClientEmail").val(),
        "address_line_1": $("#inviteClientAddLine1").val(),
        "address_city": $("#inviteClientCity").val(),
        "address_state": $("#inviteClientState").val(),
        "pincode": $("#inviteClientPinCode").val(),
        "packages": x,
        "appointments": y,

    }



    if ($("#inviteClientAddLine2").val() !== "") {
        formData = Object.assign(formData, { "address_line_2": $("#inviteClientAddLine2").val() });
    }

    if(y == true) {
    formData = Object.assign(formData, {
    "serviceProviderId": Number(serviceVcId),
    "licenseId": Number(licenseProvider),
    "maxVcUsers": Number(maxVc)
    })
    }

    jsonData = JSON.stringify(formData);

    $('#addClientButton').prop('disabled', true);
    $('#addClientSpinner').show();
    console.log(formData);

    //API CALL
    $.ajax({
        type: 'POST',
        data: jsonData,
        contentType: "application/json",
        url: CONF_SERVER_PATH + "/addClient",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            // console.log("inviteClient-->2: ", result);
            $('#addClientButton').prop('disabled', false);
            $('#addClientSpinner').hide();

            if (result.error === false) {
                $("#inviteClientName").val('');
                $("#inviteClientPhone").val(''),
                    $("#inviteClientEmail").val(''),
                    $("#inviteClientAddLine1").val(''),
                    $("#inviteClientCity").val(''),
                    $("#inviteClientState").val(''),
                    $("#inviteClientPinCode").val('')
                $("#inviteClientAddLine2").val('')
                toastr.success("Client Added Successfully");
                $('#invite-client-modal').modal('hide');
                location.reload();
            }

        },
        error: function (xhr, status, error) {
            // console.log("inviteClient-->3 : ",error);
            $('#addClientButton').prop('disabled', false);
            $('#addClientSpinner').hide();
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = './login';
                    })()
                }else{
                    toastr.error(xhr.responseJSON.message);
                }
                //$("#distributor-table-error").text(xhr.responseJSON.message);
            } else {
                toastr.error('Failed add client.Internet Disconnected/Server error');
                //$("#distributor-table-error").text("No Data Found!");
            }
        }
    });
}

//UPDATE CLIENT API INTEGRATION

function updateClient(client,preload) {
    $("#update-client-modal").modal("show");
    var uId = ""


    console.log("Inside update client",client);

    if (preload === true) {
        uId = client.id;

        $('#updateClientName').val(client.clientName);
        $('#updateClientPhone').val(client.contactNo);
        $('#updateClientEmail').val(client.emailId);
        $('#updateClientAddLine1').val(client.addressLine1);
        $('#updateClientAddLine2').val(client.addressLine2);
        $('#updateClientCity').val(client.city);
        $('#updateClientState').val(client.state);
        $('#updateClientPinCode').val(client.pinCode);
//        $('#updatePackages').val(userObj.phoneNo);
//        $('#updateAppointments').val(userObj.phoneNo);
//      $('#updateVcLicense').val(userObj.phoneNo);
//       $('#updateVideCall').val(userObj.phoneNo);
//        $('#updateVcProvider').val(userObj.phoneNo);


//        getRoles("update", { name: userObj.role.role, id: userObj.role.id });
//        getGenders("update", { name: userObj.gender.gender, id: userObj.gender.id });

//        let status = userObj.enabled ? "Active" : "Inactive";
//        getStatus("update", { name: status, id: status });

        $('#clientSelector1').hide();
        $('#clientSelector1Label').hide();

        if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
//            getClientList("update", { name: userObj.clientId.clientName, id: userObj.clientId.id });
            $('#clientSelector1Label').show();
            $('#clientSelector1').show();
        }
        if (client.email != null) {
            $("#updateFormEmail").val(userObj.email);
        }
        if (client.qualification != null) {
            $("#updateFormQualification").val(userObj.qualification);
        }
        if (client.designation != null) {
            $("#updateFormDesignation").val(userObj.designation);
        }
        $('#update-user-modal').modal('show');
    }
    else {
        $('#updateBtn').unbind().click(function () {
            updateValid = pristine2.validate();
        });
        if (updateValid) {
            toastr.error("Please check all fields");
            return;
        }

        if ($("#roleSelector1").val() == "Select Role") {
            toastr.error("Role selection is compulsory!");
            $("#errorClientMessage1").text("Role selection is compulsory!");
            $('#errorClientMessage1').fadeIn("slow");
            return;
        }
        if ($("#genderSelector1").val() == "Select Gender") {
            toastr.error("Gender selection is compulsory!");
            $("#errorClientMessage1").text("Gender selection is compulsory!");
            $('#errorClientMessage1').fadeIn("slow");
            return;
        }
        if ($("#updateFormName").val() == "") {
            toastr.error('Please enter Name!')
            return;
        }
        if ($("#updateFormEmail").val() == "") {
            toastr.error('Please enter valid E-mail!')
            return;
        }


        // var formData = $('#profilePicFile').attr('file');
        var formData = new FormData();
        formData.append("userId", uId);
        formData.append("name", $("#updateFormName").val());
        formData.append("role", $("#roleSelector1").val());
        formData.append("gender", $("#genderSelector1").val());
        formData.append("changeStatus", $("#statusSelector1").val());
        formData.append("countryId", 1);
        formData.append("qualification", $("#updateQualification").val());
        formData.append("specialization", $("#updateSpecialization").val());
        formData.append("qualification", $("#updateQualification").val());
        formData.append("experience", $("#updateFormExperience").val());
        formData.append("consultationType", $("#updateconsultationType").val());
        formData.append("language", $("#updateLanguageSelector").val());
        formData.append("consultationFee", $("#updateinviteCharges").val());
        //formData.append("amountId",$("#updateselectCurrency").val());

        if ($("#updateFormEmail").val() != "") {
            formData.append("email", $("#updateFormEmail").val());
        }
        if ($("#updateFormQualification").val() != "") {
            formData.append("qualification", $("#updateFormQualification").val());
        }
        if ($("#updateFormDesignation").val() != "") {
            formData.append("designation", $("#updateFormDesignation").val());
        }
        if ($("#profilePicFile1").val() != "") {
            formData.append("file", $("#profilePicFile1").attr('file'));
        }
        if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
            formData.append("clientId", $("#clientSelector1").val());
        }
        else {
            formData.append("clientId", CLIENT_ID);
        }

        $('#updateBtn').prop('disabled', true);
        $('#updateUserSpinner').show();

        //API CALL
        $.ajax({
            type: 'POST',
            data: formData,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/updateClient",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                // console.log("updateUser-->2: ", result);
                $('#updateBtn').prop('disabled', false);
                $('#updateUserSpinner').hide();
                if (!result.hasOwnProperty('content')) {
                    alert("Token not exist");
                }
                if (result.error === false) {
                    $("#updateFormName").val('');
                    $("#updateFormPhone").val('');
                    $("#updateFormPhone").val('');
                    $("#roleSelector1").val('Select Role');
                    $("#genderSelector1").val('Select Gender');
                    $("#updateFormEmail").val('');
                    $("#updateFormQualification").val('');
                    $("#updateFormDesignation").val('');
                    $("#clientSelector1").val('Select Client');
                    alert("User updated Successfully");
                    $('#update-user-modal').modal('hide');
                    loadUserTable();

                }

            },
            error: function (xhr, status, error) {
                // console.log("updateUser-->3 : ", error);
                $('#updateBtn').prop('disabled', false);
                $('#updateUserSpinner').hide();
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                        })()
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    }

}

//CREATE TEAMS ACCOUNT CLIENT MODAL OPEN
function createClientAccount(client) {
    $('#create-teams-client-modal').modal('show');
    console.log("Client json data",client);

    let CLIENT_ID = client.clientId;

    //API CALL to Add User In Teams

    $("#createClientTeams").unbind().click(function () {
        console.log("add Client In Teams");
        $('#createClientSpinner').show();
        $.ajax({
            type: 'POST',
            //data: userData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/createClientInTeams?clientId=" + CLIENT_ID,
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                $('#createClientSpinner').hide();
                console.log('success: ', result.error);
                if (result.error == true) {
                    //ToDo: Remove alert message
                    toastr.error("Client teams not created");
                } else {

                    let { content, message, error } = result;
                    console.log(result);
                    if (error === false) {
                        toastr.success("Teams account created Successfully");
                        ('#create-teams-client-modal').modal('hide');
                        loadUserTable();
                    }else {
                        alert(result.message);
                    }
                }
            },
            error: function (xhr, status, error) {
            $('#createClientSpinner').hide();
                console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.error === true) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                        })()
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    });
}


//CREATE CHANNEL IN CLIENT MODAL

function createChannel(clients) {
        $('#create-channel-client-modal').modal('show');
            console.log("Client json data",clients);

            let CLIENT_ID = clients.id;

            //API CALL to Create Channel

            $("#createClientChannel").unbind().click(function () {
                console.log("add Client In Channel");
                $('#createChannelSpinner').show();
                $.ajax({
                    type: 'POST',
                    //data: formData,
                    processData: false,
                    contentType: false,
                    contentType: "application/json",
                    url: CONF_SERVER_PATH + "/createClientInTeams?clientId=" + CLIENT_ID,
                    headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                    success: function (result) {
                        $('#createClientSpinner').hide();
                        console.log('success: ', result.error);
                        if (result.error == true) {
                            //ToDo: Remove alert message
                            toastr.error(result.message);
                             $('#createChannelSpinner').hide();
                        } else {

                            let { content, message, error } = result;
                            console.log(result);
                            if (error === false) {
                                toastr.success("Channel created Successfully");
                                $('#create-channel-client-modal').modal('hide');
                                loadUserTable();
                            }else {
                                alert(result.message);
                            }
                        }
                    },
                    error: function (xhr, status, error) {
                    $('#createChannelSpinner').hide();
                        console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                        if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                            if (xhr.responseJSON.error === true) {
                                (async () => {
                                    toastr.error(xhr.responseJSON.message);
                                    await sleep();
                                    //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                                })()
                            }
                        } else {
                            toastr.error(xhr.responseJSON.error);
                        }
                    }
                });
            });
}

//UPLOAD LOGO IN CLIENT MODAL

function uploadLogo(clients){
console.log("UPLOAD LOGO",clients);
$('#upload-logo-client-modal').modal('show');

$("#uploadClientLogo").unbind().click(function () {

var formData = new FormData();


var formLogo =  document.getElementById("uploadformLogo");


          var filePath = $("#uploadformLogo").val();
         // Allowing file type
         var allowedExtensions = /(\.png)$/i;
         // /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (filePath == "") {
             toastr.error('NO File Selected!');
             return;
            }else
         if (!allowedExtensions.exec(filePath)) {
             toastr.error('File type not supported, Please select PNG type!');
             return;
         }

         if (formLogo.files.length > 0)  {
             formData.append("logo", formLogo.files[0]);
          }
         formData.append("clientId", clients.id);

         $('#uploadClientSpinner').show();
 for (var pair of formData.entries()) {
       console.log(pair[0]+ ', ' + pair[1]);
   }
            $.ajax({
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            url: CONF_SERVER_PATH + "/uploadLogo",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {

             $('#uploadClientLogo').prop('disabled', false);
                $('#uploadClientSpinner').hide();

                console.log('success: ', result.error);
                if (result.error == true) {
                    //ToDo: Remove alert message
                    toastr.error("Logo not uploaded!");
                } else {

                    let { content, message, error } = result;
                    console.log(result);
                    if (error === false) {
                        toastr.success("Logo Uploaded Successfully");
                        $('#upload-logo-client-modal').modal('hide');
                        (async () => {

                            await sleep();
                             location.reload();
                             loadClientTable();           //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                             })()



                    }else {
                        alert(result.message);
                    }
                    if (clients.logoPath != null){
                     $('#uploadformLogo').val(clients.logoPath);
                    }
                }
            },
            error: function (xhr, status, error) {
            $('#uploadClientSpinner').hide();
                console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.error === true) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                        })()
                    }
                } else {
                    //toastr.error(xhr.responseJSON.message);
                }
            }
        });

    });
}




//Navigatng to back screen
if (performance.navigation.type == 2) {
localStorage.removeItem("JWT_TOKEN");
          	localStorage.removeItem("ROLE");
          	localStorage.removeItem("CLIENT_ID");
            localStorage.removeItem("ORG_NAME");
          	localStorage.removeItem("FULL_NAME");
          	localStorage.removeItem("PACKAGES");
          	localStorage.removeItem("APPOINTMENTS");
          	localStorage.removeItem("USER_ID");


    }

//ADD VC PROVIDERS TO CLIENT MODAL


function loadVcProvider() {
    console.log("load vc provider modal: ", JWT_TOKEN);
    let serviceProvidersList;

    $('#vcProvider').html("<option selected>Select VC Provider</option>");
    $('#authorizationId').html("<option selected>Choose ID</option>");

    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getServiceProviders",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            //console.log(result);
            if (!result.hasOwnProperty('content')) {
                toastr.error("Token not exist");
            }
            //let { content, message } = result;
            let vcProviders  = result.content.serviceProviders;
            //console.log("VC providers---->",vcProviders);
            let providerDropdownList = "<option selected>Select VC Provider</option>";
            for (let providers of vcProviders) {
            //console.log("providers list%%%%%%%%",vcProviders);
            //ProviderId = providers.id;
            // console.log("providers list%%%%%%%%",ProviderId);
                providerDropdownList += "<option value=" + providers.id + " >" + providers.name + "</option>";
                }
             $("#vcProvider").html(providerDropdownList);
              ProviderId = result.content.serviceProviders;
              console.log("-------->",ProviderId)
              for (ID of ProviderId){
              console.log("?????????>",ID.id)
              }
            },


            // else if (mode === 'update'){
            // 	let providerDropdownList ="<option selected value="+select.id +">"+select.name+"</option>";
            // 	for (let role of roles){
            // 		if(role.id === select.id){
            // 			continue;
            // 		}
            // 		providerDropdownList += "<option value="+ role.id +" >"+role.name+"</option>"
            // 	}
            // 	$("#roleSelector1").html(providerDropdownList);
            // }


        error: function (xhr, status, error) {
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                    })()
                }
            } else {
                toastr.error(xhr.responseJSON.error);
            }
        }
    });

  //console.log("vc provider text field value",$("#vcProvider").html(providerDropdownList))


    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getLicenseList?serviceProviderId=1",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            //console.log('success: ', result);
            if (result.error == true) {
                console.log("Inside if");

            } else {
                console.log("Inside else");

                //let { content, message, error } = result;
                serviceProvidersList = result;
                console.log("Service providers------>",serviceProvidersList);
            }
        },
        error: function (xhr, status, error) {
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                    })()
                }
            } else {
                toastr.error(xhr.responseJSON.error);
            }
        }
    });

    $("#vcProvider").change(function () {
    console.log("----------->",serviceProvidersList);
    let services = serviceProvidersList.content.licenseList;
        if (serviceProvidersList !== undefined) {
            if (serviceProvidersList.content != [] && $("#vcProvider").find('option:selected').text() === "Teams") {
                let serviceList = "<option selected>Choose Service Id</option>";
                for (let tempServices of services) {
                console.log("+++++++",tempServices);
                    serviceList += "<option value=" + tempServices.id + " >" + tempServices.name + "</option>"
                }
                $('#authorizationId').html(serviceList);
            }
            else if (serviceProvidersList.content.serviceProviders != [] && $("#vcProvider").find('option:selected').text() === "Google") {

               toastr.error("Invalid Service Provider Id")
                 $('#authorizationId').text("No Services found");
            }
            else {
                $('#authorizationId').html("No User found");
            }
        } else {
            $('#authorizationId').html("No User found");
        }

    });




}


//$(function() {
//    if (window.history && window.history.pushState) {
//        window.history.pushState('', null, './');
//        $(window).on('popstate', function() {
//             console.log('Back button was pressed.');
//              localStorage.removeItem("JWT_TOKEN");
//                       	localStorage.removeItem("ROLE");
//                       	localStorage.removeItem("CLIENT_ID");
//                         localStorage.removeItem("ORG_NAME");
//                       	localStorage.removeItem("FULL_NAME");
//                       	localStorage.removeItem("PACKAGES");
//                       	localStorage.removeItem("APPOINTMENTS");
//                       	localStorage.removeItem("USER_ID");
//
//
//        });
//    }
//});
