var JWT_TOKEN = "", ROLE = "", CLIENT_ID = "";
var FULL_NAME = "";
var ORG_NAME = "";
var PACKAGES="";
var APPOINTMENTS="";
var USER_ID="";
const DEF_DELAY = 1000;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

$(document).ready(function () {
    JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
    CLIENT_ID = localStorage.getItem("CLIENT_ID");
//    console.log("CLIENT ID", CLIENT_ID)
    ROLE = localStorage.getItem("ROLE");
    USER_ID = localStorage.getItem("USER_ID");
//    console.log("role ID", ROLE);
    ORG_NAME = localStorage.getItem("ORG_NAME");
    FULL_NAME = localStorage.getItem("FULL_NAME");
    PACKAGES = localStorage.getItem("PACKAGES");
    APPOINTMENTS = localStorage.getItem("APPOINTMENTS");
    if (ROLE !== "Wrizto Super Admin" && ROLE !== "Wrizto Admin" && ROLE !== "Client Admin" || JWT_TOKEN.length === 0) {
        var url = "./login";
        window.location.href = url;
        return;
    }
    else if (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") {
        loadUserTable();
        $(".hide-admin-unauth").css("display", "none");
    }
    else if (ROLE === "Client Admin") {
        loadUserTable();
        $(".hide-unauth").css("display", "none");

    }
     if (PACKAGES === "false")
        {
                $('#managePackagesUser').hide();
                $('#patientManagementUser').hide();
                $('#packageManagementUser').hide();
        }

        if (APPOINTMENTS === "false") {
                 $('#manageAppointmentsUser').hide();
        }
    let portalDetails = "<h5>" + FULL_NAME + "</h5>";
    // portalDetails += "<p>"+ORG_NAME+"</p>";
    portalDetails += "<p style='margin: 0px;font-size: 12px;font-weight: 600;color: gold;'>" + ROLE + "</p>";

    $(".portal-user-name").html(portalDetails);
})

let pristine1, pristine2;
let inviteValid;
let updateValid;
window.onload = function () {

    var form1 = document.getElementById("invite");
    var form2 = document.getElementById("update");

    //pristine1 = new Pristine(form1);
    //pristine2 = new Pristine(form2);

    //     $('#inviteBtn').unbind().click(function () {
    //         inviteValid = pristine1.validate();
    //     });

    //     $('#updateBtn').unbind().click(function () {
    //         updateValid = pristine2.validate();
    //     });

};

let SUB_TIME_COUNT = 0;
function incrementTime() {
    SUB_TIME_COUNT = SUB_TIME_COUNT + 1;
    console.log(SUB_TIME_COUNT);
 }
