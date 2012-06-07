/*
 * Created in June 2012 by Spencer Williams <s@spencerenglish.com>.
 * Use at your own peril. This code is available unlicensed.
 * github.com/spilliams/imago.
 */

(function($){
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
        captionNav: false
      };
      if (options.displayType && options.displayType != defaults.displayType) {
        displayPositionDefaults = {list:"right",tooltip:"",caption:"bottom"}
        defaults.displayPosition = displayPositionDefaults[options.displayType];
      }
      var options = $.extend(defaults,options)
      
      // use options on this
      return this.each(function() {
        obj = $(this);

        // TODO do stuff to obj
        
      }); // this.each
    }, // init
    dataPoints : function( dataPoints ) {
      return this.each(function() {
        obj = $(this);
        if (typeof dataPoints != "undefined") {
          // TODO remove all data points
          // TODO add each data point
          return obj;
        } else {
          // TODO return dataPoints
        }
      });
    }, // dataPoints
    addPoint : function( dataPoint ) {
      return this.each(function() {
        obj = $(this);
        // TODO add data point
        return obj;
      });
    }, // addPoint
    removePoint : function( dataPointOrInteger ) {
      return this.each(function() {
        obj = $(this);
        // TODO remove point
        return obj;
      });
    }, // removePoint
    activatePoint: function( dataPointOrInteger ) {
      return this.each(function() {
        obj = $(this);
        // TODO activate point
        return obj;
      });
    }, // activatePoint
    deactivatePoint: function( dataPointOrInteger ) {
      return this.each(function() {
        obj = $(this);
        // TODO deactivate point
        return obj;
      });
    }, // deactivatePoint
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
