<!DOCTYPE html>
<html lang="en">
<head>
  <!-- <base class="base_context_path"/> -->
  <base href="./">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Log in</title>

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
  <!-- Datatable -->
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.css"/>

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
      Wrizto
      </p>

      <!-- <form action="/dashboard" method="post"> -->
      <form >
	      <div id="loginByUserName" >
		      	<div class="input-group mb-3">
		          <input type="text" class="form-control" placeholder="Username" id="wriztoUN" onkeypress="hideErrorText()">
		          <div class="input-group-append">
		            <div class="input-group-text">
		              <span class="far fa-user"></span>
		            </div>
		          </div>
		        </div>
		        <div class="input-group mb-3">
		          <input type="password" class="form-control" placeholder="Password" id="wriztoPWD" onkeypress="hideErrorText()">
		          <div class="input-group-append">
		            <div class="input-group-text">
		              <span class="fas fa-lock"></span>
		            </div>
		          </div>
		        </div>
		        
		        <div class="input-group mb-3" >
		          <p id="errorMessage" style="display:none;color:red;margin:0px;font-style:italic;">Error Message from server</p>
		        </div>
		        
		        <div class="row" >          
		          <!-- /.col -->
		          <div class="col-3"></div>
		          <div class="col-6">
		          <!-- <button type="submit" class="btn btn-primary btn-block">Sign In</button> -->
		            <button type="button" class="btn btn-primary btn-block" onclick="loginByUserName();" id="signInBtn">
		            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style="display:none;" id="signInSpinner"></span>
		            Sign In
		            </button>
		          </div>
		          <div class="col-3"></div>
		          <!-- /.col -->
		       </div>		       		       
		       <!-- 
		       <div class="social-auth-links text-center mt-2 mb-3" id="clientSwitchBtn">
		        <a href="#" class="btn btn-block btn-primary" style="background:#00008B;" onclick="showClientLogin();">
		          <i class="fas fa-mobile-alt"></i> Switch to Client Sign in
		        </a>
		        
		      </div>
		        -->
	      </div>	      	      
	        
	   </form>
	      <!-- /.social-auth-links -->
		<!-- 
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
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.js"></script>


<script>

function redirect() {
	var url = "./dashboard";
	window.location.href=url;
}


 
</script>
</body>
</html>