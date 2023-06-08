<!DOCTYPE html>
<html lang="en">

<head>
    <base class="base_context_path" href="" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Manage Consumers</title>

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
    <link rel="stylesheet" href="resources/css/pristine.css">
</head>

<body class="hold-transition sidebar-mini">

    <style>
        .sidebar-active>a {
            background-color: dimgray;
        }

        .sub-sidebar-active>a {
            background-color: dimgray;
        }
    </style>
    <!-- Site wrapper -->
    <div class="wrapper">
        <div style="display:none;">
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

                        <li class="nav-item ">
                            <a href="./users" class="nav-link">
                                <i class="nav-icon fas fa-users-cog"></i>
                                <p>
                                    Manage Users
                                </p>
                            </a>
                        </li>

                        <li class="nav-item sub-sidebar-active">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Manage Package
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item sidebar-active">
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
                        <li class="nav-item">
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
                            <h1>Package Consumers</h1>
                        </div>
                        <div class="col-sm-3"></div>
                        <div class="col-sm-3">

                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
                                <li class="breadcrumb-item active">Manage Packages</li>
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
                                                    aria-controls="custom-tabs-one-home" aria-selected="true">Subscribed Packages</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-services-tab" data-toggle="pill"
                                            href="#custom-tabs-one-services" role="tab"
                                            aria-controls="custom-tabs-one-services" aria-selected="false"
                                            onclick='requestServices()'>Services</a>
                                            </li>
                                        </ul>
                                 </div>
                                <!-- /.card-header -->
                                    <div class="card-body">
                                        <div class="tab-content" id="custom-tabs-one-tabContent">
                                            <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                                                aria-labelledby="custom-tabs-one-home-tab">
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <div style="display:none;" id="consumer-table-spinner">
                                                        <span class="spinner-grow spinner-grow-sm" role="status"
                                                            style="margin-right:5px;" aria-hidden="true"></span>Loading Table..
                                                    </div>
                                                    <div style="display:none;" id="consumer-table-error">
                                                        No Data Found!!
                                                    </div>
                                                    <table id="consumerTable" class="display" style="width:100%">
                                                        <thead bgcolor="#EEF7A6">
                                                            <tr>
                                                                <th>Package Name</th>

                                                                <th>Category</th>
                                                                <th>Created Date</th>
                                                                <th>Start Date</th>
                                                                <th>End Date</th>
                                                                <th>Cost</th>
                                                                <th>Status</th>
                                                                <!-- <th>Status</th> -->
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <th>Package Name</th>

                                                                <th>Category</th>
                                                                <th>Created Date</th>
                                                                <th>Start Date</th>
                                                                <th>End Date</th>
                                                                <th>Cost</th>
                                                                <th>Status</th>
                                                                <!-- <th>Status</th> -->
                                                                <th>Action</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <!-- /.card-header -->
                                            </div>
                    <div class="tab-pane fade" id="custom-tabs-one-services" role="tabpanel"
                        aria-labelledby="custom-tabs-one-services-tab">
                        <div class="col-3" style="margin-bottom:10px;">
                            <div class="dropdown show">
                                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    STATUS
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" onclick='requestServices()' href="#">Requested</a>
                                    <a class="dropdown-item" onclick='confirmedServices()' href="#">Confirmed</a>
                                    <a class="dropdown-item" onclick='completedServices()' href="#">Completed</a>
                                    <a class="dropdown-item" onclick='canceledServices()' href="#">Cancelled</a>
                                </div>
                            </div>

                        </div>
                        <div style="display:none; " id="requested_services_table-spinner">
                            <span class="spinner-grow spinner-grow-sm" role="status"
                               style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                        </div>
                        <div style="display:none;" id="requested_services_table_no_data">
                            No Data Found!!
                        </div>
                            <table id="requested_services_table" class="display" style="width:100%">
                                <thead bgcolor="#EEF7A6">
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Service Name</th>
                                         <th>KitId</th>
                                         <th>Patient Name</th>
                                        <th>Requested Date</th>
                                        <th>Last Updated</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                   <tr>
                                        <th>Package Name</th>
                                        <th>Service Name</th>
                                        <th>KitId</th>
                                        <th>Patient Name</th>
                                        <th>Requested Date</th>
                                        <th>Last Updated</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                   </tr>
                                </tfoot>
                            </table>
                        </div>

                                        </div>
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

                <!--- Requested modal -->

            <div class="modal fade" id="Requested-user-modal">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Request Available Services</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" id="inviteConfirmRequest" autocomplete="off">
                        <div class="card-body" id="requestService">
                            <div class="row">
                            <div class="col-xs-12 col-sm-6 col-lg-12">
                                  <label>Instruction<span style="color:red" class="required">*</span></label>
                                 <input type="text" class="form-control" name="options" id="inviteInstruction" placeholder="Give instruction" minlength="2" maxlength="32">
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-12">
                            <label>Schedule Date</label>
                            <input type="text" class="form-control" onfocus="(this.type='date')" id="inviteScheduledDate" >
                            </div>

                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="requestButton" type="button" class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                style="display:none; text-align: center;" id="requestServicesSpinner"></span>
                                Confirm
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
     <!----Requested modal -->

                <div class="modal fade" id="Confirmed-user-modal">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Complete Services</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="inviteCompleted" autocomplete="off">
                            <div class="card-body" id="requestService">
                                <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-12">
                                    <label>Contact Details</label>
                                    <input type="text" class="form-control" name="options" id="inviteContactDetails" disabled />
                                    </div>
                                <div class="col-xs-12 col-sm-6 col-lg-12">
                                <label>Observation</label>
                                <input type="text" class="form-control" name="options" id="inviteObservation" placeholder="Enter Observation" minlength="2" maxlength="32" >
                                </div>

                                <div class="col-xs-12 col-sm-6 col-lg-12">
                                <label>Enter OTP<span style="color:red" class="required">*</span></label>
                                <input type="text" class="form-control" name="options" id="inviteOtp" placeholder="Enter OTP" onkeypress='return event.charCode >= 48 && event.charCode <= 57' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 6 digits"  maxlength="6" required />
                                 </div>
                                <div class="col-xs-12 col-sm-6 col-lg-12">
                                <label>Upload file</label>
                                <div class="input-group">
                                <div class="custom-file">
                                <input type="file" accept=".jpeg,.pdf,.jpg,.png" name="fileUpload"  id="inviteObservationfile" >
                                <label class="custom-file-upload" for="inviteObservationfile" ></label>
                                </div>
                                </div>
                                 </div>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="completedButton" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="completeServicesSpinner"></span>
                                    Completed
                                </button>

                            </div>
                        </form>
                    </div>
                </div>


                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
