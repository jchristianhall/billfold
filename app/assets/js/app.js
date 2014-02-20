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

// Start
$('.opening').addClass('bounce-in animated');

/* Animation functions */
function forward(current, next)
{
  $(current).addClass('fade-left-out animated');
  setTimeout(function ()
  {
    $(current).hide();
    $(current).removeClass('fade-right-in fade-left-out animated');
    $(next).show();
  }, 500);
  $(next).addClass('fade-right-in animated');
}

function backward(current, next)
{
  $(current).addClass('fade-right-out animated');
  setTimeout(function ()
  {
    $(current).hide();
    $(current).removeClass('fade-left-in fade-right-out animated');
    $(next).show();
  }, 500);
  $(next).addClass('fade-left-in animated');
}

function showModal(current, next)
{
  $(current).addClass('fade-left-out animated');
  setTimeout(function ()
  {
    $(current).hide();
    $(current).removeClass('fade-left-in fade-left-out animated');
    $(next).show();
  }, 500);
  $(next).addClass('bounce-up-in animated');
}

function hideModal(current, next)
{
  $(current).addClass('bounce-up-out animated');
  setTimeout(function ()
  {
    $(current).hide();
    $(current).removeClass('bounce-up-in bounce-up-out animated');
    $(next).show();
  }, 500);
  $(next).addClass('fade-left-in animated');
}

function paid()
{
  $('.overlay').show().addClass('fade-in animated');
  $('.paid-modal').show().addClass('bounce-in animated');
  setTimeout(function ()
  {
    $('.overlay').addClass('fade-out');
    $('.paid-modal').addClass('bounce-out');
  }, 1000);
  setTimeout(function ()
  {
    $('.overlay').hide().removeClass('fade-in fade-out animated');
    $('.paid-modal').hide().removeClass('bounce-in bounce-out animated');
  }, 2000);
}

$('.opening .icon').click(function ()
{
  forward('.opening', '.passcode');
});

/* Forward */
$('.passcode-placeholder').click(function ()
{
  forward('.passcode', '.home');
});
$('.home-cards .home-cell-top').click(function ()
{
  forward('.home', '.cards');
});

$('#cards-add-card').click(function ()
{
  forward('.home', '.add-card');
});
$('#home-add').click(function ()
{
  forward('.home', '.add-card');
});
$('#cards-add').click(function ()
{
  forward('.cards', '.add-card');
});

$('.cards .cell').click(function ()
{
  forward('.cards', '.edit-card');
});

$('.home-pay .home-cell-top').click(function ()
{
  forward('.home', '.pay');
});

$('#pay-pay-now').click(function ()
{
  showModal('.home', '.pay-now');
});

$('#pay-send-cash').click(function ()
{
  showModal('.home', '.send-cash');
});

$('.home-transactions').click(function ()
{
  forward('.home', '.transactions-cards');
});

$('.transactions-cards .cell-section').click(function ()
{
  forward('.transactions-cards', '.transactions');
});

$('.home-deals').click(function ()
{
  forward('.home', '.deals');
});

$('.deals-placeholder').click(function ()
{
  showModal('.deals', '.view-deals');
});

$('.settings-icon').click(function ()
{
  forward('.home', '.settings');
});


/* Back */
$('.cards .back-icon').click(function ()
{
  backward('.cards', '.home');
});
$('.add-card .back-icon').click(function ()
{
  backward('.add-card', '.home');
});
$('.edit-card .back-icon').click(function ()
{
  backward('.edit-card', '.cards');
});

$('.pay-now-placeholder').click(function ()
{
  hideModal('.pay-now', '.home');
  setTimeout(paid, 1000);
});

$('.send-cash-placeholder').click(function ()
{
  hideModal('.send-cash', '.home');
  setTimeout(paid, 1000);
});

$('.pay .back-icon').click(function ()
{
  backward('.pay', '.home');
});
$('.pay-placeholder').click(function ()
{
  backward('.pay', '.home');
  setTimeout(paid, 1000);
});

$('.transactions-cards .back-icon').click(function ()
{
  backward('.transactions-cards', '.home');
});

$('.transactions .back-icon').click(function ()
{
  backward('.transactions', '.home');
});

$('.deals .back-icon').click(function ()
{
  backward('.deals', '.home');
});

$('.view-deals-placeholder').click(function ()
{
  hideModal('.view-deals', '.deals');
});

$('.settings-placeholder').click(function ()
{
  backward('.settings', '.home');
});