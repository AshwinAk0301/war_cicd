var JWT_TOKEN = "", ROLE = "", CLIENT_ID = "";
var FULL_NAME = "";
var ORG_NAME = "";
const DEF_DELAY = 1000;
var MEETING_ID = "";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

let packList = [
    {
        name: 'Wrizto Care 90', code: 'PKL01', serviceList: 'thumb-xray : 3, chest-xray: 4', cost: 100, currency: 'INR', gst: 5, duration: '10 days', startEndDate: '07/09/2022 ~ 07/10/2022', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Aster Care 30', code: 'PKL02', serviceList: 'thumb-xray : 3, chest-xray: 4', cost: 100, currency: 'INR', gst: 12, duration: '30 days', startEndDate: '07/09/2022 ~ 07/10/2022', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Yoga 15', code: 'PKL03', serviceList: 'Total Yoga : 3, Akshar Power Yoga: 4', cost: 100, currency: 'INR', gst: 23, duration: '45 days', startEndDate: '07/09/2022 ~ 07/10/2022', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'InActive'
    },
]

$(document).ready(function () {
    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    CLIENT_ID = localStorage.getItem("CLIENT_ID");
    ROLE = localStorage.getItem("ROLE");
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");

    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    }
    else if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        //		loadUserTable();
        $(".hide-admin-unauth").css("display", "none");
    }
    else if (ROLE === "Client Admin") {
        //		loadUserTable();
        $(".hide-unauth").css("display", "none");

    }
    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);

    loadConsultationTable();

})

let pristine1, pristine2;
let inviteValid;
let updateValid;
window.onload = function () {

    var form1 = document.getElementById("invite");
    var form2 = document.getElementById("update");

//    pristine1 = new Pristine(form1);
//    pristine2 = new Pristine(form2);

    $('#inviteBtn').unbind().click(function () {
        inviteValid = pristine1.validate();
    });

    $('#updateBtn').unbind().click(function () {
        updateValid = pristine2.validate();
    });
};

function getRoles(mode, select) {
    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getRoles",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            console.log("getRoles-->2: ", result);
            if (!result.hasOwnProperty('content')) {
                toastr.error("Token not exist");
            }
            let { content, message } = result;
            let { roles } = content;
            if (mode === 'invite') {
                let roleDropdownList = "<option selected>Select Role</option>";
                for (let role of roles) {
                    roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>"
                }
                $("#roleSelector").html(roleDropdownList);
            } else if (mode === 'update') {
                let roleDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";
                for (let role of roles) {
                    if (role.id === select.id) {
                        continue;
                    }
                    roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>"
                }
                $("#roleSelector1").html(roleDropdownList);
            }

        },
        error: function (xhr, status, error) {
            console.log("getRoles-->3 : ", error);
        }
    });
}

function getGenders(mode, select) {

    if (mode === "invite") {
        let genderDropdownList = "<option selected>Select Gender</option>";
        genderDropdownList += "<option value=" + 1 + " >Male</option>";
        genderDropdownList += "<option value=" + 2 + " >Female</option>";
        genderDropdownList += "<option value=" + 3 + " >Transgender</option>";

        $("#genderSelector").html(genderDropdownList);
    } else if (mode === "update") {
        let genderDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";
        genderDropdownList += "<option value=" + 1 + " >Male</option>";
        genderDropdownList += "<option value=" + 2 + " >Female</option>";
        genderDropdownList += "<option value=" + 3 + " >Transgender</option>";

        $("#genderSelector1").html(genderDropdownList);
    }

}

function getClientList(mode, select) {

    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getClientList",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                toastr.error("Token not exist");
            }
            let { content, message } = result;
            let { clientList } = content;

            if (mode === "invite") {
                let clientDropdownList = "<option selected>Select Client</option>";

                for (let client of clientList) {
                    clientDropdownList += "<option value=" + client.id + " >" + client.name + "</option>"
                }

                $("#clientSelector").html(clientDropdownList);
            } else if (mode === "update") {
                let clientDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";

                for (let client of clientList) {
                    if (client.id === select.id) {
                        continue;
                    }
                    clientDropdownList += "<option value=" + client.id + " >" + client.name + "</option>"
                }
                $("#clientSelector1").html(clientDropdownList);
            }


        },
        error: function (xhr, status, error) {
            console.log('error: ', error);
        }
    });
}

