javascript: (function () { 
    $(".completionStatusList:visible")
    .filter(function (index) { 
        var value = +$(this).val();
        var arrayPosition = [0].indexOf(value);
        var shouldChange = arrayPosition >= 0;
        return shouldChange;
    }).val(10).trigger('change'); })()