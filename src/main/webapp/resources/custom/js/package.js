var JWT_TOKEN = "", ROLE = "", CLIENT_ID = "";
var FULL_NAME = "";
var ORG_NAME = "";
var USER_ID="";
const DEF_DELAY = 1000;

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
    USER_ID = localStorage.getItem("USER_ID");
    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";

        window.location.href = url;
        return;
    }
//    else if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
//        //		loadUserTable();
//        $(".hide-admin-unauth").css("display", "none");
//    }
    else if (ROLE === "Client Admin") {
        //		loadUserTable();
        $(".hide-unauth").css("display", "none");

    }
    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);

    loadPackageTable();

})

let pristine1, pristine2;
let inviteValid;
let updateValid;
window.onload = function () {

    var form1 = document.getElementById("invite");
    var form2 = document.getElementById("update");

    pristine1 = new Pristine(form1);
    pristine2 = new Pristine(form2);

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
                alert("Token not exist");
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
                alert("Token not exist");
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
                    alert("Token not exist");
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
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update User</button>' +
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
        url: CONF_SERVER_PATH + "/getServiceTypes?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
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
                        }

//                        {
//                            data: 'null',
//                            render: function (data, type, row, meta) {
//                                //console.log("Data verification____>", row);
//                                let menuItem = '<div class="btn-group">' +
//                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
//                                    '<div class="dropdown-menu dropdown-menu-right">' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
//                                    '</div></div>'
//                                return menuItem;
//                            }
//                        }
                    ],
                    "order": [[3, "desc"]]
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
    console.log("Package category")
    $('#pack_category_table').hide();
    $("#pack_category_table_no_data").hide();
    $("#pack_category_table-spinner").show();
    $('#pack_category_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getPackageCategory?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
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
                            data: null,
                            render: function (data, type, row, meta) {
                            return row.code ? row.code : '-';
                            }
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
                        }

//                        {
//                            data: 'null',
//                            render: function (data, type, row, meta) {
//                                //console.log("Data verification____>", row);
//                                let menuItem = '<div class="btn-group">' +
//                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
//                                    '<div class="dropdown-menu dropdown-menu-right">' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
//                                    '</div></div>'
//                                return menuItem;
//                            }
//                        }
                    ],
                    "order": [[3, "desc"]]
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

