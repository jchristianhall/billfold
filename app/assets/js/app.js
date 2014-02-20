/* global $ */
'use strict';
$('.opening .icon').click(function ()
{
  $('.opening').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

/* Forward */
$('.home-cards').click(function ()
{
  $('.home').fadeOut('slow');
  $('.cards').delay(500).fadeIn('slow');
});

$('.home-pay').click(function ()
{
  $('.home').fadeOut('slow');
  $('.pay').delay(500).fadeIn('slow');
});

$('.home-transactions').click(function ()
{
  $('.home').fadeOut('slow');
  $('.transactions-cards').delay(500).fadeIn('slow');
});

$('.home-deals').click(function ()
{
  $('.home').fadeOut('slow');
  $('.deals').delay(500).fadeIn('slow');
});

/* Back */
$('.cards .back-icon').click(function ()
{
  $('.cards').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

$('.transactions-cards .back-icon').click(function ()
{
  $('.transactions-cards').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});