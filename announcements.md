---
title: Announcements
layout: page
description: Recent announcements and updates

---


 <div id="loginbox" class="lightbox" >
  <div class="horizontal">
   <div class="vertical">
    <div class="box">
     <input style="margin: 16px; text-align: center;" id="password" type="password" placeholder="password" /> <br />
     <button id="loginbutton" type="button">Enter</button>
     <p id="wrongPassword" style="display: none">wrong password</p>
    </div>
   </div>
  </div>
 </div>

<script type="text/javascript" src="/assets/js/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script type="text/javascript" src="/assets/js/sha1.js"></script>

 <script type="text/javascript">
 "use strict";

 function loadPage(pwd) {

  var hash= pwd;
  hash= Sha1.hash(pwd);
  var url= window.location.origin + "/" + hash + "/announcements/index.html";

  $.ajax({
   url : url,
   dataType : "html",
   success : function(data) {

    window.location= url;

   },
   error : function(xhr, ajaxOptions, thrownError) {

    parent.location.hash= hash;

    //$("#wrongPassword").show();
    $("#password").attr("placeholder","wrong password");
    $("#password").val("");
   }
  });
 }

 $("#loginbutton").on("click", function() {
  loadPage($("#password").val());
 });
 $("#password").keypress(function(e) {
  if (e.which == 13) {

   loadPage($("#password").val());
  }
 });
 $("#password").focus();

 </script>
