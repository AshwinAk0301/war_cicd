<!DOCTYPE html>
<html lang="en">

<head>
    <base href="./" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Distributors Page</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="resources/plugins/fontawesome-free/css/all.min.css">
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

                        <li class="nav-item sidebar-active">
                            <a href="./distributors" class="nav-link hide-unauth">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Distributors
                                </p>
                            </a>
                        </li>

                        <li class="nav-item">
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
                            <h1>Manage Distributors</h1>
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
                                        <button type="button" class="btn btn-primary" data-toggle="modal"
                                            data-target="#add-distributor-modal">
                                            Add Distributor
                                        </button>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <div style="display:none;" id="distributor-table-spinner">
                                            <span class="spinner-grow spinner-grow-sm" role="status"
                                                style="margin-right:5px;" aria-hidden="true"></span>Loading Table..
                                        </div>
                                        <div style="display:none;" id="distributor-table-error">
                                            No Data Found!!
                                        </div>
                                        <table id="distributor-Table" class="display" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Distributor Name</th>
                                                    <th>Distributor Id</th>
                                                    <th>Contact Person</th>
                                                    <th>Contact No</th>
                                                    <th>GSTN</th>
                                                    <th>Address</th>
                                                    <th>Status</th>
                                                    <th>Last Updated</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Distributor Name</th>
                                                    <th>Distributor Id</th>
                                                    <th>Contact Person</th>
                                                    <th>Contact No</th>
                                                    <th>GSTN</th>
                                                    <th>Address</th>
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

        <!-- Distributor Invite Modal -->
        <div class="modal fade" id="add-distributor-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Distributor</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="distributorModal">
                            <div class="card-body">
                                <div class="container">
                                    <div class="row mt-3">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorName">Distributor<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorName"
                                                  minlength="2" maxlength="32"  placeholder="Enter Fullname">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorPhone">Contact No<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" placeholder="Contact NO." id="inviteDistributorPhone" name="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 10 digits"  maxlength="10" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorEmail">Contact Email<span style="color:red" class="required">*</span></label>
                                                <input type="email" class="form-control" id="inviteDistributorEmail"
                                                    placeholder="Enter Email">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorAddLine1">Distributor Address Line
                                                    1<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorAddLine1"
                                                 minlength="2" maxlength="150"   placeholder="Enter Line 1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorAddLine2">Address Line 2 (Opt.)</label>
                                                <input type="text" class="form-control" id="inviteDistributorAddLine2"
                                                minlength="2" maxlength="150"    placeholder="Enter Line 2">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorCity">Distributor City<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorCity"
                                                 minlength="2" maxlength="32"   placeholder="Enter City">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorState">Distributor State<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorState"
                                                minlength="2" maxlength="32"    placeholder="Enter State">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorPinCode">Distributor Pincode<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorPinCode"
                                                 name="pincode" placeholder="Enter Pincode" onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter exactly 6 digits"  maxlength="6" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorcontactPerson">Contact Person<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control"
                                                    id="inviteDistributorcontactPerson"
                                                 minlength="2" maxlength="32"   placeholder="Enter Contact Person">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="inviteDistributorgstn">Distributor GSTN<span style="color:red" class="required">*</span></label>
                                                <input type="text" class="form-control" id="inviteDistributorgstn"
                                                onkeydown="return /[a-z0-9A-Z]/i.test(event.key)"    placeholder="Enter GSTN" pattern="^[a-zA-Z\s]+$" maxlength="15">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                    </div>
                    <div class="card-footer">
                        <button id="addDistributorButton" onclick="addDistributor();" type="button" class="btn btn-primary">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                    style="display:none;" id="addDistrSpinner"></span>
                            Add
                        </button>
                    <button id="distributorResetBtn" type="reset" class="btn btn-secondary">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                          style="display:none;" id="resetdistributorSpinner"></span>
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

    <!-- Distributor Update Modal -->
    <div class="modal fade" id="update-distributor-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update Distributor</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="formUpdateDistributor">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="updatedistributortName">Distributor</label>
                                <input type="text" class="form-control" id="updatedistributortName"
                                    placeholder="Enter Distributor">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorPhone">Contact No</label>
                                <input type="number" class="form-control" id="updatedistributorPhone"
                                    placeholder="Enter Mobile">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorEmail">Contact Email</label>
                                <input type="email" class="form-control" id="updatedistributorEmail"
                                    placeholder="Enter Email">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorAddLine1">Distributor Address Line 1</label>
                                <input type="text" class="form-control" id="updatedistributorAddLine1"
                                    placeholder="Enter Line 1">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorAddLine2">Distributor Address Line 2 (Opt.)</label>
                                <input type="text" class="form-control" id="updatedistributorAddLine2"
                                    placeholder="Enter Line 2">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorName">Distributor City</label>
                                <input type="text" class="form-control" id="updatedistributorCity" placeholder="Enter City">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorState">Distributor State</label>
                                <input type="text" class="form-control" id="updatedistributorState"
                                    placeholder="Enter State">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorPinCode">Distributor Pincode</label>
                                <input type="number" class="form-control" id="updatedistributorPinCode"
                                    placeholder="Enter Pincode">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorcontactPerson">Contact Person</label>
                                <input type="text" class="form-control" id="updatedistributorcontactPerson"
                                    placeholder="Contact Person">
                            </div>
                            <div class="form-group">
                                <label for="updatedistributorgstn">Distributor GSTN</label>
                                <input type="text" class="form-control" id="updatedistributorgstn"
                                    placeholder="Enter GSTN" onkeydown="return /[a-z0-9A-Z]/i.test(event.key)" pattern="^[a-zA-Z\s]+$" maxlength="15">
                            </div>
                        </div>
                </div>
                <div class="card-footer">
                    <button id="updateDistributorButton" type="button" class="btn btn-primary">
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                         style="display:none;" id="updatedistributorSpinner"></span>
                    Update</button>
                </div>
            </div>
            <!-- /.card-body -->


            </form>
        </div>
    </div>



 <!-- Create teams account Client modal-->

         <div class="modal fade" id="delete-Distributor-modal">
             <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h4 class="modal-title">Delete Distributor</h4>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div class="modal-body">
                         <form action="#" id="deleteDistributor" autocomplete="off">
                             <div class="card-body" id="createAccount">
                               <h3>Do you like to Delete Distributor?  </h3>
                             </div>
                             <!-- /.card-body -->

                             <div class="card-footer">
                                 <button id="deleteDistributor" type="button" class="btn btn-primary">
                                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                     style="display:none; text-align: center;" id="deleteDistSpinner"></span>
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
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
    <script src="//cdn.datatables.net/plug-ins/1.10.12/sorting/datetime-moment.js"></script>
    <!-- Toastr -->
    <script src="resources/js/toastr.min.js"></script>
    <!-- AdminLTE App -->
    <script src="resources/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="resources/js/demo.js"></script>
    <!-- Page specific script -->
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/distributors.js"></script>
    <script src="resources/custom/js/logout.js"></script>


    <script>
        $(function () {
            $("#add-distributor-modal").on("hidden.bs.modal", function (e) {
               console.log("Modal hidden");
                  $("#distributorModal").trigger("reset");
               });
        })

$('#distributorResetBtn').click(function(){
    $('#distributorModal')[0].reset();
});

  </script>

</body>

</html>