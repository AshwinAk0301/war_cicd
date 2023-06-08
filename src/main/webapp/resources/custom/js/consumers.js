var JWT_TOKEN = "", ROLE = "", CLIENT_ID = "";
var FULL_NAME = "";
var ORG_NAME = "";
var KIT_ID="";
var USER_ID="";
let packageStatusArr = [], tempUserId = '', tempPackageId = '';
const DEF_DELAY = 1000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

$(document).ready(function () {
    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    CLIENT_ID = localStorage.getItem("CLIENT_ID");
    ROLE = localStorage.getItem("ROLE");
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");
    KIT_ID = localStorage.getItem("KIT_ID");
    USER_ID = localStorage.getItem("USER_ID");
    console.log(KIT_ID)

    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    }
    else if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        loadConsumerTable();
        $(".hide-admin-unauth").css("display", "none");
    }
    else if (ROLE === "Client Admin") {
        loadConsumerTable();
        $(".hide-unauth").css("display", "none");

    }
    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);

    $('#exampleInputFile').on('change', function () {
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    })
    $('#invoiceFile1').on('change', function () {
            //get the file name
            var fileName = $(this).val();
            //replace the "Choose a file" label
            $(this).next('.custom-file-label').html(fileName);
    })
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

function loadConsumerTable() {
    console.log("loadWriztoUserTable->",CLIENT_ID);
    $('#consumerTable').hide();
    $("#consumer-table-error").hide();
    $("#consumer-table-spinner").show();
    $('#consumer-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });
console.log("kit id subscribed packages",KIT_ID)
    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getSubscribedPackages?clientId=" + CLIENT_ID + "&kitId=" + KIT_ID + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#consumer-table-spinner").hide();

            //console.log('success: ', result);
            if (result.error == true) {
                $("#consumer-table-error").show();
                $('#consumer-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#consumer-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('subscribedPackages')) {
                    alert("Subscribed Packages field does not exist");
                }
                let { content, message, error } = result;

                console.log("JWT_TOKEN-->", content);

                $('#consumerTable').show();
                $('#consumerTable').DataTable({

                    data: content.subscribedPackages,

                    destroy: true,
                    columns: [
                        {
                            data: 'packageName',

                            // render: function (data, type, row, meta) {
                            //     console.log(row);
                            //     console.log(row.cost);
                            //     return row.cost;
                            //     //console.log(row.cost);
                            // }
                        },

                        {
                             data: null,
                             render: function (data, type, row, meta) {
                             return row.packageCategory ? row.packageCategory : '-';
                             }
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
                                return row.effectiveFrom ? new Date(row.effectiveFrom).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.expiryDate ? new Date(row.expiryDate).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            var precision = 2;
                            var Price = row.cost;
                            var aPrecision = Math.pow(10, precision);
                            return Math.round(Price*aPrecision)/aPrecision;
                            }
                        },
                        {
                            data: 'packageStatus'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewConsumerPackDetails(' + JSON.stringify(row) + ');\'>View Details</button>';
                                    if (row.packageStatus == 'ACTIVE') {
                                   menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'uploadInvoice(' + JSON.stringify(row) + ');\'>Upload Invoice</button>';
                                    }

                                return menuItem;
                            }
                        }
                    ],
                    "order": [[4, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            console.log('loginByUserName->error: ', xhr, ", status: ", status, ', error:', xhr.responseJSON);
            $("#consumer-table-spinner").hide();
            $("#consumer-table-error").show();
            $('#consumer-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            // if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
            //     $("#consumer-table-error").text(xhr.responseJSON.message);
            // } else {
            //     $("#consumer-table-error").text("No Data Found!");
            // }
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                    })()
                    $("#consumer-table-error").text(xhr.responseJSON.message);
                }
            } else {
                // toastr.error(xhr.responseJSON.error);
                $("#consumer-table-error").text("No Data Found!");
            }

        }
    });
}

