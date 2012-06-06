/*
 * Created in June 2012 by Spencer Williams <s@spencerenglish.com>.
 * Use at your own peril. This code is available unlicensed.
 * github.com/spilliams/imago.
 */

(function($){
  var methods = {
    init : function( options ) {
      var defaults = {
      
      };
      var options = $.extend(defaults,options)
      return this.each(function() {
        obj = $(this);

        // do stuff to obj
        
      }); // this.each
    }, // init
    // more methods
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