function inviteUser(preload) {

    //	console.log("Inside inviteuser");

    if (preload === true) {
        getRoles('invite', null);
        getGenders('invite', null);
        $('#clientSelectorLabel').hide();
        $('#clientSelector').hide();
        if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
            getClientList('invite', null);
            $('#clientSelectorLabel').show();
            $('#clientSelector').show();
        }
    }
    else {
        if (inviteValid) {
            toastr.error("Please check all fields");
            return;
        }



        // var formData = $('#profilePicFile').attr('file');
        var formData = new FormData();
        formData.append("name", $("#inviteFormName").val());
        formData.append("phoneNo", $("#inviteFormPhone").val());
        formData.append("role", $("#roleSelector").val());
        formData.append("gender", $("#genderSelector").val());
        formData.append("countryId", 1);

        if ($("#inviteFormEmail").val() != "") {
            formData.append("email", $("#inviteFormEmail").val())
        }
        if ($("#inviteFormQualification").val() != "") {
            formData.append("qualification", $("#inviteFormQualification").val())
        }
        if ($("#inviteFormDesignation").val() != "") {
            formData.append("designation", $("#inviteFormDesignation").val())
        }
        if ($("#profilePicFile").val() != "") {
            formData.append("file", $("#profilePicFile").attr('file'))
        }
        if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
            formData.append("clientId", $("#clientSelector").val());
        }
        else {
            formData.append("clientId", CLIENT_ID);
        }



        //API CALL
        $.ajax({
            type: 'POST',
            data: formData,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/inviteUser",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("inviteUser-->2: ", result);
                if (!result.hasOwnProperty('content')) {
                    toastr.error("Token not exist");
                }
                if (result.error === false) {
                    $("#inviteFormName").val('');
                    $("#inviteFormPhone").val('');
                    $("#inviteFormPhone").val('');
                    $("#roleSelector").val('Select Role');
                    $("#genderSelector").val('Select Gender');
                    $("#inviteFormEmail").val('');
                    $("#inviteFormQualification").val('');
                    $("#inviteFormDesignation").val('');
                    $("#clientSelector").val('Select Client');
                    alert("User Invited Successfully");
                    $('#invite-user-modal').modal('hide');
                    loadUserTable();

                }

            },
            error: function (xhr, status, error) {
                console.log("inviteUser-->3 : ", error);
            }
        });
    }

}

function getStatus(mode, select) {
    if (mode === "update") {
        let statusDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";
        if (select.id === "Inactive") {
            statusDropdownList += "<option value=Active>Active</option>";
        } else {
            statusDropdownList += "<option value=Inactive>Inactive</option>";
        }

        $('#statusSelector1').html(statusDropdownList)
    }
}

var uId = ""
function updateUser(userObj, preload) {

    console.log("Inside updateuser");

    if (preload === true) {
        uId = userObj.id;

        $('#updateFormName').val(userObj.fullName);
        $('#updateFormPhone').val(userObj.phoneNo);

        getRoles("update", { name: userObj.role.role, id: userObj.role.id });
        getGenders("update", { name: userObj.gender.gender, id: userObj.gender.id });

        let status = userObj.enabled ? "Active" : "Inactive";
        getStatus("update", { name: status, id: status });

        $('#clientSelector1').hide();
        $('#clientSelector1Label').hide();

        if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
            getClientList("update", { name: userObj.clientId.clientName, id: userObj.clientId.id });
            $('#clientSelector1Label').show();
            $('#clientSelector1').show();
        }
        if (userObj.email != null) {
            $("#updateFormEmail").val(userObj.email);
        }
        if (userObj.qualification != null) {
            $("#updateFormQualification").val(userObj.qualification);
        }
        if (userObj.designation != null) {
            $("#updateFormDesignation").val(userObj.designation);
        }
        $('#update-user-modal').modal('show');
    }
    else {
        if (updateValid) {
            toastr.error("Please check all fields");
            return;
        }

        if ($("#roleSelector").val() == "Select Role") {
            console.log("Role selection is compulsory!");
            $("#errorClientMessage1").text("Role selection is compulsory!");
            $('#errorClientMessage1').fadeIn("slow");
            return;
        }
        if ($("#genderSelector").val() == "Select Gender") {
            console.log("Gender selection is compulsory!");
            $("#errorClientMessage1").text("Gender selection is compulsory!");
            $('#errorClientMessage1').fadeIn("slow");
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



        //API CALL
        $.ajax({
            type: 'POST',
            data: formData,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/updateUser",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("updateUser-->2: ", result);
                if (!result.hasOwnProperty('content')) {
                    toastr.error("Token not exist");
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
                console.log("updateUser-->3 : ", error);
            }
        });
    }

}

