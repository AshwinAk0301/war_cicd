let SUB_DEVICE_MASTER = [], SUB_DEVICE_COUNT = 0, PRODUCT_STATUS_MASTER = [], CLIENTLIST = [], DistributorList = [];
const PRODUCT_NAMES = ['SAMVITA', 'FITKIT'], LICENSE_VERSION = ['F1', 'M1'];
var PACKAGES="";
var APPOINTMENTS="";
var ROLE="";
var JWT_TOKEN="";
var CLIENT_ID="";
const WARRANTY_PERIOD = [
    '1 Month',
    '2 Months',
    '3 Months',
    '4 Months',
    '5 Months',
    '6 Months',
    '9 Months',
    '12 Months',
    '18 Months',
    '24 Months',
    '30 Months',
    '36 Months',
];
const YEARS_MASTER = ["1 Year", "2 Year", "3 Year", "4 Year"];
const MONTHS_MASTER = [
    "Select Month",
    "1 months",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
    "7 months",
    "8 months",
    "9 months",
    "10 months",
    "11 months",
    "12 months",
];
const DAYS_MASTER = [
    "Select Days",
    "2 days",
    "5 days",
    "7 days",
    "10 days",
    "20 days",
    "25 days",
];
const DEF_DELAY = 1000;

// FOR RENEWAL MODAL

function configureDropDownLists1(subscriptionType1, subscriptionType2) {
  var menubars = ["1 Year", "2 Year", "3 Year", "4 Year"];
  var teams = [
    "select the time",
    "1 months",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
    "7 months",
    "8 months",
    "9 months",
    "10 months",
    "11 months",
    "12 months",
  ];
  var names = [
    "select time",
    "2 days",
    "5 days",
    "7 days",
    "10 days",
    "20 days",
    "25 days",
  ];

  switch (subscriptionType1.value) {
    case "Year":
      subscriptionType2.options.length = 0;
      for (i = 0; i < menubars.length; i++) {
        createOption(subscriptionType2, menubars[i], menubars[i]);
      }
      break;
    case "Month":
      subscriptionType2.options.length = 0;
      for (i = 0; i < teams.length; i++) {
        createOption(subscriptionType2, teams[i], teams[i]);
      }
      break;
    case "Days":
      subscriptionType2.options.length = 0;
      for (i = 0; i < names.length; i++) {
        createOption(subscriptionType2, names[i], names[i]);
      }
      break;
    default:
      subscriptionType2.options.length = 0;
      break;
  }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

$(document).ready(function () {

    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    ROLE = localStorage.getItem("ROLE");
    CLIENT_ID = localStorage.getItem("CLIENT_ID");
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");
    PACKAGES = localStorage.getItem("PACKAGES");
    APPOINTMENTS = localStorage.getItem("APPOINTMENTS");
    console.log("PACKAGES AND APPOINTMENTS IN PRODUCTS",PACKAGES,APPOINTMENTS)


    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    } else if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        loadProductTable();
        getSubDeviceMaster();
        //API CALL to load Client dropdown
        getProductStatusMaster();
        getClientListForProduct();
        getDistributorsForProduct();

        $(".hide-admin-unauth").css("display", "none");
    } else if (ROLE === "Client Admin") {
        loadProductTable();

        $(".hide-unauth").css("display", "none");
        $("#add-product-btn").css("display", "none");

    }

    if (PACKAGES === "false")
    {
            $('#managePackages').hide();
            $('#patientManagement').hide();
            $('#packageManagement').hide();
    }

    if (APPOINTMENTS === "false") {
             $('#manageAppointments').hide();
    }
    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);

})

