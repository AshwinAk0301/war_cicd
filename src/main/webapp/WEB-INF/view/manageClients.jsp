<!DOCTYPE html>
<html lang="en">

<head>
    <base href="./" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Clients Page</title>

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
</head>

<style>
    .sidebar-active>a {
        background-color: dimgray;
    }
</style>

<body class="hold-transition sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">
        <div style="display:none;">
            <!-- Hide Navbar-->
            <!-- Navbar -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i
                                class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Navbar Search -->
                    <li class="nav-item">
                        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i class="fas fa-search"></i>
                        </a>
                        <div class="navbar-search-block">
                            <form class="form-inline">
                                <div class="input-group input-group-sm">
                                    <input class="form-control form-control-navbar" type="search" placeholder="Search"
                                        aria-label="Search">
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <!-- Messages Dropdown Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="resources/img/user1-128x128.jpg" alt="User Avatar"
                                        class="img-size-50 mr-3 img-circle">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i
                                                    class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can...</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="resources/img/user8-128x128.jpg" alt="User Avatar"
                                        class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i
                                                    class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="resources/img/user3-128x128.jpg" alt="User Avatar"
                                        class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i
                                                    class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <!-- Notifications Dropdown Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i class="fas fa-th-large"></i>
                        </a>
                    </li>
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
                        <li class="nav-item">
                            <a href="./dashboard" class="nav-link hide-unauth hide-admin-unauth">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="./distributors" class="nav-link">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Distributors
                                </p>
                            </a>
                        </li>

                        <li class="nav-item sidebar-active">
                            <a href="./clients" class="nav-link">
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
                            <a href="./users" class="nav-link ">
                                <i class="nav-icon fas fa-users-cog"></i>
                                <p>
                                    Manage Users
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link hide-admin-unauth">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Manage Package
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="./consumers" class="nav-link hide-admin-unauth">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Patient Management</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="./packages" class="nav-link hide-admin-unauth">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Package Management</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                            <li class="nav-item">
                            <a href="./consultation" class="nav-link hide-admin-unauth">
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
                            <h1>Manage Clients</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
                                <li class="breadcrumb-item active">Manage Clients</li>
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="col-3">
                                        <button type="button" class="btn btn-primary" onclick="loadVcProvider();" data-toggle="modal"
                                            data-target="#invite-client-modal">
                                            Add Client
                                        </button>
                                        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#update-client-modal">
                    Update Client
                    </button> -->
                                        <!-- <h3 class="card-title"></h3> -->
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <div style="display:none;" id="client-table-spinner">
                                            <span class="spinner-grow spinner-grow-sm" role="status"
                                                style="margin-right:5px;" aria-hidden="true"></span>Loading Table..
                                        </div>
                                        <div style="display:none;" id="client-table-error">
                                            No Data Found!!
                                        </div>
                                        <table id="clientTable" class="display" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Organization</th>
                                                    <th>Client Id</th>
                                                    <th>Address</th>
                                                    <th>Total Products</th>
                                                    <th>Status</th>
                                                    <th>Last Updated</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Organization</th>
                                                    <th>Client Id</th>
                                                    <th>Address</th>
                                                    <th>Total Products</th>
                                                    <th>Status</th>
                                                    <th>Last Updated</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->


                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Client Invite Modal -->
        <div class="modal fade" id="invite-client-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Client</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="inviteOrganization" autocomplete="off">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="inviteClientName">Organization Name<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteClientName"
                                    minlength="2" maxlength="32"    placeholder="Enter Fullname">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientPhone">Contact Person Mobile No<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" placeholder="Contact No." id="inviteClientPhone" name="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 10 digits"  maxlength="10" required/>
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientEmail">Contact Person Email<span style="color:red" class="required">*</span></label>
                                    <input type="email" class="form-control" id="inviteClientEmail"
                                        placeholder="Enter Email">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientAddLine1">Organization Address Line 1<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteClientAddLine1"
                                     minlength="2" maxlength="150"   placeholder="Enter Line 1">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientAddLine2">Address Line 2 (Opt.)</label>
                                    <input type="text" class="form-control" id="inviteClientAddLine2"
                                     minlength="2" maxlength="150"   placeholder="Enter Line 2">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientCity">Organization City<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteClientCity"
                                     minlength="2" maxlength="32"   placeholder="Enter City">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientState">Organization State<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteClientState"
                                     minlength="2" maxlength="32"   placeholder="Enter State">
                                </div>
                                <div class="form-group">
                                    <label for="inviteClientPinCode">Organization Pincode<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteClientPinCode"
                                        placeholder="Enter Pincode" onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 6 digits"  maxlength="6" required />
                                </div>

                                <div class="form-group">
                                <div>
                                    <label for="invitePackages">Packages</label>
                                    <input type="checkbox" class="defaultcheckbox"  id="invitePackages" name="packages" />


                                     <label for="inviteAppointments">Appointments</label>
                                     <input type="checkbox" class="defaultcheckbox" id="inviteAppointments" onchange="isAppointments();" name="appointments"/>
                                     </div>
                                </div>
                                <div class="form-group" id="videocallTextField" name="extra" style="display: none">
                                    <div class="form-group">
                                   <label>VC Provider<span style="color:red" class="required">*</span></label>
                                    <select id="vcProvider" class="form-control select2" placeholder="Select" style="width: 100%;"></select>

                                   <label>Authorization Id<span style="color:red" class="required">*</span></label>
                                    <select id="authorizationId" class="form-control select2" placeholder="Select" style="width: 100%;"></select>
                                   </div>
                                <div class="form-group">
                                <label for="invitemaxVcLicense">Max.VC License<span style="color:red" class="required">*</span></label>
                                <input type="text" class="form-control" id="invitemaxVcLicense" style="width: 100%;"
                               placeholder="Enter Max.VC License" onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  maxlength="3" required />
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button id="addClientButton" onclick="addClient();" type="button" class="btn btn-primary">
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none;" id="addClientSpinner"></span>
                            Add</button>

                        <button id="clientResetBtn" type="reset" class="btn btn-secondary">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                          style="display:none;" id="resetclientSpinner"></span>
                            Reset</button>
                    </div>
                </div>
                <!-- /.card-body -->

                </form>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Create teams account Client modal-->

        <div class="modal fade" id="create-teams-client-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create Teams Account</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="invite" autocomplete="off">
                            <div class="card-body" id="createAccount">
                              <h3>Do you like to create teams account?  </h3>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="createClientTeams" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="createClientSpinner"></span>
                                    Create
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>




 <!-- Create Channel Client modal-->

        <div class="modal fade" id="create-channel-client-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create Channel</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="inviteChannel" autocomplete="off">
                            <div class="card-body" id="createChannel">
                              <h3>Do You Like To Create Channel?  </h3>
                              <!----<div class="col-xs-12 col-sm-8 col-lg-8">
                              //<label for="inviteMacAddress">Description<span style="color:red" class="required">*</span></label>
                                  //<input type="text" class="form-control" id="inviteChannelDescription"
                                  // onkeydown="return /[a-z0-9A-Z:]/i.test(event.key)"   placeholder="Description" name="macaddress" pattern="^[a-zA-Z\s]+$" maxlength="32" minlength="2" title="Please enter exactly 17 digits alphaneumaric" required/>
                                 // </div>--->
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="createClientChannel" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="createChannelSpinner"></span>
                                    Create
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>


 <!-- Upload logo in Client modal-->

        <div class="modal fade" id="upload-logo-client-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Upload Logo</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="upload-form-logo-modal" autocomplete="off">
                            <div class="card-body" id="uploadLogo">
                                <div class="form-group">
                                 <label for="uploadformLogo">Upload Logo</label>
                                 <div class="input-group">
                                     <div class="custom-file">
                                     <input type="file" accept=".png " name="fileUpload"  id="uploadformLogo" >
                                      <label class="custom-file-upload" for="uploadResume" ></label>

                                     </div>
                                 </div>
                             </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="uploadClientLogo" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="uploadClientSpinner"></span>
                                    Upload
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>


 <!--Update Upload logo in Client modal-->

 <div class="modal fade" id="update-logo-client-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Update Logo</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="#" id="update-logo-modal" autocomplete="off">
                    <div class="card-body" id="updateUploadLogo">
                        <div class="form-group">
                         <label for="uploadformLogo">Update Logo</label>
                         <div class="input-group">
                             <div class="custom-file">
                             <input type="file" accept=".png " name="fileUpload"  id="UpdateUploadformLogo" >
                              <label class="custom-file-upload" for="UpdateUploadformLogo" ></label>

                             </div>
                         </div>
                     </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button id="UpdateUploadClientLogo" type="button" class="btn btn-primary">
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                            style="display:none; text-align: center;" id="UpdateUploadClientSpinner"></span>
                            Update
                        </button>

                    </div>
                </form>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>






