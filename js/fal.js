CRM.$(function ($) {
// Code goes here!
  $('.fast-action-link').click(function () {
    // Suppress the link-following behavior
    alert('hello');
    return false;
  });
});