function getPackageStatus(mode, select) {
    console.log('getPackageStatus: ', mode, select);
    if (packageStatusArr.length === 0) {
        //API CALL
        $.ajax({
            type: 'GET',
            url: CONF_PMM_PATH + "/getPackageStatus",
            //		headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("getPackageStatus-->2: ", result);
                let { content, message, code } = result;
                if (code === 200) {
                    let { packageStatus } = content;
                    packageStatusArr = packageStatus;
                    populatePackStatusDropdown(mode, select);
                } else {
                    toastr.error(message);
                    return;
                }
            },
            error: function (xhr, status, error) {
                // console.log("getRoles-->3 : ",error);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                        })()
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    }


}

function chnagePackSubBgColor(subMenuName) {
    if (subMenuName === 'consumer') {
    }
    if (subMenuName === 'packages') {
    }
}

let consumerList = [
    {
        fullName: 'Rama', phoneNo: ' 9900990099', genderAndAge: 'Male/52 years', packNameAndValidity: 'WriztoHealth-90, /07/09/2022 ~07 - 11 - 2022', status: 'Cancelled'
    },
    {
        fullName: 'Soma', phoneNo: ' 9900990088', genderAndAge: 'Male/42 years', packNameAndValidity: 'Aster-30, 22/09/2022 ~17-11 - 2022', status: 'Active'
    },
    {
        fullName: 'Veena', phoneNo: ' 9900990077', genderAndAge: 'FeMale/32 years', packNameAndValidity: 'Apollo-99, 30/09/2022 ~10 - 11 - 2022', status: 'New'
    },
]

function viewConsumerPackDetails(consPackObj) {
    console.log("viewConsumerPackDetails->start: ", consPackObj);
    $('#pack-consumer-view-modal').modal('show');

$('#Gender').html("Kit Id <span class='float-right badge bg-info'>" + consPackObj.kitId + "</span>");
$('#ConsumerCollapseOne').html(consPackObj.kitId);

$('#EndDate').html("Package Id <span class='float-right badge bg-info'>" + consPackObj.packageId + "</span>");
$('#ConsumerCollapseTwo').html(consPackObj.packageId);

$('#Age').html("Package Name <span class='float-right badge bg-info'>" + consPackObj.packageName + "</span>");
$('#ConsumerCollapseThree').html(consPackObj.packageName);

$('#Validity').html("Status <span class='float-right badge bg-info'>" + consPackObj.packageStatus + "</span>");
$('#ConsumerCollapseFour').html(consPackObj.packageStatus);

//$('#PreferredDate').html("Schedule Date <span class='float-right badge bg-info'>" + Scheduleddate + "</span>");
//$('#servicesCollapseFive').html(scheduled_date);
//
//$('#UserId').html("User Id <span class='float-right badge bg-info'>" + services.primaryUserId + "</span>");
//$('#servicesCollapseSix').html(services.primaryUserId);
//
//$('#ContactDetails').html("Contact Details <span class='float-right badge bg-info'>" + services.contactDetails + "</span>");
//$('#servicesCollapseSeven').html(services.contactDetails);
}

function updateConsumerPackDetails() {

    if ($("#packSubscrSelector1").val() === "Select Package Status" || !$("#packSubscrSelector1").val()) {
        toastr.error("Package Status is compulsory!");
        return;
    }
    if (!tempUserId || !tempPackageId) {
        toastr.error('UserId or PackageId is invalid.. Pl check');
        return;
    }
    var formData = new FormData();
    formData.append("clientId", CLIENT_ID);
    formData.append("userId", tempUserId);
    formData.append("packageId", tempPackageId);
    formData.append("packageStatus", $("#packSubscrSelector1").val());

    if ($("#invoiceFile1").val()) {
        console.log("invoice.........", $("#invoiceFile1").val())
        formData.append("files", $("#invoiceFile1").prop('files')[0]);
    }
    let serviceArrJson = [];
    $(".update-cons-pack-class").each(function () {
        $(this).find(".form-group input").each(function () {
            let hashmap = {};
            hashmap = { "id": $(this).attr('id'), "count": $(this).val() };
            serviceArrJson.push(hashmap)
        });
    });
    let formDataJsonString = JSON.stringify(serviceArrJson);
    formData.append("serviceList", formDataJsonString);

    $('#updateBtn').prop('disabled', true);
    $('#updateConsPackSpinner').show();


    //API CALL
    $.ajax({
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        url: CONF_PMM_PATH + "/updateConsumerPackage",
        //			headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            console.log("updateConsumerPackage-->2: ", result);
            $('#updateBtn').prop('disabled', false);
            $('#updateConsPackSpinner').hide();
            if (!result.hasOwnProperty('content')) {
                toastr.success("Content does not exist");
            }
            if (result.error === false) {
                $("#packSubscrSelector1").val('Select Package Status');
                $("#profilePicFile1").val('');
                toastr.success(result.message);
                $('#update-packageSubscription-modal').modal('hide');
                loadConsumerTable();
            }
        },
        error: function (xhr, status, error) {
            $('#updateBtn').prop('disabled', false);
            $('#updateConsPackSpinner').hide();
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                    })()
                }
            } else {
                toastr.error(xhr.responseJSON.error);
            }
        }
    });
}

function updateForm() {

    $(".update-cons-pack-class").each(function () {
        $(this).find(".form-group input").each(function () {
            console.log($(this).val(), "=", $(this).attr('id'));
        });
    });
}

function getPackageStatus2(mode, select) {
    //		let genderDropdownList ="<option selected value="+ select.id+">"+select.name+"</option>";
    let genderDropdownList = "<option value=" + 1 + " >New</option>";
    genderDropdownList += "<option value=" + 2 + " >Active</option>";
    genderDropdownList += "<option value=" + 3 + " >Inactive</option>";
    genderDropdownList += "<option value=" + 4 + " >Completed</option>";

    $("#packSubscrSelector1").html(genderDropdownList);
}

var uId = ""
function updatePackage(packageObj, preload) {
    console.log("Inside updatepackage");
    if (preload === true) {
        uId = packageObj.id;
        getPackageStatus("update", { name: packageObj.packageStatus.name, id: packageObj.packageStatus.id });

        if (packageObj.services != null) {
            $("#updateFormCount").val(packageObj.services.assignedCount);
        }
        $('#update-user-modal').modal('show');
    }
    else {
        if (updateValid) {
            toastr.error("Please check all fields");
            return;
        }

        if ($("#roleSelector").val() == "Select Role") {
            toastr.error('Role selection is compulsory!');
            return;
        }

        var formData = new FormData();
        formData.append("packageId", uId);
        formData.append("clientId", CLIENT_ID);
        formData.append("userId", userId);
        formData.append("packageStatus", $("#statusSelector1").val());
        formData.append("serviceList", $("#countSelector1").val());

        //API CALL
        $.ajax({
            type: 'POST',
            data: formData,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            url: CONF_PMM_PATH + "/updateConsumerPackage",
            //			headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("updateConsumerPackage-->2: ", result);
                if (!result.hasOwnProperty('content')) {
                    toastr.error('Token not exist');
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
                    alert("Consumer Package updated Successfully");
                    $('#update-user-modal').modal('hide');
                    loadConsumerTable();

                }

            },
            error: function (xhr, status, error) {
                // console.log("updateConsumerPackage-->3 : ", error);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                        })()
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    }

}





function populatePackStatusDropdown(mode, select) {
    if (mode === 'invite') {
        let packageStatusDropdownList = "<option selected>Select Package Status</option>";
        for (let packageStatus of packageStatusArr) {
            packageStatusDropdownList += "<option value=" + packageStatus.id + " >" + packageStatus.name + "</option>"
        }
        $("#packSubscrSelector1").html(packageStatusDropdownList);
    } else if (mode === 'update') {
        let packageStatusDropdownList = '';
        for (let packageStatus of packageStatusArr) {
            if (packageStatus.name === select.name) {
                packageStatusDropdownList += "<option selected value=" + packageStatus.id + " >" + packageStatus.name + "</option>";
            }
            packageStatusDropdownList += "<option value=" + packageStatus.id + " >" + packageStatus.name + "</option>"
        }
        $("#packSubscrSelector1").html(packageStatusDropdownList);
    }
}

function openConsumerPackDetailsForm(consPackObj, preload) {
    console.log("Inside updateuser", consPackObj);
    tempUserId = consPackObj.userDetails.userId;
    tempPackageId = consPackObj.packageId;
    $('#update-packageSubscription-modal').modal('show');

    let serviceList = consPackObj.services;
    let formElementList = '';
    for (let service of serviceList) {
        formElementList += '<div class="form-group"> <label for="updateFormSer1">' + service.serviceName + '(max:' + service.assignedCount + ') </label>' +
            '<input type="number" class="form-control" id=' + service.serviceId + ' placeholder="" min="0" max=' + service.assignedCount + ' value=' + service.remainingCount + '></div>';
    }

    //  		formElementList += '<div class="form-group"> <label for="updateFormSer2">Service-2 (max:5)</label>'+
    //                            '<input type="number" class="form-control" id="updateFormEmpId" placeholder="" min="0" max="5" value="3"></div>';

    $("#update-cons-pack-form").append(formElementList);

    getPackageStatus("update", { name: consPackObj.packageStatus, id: '' });

}


// API CALL FOR REQUESTED
function requestServices(){
    previousDate()
    console.log("Requested services");
    $('#requested_services_table').hide();
    $("#requested_services_table_no_data").hide();
    $("#requested_services_table-spinner").show();
    $('#requested_services_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/services?clientId=" + CLIENT_ID + "&status=1" + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#requested_services_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#requested_services_table_no_data").show();
                $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#requested_services_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packageCategory')) {
                    //alert("Packages field not exist");
                }

                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#requested_services_table').show();


                $('#requested_services_table').DataTable({

                    data: content.services,
                    destroy: true,
                    columns: [
                        {
                            data: 'packageName'
                        },
                        {
                            data: 'serviceName'
                        },
                        {
                            data: 'kitId'

                        },
                        {
                            data: 'contactDetails'

                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            let requestedDate = new Date(row.requestedDate).toLocaleDateString();
                            let date = requestedDate.substring(0, 9);
                                return requestedDate ? requestedDate : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            let lastDate = new Date(row.lastUpdated).toLocaleDateString();
                            //let lastUpdatedDate = lastDate.substring(0, 9);
                                return lastDate ? lastDate : '-';
                            }
                        },
                        {
                            data: 'serviceStatus'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewServices(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadRequestedStatus(' + JSON.stringify(row) + ', true);\'>Confirm Request</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadCancelStatus('+ JSON.stringify(row) + ');\'>Cancel Request</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                    "order": [[5, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#requested_services_table-spinner").hide();
            $("#requested_services_table_no_data").show();
            $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#requested_services_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#requested_services_table_no_data").text("No Data Found!");
            }
        }

    });
}

// API CALL FOR CONFIRMED
function confirmedServices(){
    console.log("Requested services");
    $('#requested_services_table').hide();
    $("#requested_services_table_no_data").hide();
    $("#requested_services_table-spinner").show();
    $('#requested_services_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/services?clientId=" + CLIENT_ID + "&status=2" + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#requested_services_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#requested_services_table_no_data").show();
                $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#requested_services_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packageCategory')) {
                    //alert("Packages field not exist");
                }

                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#requested_services_table').show();


                $('#requested_services_table').DataTable({

                    data: content.services,
                    destroy: true,
                    columns: [
                        {
                            data: 'packageName'
                        },
                        {
                            data: 'serviceName'
                        },
                        {
                             data: 'kitId'

                         },
                         {
                             data: 'contactDetails'

                         },
                       {
                        data: null,
                        render: function (data, type, row, meta) {
                        let requestedDate = new Date(row.requestedDate).toLocaleDateString();
                        //let date = requestedDate.substring(0, 9);
                        return requestedDate ? requestedDate : '-';
                            }
                        },
                        {
                        data: null,
                        render: function (data, type, row, meta) {
                         let lastDate = new Date(row.lastUpdated).toLocaleDateString();
                         //let lastUpdatedDate = lastDate.substring(0, 9);
                         return lastDate ? lastDate : '-';
                            }
                         },
                        {
                            data: 'serviceStatus'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewServices(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadConfirmedStatus(' + JSON.stringify(row) + ', true);\'>Completed</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadCancelStatusTable('+ JSON.stringify(row) + ');\'>Cancel</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                    "order": [[5, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#requested_services_table-spinner").hide();
            $("#requested_services_table_no_data").show();
            $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#requested_services_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#requested_services_table_no_data").text("No Data Found!");
            }
        }

    });
}

//API CALL FOR COMPLETED
function completedServices(){
    console.log("Confirmed services");
    $('#requested_services_table').hide();
    $("#requested_services_table_no_data").hide();
    $("#requested_services_table-spinner").show();
    $('#requested_services_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/services?clientId=" + CLIENT_ID + "&status=3" + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#requested_services_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#requested_services_table_no_data").show();
                $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#requested_services_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packageCategory')) {
                    //alert("Packages field not exist");
                }

                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#requested_services_table').show();


                $('#requested_services_table').DataTable({

                    data: content.services,
                    destroy: true,
                    columns: [
                        {
                            data: 'packageName'
                        },
                        {
                            data: 'serviceName'
                        },
                        {
                            data: 'kitId'

                        },
                        {
                            data: 'contactDetails'

                        },
                            {
                            data: null,
                            render: function (data, type, row, meta) {
                            let requestedDate = new Date(row.requestedDate).toLocaleDateString();
                            //let date = requestedDate.substring(0, 9);
                                return requestedDate ? requestedDate : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            let lastDate = new Date(row.lastUpdated).toLocaleDateString();
                            //let lastUpdatedDate = lastDate.substring(0, 9);
                                return lastDate ? lastDate : '-';
                            }
                        },
                        {
                            data: 'serviceStatus'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewServices(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'loadConfirmedStatus(' + JSON.stringify(row) + ', true);\'>Completed</button>' +
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
            $("#requested_services_table-spinner").hide();
            $("#requested_services_table_no_data").show();
            $('#requested_services_tablerequested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#requested_services_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#confirmed_services_table_no_data").text("No Data Found!");
            }
        }

    });
}


//API CALL FOR CANCELED

function canceledServices(){
    console.log("Completed services");
    $('#requested_services_table').hide();
    $("#requested_services_table_no_data").hide();
    $("#requested_services_table-spinner").show();
    $('#requested_services_table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    //API CALL
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/services?clientId=" + CLIENT_ID + "&status=4" + "&size=" + CONF_MAX_LIMIT,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#requested_services_table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {

                $("#requested_services_table_no_data").show();
                $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#requested_services_table_no_data").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('packageCategory')) {
                    //alert("Packages field not exist");
                }

                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#requested_services_table').show();


                $('#requested_services_table').DataTable({

                    data: content.services,
                    destroy: true,
                    columns: [
                        {
                            data: 'packageName'
                        },
                        {
                            data: 'serviceName'
                        },
                        {
                            data: 'kitId'

                        },
                        {
                            data: 'contactDetails'

                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            let requestedDate = new Date(row.requestedDate).toLocaleDateString();
                            //let date = requestedDate.substring(0, 9);
                                return requestedDate ? requestedDate : '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                            let lastDate = new Date(row.lastUpdated).toLocaleDateString();
                            //let lastUpdatedDate = lastDate.substring(0, 9);
                                return lastDate ? lastDate : '-';
                            }
                        },
                        {
                            data: 'serviceStatus'
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewServices(' + JSON.stringify(row) + ');\'>View Details</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'loadCompletedStatus(' + JSON.stringify(row) + ', true);\'>Canceled</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Disable License</button>' +
                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                    "order": [[5, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#requested_services_table-spinner").hide();
            $("#requested_services_table_no_data").show();
            $('#requested_services_table_no_data').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#requested_services_table_no_data").text(xhr.responseJSON.message);
            } else {
                $("#requested_services_table_no_data").text("No Data Found!");
            }
        }

    });
}

//CHANGE SERVICES STATUS API'S

function loadRequestedStatus(requestedServices) {
$('#Requested-user-modal').modal('show');

var Displaydate = new Date(requestedServices.scheduledDate).toLocaleDateString();
console.log(Displaydate);
$('#inviteScheduledDate').val(Displaydate);

//document.getElementById('inviteScheduledDate').value = shceduled_date;
console.log("Requested services modal",requestedServices);
$("#requestButton").unbind().click(function () {
    var formInstruction = $("#inviteInstruction").val()
    var Scheduled_date = $("#inviteScheduledDate").val();//inviteScheduledDate
    var scheduledDate_epoch = ((new Date(Scheduled_date)).getTime());
    console.log(scheduledDate_epoch);
//    var d = ((new Date(Scheduled_date)).getMilliseconds());
//
//    console.log(d);
    var Transaction_id = requestedServices.id;
    var instructionValue = $("#inviteInstruction").val();

    if ($("#inviteInstruction").val() == "") {
    toastr.error('Instruction is mandatory!')
    return;
    }else if (formInstruction.length < 2) {
    toastr.error('Instruction should be more than 2 characters!')
        return;
    }
    if (instructionValue.replace(/\s+/g, '').length == 0) {
    toastr.error('Enter valid Instruction!')
    return;
    }
//   var formData = new FormData();
//    formData.append("status", 2);
//    formData.append("instruction", $("#inviteInstruction").val());
//    formData.append("transactionId",Transaction_id);
//    formData.append("scheduledDate",scheduledDate_epoch);
//
//
//    console.log( formData)
            $('#requestServicesSpinner').show();
            $.ajax({
            type: "PUT",
            //data: formData,
            url: CONF_SERVER_PATH + "/services?status=2" + "&instruction=" + $("#inviteInstruction").val() + "&transactionId=" + Transaction_id + "&scheduledDate=" + scheduledDate_epoch,
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (data) {
                    $('#requestButton').prop('disabled', false);
                   $('#requestServicesSpinner').hide();
                if (data.error === false) {
                $('#Requested-user-modal').modal('hide');
                    (async () => {
                        toastr.success("Confirmed Successfully");
                        //$('#completed_button'+value.id).hide();
                        await sleep();
                        requestServices();

                    })()

                 }
                    else{
                          toastr.error(result.message);
                          }
                       },
                  error: function (xhr, status, error) {
                  console.log("inviteUser-->3 : ", xhr, status, error);

                   $('#requestButton').prop('disabled', false);
                   $('#requestServicesSpinner').hide();
                   if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                       if (xhr.responseJSON.code === 401) {
                           (async () => {
                               toastr.error(xhr.responseJSON.message);
                               await sleep();
                               window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                           })()
                       }else {
                           toastr.error(xhr.responseJSON.message);
                       }
                   } else {
                       toastr.error(xhr.responseJSON.error);
                   }

               }

                });
            })

}

function loadConfirmedStatus(confirmedServices) {
$('#Confirmed-user-modal').modal('show');
$("#inviteContactDetails").val(confirmedServices.contactDetails);
console.log("Completed services modal",confirmedServices);
$("#completedButton").unbind().click(function () {
     console.log("cancel button")

    var OTP = confirmedServices.otp
    var Transaction_id = confirmedServices.id;
    var formObservation = $("#inviteObservation").val();
    var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.pdf)$/i;

    var filePath = $("#inviteObservationfile").val()

    if (formObservation.length == 1) {
    toastr.error('Observation should be more than 2 characters')
        return;
    }else
    if ($("#inviteOtp").val() == "") {
    toastr.error('OTP is mandatory!')
    return;
    }else if ($("#inviteObservationfile").val() != "") {
    if (!allowedExtensions.exec(filePath)) {
                 toastr.error('File type not supported!');
                 return;
             }
    }

 var formData = new FormData();

addonServices = confirmedServices.addonService;
console.log("addon services",addonServices);

 var formfile =  document.getElementById("inviteObservationfile");

 if (formfile.files.length > 0)  {
     formData.append("files", formfile.files[0]);
     }
            formData.append("status", 3);
            formData.append("observation", $("#inviteObservation").val());
            formData.append("transactionId",Transaction_id);
            formData.append("otp",$("#inviteOtp").val());

// + "&observation=" + $("#inviteObservation").val() + "&transactionId=" + Transaction_id + "&otp=" + $("#inviteOtp").val(),
//
   for (var pair of formData.entries()) {
       console.log(pair[0]+ ', ' + pair[1]);
   }
            $('#completeServicesSpinner').show();
            $.ajax({
            type: "PUT",
            data: formData,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/services",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (data) {
            $('#completedButton').prop('disabled', false);
            $('#completeServicesSpinner').hide();

                if (data.error == false) {
                $('#Confirmed-user-modal').modal('hide');
                    (async () => {
                        toastr.success("Completed Successfully");
                         await sleep();
                        //completedServices();
                        completedServices();

                    })()

                 }else{
                       toastr.error(result.message);
                       }
                    },
               error: function (xhr, status, error) {
               console.log("inviteUser-->3 : ", xhr, status, error);

                $('#completedButton').prop('disabled', false);
                $('#completeServicesSpinner').hide();
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                        })()
                    }else {
                        toastr.error(xhr.responseJSON.message);
                    }
                } else {
                    //toastr.error(xhr.responseJSON.message);
                }

            }
                });
            })
}