function loadPackageTable() {
    console.log("Packages tab")
    $('#pack_table').hide();
    $("#pack_table_no_data").hide();
    $("#pack-table-spinner").show();
    $('#pack-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getPackages?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#pack-table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#pack_table_no_data").show();
                $('#pack_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#pack_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packages')) {
                    alert("packages field not exist");
                }

                let { content, message, error } = result;

                $('#pack_table').show();

                $('#pack_table').DataTable({

                    data: content.packages,
                    destroy: true,
                    columns: [
                        {
                            data: 'packageName'
                        },
                        {
                            data: 'packageId'
                        },
                        {
                            data: 'duration'
                        },

                        {
                            data: 'cost'
                        },
                        {
                            data: 'currency'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            var precision = 2;
                            var discountPrice = row.packageDiscountPrice;
                            var aPrecision = Math.pow(10, precision);
                            return Math.round(discountPrice*aPrecision)/aPrecision;
                            }
                        },
                        {
                            data: 'packageCategory'
                        },
                        {
                            data: null,

                            render: function (data, type, row, meta) {
                                return row.createdDate ? new Date(row.createdDate).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.expiryDate ? new Date(row.expiryDate).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: 'packageStatus'
                        }
//                        {
//                            data: 'null',
//                            render: function (data, type, row, meta) {
//                                //console.log("Data verification____>", row);
//                                let menuItem = '<div class="btn-group">' +
//                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
//                                    '<div class="dropdown-menu dropdown-menu-right">' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
//                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
//                                    '</div></div>'
//                                return menuItem;
//                            }
//                        }
                    ],
                    "order": [[8, "asc"]]
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

// let serList = [
//     {
//         name: 'thumb-xray', code: 'SR01', serviceType: 'X-Ray', cost: 100, currency: 'INR', gst: 5, createdDate: '07/09/2022',
//         lastUpdated: '07/09/2022', status: 'New'
//     },
//     {
//         name: 'chest-xray', code: 'SR02', serviceType: 'X-Ray', cost: 200, currency: 'INR', gst: 15, createdDate: '07/09/2022',
//         lastUpdated: '07/09/2022', status: 'Active'
//     },
//     {
//         name: 'speech-therapy', code: 'SR03', serviceType: 'Consultation', cost: 150, currency: 'INR', gst: 7, createdDate:
//             '07/09/2022', lastUpdated: '07/09/2022', status: 'InActive'
//     },
// ]

function loadServicesTable() {
    console.log("service table")
    $('#pack_services_table').hide();
    $("#pack_services_table_no_data").hide();
    $("#pack_services_table-spinner").show();
    $('#pack_services_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getServices?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT,
		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {


            $("#pack_services_table-spinner").hide();

            //console.log('success: ', result);
            if (result.error == true) {
                $("#pack_services_table_no_data").show();
                $('#pack_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#pack_services_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('subscribedPackages')) {

                }
                let { content, message, error } = result;

                console.log("JWT_TOKEN-->", content.serviceList);

                $('#pack_services_table').show();
                $('#pack_services_table').DataTable({

        data: content.serviceList,

        destroy: true,
        columns: [
            {
                data: 'name'
            },
            {
               data: 'code',

            },

            {
                data: 'serviceType.name'

            },
            {
                data: 'price'

            },
            {
                data: 'currency.name'

            },
            {
                data: null,
                render: function (data, type, row, meta) {
                var precision = 2;
                var discountPrice = row.discountedPrice;
                var aPrecision = Math.pow(10, precision);
                return Math.round(discountPrice*aPrecision)/aPrecision;
                }
            },
            {
                data: null,
                render: function (data, type, row, meta) {
                   return row.gst ? row.gst : '-';
                }
            },

            {
                data: null,
                render: function (data, type, row, meta) {
                    return row.lastUpdated ? new Date(row.lastUpdated).toLocaleDateString() : '-';
                }
            }

//            {
//                data: 'null',
//                render: function (data, type, row, meta) {
//                    //console.log("Data verification____>", row);
//                    let menuItem = '<div class="btn-group">' +
//                        '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
//                        '<div class="dropdown-menu dropdown-menu-right">' +
//                        //'<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' +
//                        //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update</button>' +
//                        //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
//                        '</div></div>'
//                    return menuItem;
//                }
//            }
        ],

            });
        }
    }
});
}
function importPackageCsv() {
     console.log("importPackageCsv->start: ");
    $('#import-package-modal').modal('show');
}
function importPackageCategoryCsv() {
     console.log("importPackageCategoryCsv->start: ");
    $('#import-package-category-modal').modal('show');
}

function importServiceCsv() {
     console.log("importServiceCsv->start: ");
    $('#import-service-modal').modal('show');
}

function importServiceCategoryCsv() {
     console.log("importServiceCategoryCsv->start: ");
    $('#import-service-type-modal').modal('show');
}
//Package iMPORT
function uploadCsv() {
    console.log("uploadCsv->start: ", $("#exampleInputFile").val(), USER_ID);
    if (!$("#exampleInputFile").val()) {
        console.log('No file selected');
        toastr.error('Select csv file before upload!');
    } else {
        var filePath = $("#exampleInputFile").val();
        // Allowing file type
        var allowedExtensions = /(\.csv)$/i;
        // /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(filePath)) {
            toastr.error('File type not supported, Upload only .csv!');
        }
        else {
            console.log("uploadCsv->start-2: ",)
            var formData = new FormData();

            formData.append("clientId", CLIENT_ID);
            formData.append("clientAdminId", USER_ID);
            formData.append("providerName", FULL_NAME);
            if ($("#exampleInputFile").val() != '') {
             formData.append("files", $("#exampleInputFile").prop('files')[0]);
            }



            $('#uploadCsvPackage').prop('disabled', true);
            $('#uploadCsvSpinner').show();

            //API CALL
            $.ajax({
                type: 'POST',
                data: formData,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                url: CONF_SERVER_PATH + "/packageImport",
                headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                success: function (result) {
                    console.log("uploadCsv->start-3: ", result)
                    $('#uploadCsvPackage').prop('disabled', false);
                    $('#uploadCsvSpinner').hide();
                    $("#exampleInputFile").val('');
                    if (!result.hasOwnProperty('content')) {
                        toastr.error("Content does not exist");

                    }
                    if (result.code === 200) {
                        toastr.success("Package imported successfully");
                        $('#import-package-modal').modal('hide');
                        loadPackageTable()
                    } else if(result.error === true) {
                    console.log("Else condition");
                    alert(result.message);

                    }
                },
                error: function (xhr, status, error) {
                    console.log("uploadCsv->start-4: ", error, xhr, status)
                    $('#uploadCsvPackage').prop('disabled', false);
                    $('#uploadCsvSpinner').hide();
                    $("#exampleInputFile").val('');
                    if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                        if (xhr.responseJSON.error === true) {
                            (async () => {
                                toastr.error(xhr.responseJSON.message);
//                                await sleep();
//                                window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './packages' : './packages';
//                                 return;
                            })()
                        }
                    } else {
                        toastr.error(xhr.responseJSON.error);
                        return;
                    }
                }
            });
        }
    }
}

