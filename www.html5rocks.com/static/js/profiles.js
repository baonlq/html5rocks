$(function() {
  var div = $('<div>').load('/tutorials/ .sample', function() {
    var authorLinks = div.find('[data-id]');
    authorLinks.each(function(i, authorLink) {
      var profileID = $(authorLink).attr('data-id');
      var ul = $('#' + profileID + ' .articles')[0];

      $(authorLink).closest('.sample').find('h3 a').clone().wrap('<li>').parent().appendTo(ul);
    });
  });

  function updateHash(e) {
    $activeProfile = $(".active");
    if ($activeProfile.length) {
      history.replaceState({}, document.title, '/profiles/#!/' + $activeProfile.attr("id"));
    } else {
      if (!!window.history) {
        history.replaceState({}, document.title, '/profiles');
      } else {
        location.hash = "/#!/"; // oh well, old browsers have to live with a #
      }
    }
  }

  window.showArticles = function(link) {
    var $profile = $(link).closest('.profile');
    $profile.find('.articles').toggleClass('active');
    $profile.find('.map').toggleClass('active');
    return false;
  };

  $('.profile .list-articles').click(function(e) {
    var $profile = $(this).closest('.profile');
    $(this).toggleClass('active');
    $profile.find('.articles').toggleClass('active');
    $profile.find('.map').toggleClass('active');
    e.stopPropagation();
    return false;
  });

  window.scrollToProfile = function(opt_profileID) {
    var profileID = opt_profileID || null;
    if (!profileID && location.hash.length) {
      profileID = '#' + location.hash.split('#!/')[1];
    }
    if (profileID) {
      $.scrollTo(profileID, 800, {offset: {top: -12}, onAfter: function() {
        $(profileID).addClass("active");
      }});
    }
  };

  $(".profile").click(function(e) {
    $(".profile").not(this).removeClass("active");
    $(this).toggleClass("active");
    $(this).find('.list-articles').toggleClass('active');
    $(this).find('.articles').toggleClass('active');
    $(this).find('.map').toggleClass('active');
    updateHash(e);
    e.stopPropagation();
  });

  function onHashChange(profileID) {
    $(".profile").removeClass("active");
    window.scrollToProfile(profileID);
  }

  window.onhashchange = function(e) {
    if (!location.hash.length) {
      return;
    }
    onHashChange('#' + location.hash.split('/#!/')[1]);
  };

});
