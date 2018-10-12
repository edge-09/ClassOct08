

(function($){


    $.fn.ajaxify = function (settings) {
    
        var defaults = {
            selectorAttribute: "data-target"
        }

        if(settings) $.extend(defaults, settings);


        if(this.length == 0){
            console.warn("The ajaxify plugin was called with a selector that didn't match anything")
        }

        this.click(function (evt) {



    
            evt.preventDefault();
            var currentLink = $(evt.target);
            var url = currentLink.attr("href");
            var target = currentLink.attr(defaults.selectorAttribute);
    
            $(target).load(url);
    
        });

        return this;
    }


})(jQuery);


