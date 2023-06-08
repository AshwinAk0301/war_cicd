
<!DOCTYPE html>
<html lang="en">
<head>
  <base href="./"/>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tickets Page</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="resources/plugins/fontawesome-free/css/all.min.css">
    <!-- jsGrid -->
  <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid.min.css">
  <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid-theme.min.css">
  <!-- Datatable -->
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.css"/>
  <!-- Theme style -->
  <link rel="stylesheet" href="resources/css/adminlte.min.css">
</head>
<body class="hold-transition sidebar-mini">
  <style>
    .sidebar-active > a {
    background-color: dimgray;   
  }
  </style>
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
<div style="display:none;"><!-- Hide Navbar-->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
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
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
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
              <img src="resources/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
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
              <img src="resources/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
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
              <img src="resources/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
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
      <img src="resources/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
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
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
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
          
          <li class="nav-item">
            <a href="./logs" class="nav-link">
              <i class="nav-icon fas fa-history"></i>
              <p>
                Manage Audit Log
              </p>
            </a>
          </li>
          
          <li class="nav-item sidebar-active">
            <a href="./tickets" class="nav-link">
              <i class="nav-icon fas fa-headset"></i>
              <p>
                Manage Tickets
              </p>
            </a>
          </li> 
          <li class="nav-item">
          <a href="./consultation" class="nav-link">
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
            <h1>Manage Tickets! Coming soon...</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#" class="logout" onclick="logout();">Logout</a></li>
              <li class="breadcrumb-item active">Manage Tickets</li>
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

            <!-- 
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with minimal features & hover style</h3>
              </div>
              
              <div class="card-body">
                <table id="userTable" class="display" style="width:100%">
			        <thead>
			            <tr>
			                <th>Name</th>
			                <th>Symbol</th>
			                <th>Price</th>
			                <th>Difference</th>
			                <th>Last</th>
			            </tr>
			        </thead>
			        <tfoot>
			            <tr>
			                <th>Name</th>
			                <th>Symbol</th>
			                <th>Price</th>
			                <th>Difference</th>
			                <th>Last</th>
			            </tr>
			        </tfoot>
			    </table>
              </div>
           
            </div> -->
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
<!-- AdminLTE App -->
<script src="resources/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="resources/js/demo.js"></script>
<!-- Page specific script -->
<script src="resources/custom/js/config.js"></script>
<script src="resources/custom/js/login.js"></script>
<script src="resources/custom/js/tickets.js"></script>
<script src="resources/custom/js/logout.js"></script>
<script>
/*

var stock_data = [
      {
          "name": "ACME Gadgets",
          "symbol": "AGDTS",
          "last": [2.57, 2.54, 2.54, 2.56, 2.57, 2.58, 2.59]
      },
      {
          "name": "Spry Media Productions",
          "symbol": "SPMP",
          "last": [1.12, 1.11, 1.08, 1.08, 1.09, 1.11, 1.08]
      },
      {
          "name": "Widget Emporium",
          "symbol": "WDEMP",
          "last": [3.40, 3.39, 3.46, 3.51, 3.50, 3.48, 3.49]
      },
      {
          "name": "Sole Goodman",
          "symbol": "SGMAN",
          "last": [16.20, 16.40, 16.36, 16.35, 16.61, 16.46, 16.19]
      },
      {
          "name": "Stanler Bits and Bobs",
          "symbol": "SBIBO",
          "last": [82.51, 83.47, 83.40, 83.68, 83.81, 83.29, 83.72]
      }
  ];
  
  $(function () {
	  $('#userTable').DataTable( {
		  	data: stock_data,
		  	drawCallback: function() {
	            $('.sparkline')
	                .map(function() {
	                    return $('canvas', this).length ? null : this;
	                })
	                .sparkline('html', {
	                    type: 'line',
	                    width: '250px'
	                })
	        },
	        columns: [
	            {
	                data: 'name'
	            },
	            {
	                data: 'symbol'
	            },
	            {
	                data: null,
	                render: function(data, type, row, meta) {
	                    return row.last[row.last.length - 1].toFixed(2);
	                }
	            },
	            {
	                data: null,
	                render: function(data, type, row, meta) {
	                    var val = (row.last[row.last.length - 1] - row.last[row.last.length - 2]).toFixed(2);
	                    var colour = val < 0 ? 'red' : 'green'
	                    return type === 'display' ?
	                        '<span style="color:' + colour + '">' + val + '</span>' :
	                        val;
	                }
	            },
	            {
	                data: 'last',
	                render: function(data, type, row, meta) {
	                    return type === 'display' ?
	                        '<span class="sparkline">' + data.toString() + '</span>' :
	                        data;
	                }
	            }
	        ]
	    } );
	    
	  });

*/

</script>
</body>
</html>