<!-- Logout pop up for Client modal-->

        <div class="modal fade" id="create-logout-client-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="invite" autocomplete="off">
                            <div class="card-body" id="createAccount">
                              <h3>Do you like to Logout from this page?  </h3>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="createClientTeams" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="createClientSpinner"></span>
                                    Yes
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    <!-- Client Update Modal -->
    <div class="modal fade" id="update-client-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update Client</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="updateClientName">Organization Name</label>
                                <input type="text" class="form-control" id="updateClientName"
                                    placeholder="Enter Fullname">
                            </div>
                            <div class="form-group">
                                <label for="updateClientPhone">Contact Person Phone No</label>
                                <input type="number" class="form-control" id="updateClientPhone"
                                    placeholder="Enter Mobile">
                            </div>
                            <div class="form-group">
                                <label for="updateClientEmail">Contact Person Email</label>
                                <input type="email" class="form-control" id="updateClientEmail"
                                    placeholder="Enter Email">
                            </div>
                            <div class="form-group">
                                <label for="updateClientAddLine1">Organization Address Line 1</label>
                                <input type="text" class="form-control" id="updateClientAddLine1"
                                    placeholder="Enter Line 1">
                            </div>
                            <div class="form-group">
                                <label for="updateClientAddLine2">Organization Address Line 2 (Opt.)</label>
                                <input type="text" class="form-control" id="updateClientAddLine2"
                                    placeholder="Enter Line 2">
                            </div>
                            <div class="form-group">
                                <label for="updateClientName">Organization City</label>
                                <input type="text" class="form-control" id="updateClientCity" placeholder="Enter City">
                            </div>
                            <div class="form-group">
                                <label for="updateClientState">Organization State</label>
                                <input type="text" class="form-control" id="updateClientState"
                                    placeholder="Enter State">
                            </div>
                            <div class="form-group">
                                <label for="updateClientPinCode">Organization Pincode</label>
                                <input type="number" class="form-control" id="updateClientPinCode"
                                    placeholder="Enter Pincode">
                            </div>


                                <div class="form-group">
                                <div>
                                    <label for="updatePackages">Packages</label>
                                    <input type="checkbox" class="defaultcheckbox"  id="updatePackages" name="packages" />


                                     <label for="updateAppointments">Appointments</label>
                                     <input type="checkbox" class="defaultcheckbox" onchange="updateIsAppointment();" id="updateAppointments" name="appointments"/>
                                     </div>
                                </div>
                                <div class="form-group" id="UpdatevideocallTextField" name="UpdatevideocallTextField" style="display: none">
                                <div class="form-group">
                                   <label for="updateVcProvider">VC Provider</label>
                                    <select id="updateVcProvider" class="form-control select2" placeholder="Select" style="width: 100%;"></select>

                                    <label for="updateVcId">VideoCall ID</label>
                                    <select id="updateVcId" class="form-control select2" placeholder="Select" style="width: 100%;"></select>
                                 </div>

                                <div class="form-group">
                                    <label for="updateVcLicense">Max. VC License<span style="color:red" class="required">*</span></label>
                                    <input type="Number" class="form-control" id="updateVcLicense"
                                    placeholder="Enter Max. License" onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  required />
                                </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button id="updateClientButton" type="button" class="btn btn-primary">Update</button>
                </div>
            </div>
            <!-- /.card-body -->


            </form>
        </div>
    </div>
    <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

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
    <!-- ./wrapper -->

    <!-- jQuery -->

    <script src="resources/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
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
    <!-- Page specific script -->
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/clients.js"></script>
    <script src="resources/custom/js/logout.js"></script>
<script>
    $(function () {
        $("#invite-client-modal").on("hidden.bs.modal", function (e) {
           console.log("Modal hidden");
              $("#inviteOrganization").trigger("reset");
           });
    })

    $('#clientResetBtn').click(function(){
        $('#inviteOrganization')[0].reset();
    });



$(function () {
        $("#upload-logo-client-modal").on("hidden.bs.modal", function (e) {
           console.log("Modal hidden");
              $("#upload-form-logo-modal").trigger("reset");
           });
    })

    $(function () {
            $("#create-channel-client-modal").on("hidden.bs.modal", function (e) {
               console.log("Modal hidden");
                  $("#inviteChannel").trigger("reset");
               });
        })

function isAppointments() {

var y=$("#inviteAppointments").is(":checked");

console.log("Appont is checked", y)
$("#videocallTextField").hide();
if (y == false){
$("#videocallTextField").hide();
}else if(y == true){
$("#videocallTextField").show();
}

}

function updateIsAppointment() {

var y=$("#updateAppointments").is(":checked");

console.log("Appont is checked", y)

if (y == false){
$("#UpdatevideocallTextField").hide();
}else if(y == true){
$("#UpdatevideocallTextField").show();

}

}


    </script>



</body>

</html>