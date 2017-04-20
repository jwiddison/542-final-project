// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
// = require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
//= require moment
//= require fullcalendar/fullcalendar
//= require daterangepicker


$( document ).ready( function () {
  $( window ).resize( function () {
    var footerHeight = $('.footer').outerHeight();
    var stickFooterPush = $('.push').height(footerHeight);

    $('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
  });

  $( window ).resize();

});


$(document).ready(function(){
  // Add Form-control classes to Devise Form Elements
  $('#user_email').addClass('form-control');
  $('#user_password').addClass('form-control');
  $('#user_password_confirmation').addClass('form-control');
  $('#user_current_password').addClass('form-control');
});
