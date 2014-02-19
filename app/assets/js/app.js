/* global $ */
'use strict';
$('.opening-screen .icon').click(function ()
{
  $('.opening-screen').fadeOut('slow');
  $('.home-screen').delay(500).fadeIn('slow');
});

$('.avatar').click(function ()
{
  $('.home-screen').fadeOut('slow');
  $('.opening-screen').delay(500).fadeIn('slow');
});