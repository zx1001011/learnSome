define(["dojo/_base/declare", "dojo/_base/lang","esri/config","esri/layers/BaseTileLayer","esri/request"],
    function (declare,lang,esriConfig,BaseTileLayer,esriRequest) {
        return BaseTileLayer.createSubclass({
            properties: {
                urlTemplate: "http://mt2.google.cn/maps/vt/lyrs=h@177000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil"
            },
            getTileUrl: function(level, row, col) {
                return this.urlTemplate.replace("{z}", level).replace("{x}",
                    col).replace("{y}", row);
            },
            fetchTile: function(level, row, col) {
                var url = this.getTileUrl(level, row, col);
                return esriRequest(url, {
                    responseType: "image"
                })
				.then(function(response) {

					var image = response.data;
					var width = this.tileInfo.size[0];
					var height = this.tileInfo.size[0];

					var canvas = document.createElement("canvas");
					var context = canvas.getContext("2d");
					canvas.width = width;
					canvas.height = height;

					context.drawImage(image, 0, 0, width, height);

					return canvas;
				}.bind(this));
            }
        });
    }
)