<div class="modal fade" id="Cancel-user-modal">
  <div class="modal-dialog">
  <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Cancel Services</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
          <form action="#" id="inviteCancel" autocomplete="off">
              <div class="card-body" id="requestService">
                  <div class="row">
                  <div class="col-xs-12 col-sm-6 col-lg-12">
                  <label>Reason for cancel<span style="color:red" class="required">*</span></label>
                  <input type="text" class="form-control" name="inviteReason" id="inviteReason" placeholder="Reason" minlength="2" maxlength="32">
                  </div>
                  <div class="col-xs-12 col-sm-6 col-lg-12">
                  <label>Enter OTP<span style="color:red" class="required">*</span></label>
                  <input type="text" class="form-control" name="options" id="cancelinviteOTP" placeholder="Enter OTP" onkeypress='return event.charCode >= 48 && event.charCode <= 57' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 6 digits"  maxlength="6" required />
                   </div>
                  </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                  <button id="cancelButton" type="button" class="btn btn-primary">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                      style="display:none; text-align: center;" id="cancelServicesSpinner"></span>
                      Submit
                  </button>

              </div>
          </form>
      </div>
  </div>
  <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->

</div>

<!-----CANCEL MODAL FOR CONFIRMED TABLE -------->

<div class="modal fade" id="Cancel-confirmed_table-modal">
  <div class="modal-dialog">
  <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Cancel Services</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
          <form action="#" id="inviteConfirmTable" autocomplete="off">
              <div class="card-body" id="requestService">
                  <div class="row">
                  <div class="col-xs-12 col-sm-6 col-lg-12">
                  <label>Reason for cancel<span style="color:red" class="required">*</span></label>
                  <input type="text" class="form-control" name="inviteReasoncancel" id="inviteReasoncancel" placeholder="Reason" minlength="2" maxlength="32">
                  </div>
                  <div class="col-xs-12 col-sm-6 col-lg-12">
                  <label>Enter OTP<span style="color:red" class="required">*</span></label>
                  <input type="text" class="form-control" name="options" id="inviteOTPcancel" placeholder="Enter OTP" onkeypress='return event.charCode >= 48 && event.charCode <= 57' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 6 digits"  maxlength="6" required />
                   </div>
                  </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                  <button id="cancelButtoncancel" type="button" class="btn btn-primary">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                      style="display:none; text-align: center;" id="cancelServicesSpinnercancel"></span>
                      Submit
                  </button>

              </div>
          </form>
      </div>
  </div>
  <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->

