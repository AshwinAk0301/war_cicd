<!DOCTYPE html>
<html lang="en">
<head>
  <base href="./">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Log-in</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/icheck-bootstrap/3.0.1/icheck-bootstrap.min.css">
  <!-- jsGrid -->
  <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid.min.css">
  <link rel="stylesheet" href="resources/plugins/jsgrid/jsgrid-theme.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/css/adminlte.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="resources/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="resources/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="resources/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

</head>
<body class="hold-transition login-page">
<div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="" class="h1"><b>USER </b>Portal</a>
    </div>
    <div class="card-body">      
      <p class="login-box-msg" 
      style="color:#FFFFFF;font-size:20px;text-shadow: 2px 2px 4px blue;">
      Client Admin
      </p>

      <!-- <form action="/dashboard" method="post"> -->
      <form >
	      
	      
	      
	      <div id="loginByPhone">
	      	
	      	<div id="phoneBox">
		      	<div class="input-group mb-3" id="mobileField">
		          <input type="number" id="phoneNum" class="form-control" min="10" max="10" placeholder="Mobile" onkeypress="hideClientErrorText()">
		          <div class="input-group-append">
		            <div class="input-group-text">
		              <span class="fas fa-mobile-alt"></span>
		            </div>
		          </div>
		        </div>
		        
		        <div class="input-group mb-3" >
		          <p id="errorClientMessage1" style="display:none;color:red;margin:0px;font-style:italic;">Error Message from server</p>
		        </div>
		        
		        <div class="row">          
		          <!-- /.col -->
		          <div class="col-3"></div>
		          <div class="col-6">
		          <!-- <button type="submit" class="btn btn-primary btn-block">Sign In</button> -->
		            <button type="button" class="btn btn-primary btn-block" onclick="loginByPhone();" id="sendBtn">
		            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style="display:none;" id="sendSpinner"></span>
		            Send
		            </button>
		          </div>
		          <div class="col-3"></div>
		          <!-- /.col -->
		        </div>
		    </div>
	        
	        <div id="otpBox" style="display:none;">
	        	<div class="input-group mb-3" id="otpField">
		          <input type="number" id="phoneOtp" class="form-control" placeholder="OTP" onkeypress="hideClientErrorText()">
		          <div class="input-group-append">
		            <div class="input-group-text">
		              <span class="fas fa-lock"></span>
		            </div>
		          </div>
		        </div>
		        
		        <div class="input-group mb-3" >
		          <p id="errorClientMessage2" style="display:none;color:red;margin:0px;font-style:italic;">Error Message from server</p>
		        </div>
		        
		        <div class="row">          
		          <!-- /.col -->
		          <div class="col-3"></div>
		          <div class="col-6">
		          <!-- <button type="submit" class="btn btn-primary btn-block">Sign In</button> -->
		            <button type="button" class="btn btn-primary btn-block" onclick="verifyOtp();" id="verifyBtn">
		            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style="display:none;" id="verifySpinner"></span>
		            Verify
		            </button>		            
		          </div>
		          <div class="col-3"></div>
		          <!-- /.col -->
		        </div>
	        </div>
	        
	      </form>
		      
	      <!-- /.social-auth-links -->
		<!-- 
		<div class="social-auth-links text-center mt-2 mb-3" id="adminSwitchBtn">
	        <a href="#" class="btn btn-block btn-secondary" style="background:#00008B;" onclick="showWriztoLogin();">
	          <i class="fas fa-mobile-alt"></i> Switch to Wrizto Admin Sign in
	        </a>	        
	      </div>
			<p class="mb-1">
	        <a href="forgot-password.html">I forgot my password</a>
	      </p>
	      <p class="mb-0">
	        <a href="register.html" class="text-center">Register a new membership</a>
	      </p>
		 -->
		 
		
      </div>
	      
	    </div>
	      </div>
	      
	      
        
        
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
<!-- /.login-box -->

      <!-- /.modal -->


<!-- jQuery -->
<script src="resources/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- jsGrid -->
<script src="resources/plugins/jsgrid/jsgrid.min.js"></script>
<!-- AdminLTE App -->
<script src="resources/js/adminlte.min.js"></script>
<!-- Page specific script -->
<script src="resources/custom/js/login.js"></script>
<script src="resources/custom/js/config.js"></script>

<!-- DataTables  & Plugins -->
<script src="resources/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="resources/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="resources/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="resources/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="resources/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="resources/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="resources/plugins/jszip/jszip.min.js"></script>
<script src="resources/plugins/pdfmake/pdfmake.min.js"></script>
<script src="resources/plugins/pdfmake/vfs_fonts.js"></script>
<script src="resources/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="resources/plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="resources/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>


<script>

function redirect() {
	let url = "./products";
	window.location.href=url;
}

function loadClientModal(){
	$('#clientTable-modal').modal('show');
	
	$("#example1").DataTable({
	      "responsive": true, "lengthChange": false, "autoWidth": false,
	      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
	}).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
	
	
	    $('#example2').DataTable({
	      "paging": true,
	      "lengthChange": false,
	      "searching": false,
	      "ordering": true,
	      "info": true,
	      "autoWidth": false,
	      "responsive": true,
	      
	    });
}
 
</script>
</body>
</html>