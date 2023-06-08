<!DOCTYPE html>
<html lang="en">

<head>
    <base class="base_context_path" href="" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Manage User Page</title>

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
        .sidebar-active>a {
            background-color: dimgray;
        }

        .sub-sidebar-active>a {
            background-color: blue;
        }
        .modal-content {
        width: 150%;
    }
    hr {
        width: 100%;
        height: 3px;
        margin-left: auto;
        margin-right: auto;
        background-color: hsla(0, 0%, 3%, 0.281);
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
                    <li class="nav-item">

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

                        </a>


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

                        <li class="nav-item sidebar-active">
                            <a href="./users" class="nav-link">
                                <i class="nav-icon fas fa-users-cog"></i>
                                <p>
                                    Manage Users
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link hide-admin-unauth" id="managePackagesUser">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Manage Package
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="./consumers" class="nav-link hide-admin-unauth" id="patientManagementUser">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Patient Management</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="./packages" class="nav-link hide-admin-unauth" id="packageManagementUser">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Package Management</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="./consultation" class="nav-link hide-admin-unauth" id="manageAppointmentsUser">
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
                            <h1>Manage Users</h1>
                        </div>
                        <div class="col-sm-3"></div>
                        <div class="col-sm-3">

                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
                                <li class="breadcrumb-item active">Manage Users</li>
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
                                            <a class="nav-link active" id="custom-tabs-one-user-tab" data-toggle="pill"
                                                href="#custom-tabs-one-user" role="tab"
                                                aria-controls="custom-tabs-one-user" aria-selected="true">Users</a>
                                        </li>
                                        <li class="nav-item">
                                           <a class="nav-link" id="custom-tabs-one-unavailable-tab" data-toggle="pill"
                                              href="#custom-tabs-one-unavailable" role="tab"
                                                  aria-controls="custom-tabs-one-unavailable" aria-selected="false"
                                                     onclick='unavailabilityTable()'>Unavailability</a>
                                        </li>
                            </ul>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">

                                <div class="tab-content" id="custom-tabs-one-tabContent">
                                        <div class="tab-pane fade show active" id="custom-tabs-one-user" role="tabpanel" aria-labelledby="custom-tabs-one-hom-tab">
                                            <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" onclick="inviteUser(true);" data-toggle="modal" data-target="#invite-user-modal">
                                                Add User
                                                </button>
                                            </div>
                                    <div style="display:none;" id="user-table-spinner">
                                        <span class="spinner-grow spinner-grow-sm" role="status"
                                            style="margin-right:5px;" aria-hidden="true"></span>Loading Table..
                                    </div>
                                    <div style="display:none;" id="user-table-error">
                                        No Data Found!!
                                    </div>
                                    <table id="userTable1" class="display" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <!-- <th>Authorized Products</th> -->
                                                <th>Created Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <!-- <th>Authorized Products</th> -->
                                                <th>Created Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="tab-pane fade show" id="custom-tabs-one-unavailable" role="tabpanel" aria-labelledby="custom-tabs-one-unavailable-tab">
                                           <!--- <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" onclick="addDoctorUnavailability();" data-toggle="modal" >
                                                Add Unavailability
                                                </button>
                                            </div>--->
                                    <div style="display:none;" id="unavailabl-table-spinner">
                                        <span class="spinner-grow spinner-grow-sm" role="status"
                                            style="margin-right:5px;" aria-hidden="true"></span>Loading Table..
                                    </div>
                                    <div style="display:none;" id="unavailable-table-error">
                                        No Data Found!!
                                    </div>
                                    <table id="unavailableTable1" class="display" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>

                                                <th>Doctor Id</th>
                                                <th>Unavailable Date</th>
                                                <!-- <th>Authorized Products</th> -->
                                                <th>LastUpdated Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Doctor Name</th>

                                                <th>Doctor Id</th>
                                                <th>Unavailable Date</th>
                                                <!-- <th>Authorized Products</th> -->
                                                <th>LastUpdated Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                </div>
                                <!-- /.card-body -->
                                </div>
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

    <!-- Modal Section -->
    <div class="modal fade" id="update-user-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update User</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="update" autocomplete="off">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="updateFormName">Full Name</label>
                                <input type="text" class="form-control" id="updateFormName" placeholder="Enter Fullname"
                                    minlength="3" maxlength="20" required
                                    data-pristine-min-message="Enter atleast 3 characters" required autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="updateFormEmail">Email</label>
                                <input type="email" class="form-control" id="updateFormEmail" placeholder="Enter Email"
                                    type="email" data-pristine-email-message="Enter valid email">
                            </div>
                            <div class="form-group">
                                <label>Gender</label>
                                <select id="genderSelector1" class="form-control select2" style="width: 100%;"></select>
                            </div>

                            <div class="form-group">
                                <label id="clientSelector1Label">Organization</label>
                                <select id="clientSelector1" class="form-control select2" style="width: 100%;"></select>
                            </div>
                            <div class="form-group">
                                <label for="updateFormEmpId">Employee Id (Opt.)</label>
                                <input type="text" class="form-control" id="updateFormEmpId" placeholder="Enter Id">
                            </div>
                            <div class="form-group">
                                <label for="updateFormDesignation">Designation (Opt.)</label>
                                <input type="text" class="form-control" id="updateFormDesignation"
                                    placeholder="Enter Designation">
                            </div>
                            <div class="form-group" id="updateQualificationField">
                                <label for="updateFormQualification">Qualification (Opt.)</label>
                                <input type="text" class="form-control" id="updateFormQualification"
                                    placeholder="Enter Qualification">
                            </div>
                            <div class="form-group">
                                <label>Role</label>
                                <select id="roleSelector1" value="Doctor" onchange="updateCheckIfDoctor()" class="form-control select2" style="width: 100%;"></select>
                            </div>
                            <div class="form-group" id="updateExtra" name="updateExtra" style="display: none">
                                <div>
                                    <div class="form-group">
                                        <label for="updateQualification">Qualification</label>
                                        <input type="text" class="form-control" id="updateQualification"
                                            placeholder="Enter Qualification">
                                    </div>
                              </div>

                              <div class="form-group">
                                <div >
                                <label >Specialization</label>
                                <select id="updateSpecialization"  name="states[]" multiple="multiple" class="js-example-basic-multiple form-control" style="width: 100%;"
                                    required>

                               </select>
                            </div>
                            </div>
                            <div class="form-group">
                                <label for="updateFormExperience">Experience</label>
                                <input type="number" class="js-example form-control" id="updateFormExperience"
                                placeholder="Enter Experience" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <div >
                                <label >Consultation Type</label>
                                <select id="updateconsultationType"  multiple="multiple" class="js-example-basic-multiple form-control" style="width: 100%;"
                                    required>

                            </select>

                            </div>
                            </div>
                             <div class="form-group">
                                <div >
                                <label >Language</label>
                                <select id="updateLanguageSelector"  name="states[]" multiple="multiple" class="js-example-basic-multiple form-control" style="width: 100%;"
                                    required>

                               </select>
                            </div>
                            </div>
                            <div>
                                <div class="input-group">

                                    <div class="input-group-append" style="width: 100%;">
                                        <input type="number" id="updateinviteCharges" placeholder="Enter Consultation fee" class="form-control" aria-label="Text input with dropdown button">
                                      <select type="text" id="updateselectCurrency" class="form-control" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" >

                                  </select>
                                    </div>
                                  </div>
                                <div class="form-group">
                                    <label for="updateHospetalAddress">Hospital Address</label>
                                    <input type="text" class="form-control" id="updateHospetalAddress"
                                    placeholder="Enter Hospital Address" autocomplete="off">
                                </div>
                          </div>

                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select id="statusSelector1" class="form-control select2" style="width: 100%;"></select>
                            </div>
                            <div class="form-group">
                                <label for="profilePicFile">Profile Image (Opt.)</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="profilePicFile1">
                                        <label class="custom-file-label" for="profilePicFile1">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="updateBtn" type="button" onclick="updateUser(false);"
                                class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none;" id="updateUserSpinner"></span>
                                Update</button>
                        </div>
                    </form>
                </div>

            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- User Details Modal -->
    <div class="modal fade" id="user-details-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">User Details</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card card-widget widget-user">
                        <!-- Add the bg color to the header using any of the bg-* classes -->
                        <div class="widget-user-header bg-info">
                            <h3 id="userName1" class="widget-user-username">Alexander Pierce</h3>
                            <h5 class="widget-user-desc">Doctor</h5>
                        </div>
                        <div class="widget-user-image">
                            <img id="userPic1" class="img-circle elevation-2" src="resources/img/user1-128x128.jpg"
                                alt="User Avatar">
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 class="description-header">4</h5>
                                        <span class="description-text">Kits Assigned</span>
                                    </div>
                                    <!-- /.description-block -->
                                </div>
                                <!-- /.col -->
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 id="userPhone1" class="description-header">990011223399</h5>
                                        <span class="description-text">Mobile</span>
                                    </div>
                                    <!-- /.description-block -->
                                </div>
                                <!-- /.col -->
                                <div class="col-sm-4">
                                    <div class="description-block">
                                        <h5 id="userStatus1" class="description-header">Active</h5>
                                        <span class="description-text">Status</span>
                                    </div>
                                    <!-- /.description-block -->
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <!--
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
               -->
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- User Invite Modal -->
    <div class="modal fade" id="invite-user-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Invite User</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="invite">
                        <div class="card-body" id="inviteUser">
                            <div class="form-group">
                                <label for="inviteFormName">Full Name<span style="color:red" class="required">*</span></label>
                                <input type="text" onkeydown="return /[a-z0-9A-Z., '']/i.test(event.key)" class="form-control" id="inviteFormName" minlength="2" maxlength="32" placeholder="Enter Fullname">
                                </div>
                                <div class="form-group">
                                <label for="inviteTeams">Teams ID<span style="color:red" class="required">*</span></label>
                                <input type="text" onkeydown="return /[a-z0-9A-Z.]/i.test(event.key)" class="form-control" id="inviteTeams" minlength="2" maxlength="32" placeholder="Provide Teams ID">

                            </div>
                            <div class="form-group">
                                <label for="inviteFormPhone">Mobile No<span style="color:red" class="required">*</span></label>
                                <input type="text" class="form-control" id="inviteFormPhone" placeholder="Contact NO." onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 10 digits"  maxlength="10" required/>

                            </div>
                            <div class="form-group">
                                <label for="inviteFormEmail">Email<span style="color:red" class="required">*</span></label>
                                <input type="email"  onkeydown="return /[a-z0-9A-Z.!#$^_@,]/i.test(event.key)" class="form-control" id="inviteFormEmail" placeholder="Enter Email"
                                    type="email" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label>Gender<span style="color:red" class="required">*</span></label>
                                <select id="genderSelector" class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group">
                                <label id="clientSelectorLabel">Organization<span style="color:red" class="required">*</span></label>
                                <select id="clientSelector" class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group">
                                <label for="inviteFormEmpId">Employee Id (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormEmpId" placeholder="Enter Id"
                                 minlength="2" maxlength="32"   autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="inviteFormDesignation">Designation (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormDesignation"
                                minlength="2" maxlength="32"    placeholder="Enter Designation" autocomplete="off">
                            </div>
                            <div class="form-group" id="FormQualification">
                                <label for="inviteFormQualification">Qualification (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormQualification"
                                 minlength="2" maxlength="32"   placeholder="Enter Qualification" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label>Role<span style="color:red" class="required">*</span></label>
                                <select id="roleSelector"  onchange='checkIfDoctor()' class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group" id="FormUsername">
                                <label for="inviteFormUsername">Username</label>
                                <input type="text" class="form-control" id="inviteFormUsername"
                                 minlength="2" maxlength="32"   placeholder="Enter Your Username" autocomplete="off">
                            </div>
                            <div class="form-group" id="FormPassword">
                                <label for="inviteFormPassword">Password</label>
                                <input type="password" class="form-control" id="inviteFormPassword"
                                  minlength="2" maxlength="32"  placeholder="Enter Your Password" autocomplete="off">
                            </div>
                            <div class="form-group" id="extra" name="extra" style="display: none">
                            <div>
                                <div class="form-group">
                                    <label for="inviteQualification">Qualification<span style="color:red" class="required">*</span></label>
                                    <input type="text" class="form-control" id="inviteQualification"
                                     minlength="2" maxlength="32"   placeholder="Enter Qualification">
                                </div>
                          </div>

                          <div class="form-group">

                            <label >Specialization<span style="color:red" class="required">*</span></label>
                            <select id="Specialization"   multiple="multiple" class="js-example-basic-multiple form-control select2" style="width: 100%;"
                                required>
                           </select>

                        </div>
                        <div class="form-group">
                            <label for="inviteAboutDoctor">About Doctor<span style="color:red" class="required">*</span></label>
                            <input type="text" class="js-example form-control" id="inviteAboutDoctor"
                          minlength="2" maxlength="150"  placeholder="Enter your text here..." autocomplete="off" maxlength="100">
                        </div>
                        <div class="form-group">
                            <label for="inviteFormExperience">Experience<span style="color:red" class="required">*</span></label>
                            <input type="number" class="js-example form-control" id="inviteFormExperience"
                            placeholder="Enter Experience" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <div >
                            <label >Consultation Type<span style="color:red" class="required">*</span></label>
                            <select id="consultationType"  multiple="multiple" class="js-example-basic-multiple form-control" style="width: 100%;"
                                required>
                     </select>

                        </div>
                        </div>
                         <div class="form-group">
                            <div >
                            <label >Language<span style="color:red" class="required">*</span></label>
                            <select id="LanguageSelector"  name="Select Language" multiple="multiple" class="js-example-basic-multiple form-control" style="width: 100%;">

                           </select>
                        </div>
                        </div>

                            <div class="input-group">
                                <label>Consultation Fee<span style="color:red" class="required">*</span></label>
                                <div class="input-group-append" style="width: 100%;">

                                    <input type="number" id="inviteCharges" placeholder="Enter Consultation fee" class="form-control" aria-label="Text input with dropdown button">

                                </div>
                              </div>
                                <div class="input-group">
                                <label>Amount Type<span style="color:red" class="required">*</span></label>

                                  <select type="text" id="selectCurrency" class="form-control" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" >

                               </select>

                              </div>
                            <div class="form-group">
                                <label for="inviteHospetalAddress">Hospital Address<span style="color:red" class="required">*</span></label>
                                <input type="text" class="form-control" id="inviteHospetalAddress"
                               minlength="2" maxlength="150" placeholder="Enter Hospital Address" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="uploadResume">Upload Resume(Opt.)</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                    <input type="file" accept=".csv,.pdf" name="fileUpload"  id="uploadResume" >
                                     <label class="custom-file-upload" for="uploadResume" ></label>

                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="form-group">
                                <label for="profilePicFile">Profile Image (Opt.)</label>

                                  <div class="input-group">
                                     <div class="custom-file">
                                       <input type="file" accept=".csv,.pdf,.png" name="fileUpload"  id="profilePicFile" >
                                          <label class="custom-file-upload" for="profilePicFile" ></label>
                                           </div>
                                         </div>
                            </div>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="inviteBtn" type="button" onclick="inviteUser(false);"class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none;" id="addUserSpinner"></span>
                                Invite</button>
                                <button id="userResetBtn" type="reset" onclick=""class="btn btn-secondary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none;" id="resetSpinner"></span>
                                Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Delete User modal-->

    <div class="modal fade" id="delete-user-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete User In Teams</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="invitedelete" autocomplete="off">
                        <div class="card-body" id="deleteUser">
                          <h3>Would you like to delete the User?  </h3>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="deleteUserBtn" type="button" class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: center;" id="deleteUserSpinner"></span>
                                Delete
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- Create teams account  modal-->

    <div class="modal fade" id="create-teams-account-modal" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Create Teams Account</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" data-backdrop="static"  data-keyboard="false">
                    <form action="#" id="inviteTeamsmodal" autocomplete="off" >
                        <div class="card-body" id="deleteUserTeams">
                          <h3>Do you like to create teams account?  </h3>
                        <h6 style="color:red"> NOTE: Please wait, This Process will Take Some Time!</h6>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="createUserTeams" type="button" class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: center;" id="createUserSpinner"></span>
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

<!-- ./wrapper -->


<!--DOCTOR ROASTER MODAL  -->

<div class="modal fade" id="doctor-roaster-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Create Doctor Roaster</h4>
                <button type="reset" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="#" id="inviteDoctor" autocomplete="off">
                    <div class="card-body" id="doctorRoaster">
                      <!-- <h3>Do you like to create teams account?  </h3> -->
                      <div class="container">
                      <div class="row mt-3">
                           <!---- <b>SELECT DURATION (MINS.)</b>--->
                        </div>
                        <!-----{/* <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                <label >
                                    <input type="radio" name="options" id="option1" checked> 15
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > 20
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > 30
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > Custom

                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-12">
                             <input type="text" class="form-control" name="options" id="option1" placeholder="Enter Custom Duration" >
                        </div>
                    </div> */}---->
                        <div id="doctorAvailability">
                        <div id="timeInput1">
                        <div class="row mt-3">
                            <b>AVAILABILITY</b>
                       </div>

                        <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="option1" > SUNDAY
                              </label>
                            </div>

                         <div class="col-xs-12 col-sm-6 col-lg-3">
                                <input type="time" class="form-control" placeholder="From" name="options" id="fromSunTimeOption" >
                            </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                            <input type="time" class="form-control" placeholder="To" name="options" id="toSunTimeOption" >
                        </div>

                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="appendTime1" type="button" onclick="appendSunTime();"class="btn btn-light rounded-pill">
                             +
                            </button>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="deleteTime1" type="button" onclick="removeTimeInput1();"class="btn btn-light rounded-pill">
                                &times;
                            </button>
                        </div>
                        </div>
                      </div><hr>
                      <div id="timeInput2">
                        <div class="row mt-3">
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <label >
                                <input type="checkbox" name="options" id="option2" > MONDAY
                            </label>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                            <input type="time" class="form-control" placeholder="From" name="options" id="fromMonTimeOption" >
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                             <input type="time" class="form-control" placeholder="To" name="options" id="toMonTimeOption" >
                         </div>
                         <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="appendTime2" type="button" onclick="appendMonTime();"class="btn btn-light rounded-pill">
                             +
                            </button>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="deleteTime2" type="button" onclick="removeTimeInput2();"class="btn btn-light rounded-pill">
                                &times;
                            </button>
                        </div>
                        </div>
                      </div><hr>
                      <div id="timeInput3">
                        <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="option3" > TUESDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="fromTueTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="toTueTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="appendTime3" type="button" onclick="appendTueTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="deleteTime3" type="button" onclick="removeTimeInput3();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="timeInput4">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <label >
                                        <input type="checkbox" name="options" id="option4">WEDNESDAY
                                    </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="fromWedTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="toWedTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="appendTime4" type="button" onclick="appendWedTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="deleteTime4" type="button" onclick="removeTimeInput4();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div>
                                <hr>
                                <div id="timeInput5">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="option5" > THURSDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="fromThuTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="toThuTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="appendTime5" type="button" onclick="appendThuTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="deleteTime5" type="button" onclick="removeTimeInput5();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="timeInput6">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="option6" > FRIDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="fromFriTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="toFriTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="appendTime6" type="button" onclick="appendFriTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="deleteTime6" type="button" onclick="removeTimeInput6();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="timeInput7">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                     <input type="checkbox" name="options" id="option7" > SATURDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="fromSatTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="toSatTimeOption" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="appendTime7" type="button" onclick="appendSatTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="deleteTime7" type="button" onclick="removeTimeInput7();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div>
                                <div class="card-footer">
                                    <button id="saveRoasterBtn" type="button" class="btn btn-primary">
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                        style="display:none; text-align: right;" id="addDoctorSpinner"></span>
                                        Save
                                    </button>
                                </div>
                            </div>
                            </div>

                                </div>
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
  </div>
 </div>
</div>


<!--UPDATE DOCTOR ROASTER MODAL  -->

<div class="modal fade" id="update-doctor-roaster-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Update Doctor Roaster</h4>
                <button type="reset" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="#" id="updateRosterDoctor" autocomplete="off" >
                    <div class="card-body" id="updateDoctorRoaster">
                      <!-- <h3>Do you like to create teams account?  </h3> -->
                      <div class="container">
                      <div class="row mt-3">
                       <b>AVAILABILITY</b>
                           <!---- <b>SELECT DURATION (MINS.)</b>--->
                        </div>
                        <!-----{/* <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                <label >
                                    <input type="radio" name="options" id="option1" checked> 15
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > 20
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > 30
                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-3">
                                  <label >
                                    <input type="radio" name="options" id="option1" > Custom

                                  </label>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-12">
                             <input type="text" class="form-control" name="options" id="option1" placeholder="Enter Custom Duration" >
                        </div>
                    </div> */}---->
                        <div id="updatDoctorAvailability">
                        <div id="updatetimeInput1">


                        <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="updateOption1" > SUNDAY
                              </label>
                            </div>

                         <div class="col-xs-12 col-sm-6 col-lg-3">
                                <input type="time" class="form-control" placeholder="From" name="options" id="updateFromTimeOption1" >
                            </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                            <input type="time" class="form-control" placeholder="To" name="options" id="updateToTimeOption1" >
                        </div>

                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="updateappendTime1" type="button" onclick="updateAppendSunTime();"class="btn btn-light rounded-pill">
                             +
                            </button>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="updatedeleteTime1" type="button" onclick="updateremoveTimeInput1();"class="btn btn-light rounded-pill">
                                &times;
                            </button>
                        </div>
                        </div>
                      </div><hr>
                      <div id="updatetimeInput2">
                        <div class="row mt-3">
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <label >
                                <input type="checkbox" name="options" id="updateoption2" > MONDAY
                            </label>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                            <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption2" >
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-3">
                             <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption2" >
                         </div>
                         <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="updateappendTime2" type="button" onclick="updateAppendMonTime();"class="btn btn-light rounded-pill">
                             +
                            </button>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-2">
                            <button id="updatedeleteTime2" type="button" onclick="updateremoveTimeInput2();"class="btn btn-light rounded-pill">
                                &times;
                            </button>
                        </div>
                        </div>
                      </div><hr>
                      <div id="updatetimeInput3">
                        <div class="row mt-3">
                            <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="updateoption3" > TUESDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption3" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption3" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updateappendTime3" type="button" onclick="updateAppendTueTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updatedeleteTime3" type="button" onclick="updateremoveTimeInput3();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="updatetimeInput4">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <label >
                                        <input type="checkbox" name="options" id="updateoption4">WEDNESDAY
                                    </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption4" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption4" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updateappendTime4" type="button" onclick="updateAppendWedTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updatedeleteTime4" type="button" onclick="updateremoveTimeInput4();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div>
                                <hr>
                                <div id="updatetimeInput5">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="updateoption5" > THURSDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption5" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption5" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updateappendTime5" type="button" onclick="updateAppendThuTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updatedeleteTime5" type="button" onclick="updateremoveTimeInput5();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="updatetimeInput6">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                    <input type="checkbox" name="options" id="updateoption6" > FRIDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption6" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption6" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updateappendTime6" type="button" onclick="updateAppendFriTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updatedeleteTime6" type="button" onclick="updateremoveTimeInput6();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div><hr>
                                <div id="updatetimeInput7">
                                <div class="row mt-3">
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                <label >
                                     <input type="checkbox" name="options" id="updateoption7" > SATURDAY
                                </label>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="From" name="options" id="updatefromTimeOption7" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <input type="time" class="form-control" placeholder="To" name="options" id="updatetoTimeOption7" >
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updateappendTime7" type="button" onclick="updateAppendSatTime();"class="btn btn-light rounded-pill">
                                     +
                                    </button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-2">
                                    <button id="updatedeleteTime7" type="button" onclick="updateremoveTimeInput7();"class="btn btn-light rounded-pill">
                                        &times;
                                    </button>
                                </div>
                                </div>
                                </div>
                                <div class="card-footer">
                                    <button id="updatesaveRoasterBtn" type="button" class="btn btn-primary">
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                        style="display:none; text-align: right;" id="updateaddDoctorSpinner"></span>
                                        UPDATE
                                    </button>
                                </div>
                            </div>
                            </div>

                                </div>
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
  </div>
 </div>
</div>



<div class="modal fade" id="view-user-Details-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">User Details</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card card-widget widget-user-2">
                            <!-- Add the bg color to the header using any of the bg-* classes -->
                            <div class="widget-user-header bg-warning">
                            <table class="table" style="border-color:  solid hwb(46 0% 0% / 0.993)">

                           <!--- <tr><td> <b>Product Name</b><p id="productCardName"></p></td>--->

                            <tr> <td><b>Name</b><p id="viewName"></p></td>
                             <td><b>Client Name</b><p id="viewClientName"></p></td>
                              <td><b>Qualification</b><p id="viewQualification" ></p></td></tr>
                           <tr> <td><b></b><p id="productDescription"></p></td>
                            <td><b></b><p id="productExpirdate"></p></td>
                            <td><b><p></p></b></td>
                            </tr>
                          </table>

                                </div>
                                <!-- /.widget-user-image -->
                                <h3 id="UserEmail" class="widget-user-email"></h3>
                                <h5 id="Username" class="widget-user-desc"></h5>
                            </div>
                            <div class="card-footer p-0">
                                <div id="useraccordion">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="userEmail" class="d-block w-100" data-toggle="collapse"
                                                    href="#userCollapseOne">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="userCollapseOne" class="collapse" data-parent="#useraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card card-danger">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="UserName" class="d-block w-100" data-toggle="collapse"
                                                    href="#usercollapseTwo">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="usercollapseTwo" class="collapse" data-parent="#useraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="UserPassword" class="d-block w-100" data-toggle="collapse"
                                                    href="#usercollapseThree">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="usercollapseThree" class="collapse" data-parent="#useraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        </div>
        </div>
<!-- Doctor Details Modal -->
        <div class="modal fade" id="doctorDetails-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Teams Login Credentials</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card card-widget widget-user-2">
                            <!-- Add the bg color to the header using any of the bg-* classes -->
                            <div class="widget-user-header bg-warning">
                                <div class="widget-user-image">
                                    <img class="img-circle elevation-2" src="resources/img/user1-128x128.jpg"
                                        alt="User Avatar">
                                </div>
                                <!-- /.widget-user-image -->
                                <h3 id="DoctorName" class="widget-user-username"></h3>
                                <h5 id="password" class="widget-user-desc"></h5>
                            </div>
                            <div class="card-footer p-0">
                                <div id="doctoraccordion">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="teamsUserEmail" class="d-block w-100" data-toggle="collapse"
                                                    href="#doctorCollapseOne">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="doctorCollapseOne" class="collapse" data-parent="#doctoraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card card-danger">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="teamsUserName" class="d-block w-100" data-toggle="collapse"
                                                    href="#doctorcollapseTwo">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="doctorcollapseTwo" class="collapse" data-parent="#doctoraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a id="teamsUserPassword" class="d-block w-100" data-toggle="collapse"
                                                    href="#doctorcollapseThree">
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="doctorcollapseThree" class="collapse" data-parent="#doctoraccordion">
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
      </div>
    </div>


<!-----DOCTOR UNAVAILABILITY MODAL------>


<div class="modal fade" id="create-doctor-unavailability-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Doctor Unavailability</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="inviteUnavailabilty" autocomplete="off">
                        <div class="card-body" id="addUnavailability">
                            <div class="container">
                            <b>HOLIDAYS/LEAVES</b>
                                <div id="leavesAppend">
                            <!--- <div class="row mt-12">

                                <div class="col-xs-12 col-sm-12 col-lg-6">
                                 <button id="appendBtn" type="button" onclick="addInput();"class="btn btn-light rounded-pill">
                                  +
                                 </button>
                             </div>
                             <div class="col-xs-12 col-sm-12 col-lg-6">
                                 <button id="deleteBtn" type="button" onclick="removeInput();"class="btn btn-light rounded-pill">
                                     &times;
                                 </button>
                             </div>--->
                             </div>
                             <div class="row mt-12">
                                 <div class="col-xs-12 col-sm-12 col-lg-6">
                                     <input type="text" class="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="From" name="options" id="fromDateOption1" >
                                 </div>
                             <div class="col-xs-12 col-sm-12 col-lg-6">
                                 <input type="text" class="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="To" name="options" id="toDateOption1" >
                             </div>

                             </div>
                             </div>



                            </div>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="addUnavailabilityBtn" type="button" class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: center;" id="createUnavailabilitySpinner"></span>
                                Add
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

<!--------UPDATE DOCTOR UNAVAILABILITY MODAL----------->


<div class="modal fade" id="update-doctor-unavailability-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update Doctor Unavailability</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="updateUnavailabilty" autocomplete="off">
                        <div class="card-body" id="updateDocUnavailability">
                            <div class="container">
                            <b>HOLIDAYS/LEAVES</b>
                            <div id="updateleavesAppend">
                             <!---<div class="row mt-12">

                                <div class="col-xs-12 col-sm-6 col-lg-6">
                                 <button id="updateappendBtn" type="button" onclick="updateaddInput();"class="btn btn-light rounded-pill">
                                  +
                                 </button>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-lg-6">
                                 <button id="updatedeleteBtn" type="button" onclick="updateremoveInput();"class="btn btn-light rounded-pill">
                                     &times;
                                 </button>
                             </div>--->
                             </div>
                             <div class="row mt-12">
                                 <div class="col-xs-12 col-sm-12 col-lg-12">
                                     <input type="text" class="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Date" name="options" id="updatefromDateOption1" >
                                 </div>
                             <!---<div class="col-xs-12 col-sm-6 col-lg-6">
                                 <input type="text" class="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="To" name="options" id="updatetoDateOption1" >
                             </div>-->

                             </div>
                             </div>
                                <div class="card-footer">
                                    <button id="updatesaveHolidayBtn" type="button" class="btn btn-primary">
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                        style="display:none; text-align: right;" id="updateaddUnavailableSpinner"></span>
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
    <script src="resources/custom/js/users.js"></script>
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/logout.js"></script>
    <script>
        $('#invite-user-modal').on('hidden.bs.modal', function () {
           console.log("close modal")
           $('#invite').trigger("reset");

            location.reload();
            $('#Specialization').html("");
            $('#consultationType').html("");

});
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});
//INVITE USER MODAL
function checkIfDoctor() {
    console.log("Inside funtion");
   var selectValue = document.getElementById('roleSelector');
   var value = selectValue.options[selectValue.selectedIndex].text;
   console.log(value);
   if(value == 'Doctor') {
    console.log("inside condition");
    $('#extra').show();
    $('#FormQualification').hide();
    getLanguages();
    getConsultationType();
    getMedicalSpecialists();
    getAmount();
   }else {
    $('#extra').hide();
    $('#FormQualification').show();
   }

}
$(document).ready(function() {
    $('#updateanguageSelector').select2();
});
//UPDATE USER MODAL
function updateCheckIfDoctor() {

   var updateselectValue = $('#roleSelector1').val();

   if(updateselectValue == 4) {

    $('#updateExtra').show();
    $('#updateQualificationField').hide();
    getLanguages();
    getConsultationType()
    getMedicalSpecialists()
    getAmount();
   }else {
    $('#updateExtra').hide();
    $('#updateQualificationField').show();
   }

}


$(function () {
    $("#doctor-roaster-modal").on("hidden.bs.modal", function (e) {
       console.log("Modal hidden");
          $("#inviteDoctor").trigger("reset");
       });
    });

	$(function () {
		$("#update-doctor-roaster-modal").on("hidden.bs.modal", function (e) {
		   console.log("Modal hidden");
			  $("#updateRosterDoctor").trigger("reset");
		   });
		});

		$(function () {
        		$("#create-doctor-unavailability-modal").on("hidden.bs.modal", function (e) {
        		   console.log("Modal hidden");
        			  $("#inviteUnavailabilty").trigger("reset");
        		   });
        		});

                $(function () {
                    $("#update-doctor-unavailability-modal").on("hidden.bs.modal", function (e) {
                       console.log("Modal hidden");
                          $("#updateUnavailabilty").trigger("reset");
                       });
                    });
$('#userResetBtn').click(function(){
    $('#invite')[0].reset();

$("#Specialization").empty();
$("#consultationType").html("");
$("#LanguageSelector").html("");
    console.log("clear selected data")
});



   </script>
</body>

</html>