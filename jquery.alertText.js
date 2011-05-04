(function($) {
    $.fn.alertText = function(options) {
        
        return this.each(function() {
      		var $obj = $(this);
      		
      		$obj.click(function(){
      			var contents = $(this).text();
      			alert("Data : "+contents);
      			return false;
      		});
      		});
    };

})(jQuery);