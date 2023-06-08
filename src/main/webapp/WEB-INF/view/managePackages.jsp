
<!DOCTYPE html>
<html lang="en">

<head>
    <base class="base_context_path" href="" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Manage Packages</title>

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
                        <li class="nav-item sidebar-active">
                            <a href="./distributors" class="nav-link hide-unauth">
                                <i class="nav-icon fas fa-medkit"></i>
                                <p>
                                    Manage Distributors
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

                        <li class="nav-item">
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
                                <li class="nav-item">
                                    <a href="./consumers" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Patient Management</p>
                                    </a>
                                </li>
                                <li class="nav-item sidebar-active">
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
                            <h1>Package Management</h1>
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
                                                aria-controls="custom-tabs-one-home" aria-selected="true">Packages</a>
                                        </li>
                                        <li class="nav-item">
                                           <a class="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill"
                                              href="#custom-tabs-one-settings" role="tab"
                                                  aria-controls="custom-tabs-one-settings" aria-selected="false"
                                                     onclick='loadPackCategoryTable()'>Package Category</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill"
                                                href="#custom-tabs-one-profile" role="tab"
                                                aria-controls="custom-tabs-one-profile" aria-selected="false"
                                                onclick='loadServicesTable()'>Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill"
                                                href="#custom-tabs-one-messages" role="tab"
                                                aria-controls="custom-tabs-one-messages" aria-selected="false"
                                                onclick='loadSerTypeTable()'>Service Type</a>
                                        </li>


                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-one-tabContent">
                                        <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-home-tab">
                                            <div class="col-3" style="margin-bottom:10px;">
                                            <button type="button" class="btn btn-primary" onclick="importPackageCsv();">
                                            Import Package
                                            </button>

                                            </div>
                                            <!-- /.card-header -->
                                            <div style="display:none; " id="pack-table-spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>

                                            <div style="display:none;" id="pack_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="pack_table" class="display table-responsive" style="width:100%">
                                                <thead bgcolor="#EEF7A6">
                                                    <tr>
                                                        <th>Package Name</th>
                                                        <th>Package Id</th>
                                                        <th>Duration</th>

                                                        <th>Cost</th>
                                                        <th>Currency</th>
                                                        <th>Package Discount Price</th>
                                                        <th>Package Category</th>
                                                        <th>Created Date</th>
                                                        <th>Expiry Date</th>
                                                        <th>Status</th>

                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Package Name</th>
                                                        <th>Package Id</th>
                                                        <th>Duration</th>

                                                        <th>Cost</th>
                                                        <th>Currency</th>
                                                        <th>Package Discount Price</th>
                                                        <th>Package Category</th>
                                                        <th>Created Date</th>
                                                        <th>Expiry Date</th>
                                                        <th>Status</th>

                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-profile-tab">
                                            <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                                   onclick="importServiceCsv();">
                                                    Add Service
                                                </button>
                                            </div>
                                            <div style="display:none; " id="pack_services_table-spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>
                                            <div style="display:none;" id="pack_services_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="pack_services_table" class="display" style="width:100%">
                                                <thead bgcolor="#EEF7A6">
                                                    <tr>
                                                        <th>Service Name</th>
                                                         <th>Code</th>
                                                        <th>Service Type</th>
                                                        <th>Cost</th>
                                                        <th>Currency</th>
                                                        <th>Discount Price</th>
                                                        <th>GST</th>

                                                        <th>Last Updated</th>


                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Service Name</th>
                                                         <th>Code</th>
                                                        <th>Service Type</th>
                                                        <th>Cost</th>
                                                        <th>Currency</th>
                                                        <th>Discount Price</th>
                                                        <th>GST</th>

                                                        <th>Last Updated</th>


                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-messages-tab">
                                            <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                                    onclick="importServiceCategoryCsv();">
                                                    Add Service Type
                                                </button>
                                            </div>
                                            <div style="display:none;" id="pack_ser_type-table-spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>
                                            <div style="display:none;" id="pack_ser_type_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="pack_ser_type_table" class="display" style="width:100%">
                                                <thead bgcolor="#EEF7A6">
                                                    <tr>
                                                        <th>Service Type</th>
                                                        <th>Code</th>
                                                        <th>Created Date</th>
                                                        <th>Last Updated</th>


                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Service Type</th>
                                                        <th>Code</th>
                                                        <th>Created Date</th>
                                                        <th>Last Updated</th>


                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-settings" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-settings-tab">
                                            <div class="col-3" style="margin-bottom:10px;">
                                                <button type="button" class="btn btn-primary" onclick="importPackageCategoryCsv();">
                                                    Add Category
                                                </button>
                                            </div>
                                            <div style="display:none;" id="pack_category_table-spinner">
                                                <span class="spinner-grow spinner-grow-sm" role="status"
                                                    style="margin-right:5px;" aria-hidden="true"></span>LoadingTable..
                                            </div>
                                            <div style="display:none;" id="pack_category_table_no_data">
                                                No Data Found!!
                                            </div>
                                            <table id="pack_category_table" class="display" style="width:100%">
                                                <thead bgcolor="#EEF7A6">
                                                    <tr>
                                                        <th>Category Name</th>
                                                        <th>Code</th>
                                                        <th>Created Date</th>
                                                        <th>Last Updated</th>


                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Category Name</th>
                                                        <th>Code</th>
                                                        <th>Created Date</th>
                                                        <th>Last Updated</th>


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


    <!-- Add Package Modal -->
    <div class="modal fade" id="add-package-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add New Package</h4>
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
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button id="inviteBtn" type="button" onclick="addPackageApiCall();"
                                class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->


