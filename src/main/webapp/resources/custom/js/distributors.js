var JWT_TOKEN = "";
var ROLE = "";
var FULL_NAME = "";
var ORG_NAME = "";
const DEF_DELAY = 1000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

$(document).ready(function () {

    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    ROLE = localStorage.getItem("ROLE");
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");


    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    }
    loadDistributorsTable();

    $(".hide-admin-unauth").css("display", "none");

    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);
//    $.fn.dataTable.moment('MM/DD/YYYY');
//    $('#distributor-Table').DataTable();
})

function loadDistributorsTable() {

    $('#distributor-Table').hide();
    $("#distributor-table-error").hide();
    $("#distributor-table-spinner").show();
    $('#distributor-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });
    //API CALL

    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getDistributorTable?size=" + CONF_MAX_LIMIT + "&sort=lastUpdated,DESC",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            $("#distributor-table-spinner").hide();

            // console.log('success: ', result);
            if (result.error == true) {
                $("#distributor-table-error").show();
                $('#distributor-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#distributor-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('Distributor')) {
                    toastr.error('Distributor field not exist');
                }
                let { content, message, error } = result;

                //console.log("JWT_TOKEN-->", JWT_TOKEN);
                $('#distributor-Table').show();

                $('#distributor-Table').DataTable({
                    data: content.Distributor.distributorList,
                    columns: [
                        {
                            data: 'distributorName'
                        },
                        {
                            data: 'id'
                        },
                        {
                            data: 'contactPerson'
                        },
                        {
                            data: 'contactNo'
                        },
                        {
                            data: 'gstn'
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
                                return row.status === true ? 'Active' : 'Inactive'
                            }
                        },
                        {
                            data: null,
                            render: function (data, type, row, meta) {
                                return row.lastUpdated? new Date(row.lastUpdated).toLocaleDateString(): '-';
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
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update User</button>' +
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'deleteUserModal('+ JSON.stringify(row) + ');\'>Delete User</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateDistributor('+ JSON.stringify(row) + ');\'>Update</button>' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'deleteDistributor('+ JSON.stringify(row) + ');\'>Delete</button>';

                                    '</div></div>'
                                return menuItem;
                            }
                        }
                    ],

                    "order": [[6, "desc"]],
                    "columnDefs": [{ "type": "date", "targets": 6 }]
                });
            }
        },
        error: function (xhr, status, error) {
            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#distributor-table-spinner").hide();
            $("#distributor-table-error").show();
            $('#distributor-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = './login';
                    })()
                }
                $("#distributor-table-error").text(xhr.responseJSON.message);
            } else {
                $("#distributor-table-error").text("No Data Found!");
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

function addDistributor() {
    console.log("Inside inviteDistributor");
    let jsonData;
    let distributorPhone = $("#inviteDistributorPhone").val();
    let distributorMail = $("#inviteDistributorEmail").val();
    let formGstn = $("#inviteDistributorgstn").val();
    let formName = $("#inviteDistributorName").val();
    let clientADD1 = $("#inviteDistributorAddLine1").val();
    let distAdd2 = $("#inviteDistributorAddLine2").val();
    let formDistCity = $("#inviteDistributorCity").val();
    let formDistState = $("#inviteDistributorState").val();
    let formContactPerson = $("#inviteDistributorcontactPerson").val();
    console.log(distributorPhone.length);

    let distributorPincode = $("#inviteDistributorPinCode").val();
    console.log(distributorPhone,distributorPincode.length);
    if ($("#inviteDistributorName").val() == "") {
        toastr.error('Empty name input field found!')
        return;
    }
    if (formName.length < 2) {
            toastr.error('Enter Valid Name!')
            return;
        }
    else if ($("#inviteDistributorPhone").val() == "") {
        toastr.error('Empty phone number field found!')
        return;
    }
    else if (distributorPhone.length < 10) {
        toastr.error('Phone number should valid!')
        return;
        }

    else if ($("#inviteDistributorEmail").val() == "") {
        toastr.error('Empty email field found!')
        return;
    }
    else if (IsEmail(distributorMail)==false) {
        toastr.error('invalid email found!')
        return;
    }
    else if ($("#inviteDistributorAddLine1").val() == "") {
        toastr.error('Empty address line 1 field found!')
        return;
    }
     else if (clientADD1.length < 2) {
            toastr.error('Please enter valid address!')
            return;
        }
         else if (distAdd2.length == 1 && distAdd2.length < 2) {
                    toastr.error('Please enter valid address Line 2!')
                    return;
                }
    else if ($("#inviteDistributorCity").val() == "") {
        toastr.error('Empty city field found!')
        return;
    }
    else if (formDistCity.length < 2) {
        toastr.error('Enter valid City Name!')
        return;
    }
    else if ($("#inviteDistributorState").val() == "") {
        toastr.error('Empty state field found!')
        return;
    }
    else if (formDistState.length < 2) {
            toastr.error('Enter valid state!')
            return;
        }
    else if ($("#inviteDistributorPinCode").val() == "") {
        toastr.error('Empty pin code field found!')
        return;
    }
    else if (distributorPincode.length < 6) {
        toastr.error('Pin code should be valid!')
        return;
    }
    else if ($("#inviteDistributorcontactPerson").val() == "") {
        toastr.error('Empty contact person field found!')
        return;
    }
     else if (formContactPerson.length < 2) {
            toastr.error('Enter valid contact person Name or Contact Number!')
            return;
        }
    else if ($("#inviteDistributorgstn").val() == "") {
        toastr.error('Empty gstn field found!')
        return;
    }
    else if (formGstn.length < 15) {
            toastr.error('GSTN Should be 15 Alpha numeric!')
            return;
        }

    let formData = {
        "distributorName": $("#inviteDistributorName").val(),
        "contactNo": $("#inviteDistributorPhone").val(),
        "distributorEmail": $("#inviteDistributorEmail").val(),
        "address_line_1": $("#inviteDistributorAddLine1").val(),
        "address_city": $("#inviteDistributorCity").val(),
        "address_state": $("#inviteDistributorState").val(),
        "pincode": $("#inviteDistributorPinCode").val(),
        "contactPerson": $("#inviteDistributorcontactPerson").val(),
        "gstn": $("#inviteDistributorgstn").val()
    }

    console.log("inviteDistributor-->2: ", formData);
    if ($("#inviteDistributorAddLine2").val() !== "") {
        formData = Object.assign(formData, { "address_line_2": $("#inviteDistributorAddLine2").val() });
    }

    jsonData = JSON.stringify(formData);
    console.log('ADD DISTR: ', jsonData);
    $('#addDistributorButton').prop('disabled', true);
    $('#addDistrSpinner').show();


    //API CALL
    $.ajax({
        type: 'POST',
        data: jsonData,
        contentType: "application/json",
        url: CONF_SERVER_PATH + "/addDistributor",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            $('#addDistributorButton').prop('disabled', false);
            $('#addDistrSpinner').show();
            // console.log("inviteDistributor-->2: ", result);

            if (result.error === false) {
                $("#inviteDistributorName").val('');
                $("#inviteDistributorPhone").val('');
                $("#inviteDistributorEmail").val('');
                $("#inviteDistributorAddLine1").val('');
                $("#inviteDistributorCity").val('');
                $("#inviteDistributorState").val('');
                $("#inviteDistributorPinCode").val('');
                $("#inviteDistributorAddLine2").val('');
                $("#inviteDistributorcontactPerson").val('');
                $("#inviteDistributorgstn").val('');
                $('#add-distributor-modal').modal('hide');
                $('#addDistrSpinner').hide();
                (async () => {
                    toastr.success(result.message);
                    await sleep();
                    location.reload();
                })()
            } else {
                toastr.error(result.message);
            }
        },
        error: function (xhr, status, error) {
            $('#addDistributorButton').prop('disabled', false);
            $('#addDistrSpinner').hide();
//            console.log("inviteDistributor-->3 : ", error);
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
            } else {
                toastr.error('Failed add Distributor.Internet Disconnected/Server error');
            }
        }
    });
}

//UPDATE DISTRIBUTOR FORM

function updateDistributor(distributor) {
$("#update-distributor-modal").modal('show');
console.log("update distributor modal", distributor)
        $('#updatedistributortName').val(distributor.distributorName);
        $('#updatedistributorPhone').val(distributor.contactNo);
        $('#updatedistributorEmail').val(distributor.emailId);
        $('#updatedistributorAddLine1').val(distributor.addressLine1);
        $('#updatedistributorAddLine2').val(distributor.addressLine2);
        $('#updatedistributorCity').val(distributor.city);
        $('#updatedistributorState').val(distributor.state);
        $('#updatedistributorPinCode').val(distributor.pinCode);
        $('#updatedistributorcontactPerson').val(distributor.contactPerson);
        $('#updatedistributorgstn').val(distributor.gstn);

        $('#updateDistributorButton').unbind().click(function () {



    });
}


//DELETE DISTRIBUTOR

function deleteDistributor(distributor) {
$("#delete-Distributor-modal").modal('show');

        $('#deleteDistributor').unbind().click(function () {

    });
}