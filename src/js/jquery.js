      $('ul.nav').on('click', 'li:not(.nav-item_active)', function() {
        $(this)
          .addClass('nav-item_active').siblings().removeClass('nav-item_active')
          .closest('div.col-8').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });