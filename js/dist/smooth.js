"use strict";$(document).ready(function(){$(".smooth").click(function(t){t.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},700)})});
