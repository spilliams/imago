/*
 * jQuery Imago plugin
 * Author: Spencer Williams <s@spencerenglish.com>.
 * Version: 1.0
 * License: MIT (see LICENSE file for more details)
 * Source: http://github.com/spilliams/imago.
 */

(function($){
  var counter = 0;
  var imagos = {};
  var methods = {
    init : function( options ) {
      // set up default options
      var defaults = {
        dataPoints: [],
        displayType: "callout",
        textOpacity: 1,
        tagOpacity: 0.5,
        activateOn: "hover",
        displayPosition: "top",
        captionNav: false,
      };
      if (!options) options = defaults;
      var displayPositionDefaults = {callout:"top",list:"right",tooltip:"",caption:"bottom"};
      defaults.displayPosition = displayPositionDefaults[options.displayType];
      var options = $.extend(defaults,options)
      
      // use options on this
      return this.each(function() {
        var id = $(this).attr("id");
        if ("undefined" === typeof id) {
          id = "imago-"+counter;
          counter++;
          $(this).attr("id",id);
        }
        
        if ($(this).closest('div.imago').length != 0) return $(this);
        
        var $div = $("<div class='imago'></div>");
        var $placeholder = $("<div id='imago-placeholder'></div>");
        $(this).after($placeholder);
        $div.append($(this));
        $placeholder.after($div);
        $placeholder.remove();
        
        imagos[id] = options;
        
        return $(this);
      }); // this.each
    }, // init
    dataPoints : function( dataPoints ) {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        if (typeof dataPoints != "undefined") {
          imago.dataPoints = dataPoints;
        }
        $(this).imago('render');
        return imago.dataPoints;
      });
    }, // dataPoints
    addPoint : function( dataPoint ) {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        imago.dataPoints.push(dataPoint);
        $(this).imago('render');
        return $(this);
      });
    }, // addPoint
    removePoint : function( dataPoint ) {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        // TODO
        $(this).imago('render');
        return $(this);
      });
    }, // removePoint
    activatePoint: function( dataPoint ) {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        // TODO
        $(this).imago('render');
        return $(this);
      });
    }, // activatePoint
    deactivatePoint: function( dataPoint ) {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        // TODO
        $(this).imago('render');
        return $(this);
      });
    }, // deactivatePoint
    render: function() {
      return this.each(function() {
        var id = $(this).attr("id");
        var imago = imagos[id];
        var $root = $(this).closest("div.imago").first();
        
        // remove any current tags
        $root.find(".imago-tags").remove();
        // build new tags
        var $tags = "<div class='imago-tags'></div>"
        
        // remove any current texts
        $root.fing(".imago-texts").remove();
        // build new texts
        // TODO
        
        return $(this);
      });
    }, // render
  }
  
  $.fn.imago = function(method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method == 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' + method + ' does not exist on jQuery.imago' );
    }
  }; // imago function
})(jQuery);
