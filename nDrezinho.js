//nVampeta
(function ($) {
  var self = ($.nVampeta = new (function () {})());

  $.extend(self, {
    nVampetaBackgrounds: ["http://www.away.com.br/nvampeta/bg1.png"],

    nVampetaImgs: [
      "https://i.imgur.com/xtPgmjr.png",
      "https://i.imgur.com/DVUy1fz.jpg",
      "https://i.imgur.com/kbkbtCP.png",
      "https://i.imgur.com/626HUwx.png",
      "https://i.imgur.com/CMkxD3a.png",
      "https://i.imgur.com/TmX9AMw.png",
      "https://i.imgur.com/xbmHmsa.jpg",
      "https://i.imgur.com/QCiOMp6.png",
      "https://i.imgur.com/Rm7iWdd.png",
      "https://i.imgur.com/gCO3WRO.jpg",
      "https://i.imgur.com/sYJDyBN.png",
      "https://i.imgur.com/jE7tGq1.jpg",
      "https://i.imgur.com/K9yK3ZR.png",
      "https://i.imgur.com/Gp525rC.png",
    ],

    handleImages: function (lstImgs, time) {
      $.each($("img"), function (i, item) {
        //Skip if image is already replaced
        if ($.inArray($(item).attr("src"), lstImgs) == -1) {
          var h = $(item).height();
          var w = $(item).width();

          //If image loaded
          if (h > 0 && w > 0) {
            //Replace
            $(item)
              .css("width", w + "px")
              .css("height", h + "px");
            $(item).attr(
              "src",
              lstImgs[Math.floor(Math.random() * lstImgs.length)]
            );
          } else {
            //Replace when loaded
            $(item).load(function () {
              //Prevent 'infinite' loop
              if ($.inArray($(item).attr("src"), lstImgs) == -1) {
                var h = $(item).height();
                var w = $(item).width();
                $(item)
                  .css("width", w + "px")
                  .css("height", h + "px");
                $(item).attr(
                  "src",
                  lstImgs[Math.floor(Math.random() * lstImgs.length)]
                );
              }
            });
          }
        }
      });

      //Keep replacing
      if (time > 0) {
        setTimeout(function () {
          self.handleImages(lstImgs, time);
        }, time);
      }
    },

    handleLogo: function (bgImgs, time) {
      $backgroundImages = $(
        "[class*=logo], [class*=header], [id*=header], [id*=logo]," +
          "[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span," +
          "[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1," +
          "[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a"
      ).filter(function () {
        backgroundImg = $(this).css("background-image");
        return backgroundImg && backgroundImg != "none";
      });

      $backgroundImages.each(function (i, item) {
        $(item).css(
          "background-image",
          "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")"
        );
        $(item).css("background-position", "0 0");
        $(item).css("background-repeat", "no-repeat");
        $(item).css("background-size", "contain");
      });
    },
  });

  //Run on jQuery ready
  $(function () {
    self.handleImages(self.nVampetaImgs, 3000);
    self.handleLogo(self.nVampetaBackgrounds, 3000);
  });
})(jQuery);