function loadCancelStatus(cancelServices) {
$('#Cancel-user-modal').modal('show');
console.log("Cancel services modal",cancelServices);

$("#cancelButton").unbind().click(function () {
     console.log("cancel button")

    var OTP = cancelServices.otp
    var Transaction_id = cancelServices.id;
    var formReason = $("#inviteReason").val();
    console.log("transactionId",Transaction_id);
    console.log( "CANCEL MODAL VALUES",$("#cancelinviteOTP").val(),$("#inviteReason").val())
    if ($("#inviteReason").val() == "") {
         toastr.error('Reason is mandatory!')
         return;
         }else if(formReason.length < 2) {
          toastr.error('Reason should be more than 2 characters!')
           return;
         }
     if ($("#cancelinviteOTP").val() == "") {
        toastr.error('OTP is mandatory!')
        return;
     }

 var formData = new FormData();
  formData.append("status", 4);
  formData.append("reason", $("#inviteReason").val());
  formData.append("otp", $("#cancelinviteOTP").val());
  formData.append("transactionId",Transaction_id);
  formData.append("addonService",cancelServices.addonService);
//
//
   console.log( "CANCEL MODAL VALUES",$("#cancelinviteOTP").val(),$("#inviteReason").val())
            $('#cancelServicesSpinner').show();
            $.ajax({
            type: "PUT",
            data: formData,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/services",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (data) {
            $('#cancelButton').prop('disabled', false);
            $('#cancelServicesSpinner').hide();
                if (data.error == false) {
                $('#Cancel-user-modal').modal('hide');
                    (async () => {
                        toastr.success("Cancelled Successfully");
                        //$('#completed_button'+value.id).hide();
                        await sleep();
                        requestServices();
//                        await sleep();
//                        window.location.reload();
                    })()

                 }else{
                        toastr.error(result.message);
                       }
                   },
                   error: function (xhr, status, error) {
                      console.log("inviteUser-->3 : ", xhr, status, error);

                          $('#cancelButton').prop('disabled', false);
                              $('#cancelServicesSpinner').hide();
                                  if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                                      if (xhr.responseJSON.code === 401) {
                                          (async () => {
                                              toastr.error(xhr.responseJSON.message);
                                              await sleep();
                                              window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                                          })()
                                      }else {
                                          toastr.error(xhr.responseJSON.message);
                                      }
                                  } else {
                                      toastr.error(xhr.responseJSON.error);
                                  }

                              }

                });
            })


}