// Import Services Modal


        <div class="modal fade" id="import-service-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Import Services</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="import-service-form" autocomplete="off">
                            <div class="form-group">
                                 <div class="form-group">
                                     <label for="exampleInputFile">File input</label>

                                       <div class="input-group">
                                          <div class="custom-file">
                                            <input type="file" accept=".csv" name="fileUpload"  id="serviceFile" >
                                               <label class="custom-file-upload" for="serviceFile" ></label>
                                                </div>
                                              </div>
                                 </div>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary" id="uploadCsvServices" onclick="imprtCsvservices();"
                                            style="cursor: pointer;">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                style="display:none;" id="uploadCsvservicesSpinner"></span>
                                            Upload</button>
                                           <button type="button" class="btn btn-outline-primary btn-sm" id="sampleservices" onclick="window.location.href = downloadCsvServices();"
                                           style="cursor: pointer; margin-left: 10px;">
                                            Sample File</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    <!-- /.modal -->


// Import Services Type


        <div class="modal fade" id="import-service-type-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Import Services Type</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="import-service-type-form" autocomplete="off">
                            <div class="form-group">
                                 <div class="form-group">
                                     <label for="exampleInputFile">File input</label>

                                       <div class="input-group">
                                          <div class="custom-file">
                                            <input type="file" accept=".csv" name="fileUpload"  id="serviceTypeFile" >
                                               <label class="custom-file-upload" for="serviceTypeFile" ></label>
                                                </div>
                                              </div>
                                 </div>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary" id="uploadCsvServicesType" onclick="imprtCsvservicesType();"
                                            style="cursor: pointer;">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                style="display:none;" id="uploadservicesTypeSpinner"></span>
                                            Upload</button>
                                           <button type="button" class="btn btn-outline-primary btn-sm" id="sampleservices" onclick="window.location.href = downloadCsvServiceType();"
                                           style="cursor: pointer; margin-left: 10px;">
                                            Sample File</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    <!-- Import package -->
        <div class="modal fade" id="import-package-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Import Package</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="import-package-form" autocomplete="off">
                            <div class="form-group">
                                 <div class="form-group">
                                     <label for="exampleInputFile">File input</label>

                                       <div class="input-group">
                                          <div class="custom-file">
                                            <input type="file" accept=".csv" name="fileUpload"  id="exampleInputFile" >
                                               <label class="custom-file-upload" for="exampleInputFile" ></label>
                                                </div>
                                              </div>
                                 </div>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary" id="uploadCsvPackage" onclick="uploadCsv();"
                                            style="cursor: pointer;">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                style="display:none;" id="uploadCsvSpinner"></span>
                                            Upload</button>
                                           <button type="button" class="btn btn-outline-primary btn-sm" id="sampleCsvPackage" onclick="window.location.href = downloadCsv();"
                                           style="cursor: pointer; margin-left: 10px;">
                                            Sample File</button>
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


// Import package Category


        <div class="modal fade" id="import-package-category-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Import Package Category</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="import-package-category-form" autocomplete="off">
                            <div class="form-group">
                                 <div class="form-group">
                                     <label for="exampleInputFile">File input</label>

                                       <div class="input-group">
                                          <div class="custom-file">
                                            <input type="file" accept=".csv" name="fileUpload"  id="packageCategoryFile" >
                                               <label class="custom-file-upload" for="packageCategoryFile" ></label>
                                                </div>
                                              </div>
                                 </div>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary" id="uploadCsvPackageCategory" onclick="uploadPackageCategory();"
                                            style="cursor: pointer;">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                                style="display:none;" id="uploadCsvpackageCategorySpinner"></span>
                                            Upload</button>
                                           <button type="button" class="btn btn-outline-primary btn-sm" id="samplePackageCategory" onclick="window.location.href = downloadCsvpackCategory();"
                                           style="cursor: pointer; margin-left: 10px;">
                                            Sample File</button>
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
    <!-- AdminLTE App -->
    <script src="resources/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="resources/js/demo.js"></script>
    <!-- Toastr -->
    <script src="resources/js/toastr.min.js"></script>
    <!-- Pristine -->
    <script src="resources/js/pristine.min.js"></script>
    <!-- Page specific script -->
    <script src="resources/custom/js/package.js"></script>
    <script src="resources/custom/js/config.js"></script>
    <script src="resources/custom/js/logout.js"></script>
    <script>
    $(function () {
         $("#import-package-modal").on("hidden.bs.modal", function (e) {
         console.log("Modal hidden");
         $("#import-package-form").trigger("reset");
         });
      })

      $(function () {
               $("#import-package-category-modal").on("hidden.bs.modal", function (e) {
               console.log("Modal hidden");
               $("#import-package-category-form").trigger("reset");
               });
            })

 $(function () {
          $("#import-service-modal").on("hidden.bs.modal", function (e) {
          console.log("Modal hidden");
          $("#import-service-form").trigger("reset");
          });
       })
       $(function () {
                $("#import-service-type-modal").on("hidden.bs.modal", function (e) {
                console.log("Modal hidden");
                $("#import-service-type-form").trigger("reset");
                });
             })
    </script>
</body>

</html>