//IMPORT CSV FOR PACKAGE CATEGORY

function uploadPackageCategory() {
    console.log("uploadCsvPackageCategory->start: ", $("#packageCategoryFile").val(), USER_ID);
    if (!$("#packageCategoryFile").val()) {
        console.log('No file selected');
        toastr.error('Select csv file before upload!');
    } else {
        var filePath = $("#packageCategoryFile").val();
        // Allowing file type
        var allowedExtensions = /(\.csv)$/i;
        // /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(filePath)) {
            toastr.error('File type not supported, Upload only .csv!');
        }
        else {
            console.log("uploadCsv->start-2: ",)
            var formData = new FormData();

            formData.append("clientId", CLIENT_ID);
            formData.append("clientAdminId", USER_ID);
            formData.append("providerName", FULL_NAME);
            if ($("#packageCategoryFile").val() != '') {
             formData.append("files", $("#packageCategoryFile").prop('files')[0]);
            }



            $('#uploadCsvPackageCategory').prop('disabled', true);
            $('#uploadCsvpackageCategorySpinner').show();

            //API CALL
            $.ajax({
                type: 'POST',
                data: formData,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                url: CONF_SERVER_PATH + "/packageCategoryImport",
                headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                success: function (result) {
                    console.log("uploadCsv->start-3: ", result)
                    $('#uploadCsvPackageCategory').prop('disabled', false);
                    $('#uploadCsvpackageCategorySpinner').hide();
                    $("#packageCategoryFile").val('');
                    if (!result.hasOwnProperty('content')) {
                        toastr.error("Content does not exist");

                    }
                    if (result.code === 200) {
                        toastr.success("Package Category imported successfully");
                        $('#import-package-category-modal').modal('hide');
                        loadPackCategoryTable();
                    } else if(result.error === true) {
                    console.log("Else condition");
                    alert(result.message);

                    }
                },
                error: function (xhr, status, error) {
                    console.log("uploadCsv->start-4: ", error, xhr, status)
                    $('#uploadCsvPackageCategory').prop('disabled', false);
                    $('#uploadCsvpackageCategorySpinner').hide();
                    $("#packageCategoryFile").val('');
                    if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                        if (xhr.responseJSON.error === true) {
                            (async () => {
                                toastr.error(xhr.responseJSON.message);
//                                await sleep();
//                                window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './packages' : './packages';
//                                 return;
                            })()
                        }
                    } else {
                        toastr.error(xhr.responseJSON.error);
                        return;
                    }
                }
            });
        }
    }
}
//SERVICES IMPORT API INTEGRATION
function imprtCsvservices() {
    console.log("imprtCsvservices->start: ", $("#serviceFile").val(), USER_ID);
    if (!$("#serviceFile").val()) {
        console.log('No file selected');
        toastr.error('Select csv file before upload!');
    } else {
        var filePath = $("#serviceFile").val();
        // Allowing file type
        var allowedExtensions = /(\.csv)$/i;
        // /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(filePath)) {
            toastr.error('File type not supported, Upload only .csv!');
        }
        else {
            console.log("uploadCsv->start-2: ",)
            var formData = new FormData();

            formData.append("clientId", CLIENT_ID);
            formData.append("clientAdminId", USER_ID);
            formData.append("providerName", FULL_NAME);
            if ($("#serviceFile").val() != '') {
             formData.append("files", $("#serviceFile").prop('files')[0]);
            }



            $('#uploadCsvServices').prop('disabled', true);
            $('#uploadCsvservicesSpinner').show();

            //API CALL
            $.ajax({
                type: 'POST',
                data: formData,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                url: CONF_SERVER_PATH + "/serviceImport",
                headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                success: function (result) {
                    console.log("uploadCsv->start-3: ", result)
                    $('#uploadCsvServices').prop('disabled', false);
                    $('#uploadCsvservicesSpinner').hide();
                    $("#serviceFile").val('');
                    if (!result.hasOwnProperty('content')) {
                        toastr.error("Content does not exist");

                    }
                    if (result.code === 200) {
                        toastr.success("Service imported successfully");
                        $('#import-service-modal').modal('hide');
                        loadServicesTable();
                    } else if(result.error === true) {
                    console.log("Else condition");
                    alert(result.message);

                    }
                },
                error: function (xhr, status, error) {
                    console.log("uploadCsv->start-4: ", error, xhr, status)
                    $('#uploadCsvServices').prop('disabled', false);
                    $('#uploadCsvservicesSpinner').hide();
                    $("#serviceFile").val('');
                    if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                        if (xhr.responseJSON.error === true) {
                            (async () => {
                                toastr.error(xhr.responseJSON.message);
//                                await sleep();
//                                window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './packages' : './packages';
//                                 return;
                            })()
                        }
                    } else {
                        toastr.error(xhr.responseJSON.error);
                        return;
                    }
                }
            });
        }
    }
}

