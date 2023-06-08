<!DOCTYPE html>
<html lang="en">

<head>
    <base href="./" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Manage Products</title>

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
    .list-group-item.mouseover {
        background: #fafafa;
        cursor: pointer;
    }

    .list-group-item .remove-item.mouseover {
        background: #aaf;
        cursor: pointer;
    }

    .sidebar-active>a {
        background-color: dimgray;
    }

    .modal-content {
        width: 150%;
    }

    .accordion {
        content: "\f107";
        font-family: 'Font Awesome 5 Free';

    }
</style>

<body class="hold-transition sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">
        <!-- Navbar -->
        <div style="display:none;">
            <!-- Hide Navbar-->
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
                        <a href="./products" class="d-block portal-user-name">Alexander Pierce</a>
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

                        <li class="nav-item">
                            <a href="./clients" class="nav-link hide-unauth">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Clients
                                </p>
                            </a>
                        </li>

                        <li class="nav-item  sidebar-active">
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

                        <li class="nav-item">
                            <a href="#" class="nav-link hide-admin-unauth" id="managePackages">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Manage Package
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="./consumers" class="nav-link hide-admin-unauth" id="patientManagement">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Patient Management</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="./packages" class="nav-link hide-admin-unauth" id="packageManagement">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Package Management</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                            <li class="nav-item">
                            <a href="./consultation" class="nav-link hide-admin-unauth" id="manageAppointments">
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
                            <h1>Manage Products</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
                                <li class="breadcrumb-item active">Manage Products</li>
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">

                <div class="card">
                    <div class="card-header">
                        <!-- <h3 class="card-title">jsGrid</h3> -->
                        <div class="row">
                            <div class="col-3">
                                <button type="button" class="btn btn-primary" data-toggle="modal" id="add-product-btn"
                                    data-target="#invite-product-modal">
                                    Add Product
                                </button>
                                <!-- <button type="button" class="btn btn-primary" >Import Users</button>	 -->
                            </div>
                            <!--
	           <div class="col-md-3 col-sm-6">
		           <div class="form-group" style="margin:0;">

		             <select class="select2" style="width: 100%;">
		             	<option selected>All (Status)</option>
		             	<option >Active</option>
		             	<option>Inactive</option>
		             </select>
		           </div>
	           </div>
	           <div class="col-md-3 col-sm-6">
		           <div class="form-group" style="margin:0;">
		             <label style="font-size:5px;margin:0;">Product Filter:</label>
		             <select  class="select2" style="width: 100%;">
		             	<option selected>All (Product)</option>
		             	<option >Samvita</option>
		             	<option>Fitkit</option>
		             </select>
		           </div>
	          </div>
	          <div class="col-md-3 col-sm-6">
	          	<form action="simple-results.html">
                     <div class="input-group">
                        <input type="search" class="form-control form-control-lg" style="font-size:15px;height:38px;" placeholder="Serial number">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-lg btn-default" style="height:38px;padding:0px 10px;">
                                <i class="fa fa-search" style=""></i>
                            </button>
                         </div>
                     </div>
                </form>
	          </div>
	            -->
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div style="display:none;" id="product-table-spinner">
                            <span class="spinner-grow spinner-grow-sm" role="status" style="margin-right:5px;"
                                aria-hidden="true"></span>Loading Table..
                        </div>
                        <div style="display:none;" id="product-table-error">
                            No Data Found!!
                        </div>
                        <table id="productTable" class="display" style="width:100%">
                            <thead>
                                <tr>
                                    <th>Fancy Name</th>
                                    <th>Serial Number</th>
                                    <th>Client Name</th>
                                    <th>Distributor</th>
                                    <th>MAC Address</th>
                                    <th>Product Status</th>
                                    <th>License Status</th>
                                    <th>Expire Date</th>
                                    <th>Action</th>
                                    <th>Last Updated</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Fancy Name</th>
                                    <th>Serial Number</th>
                                    <th>Client Name</th>
                                    <th>Distributor</th>
                                    <th>MAC Address</th>
                                    <th>Product Status</th>
                                    <th>License Status</th>
                                    <th>Expire Date</th>
                                    <th>Action</th>
                                    <th>Last Updated</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->

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
    <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Sync Products</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="card-body">
                            <!--
                  <div class="form-group">
                    <label for="serialNum">Serial #</label>
                    <input type="text" class="form-control" id="inviteFormName" placeholder="Enter fullname">
                  </div>
                  <div class="form-group">
                    <label for="serialNum">Serial #</label>
                    <input type="text" class="form-control" id="inviteFormName" placeholder="Enter fullname">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="inviteFormEmail" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Id</label>
                    <input type="text" class="form-control" id="inviteFormPwd" placeholder="Enter id">
                  </div>
                  <div class="form-group">
                  <label>Role</label>
                  <select class="form-control select2" style="width: 100%;">
                    <option selected="selected">Wrizto Admin</option>
                    <option>Client</option>
                    <option>Doctor</option>
                  </select>
                </div>
                   -->
                            <h4 style="color:red;"> Time Consuming Operation. Kindly Confirm?</h4>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
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

    <!-- Product Details Modal -->
    <div class="modal fade" id="productDetails-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Product Details</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="card card-widget widget-user-2">
                        <!-- Add the bg color to the header using any of the bg-* classes -->
                        <div class="widget-user-header bg-warning">
                            <!--<div class="widget-user-image">
                                <img class="img-circle elevation-2" src="resources/img/user1-128x128.jpg"
                                    alt="User Avatar">
                            </div>-->
                            <!-- /.widget-user-image -->
                            <!--<h3 id="productCardSerial" class="widget-user-username"></h3>
                            <h5 id="productCardName" class="widget-user-desc"></h5>-->
                           <form action="#" id="viewProductModal" >
                          <table class="table" style="border-color:  solid hwb(46 0% 0% / 0.993)" >

                            <tr><td> <b>Product Name</b><p id="productCardName"></p></td>

                            <td><b>Product Status</b><p id="productCardLicenseStatus"></p></td>
                            <td><b>Subscription Plan</b><p id="productSubscription"></p></td></tr>
                            <tr> <td><b>Serial No.</b><p id="productCardSerial" ></p></td>
                            <td><b>Description</b><p id="productDescription"></p></td>
                            <td><b>License Expiry Date</b><p id="productExpirdate"></p></td>
                            <td><b><p></p></b></td>
                            </tr>
                          </table>
                          </form>
                        </div>
                        <div class="card-footer p-0">
                            <div id="accordion">
                            <div class="card card-secondary">
                              <div class="card-header">
                                <h4 class="card-title w-100">
                                  <a id="subProductTitle" class="d-block w-100" data-toggle="collapse" href="#collapseFour">
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseFour" class="collapse" data-parent="#accordion">

                                <div class="card-body">

                                </div>
                              </div>
                            </div>
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h4 class="card-title w-100">
                                            <a id="doctorTitle" class="d-block w-100" data-toggle="collapse"
                                                href="#collapseOne">
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="collapse" data-parent="#accordion">
                                        <div class="card-body" >
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-danger">
                                    <div class="card-header">
                                        <h4 class="card-title w-100">
                                            <a id="nurseTitle" class="d-block w-100" data-toggle="collapse"
                                                href="#collapseTwo">
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-success">
                                    <div class="card-header">
                                        <h4 class="card-title w-100">
                                            <a id="consumerTitle" class="d-block w-100" data-toggle="collapse"
                                                href="#collapseThree">
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                        <div class="card-body" >
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!--
                    <ul class="nav flex-column">
                        <li class="nav-item">

                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Tasks <span class="float-right badge bg-info">5</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Completed Projects <span class="float-right badge bg-success">12</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Followers <span class="float-right badge bg-danger">842</span>
                    </a>
                  </li>
                </ul>
                 -->
                        </div>
                    </div>
                    </form>
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

    <!-- Add Subscriber Modal -->
    <div class="modal fade" id="loadAddSubscriber-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Subscribe User</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label>Role</label>
                        <select id="addSubRoleSelector" class="form-control select2" style="width: 100%;">
                        </select>
                        <label>User</label>
                        <select id="addSubUserSelector" class="form-control select2" style="width: 100%;">
                        </select>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button id="addSubButton" type="button" class="btn btn-primary">Add</button>
                    <!--
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
               -->
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- Remove Subscriber Modal -->
    <div class="modal fade" id="loadRemoveSubscriber-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Unsubscribe User</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label>Role</label>
                        <select id="removeSubRoleSelector" class="form-control select2" style="width: 100%;">
                        </select>
                        <label>User</label>
                        <select id="removeSubUserSelector" class="form-control select2" style="width: 100%;">
                        </select>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button id="removeSubButton" type="button" class="btn btn-primary">Remove</button>
                    <!--
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
             -->
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- Link CLient Modal -->
    <div class="modal fade" id="link-client-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Link Client</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label>Client</label>
                        <select id="linkClientSelector" class="form-control select2" style="width: 100%;">
                        </select>
                         <label>Distributor</label>
                         <select id="linkDistributerSelector" class="form-control select2" style="width: 100%;">
                         </select>
                        <div class="form-group">
                            <label for="linkClientSerial">Serial Number</label>
                            <div class="form-control" id="linkClientSerial" placeholder="Serial">
                            </div>
                            <div class="form-group">
                                <label for="linkClientProduct">Product Name</label>
                                <div class="form-control" id="linkClientProduct" placeholder="Product">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button id="linkClientButton" type="button" class="btn btn-primary">Link</button>
                            <!--
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            -->
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal-dialog -->


    <!-- Update CLient Modal -->
    <div class="modal fade" id="update-client-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Change Client</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label>Client</label>
                        <select id="changeClientSelector" class="form-control select2" style="width: 100%;">
                        </select>
                        <div class="form-group">
                            <label for="changeClientSerial">Serial Number</label>
                            <div class="form-control" id="changeClientSerial" placeholder="Serial">
                            </div>
                            <div class="form-group">
                                <label for="changeClientProduct">Product Name</label>
                                <div class="form-control" id="changeClientProduct" placeholder="Product">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button id="changeClientButton" type="button" class="btn btn-primary">Update</button>
                            <!--
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                     -->
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
            </div>
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- Activate License Modal -->
    <div class="modal fade" id="activate-client-license-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Activate License</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <h4 style="color:red;"> Would you like to Activate License. Kindly Confirm?</h4>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" id="activateLicenseButton" class="btn btn-primary">Activate</button>
                    <!--
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
               -->
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- /.modal -->

    <!-- Add Product Modal -->
    <div class="modal fade collapse show" id="invite-product-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Product</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row">
                    <p style="margin-left: 5%; font-size: large;"><b>Product</b></p>
                    <p class="col-lg-10 col-md-6 col-xs-4 text-right">
                        <button class="btn btn-primary" id="addProductButton" onclick="saveProduct();"
                            type="submit">SAVE</button>
                        <button id="productResetBtn" type="reset" class="btn btn-secondary">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                            style="display:none;" id="resetproductSpinner"></span>
                              Reset</button>
                    </p>
                </div>

                <div class="modal-body">
                    <form action="#" id="Addbasic-form">
                        <div class="card-body">
                            <div class="accordion accordion-flush"
                                data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="accordionExample">
                                <div class="card accordion-item bg-default">
                                    <h4 class="accordion-header" id="headingOne">
                                        <div class="row mt-3">
                                            <div class="col-xs-12 col-sm-11 col-lg-12">
                                                <input value="Details" &#xf107;" id="firstaccordion"
                                                    class="incard-header collapsed card-link btn info"
                                                    style="background-color: rgb(175, 219, 245); width: 100%; font-weight: bolder; height: 45px;"
                                                    type="button" data-toggle="collapse" data-target="#collapsebleOne"
                                                    aria-expanded="true" aria-controls="collapsebleOne">
                                            </div>
                                        </div>

                                    </h4>
                                    <div id="collapsebleOne"
                                        class="card card-header accordion-collapse collapse collapse show"
                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="container">
                                                <div class="row mt-3">
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteProductName">Product Name<span style="color:red" class="required">*</span></label>
                                                        <select id="inviteProductName" class="form-control" onchange="check()">
                                                            <option>Select Product</option>
                                                            <option>SAMVITA</option>
                                                            <!-- <option>Samvita-Bio</option>
                                                            <option>Samvita-Alp</option> -->
                                                            <option>FITKIT</option>
                                                            <!-- <option>CCP</option>
                                                            <option>Lab App</option>
                                                            <option>Agada</option>
                                                            <option>Chemist</option> -->
                                                        </select>
                                                    </div>

                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteDiscription1">Discription</label>
                                                        <input type="text" class="form-control" id="inviteDescription1"
                                                         minlength="2" maxlength="32"    placeholder="Discription">
                                                    </div>

                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label>License Version<span style="color:red" class="required">*</span></label>

                                                        <select id="licenseVersion" class="form-control">
                                                            <option>M1</option>
                                                            <option>F1</option>
                                                        </select>
                                                    </div>


                                                </div>
                                                <div class="row mt-3">
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteSerialNumber">Kit Serial Number<span style="color:red" class="required">*</span> </label>
                                                        <input type="text" class="form-control"
                                                            name="inviteSerialNumber" id="inviteSerialNumber"
                                                            placeholder="Kit Serial Number" minlength="6" maxlength="12"
                                                            type="text" required>
                                                        <div class="form-errors"></div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteMacAddress">Mac Address<span style="color:red" class="required">*</span></label>
                                                        <input type="text" class="form-control" id="inviteMacAddress"
                                                         onkeydown="return /[a-z0-9A-Z:]/i.test(event.key)"   placeholder="Mac Address" name="macaddress" pattern="^[a-zA-Z\s]+$" maxlength="17" title="Please enter exactly 17 digits alphaneumaric" required/>
                                                    </div>


                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteProductStatus">Product Status</label>
                                                        <input type="text" class="form-control" id="inviteProductStatus"
                                                            placeholder="NEW" disabled>
                                                    </div>

                                                </div>
                                                <div class="row mt-3">
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="inviteProductWarranty">Warranty<span style="color:red" class="required">*</span></label>
                                                        <select id='inviteProductWarranty' class='form-control'><option>Select The Month</option>
                                                            <option>1 Month</option>
                                                            <option>2 Months</option>
                                                            <option>3 Months</option>
                                                            <option>4 Months</option>
                                                            <option>5 Months</option>
                                                            <option>6 Months</option>
                                                            <option>9 Months</option>
                                                            <option>12 Months</option>
                                                            <option>18 Months</option>
                                                            <option>24 Months</option>
                                                            <option>30 Months</option>
                                                            <option>36 Months</option>
                                                            </select>
                                                    </div>

                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label>License Duration</label>
                                                        <select id="lsd"
                                                            onchange="loadLicensePeriod(this,document.getElementById('licenseDuration'));"
                                                            class="form-control">
                                                            <option>Default 1 Year selected</option>
                                                            <option value="Year">Year</option>
                                                            <option value="Month">Month</option>
                                                            <option value="Days">Days</option>
                                                        </select>

                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="licenseDuration">License Period</label>
                                                        <select id="licenseDuration" class="form-control">
                                                            <option>1 Year</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="subdvcappend">
                            <div class="row mt-3">
                                <p class="col-lg-11 col-md-11 col-xs-11 text-left"
                                    style="margin: left 0; font-size: large;"><b>Devices</b></p>
                                <p class="text-right">
                                    <button onclick="appendSubDevice();" style="width: 50px;" type="button"
                                        class="btn btn-primary" data-target="#collapsebleThree" aria-expanded="true"
                                        aria-controls="subdvcappend">+</button>
                                </p>
                            </div>
                        </div>

                </div>
            </div>

        </div>
        <!-- /.card-body -->

        </form>

    </div>

    </div>
    </div>
    <!-- /End .modal -->