//CANCEL MODAL FOR CONFIRMED TABLE

function loadCancelStatusTable(cancelServices) {
$('#Cancel-confirmed_table-modal').modal('show');
console.log("Cancel services modal",cancelServices);

$("#cancelButtoncancel").unbind().click(function () {
     console.log("cancel button")

    var OTP = cancelServices.otp
    var Transaction_id = cancelServices.id;
    var formReasoncancel = $("#inviteReasoncancel").val();
    console.log("transactionId",Transaction_id);
    console.log( "CANCEL MODAL VALUES",$("#inviteOTPcancel").val(),$("#inviteReasoncancel").val())
    if ($("#inviteReasoncancel").val() == "") {
         toastr.error('Reason is mandatory!')
         return;
         }else if(formReasoncancel.length < 2) {
         toastr.error('Reason should be more than 2 characters!')
         return;
         }

     if ($("#inviteOTPcancel").val() == "") {
        toastr.error('OTP is mandatory!')
        return;
     }

   var formData = new FormData();
  formData.append("status", 4);
  formData.append("reason", $("#inviteReasoncancel").val());
  formData.append("transactionId",Transaction_id);
  formData.append("otp",$("#inviteOTPcancel").val());
  formData.append("addonService",cancelServices.addonService);
console.log(formData);
   //console.log( "CANCEL MODAL VALUES",$("#cancelinviteOTP").val(),$("#inviteReasoncancel").val())
            $('#cancelServicesSpinnercancel').show();
            $.ajax({
            type: "PUT",
            data: formData,
            contentType: false,
            processData: false,
            url: CONF_SERVER_PATH + "/services",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (data) {
            $('#cancelButtoncancel').prop('disabled', false);
            $('#cancelServicesSpinnercancel').hide();
                if (data.error == false) {
                $('#Cancel-confirmed_table-modal').modal('hide');
                    (async () => {
                        toastr.success("Cancelled Successfully");
                        //$('#completed_button'+value.id).hide();
                        await sleep();
                       canceledServices();
                    })()

                 }else{
                        toastr.error(result.message);
                       }
                   },
                   error: function (xhr, status, error) {
                      console.log("inviteUser-->3 : ", xhr, status, error);

                          $('#cancelButton').prop('disabled', false);
                              $('#cancelServicesSpinnercancel').hide();
                                  if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                                      if (xhr.responseJSON.code === 401) {
                                          (async () => {
                                              toastr.error(xhr.responseJSON.message);
                                              await sleep();
                                              window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './wLogin' : './cLogin';
                                          })()
                                      }else {
                                          toastr.error(xhr.responseJSON.message);
                                      }
                                  } else {
                                      toastr.error(xhr.responseJSON.error);
                                  }

                              }

                });
            })


}


