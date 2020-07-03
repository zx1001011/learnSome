define([
    'dataService',
    'jquery'
], function (dataService, $) {
    let name = 'Tom2';
    function showMsg() {
        $('body').css({ background: 'red' })
        alert(dataService.getMsg() + ',' + name)
    }
    return { showMsg }
});