function loadUserTable() {
    console.log("loadWriztoUserTable->");
    $('#packageTable1').hide();
    $("#user-table-error").hide();
    $("#user-table-spinner").show();
    $('#user-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_SERVER_PATH + "/getUserTable?clientIds";

    if (ROLE.includes("Wrizto")) {
        url += "&size=" + CONF_MAX_LIMIT;
    }
    else {
        url += "=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT;
    }

    //API CALL
    $.ajax({
        type: 'GET',
        url: url,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            $("#user-table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {
                $("#user-table-error").show();
                $('#user-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#user-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('users')) {
                    alert("Users field not exist");
                }
                let { content, message, error } = result;

                //console.log("window.JWT_TOKEN-->", window.JWT_TOKEN);
                $("#packageTable1").show();

                $('#packageTable1').DataTable({

                    data: content.users.userList,
                    destroy: true,
                    columns: [
                        {
                            data: 'fullName'
                        },
                        {
                            data: 'phoneNo'
                        },
                        {
                            data: "role.role"
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.enabled === true ? 'Active' : 'Inactive';
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                return "Coming Soon!";
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update User</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#user-table-spinner").hide();
            $("#user-table-error").show();
            $('#user-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#user-table-error").text(xhr.responseJSON.message);
            } else {
                $("#user-table-error").text("No Data Found!");
            }
        }
    });
}
/*
let serTypeList = [
    {
        name: 'X-Ray', code: 'SRT01', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Investigation', code: 'SRT02', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Consultation', code: 'SRT03', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'InActive'
    },
]
*/

function loadSerTypeTable() {

    $('#pack_ser_type_table').hide();
    $("#pack_ser_type_table_no_data").hide();
    $("#pack_ser_type-table-spinner").show();
    $('#pack_ser_type-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_PMM_PATH + "/getServiceTypes?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
        //		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#pack_ser_type-table-spinner").hide();

            console.log('success: ', result);
            if (result.error == true) {
                $("#pack_ser_type_table_no_data").show();
                $('#pack_ser_type_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#pack_ser_type_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('servciceTypes')) {
                    alert("Service Types field does not exist");
                }
                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#pack_ser_type_table').show();

                $('#pack_ser_type_table').DataTable({

                    data: content.servciceTypes,
                    destroy: true,
                    columns: [
                        {
                            data: 'name'
                        },
                        {
                            data: 'code'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.lastUpdated ? new Date(row.lastUpdated).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: 'status'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                    "order": [[3, "asc"]]
                });

            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#pack_ser_type-table-spinner").hide();
            $("#pack_ser_type_table_no_data").show();
            $('#pack_ser_type_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#pack_ser_type_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#pack_ser_type_table_no_data").text("No Data Found!");
            }

        }
    });
}

/*let packCategory = [
    {
        name: 'Long_term', code: 'PKC01', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Short_term', code: 'PKC02', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'Active'
    },
    {
        name: 'Seasonal', code: 'PKC03', createdDate: '07/09/2022', lastUpdated: '07/09/2022', status: 'InActive'
    },
]*/

function loadPackCategoryTable() {

    $('#pack_category_table').hide();
    $("#pack_category_table_no_data").hide();
    $("#pack_category_table-spinner").show();
    $('#pack_category_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_PMM_PATH + "/getPackageCategory?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
        success: function (result) {

            $("#pack_category_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#pack_category_table_no_data").show();
                $('#pack_category_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#pack_category_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packageCategory')) {
                    alert("Packages field not exist");
                }

                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#pack_category_table').show();


                $('#pack_category_table').DataTable({

                    data: content.packageCategory,
                    destroy: true,
                    columns: [
                        {
                            data: 'name'
                        },
                        {
                            data: 'code'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.lastUpdated ? new Date(row.lastUpdated).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: 'status'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                    "order": [[3, "asc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#pack_category_table-spinner").hide();
            $("#pack_category_table_no_data").show();
            $('#pack_category_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#pack_category_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#pack_category_table_no_data").text("No Data Found!");
            }
        }

    });
}

function loadConsultationTable() {
    console.log("load Consultation Table");
    $('#upcoming_table').hide();
    $("#upcoming_table_no_data").hide();
    $("#upcoming_table-spinner").show();
    $('#upcoming_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_SERVER_PATH + "/getDoctorAppointments?clientId";

    if (ROLE.includes("Wrizto")) {
        url += "&size=" + CONF_MAX_LIMIT ;
    }
    else {
        url += "=" + CLIENT_ID + "&meetingStatus=1,2" + "&size=" + CONF_MAX_LIMIT ;
    }
    //API CALL
    $.ajax({
        type: 'GET',
        url: url,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            //console.log("upcoming data",result)
            //MEETING_ID = result.
            $("#upcoming_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#upcoming_table_no_data").show();
                $('#upcoming_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#upcoming_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('users')) {
                    //alert("packages field not exist");
                }

                let { content, message, error } = result;

                $('#upcoming_table').show();

                $('#upcoming_table').DataTable({

                    data: content.patientMeetings,
                    destroy: true,
                    columns: [
                        {
                            data: 'uhid',

                        },
                        {
                            data: 'patientName'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            //return row.dob ? new Date(row.dob).toLocaleDateString() : '-';
                            let DOB = row.dob ? new Date(row.dob).toLocaleDateString() : '-';
                            let gender = row.gender.name
                            return DOB +"/"+ gender;
                            }

                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.meetingStatus.name
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.startDate ? new Date(row.startDate).toLocaleString() : '-';
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                return row.consultationType.name;
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                               console.log("Data verification____>", row);
                                var todayEpoch = new Date();
                                todayEpoch = todayEpoch.getTime();
                                //console.log("current epoch time", todayEpoch);

                                let start_epoch = row.startDate;
                                var EpochStart = new Date(start_epoch).getTime()
                                 //console.log("Start epoch time", EpochStart);

                                let end_epoch = row.endDate;
                                var EpochEnd = new Date(end_epoch).getTime()
                                console.log("End epoch time", EpochEnd);


                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' ;
                                    if(row.meetingStatus.id == 2 && todayEpoch <= EpochStart) {
                                   menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'awaitModalOpen(' + JSON.stringify(row) + ');\'>Confirm</button>' +
                                   '<button class=\'dropdown-item\' type=\'button\' onClick=\'cancelModalOpen('+ JSON.stringify(row) + ');\'>Cancel</button>' ;
                                    }else if (row.meetingStatus.id == 1 || row.meetingStatus.id == 2) {
                                     //'<button class=\'dropdown-item\' type=\'button\' onClick=\'resheduleModal()(' + JSON.stringify(row) + ', true);\'>Reshedule</button>' +
                                       menuItem +='<button class=\'dropdown-item\' type=\'button\' onClick=\'cancelModalOpen('+ JSON.stringify(row) + ');\'>Cancel</button>' ;
                                    }



                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
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
            $("#upcoming_table-spinner").hide();
            $("#upcoming_table_no_data").show();
            $('#upcoming_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            // if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
            //     $("#upcoming_table_no_data").text(xhr.responseJSON.message);
            // } else {
            //     $("#upcoming_table_no_data").text("No Data Found!");
            // }
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                    })()
                }
                $("#upcoming_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#upcoming_table_no_data").text("No Data Found!");
            }
        }
    });
}

//LOAD COMPLETED TABLE

function loadCompletedTable() {
    console.log("load Completed Table");
    $('#completed_table').hide();
    $("#completed_table_no_data").hide();
    $("#completed_table-spinner").show();
    $('#completed_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_SERVER_PATH + "/getDoctorAppointments?clientId" ;

    if (ROLE.includes("Wrizto")) {
        url += "&size=" + CONF_MAX_LIMIT ;
    }
    else {
        url += "=" + CLIENT_ID + "&meetingStatus=3,4" + "&size=" + CONF_MAX_LIMIT;
    }
    //API CALL
    $.ajax({
        type: 'GET',
        url: url,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            console.log("upcoming data",result)
            //MEETING_ID = result.
            $("#completed_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#completed_table_no_data").show();
                $('#completed_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#completed_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('users')) {
                    //alert("packages field not exist");
                }

                let { content, message, error } = result;

                $('#completed_table').show();

                $('#completed_table').DataTable({

                    data: content.patientMeetings,
                    destroy: true,
                    columns: [
                        {
                            data: 'uhid',

                        },
                        {
                            data: 'patientName'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            //return row.dob ? new Date(row.dob).toLocaleDateString() : '-';
                            let DOB = row.dob ? new Date(row.dob).toLocaleDateString() : '-';
                            let gender = row.gender.name
                            return DOB +"/"+ gender;
                            }

                        },

                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.startDate ? new Date(row.startDate).toLocaleString() : '-';
                            }
                        },
                        {
                            data: 'interval',

                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            return row.reason ? row.reason : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            return row.meetingStatus.name;
                            }
                        }
                    ],
                   "order": [[3, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#completed_table-spinner").hide();
            $("#completed_table_no_data").show();
            $('#completed_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            // if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
            //     $("#upcoming_table_no_data").text(xhr.responseJSON.message);
            // } else {
            //     $("#upcoming_table_no_data").text("No Data Found!");
            // }
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                    })()
                }
                $("#completed_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#completed_table_no_data").text("No Data Found!");
            }
        }
    });
}

//API CALL FOR CONFIRM TEAMS
function awaitModalOpen(appointments) {

    MEETING_ID = appointments.meetingId;
    console.log("Confirm modal",MEETING_ID)
    $('#await-modal').modal('show');

    $("#inviteConfirmBtn").unbind().click(function () {

         $('#confirmAppointmentSpinner').show();
        //console.log("Conferm modal Api")
        $.ajax({
            type: 'PUT',
            //data: userData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/changeMeetingStatus?meetingId="+ MEETING_ID +"&reason=Confirmed"+"&meetingStatus=1",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {

                console.log('success: ', MEETING_ID);
                if (result.error === true) {


                    toastr.error("Appointment not confirmed");
                } else {

                    let { content, message, error } = result;
                    console.log(result);
                    if (result.error === false) {
                    $('#confirmAppointmentSpinner').hide();
                     $('#await-modal').modal('hide');
                    //console.log("success block");

                        (async () => {
                           toastr.success("Appointment Confirmed Successfully");
                            await sleep();
                            location.reload();
                          })()

                        }else {
                        alert(result.message);
                    }
                }
            },
            error: function (xhr, status, error) {
              $('#confirmAppointmentSpinner').hide();
                console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.error === true) {
                        (async () => {
                            alert(xhr.responseJSON.message);
                            //await sleep();
                            //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                        })()
                    }
                } else {
                    alert(xhr.responseJSON.error);
                }
            }
        });
    })

}
//API CALL FOR RESHEDULE TEAMS
function resheduleModal() {
    $('#Reshedule-modal').modal('show');


}
//API CALL FOR CANCEL TEAMS
function cancelModalOpen(Appointments) {
    $('#Cancel-modal').modal('show');
    console.log("Cancel modal", Appointments)
    MEETING_ID = Appointments.meetingId;

    $("#cancelTeamsBtn").unbind().click(function () {

    let cancelText = $("#reasonCancel").val();

    if (cancelText.length == 1){
    toastr.error("Reason should be valid")
    return;
    }
    $("#cancelTeamsSpinner").show();
        console.log("Cancel modal Api", MEETING_ID)
        $.ajax({
            type: 'PUT',
            //data: userData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/changeMeetingStatus?meetingId="+ MEETING_ID +"&reason=" + $("#reasonCancel").val() +"&meetingStatus=3",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {

                console.log('success: ', result.error);
                if (result.error === true) {

                    alert("User teams not created");
                } else {

                    let { content, message, error } = result;
                    console.log(result);
                    if (result.error === false) {
                     $("#cancelTeamsSpinner").hide();
                     $('#Cancel-modal').modal('hide');
                     (async () => {
                        toastr.success("Teams account canceled Successfully");
                         await sleep();
                         location.reload();
                      })()


                    }else {
                        toastr.error(result.message);
                    }
                }
            },
            error: function (xhr, status, error) {
             $("#cancelTeamsSpinner").hide();
                console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.error === true) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            //await sleep();
                            //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                        })()
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    })
}