function viewServices(services) {
$('#view-details-modal').modal('show');
console.log(services);
console.log(services.kitId);
var scheduled_date =  new Date(services.scheduledDate).toLocaleDateString();
//let Scheduleddate = scheduled_date.substring(0, 9);
$('#KitId').html("KIT ID <span class='float-right badge bg-info'>" + services.kitId + "</span>");
$('#servicesCollapseOne').html(services.kitId);
if (services.primaryUserDetails != null) {
console.log("patient name")
$('#PatientName').html("Contact Details <span class='float-right badge bg-info'>" + services.primaryUserDetails + "</span>");
$('#servicescollapseTwo').html(services.primaryUserDetails);
}


$('#PackageName').html("Package Name <span class='float-right badge bg-info'>" + services.packageName + "</span>");
$('#servicescollapseThree').html(services.packageName);

$('#ServiceName').html("Service Name <span class='float-right badge bg-info'>" + services.serviceName + "</span>");
$('#servicescollapseFour').html(services.serviceName);

$('#PreferredDate').html("Schedule Date <span class='float-right badge bg-info'>" + scheduled_date + "</span>");
$('#servicescollapseFive').html(scheduled_date);

$('#UserId').html("User Id <span class='float-right badge bg-info'>" + services.primaryUserId + "</span>");
$('#servicescollapseSix').html(services.primaryUserId);

$('#ContactDetails').html("Patient Details <span class='float-right badge bg-info'>" + services.contactDetails + "</span>");
$('#servicescollapseSeven').html(services.contactDetails);
}

