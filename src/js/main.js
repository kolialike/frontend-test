jQuery(function($){
   var body = $("body");
  //menu
  var menuBurger = $(".menu-burger");
  menuBurger.on('click', function(event) {
  	event.preventDefault();
  	body.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
  	event.preventDefault();
  	body.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
  	event.stopPropagation();
  });

  //paralax
    var header = $("#header");
    var headerWidth = header.outerWidth();
    var headerHeight = header.outerHeight();
    var parallax = $(".parallax");
    var coef = 20;
    header.on('mousemove', function(event) {
      var cordX = event.pageX - headerWidth/2;
      var cordY = event.pageY - headerHeight/2;
      parallax.css({
        "marginLeft": -(cordX+cordY)/coef + "px"
      })
    });
  


  // menu-list-tile
  var menuTileList = $(".menu-tile-list a");
  var menuTile = $("#menu-tile");
  var menuList = $("#menu-list");
  menuTileList.on('click', function(event) {
  	event.preventDefault();
  	$(this).addClass('active').siblings().removeClass('active');
  	var index = menuTileList.index($(this));
  	if (index == 0) {
  		menuTile.addClass('open');
  		menuList.removeClass('open');
  	} else {
		menuTile.removeClass('open');
  		menuList.addClass('open');
  	}
  });

  //menu-navigation
  var menuNavigation = $(".menu-navigation");
	menuNavigation.on('click', function(event) {
		event.preventDefault();
		menuNavigation.toggleClass('menu-navigation-open');
	});
	menuNavigation.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass("active").parent('li').siblings('li').children('a').removeClass('active');
	});

  //img-big-small
  var institutionSmallPictures = $(".institution-small-pictures").find("a");
  var institutionBigPictures = $(".institution-big-pictures").find("img");
  institutionSmallPictures.on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var index = institutionSmallPictures.index($(this));
    institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
  });

});