function addInput(){
     $('#leavesAppend').append(`<div class="row mt-3" id="appendLeave">`+
            `<div class="col-xs-12 col-sm-6 col-lg-6"><input type="text" onfocus="(this.type='date')" onblur="(this.type='text')"  class="form-control" placeholder="From" name="options" id="option1" >` +
            `</div> <div class="col-xs-12 col-sm-6 col-lg-6"><input type="text" class="form-control" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="To" name="options" id="option1" ></div>` +
            `<div class="col-xs-12 col-sm-6 col-lg-6"></div></div>`);
            //container.appendChild(input);
        }
        function removeInput() {
           $('#appendLeave').remove();
        }


        function addTimeInput1() {

            $('#timeInput1').append(`<div class='row mt-3' id='timeAppend1'><div class='col-xs-12 col-sm-6 col-lg-2'></div>
            <div class='col-xs-12 col-sm-6 col-lg-3'>
            <input type='time' id='fromTimeOption${SUB_TIME_COUNT}' class='form-control' placeholder='From' name='fromoptions${SUB_TIME_COUNT}'  >
            </div>
            <div class='col-xs-12 col-sm-6 col-lg-3'>
            <input type='time' id='toTimeOption${SUB_TIME_COUNT}' class='form-control' placeholder='To' name='toOptions${SUB_TIME_COUNT}' >
            </div></div>`);
        }
        function removeTimeInput1() {
            $('#timeAppend1').remove();
            SUB_TIME_COUNT--;
        }

         function appendSunTime(){
                incrementTime()
                addTimeInput1();
                $('#fromTimeOption').attr('id', 'fromTimeOption' + SUB_TIME_COUNT);
                $('#toTimeOption').attr('id', 'toTimeOption' + SUB_TIME_COUNT);
          }

     let MON_TIME_COUNT = 0;
     function incrementMonTime() {
         MON_TIME_COUNT = MON_TIME_COUNT + 1;
         console.log(MON_TIME_COUNT);
      }

        function addTimeInput2() {
            $('#timeInput2').append(`<div class="row mt-3" id="timeAppend2"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromMonOption${MON_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toMonOption${MON_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput2() {
            $('#timeAppend2').remove();
            MON_TIME_COUNT--;
        }

        function appendMonTime(){
                        incrementMonTime();
                        addTimeInput2();
                        $('#fromMonOption').attr('id', 'fromMonOption' + MON_TIME_COUNT);
                        $('#toMonOption').attr('id', 'toMonOption' + MON_TIME_COUNT);
                  }
     let TUE_TIME_COUNT = 0;
          function incrementTueTime() {
              TUE_TIME_COUNT = TUE_TIME_COUNT + 1;
              console.log(TUE_TIME_COUNT);
           }

        function addTimeInput3() {
            $('#timeInput3').append(`<div class="row mt-3" id="timeAppend3"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromTueOption${TUE_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toTueOption${TUE_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput3() {
            $('#timeAppend3').remove();
            TUE_TIME_COUNT--;
        }

        function appendTueTime(){
                                incrementTueTime();
                                addTimeInput3();
                                $('#fromTueOption').attr('id', 'fromTueOption' + TUE_TIME_COUNT);
                                $('#toTueOption').attr('id', 'toTueOption' + TUE_TIME_COUNT);
                          }

         let WED_TIME_COUNT = 0;
         function incrementWedTime() {
           WED_TIME_COUNT = WED_TIME_COUNT + 1;
           console.log(WED_TIME_COUNT);
        }
        function addTimeInput4() {
            $('#timeInput4').append(`<div class="row mt-3" id="timeAppend4"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromWedOption${WED_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toWedOption${WED_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput4() {
            $('#timeAppend4').remove();
        }

      function appendWedTime(){
                 incrementWedTime();
                 addTimeInput4();
                 $('#fromWedOption').attr('id', 'fromWedOption' + WED_TIME_COUNT);
                 $('#toWedOption').attr('id', 'toWedOption' +WED_TIME_COUNT);
             }


        let THU_TIME_COUNT = 0;
                 function incrementThuTime() {
                   THU_TIME_COUNT = THU_TIME_COUNT + 1;
                   console.log(THU_TIME_COUNT);
                }
        function addTimeInput5() {
            $('#timeInput5').append(`<div class="row mt-3" id="timeAppend5"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromThuOption${THU_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toThuOption${THU_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput5() {
            $('#timeAppend5').remove();
            THU_TIME_COUNT--;
        }

        function appendThuTime(){
                   incrementThuTime();
                   addTimeInput5();
                   $('#fromThuOption').attr('id', 'fromThuOption' + THU_TIME_COUNT);
                   $('#toThuOption').attr('id', 'toThuOption' + THU_TIME_COUNT);
               }

        let FRI_TIME_COUNT = 0;
           function incrementFriTime() {
           FRI_TIME_COUNT = FRI_TIME_COUNT + 1;
           console.log(FRI_TIME_COUNT);
       }
        function addTimeInput6() {
            $('#timeInput6').append(`<div class="row mt-3" id="timeAppend6"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromFriOption${FRI_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toFriOption${FRI_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput6() {
            $('#timeAppend6').remove();
            FRI_TIME_COUNT--;
        }

        function appendFriTime(){
                           incrementFriTime();
                           addTimeInput6();
                           $('#fromFriOption').attr('id', 'fromFriOption' + FRI_TIME_COUNT);
                           $('#toFriOption').attr('id', 'toFriOption' + FRI_TIME_COUNT);
                       }

        let SAT_TIME_COUNT = 0;
                   function incrementSatTime() {
                   SAT_TIME_COUNT = SAT_TIME_COUNT + 1;
                   console.log(SAT_TIME_COUNT);
               }
        function addTimeInput7() {
            $('#timeInput7').append(`<div class="row mt-3" id="timeAppend7"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="From" name="options" id="fromSatOption${SAT_TIME_COUNT}" >
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
            <input type="time" class="form-control" placeholder="To" name="options" id="toSatOption${SAT_TIME_COUNT}" >
            </div></div>`);
        }
        function removeTimeInput7() {
            $('#timeAppend7').remove();
            SAT_TIME_COUNT--;
        }
        function appendSatTime(){
           incrementSatTime();
           addTimeInput7();
           $('#fromSatOption').attr('id', 'fromSatOption' + SAT_TIME_COUNT);
           $('#toSatOption').attr('id', 'toSatOption' + SAT_TIME_COUNT);
        }

//UPDATE ROSTER MODAL

function updateaddInput(){
	$('#updateleavesAppend').append(`<div class="row mt-3" id="updateappendLeave">`+
		   `<div class="col-xs-12 col-sm-6 col-lg-6"><input type="text" onfocus="(this.type='date')" onblur="(this.type='text')"  class="form-control" placeholder="From" name="options" id="updateoption1" >` +
		   `</div> <div class="col-xs-12 col-sm-6 col-lg-6"><input type="text" class="form-control" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="To" name="options" id="updateoption1" ></div>` +
		   `<div class="col-xs-12 col-sm-6 col-lg-6"></div></div>`);
		   //container.appendChild(input);
	   }
	   function updateremoveInput() {
		   console.log("delete action");
		   $('#updateappendLeave').remove();
	   }

	   let UPDATE_TIME_COUNT = 0;
       function updateIncrementTime() {
           UPDATE_TIME_COUNT = UPDATE_TIME_COUNT + 1;
           console.log(UPDATE_TIME_COUNT);
        }

	   function updateaddTimeInput1() {
		   $('#updatetimeInput1').append(`<div class="row mt-3" id="updatetimeAppend1"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="updateFromOptions${UPDATE_TIME_COUNT}" id="Fromupdateoption1">
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="updateToOptions${UPDATE_TIME_COUNT}" id="Toupdateoption1" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput1() {
		   $('#updatetimeAppend1').remove();
		   UPDATE_TIME_COUNT--;
	   }
	   function updateAppendSunTime(){
                       updateIncrementTime()
                        updateaddTimeInput1();
                       $('#Fromupdateoption1').attr('id', 'Fromupdateoption1' + UPDATE_TIME_COUNT);
                       $('#Toupdateoption1').attr('id', 'Toupdateoption1' + UPDATE_TIME_COUNT);
                 }

      let UPDATE_MON_TIME_COUNT = 0;
             function updateIncrementTimeMon() {
                 UPDATE_MON_TIME_COUNT = UPDATE_MON_TIME_COUNT + 1;
                 console.log(UPDATE_MON_TIME_COUNT);
              }

	   function updateaddTimeInput2() {
		   $('#updatetimeInput2').append(`<div class="row mt-3" id="updatetimeAppend2"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption2" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption2" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput2() {
		   $('#updatetimeAppend2').remove();
		   UPDATE_MON_TIME_COUNT--;
	   }

	   function updateAppendMonTime(){
          updateIncrementTimeMon();
          updateaddTimeInput2();
          $('#Fromupdateoption2').attr('id', 'Fromupdateoption2' + UPDATE_MON_TIME_COUNT);
          $('#Toupdateoption2').attr('id', 'Toupdateoption2' + UPDATE_MON_TIME_COUNT);
       }
       let UPDATE_TUE_TIME_COUNT = 0;
                    function updateIncrementTimeTue() {
                        UPDATE_TUE_TIME_COUNT = UPDATE_TUE_TIME_COUNT + 1;
                        console.log(UPDATE_TUE_TIME_COUNT);
                     }

	   function updateaddTimeInput3() {
		   $('#updatetimeInput3').append(`<div class="row mt-3" id="updatetimeAppend3"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption3" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption3" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput3() {
		   $('#updatetimeAppend3').remove();
		   UPDATE_TUE_TIME_COUNT--;
	   }
        function updateAppendTueTime(){
          updateIncrementTimeTue();
          updateaddTimeInput3();
          $('#Fromupdateoption3').attr('id', 'Fromupdateoption3' + UPDATE_TUE_TIME_COUNT);
          $('#Toupdateoption3').attr('id', 'Toupdateoption3' + UPDATE_TUE_TIME_COUNT);
       }
       let UPDATE_WED_TIME_COUNT = 0;
                           function updateIncrementTimeWed() {
                               UPDATE_WED_TIME_COUNT = UPDATE_WED_TIME_COUNT + 1;
                               console.log(UPDATE_WED_TIME_COUNT);
                            }
	   function updateaddTimeInput4() {
		   $('#updatetimeInput4').append(`<div class="row mt-3" id="updatetimeAppend4"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption4" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption4" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput4() {
		   $('#updatetimeAppend4').remove();
		   UPDATE_WED_TIME_COUNT--;
	   }

	   function updateAppendWedTime(){
                 updateIncrementTimeWed();
                 updateaddTimeInput4();
                 $('#Fromupdateoption4').attr('id', 'Fromupdateoption4' + UPDATE_WED_TIME_COUNT);
                 $('#Toupdateoption4').attr('id', 'Toupdateoption4' + UPDATE_WED_TIME_COUNT);
              }
            let UPDATE_THU_TIME_COUNT = 0;
                           function updateIncrementTimeThu() {
                               UPDATE_THU_TIME_COUNT = UPDATE_THU_TIME_COUNT + 1;
                               console.log(UPDATE_THU_TIME_COUNT);
                            }
	   function updateaddTimeInput5() {
		   $('#updatetimeInput5').append(`<div class="row mt-3" id="updatetimeAppend5"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption5" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption5" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput5() {
		   $('#updatetimeAppend5').remove();
		   UPDATE_THU_TIME_COUNT--;
	   }
	   function updateAppendThuTime(){
                        updateIncrementTimeThu();
                        updateaddTimeInput5();
                        $('#Fromupdateoption5').attr('id', 'Fromupdateoption5' + UPDATE_THU_TIME_COUNT);
                        $('#Toupdateoption5').attr('id', 'Toupdateoption5' + UPDATE_THU_TIME_COUNT);
                     }
                let UPDATE_FRI_TIME_COUNT = 0;
                           function updateIncrementTimeFri() {
                               UPDATE_FRI_TIME_COUNT = UPDATE_FRI_TIME_COUNT + 1;
                               console.log(UPDATE_FRI_TIME_COUNT);
                            }
	   function updateaddTimeInput6() {
		   $('#updatetimeInput6').append(`<div class="row mt-3" id="updatetimeAppend6"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption6" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption6" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput6() {
		   $('#updatetimeAppend6').remove();
		   UPDATE_FRI_TIME_COUNT--;
	   }
        function updateAppendFriTime(){
                        updateIncrementTimeFri();
                        updateaddTimeInput6();
                        $('#Fromupdateoption6').attr('id', 'Fromupdateoption6' + UPDATE_FRI_TIME_COUNT);
                        $('#Toupdateoption6').attr('id', 'Toupdateoption6' + UPDATE_FRI_TIME_COUNT);
                     }
                let UPDATE_SAT_TIME_COUNT = 0;
                    function updateIncrementTimeSat() {
                         UPDATE_SAT_TIME_COUNT = UPDATE_SAT_TIME_COUNT + 1;
                               console.log(UPDATE_SAT_TIME_COUNT);
                            }
	   function updateaddTimeInput7() {
		   $('#updatetimeInput7').append(`<div class="row mt-3" id="updatetimeAppend7"><div class="col-xs-12 col-sm-6 col-lg-2"></div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="From" name="options" id="Fromupdateoption7" >
		   </div>
		   <div class="col-xs-12 col-sm-6 col-lg-3">
		   <input type="time" class="form-control" placeholder="To" name="options" id="Toupdateoption7" >
		   </div></div>`);
	   }
	   function updateremoveTimeInput7() {
		   $('#updatetimeAppend7').remove();
		   UPDATE_SAT_TIME_COUNT--;
	   }
function updateAppendSatTime(){
                        updateIncrementTimeSat();
                        updateaddTimeInput7();
                        $('#Fromupdateoption7').attr('id', 'Fromupdateoption7' + UPDATE_SAT_TIME_COUNT);
                        $('#Toupdateoption7').attr('id', 'Toupdateoption7' + UPDATE_SAT_TIME_COUNT);
                     }


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
            console.log(roles);
            if (mode === 'invite') {
                let roleDropdownList = "<option selected>Select Role</option>";
                for (let role of roles) {
                    if (ROLE === 'Wrizto Super Admin') {
                        if (role.name.includes("Client Admin") || role.name.includes("Wrizto Admin") || role.name.includes("Wrizto Super Admin"))
                            roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>"
                    } else if (ROLE === 'Client Admin') {
                        if (role.name.includes("Doctor") || role.name.includes("Nurse") || role.name.includes("Volunteer") || role.name.includes("Consumer"))
                            roleDropdownList += "<option value=" + role.id + " >" + role.name + "</option>"
                    }

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
            // console.log("getRoles-->3 : ", error);
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
            // console.log('error: ', error);
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

//EMAIL VALIDATION
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
function inviteUser(preload) {

    console.log($("#profilePicFile").val())
    console.log("Inside inviteuser: ", preload, ', TR: ', preload === true,$("#selectCurrency").val(),$("#roleSelector").val());
    console.log($("#inviteFormPhone").val());
    let formPhone = $("#inviteFormPhone").val();
    let formEmail = $("#inviteFormEmail").val();
    let formUserName = $("#inviteFormName").val();
    let hospitalAdd = $("#inviteHospetalAddress").val();
    let docQualification = $("#inviteQualification").val();
    let setUserName = $("#inviteFormUsername").val();
     let setPassword = $("#inviteFormPassword").val();
     let setEmployeeId = $("#inviteFormEmpId").val();
     let setDesignation = $("#inviteFormDesignation").val();
     let setQualification = $("#inviteFormQualification").val();
     let setTeamsID = $("#inviteTeams").val();
    let aboutDoc = $("#inviteAboutDoctor").val();
    console.log(formPhone.length);
    if (preload === true) {
        console.log('123: ');
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
        console.log('INV USER: ', $("#genderSelector").val(), 'cl: ', $("#clientSelector").val(), ', amount: ',$("#selectCurrency").val(),$("#roleSelector").val())
        $('#inviteBtn').unbind().click(function () {
            inviteValid = pristine1.validate();
        });
        if (inviteValid) {
            toastr.error("Please check all fields");
            return;
        }
        if ($("#inviteFormName").val() == "") {
            toastr.error('Empty name input field found!')
            return;
        }
        if ( formUserName.length < 2) {
           toastr.error('Provide valid Name!')
           return;
           }
        if ($("#inviteTeams").val() == "") {
           toastr.error('Empty Teams ID input field found!')
           return;
        }
         if ( setTeamsID.length < 2) {
           toastr.error('Teams ID should be greater than 2 characters!')
            return;
         }
        else if ($("#inviteFormPhone").val() == "") {
            toastr.error('Mobile number field is empty!')
            return;
        }
        else if (formPhone.length < 10) {
            toastr.error('Enter valid mobile number!')
            return;
        }

        else if ($("#inviteFormEmail").val() == "") {
            toastr.error('Empty email field found!')
            return;
        }
        else if (IsEmail(formEmail)==false) {
            toastr.error('invalid email found!')
            return;
        }
        else if ($("#genderSelector").val() == "") {
            toastr.error('Please select gender!')
            return;
        }
        else if ($("#clientSelector").val() == "") {
            toastr.error('Empty Client field found!')
            return;
        }

        else if ($("#roleSelector").val() == "") {
            toastr.error('Please select role!')
            return;
        }
        else if ($("#genderSelector").val() == "Select Gender") {
            toastr.error("Gender selection is compulsory!");
            return;
        }
        else if ($("#clientSelector").val() == "Select Client") {
            toastr.error("Client selection is compulsory!");
            return;
        }
        else if (setEmployeeId.length == 1 && setEmployeeId.length < 2) {
            toastr.error('Employee Id should greater than 2 characters!')
            return;
        }
        else if (setDesignation.length == 1 && setDesignation.length < 2) {
            toastr.error('Designation should greater than 2 characters!')
            return;
         }
        else if (setQualification.length == 1 && setQualification.length < 2) {
            toastr.error('Qualification should greater than 2 characters!')
            return;
         }
        else if ($("#roleSelector").val() == "Select Role") {
            toastr.error('Role selection is compulsory!')
            return;
        }
         else if (setUserName.length == 1 && setUserName.length < 2) {
            toastr.error('User name should greater than 2 characters!')
            return;
         }
         else if (setPassword.length == 1 && setPassword.length < 2) {
            toastr.error('Password should greater than 2 characters!')
            return;
         }
        else if ($("#roleSelector").val() === "4" && $("#inviteQualification").val() === "") {
            toastr.error('Please enter Qualification!')
            return;
        }
        else if ($("#roleSelector").val() === "4" &&  docQualification.length < 2) {
                    toastr.error('Please enter valid Qualification!')
                    return;
                }
        else if ($("#roleSelector").val() === "4" && $("#Specialization").val() === "") {
            toastr.error('Please Select Specialization!')
            return;
        }
        else if ($("#roleSelector").val() === "4" && $("#inviteAboutDoctor").val() === "") {
            toastr.error('Please enter About Doctor!')
            return;
        }
         else if ($("#roleSelector").val() === "4" && aboutDoc.length < 2) {
                    toastr.error('Please enter About Doctor in a sentence!')
                    return;
                }
        else if ($("#roleSelector").val() === "4" && $("#inviteFormExperience").val() === "") {
            toastr.error('Please enter Doctor Experience!')
            return;
        }
        else if ($("#roleSelector").val() === "4" && $("#consultationType").val() === "") {
            toastr.error('Please Select Consultation Type!')
            return;
        }
        else if ($("#roleSelector").val() === "4" && $("#LanguageSelector").val() === "") {
            toastr.error('Please Select Language!')
            return;
        }
        else if ($("#roleSelector").val() === "4" && $("#inviteCharges").val() === "") {
            toastr.error('Please enter Charges!')
            return;
        }
        else if ($("#roleSelector").val() === "4" && $("#selectCurrency").val() === "Select amount type" && $("#selectCurrency").val() === "" ) {
            toastr.error('Please Select Currency Type!')
            return;
        }

        else if ($("#roleSelector").val() === "4" && $("#inviteHospetalAddress").val() === "") {
            toastr.error('Please enter Hospetal Address!')
            return;
        }
         else if ($("#roleSelector").val() === "4" &&  hospitalAdd.length < 2) {
            toastr.error('Please enter Valid Hospital Address!')
            return;
        }



        // var formData = $('#profilePicFile').attr('file');
        var formData = new FormData();
        formData.append("name", $("#inviteFormName").val());
        formData.append("teamsId", $("#inviteTeams").val());
        //formData.append("username", $("#inviteFormName").val());
        formData.append("phoneNo", $("#inviteFormPhone").val());
        formData.append("role", $("#roleSelector").val());
        formData.append("gender", $("#genderSelector").val());
        formData.append("countryId", 1);


        let selectspecialization = $("#Specialization").val();
        let SelectSpecialization = selectspecialization.toString();

        let selectConsultationType = $("#consultationType").val();
        //console.log(selectConsultationType);

        let selectLanguage = $("#LanguageSelector").val();
        //console.log(selectLanguage.toString());

        if ($("#inviteFormEmail").val() != "") {
            formData.append("email", $("#inviteFormEmail").val())
        }
        if ($("#inviteFormQualification").val() != "") {
            formData.append("qualification", $("#inviteFormQualification").val())
        }
        if ($("#inviteFormDesignation").val() != "") {
            formData.append("designation", $("#inviteFormDesignation").val())
        }
        if ($("#inviteFormUsername").val() != "") {
            formData.append("username", $("#inviteFormUsername").val())
        }
        if ($("#inviteFormPassword").val() != "") {
            formData.append("password", $("#inviteFormPassword").val())
        }
        //DOCTOR PROFILE
        if ($("#inviteQualification").val() != "") {
            formData.append("qualification", $("#inviteQualification").val());
        }
        if ($("#Specialization").val() != "") {
            formData.append("specialization", SelectSpecialization)
        }
        if ($("#inviteAboutDoctor").val() != "") {
            formData.append("about", $("#inviteAboutDoctor").val());
        }
        if ($("#inviteFormExperience").val() != "") {
            formData.append("experience", $("#inviteFormExperience").val());
        }
        if ($("#inviteCharges").val() != "") {
            formData.append("consultationFee", $("#inviteCharges").val());
        }
        if ($("#roleSelector").val() === "4") {

            formData.append("amountId", $("#selectCurrency").val());
        }
        if ($("#consultationType").val() != "") {
            formData.append("consultationType", selectConsultationType.toString());
        }
        if ($("#LanguageSelector").val() != "") {
            formData.append("language", selectLanguage.toString());
        }
        if ($("#inviteHospetalAddress").val() != "") {
        formData.append("hospitalAddress", $("#inviteHospetalAddress").val());
        }
        if ($("#uploadResume").val() != "") {
            formData.append("file", $("#uploadResume").attr('file'))
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
//        for (const value of formData.entries()) {
//            console.log(value);
//        }
//
//        return;
        $('#addUserSpinner').show();


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
                console.log(result);

                $('#inviteBtn').prop('disabled', false);
                $('#addUserSpinner').hide();
                if (!result.hasOwnProperty('content')) {
                    alert("Token not exist");
                }

                if (result.error === false) {
                    $("#inviteFormName").val('');
                    $("#inviteFormPhone").val('');
                    //$("#inviteFormPhone").val('');
                    $("#roleSelector").val('Select Role');
                    $("#genderSelector").val('Select Gender');
                    $("#inviteFormEmail").val('');
                    $("#inviteFormQualification").val('');
                    //$("#inviteFormName").val('');
                    $("#inviteFormUsername").val('');
                    $("#inviteFormPassword").val('');
                    $("#clientSelector").val('Select Client');

                    $('#invite-user-modal').modal('hide');
                    (async () => {
                        toastr.success("User Invited Successfully");
                        await sleep();
                        loadUserTable();
                    })()

                } else {
                    toastr.error(result.message);
                }



            },
            error: function (xhr, status, error) {
                console.log("inviteUser-->3 : ", xhr, status, error);

                $('#inviteBtn').prop('disabled', false);
                $('#addUserSpinner').hide();
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                        })()
                    } else {
                        toastr.error(xhr.responseJSON.message);
                    }
                } else {
                    toastr.error('Failed add user.Internet Disconnected/Server error');
                }

            }
        });
    }

}

//POP UP DELETE USER MODAL
function deleteUserInTeams(users) {
    $('#delete-user-modal').modal('show');
    console.log("DELETE USER IN TEAMS", users)
    let USER_ID = users.id
    $('#deleteUserBtn').unbind().click(function () {

        console.log("delete button", USER_ID)
        $.ajax({
            type: "DELETE",
            url: CONF_SERVER_PATH + "/deleteUserInTeams?userId=" + USER_ID,
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (data) {
                if (data.error == false) {
                    (async () => {
                        toastr.success("Deleted Successfully");
                        //$('#completed_button'+value.id).hide();
                        await sleep();
                        window.location.reload();
                    })()
                } else {
                    console.log("else part")
                    alert("Server error");
                }
            }
        });
    })
}

// API CALL FOR DELETE USER

// function deleteUser(){

//     let deletedata = {
//         userName: "",
//         mobNo: "",
//         role: "",
//         status: "",
//         date: "",
//     }

//     $.ajax({
//         type: "DELETE",
//         contentType: "application/json",
//         url: CONF_SERVER_PATH + "/saveProductAndSubProduct",
//         data: deletedata,
//         dataType: "json",
//         headers: { Authorization: "Bearer " + JWT_TOKEN },
//         success: function (result)
//     })
// }

//API CALL FOR CREATE ROASTER
function roasterModal(user) {

    $('#doctor-roaster-modal').modal('show')

    $("#saveRoasterBtn").unbind().click(function () {

    console.log("timecount:",SUB_TIME_COUNT);
let sundayFrom = $("#fromSunTimeOption").val();
         console.log("sunday from time:",sundayFrom);
    //console.log("Append time slot:",fromAppendText);
        let clientId = user.clientId.id;
        let doctorId = user.id;
        let appendTime = [];
        appendTime = $(`#fromTimeOption${SUB_TIME_COUNT}`).val();
        console.log("Appended time:",appendTime,SUB_TIME_COUNT);
        let jsonData;

        let sundayAvailability = [];


        if ($("#fromSunTimeOption").val() != "" && $("#toSunTimeOption").val() == "") {
              toastr.error("Sunday's End Time is compulsory!");
              return;
         }
         if ($("#fromSunTimeOption").val() == "" && $("#toSunTimeOption").val() != "") {
             toastr.error("Sunday's Start Time is compulsory!");
              return;
         }


        if (($("#fromSunTimeOption").val() != "" || $("#toSunTimeOption").val() != "") ) {
            sundayAvailability.push({
                "open": $("#fromSunTimeOption").val(),
                "close": $("#toSunTimeOption").val(),
              })
           }

        if (SUB_TIME_COUNT > 0) {
        sundayAvailability.push({
                        "open": $(`#fromTimeOption${SUB_TIME_COUNT}`).val(),
                        "close": $(`#toTimeOption${SUB_TIME_COUNT}`).val(),
                      })
        }
        //console.log("append sunday availabilty array:",sundayAvailability)
        let mondayAvailability = [];

        if ($("#fromMonTimeOption").val() != "" && $("#toMonTimeOption").val() == "") {
                 toastr.error("Monday's End Time is compulsory!");
                      return;
                 }
        if ($("#fromMonTimeOption").val() == "" && $("#toMonTimeOption").val() != "") {
                 toastr.error("Monday's Start Time is compulsory!");
                      return;
                 }

        if ($("#fromMonTimeOption").val() != "" || $("#toMonTimeOption").val() != "") {
            mondayAvailability.push({
                "open": $("#fromMonTimeOption").val(),
                "close": $("#toMonTimeOption").val(),
            })
        }

        if (MON_TIME_COUNT > 0) {
                mondayAvailability.push({
                                "open": $(`#fromMonOption${MON_TIME_COUNT}`).val(),
                                "close": $(`#toMonOption${MON_TIME_COUNT}`).val(),
                              })
                }
       //console.log("Monday available slots:",mondayAvailability)

        let tuesdayAvailability = [];
         if ($("#fromTueTimeOption").val() != "" && $("#toTueTimeOption").val() == "") {
               toastr.error("Tuesday's End Time is compulsory!");
                      return;
         }
         if ($("#fromTueTimeOption").val() == "" && $("#toTueTimeOption").val() != "") {
              toastr.error("Tuesday's Start Time is compulsory!");
                      return;
         }

        if ($("#fromTueTimeOption").val() != "" || $("#toTueTimeOption").val() != "") {

            tuesdayAvailability.push({
                "open": $("#fromTueTimeOption").val(),
                "close": $("#toTueTimeOption").val(),
            })
        }

        if (TUE_TIME_COUNT > 0) {
             tuesdayAvailability.push({
                 "open": $(`#fromTueOption${TUE_TIME_COUNT}`).val(),
                 "close": $(`#toTueOption${TUE_TIME_COUNT}`).val(),
                })
             }
        //console.log("Teusday available slots:",tuesdayAvailability)

        let wednesdayAvailability = [];
        if ($("#fromWedTimeOption").val() != "" && $("#toWedTimeOption").val() == "") {
               toastr.error("Wednesday's End Time is compulsory!");
                    return;
        }
        if ($("#fromWedTimeOption").val() == "" && $("#toWedTimeOption").val() != "") {
               toastr.error("Wednesday's Start Time is compulsory!");
                    return;
        }

        if ($("#fromWedTimeOption").val() != "" || $("#toWedTimeOption").val() != "") {
            wednesdayAvailability.push({
                "open": $("#fromWedTimeOption").val(),
                "close": $("#toWedTimeOption").val(),
            })
        }
    if (WED_TIME_COUNT > 0) {
                 wednesdayAvailability.push({
                     "open": $(`#fromWedOption${WED_TIME_COUNT}`).val(),
                     "close": $(`#toWedOption${WED_TIME_COUNT}`).val(),
                    })
                 }
      console.log("wednesday available slots:",wednesdayAvailability)

        let thursdayAvailability = [];
        if ($("#fromThuTimeOption").val() != "" && $("#toThuTimeOption").val() == "") {
              toastr.error("Thursday's End Time is compulsory!");
              return;
        }
        if ($("#fromThuTimeOption").val() == "" && $("#toThuTimeOption").val() != "") {
              toastr.error("Thursday's Start Time is compulsory!");
              return;
        }

        if ($("#fromThuTimeOption").val() != "" || $("#toThuTimeOption").val() != "") {
            thursdayAvailability.push({
                "open": $("#fromThuTimeOption").val(),
                "close": $("#toThuTimeOption").val(),
            })
        }

        if (THU_TIME_COUNT > 0) {
                 thursdayAvailability.push({
                     "open": $(`#fromThuOption${THU_TIME_COUNT}`).val(),
                     "close": $(`#toThuOption${THU_TIME_COUNT}`).val(),
                    })
                 }
      //console.log("thursday available slots:",thursdayAvailability)
        let fridayAvailability = [];

        if ($("#fromFriTimeOption").val() != "" && $("#toFriTimeOption").val() == "") {
                      toastr.error("Friday's End Time is compulsory!");
                      return;
        }
        if ($("#fromFriTimeOption").val() == "" && $("#toFriTimeOption").val() != "") {
                      toastr.error("Friday's Start Time is compulsory!");
                      return;
        }

        if ($("#fromFriTimeOption").val() != "" || $("#toFriTimeOption").val() != "") {
            fridayAvailability.push({
                "open": $("#fromFriTimeOption").val(),
                "close": $("#toFriTimeOption").val(),
            })
        }
        if (FRI_TIME_COUNT > 0) {
                 fridayAvailability.push({
                     "open": $(`#fromFriOption${FRI_TIME_COUNT}`).val(),
                     "close": $(`#toFriOption${FRI_TIME_COUNT}`).val(),
                    })
                 }
        console.log("friday available slots:",fridayAvailability)

        let saturdayAvailability = [];
        if ($("#fromSatTimeOption").val() != "" && $("#toSatTimeOption").val() == "") {
                toastr.error("Saturday's End Time is compulsory!");
                return;
        }
        if ($("#fromSatTimeOption").val() == "" && $("#toSatTimeOption").val() != "") {
                toastr.error("Saturday's Start Time is compulsory!");
                return;
        }

        if ($("#fromSatTimeOption").val() != "" || $("#toSatTimeOption").val() != "") {
            saturdayAvailability.push({
                "open": $("#fromSatTimeOption").val(),
                "close": $("#toSatTimeOption").val(),
            })
        }
        if (SAT_TIME_COUNT > 0) {
           saturdayAvailability.push({
                "open": $(`#fromSatOption${SAT_TIME_COUNT}`).val(),
                "close": $(`#toSatOption${SAT_TIME_COUNT}`).val(),
           })
        }


        if (($("#fromSatTimeOption").val() == "" || $("#toSatTimeOption").val() == "") && ($("#fromSunTimeOption").val() == "" || $("#toSunTimeOption").val() == "") &&
        ($("#fromMonTimeOption").val() == "" || $("#toMonTimeOption").val() == "") && ($("#fromTueTimeOption").val() == "" || $("#toTueTimeOption").val() == "") && ($("#fromWedTimeOption").val() == "" || $("#toWedTimeOption").val() == "")
        && ($("#fromThuTimeOption").val() == "" || $("#toThuTimeOption").val() == "") && ($("#fromFriTimeOption").val() == "" || $("#toFriTimeOption").val() == ""))
        {

            toastr.error("Doctor Availability is compulsory!");
            return;
        }

        let formData = {
            "doctorId": doctorId,
            "clientId": clientId,

            "sunday": sundayAvailability,
            "monday": mondayAvailability,
            "tuesday": tuesdayAvailability,
            "wednesday": wednesdayAvailability,
            "thursday": thursdayAvailability,
            "friday": fridayAvailability,
            "saturday": saturdayAvailability,
        };

        jsonData = JSON.stringify(formData);
        console.log(jsonData)
        let time = $("#fromSunTimeOption").val();
        console.log("doctor roster--->:",sundayAvailability);
       $('#addDoctorSpinner').show();


        $.ajax({
            type: 'POST',
            data: jsonData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/addDoctorRoster",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("inviteClient-->2: ", result);

                $('#saveRoasterBtn').prop('disabled', false);
                $('#addDoctorSpinner').hide();

                if (result.error === false) {
                    $("#doctorAvailability").val('');
                    $("#timeInput1").val('');
                    $("#timeInput2").val('');
                    $("#timeInput3").val('');
                    $("#timeInput4").val('');
                    $("#timeInput5").val('');
                    $("#timeInput6").val('');
                    $("#timeInput7").val('');
                    $('#doctor-roaster-modal').modal('hide');
                    (async () => {
                        toastr.success("Roster Added Successfully");
                        await sleep();
                        location.reload();
                    })()

                } else {
                    toastr.error(result.message);
                }

            },
            error: function (xhr, status, error) {
                // console.log("inviteClient-->3 : ",error);
                // $('#addClientButton').prop('disabled', false);
                // $('#addClientSpinner').hide();
                   $('#addDoctorSpinner').hide();
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = './login';
                        })()
                    }
                    toastr.error(xhr.responseJSON.message);
                    //$("#distributor-table-error").text(xhr.responseJSON.message);
                } else {
                    toastr.error('Failed add client. Server error');
                    //$("#distributor-table-error").text("No Data Found!");
                }
            }
        });

    })



}

//API CALL FOR UPDATE ROASTER
function updateRoasterModal(drObj) {
    let ummId = drObj.id;
    $('#update-doctor-roaster-modal').modal('show')
    console.log("update roster modal",drObj);
    $.ajax({
            type: 'GET',
            url: CONF_TEAMS_PATH + "/getRoster?clientId=" + CLIENT_ID + "&ummId=" + ummId,
            //headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
            console.log("Get roster",result);
            let rosterData = result.content.doctorRoster;


           let sundayRoster = rosterData.sunday;
//           console.log("sunday availability length:",sundayRoster.length);
//           if (sundayRoster.length > 1) {
//           console.log("roster length is greater then 1");
//           appendSunTime();
//           }
             //console.log("roster content",sundayRoster);
             for (let data of sundayRoster) {
             console.log(data);
             let openTime = [];
             let closeTime = [];
             openTime[0] = data.open;
             closeTime[0] = data.close;
             $('#updateFromTimeOption1').val(openTime);
             $('#updateToTimeOption1').val(closeTime);
//             $("#Fromupdateoption1").val(openTime);
//             $("#Toupdateoption1").val(closeTime);


//             if(sundayRoster.length > 1){
//             console.log("length is greater than 1")
//            //updateAppendSunTime()
//            updateaddTimeInput1();
//             }



           }

             let mondayRoster = rosterData.monday;
             //console.log("roster content Monday:",mondayRoster);
             for (let data of mondayRoster) {
               $('#updatefromTimeOption2').val(data.open);
               $('#updatetoTimeOption2').val(data.close);
              }

              let tuesdayRoster = rosterData.tuesday;
              //console.log("roster content Monday:",tuesdayRoster);
              for (let data of tuesdayRoster) {
              $('#updatefromTimeOption3').val(data.open);
              $('#updatetoTimeOption3').val(data.close);
              }

               let wednesdayRoster = rosterData.wednesday;
               //console.log("roster content Monday:",wednesdayRoster);
               for (let data of wednesdayRoster) {
               $('#updatefromTimeOption4').val(data.open);
               $('#updatetoTimeOption4').val(data.close);
               }

                let thursdayRoster = rosterData.thursday;
                //console.log("roster content Monday:",thursdayRoster);
                for (let data of thursdayRoster) {
                $('#updatefromTimeOption5').val(data.open);
                $('#updatetoTimeOption5').val(data.close);
                }

                  let fridayRoster = rosterData.friday;
                  //console.log("roster content Monday:",fridayRoster);
                  for (let data of fridayRoster) {
                  $('#updatefromTimeOption6').val(data.open);
                  $('#updatetoTimeOption6').val(data.close);
                  }

                let saturdayRoster = rosterData.saturday;
                 console.log("roster content Saturday:",saturdayRoster);
                   for (let data of saturdayRoster) {
                    console.log("roster content Saturday:",data.close);
                    $('#updatefromTimeOption7').val(data.open);
                   $('#updatetoTimeOption7').val(data.close);
                  }
            }
            });

    $("#updatesaveRoasterBtn").unbind().click(function () {

        //console.log("doctor roster", drObj.id, drObj.clientId.id);
        let clientId = drObj.clientId.id;
        let doctorId = drObj.id;

        let jsonData;
        let sundayAvailability = [];

        //console.log($("#doctorAvailability").val());
        if ($("#updateFromTimeOption1").val() != "" && $("#updateToTimeOption1").val() == "") {
            toastr.error("Sunday End Time is compulsory!");
            return;
        }
        if ($("#updateFromTimeOption1").val() == "" && $("#updateToTimeOption1").val() != "") {
                    toastr.error("Sunday Start time is compulsory!");
                    return;
                }
        if ($("#updateFromTimeOption1").val() != "" && $("#updateToTimeOption1").val() != "") {
            sundayAvailability.push({
                "open": $("#updateFromTimeOption1").val(),
                "close": $("#updateToTimeOption1").val(),
            })
        }
        if(UPDATE_TIME_COUNT > 0) {
        sundayAvailability.push({
       "open": $(`#Fromupdateoption1${UPDATE_TIME_COUNT}`).val(),
       "close": $(`#Toupdateoption1${UPDATE_TIME_COUNT}`).val(),
        })
        }
        console.log("updated appended availability:",sundayAvailability);
        let mondayAvailability = [];
        if ($("#updatefromTimeOption2").val() != "" && $("#updatetoTimeOption2").val() == "") {
            toastr.error("Monday End Time is compulsory!");
            return;
        }

        if ($("#updatefromTimeOption2").val() == "" && $("#updatetoTimeOption2").val() != "") {
                    toastr.error("Monday Start Time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption2").val() != "" || $("#updatetoTimeOption2").val() != "") {
            mondayAvailability.push({
                "open": $("#updatefromTimeOption2").val(),
                "close": $("#updatetoTimeOption2").val(),
            })
        }

        if(UPDATE_MON_TIME_COUNT > 0) {
                mondayAvailability.push({
               "open": $(`#Fromupdateoption2${UPDATE_MON_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption2${UPDATE_MON_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended mondayAvailability:",mondayAvailability);
        let tuesdayAvailability = [];
        if ($("#updatefromTimeOption3").val() != "" && $("#updatetoTimeOption3").val() == "") {
            toastr.error("Tuesday End Time is compulsory!");
            return;
        }
        if ($("#updatefromTimeOption3").val() == "" && $("#updatetoTimeOption3").val() != "") {
                    toastr.error("Tuesday Start Time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption3").val() != "" || $("#updatetoTimeOption3").val() != "") {

            tuesdayAvailability.push({
                "open": $("#updatefromTimeOption3").val(),
                "close": $("#updatetoTimeOption3").val(),
            })
        }

if(UPDATE_TUE_TIME_COUNT > 0) {
                tuesdayAvailability.push({
               "open": $(`#Fromupdateoption3${UPDATE_TUE_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption3${UPDATE_TUE_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended tuesdayAvailability:",tuesdayAvailability);
        let wednesdayAvailability = [];
        if ($("#updatefromTimeOption4").val() != "" && $("#updatetoTimeOption4").val() == "") {
            toastr.error("Wednesday End Time is compulsory!");
            return;
        }
        if ($("#updatefromTimeOption4").val() == "" && $("#updatetoTimeOption4").val() != "") {
                    toastr.error("Wednesday Start is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption4").val() != "" || $("#updatetoTimeOption4").val() != "") {
            wednesdayAvailability.push({
                "open": $("#updatefromTimeOption4").val(),
                "close": $("#updatetoTimeOption4").val(),
            })
        }
if(UPDATE_WED_TIME_COUNT > 0) {
                wednesdayAvailability.push({
               "open": $(`#Fromupdateoption4${UPDATE_WED_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption4${UPDATE_WED_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended wednesdayAvailability:",wednesdayAvailability);

        let thursdayAvailability = [];
        if ($("#updatefromTimeOption5").val() != "" && $("#updatetoTimeOption5").val() == "") {
            toastr.error("Thursday End time is compulsory!");
            return;
        }

        if ($("#updatefromTimeOption5").val() == "" && $("#updatetoTimeOption5").val() != "") {
                    toastr.error("Thursday Start time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption5").val() != "" || $("#updatetoTimeOption5").val() != "") {
            thursdayAvailability.push({
                "open": $("#updatefromTimeOption5").val(),
                "close": $("#updatetoTimeOption5").val(),
            })
        }
if(UPDATE_THU_TIME_COUNT > 0) {
                thursdayAvailability.push({
               "open": $(`#Fromupdateoption5${UPDATE_THU_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption5${UPDATE_THU_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended thursdayAvailability:",thursdayAvailability);

        let fridayAvailability = [];
        if ($("#updatefromTimeOption6").val() != "" && $("#updatetoTimeOption6").val() == "") {
            toastr.error("Friday End Time is compulsory!");
            return;
        }
        if ($("#updatefromTimeOption6").val() == "" && $("#updatetoTimeOption6").val() != "") {
                    toastr.error("Friday Start Time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption6").val() != "" || $("#updatetoTimeOption6").val() != "") {
            fridayAvailability.push({
                "open": $("#updatefromTimeOption6").val(),
                "close": $("#updatetoTimeOption6").val(),
            })
        }
if(UPDATE_FRI_TIME_COUNT > 0) {
                fridayAvailability.push({
               "open": $(`#Fromupdateoption6${UPDATE_FRI_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption6${UPDATE_FRI_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended fridayAvailability:",fridayAvailability);

        let saturdayAvailability = [];
         if ($("#updatefromTimeOption7").val() != "" && $("#updatetoTimeOption7").val() == "") {
                    toastr.error("Saturday End Time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption7").val() == "" && $("#updatetoTimeOption7").val() != "") {
                    toastr.error("Saturday Start Time is compulsory!");
                    return;
                }
        if ($("#updatefromTimeOption7").val() != "" || $("#updatetoTimeOption7").val() != "") {
            saturdayAvailability.push({
                "open": $("#updatefromTimeOption7").val(),
                "close": $("#updatetoTimeOption7").val(),
            })
        }
if(UPDATE_SAT_TIME_COUNT > 0) {
                saturdayAvailability.push({
               "open": $(`#Fromupdateoption7${UPDATE_SAT_TIME_COUNT}`).val(),
               "close": $(`#Toupdateoption7${UPDATE_SAT_TIME_COUNT}`).val(),
                })
             }
                console.log("updated appended saturdayAvailability:",saturdayAvailability);

        if (($("#updateFromTimeOption1").val() == "" || $("#updateToTimeOption1").val() == "") && ($("#updatefromTimeOption2").val() == "" || $("#updatetoTimeOption2").val() == "") &&
                ($("#updatefromTimeOption3").val() == "" || $("#updatetoTimeOption3").val() == "") && ($("#updatefromTimeOption4").val() == "" || $("#updatetoTimeOption4").val() == "") && ($("#updatefromTimeOption5").val() == "" || $("#updatetoTimeOption5").val() == "")
                && ($("#updatefromTimeOption6").val() == "" || $("#updatetoTimeOption6").val() == "") && ($("#updatefromTimeOption7").val() == "" || $("#updatetoTimeOption7").val() == ""))
                {
                    console.log("update roster validation----------->")
                    toastr.error("Doctor Availability is compulsory!");
                    return;
                }

        let formData = {
            "ummId": doctorId,
            "clientId": clientId,

            "sunday": sundayAvailability,
            "monday": mondayAvailability,
            "tuesday": tuesdayAvailability,
            "wednesday": wednesdayAvailability,
            "thursday": thursdayAvailability,
            "friday": fridayAvailability,
            "saturday": saturdayAvailability,
        };

        jsonData = JSON.stringify(formData);
        console.log(jsonData)

       $('#updateaddDoctorSpinner').show();

        $.ajax({
            type: 'PUT',
            data: jsonData,
            contentType: "application/json",
            url: CONF_TEAMS_PATH + "/updateDoctorRoster",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                console.log("inviteClient-->2: ", result);

                $('#updatesaveRoasterBtn').prop('disabled', false);
                $('#updateaddDoctorSpinner').hide();

                if (result.error === false) {
                    $("#doctorAvailability").val('');
                    $("#timeInput1").val('');
                    $("#timeInput2").val('');
                    $("#timeInput3").val('');
                    $("#timeInput4").val('');
                    $("#timeInput5").val('');
                    $("#timeInput6").val('');
                    $("#timeInput7").val('');
                    $('#doctor-roaster-modal').modal('hide');
                    (async () => {
                        toastr.success("Roster Updated Successfully");
                        await sleep();
                        location.reload();
                    })()

                } else {
                    toastr.error(result.message);
                }

            },
            error: function (xhr, status, error) {
                // console.log("inviteClient-->3 : ",error);
                // $('#addClientButton').prop('disabled', false);
                // $('#addClientSpinner').hide();
                   $('#updateaddDoctorSpinner').hide();
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.code === 401) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            await sleep();
                            window.location.href = './login';
                        })()
                    }
                    toastr.error(xhr.responseJSON.message);
                    //$("#distributor-table-error").text(xhr.responseJSON.message);
                } else {
                    toastr.error('Failed add client. Server error');
                    //$("#distributor-table-error").text("No Data Found!");
                }
            }
        });

    })


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
            url: CONF_SERVER_PATH + "/updateUser",
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

function loadUserTable() {
    console.log("loadWriztoUserTable->", CLIENT_ID);
    $('#userTable1').hide();
    $("#user-table-error").hide();
    $("#user-table-spinner").show();
    $('#user-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_SERVER_PATH + "/getUserTable?clientIds";

    if (ROLE.includes("Wrizto")) {
        url += "&size=" + CONF_MAX_LIMIT + "&sort=createdAt,DESC";
    }
    else {
        url += "=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT + "&sort=createdAt,DESC";
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


                let userTable = result.content.users;
                //console.log("window.JWT_TOKEN-->",content, userTable.userList);


                $("#userTable1").show();

                $('#userTable1').DataTable({

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
                                return row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '-';
                            }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                //console.log("Data verification____>", row);
                                let menuItem = '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewUserDetails(' + JSON.stringify(row) + ');\'>View Details</button>' ;
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'updateUser(' + JSON.stringify(row) + ', true);\'>Update User</button>' ;
                                    if (ROLE != 'Wrizto Super Admin' && row.teamsAccount == false && row.role.role === 'Doctor') {
                                    menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'createAccount(' + JSON.stringify(row) + ');\'> Create Teams Account</button>' ;

                                    } else if(ROLE != 'Wrizto Super Admin' && row.teamsAccount == true && row.role.role === 'Doctor') {
                                  menuItem += '<button class=\'dropdown-item\' type=\'button\' onClick=\'viewCredentialsDetails(' + JSON.stringify(row) + ');\'>View Teams Credentials</button>' +
                                   '<button id=\'btnTeams\' class=\'dropdown-item\'  type=\'button\' onClick=\'deleteUserInTeams(' + JSON.stringify(row) + ');\'>Delete User From Teams</button>';
                                    }

                                if (row.role.role === 'Doctor' && ROLE != 'Wrizto Super Admin' && row.teamsAccount == true) {
                                        if(row.doctorRoster == false) {
                                         menuItem += '<button id=\'rosterupdate\' class=\'dropdown-item\' type=\'button\' onClick=\'roasterModal(' + JSON.stringify(row) + ');\'>Create Roaster</button>' ;
                                        } else
                                        if ( row.doctorRoster == true) {
                                        menuItem += '<button  class=\'dropdown-item\' type=\'button\' onClick=\'updateRoasterModal('+ JSON.stringify(row) + ');\'>Update Roaster</button>' +
                                         '<button class=\'dropdown-item\' type=\'button\' onClick=\'addDoctorUnavailability('+ JSON.stringify(row) + ');\'>Add Unavailability</button>' ;
                                        }


                                } else {
                                    return menuItem;
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
            $("#user-table-spinner").hide();
            $("#user-table-error").show();
            $('#user-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            // if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
            //     $("#user-table-error").text(xhr.responseJSON.message);
            // } else {
            //     $("#user-table-error").text("No Data Found!");
            // }
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                    })()
                }
                $("#user-table-error").text(xhr.responseJSON.message);
            } else {
                $("#user-table-error").text("No Data Found!");
            }
        }
    });
}



//GET DOCTOR UNAVAILABILITY TABLE


function unavailabilityTable() {
    console.log("loadWriztoUserTable->", CLIENT_ID);
    $('#unavailableTable1').hide();
    $("#unavailable-table-error").hide();
    $("#unavailabl-table-spinner").show();
    $('#unavailabl-table-spinner').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' });

    let url = CONF_TEAMS_PATH + "/getDoctorUnavailability?clientId=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT +"&sortDirection=DESC";

//    if (ROLE.includes("Wrizto")) {
//        url += "&size=" + CONF_MAX_LIMIT + "&sort=createdAt,DESC";
//    }
//    else {
//        url += "=" + CLIENT_ID + "&size=" + CONF_MAX_LIMIT + "&sort=createdAt,DESC";
//    }

    //API CALL
    $.ajax({
        type: 'GET',
        url: url,
        //headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            $("#unavailabl-table-spinner").hide();
            console.log('success: ', result);
            if (result.error == true) {
                $("#unavailable-table-error").show();
                $('#unavailable-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
                $("#unavailable-table-error").text(result.message);
            } else {
                if (!result.hasOwnProperty('content') || !result.content.hasOwnProperty('unavailableDoctors')) {
                    alert("unavailableDoctors not exist");
                }
                let { content, message, error } = result;


                let doctoUnavailtable = result.content.unavailableDoctors;
                console.log("window.JWT_TOKEN-->",content);


                $("#unavailableTable1").show();

                $('#unavailableTable1').DataTable({

                    data: doctoUnavailtable,
                    destroy: true,
                    columns: [
                        {
                            data: 'doctorName'
                        },

                        {
                            data: "doctorId"
                        },
                        {
                           data: 'null',
                           render: function (data, type, row, meta) {
                           return row.unavailableDate ? new Date(row.unavailableDate).toLocaleDateString() : '-';
                           }
                        },
                        {
                            data: 'null',
                            render: function (data, type, row, meta) {
                                return row.lastUpdated ? new Date(row.lastUpdated).toLocaleDateString() : '-';
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
                                    '<button class=\'dropdown-item\' type=\'button\' onClick=\'updateDoctorUnavailability(' + JSON.stringify(row) + ', true);\'>Update Unavailabilty</button>' ;
                                    //'<button class=\'dropdown-item\' type=\'button\' onClick=\'deleteUnavailability(' + JSON.stringify(row) + ', true);\'>Delete Unavailabilty</button>' ;

                                '</div></div>'
                                return menuItem;
                            }
                        }
                    ],
                     "order": [[3, "desc"]]
                });
            }
        },
        error: function (xhr, status, error) {

            //console.log('loginByUserName->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);
            $("#unavailabl-table-spinner").hide();
            $("#unavailable-table-error").show();
            $('#unavailable-table-error').css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' });
            // if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
            //     $("#user-table-error").text(xhr.responseJSON.message);
            // } else {
            //     $("#user-table-error").text("No Data Found!");
            // }
            if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                if (xhr.responseJSON.code === 401) {
                    (async () => {
                        toastr.error(xhr.responseJSON.message);
                        await sleep();
                        window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                    })()
                }
                $("#unavailable-table-error").text(xhr.responseJSON.message);
            } else {
                $("#unavailable-table-error").text("No Data Found!");
            }
        }
    });
}



//GET LANGUAGES IN USER MODAL

function getLanguages(mode, select) {

    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getLanguages",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                alert("Token not exist");
            }
            let { content, message } = result;
            let { languageList } = content;

            let languagesList = content.languages;



            let languageDropdownList = "<option disabled>Select Language</option>";
            for (let language of languagesList) {
                //console.log("get languages", language);
                languageDropdownList += "<option value=" + language.languageId + " >" + language.displayName + "</option>"
            }

            $("#LanguageSelector").html(languageDropdownList);
            $("#updateLanguageSelector").html(languageDropdownList);
            //languageDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";

            // for (let language of languageList) {
            //     console.log(language);
            //     if (language.id === select.id) {
            //         continue;
            //     }
            //     languageDropdownList += "<option value=" + language.id + " >" + language.name + "</option>"
            // }
            // $("#updateLanguageSelector").html(languageDropdownList);



        },
        error: function (xhr, status, error) {
            // console.log('error: ', error);
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

//GET CONSULTATION TYPE IN USER MODAL

function getConsultationType(mode, select) {

    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getConsultationType",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                alert("Token not exist");
            }
            let { content, message } = result;
            let { languageList } = content;
            //console.log(content);
            let consultationList = content.consultationTypes;
            //console.log("get consultationTypes");
            let consultationDropdownList = "<option disabled>Select Consultation Type</option>";
            for (let consultationType of consultationList) {
                //console.log(consultationType);
                consultationDropdownList += "<option value=" + consultationType.consultationTypeId
                    + " >" + consultationType.displayName + "</option>"
            }

            $("#consultationType").html(consultationDropdownList);
            $("#updateconsultationType").html(consultationDropdownList);
            //languageDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";

            // for (let language of languageList) {
            //     console.log(language);
            //     if (language.id === select.id) {
            //         continue;
            //     }
            //     languageDropdownList += "<option value=" + language.id + " >" + language.name + "</option>"
            // }
            // $("#updateLanguageSelector").html(languageDropdownList);



        },
        error: function (xhr, status, error) {
            // console.log('error: ', error);
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

//GET SPECIALIZATION IN USER MODAL

function getMedicalSpecialists(mode, select) {
    CLIENT_ID = localStorage.getItem("CLIENT_ID");
    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getMedicalSpecialists?clientId=" + CLIENT_ID,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                alert("Token not exist");
            }
            let { content, message } = result;
            //let { SpecializationsList } = content;
            console.log(content);
            let SpecializationsList = content.specializations;


            console.log("get consultationTypes", SpecializationsList);
            let SpecializationsDropdownList = "<option disabled>Select Specialization Type</option>";
            for (let SpecializationsType of SpecializationsList) {
                console.log(SpecializationsType);
                SpecializationsDropdownList += "<option value=" + SpecializationsType.specializationId + " >" + SpecializationsType.displayName + "</option>"
            }

            $("#Specialization").html(SpecializationsDropdownList);
            $("#updateSpecialization").html(SpecializationsDropdownList);
            //SpecializationsDropdownList = "<option selected value=" + select.specializationId + ">" + select.displayName + "</option>";

            // for (let SpecializationsType of SpecializationsList) {
            //     console.log(language);
            //     if (SpecializationsType.specializationId === select.id) {
            //         continue;
            //     }
            //     languageDropdownList += "<option value=" + language.id + " >" + language.name + "</option>"
            // }
            // $("#updateSpecialization").html(SpecializationsDropdownList);



        },
        error: function (xhr, status, error) {
            // console.log('error: ', error);
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

//GET AMOUNT TYPE

function getAmount(mode, select) {
    console.log("Amount api")
    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getAmount",
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                alert("Token not exist");
                return;
            }
            let { content, message } = result;
            let { languageList } = content;
            console.log(content);
            let amountList = content.amount;


            console.log("get Amount", $("#selectCurrency").val());
            let amountDropdownList = "";
            for (let amountType of amountList) {
                console.log(amountType.id);
                amountDropdownList += "<option value=" + amountType.id + " >" + amountType.name + "</option>"
            }
            console.log("get Amount", amountDropdownList);
            $("#selectCurrency").html(amountDropdownList);
            $("#updateselectCurrency").html(amountDropdownList);




        },
        error: function (xhr, status, error) {
            // console.log('error: ', error);
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

//API CALL FOR SELECT REASON

function getReasons(mode, select) {

    /* API CALL */
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getReasons?clientId=" + CLIENT_ID,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {
            if (!result.hasOwnProperty('content')) {
                alert("Token not exist");
            }
            let { content, message } = result;
            let { languageList } = content;
            console.log(content);
            let amountList = content.amount;


            console.log("get Amount");
            let amountDropdownList = " ";
            for (let amountType of amountList) {
                console.log(amountType);
                amountDropdownList += "<option value=" + amountType.id + " >" + amountType.name + "</option>"
            }

            //$("#selectCurrency").html(amountDropdownList);
            $("#updateselectCurrency").html(amountDropdownList);
            //languageDropdownList = "<option selected value=" + select.id + ">" + select.name + "</option>";

            // for (let language of languageList) {
            //     console.log(language);
            //     if (language.id === select.id) {
            //         continue;
            //     }
            //     languageDropdownList += "<option value=" + language.id + " >" + language.name + "</option>"
            // }
            // $("#updateLanguageSelector").html(languageDropdownList);



        },
        error: function (xhr, status, error) {
            // console.log('error: ', error);
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
//CREATE TEAMS ACCOUNT MODAL OPEN
function createAccount(users) {
    $('#create-teams-account-modal').modal('show');

    console.log("Users json data", users);

    let username = users.teamsId;
    let role = users.role.role;
    let password = users.password;
    let phoneNum = users.phoneNo;
    let clientId = users.clientId.id;
    let fitkitUserId = users.id;

    let ROLE = role.toUpperCase();

    console.log(username, ROLE, password, phoneNum, clientId, fitkitUserId);
    let userData;


    if (clientId == '') {
        toastr.error("Serial Number not found");
        return;
    } else {
        userData = JSON.stringify({
            "userName": username,
            "role": ROLE,
            "password": "wenzins@123",
            "mobilePhone": phoneNum,
            "clientId": clientId,
            "ummId": fitkitUserId,
            //"kitId": "TDOCTERAPP"
        });
    }
    console.log(userData);
    //API CALL to Add User In Teams

    $("#createUserTeams").unbind().click(function () {
        $('#createUserSpinner').show();
        console.log("addUserInTeams");
        $.ajax({
            type: 'POST',
            data: userData,
            contentType: "application/json",
            url: CONF_SERVER_PATH + "/addUserInTeams",
            headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
            success: function (result) {
                $('#createUserSpinner').hide();
                console.log('success: ', result.error);
                if (result.error == true) {
                    //ToDo: Remove alert message
                    toastr.error("User teams not created");
                } else {

                    let { content, message, error } = result;
                    console.log(result);
                    if (error === false) {
                        $('#create-teams-account-modal').modal('hide');

                        (async () => {
                            toastr.success("Teams account created Successfully");
                            await sleep();
                            loadUserTable();
                        })()
                    } else {
                        alert(result.message);
                    }
                }
            },
            error: function (xhr, status, error) {
                $('#createUserSpinner').hide();
                console.log('activateLicense->error: ', xhr, ", status: ", status, ', error:', xhr.responseJSON);
                if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                    if (xhr.responseJSON.error === true) {
                        (async () => {
                            toastr.error(xhr.responseJSON.message);
                            //await sleep();
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

//GET lOGIN CREDENTIALS OF DOCTOR

function viewCredentialsDetails(users) {
    $('#doctorDetails-modal').modal('show');
    console.log(users);
    console.log(users.id);
   let UmmId = users.id;
    $.ajax({
        type: 'GET',
        url: CONF_SERVER_PATH + "/getLoginCredentials?ummId=" + UmmId,
        headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
        success: function (result) {

            console.log('success: ', result);
            if (result.error == true) {
                //ToDo: Remove alert message
                $('#teamsUserEmail').html("User Email <span class='float-right badge bg-info'>0</span>");
                $('#teamsUserName').html("User Name <span class='float-right badge bg-danger'>0</span>");
                $('#teamsUserPassword').html("User Password <span class='float-right badge bg-success'>0</span>");
                $('#doctorCollapseOne').removeClass('show');
                $('#doctorcollapseTwo').removeClass('show');
                $('#doctorcollapseThree').removeClass('show');
                // $('#collapseOne').html('No Data');
                // $('#collapseTwo').html('No Data');
                // $('#collapseThree').html('No Data');
            } else {

                let { content, message, error } = result;
                console.log(content)

                $('#teamsUserEmail').html("User Email <span class='float-right badge bg-info'>0</span>");
                $('#teamsUserName').html("User Name <span class='float-right badge bg-danger'>0</span>");
                $('#teamsUserPassword').html("User Password <span class='float-right badge bg-success'>0</span>");

                // console.log(content);
                if (content.loginCredentials != '') {
                    console.log(content.loginCredentials);
                    $('#teamsUserEmail').html("User Email <span class='float-right badge bg-info'>" + content.loginCredentials.teamsUserEmail + "</span>");


                    $('#doctorCollapseOne').html(content.loginCredentials.teamsUserEmail);
                } else {
                    $('#doctorCollapseOne').removeClass('show');
                }
                if (content.loginCredentials != '') {
                    $('#teamsUserName').html("User Name <span class='float-right badge bg-danger'>" + content.loginCredentials.teamsUserName + "</span>");


                    $('#doctorcollapseTwo').html(content.loginCredentials.teamsUserName);
                } else {

                    $('#doctorcollapseTwo').removeClass('show');

                }
                if (content.loginCredentials != '') {
                    $('#teamsUserPassword').html("User Password <span class='float-right badge bg-success'>" + content.loginCredentials.teamsUserPassword + "</span>");


                    $('#doctorcollapseThree').html(content.loginCredentials.teamsUserPassword);
                } else {

                    $('#doctorcollapseThree').removeClass('show');
                }


            }
        },
        error: function (xhr, status, error) {
            //console.log('viewProductDetails->error: ', xhr, ", status: ",status, ', error:' ,xhr.responseJSON);

            if (error === true) {
                $('#teamsUserEmail').html("User Email <span class='float-right badge bg-info'>0</span>");
                $('#teamsUserName').html("User Name <span class='float-right badge bg-danger'>0</span>");
                $('#teamsUserPassword').html("User Password <span class='float-right badge bg-success'>0</span>");
                $('#doctorCollapseOne').removeClass('show');
                $('#doctorcollapseTwo').removeClass('show');
                $('#doctorcollapseThree').removeClass('show');
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



function viewUserDetails(users) {
    $('#view-user-Details-modal').modal('show');
    console.log(users);
    console.log(users.email);
    console.log(users.userName);
    console.log(users.password);
    $("#viewName").html(users.fullName);
    $("#viewClientName").html(users.clientId.clientName);
    $("#viewQualification").html(users.qualification);

    $('#userEmail').html("User Email <span class='float-right badge bg-info'>" + users.email + "</span>");
    $('#userCollapseOne').html(users.email);

    $('#UserName').html("User Name <span class='float-right badge bg-info'>" + users.userName
        + "</span>");
    $('#usercollapseTwo').html(users.userName);

    $('#UserPassword').html("Password <span class='float-right badge bg-info'>" + "wenzins" + "</span>");
    $('#usercollapseThree').html('wenzins');


}

//DISSABLE PREVIOUS DATES

function previousDateRoster() {
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
            $('#fromDateOption1').attr('min', maxDate);
            $('#toDateOption1').attr('min', maxDate);
            $('#updatefromDateOption1').attr('min', maxDate);

        }
//ADD DOCTOR UNAVAILABILITY

function addDoctorUnavailability(drObj) {
$("#create-doctor-unavailability-modal").modal('show')
previousDateRoster();
let UmmId = drObj.id;
console.log("Unavailability modal UMM_ID:",UmmId);


  $('#addUnavailabilityBtn').unbind().click(function () {
  let startDate = $("#fromDateOption1").val();
                          let endDate = $("#toDateOption1").val();
                          var Epoch_StartDate = new Date(startDate).getTime()
                          console.log("Start epoch time", Epoch_StartDate);

                          var Epoch_EndDate = new Date(endDate).getTime()
                          console.log("End epoch time", Epoch_EndDate);
                          let Reason = "leave";
                          console.log("date values",Epoch_StartDate,Epoch_EndDate,Reason);

                          let userData;

                          userData = JSON.stringify({
                          "ummId":Number(UmmId),
                          "clientId":Number(CLIENT_ID),
                          "unavailabilityStartDate":Epoch_StartDate,
                          "unavailabilityEndDate":Epoch_EndDate,
                          "reason":Reason
                          })
            $('#createUnavailabilitySpinner').show();
            console.log("json data:",userData)
                //let url = "http://weconnect.wenzins.live:9090/teamsapi/addDoctorUnavailability";
                     $.ajax({
                                 type: 'POST',
                                 data: userData,
                                 contentType: "application/json",
                                 url: CONF_TEAMS_PATH + "/addDoctorUnavailability",

                                 success: function (result) {
                                     $('#createUnavailabilitySpinner').hide();
                                     console.log('success: ', result.error);
                                     if (result.error == true) {
                                         //ToDo: Remove alert message
                                         toastr.error("User teams not created");
                                     } else {

                                         let { content, message, error } = result;
                                         console.log(result);
                                         if (error === false) {
                                             $('#create-doctor-unavailability-modal').modal('hide');

                                             (async () => {
                                                 toastr.success("Doctor Unavailability Added Successfully");
                                                 await sleep();
                                                 loadUserTable();
                                             })()
                                         } else {
                                             alert(result.message);
                                         }
                                     }
                                 },
                                 error: function (xhr, status, error) {
                                     $('#createUnavailabilitySpinner').hide();
                                     console.log('activateLicense->error: ', xhr, ", status: ", status, ', error:', xhr.responseJSON);
                                     if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                                         if (xhr.responseJSON.error === true) {
                                             (async () => {
                                                 toastr.error(xhr.responseJSON.message);
                                                 //await sleep();
                                                 //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                                             })()
                                         }
                                     } else {
                                         //toastr.error(xhr.responseJSON.error);
                                     }
                                 }
                             });



         });

}


//UPDATE DOCTOR UNAVAILABILITY

function updateDoctorUnavailability(unavailObj) {
console.log("update unavailability modal",unavailObj);
$("#update-doctor-unavailability-modal").modal('show')
let UmmId = unavailObj.ummId;
var Displaydate = unavailObj.unavailableDate ? new Date(unavailObj.unavailableDate).toLocaleDateString() : '-';;
console.log(Displaydate);
$('#updatefromDateOption1').val(Displaydate);
previousDateRoster();
  $('#updatesaveHolidayBtn').unbind().click(function () {
            console.log("Update Unavailability modal",CLIENT_ID);

                        let startDate = $("#updatefromDateOption1").val();
                         console.log("Update Unavailability modal",startDate);
                          var Epoch_StartDate = new Date(startDate).getTime()

                          let Reason = "leave";
                          console.log("date values",Epoch_StartDate,Reason);

                          let userData;
                          let unavailableData = {
                          "unavailabilityId":unavailObj.unavailabilityId,
                          "unavailabilityDate":Epoch_StartDate,
                          "reason":Reason
                          }
                        const unavailabilityArray = [];
        		        unavailabilityArray.push(unavailableData);

                          userData = JSON.stringify({
                          "ummId":Number(UmmId),
                          "clientId":Number(CLIENT_ID),
                            "unavailability":unavailabilityArray
                          })
            $('#createUnavailabilitySpinner').show();
            console.log("json data:",userData)

                //let url = "http://weconnect.wenzins.live:9090/teamsapi/addDoctorUnavailability";
                     $.ajax({
                                 type: 'PUT',
                                 data: userData,
                                 contentType: "application/json",
                                 url: CONF_TEAMS_PATH + "/updateDoctorUnavailability",

                                 success: function (result) {
                                     $('#createUnavailabilitySpinner').hide();
                                     console.log('success: ', result.error);
                                     if (result.error == true) {
                                         //ToDo: Remove alert message
                                         toastr.error("Not Updated");
                                     } else {

                                         let { content, message, error } = result;
                                         console.log(result);
                                         if (error === false) {
                                             $('#update-doctor-unavailability-modal').modal('hide');

                                             (async () => {
                                                 toastr.success("Doctor Unavailability Updated Successfully");
                                                 await sleep();
                                                 unavailabilityTable()
                                                 //loadUserTable();
                                             })()
                                         } else {
                                             alert(result.message);
                                         }
                                     }
                                 },
                                 error: function (xhr, status, error) {
                                     $('#updateaddUnavailableSpinner').hide();
                                     console.log('activateLicense->error: ', xhr, ", status: ", status, ', error:', xhr.responseJSON);
                                     if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON.hasOwnProperty('message')) {
                                         if (xhr.responseJSON.error === true) {
                                             (async () => {
                                                 toastr.error(xhr.responseJSON.message);
                                                 //await sleep();
                                                 //window.location.href = (ROLE === "Wrizto Super Admin" || ROLE === "Wrizto Admin") ? './login' : './cLogin';
                                             })()
                                         }
                                     } else {
                                         //toastr.error(xhr.responseJSON.error);
                                     }
                                 }
                             });

         });

}

//ADD DEFAULT TIME FIELDS TO FORM

function addToSunform() {
        $.ajax({
                    type: 'GET',
                    url: CONF_TEAMS_PATH + "/getRoster?clientId=" + CLIENT_ID + "&ummId=" + ummId,
                    //headers: { "Authorization": 'Bearer ' + JWT_TOKEN },
                    success: function (result) {
                    console.log("Get roster",result);
                    let rosterData = result.content.doctorRoster;
                    let sundayRoster = rosterData.sunday;


                    }
            })
}