</div>
       <!----View Details Modal --->
       <div class="modal fade" id="view-details-modal">
                   <div class="modal-dialog">
                       <div class="modal-content">
                           <div class="modal-header">
                               <h4 class="modal-title">Services Details</h4>
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
                                       <div id="servicesaccordion">
                                           <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="KitId" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicesCollapseOne">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicesCollapseOne" class="collapse" data-parent="#servicesaccordion">
                                                   <div class="card-body">
                                                   </div>
                                               </div>
                                           </div>

                                           <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="PatientName" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicescollapseTwo">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicescollapseTwo" class="collapse" data-parent="#servicesaccordion">
                                                   <div class="card-body">
                                                   </div>
                                               </div>
                                           </div>

                                           <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="PackageName" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicescollapseThree">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicescollapseThree" class="collapse" data-parent="#servicesaccordion">
                                                   <div class="card-body">
                                                   </div>
                                               </div>
                                           </div>
                                            <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="ServiceName" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicescollapseFour">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicescollapseFour" class="collapse" data-parent="#servicesaccordion">
                                                   <div class="card-body">
                                                   </div>
                                               </div>
                                           </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="PreferredDate" class="d-block w-100" data-toggle="collapse"
                                                            href="#servicescollapseFive">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="servicescollapseFive" class="collapse" data-parent="#servicesaccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div>
                                               <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="UserId" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicescollapseSix">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicescollapseSix" class="collapse" data-parent="#servicesaccordion">
                                                   <div class="card-body">
                                                   </div>
                                               </div>
                                           </div>
                                            <div class="card">
                                               <div class="card-header">
                                                   <h4 class="card-title w-100">
                                                       <a id="ContactDetails" class="d-block w-100" data-toggle="collapse"
                                                           href="#servicescollapseSeven">
                                                       </a>
                                                   </h4>
                                               </div>
                                               <div id="servicescollapseSeven" class="collapse" data-parent="#servicesaccordion">
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
                                <label for="updateFormEmail">Email (Opt.)</label>
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
                            <div class="form-group">
                                <label for="updateFormQualification">Qualification (Opt.)</label>
                                <input type="text" class="form-control" id="updateFormQualification"
                                    placeholder="Enter Qualification">
                            </div>
                            <div class="form-group">
                                <label>Role</label>
                                <select id="roleSelector1" class="form-control select2" style="width: 100%;"></select>
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
                                    <!--
                <div class="input-group-append">
                  <span class="input-group-text">Upload</span>
                </div>
                 -->
                                </div>
                            </div>
                            <!--
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
             -->
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="updateBtn" type="button" onclick="updateUser(false);"
                                class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
                <!--
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
       -->
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
                    <form action="#" id="invite" autocomplete="off">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inviteFormName">Full Name</label>
                                <input type="text" class="form-control" id="inviteFormName" placeholder="Enter Fullname"
                                    minlength="3" maxlength="20" required
                                    data-pristine-min-message="Enter at least 3 characters">
                            </div>
                            <div class="form-group">
                                <label for="inviteFormPhone">Mobile No</label>
                                <input type="number" class="form-control" id="inviteFormPhone"
                                    placeholder="Enter Mobile" type="number" minlength="10" maxlength="10" required
                                    data-pristine-min-message="Enter 10 digits"
                                    data-pristine-max-message="Enter 10 digits">
                            </div>
                            <div class="form-group">
                                <label for="inviteFormEmail">Email (Opt.)</label>
                                <input type="email" class="form-control" id="inviteFormEmail" placeholder="Enter Email"
                                    type="email" data-pristine-email-message="Enter valid email id" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label>Gender</label>
                                <select id="genderSelector" class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group">
                                <label id="clientSelectorLabel">Organization</label>
                                <select id="clientSelector" class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group">
                                <label for="inviteFormEmpId">Employee Id (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormEmpId" placeholder="Enter Id"
                                    autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="inviteFormDesignation">Designation (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormDesignation"
                                    placeholder="Enter Designation" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="inviteFormQualification">Qualification (Opt.)</label>
                                <input type="text" class="form-control" id="inviteFormQualification"
                                    placeholder="Enter Qualification" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label>Role</label>
                                <select id="roleSelector" class="form-control select2" style="width: 100%;"
                                    required></select>
                            </div>
                            <div class="form-group">
                                <label for="profilePicFile">Profile Image (Opt.)</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="profilePicFile">
                                        <label class="custom-file-label" for="profilePicFile">Choose file</label>
                                    </div>
                                    <!--
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                       -->
                                </div>
                            </div>
                            <!--
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                   -->
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="inviteBtn" type="button" onclick="inviteUser(false);"
                                class="btn btn-primary">Invite</button>
                        </div>
                    </form>
                </div>
                <!--
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
             -->
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- View Package Consumer Modal -->
            <div class="modal fade" id="pack-consumer-view-modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Consumer Details</h4>
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
                                        <div id="ConsumerAccordion">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="Gender" class="d-block w-100" data-toggle="collapse"
                                                            href="#ConsumerCollapseOne">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="ConsumerCollapseOne" class="collapse" data-parent="#ConsumerAccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="EndDate" class="d-block w-100" data-toggle="collapse"
                                                            href="#ConsumerCollapseTwo">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="ConsumerCollapseTwo" class="collapse" data-parent="#ConsumerAccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="Age" class="d-block w-100" data-toggle="collapse"
                                                            href="#ConsumerCollapseThree">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="ConsumerCollapseThree" class="collapse" data-parent="#ConsumerAccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="Validity" class="d-block w-100" data-toggle="collapse"
                                                            href="#ConsumerCollapseFour">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="ConsumerCollapseFour" class="collapse" data-parent="#ConsumerAccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---- <div class="card">
                                                 <div class="card-header">
                                                     <h4 class="card-title w-100">
                                                         <a id="ConsumerPreferredDate" class="d-block w-100" data-toggle="collapse"
                                                             href="#ConsumerCollapseFive">
                                                         </a>
                                                     </h4>
                                                 </div>
                                                 <div id="ConsumerCollapseFive" class="collapse" data-parent="#ConsumerAccordion">
                                                     <div class="card-body">
                                                     </div>
                                                 </div>
                                             </div>


                                             <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title w-100">
                                                        <a id="ContactDetails" class="d-block w-100" data-toggle="collapse"
                                                            href="#ConsumerCollapseSix">
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="ConsumerCollapseSix" class="collapse" data-parent="#ConsumerAccordion">
                                                    <div class="card-body">
                                                    </div>
                                                </div>
                                            </div> ---->

                                        </div>
                                    </div>
                                </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>




             </section>
             <!-- /.content -->
         </div>
         <!-- /.content-wrapper -->



         <!-- Control Sidebar -->

         <!-- /.control-sidebar -->
     </div>
<!-- UPLOAD INVOICE MODAL -->
        <div class="modal fade" id="upload-invoice-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Upload Invoice</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="import-invoice-form" autocomplete="off">
                            <div class="form-group">
                                 <div class="form-group">
                                     <label for="exampleInputFile">Invoice</label>

                                       <div class="input-group">
                                          <div class="custom-file">
                                            <input type="file" accept=".pdf" name="invoiceUpload"  id="uploadFormInvoice" >
                                               <label class="custom-file-upload" for="uploadFormInvoice" ></label>
                                                </div>
                                              </div>
                                 </div>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" id="uploadInvoiceButton" type="button"
                                            style="cursor: pointer;">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                style="display:none;" id="uploadInvoiceSpinner"></span>
                                            Upload</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
        <!-- /.modal -->




        <!-- ./wrapper -->
    <!-- Update Consumer package -->
    <div class="modal fade" id="update-packageSubscription-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update Consumer Package</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="update" autocomplete="off">
                        <div class="card-body" id="update-packageSubscription-form">

                            <div class="form-group">
                                <label>Status</label>
                                <select id="packSubscrSelector1" class="form-control select2"
                                    style="width: 100%;"></select>
                            </div>
                            <div class="form-group">
                                <label for="profilePicFile">Upload Profile Pic</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="invoiceFile1">
                                        <label class="custom-file-label" for="invoiceFile1">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div id='update-cons-pack-form' class='update-cons-pack-class'>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button id="updateBtn" type="button" onclick="updateConsumerPackDetails(false);" class="btn btn-primary">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                    style="display:none;" id="updateConsPackSpinner"></span>
                                Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
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
    <!-- Pristine -->
    <script src="resources/js/pristine.min.js"></script>
    <!-- Page specific script -->
    <script src="resources/custom/js/consumers.js"></script>
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/logout.js"></script>
    <script>
$(function () {
                 $("#upload-invoice-modal").on("hidden.bs.modal", function (e) {
                    console.log("Modal hidden");
                       $("#import-invoice-form").trigger("reset");
                    });
             })

    </script>
</body>

</html>