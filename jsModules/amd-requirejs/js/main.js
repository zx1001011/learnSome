(function () {
    // 配置
    require.config({
        // 基本路径
        baseUrl: 'js/',
        paths: {
            "alerter": "modules/alerter",
            "dataService": "modules/dataService",
            'jquery': 'libs/jquery-3.5.0'
        }
    })
    require(['alerter'], function (alerter) {
        alerter.showMsg()
    })
})()