/* Load Product Table data when page loaded */
function loadProductTable() {
    console.log("loadProductTable->", ROLE,JWT_TOKEN.length,CLIENT_ID );
    $('#productTable').hide();
    $("#product-table-error").hide();
    $("#product-table-spinner").show();
    $('#product-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_SERVER_PATH + "/getProductTable?";

    if (ROLE.includes("Wrizto")) {
        url += "clientIds=" + "&size=" + CONF_MAX_LIMIT + "&sort=lastUpdated,DESC";
    }
    else if (ROLE.includes("Client Admin")) {
        url += "clientIds=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT + "&sort=lastUpdated,DESC";
    }

    //API CALL
    $.ajax({
        type: 'GET',
        url: url,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            $("#product-table-spinner").hide();

            console.log('success: ', JWT_TOKEN);
            if (result.error == true) {
                $("#product-table-error").show();
                $('#product-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#product-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('products')) {
                    toastr.error("Products field not exist");
                }
                let { content, message, error } = result;

                //console.log("window.JWT_TOKEN-->", window.JWT_TOKEN);
                $('#productTable').show();

                $('#productTable').DataTable({
                    data: content.products.productList,
                    destroy: true,
                    columns: [
                        {
                            //			                data: "productId.productName"
                            data: null,
                            render: function (data, type, row, meta) {
                                // console.log('ProductName: ', !row.productId, row);
                                return ('productMaster' in row && row.productMaster && 'productName' in row.productMaster && row.productMaster.productName) ? row.productMaster.productName : '-';
                            }
                        },
                        {
                            data: 'serialNo'
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                if (row.hasOwnProperty('clientId') && row.clientId != null) {
                                    //console.log("row.clientId: ",row.clientId);
                                    return row.clientId.clientName;
                                } else {
                                    return '-';
                                }
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                            return 'distributorId' in row && row.distributorId? row.distributorId: '-';
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                            return 'macAddress' in row && row.macAddress? row.macAddress: '-';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                //console.log('row: ', row);
                                return row.productStatus.deviceStatus;
//                                return row.productStatus === true ? 'Active' : 'Inactive';
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.licenseStatus.licenseStatus;
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.licenseExpiryDate? new Date(row.licenseExpiryDate).toLocaleDateString(): '-';
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewProductDetails(' + JSON.stringify(row) + ');\'>View Details</button>';
//                                if (!row.licenseStatus.licenseStatus == 'NEW') {
//                                     menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadAddSubscriberModal(' + JSON.stringify(row) + ');\'>Associate User</button>';
//                                }
                                //'<button class=\'dropdown-item\' type=\'button\' onClick=\'activateLicense('+ JSON.stringify(row) + ');\'>Activate License</button>';

//                                if (row.licenseStatus.licenseStatus == 'NEW' || row.licenseStatus.licenseStatus == 'NOT_AT_ACTIVATED' && (ROLE === 'Wrizto Super Admin' || ROLE === 'Wrizto Admin' || ROLE === 'Client Admin')) {
//                                    menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'activateProductLicense(' + JSON.stringify(row) + ');\'>Assign License</button>';

                                    // if(ROLE === 'Wrizto Super Admin' || ROLE === 'Wrizto Admin'){
                                    // 	menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'linkClient('+ JSON.stringify(row) + ');\'>Assign Client</button>';
                                    // }
//                                }
//                                 else {
//                                    // if(ROLE === 'Wrizto Super Admin' || ROLE === 'Wrizto Admin'){
//                                    //     menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'changeClient('+ JSON.stringify(row) + ');\'>Change Client</button>';
//                                    // }
//                                    menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadRemoveSubscriberModal(' + JSON.stringify(row) + ');\'>Disassociate User</button>'+
//                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadAddSubscriberModal(' + JSON.stringify(row) + ');\'>Associate User</button>';
//                                }
                                if (row.licenseStatus.licenseStatus == 'NEW' || row.licenseStatus.licenseStatus == 'NOT_AT_ACTIVATED' && ( ROLE === 'Client Admin')) {
                                    if ( ROLE == 'Client Admin') {
                                    if (row.clientId) {
                                          menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'activateProductLicense(' + JSON.stringify(row) + ');\'>Received</button>';
                                          }
                                    }
//                                          menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'activateProductLicense(' + JSON.stringify(row) + ');\'>Assign License</button>';
                                }
                                else if(ROLE == 'Client Admin'){
                                        menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadAddSubscriberModal(' + JSON.stringify(row) + ');\'>Associate User</button>' +
                                        '<button class=\'dropdown-item\' type=\'button\' onClick=\'loadRemoveSubscriberModal(' + JSON.stringify(row) + ');\'>Disassociate User</button>';

                                }
                                if (ROLE === 'Wrizto Super Admin' || ROLE === 'Wrizto Admin') {
                                    if (!row.clientId) {
                                        menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'linkClient(' + JSON.stringify(row) + ');\'>Assign Client</button>';
                                    }
//                                    else {
//                                        menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'changeClient(' + JSON.stringify(row) + ');\'>Change Client</button>';
//                                        '<button class=\'dropdown-item\' type=\'button\' onClick=\'activateProductLicense(' + JSON.stringify(row) + ');\'>Assign License</button>';
//                                    }
                                    //menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateProduct(' + JSON.stringify(row) + ');\'>Update Product</button>';
                                }
                                if (
                                  row.licenseStatus.licenseStatus == "ACTIVATED" ||
                                  row.licenseStatus.licenseStatus == "INACTIVE" ||
                                  (row.licenseStatus.licenseStatus == "EXPIRED" &&
                                    (ROLE === "Wrizto Super Admin" ||
                                      ROLE === "Wrizto Admin"
                                     ))
                                )if (ROLE == "Wrizto Super Admin"){
                                 menuItem +=
                                 "<button class='dropdown-item' type='button' onClick='renew(" +
                                 JSON.stringify(row) + ")'>Renew</button>";
                                }

                                //menuItem +=  '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateProduct(' + JSON.stringify(row) + ');\'>Update Product</button>';
                                return menuItem;
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.lastUpdated? new Date(row.lastUpdated).toLocaleDateString(): '-';
                            }
                        },
                    ],

                    "order": [[9, "desc"]],
                    "columnDefs": [{ "type": "date", "targets": 9 }]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#product-table-spinner").hide();
            $("#product-table-error").show();
            $('#product-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                $("#product-table-error").text(xhr.responseJSON.message);
            } else {
                $("#product-table-error").text("No Data Found!");
            }
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
}

/* CALL API activate license of a product */
function activateProductLicense(product) {
    $('#activate-client-license-modal').modal('show');
       console.log("client",product);
    let serialNo = product.serialNo;
//    if (product.clientId === '') {
//        console.log("no client",product.clientId);
//        alert("Client not found");
//        toastr.error("Client not found");
//        return;
//    }
    let clientId = product.clientId.id;
    let jsonData;

    if (serialNo == '' && clientId == '') {
        toastr.error("Serial Number not found");
        return;
    } else {
        let productArray = [];
        productArray.push({
        "serialNo": serialNo, "clientId": clientId
        });
        jsonData = JSON.stringify({products:productArray
        });
    }
    //API CALL to Register a User to a product

    console.log('jsondata: ', jsonData);
    $("#activateLicenseButton").unbind().click(function () {
        $.ajax({
            type: 'POST',
            data: jsonData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/groupActivation",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log('success: ', result);
                if (result.error == true) {
                    //ToDo: Remove alert message
                     $('#activate-client-license-modal').modal('hide');
                    toastr.error(result.message);
                } else {
                    let { content, message, error } = result;
                    if (error === false) {
                        toastr.success("Product Activated Successfully");
                         $('#activate-client-license-modal').modal('hide');
                        loadProductTable();
                    }
                }
            },
            error: function (xhr, status, error) {
                // console.log('activateLicense->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                        })()
                    }else{
                        toastr.error(xhr.responseJSON.message);
                    }
                } else {
                    toastr.error(xhr.responseJSON.error);
                }
            }
        });
    });
}


function getClientListForProduct() {
    if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        $.ajax({
            type: 'GET',
            url: CONF_SERVER_PATH + "/getClientList",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
            console.log('getClientListForProduct: ',result)
                if (!result.hasOwnProperty('content')) {
                    toastr.error("Token not exist");
                }
                let { content, message, error } = result;

                if (error === false) {
                    CLIENTLIST = content.clientList;
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
    }
}

/* CALLAPI TO GET DISTRIBUTORS */

function getDistributorsForProduct() {
    if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        $.ajax({
            type: 'GET',
            url: CONF_SERVER_PATH + "/getDistributors",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
            console.log('getDistributorsForProduct: ',result)
                if (!result.hasOwnProperty('content')) {
                    toastr.error("Token not exist");
                }
                let { content, message, error } = result;

                if (error === false) {
                    DistributorList = content.distributorDetails;
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
    }
}

/* CALL API activate license of a product */
function linkClient(product) {

    if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        $('#link-client-modal').modal('show');
        console.log("product: ",product);

        let clientId;
        let serialNo = product.serialNo;
        let distributorId = product.distributorId;
        console.log(distributorId);
        if ('productStatus' in product && 'deviceStatus' in product.productStatus && ( product.productStatus.deviceStatus === 'NEW')) {

            if (serialNo === "") {
                toastr.error("Serial number not found");
                return;
            }

            $("#linkClientSerial").html("<p>" + serialNo + "</p>");
            $("#linkClientProduct").html("<p>" + product.productMaster.productName + "</p>");

            let clientDropdownList = "<option selected>Select Client</option>";

            for (let client of CLIENTLIST) {
                clientDropdownList += "<option value=" + client.id + " >" + client.name + "</option>"
            }

            $("#linkClientSelector").html(clientDropdownList);

            $("#linkClientSelector").change(function () {
                clientId = $("#linkClientSelector").val();
            });

            //DISTRIBUTORS DROPDOWN
            let distributorsDropdownList = "<option selected>Select Disributors</option>";

            for (let distributors of DistributorList) {
                distributorsDropdownList += "<option value=" + distributors.id + " >" + distributors.name + "</option>"
            }

            $("#linkDistributerSelector").html(distributorsDropdownList);

            $("#linkDistributerSelector").change(function () {
                distributorId = $("#linkDistributerSelector").val();
            });

            $("#linkClientButton").unbind().click(function () {


                if (!isNaN(clientId)) {

                    let jsonData = JSON.stringify({
                        "serialNo": serialNo, "clientId": Number(clientId),"distributorId": Number(distributorId)

                    })

                    //API CALL to link Client to a product

                    $.ajax({
                        type: 'POST',
                        url: CONF_SERVER_PATH + "/linkProductToClient",
                        data: jsonData,
                        contentType: "application/json",
                        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                        success: function (result) {

                            console.log('success: ', result);
                            if (result.error == true) {
                                //ToDo: Remove alert message
                                toastr.error(result.message);
                            } else {

                                let { content, message, error } = result;

                                if (error === false) {
                                    toastr.success(result.message);
                                    //toastr.success("Product with serial: " + serialNo + " Linked to Client " + $("#linkClientSelector").find('option:selected').text());
                                    $('#link-client-modal').modal('hide');
                                    loadProductTable();
                                }

                                //console.log("window.JWT_TOKEN-->", window.JWT_TOKEN);


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
                } else {
                    toastr.error("Please choose a client");
                }
            });


        }
        else {
            toastr.error("This product status should be NEW/ACTIVE to assign client");
        }
    } else {
        toastr.error("Feature only available to Wrizto Admins");
    }

}

/* CALL API activate license of a product */
function changeClient(product) {
    if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        $('#update-client-modal').modal('show');

        let clientId;
        let serialNo = product.serialNo;

        if ('productStatus' in product && 'deviceStatus' in product.productStatus && (product.productStatus.deviceStatus ==='ACTIVE' || product.productStatus.deviceStatus === 'NEW ')) {

            let productId = product.id;

            if (serialNo === "") {
                toastr.error("Serial number not found");
                return;
            }

            $("#changeClientSerial").html("<p>" + serialNo + "</p>");
            $("#changeClientProduct").html("<p>" + product.productMaster.productName + "</p>");

            let clientDropdownList = "<option selected value=" + product.clientId.id + ">" + product.clientId.clientName + "</option>";

            for (let client of CLIENTLIST) {
                if (client.id === product.clientId.id) {
                    continue;
                }
                clientDropdownList += "<option value=" + client.id + ">" + client.name + "</option>"
            }

            $("#changeClientSelector").html(clientDropdownList);

            $("#changeClientSelector").change(function () {
                clientId = $("#changeClientSelector").val();
            });

            $("#changeClientButton").unbind().click(function () {


                if (!isNaN(clientId)) {

                    let jsonData = JSON.stringify({
                        "serialNo": serialNo, "clientId": Number(clientId), "productId": Number(productId)
                    })

                    //API CALL to change Client to a product

                    $.ajax({
                        type: 'POST',
                        url: CONF_SERVER_PATH + "/modifyClient",
                        data: jsonData,
                        contentType: "application/json",
                        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                        success: function (result) {

                            console.log('success: ', result);
                            if (result.error == true) {
                                //ToDo: Remove alert message
                                toastr.error(result.message);
                            } else {

                                let { content, message, error } = result;

                                if (error === false) {
                                    toastr.success("Product with serial: " + serialNo + " Linked to Client " + $("#updateClientSelector").find('option:selected').text());
                                    $('#update-client-modal').modal('hide');
                                    loadProductTable();
                                }

                                //console.log("window.JWT_TOKEN-->", window.JWT_TOKEN);


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
                } else {
                    toastr.error("Please choose a client");
                }
            });


        } else {
            toastr.error("This product status is Inactive");
        }
    } else {
        toastr.error("Feature only available to Wrizto Admins");
    }
}

/* CALL API to add new subscriber to a product */
function loadAddSubscriberModal(product) {
    console.log("loadAddSubscriberModal->start: ", JWT_TOKEN);
    $('#loadAddSubscriber-modal').modal('show');

    let clientId = product.clientId.id;
    let productId = product.id;
    let userId;
    let userList;

    console.log(product.productMaster.productName);


    $('#addSubRoleSelector').html("<option selected>Select Role</option>");
    $('#addSubUserSelector').html("<option selected>Choose Role above</option>");

    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getRoles",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            console.log(result);
            if (!result.hasOwnProperty('content')) {
                toastr.error("Token not exist");
            }
            let { content, message } = result;
            let { roles } = content;

            let roleDropdownList = "<option selected>Select Role</option>";
            for (let role of roles) {
            console.log(roles);
            if (product.productMaster.productName == 'FITKIT') {
            if (role.name.includes("Doctor") || role.name.includes("Consumer")) {
             roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>";
                   }
            }else  if (product.productMaster.productName == 'SAMVITA') {
             if (role.name.includes("Doctor") || role.name.includes("Nurse")) {
             roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>";
                 }
            }

            }
            $("#addSubRoleSelector").html(roleDropdownList);

            // else if (mode === 'update'){
            // 	let roleDropdownList ="<option selected value="+select.id +">"+select.name+"</option>";
            // 	for (let role of roles){
            // 		if(role.id === select.id){
            // 			continue;
            // 		}
            // 		roleDropdownList += "<option value="+ role.id +" >"+role.name+"</option>"
            // 	}
            // 	$("#roleSelector1").html(roleDropdownList);
            // }

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

    // console.log(product);


    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getSubscriberList?clientId=" + clientId + "&productId=" + productId + "&status=unsubscribed",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            console.log('success: ', result);
            if (result.error == true) {
                console.log("Inside if");

            } else {
                console.log("Inside else");

                let { content, message, error } = result;
                userList = result;
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

    $("#addSubRoleSelector").change(function () {
        if (userList !== undefined) {
            if (userList.content.doctor != [] && $("#addSubRoleSelector").find('option:selected').text() === "Doctor") {
                let doctorList = "<option selected>Select Doctor</option>";
                for (tempDoctor of userList.content.doctor) {
                    doctorList += "<option value=" + tempDoctor.id + " >" + tempDoctor.name + "</option>"
                }
                $('#addSubUserSelector').html(doctorList);
            }
            else if (userList.content.nurse != [] && $("#addSubRoleSelector").find('option:selected').text() === "Nurse") {

                let nurseList = "<option selected>Select Nurse</option>";
                for (tempNurse of userList.content.nurse) {
                    nurseList += "<option value=" + tempNurse.id + " >" + tempNurse.name + "</option>";
                }
                $('#addSubUserSelector').html(nurseList);
            }
            else if (userList.content.consumer != [] && $("#addSubRoleSelector").find('option:selected').text() === "Consumer") {
                console.log("Consumer ", userList.content.consumer);
                let consumerList = "<option selected>Select Consumer</option>";
                for (tempConsumer of userList.content.consumer) {
                    consumerList += "<option value=" + tempConsumer.id + " >" + tempConsumer.name + "</option>";
                }
                $('#addSubUserSelector').html(consumerList);
            } else {
                $('#addSubUserSelector').html("No User found");
            }
        } else {
            $('#addSubUserSelector').html("No User found");
        }

    });


    $("#addSubButton").unbind().click(function () {

        userId = $('#addSubUserSelector').val();

        if (userId.includes("Select")) {
            toastr.error("Choose User");
            return;
        }

        let jsonData = JSON.stringify({
            "clientId": clientId, "userId": Number(userId), "productId": Number(productId)
        });

        //API CALL to Register a User to a product
        $.ajax({
            type: 'POST',
            data: jsonData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/subscribeToProduct",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {

                console.log('success: ', result);
                if (result.error == true) {
                    //ToDo: Remove alert message
                    toastr.error(result.message);
                } else {
                    if (result.hasOwnProperty('message') ) {
                        //ToDo: Remove alert message
                        toastr.success(result.message);
                        $('#loadAddSubscriber-modal').modal('hide');
                    }else{
                        toastr.success("Subscribed Successfully!");
                        $('#loadAddSubscriber-modal').modal('hide');
                    }

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

    });



}

/* CALL API to add new subscriber to a product */
function loadRemoveSubscriberModal(product) {
    $('#loadRemoveSubscriber-modal').modal('show');

    let roleId;
    let clientId = product.clientId.id;
    let productId = product.id;
    let userId;

    let userList;
    console.log(product.productMaster.productName);
    $('#removeSubRoleSelector').html("<option selected>Select Role</option>");
    $('#removeSubUserSelector').html("<option selected>Choose Role above</option>");

    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getRoles",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            console.log(result);
            if (!result.hasOwnProperty('content')) {
                toastr.error("Token not exist");
            }
            let { content, message } = result;
            let { roles } = content;

            let roleDropdownList = "<option selected>Select Role</option>";
            for (let role of roles) {
                        if (product.productMaster.productName == 'FITKIT') {
                        if (role.name.includes("Doctor") || role.name.includes("Consumer")) {
                         roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>";
                               }
                        }else  if (product.productMaster.productName == 'SAMVITA') {
                         if (role.name.includes("Doctor") || role.name.includes("Nurse")) {
                         roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>";
                             }
                        }

                        }
            $("#removeSubRoleSelector").html(roleDropdownList);

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
    roleId = $("#removeSubRoleSelector").val();



    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getSubscriberList?clientId=" + clientId + "&productId=" + productId + "&status=subscribed",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            console.log('success: ', result);
            if (result.error == true) {
                console.log("Inside if");

            } else {
                console.log("Inside else");

                let { content, message, error } = result;
                userList = result;
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

    $("#removeSubRoleSelector").change(function () {
        if (userList !== undefined) {
            if (userList.content.doctor != [] && $("#removeSubRoleSelector").find('option:selected').text() === "Doctor") {
                let doctorList = "<option selected>Select Doctor</option>";
                for (tempDoctor of userList.content.doctor) {
                    doctorList += "<option value=" + tempDoctor.id + " >" + tempDoctor.name + "</option>";
                }
                $('#removeSubUserSelector').html(doctorList);
            }
            else if (userList.content.nurse != [] && $("#removeSubRoleSelector").find('option:selected').text() === "Nurse") {

                let nurseList = "<option selected>Select Nurse</option>";
                for (tempNurse of userList.content.nurse) {
                    nurseList += "<option value=" + tempNurse.id + " >" + tempNurse.name + "</option>";
                }
                $('#removeSubUserSelector').html(nurseList);
            }
            else if (userList.content.consumer != [] && $("#removeSubRoleSelector").find('option:selected').text() === "Consumer") {

                let consumerList = "<option selected>Select Consumer</option>";
                for (tempConsumer of userList.content.consumer) {
                    consumerList += "<option value=" + tempConsumer.id + " >" + tempConsumer.name + "</option>";
                }
                $('#removeSubUserSelector').html(consumerList);
            } else {
                $('#removeSubUserSelector').html("No User found");
            }
        } else {
            $('#removeSubUserSelector').html("No User found");
        }


    });

    $("#removeSubButton").unbind().click(function () {

        userId = $('#removeSubUserSelector').val();

        if (userId.includes("Select")) {
            toastr.error("Choose User");
            return;
        }

        let jsonData = JSON.stringify({
            "clientId": clientId, "userId": Number(userId), "productId": Number(productId)
        });

        //API CALL to Unsubscribe a User to a product
        $.ajax({
            type: 'POST',
            data: jsonData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/unsubscribeFromProduct",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {

                console.log('success: ', result);
                if (result.error == true) {
                    //ToDo: Remove alert message
                    toastr.error(result.message);
                } else {
                    let { content, message, error } = result;
                    if (error === false) {
                         toastr.success(result.message);
                        $('#loadRemoveSubscriber-modal').modal('hide');
                    }


                    //console.log("window.JWT_TOKEN-->", window.JWT_TOKEN);
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

    });

}


/* Load Product deatils modal when clicked on action menu (view details) */
function viewProductDetails(productObj) {
    console.log("viewProductDetails->start: ", productObj);
    $('#productDetails-modal').modal('show');
    //API CALL to fetch Registerd Users for a product

    let clientId;
    let SubDevices = productObj;
    viewSubDevices(SubDevices);

    if (ROLE === "Client Admin") {
        clientId = CLIENT_ID;
    } else {
        clientId = productObj.clientId.id;
    }
    let ExpirDate = new Date(productObj.licenseExpiryDate).toLocaleString()
    let licenseExpiryDate = ExpirDate.substring(0, 9);
    let License = "License not activated";
    $("#productCardSerial").html(productObj.serialNo);
    $("#productCardName").html(productObj.productMaster.productName);
    $("#productCardLicenseStatus").html(productObj.licenseStatus.licenseStatus);//productSubscription
    $("#productSubscription").html(productObj.subscriptionPlan);
    $("#productDescription").html(productObj.description);//productExpirdate
 if (productObj.licenseExpiryDate != null) {
     $("#productExpirdate").html(licenseExpiryDate);
     }else{
     console.log("else part");
     return "-"
     }

    //$("#productExpirdate").html(ExpirDate);
//    console.log(productObj.licenseExpiryDate)
    console.log(ExpirDate)

    let url = CONF_SERVER_PATH + "/getSubscriberList?clientId=" + clientId;
    if (productObj.id != '') {
        url += "&productId=" + productObj.id + "&status=subscribed";
    }

    $('#collapseOne').html('');
    $('#collapseTwo').html('');
    $('#collapseThree').html('');
    $('#collapseOne').removeClass('show');
    $('#collapseTwo').removeClass('show');
    $('#collapseThree').removeClass('show');


    $.ajax({
        type: 'GET',
        url: url,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            console.log('success: ', result);
            if (result.error == true) {
                //ToDo: Remove alert message
                $('#doctorTitle').html("Doctors <span class='float-right badge bg-info'>0</span>");
                $('#nurseTitle').html("Nurses <span class='float-right badge bg-danger'>0</span>");
                $('#consumerTitle').html("Consumers <span class='float-right badge bg-success'>0</span>");
                $('#collapseOne').removeClass('show');
                $('#collapseTwo').removeClass('show');
                $('#collapseThree').removeClass('show');
                // $('#collapseOne').html('No Data');
                // $('#collapseTwo').html('No Data');
                // $('#collapseThree').html('No Data');
            } else {

                let { content, message, error } = result;

                $('#doctorTitle').html("Doctors <span class='float-right badge bg-info'>0</span>");
                $('#nurseTitle').html("Nurses <span class='float-right badge bg-danger'>0</span>");
                $('#consumerTitle').html("Consumers <span class='float-right badge bg-success'>0</span>");

                // console.log(content);
                if (content.doctor != '') {
                    console.log(content.doctor);
                    $('#doctorTitle').html("Doctors <span class='float-right badge bg-info'>" + content.doctor.length + "</span>");
                    let doctorList = '';
                    for (tempDoctor of content.doctor) {
                        doctorList += "<p>" + tempDoctor.name + "</p>";
                    }
                    $('#collapseOne').html(doctorList);
                } else {
                    $('#collapseOne').removeClass('show');
                }
                if (content.nurse != '') {
                    $('#nurseTitle').html("Nurses <span class='float-right badge bg-danger'>" + content.nurse.length + "</span>");

                    let nurseList = '';
                    for (tempNurse of content.nurse) {
                        nurseList += "<p>" + tempNurse.name + "</p>";
                    }
                    $('#collapseTwo').html(nurseList);
                } else {

                    $('#collapseTwo').removeClass('show');

                }
                if (content.consumer != '') {
                    $('#consumerTitle').html("Consumers <span class='float-right badge bg-success'>" + content.consumer.length + "</span>");

                    let consumerList = '';
                    for (tempConsumer of content.consumer) {
                        consumerList += "<p>" + tempConsumer.name + "</p>";
                    }
                    $('#collapseThree').html(consumerList);
                } else {

                    $('#collapseThree').removeClass('show');
                }



            }
        },
        error: function (xhr, status, error) {
            //console.log('viewProductDetails->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);

            if (error === true) {
                $('#doctorTitle').html("Doctors <span class='float-right badge bg-info'>0</span>");
                $('#nurseTitle').html("Nurses <span class='float-right badge bg-danger'>0</span>");
                $('#consumerTitle').html("Consumers <span class='float-right badge bg-success'>0</span>");
                $('#collapseOne').removeClass('show');
                $('#collapseTwo').removeClass('show');
                $('#collapseThree').removeClass('show');
            }
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
    viewSubDevices(SubDevices);
}

function getSubDeviceMaster() {
    $.ajax({
        type: "GET",
        url: CONF_SERVER_PATH + `/getSubProductDetails`,
        headers: { Authorization: "Bearer " + JWT_TOKEN },
        success: function (result) {
            if (result.code === 200) {
                //console.log("appendSubDevice-->1: ", result);
                SUB_DEVICE_MASTER = result?.content?.SubDeviceDetails;
            } else {
                toastr.error(result.message);
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
        },
    });
}

function appendSubDevice() {
    incrementAddSubDev();
    if (SUB_DEVICE_MASTER.length > 0) {
        //Populate Add Product sub-Device form
        addSubDeviceToForm();
    } else {
        //toastr.error('Fetch sub device master failed!');
    }
}

function addSubDeviceToForm() {

    let subdevices = SUB_DEVICE_MASTER;
    let deviceOptions =
        subdevices &&
        subdevices.map((device) => {
            return `<option name='${device?.name}' value='${device?.id}'>${device?.name}</option>`;
        });
    //console.log("???++", deviceOptions);
    let warrantyOption = WARRANTY_PERIOD.map((period) => {
        return `<option>${period}</option>`;
    });
    deviceCount = SUB_DEVICE_COUNT;
    $("#subdvcappend").append(
        `<div id="appenddvc"><div class='accordion' id='accordionExamplee${SUB_DEVICE_COUNT + 1}'>
        <div id='deleteAddSubDevice${SUB_DEVICE_COUNT}' class='card accordion-item bg-default'>
        <p class='accordion-header' id='headingTwo'>
        <div  class='row'>
        <div  class='col-xs-11 col-sm-11 col-lg-11'><input type='button' value='Device ${SUB_DEVICE_COUNT} &#xf107;' id='accordionbuttonn${SUB_DEVICE_COUNT}'
        class='collapsed card-link btn info' style='height: 45px; background-color: rgba(255, 152, 217, 0.87); width: 100%; font-weight: bolder;'  data-toggle='collapse' data-target='#collapsebleThree' aria-expanded='true' aria-controls='collapsebleThree'></div>
       <button class='btn btn-primary remove-tr' id='btnDelete${SUB_DEVICE_COUNT}' type='button' style='width: 45px;' onClick='decrementAddSubDev(this.id)'> - </button></div><p id='b2'></p></p>
        <div id='collapsebleThree' class='accordion-collapse collapse collapse show' aria-labelledby='headingTwo'>
        <form action="#" id='subdeviceModal${SUB_DEVICE_COUNT}'>
        <div  class='accordion-body'>
        <div class='container'>
        <div class='row mt-3'>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteDeviceName${SUB_DEVICE_COUNT}'>Device Name<span style="color:red" class="required">*</span></label>
        <select class='form-control device' id='inviteDeviceName${SUB_DEVICE_COUNT}' onChange='updateSubDeviceHeader(this.id,this.value)'>
        <option>Select Device</option>
        ${deviceOptions}
        </select>
        </div>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteMacDesc${SUB_DEVICE_COUNT}'>Description</label>
        <input type='text' class='form-control'   id='inviteMacDesc${SUB_DEVICE_COUNT}' minlength="2" maxlength="32" placeholder='Description'></div>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteKitVerify${SUB_DEVICE_COUNT}'>Kit Verification Date</label>
        <input type='date' class='form-control'  id='inviteKitVerify${SUB_DEVICE_COUNT}' placeholder='Created at'></div></div>
        <div class='row mt-3'>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteSerialNo${SUB_DEVICE_COUNT}'>Device serial No<span style="color:red" class="required">*</span></label>
        <input type='text' class='form-control' minlength="6" maxlength="12" id='inviteSerialNo${SUB_DEVICE_COUNT}' placeholder='Device Serial No'></div><div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteWarranty${SUB_DEVICE_COUNT}'>Warranty<span style="color:red" class="required">*</span></label>
        <select id='inviteWarranty${SUB_DEVICE_COUNT}' class='form-control'><option>Select The Month</option>
        ${warrantyOption}
        </select></div>


       </div></div></div></form></div></div></div></div></div>`
    );
}

function addSubDeviceToUpdateForm(subDeviceObj = []) {

    console.log('-------subDeviceObj----', subDeviceObj);

    deviceCount = 123;

    let subDeviceHtmlList = subDeviceObj.map((device) => {

        let deviceStatusOptions = PRODUCT_STATUS_MASTER.map((prodStatusObj, index) => {
            console.log('productDropdownList---> ',prodStatusObj)
            //if ('subDeviceMaster' in device && 'prodStatusObj' in device.subDeviceMaster && prodStatusObj === device.subDeviceMaster.prodStatusObj) return "<option selected value=" + device.productStatus.id + " >" + prodStatusObj + "</option>";
            if ('productStatus' in device && 'deviceStatus' in device.productStatus && device.productStatus.deviceStatus === prodStatusObj.deviceStatus) return "<option selected value=" + prodStatusObj.deviceStatus + " >" + prodStatusObj.deviceStatus + "</option>";
            return "<option value=" + prodStatusObj.deviceStatus + " >" + prodStatusObj.deviceStatus + "</option>";
        });
        let productDropdownList = SUB_DEVICE_MASTER && SUB_DEVICE_MASTER.map((subDevObj) => {
            console.log('deviceStatusOptions---> ',subDevObj)
            //if ('productStatus' in device && 'deviceStatus' in device.productStatus && device.productStatus.deviceStatus === subDevObj.name) return "<option selected value=" + subDevObj.name + " >" + subDevObj.name + "</option>";
            if ('subDeviceMaster' in device && 'name' in device.subDeviceMaster && subDevObj.name === device.subDeviceMaster.name) return "<option selected value=" + device.productStatus.id + " >" + name + "</option>";
            return "<option value=" + subDevObj.name + " >" + subDevObj.name + "</option>";
        });

        let warrantyOption = WARRANTY_PERIOD.map((period) => {
            if (device.warranty === name) return `<option selected value=${period} >${period}</option>`;
            return `<option>${period}</option>`;
        });
        return `<div id="appenddvc"><div class='accordion' id='accordionExamplee${123 + 1}'>
        <div id='deleteAddSubDevice${123}' class='card accordion-item bg-default'>
        <p class='accordion-header' id='headingTwo'>
        <div  class='row'>
        <div  class='col-xs-11 col-sm-11 col-lg-11'><input type='button' value='Device ${123} &#xf107;' id='accordionbuttonn${123}'
        class='collapsed card-link btn info' style='height: 45px; background-color: rgba(255, 152, 217, 0.87); width: 100%; font-weight: bolder;'  data-toggle='collapse' data-target='#collapsebleThree' aria-expanded='true' aria-controls='collapsebleThree'></div>
       <button class='btn btn-primary remove-tr' id='btnDelete${123}' type='button' style='width: 45px;' onClick='decrementAddSubDev(this.id)'> - </button></div><p id='b2'></p></p>
        <div id='collapsebleThree' class='accordion-collapse collapse collapse show' aria-labelledby='headingTwo'>
        <form id='updatesubdeviceModal${123}'>
        <div  class='accordion-body'>
        <div class='container'>
        <div class='row mt-3'>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteDeviceName${123}'>Device Name</label>
        <select class='form-control device' id='inviteDeviceName${123}' onChange='updateSubDeviceHeader(this.id,this.value)'>
        <option>Select Device</option>
        ${productDropdownList}
        </select>
        </div>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteMacDesc${123}'>Description</label><input type='text' class='form-control' id='inviteMacDesc${123}' placeholder='Description'>
        </div>
        </div>
        <div class='row mt-3'>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteSerialNo${123}'>Device serial No</label>
        <input type='text' class='form-control'  id='inviteSerialNo${123}' placeholder='Device Serial No'></div>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteWarranty${123}'>Warranty</label>
        <select id='inviteWarranty${123}' class='form-control'><option>Select The Month</option>
        ${warrantyOption}
        </select></div>
        <div class='col-xs-12 col-sm-6 col-lg-4'>
        <label for='inviteStatus${123}'>Sub Device Status</label>
        <select id='inviteStatus${123}' class='form-control'><option>Select The Status</option>
        ${deviceStatusOptions}
        </select></div>
       </div></div></div></form></div></div></div></div></div>`
    })
    $("#updatesubdvcappend").append(subDeviceHtmlList);
}

function incrementAddSubDev() {
    SUB_DEVICE_COUNT = SUB_DEVICE_COUNT + 1;
    //j = SUB_DEVICE_COUNT;

}

function decrementAddSubDev(clicked_id) {
    var last = clicked_id.slice(-1);
    $(`#deleteAddSubDevice${last}`).remove();
    SUB_DEVICE_COUNT--;
}

//function updateSubDeviceHeader(name, id, value) {
//    var last = id.slice(-1);
//    $(`#accordionbuttonn${last}`).val(name);
//}



let macFormat = "^[0-9a-f]{2}([-:]?)[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$"

function saveProduct() {
console.log("Sub devices",SUB_DEVICE_MASTER);
let subDevicesMaster = [];
for (subDevicesMaster of SUB_DEVICE_MASTER) {

}
let SUB_Device_Master = subDevicesMaster;
let macValue = $("#inviteMacAddress").val()
        console.log(macValue.charAt(2),macValue.charAt(5),macValue.charAt(8),macValue.charAt(11),macValue.charAt(14));
    if ($("#inviteProductName").val() === "" || $("#inviteProductName").val() === "Select Product") {
        // $("#errorClientMessage1").text("Empty name input field found!");
        // $('#errorClientMessage1').fadeIn("slow");
        toastr.error('Product name is mandatory!');
        return;
    }
    else if ($("#inviteSerialNumber").val() === "") {
        toastr.error('Product kit number is mandatory!');
        return;
    }
     else if ($("#inviteProductName").val() === "SAMVITA" && $("#inviteMacAddress").val() === "") {
            toastr.error('MacAddress is mandatory for Product SAMVITA!');
            return;
        }
        else if ($("#inviteProductName").val() === "SAMVITA" && macValue.length < 17){
        console.log(macValue.length);
        toastr.error('MacAddress should be valid!');
        return;
        }
         else if ($("#inviteProductName").val() === "SAMVITA" && macValue.charAt(2) != ":"){
         console.log(macValue.length);
         toastr.error('MacAddress is in the format of 77:99:L5:00:66:22');
         return;
         }
         else if ($("#inviteProductName").val() === "SAMVITA" && macValue.charAt(5) != ":"){
                  console.log(macValue.length);
                  toastr.error('MacAddress is in the format of 77:99:L5:00:66:22');
                  return;
                  }
         else if ($("#inviteProductName").val() === "SAMVITA" && macValue.charAt(8) != ":"){
             console.log(macValue.length);
             toastr.error('MacAddress is in the format of 77:99:L5:00:66:22');
             return;
             }
         else if ($("#inviteProductName").val() === "SAMVITA" && macValue.charAt(11) != ":"){
             console.log(macValue.length);
             toastr.error('MacAddress is in the format of 77:99:L5:00:66:22');
             return;
             }
         else if ($("#inviteProductName").val() === "SAMVITA" && macValue.charAt(14) != ":"){
             console.log(macValue.length);
             toastr.error('MacAddress is in the format of 77:99:L5:00:66:22');
             return;
             }
         else if ($("#licenseVersion").val() === "") {
        toastr.error('Product license version is mandatory!');
        return;
             }
        else if ($("#inviteProductWarranty").val() === "" || $("#inviteProductWarranty").val() === "Select The Month" ) {
        toastr.error('Product warranty is mandatory!');
        return;
        }

    var macvalue = $("#inviteMacAddress").val();
    var productname = $("#inviteProductName").val();

    let productStatusId = {
    id : 5
    };

    //SAVE product Api
    let productData = {
        description: $("#inviteDescription1").val(),
        isOperational: false,
        productName: $("#inviteProductName").val(),
        productSerialNo: $("#inviteSerialNumber").val(),
        version: $("#licenseVersion").val(),
        macAddress: $("#inviteMacAddress").val(),
        subscriptionPlan: $("#licenseDuration").val(),
        warranty: $("#inviteProductWarranty").val(),
        productStatusId: productStatusId
    };
    let subProducts = [], tempSubDevCount = SUB_DEVICE_COUNT;
    //console.log("Sub devices------",$(`#inviteDeviceName${tempSubDevCount}`).val());
    var SubDeviceId = [];
    SubDeviceId = $(`#inviteDeviceName${tempSubDevCount}`).val();
     console.log("Sub devices Id",SubDeviceId);
//    var Diveces = $(`#inviteDeviceName${tempSubDevCount}`).val()
//    Diveces.each(function() {
//    SubDeviceId.push(($(this).val()));
//    });





    //var iNum = parseInt(SubDeviceId);
    while (tempSubDevCount > 0) {
        if ($.trim($(`#inviteDeviceName${tempSubDevCount}`).val()) === "") {
            toastr.error('Please Fill All The Fields');
            return false;
        } else if ($.trim($(`#inviteSerialNo${tempSubDevCount}`).val()) === "") {
            toastr.error('Please Fill All The Fields');
            return false;
        } else if ($.trim($(`#inviteWarranty${tempSubDevCount}`).val()) === "") {
            toastr.error('Please Fill All The Fields');
            return false;
        }
        subProducts.push({
            deviceSerialNo: $(`#inviteSerialNo${tempSubDevCount}`).val(),
            description: $(`#inviteMacDesc${tempSubDevCount}`).val(),
            warranty: $(`#inviteWarranty${tempSubDevCount}`).val(),
            deviceId: Number($(`#inviteDeviceName${tempSubDevCount}`).val()),//Number(SubDeviceId),//tempSubDevCount,//SUB_Device_Master.id
        });
        tempSubDevCount--;
    }
    console.log("Sub device id", Number(SubDeviceId))
    var savedata = JSON.stringify({ productData, subProducts });
    console.log("savedata: ",savedata);

    //   //API CALL

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: CONF_SERVER_PATH + "/saveProductAndSubProduct",
        data: savedata,
        dataType: "json",
        headers: { Authorization: "Bearer " + JWT_TOKEN },
        success: function (result) {
            //console.log("inviteClient-->2: ", result);
            if (result.error == false) {
                $("#addProductButton").attr("disable", "true");
                SUB_DEVICE_COUNT = 0;
//                toastr.success("Added successfully");
                toastr.options.onHidden = function(){

                    window.location.reload();
                }
                toastr.success('Added successfully');

            } else if (result.error == true) {
                toastr.error("Please fill mandatory fields");
            }
            //location.reload();
        },
        error: function (xhr, status, error) {
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './login';
                    })()
                } else {
                toastr.error(xhr.responseJSON.message);
                }
            } else {
                toastr.error("Internet Disconnected/Server error");
            }
        }
    });
}

function updateProduct(updateObj) {
    console.log("UpdateProductModal->start: ", updateObj);
    console.log(updateObj);
    let kitSerialNo = updateObj.serialNo;

    productname = updateObj.productMaster.productName;

    $("#update-product-modal").modal("show");

    let dropversion;
    //GET API CALL
    $.ajax({
        type: "GET",
        url: CONF_SERVER_PATH + "/getProductAndSubDevices?kitId=" +
            kitSerialNo,
        headers: { Authorization: "Bearer " + JWT_TOKEN },
        success: function (result) {

            if (result.code === 200 && 'content' in result) {
                let { subDevices, productDetails } = result.content;

                //Update Product accordin
                let { version, subscriptionPlan } = productDetails;
                getProduct("update", { name: productname, id: updateObj.productMaster.id });
                $("#updateSerialNumber").val(kitSerialNo);
                let productVersionDropdown = LICENSE_VERSION.map((name, index) => {
                    if (name === version) return "<option selected value=" + index + " >" + name + "</option>";
                    else return "<option value=" + index + " >" + name + "</option>";
                });
                $("#updatelicenseVersion").html(productVersionDropdown);

                loadProductStatusDropdown();
                // console.log('----subscriptionPlan:1- ',subscriptionPlan, !subscriptionPlan);
                if (subscriptionPlan) {
                    let element = document.getElementById('updatelsd');
                    if (subscriptionPlan.toLowerCase().includes('day')) {
                        element.value = 'Days';
                        loadLicensePeriod(element, document.getElementById('updatelsd2'));
                        document.getElementById('updatelsd2').value = subscriptionPlan;
                    }
                    if (subscriptionPlan.toLowerCase().includes('month')) {
                        element.value = 'Month';
                        loadLicensePeriod(element, document.getElementById('updatelsd2'));
                        document.getElementById('updatelsd2').value = subscriptionPlan;
                    }
                    if (subscriptionPlan.toLowerCase().includes('year')) {
                        // console.log('----subscriptionPlan: ',subscriptionPlan, subscriptionPlan.toLowerCase(), subscriptionPlan.toLowerCase());
                        element.value = 'Year';
                        loadLicensePeriod(element, document.getElementById('updatelsd2'));
                        document.getElementById('updatelsd2').value = subscriptionPlan;
                    }
                }
                //Update Sub-devices accordins
                console.log('-------subDevices----', subDevices);
                addSubDeviceToUpdateForm(subDevices);
            } else {
                toastr.error(result.message);
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
}



function getProductStatusMaster() {

    if (PRODUCT_STATUS_MASTER.length > 0) {
        addSubDeviceToForm();
    } else {
        $.ajax({
            type: "GET",
            url: CONF_SERVER_PATH + `/getProductStatus`,
            headers: { Authorization: "Bearer " + JWT_TOKEN },
            success: function (result) {
                if (result.code === 200) {
                    console.log("appendSubDevice-->1: ", result);
                    PRODUCT_STATUS_MASTER = result?.content?.productStatus;
                    //addSubDeviceToForm();
                } else {
                    toastr.error(result.message);
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
            },
        });
    }
}

function loadProductStatusDropdown(type, select) {
    // if (type === "invite") {
    //     let productDropdownList = PRODUCT_STATUS_MASTER.map((name, index) => {
    //         return "<option value=" + index + " >" + name + "</option>";
    //     });
    //     $("#updateProductName").html(productDropdownList);
    // } else
    if (type === "update") {
        let productDropdownList = PRODUCT_STATUS_MASTER.map((name, index) => {
            if (select.name === name) return "<option selected value=" + index + " >" + name + "</option>";
            else return "<option value=" + index + " >" + name + "</option>";
        });
        $("#updateProductNameName").html(productDropdownList);
    }
}

function getProduct(productmode, select) {
    if (productmode === "invite") {
        let productDropdownList = PRODUCT_NAMES.map((name, index) => {
            return "<option value=" + index + " >" + name + "</option>";
        });
        $("#updateProductName").html(productDropdownList);
    } else if (productmode === "update") {
        let productDropdownList = PRODUCT_NAMES.map((name, index) => {
            if (select.name === name) return "<option selected value=" + index + " >" + name + "</option>";
            else return "<option value=" + index + " >" + name + "</option>";
        });
        $("#updateProductName").html(productDropdownList);
    }
}

function loadLicensePeriod(lsd1, lsd2) {

    switch (lsd1.value) {
        case "Year":
            lsd2.options.length = 0;
            for (i = 0; i < YEARS_MASTER.length; i++) {
                createLicensePeriodOption(lsd2, YEARS_MASTER[i], YEARS_MASTER[i]);
            }
            break;
        case "Month":
            lsd2.options.length = 0;
            for (i = 0; i < MONTHS_MASTER.length; i++) {
                createLicensePeriodOption(lsd2, MONTHS_MASTER[i], MONTHS_MASTER[i]);
            }
            break;
        case "Days":
            lsd2.options.length = 0;
            for (i = 0; i < DAYS_MASTER.length; i++) {
                createLicensePeriodOption(lsd2, DAYS_MASTER[i], DAYS_MASTER[i]);
            }
            break;
        default:
            lsd2.options.length = 0;
            break;
    }
}

function createLicensePeriodOption(lsd, text, value) {
    var opt = document.createElement("option");
    opt.value = value;
    opt.text = text;
    lsd.options.add(opt);
}

function viewSubDevices(deviceObj) {
  console.log(deviceObj);
  $("#productDetails-modal").modal("show");

  // API CALL fetch devices

  serialNo = deviceObj.serialNo;
  //console.log("serialnumber", serialNo);
  let kitId = serialNo;
//  if (ROLE === "Client Admin") {
//    serialNo = SERIAL_NO;
//  } else {
//    serialNo = deviceObj.serialNo.id;
//  }
  $("#collapseFour").html("");
  $("#collapseFour").removeClass("show");

  $.ajax({
    type: "GET",
    url: CONF_SERVER_PATH + "/getProductAndSubDevices?kitId=" +
      kitId,
    headers: { Authorization: "Bearer " + JWT_TOKEN },
    success: function (result) {
      console.log("viewSubDevices-RESP: ", result);
      if (result.error == true) {
        //ToDo: Remove alert message
        $("#subProductTitle").html(
          "Sub Devices <span class='float-right badge bg-info'>0</span>"
        );

        $("#collapseFour").removeClass("show");
      } else {
        let { content, message, error } = result;

        $("#subProductTitl").html(
          "Sub Devices <span class='float-right badge bg-info'>0</span>"
        );

        if (content.subDevices != "") {
          $("#subProductTitle").html(
            "Sub Devices <span class='float-right badge bg-info'>" +
              content.subDevices.length +
              "</span>"
          );


          let devicename = content.subDevices;
          console.log(devicename);
          let subdeviceList = "";

          subdeviceList+=
            "<table class=table>" + "<tr>" + "<th class=thead-primary>" + "Device Name" + "</th>" + "<th>" + "Status" + "</th>" + "<th>" + "Serial No" + "</th>" + "<th>" +"Description" + "</th>" + "<th>" + "Warranty" + "</th>" + "</tr>"
            for (tempsubDevice of devicename) {
              subdeviceList+=
            "<tr>" + "<td>" + tempsubDevice.subDeviceMaster.name + "</td>" +
              "<td>" + tempsubDevice.productStatus.deviceStatus +  "</td>" +
              "<td>" + tempsubDevice.deviceSerialNumber + "</td>" +
              "<td>" + tempsubDevice.description +  "</td>" +
              "<td>" + tempsubDevice.warranty + "</td>" +

              "</tr>"

           }"</table>"

          $("#collapseFour").html(subdeviceList);
        } else {
          $("#collapseFour").removeClass("show");
        }
      }
    },
    error: function (xhr, status, error) {
      ////console.log('viewProductDetails->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
      console.log("viewSubDevices-RESP-ERROR: ", error);
        if (error === true) {
        $("#subProductTitle").html(
          "Sub Devices <span class='float-right badge bg-info'>0</span>"
        );
        $("#collapseFour").removeClass("show");
      }
      if (
        xhr.hasOwnProperty("responseJSON") &&
        xhr.responseJSON.hasOwnProperty("message")
      ) {
        //$("#errorMessage").text(xhr.responseJSON.message);
      } else {
        //$("#errorMessage").text("Server error");
      }
    },
  });
}

function renew(data) {
  console.log(data);
  $("#renew-modal").modal("show");
  console.log(data.serialNo);
  $("#renewalKitNo").val(data.serialNo);
  console.log(data.licenseExpiryDate);
  $("#renewalDate").val(data.licenseExpiryDate);

}
function renewApi() {
  let Expdate = $("#renewalDate").val();
  const date = new Date(Expdate);
  console.log(date);
  const timestamp = Date.parse(date);
  console.log(timestamp);

  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: CONF_SERVER_PATH + "/getRenewedLicense",
    data: JSON.stringify({
      kitSerialNumbers: [$("#renewalKitNo").val()],
      licenseExpiryDate: timestamp,
      reasonDescription: $("#reasonDescription").val(),
      subscriptionType: $("#subscriptionType2").val(),
      paymentDetails: $("#paymentDetails").val(),
    }),
    dataType: "json",
    headers: { Authorization: "Bearer " + JWT_TOKEN },
    success: function (result) {
      console.log("Renewal-->1: ", result);
      if (result.error == false) {
        alert(result.message);
      }
      location.reload();
    },
  });
}
//
//if (performance.navigation.type == 2) {
//
//let text = "Back button clicked";
//if (confirm(text) == true){
//
//            localStorage.removeItem("JWT_TOKEN");
//          	localStorage.removeItem("ROLE");
//          	localStorage.removeItem("CLIENT_ID");
//            localStorage.removeItem("ORG_NAME");
//          	localStorage.removeItem("FULL_NAME");
//          	localStorage.removeItem("PACKAGES");
//          	localStorage.removeItem("APPOINTMENTS");
//          	localStorage.removeItem("USER_ID");
//    }else {
//
//            loadProductTable();
//          }
//
// }
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