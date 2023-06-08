
<!DOCTYPE html>
<html lang="en">

<head>
    <base  href="./" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Manage Appointments</title>

     <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="resources/plugins/fontawesome-free/css/all.min.css">
        <!-- Select2 -->
        <link rel="stylesheet" href="resources/plugins/select2/css/select2.min.css">
        <!-- jsGrid -->
        <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid.min.css">
        <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid-theme.min.css">
        <!-- Datatable -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.css" />
        <!-- Toastr -->
        <link rel="stylesheet" href="resources/css/toastr.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="resources/css/adminlte.min.css">
        <!-- Toastr style-->
        <link rel="stylesheet" href="resources/css/toastr.min.css">
        <link rel="stylesheet" href="resources/css/pristine.css">
</head>

<body class="hold-transition sidebar-mini">

    <style>
        .sidebar-active > a {
            background-color: dimgray;
        }

        .sub-sidebar-active > a {
            background-color: dimgray;
        }
    </style>
    <!-- Site wrapper -->
    <div class="wrapper">
        <div>
            <!-- Navbar -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i
                                class="fas fa-bars"></i></a>
                    </li>

                </ul>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Navbar Search -->


                    <!-- Messages Dropdown Menu -->

                    <!-- Notifications Dropdown Menu -->


                </ul>
            </nav>
            <!-- /.navbar -->
        </div><!-- Hide Navbar-->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="./products" class="brand-link">
                <img src="resources/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                    style="opacity: .8">
                <span class="brand-text font-weight-light">User Portal</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="resources/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block portal-user-name">Alexander Pierce</a>
                    </div>
                </div>

                <!-- SidebarSearch Form -->
                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                            aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        <!--
                         <li class="nav-item">
                             <a href="./dashboard" class="nav-link hide-unauth hide-admin-unauth">
                                 <i class="nav-icon fas fa-tachometer-alt"></i>
                                 <p>
                                     Dashboard
                                 </p>
                             </a>
                         </li>
                         -->
                        <li class="nav-item">
                            <a href="./distributors" class="nav-link hide-unauth">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Distributors
                                </p>
                            </a>
                        </li>
                            <li class="nav-item" id="menu-item-client">
                            <a href="./clients" class="nav-link hide-unauth">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Clients
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="./products" class="nav-link">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Products
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="./users" class="nav-link">
                                <i class="nav-icon fas fa-users-cog"></i>
                                <p>
                                    Manage Users
                                </p>
                            </a>
                        </li>

                        <li class="nav-item ">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Manage Package
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="./consumers" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Patient Management</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="./packages" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Package Management</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-active">
                            <a href="./consultation" class="nav-link">
                                <i class="nav-icon fas fa-history"></i>
                                <p>
                                    Manage Appointments
                                </p>
                            </a>
                        </li>
                        <!--
          <li class="nav-item">
              <a href="logs" class="nav-link">
                  <i class="nav-icon fas fa-history"></i>
                  <p>
                      Manage Audit Log
                  </p>
              </a>
          </li>

          <li class="nav-item">
              <a href="tickets" class="nav-link">
                  <i class="nav-icon fas fa-headset"></i>
                  <p>
                      Manage Tickets
                  </p>
              </a>
          </li>
          -->

                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Manage Appointments</h1>
                        </div>
                        <div class="col-sm-3"></div>
                        <div class="col-sm-3">

                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
                                <li class="breadcrumb-item active">Manage Appointments</li>
                            </ol>
                            <!--
            <div class="form-group">
                <label style="margin-bottom:0px;font-size:12px">Filter Client:</label>
                <select class="select2" style="width: 100%;margin-bottm:0px">
                    <option selected>All</option>
                    <option >Apollo-BNG</option>
                    <option>Sparsh-BNG</option>
                </select>
            </div>
             -->
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-primary card-outline card-tabs">
                                <div class="card-header p-0 pt-1 border-bottom-0">
                                    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
                                                href="#custom-tabs-one-home" role="tab"
                                                aria-controls="custom-tabs-one-home" aria-selected="true">Upcoming</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill"
                                                href="#custom-tabs-one-profile" role="tab"
                                                aria-controls="custom-tabs-one-profile" aria-selected="false"
                                                onclick='loadCompletedTable()'>Completed</a>
                                        </li>
                                        <!-- <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill"
                                                href="#custom-tabs-one-messages" role="tab"
                                                aria-controls="custom-tabs-one-messages" aria-selected="false"
                                                onclick='loadSerTypeTable()'>Service Type</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill"
                                                href="#custom-tabs-one-settings" role="tab"
                                                aria-controls="custom-tabs-one-settings" aria-selected="false"
                                                onclick='loadPackCategoryTable()'>Category</a>
                                        </li> -->
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-one-tabContent">
                                        <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-home-tab">
                                            <!-- <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" onclick="addPackage();"
                                                    data-toggle="modal" data-target="#add-package-modal">
                                                    Add Package
                                                </button>
                                            </div> -->
                                            <!-- /.card-header -->
                                            <div style="display:none; " id="upcoming_table-spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>

                                            <div style="display:none;" id="upcoming_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="upcoming_table" class="display" style="width:100%">
                                                <thead bgcolor="#FFFFFF">
                                                    <tr>
                                                        <th>UHID</th>
                                                        <th>Patient Name</th>
                                                        <th>Age/Gender</th>
                                                        <th>Status</th>
                                                        <th>Appointment Date and Time</th>
                                                        <th>Type</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>UHID</th>
                                                        <th>Patient Name</th>
                                                        <th>Age/Gender</th>
                                                        <th>Status</th>
                                                        <th>Appointment Date and Time</th>
                                                        <th>Type</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-profile-tab">

                                            <div style="display:none; " id="completed_table_spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>
                                            <div style="display:none;" id="completed_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="completed_table" class="display" style="width:100%">
                                                <thead bgcolor="#FFFFFF">
                                                    <tr>
                                                        <th>UHID</th>
                                                        <th>Patient Name</th>
                                                        <th>DOB/Gender</th>

                                                        <th>Appointment Date and Time</th>
                                                        <th>Duration</th>
                                                        <th>Reason For Cancel</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>UHID</th>
                                                        <th>Patient Name</th>
                                                        <th>Dob/Gender</th>

                                                        <th>Appointment Date and Time</th>
                                                        <th>Duration</th>
                                                        <th>Reason For Cancel</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>


                                    </div>
                                </div>
                                <!-- /.card -->
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 1.1.0
            </div>
            <strong>Copyright &copy; 2021-2022 <a href="http://wrizto.com">wrizto.com</a>.</strong> All rights reserved.
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>


    <!-- Await Modal -->
    <div class="modal fade" id="await-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h4 class="modal-title">Confirm Appointment</h4> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="invite" autocomplete="off">
                        <div class="card-body">
                            <h3>Do you like to confirm Appointment?</h3>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="inviteConfirmBtn" type="button"
                                class="btn btn-primary"> <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: right;" id="confirmAppointmentSpinner"></span>Confirm</button>
                         </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Reshedule modal -->

    <div class="modal fade" id="Reshedule-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h4 class="modal-title">Add New Package</h4> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="invite-reshedule-modal" autocomplete="off">
                        <div class="card-body">
                            <h3>Do you like to Reshedule the Appointment?</h3>

                            <div>
                                <label for="reasonReshedule">Reason for Reshedule<span style="color:red" class="required">*</span></label>
                                <input type="text" class="form-control" id="reasonReshedule"
                                    placeholder="Enter text here..." maxlength="200">
                            </div>
                            <div >
                                <label for="alternateDate">Alternate Date<span style="color:red" class="required">*</span></label>
                                <input type="datetime-local" class="form-control" id="alternateDate"
                                placeholder="Select alternate date and time">
                            </div>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">

                            <button id="cancelAwaitBtn" type="button" onclick=""
                            class="btn btn-primary">Reshedule</button>

                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <div class="modal fade" id="Cancel-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h4 class="modal-title">Add New Package</h4> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="invite-Cancel" autocomplete="off">
                        <div class="card-body">
                            <h3>Do you like to Cancel the Appointment?</h3>

                            <div >

                                <label for="reasonCancel">Reason for Cancel<span style="color:red" class="required">*</span></label>
                                <input type="text" onkeydown="return /[a-z, '']/i.test(event.key)" class="form-control" id="reasonCancel" minlength="2" maxlength="32"
                                    placeholder="Text here..">
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">

                            <button id="cancelTeamsBtn" type="button" onclick=""
                                class="btn btn-primary"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: right;" id="cancelTeamsSpinner"></span>Submit</button>

                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


     <!-- jQuery -->
        <script src="resources/plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap 4 -->
        <script src="resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- Select2 -->
        <script src="resources/plugins/select2/js/select2.full.min.js"></script>
        <!-- jsGrid -->
        <script src="resources/plugins/jsgrid/demos/db.js"></script>
        <script src="resources/plugins/jsgrid/jsgrid.min.js"></script>
        <!-- DataTables  & Plugins -->
        <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.js"></script>
        <!-- Toastr -->
        <script src="resources/js/toastr.min.js"></script>
        <!-- AdminLTE App -->
        <script src="resources/js/adminlte.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="resources/js/demo.js"></script>
        <!-- Toastr -->
        <script src="resources/js/toastr.min.js"></script>
        <!-- Pristine -->
        <!-- <script src="resources/js/pristine.min.js"></script> -->
    <!-- Page specific script -->
    <script src="resources/custom/js/consultation.js"></script>
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/logout.js"></script>

    <script>
     $(function () {
              $("#Cancel-modal").on("hidden.bs.modal", function (e) {
              console.log("Modal hidden");
              $("#invite-Cancel").trigger("reset");
              });
           })
     $(function () {
                   $("#Reshedule-modal").on("hidden.bs.modal", function (e) {
                   console.log("Modal hidden");
                   $("#invite-reshedule-modal").trigger("reset");
                   });
                })
    </script>

</body>

</html>