//SERVICE TYPE IMPORT

function imprtCsvservicesType() {
    console.log("imprtCsvservices->start: ", $("#serviceTypeFile").val(), USER_ID);
    if (!$("#serviceTypeFile").val()) {
        console.log('No file selected');
        toastr.error('Select csv file before upload!');
    } else {
        var filePath = $("#serviceTypeFile").val();
        // Allowing file type
        var allowedExtensions = /(\.csv)$/i;
        // /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(filePath)) {
            toastr.error('File type not supported, Upload only .csv!');
        }
        else {
            console.log("uploadCsv->start-2: ",)
            var formData = new FormData();

            formData.append("clientId", CLIENT_ID);
            formData.append("clientAdminId", USER_ID);
            formData.append("providerName", FULL_NAME);
            if ($("#serviceTypeFile").val() != '') {
             formData.append("files", $("#serviceTypeFile").prop('files')[0]);
            }



            $('#uploadCsvServicesType').prop('disabled', true);
            $('#uploadservicesTypeSpinner').show();

            //API CALL
            $.ajax({
                type: 'POST',
                data: formData,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                url: CONF_SERVER_PATH + "/serviceCategoryImport",
                headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                success: function (result) {
                    console.log("uploadCsv->start-3: ", result)
                    $('#uploadCsvServicesType').prop('disabled', false);
                    $('#uploadservicesTypeSpinner').hide();
                    $("#serviceTypeFile").val('');
                    if (!result.hasOwnProperty('content')) {
                        toastr.error("Content does not exist");

                    }
                    if (result.code === 200) {
                        toastr.success("Service Type imported successfully");
                        $('#import-service-type-modal').modal('hide');
                        loadSerTypeTable();
                    } else if(result.error === true) {
                    console.log("Else condition");
                    alert(result.message);

                    }
                },
                error: function (xhr, status, error) {
                    console.log("uploadCsv->start-4: ", error, xhr, status)
                    $('#uploadCsvServicesType').prop('disabled', false);
                    $('#uploadservicesTypeSpinner').hide();
                    $("#serviceTypeFile").val('');
                    if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                        if (xhr.responseJSON.error === true) {
                            (async () => {
                                toastr.error(xhr.responseJSON.message);
//                                await sleep();
//                                window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './packages' : './packages';
//                                 return;
                            })()
                        }
                    } else {
                        toastr.error(xhr.responseJSON.error);
                        return;
                    }
                }
            });
        }
    }
}

function downloadCsv() {
console.log("download CSV");
let url = CONF_SERVER_PATH + "/downloadSamplePackage?tab=Packages";
return url;

}

function downloadCsvpackCategory() {
console.log("download CSV");
let url = CONF_SERVER_PATH + "/downloadSamplePackage?tab=Package Category";
return url;
}

function downloadCsvServices() {
console.log("download CSV");
let url = CONF_SERVER_PATH + "/downloadSamplePackage?tab=Services";
return url;
}

function downloadCsvServiceType() {
console.log("download CSV");
let url = CONF_SERVER_PATH + "/downloadSamplePackage?tab=Service Type";
return url;
}