<!-- Logout pop up for Client modal-->


 <!-- Upload logo in Client modal-->

        <div class="modal fade" id="form-logout-product-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="form-logout-modal" autocomplete="off">
                            <div class="card-body" id="formLogout">
                            <h3 style={{fontFamily:'Roboto'}}> Do you want to Logout ?</h3><p style={{fontFamily:'Roboto', color:'red'}}>Your Session will be closed</p>
                                <div class="form-group">

                             </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button id="logoutProd" onclick="logout()" type="button" class="btn btn-primary">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                    style="display:none; text-align: center;" id="logoutprodSpinner"></span>
                                    Logout
                                </button>
                                <button id="dontlogoutProd" type="button" class="btn btn-primary">
                                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                     style="display:none; text-align: center;" id="dontlogoutprodSpinner"></span>
                                     NO
                                 </button>

                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    <!-- Update Product Modal -->

    <div class="modal fade" id="update-product-modal">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Update Product</h4>
                    <button type="button" class="close" id="clearModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row">
                    <p style="margin-left: 5%; font-size: large;"><b>Product</b></p>
                    <p class="col-lg-10 col-md-6 col-xs-4 text-right">
                        <button class="btn btn-primary" id="updateButton"
                            onclick="updateProductandSubdevices(),updateProductValidation()"
                            type="button">UPDATE</button>
                    </p>
                </div>

                <div class="modal-body">
                    <form id="basic-form">
                        <div class="card-body">
                            <div class="accordion accordion-flush"
                                data-responsive-accordion-tabs="tabs medium-accordion large-tabs"
                                id="accordionUpdateExample">
                                <div class="card accordion-item bg-default">
                                    <h4 class="accordion-header" id="updateheadingOne">
                                        <div class="row mt-3">
                                            <div class="col-xs-12 col-sm-11 col-lg-12">
                                                <input
                                                    value="Details 	                                                                                                                  &#xf107;"
                                                    id="updatefirstaccordion"
                                                    class="card-header collapsed card-link btn info "
                                                    style="background-color: rgb(175, 219, 245); width: 100%; font-weight: bolder; height: 45px;"
                                                    type="button" data-toggle="collapse"
                                                    data-target="#updatecollapsebleOne" aria-expanded="true"
                                                    aria-controls="updatecollapsebleOne">
                                            </div>
                                        </div>

                                    </h4>
                                    <div id="updatecollapsebleOne"
                                        class="card card-header accordion-collapse collapse collapse show"
                                        aria-labelledby="updateheadingOne" data-parent="#accordionUpdateExample">
                                        <div class="card-body">
                                            <div class="container">
                                                <div class="row mt-3">
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="updateProductName">Product Name</label>
                                                        <select id="updateProductName" class="form-control">

                                                        </select>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="updateSerialNumber">Kit Serial Number</label>
                                                        <input type="text" class="form-control" id="updateSerialNumber"
                                                            placeholder="Kit sirial no">
                                                    </div>



                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="updateDiscription1">Description</label>
                                                        <input type="text" class="form-control" id="updateDiscription1"
                                                            placeholder="Discription">
                                                    </div>



                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label>License Version</label>
                                                        <select id="updatelicenseVersion" class="form-control">
                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="row mt-3">

                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="updateProductStatus">Product Status</label>
                                                        <input type="text" class="form-control" id="updateProductStatus"
                                                            placeholder="new" disabled>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label>License Duration</label>
                                                        <select id="updatelsd"
                                                            onchange="loadLicensePeriod(this,document.getElementById('updatelsd2'))"
                                                            class="form-control">
                                                            <option>Default 1 Year selected</option>
                                                            <option value="Year">Year</option>
                                                            <option value="Month">Month</option>
                                                            <option value="Days">Days</option>
                                                        </select>

                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-lg-4">
                                                        <label for="updatelsd2">License Period</label>
                                                        <select id="updatelsd2" class="form-control">
                                                            <option>1 Year</option>
                                                        </select>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="updatesubdvcappend">
                            <div class="row mt-3">
                                <p class="col-lg-11 col-md-11 col-xs-11 text-left"
                                    style="margin: left 0; font-size: large;"><b>Devices</b></p>
                                <p class="text-right">
                                    <button id="updatesubprod" style="width: 50px;" type="button"
                                        class="btn btn-primary" data-target="#updatesubdvcappend" aria-expanded="true"
                                        aria-controls="updatesubdvcappend">+</button>
                                </p>
                            </div>
                        </div>

                </div>
            </div>
        </div>

    </div>

    <!-- /End .modal -->

  <!-- Renew Modal -->
  <form id="renewal">
  <div class="modal fade" id="renew-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Renew</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row mt-3">
            <div class="col-xs-12 col-sm-6 col-lg-6">
          <div class="form-group">
            <label>Kit Serial number</label>
            <input type="text" id="renewalKitNo" placeholder="Kit serial number" class="form-control" style="width: 100%;">
          </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-6">
            <div class="form-group">
              <label for="renewalDate">License expiry date</label>
              <input type="date" class="form-control" id="renewalDate">
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-xs-12 col-sm-6 col-lg-6">
              <label >License Duration</label>
            <select id="subscriptionType" onchange="loadLicensePeriod(this,document.getElementById('subscriptionType2'))" class="form-control">
            <option>Default 1 Year selected</option>
            <option value="Year">Year</option>
            <option value="Month">Month</option>
            <option value="Days">Days</option>
             </select>

            </div>
            <div class="col-xs-12 col-sm-6 col-lg-6 ">
              <label for="renewLicensePeriods">License Period</label>
                <select id="subscriptionType2" class="form-control" >
                <option>1 Year</option>
                </select>
              </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <div class="form-group">
              <label for="reasonDescription">Reason Description</label>
              <textarea type="text" class="form-control" id="reasonDescription" placeholder="Reason"></textarea>
              </div>
        </div>
            <div class="col-xs-12 col-sm-6 col-lg-6">
              <div class="form-group">
                      <label>Payment Details</label>
                      <input type="text" id="paymentDetails" placeholder="Payment Details" class="form-control" style="width: 100%;">
                    </div>
                </div>

          </div>

              </div>
              <div class="modal-footer justify-content-between">
                <button id="renewButton" type="button" onclick="renewApi(),renewProductValidation()" class="btn btn-primary">Renew</button>

              </div>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
      </form>






    <!-- ./wrapper -->

    <!-- jQuery -->
    <script src="resources/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Select2 -->
    <script src="resources/plugins/select2/js/select2.full.min.js"></script>
    <!-- jsGrid -->
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
    <script src="resources/custom/js/products.js"></script>
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/login.js"></script>
    <script src="resources/custom/js/logout.js"></script>
    <script>
        $(function () {
            $('.select2').select2();

            $('.list-group-item').on('mouseenter', function (e) {
                $(this).addClass('mouseover');
            }).on('mouseleave', function (e) {
                $(this).removeClass('mouseover');
            });

            $('.list-group-item').on('click', function () {
                console.log('clicked item');
            });

            // LIST-ITEM REMOVE BUTTON EVENT HANDLERS

            $('.remove-item').on('mouseenter', function (e) {
                $(this).addClass('mouseover');
                $(this).parent().mouseleave();
            }).on('mouseleave', function (e) {
                $(this).removeClass('mouseover');
                $(this).parent().mouseenter();
            });

            $('.remove-item').on('click', function (e) {
                console.log('clicked remove-item btn');
                e.stopPropagation();
            });

        });

    //After select fitkit macaddress field dissabled
    function check(){
      if(document.getElementById('inviteProductName').value =='SAMVITA')
        document.getElementById('inviteMacAddress').disabled=false;
      else
        document.getElementById('inviteMacAddress').disabled=true;
    }

    function renewProductValidation(){
        console.log("VALIDATION Update");
        if ($.trim($("#renewalDate").val()) === "" || $.trim($("#subscriptionType2").val()) === "" ||
         $.trim($("#reasonDescription").val()) === "" || $.trim($("#paymentDetails").val()) === "") {
            alert('Please Fill All The Fields');
            return false;
        }
    }
 $(function () {
     $("#invite-product-modal").on("hidden.bs.modal", function (e) {
        console.log("Modal hidden");
           $("#Addbasic-form").trigger("reset");
            $("#subdeviceModal1")[0].reset();
            $("#subdeviceModal2")[0].reset();
            $("#subdeviceModal3")[0].reset();
        });
     });
     $(function () {
          $("#productDetails-modal").on("hidden.bs.modal", function (e) {
             console.log("Modal hidden");

             window.location.reload();
                 $('#viewProductModal').html("");
             });
          });

     $('#productResetBtn').click(function(){
                  $('#Addbasic-form')[0].reset();
                  $("#subdeviceModal1")[0].reset();
                  $("#subdeviceModal2")[0].reset();
                  $("#subdeviceModal3")[0].reset();
                  $("#subdeviceModal4")[0].reset();
                  $("#subdeviceModal5")[0].reset();
     });



    </script>
</body>

</html>