/* global $ */
'use strict';

// Show shortcuts
$('.opening').show();
// $('.home').show();
// $('.cards').show();
//$('.add-card').show();
//$('.edit-card').show();
// $('.transactions').show();
// $('.transactions-cards').show();

$('.opening .icon').click(function ()
{
  $('.opening').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

/* Forward */
$('.home-cards .home-cell-top').click(function ()
{
  $('.home').fadeOut('slow');
  $('.cards').delay(500).fadeIn('slow');
});

$('#cards-add-card').click(function ()
{
  $('.home').fadeOut('slow');
  $('.add-card').delay(500).fadeIn('slow');
});
$('#home-add').click(function ()
{
  $('.home').fadeOut('slow');
  $('.add-card').delay(500).fadeIn('slow');
});
$('#cards-add').click(function ()
{
  $('.cards').fadeOut('slow');
  $('.add-card').delay(500).fadeIn('slow');
});

$('.cards .cell').click(function ()
{
  $('.cards').fadeOut('slow');
  $('.edit-card').delay(500).fadeIn('slow');
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

$('.transactions-cards .cell-section').click(function ()
{
  $('.transactions-cards').fadeOut('slow');
  $('.transactions').delay(500).fadeIn('slow');
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
$('.add-card .back-icon').click(function ()
{
  $('.add-card').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});
$('.edit-card .back-icon').click(function ()
{
  $('.edit-card').fadeOut('slow');
  $('.cards').delay(500).fadeIn('slow');
});

$('.pay .back-icon').click(function ()
{
  $('.pay').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

$('.transactions-cards .back-icon').click(function ()
{
  $('.transactions-cards').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

$('.transactions .back-icon').click(function ()
{
  $('.transactions').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});

$('.deals .back-icon').click(function ()
{
  $('.deals').fadeOut('slow');
  $('.home').delay(500).fadeIn('slow');
});