//DISABLE PREVIOUS DATE

function previousDate(){
console.log("previous date function");
            var dtToday = new Date();
            var month = dtToday.getMonth() + 1;// getMonth() is zero-based
            var day = dtToday.getDate();
            var year = dtToday.getFullYear();
            if(month < 10)
                month = '0' + month.toString();
            if(day < 10)
                day = '0' + day.toString();
                var maxDate = year + '-' + month + '-' + day;
                // var minDate = day + '/' + month + '/' + year;
            $('#inviteScheduledDate').attr('min', maxDate);
            // $('#startId').attr('min', minDate);
        }

//POP-UP MODAL RESET

$(function () {
            $("#Requested-user-modal").on("hidden.bs.modal", function (e) {
               console.log("Modal hidden");
                  $("#inviteConfirmRequest").trigger("reset");
               });
        })

 $(function () {
             $("#Cancel-user-modal").on("hidden.bs.modal", function (e) {
                console.log("Modal hidden");
                   $("#inviteCancel").trigger("reset");
                });
         })

  $(function () {
              $("#Cancel-confirmed_table-modal").on("hidden.bs.modal", function (e) {
                 console.log("Modal hidden");
                    $("#inviteConfirmTable").trigger("reset");
                 });
          })
  $(function () {
                $("#Confirmed-user-modal").on("hidden.bs.modal", function (e) {
                   console.log("Modal hidden");
                      $("#inviteCompleted").trigger("reset");
                   });
            })


 function uploadInvoice(invoiceObj) {
 console.log("Upload Invoice start---->",invoiceObj)
 $("#upload-invoice-modal").modal('show');
 $("#uploadInvoiceButton").unbind().click(function () {

         console.log("uploadInvoice->start: ", $("#uploadFormInvoice").val());
             if (!$("#uploadFormInvoice").val()) {
                 console.log('No file selected');
                 toastr.error('Select file before upload!');
             } else {
             console.log("else condition");
                 var filePath = $("#uploadFormInvoice").val();
                 // Allowing file type
                 var allowedExtensions = /(\.pdf)$/i;
                 // /(\.jpg|\.jpeg|\.png|\.gif)$/i;

                 if (!allowedExtensions.exec(filePath)) {
                     toastr.error('File type not supported!');
                 }
                 else {
                     console.log("uploadCsv->start-2: ",)
                     var formData = new FormData();

                     formData.append("clientId", CLIENT_ID);
                     formData.append("userId", invoiceObj.primaryUserId);
                     formData.append("packageId", invoiceObj.packageId);
                     if ($("#uploadFormInvoice").val() != '') {
                      formData.append("files", $("#uploadFormInvoice").prop('files')[0]);
                     }



                     $('#uploadInvoiceButton').prop('disabled', true);
                     $('#uploadInvoiceSpinner').show();

                     //API CALL
                     $.ajax({
                         type: 'POST',
                         data: formData,
                         enctype: 'multipart/form-data',
                         cache: false,
                         contentType: false,
                         processData: false,
                         url: CONF_SERVER_PATH + "/uploadInvoice",
                         headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                         success: function (result) {
                             console.log("uploadCsv->start-3: ", result)
                             $('#uploadInvoiceButton').prop('disabled', false);
                             $('#uploadInvoiceSpinner').hide();
                             $("#uploadFormInvoice").val('');
                             if (!result.hasOwnProperty('content')) {
                                 toastr.error("Content does not exist");

                             }
                             if (result.code === 200) {
                                 toastr.success("Invoice Uploaded successfully");
                                 $('#upload-invoice-modal').modal('hide');
                                 loadConsumerTable()
                             }
                         },
                         error: function (xhr, status, error) {
                             console.log("uploadInvoice->start-4: ", error)
                             $('#uploadInvoiceButton').prop('disabled', false);
                             $('#uploadInvoiceSpinner').hide();
                             $("#uploadFormInvoice").val('');
                             if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                                 if (xhr.responseJSON.code === 401) {
                                     (async () => {
                                         toastr.error(xhr.responseJSON.message);

                                         window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './login';
                                          return;
                                     })()
                                 }else {
                                    console.log("inside else");
                                    toastr.error(xhr.responseJSON.message);
                                  }
                             }
                         }
                     });
                 }
             }
      });

}


