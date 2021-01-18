$(document).ready(function ()  {
    require(["esri/Map",
        "src/GoogleImageLayer",
        "src/GoogleAnnoLayer",
        "src/gaodeMapLayer",
        "src/gaodeImageLayer",
        "esri/views/MapView",
        "esri/geometry/SpatialReference",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
    ], function (Map, GoogleImageLayer, GoogleAnnoLayer, gaodeMapLayer,
                 gaodeImageLayer, MapView, SpatialReference, Graphic, GraphicsLayer, FeatureLayer) {
        var gaodeMapLayer = new gaodeMapLayer();
        var gaodeImageLayer = new gaodeImageLayer();
        var myMap = {
            map: null,
            view: null,
            pointGraphic: [],
            layers: [],
            // 播放摄像头监控
            playIpcVideo: function (obj, index) {
                // 判断使用哪种插件播放
                var _this = this
                var videoData = {
                    'videoType': obj.videotype,
                    'videoSrc': obj.address,
                    'appKey': obj.appkey,
                    'appSecret': obj.appsecret
                }
                // 测试 ezopen 模式
                // var videoData = {
                //     'videoType': 'application/x-mpegURL',
                //     'videoSrc': 'ezopen://open.ys7.com/D01592291/1.hd.live',
                //     'appKey': 'cedb19fbdaf248bd8fbcff2528018681',
                //     'appSecret': '2fbc87547c2c77705160b0a46d810bdf'
                // }
                // obj.ipctype = 'ezopen'
                $('#playWind_' + index).html('')
                if (obj.ipctype === 'ezopen') {
                    if ($('#playWind') === undefined || $('#playWind').length === 0) {
                        $('#my-popup-ipc').html('<div id="playWind" class="my-popup-video">'+
                            '</div>')
                    }
                    $('#playWind').html('')
                    return _this.playEZOpen('playWind', videoData)
                } else {
                    $('#playWind').html('<video id="popup_video_' + index + '" class="video-js vjs-default-skin vjs-big-play-centered" ' +
                        'style="height: 100%; width: 100%;">' +
                        '</video>')
                    return _this.playM3u8('popup_video_' + index, videoData)
                }
            },
            playEZOpen: function (eId, videoData) {
                var accessToken = window.getObjectById('POST', 'https://open.ys7.com/api/lapp/token/get', {
                    'appKey': videoData.appKey,
                    'appSecret': videoData.appSecret,
                }).data.accessToken;
                var player = new EZUIKit.EZUIKitPlayer({
                    id: eId, // 视频容器ID
                    accessToken: accessToken,
                    url: videoData.videoSrc,
                    autoplay: true,
                    height: $('#' + eId).height(),
                    width: $('#' + eId).width(),
                    template: 'standard',
                })
                return $('#' + eId)[0]
            },
            playM3u8: function (eId, videoData) {
                videojs.options.flash.swf = "../js/js/video-js.swf";
                var player = videojs($('#' + eId)[0], {
                    controls: true, // 是否显示控制条
                    autoplay: true,
                    fluid: false, // 自适应宽高
                    language: 'zh-CN', // 设置语言
                    muted: true, // 是否静音
                    sources: [ // 视频源
                        {
                            src: videoData.videoSrc,
                            type: videoData.videoType
                        }
                    ]
                }, function () {
                    console.info('视频可以播放了', this);
                });
                return $('#' + eId)[0]
            },
            getOneSensorData: function (sn) {
                // 文字信息
                var dataInfo = window.getObjectById('get', URL_PREFIX + "/getDeviceInfo", { sn: sn }).detailInfo
                var infos = {};
                infos.phone = dataInfo.phone === null ? '-' : dataInfo.phone  // 联系方式
                infos.crop = dataInfo.crop === null ? '-' : dataInfo.crop  // 种植作物
                infos.contactName = dataInfo.contactName === null ? '-' : dataInfo.contactName // 管理人员
                infos.houseName = dataInfo.houseName === null ? '-' : dataInfo.houseName // 生产领域
                // 数值信息
                var dataValue = window.getObjectById('get', "http://218.94.8.117:9021/datapublish/getCurrentSensorData.html", { SN: sn })
                var items = []
                var keys = ['空气温度','空气湿度','土壤温度','土壤湿度']
                var map = dataValue.datalist[0]
                for (var j = 0; j < 4; j++) {
                    var obj = {
                        unit: map.fielddim[j] === undefined ? '' : map.fielddim[j],
                        key: map.sensorfield[j] === undefined ? keys[j] : map.sensorfield[j],
                        value: '-'
                    }
                    if (map.fieldstate[j] == null || map.fieldstate[j] == 1) {
                        obj.value = '0';
                    } else {
                        if (map.valuelist[0].fieldvalue[j]) {
                            obj.value = map.valuelist[0].fieldvalue[j];
                        }
                    }
                    items.push(obj);
                }
                return {
                    infos: infos,
                    values: items
                }
            },
            addSensorMarker: function (obj, index) {
                var point = {
                    type: "point",
                    longitude: obj.l1,
                    latitude: obj.l2
                };
                var pictureMarkerSymbol = {
                    type: "picture-marker",
                    // color: [226, 119, 40], // orange
                    url: "../image/map/map_equ.png",
                    height: 85,
                    width: 46
                };
                var pointGraphic = new Graphic({
                    geometry: point,
                    symbol: pictureMarkerSymbol,
                    attributes: {
                        ObjectID: index,
                        sn: obj.sn,
                        name: obj.name,
                        type: 'sensor',
                    }
                });
                return pointGraphic;
            },
            addIpcMarker: function (obj, index) {
                var point = {
                    type: "point",
                    longitude: obj.l1,
                    latitude: obj.l2
                };
                var pictureMarkerSymbol = {
                    type: "picture-marker",
                    url: "../image/map/map_video.png",
                    height: 42.5,
                    width: 23
                };
                var pointGraphic = new Graphic({
                    geometry: point,
                    symbol: pictureMarkerSymbol,
                    attributes: {
                        ObjectID: index,
                        name: obj.name,
                        type: 'ipc'
                    }
                });
                return pointGraphic;
            },
            renderIpcPopupLayer: function (graphics) {
                var _this = this
                // 建立弹窗 layer
                var ipcLayer = new FeatureLayer({
                    fields: [{
                        name: "ObjectID",
                        alias: "ObjectID",
                        type: "oid"
                    }, {
                        name: "name",
                        alias: "name",
                        type: "string"
                    }, {
                        name: "type",
                        alias: "type",
                        type: "string"
                    }],
                    popupTemplate: {
                        title: '监控详情',
                        content: getIpcPopupTemp,  // 弹出的模版
                    },
                    popupEnabled: true,
                    spatialReference: _this.view.spatialReference,
                    geometryType: "point",
                    source: graphics,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                            url: '../image/map/map_video.png',
                            width: 23,
                            height: 42.5
                        }
                    }, // 渲染被点击元素
                    labelingInfo: [
                        {
                            labelExpressionInfo: { expression: '$feature.name' },
                            symbol: {
                                type: "text",  // autocasts as new TextSymbol()
                                color: "#FF830A",
                                font: { size: 12 },
                            },
                            labelPlacement: "below-center",
                            minScale: 600000,
                        }
                    ]
                });
                ipcLayer.popupTemplate.overwriteActions = true;
                _this.layers.push(ipcLayer);
                _this.map.add(ipcLayer);
            },
            renderSensorPopupLayer: function (graphics) {
                var _this = this
                var sensorLayer = new FeatureLayer({
                    fields: [{
                        name: "ObjectID",
                        alias: "ObjectID",
                        type: "oid"
                    }, {
                        name: "sn",
                        alias: "传感器SN号",
                        type: "string"
                    }, {
                        name: "name",
                        alias: "name",
                        type: "string"
                    }, {
                        name: "type",
                        alias: "type",
                        type: "string"
                    }],
                    popupTemplate: {
                        title: '监控详情',
                        content: getSensorPopupTemp,  // 弹出的模版
                    },
                    popupEnabled: true,
                    spatialReference: _this.view.spatialReference,
                    geometryType: "point",
                    source: graphics,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                            url: '../image/map/map_equ.png',
                            width: 23,
                            height: 42.5
                        }
                    },
                    labelingInfo: [
                        {
                            labelExpressionInfo: { expression: '$feature.name' },
                            symbol: {
                                type: "text",  // autocasts as new TextSymbol()
                                color: "#00FFC4",
                                font: { size: 12 },
                            },
                            labelPlacement: "below-center",
                            minScale: 600000,
                        }
                    ]
                });
                sensorLayer.popupTemplate.overwriteActions = true;
                _this.layers.push(sensorLayer);
                _this.map.add(sensorLayer);
            },
            getIpcsAndMark: function (ipclist) {
                var _this = this
                /**
                 * 三种播放模式：
                 * 1. mp4模式 - src = VIDEOURL type="video/mp4"
                 * 2. rtmp/m3u8 (使用videojs) - src = type: "rtmp/flv"  /  type: "application/x-mpegURL"
                 * 3. ezopen 模式 (使用ezuikit.js)  变换插件
                 */
                var graphics = []
                for (var i = 0; i < ipclist.length; i++) {
                    var notes = ipclist[i].notes.split(',');
                    var item = {
                        name: ipclist[i].ipcname,
                        address: ipclist[i]['m3u8'], // 视频流地址
                        l1: notes[0],
                        l2: notes[1],
                        ipctype: 'm3u8',  // 摄像头类型 [mp4 | rtmp | m3u8 | rtsp | ezopen ]
                        videotype: 'application/x-mpegURL',  // 用于标记video的type,默认状态'application/x-mpegURL'-m3u8模式
                        appkey: '', // 用于ezopen模式
                        appsecret: '', // 用于ezopen模式
                    }
                    // 修正
                    if (ipclist[i].videoUrl !== null) {
                        item.address = URL_PREFIX + ipclist[i].videoUrl
                        item.videotype = 'video/mp4'
                        item.ipctype = 'mp4'
                    } else {
                        switch (ipclist[i].intype) {
                            case 'm3u8':
                                // item.address = ipclist[i].M3U8
                                // item.IPCTYPE = 'm3u8'
                                break
                            case 'rtmp':
                                item.address = ipclist[i].rtmp
                                item.videotype = 'rtmp/flv'
                                item.ipctype = 'rtmp'
                                break
                            case 'rtsp':
                                item.address = ipclist[i].rtsp
                                item.videotype = 'rtmp/flv'
                                item.ipctype = 'rtsp'
                                break
                            case 'yingshiyun':
                                if (ipclist[i].type === 'rtmp') {
                                    item.address = ipclist[i].rtmp
                                    item.ipctype = 'rtmp'
                                } else if (ipclist[i].type === 'ezopen') {
                                    // item.address = ipclist[i].M3U8
                                    // 用于获取accessToken
                                    item.appkey = ipclist[i].ipcusername
                                    item.appsecret = ipclist[i].ipcpassword
                                    item.ipctype = 'ezopen'
                                    // } else {
                                    // item.address = ipclist[i].M3U8
                                    // item.ipctype = 'm3u8'
                                }
                                break
                            default:
                                break

                        }
                    }
                    if (!item.l1 || !item.l2) {
                        console.warn('摄像头：' + item.name + '没有经纬度信息')
                    } else {
                        var ipcPointGraphic = _this.addIpcMarker(item, _this.pointGraphic.length)
                        var attributes = ipcPointGraphic.attributes
                        attributes.ipc = JSON.stringify(item)
                        _this.pointGraphic[ipcPointGraphic.attributes.ObjectID] = attributes
                        graphics.push(ipcPointGraphic)
                    }
                }
                _this.renderIpcPopupLayer(graphics)
            },
            getSensorsAndMark: function (snlist) {
                var _this = this
                var graphics = []
                for (var k = 0; k < snlist.length; k++) {
                    var notes = snlist[k].notes.split(",")
                    var obj = {
                        name: snlist[k].sensorname,
                        sn: snlist[k].sn,
                        l1: notes[0],
                        l2: notes[1]
                    }
                    if (!obj.l1 || !obj.l2) {
                        console.warn('设备：' + obj.name + '没有经纬度信息')
                    } else {
                        var sensorPointGraphic = _this.addSensorMarker(obj, _this.pointGraphic.length)
                        _this.pointGraphic[sensorPointGraphic.attributes.ObjectID] = sensorPointGraphic.attributes
                        graphics.push(sensorPointGraphic)
                    }
                }
                _this.renderSensorPopupLayer(graphics)
            },
            renderMarker: function (ipclist, snlist) {
                var _this = this
                // 初始化
                _this.pointGraphic = []
                if (_this.layers.length !== 0) {
                    _this.map.removeMany(_this.layers)
                    _this.layers = []
                }
                _this.getIpcsAndMark(ipclist)
                _this.getSensorsAndMark(snlist)
            },
            getDataFromLocalOrServer: function (type) {
                var _this = this
                var storage = new Storage()
                var myValues = storage.getExpire('map_values')
                // 将 全国，省市的统计数据 缓存存下来, 比较当前数值， 如果不对，就重新获取
                var flag = true
                jQuery.ajax({
                    type: 'get',
                    cache: false,
                    async: false,
                    url: URL_PREFIX + '/nyb/getThermodynamicDiagram',
                    timeout: 600000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
                    dataType: "json", //
                    data: {},
                    success: function (data, textStatus) {
                        // 先不缓存 数值
                        if (data.code === 200) {
                            var res = data.detailInfo;
                            // 计算 统计数值 依次为 应用主体，物联网设备，摄像头
                            var values = getValues(res, place)
                            setTypeNum(values)
                            if (myValues === null) {
                                storage.setExpire('map_values', res, 86400000) // 1 天
                            } else {
                                // 是否重新获取数据
                                // 比较值大小
                                var i = 0
                                var sValues = getValues(myValues, place)
                                for (; i < sValues.length; i++) {
                                    if (sValues[i] !== values[i]) {
                                        storage.setExpire('map_values', res, 86400000) // 1 天
                                        break
                                    }
                                }
                                if (i >= sValues.length) flag = false  // 不需要重新获取
                            }
                            _this.getData(type, flag)
                        } else {
                            console.error('获取统计数据失败！')
                        }

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('数据请求失败！')
                    }
                });

                function getValues(res, place) {
                    // 计算 统计数值 依次为 应用主体，物联网设备，摄像头
                    var values = [0, 0, 0]
                    for (var i = 0; i < common.data.length; i++) {
                        var key = common.data[i].name
                        if (place === null || (place && key === place)) {
                            values[0] += res.unit[key][type]
                            values[1] += res.sensor[key][type]
                            values[2] += res.ipc[key][type]
                        }
                    }
                    return values
                }

                function setTypeNum(values) {
                    $('#type-num .values .num').each(function (index, item) {
                        $(this).html(values[index])
                    })
                }
            },
            getType: function () {
                // 获取页面选择的类型  大田，...
                var type = $('#type-num .btns > .active').html() // 四类 或者 undefined
                type = type === undefined ? 'all' : type
                return type
            },
            getData: function (type, flag) {
                var _this = this
                var storage = new Storage()
                var data = storage.getExpire('map_data')
                if (flag || data === null) {
                    jQuery.ajax({
                        type: 'get',
                        cache: false,
                        async: true,
                        url: URL_PREFIX + '/nyb/getBaseDistribution',
                        timeout: 600000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
                        dataType: "json", //
                        data: {},
                        success: function (data, textStatus) {
                            if (data.code === 200) {
                                //  组装 ipclist ,  snlist
                                var res = data.detailInfo
                                storage.setExpire('map_data', res, 86400000)
                                renderData(res, type)
                            } else {
                                console.error('获取设备数据失败！')
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {

                        }
                    });
                } else {
                    renderData(data, type)
                }
                function renderData(data, type) {
                    var ipclist = []
                    var snlist = []
                    for (var i = 0; i < common.data.length; i++) {
                        var key = common.data[i].name
                        if (place === null || (place && key === place)) {
                            if (data.ipc[key][type].length > 0) {
                                data.ipc[key][type].forEach(function (item) {
                                    ipclist.push(item)
                                })
                            }
                            if (data.sensor[key][type].length > 0) {
                                data.sensor[key][type].forEach(function (item) {
                                    snlist.push(item)
                                })
                            }
                        }
                    }
                    _this.renderMarker(ipclist, snlist);
                }
            },
            renderBoundary: function (name) {
                var _this = this
                $.getJSON('../js/json/' + name + '.js', function (result) {
                    var polyline = {
                        type: "polyline", // autocasts as new Polyline()
                        paths: result.features[0].geometry.coordinates[0]
                    };
                    // Create a symbol for drawing the line
                    var lineSymbol = {
                        type: "simple-line", // autocasts as SimpleLineSymbol()
                        color: [255, 64, 64],
                        width: 2
                    };
                    var polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol
                    });
                    var boundaryLayer = new FeatureLayer({
                        fields: [{
                            name: "ObjectID",
                            alias: "ObjectID",
                            type: "oid"
                        }],
                        popupEnabled: true,
                        spatialReference: _this.view.spatialReference,
                        geometryType: "polyline",
                        source: [polylineGraphic],
                        renderer: {
                            type: "simple",
                            symbol: lineSymbol
                        },
                    });
                    // console.log('boundaryLayer:', name)
                    _this.map.add(boundaryLayer);
                    // _this.view.graphics.add(polylineGraphic);
                });
            },
            renderMap: function () {
                var _this = this
                _this.map = new Map({
                    layers: [gaodeMapLayer, gaodeImageLayer],
                    showLabels: true
                });
                _this.view = new MapView({
                    container: "map",
                    center: [107.561493, 33.10955], // longitude, latitude
                    map: _this.map,
                    zoom: 4
                });
                // 全局变量 place
                if (place === null) {
                    _this.view.center = getPlacePoint('全国')
                    _this.view.zoom = 5
                } else {
                    _this.view.center = getPlacePoint(place)
                    _this.view.zoom = 8
                }
                // 画边界 同步加载 确保线在下方
                $.ajaxSettings.async = false
                for (var i = 0; i < common.data.length; i++) {
                    var key = common.data[i].name
                    if (place === null || (place && key === place)) {
                        _this.renderBoundary(key)
                    }
                }
                _this.getDataFromLocalOrServer(_this.getType());
                function getPlacePoint(place) {
                    var point = [112.301097, 33.807361]; // 默认情况
                    var res = window.getObjectById('get', URL_PREFIX + '/nyb/getLaAndLo', {place: place})
                    if (res.code === 200) {
                        var notes = res.detailInfo.split(',')
                        point = [notes[0], notes[1]]
                    } else {
                        console.error('获取经纬度数据失败！')
                    }
                    return point;
                }
            },
            bindAllClick: function () {
                var _this = this
                $('#type-num .type-btn').unbind()
                $('#type-num .type-btn').bind('click', function () {
                    if (!$(this).hasClass('active')) {
                        $('#type-num .btns > .active').removeClass('active')
                        $(this).addClass('active')
                    } else {
                        $(this).removeClass('active')
                    }
                    _this.getDataFromLocalOrServer(_this.getType());
                })
            },
            init: function () {
                videojs.options.flash.swf = "../js/js/video-js.swf";
                window.common.init()
                this.renderMap()
                this.bindAllClick()
            },
        }
        function getIpcPopupTemp(target) {
            var attributes = myMap.pointGraphic[target.graphic.attributes.ObjectID]
            var div = document.createElement('div')
            div.className = "my-popup bg my-popup-ipc"
            var time = document.createElement('div')
            time.className = "my-popup-time"
            time.innerHTML = '更新时间：' + (new Date).Format("yyyy-MM-dd hh:mm:ss")
            var info = document.createElement('div')
            info.setAttribute("class", "item text-hidden");
            info.innerHTML = '<span class="item-name">监控地点: </span>' + '<span class="value">' + attributes.name + '</span>';
            div.appendChild(time)
            var videoWrapper = null
            if (JSON.parse(attributes.ipc).ipctype === 'ezopen') {
                videoWrapper = myMap.playIpcVideo(JSON.parse(attributes.ipc))
            } else {
                videoWrapper = document.createElement('div')
                videoWrapper.setAttribute("id", "playWind_" + attributes.ObjectID);
                videoWrapper.className = "my-popup-video"
                var video = myMap.playIpcVideo(JSON.parse(attributes.ipc))
                videoWrapper.appendChild(video)
            }
            div.appendChild(videoWrapper)
            div.appendChild(info)
            return div;
        }
        function getSensorPopupTemp(target) {
            var attributes = myMap.pointGraphic[target.graphic.attributes.ObjectID]
            var data = myMap.getOneSensorData(attributes.sn)
            var div = document.createElement('div')
            div.className = "my-popup bg my-popup-sensor"
            var time = document.createElement('div')
            time.className = "my-popup-time"
            time.innerHTML = '更新时间：' + (new Date).Format("yyyy-MM-dd hh:mm:ss")
            var infos = document.createElement('div')
            infos.className = "infos"
            var infoDatas = [
                [{
                    name: '单元名称',
                    value: attributes.name
                }],
                [{
                    name: '管理人员',
                    value: data.infos.contactName
                }, {
                    name: '联系方式',
                    value: data.infos.phone
                }],
                [{
                    name: '种植作物',
                    value: data.infos.crop
                }, {
                    name: '生产领域',
                    value: data.infos.houseName
                }]
            ]
            for (var i = 0; i < infoDatas.length; i++) {
                var item = document.createElement('div')
                item.className = "item"
                for (var j = 0; j < infoDatas[i].length; j++) {
                    var name = document.createElement('span')
                    var value = document.createElement('span')
                    name.className = 'item-name'
                    value.className = 'value text-hidden'
                    name.innerHTML = infoDatas[i][j].name + ': '
                    value.innerHTML = infoDatas[i][j].value
                    item.appendChild(name)
                    item.appendChild(value)
                }
                infos.appendChild(item)
            }
            var values = document.createElement('div')
            values.className = "values"
            var keys = ['空气温度','空气湿度','土壤温度','土壤湿度']  // 图片, 直接使用字符串拼接无法设置好 img 的 src
            for (var i = 0; i < data.values.length; i++) {
                var item = document.createElement('div')
                var img = document.createElement('img')
                var name = document.createElement('p')
                var value = document.createElement('p')
                item.className = "item"
                img.setAttribute('src', '../image/map/' + keys[i] + '.png')
                name.className = 'name text-hidden'
                value.className = 'value text-hidden'
                name.innerHTML = data.values[i].key
                value.innerHTML = data.values[i].value + data.values[i].unit
                item.appendChild(img)
                item.appendChild(name)
                item.appendChild(value)
                values.appendChild(item)
            }
            div.appendChild(time)
            div.appendChild(infos)
            div.appendChild(values)
            return div;
        }
        myMap.init()
    })
})