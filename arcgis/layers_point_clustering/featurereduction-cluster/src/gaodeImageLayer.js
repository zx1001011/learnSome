define(["dojo/_base/declare", "dojo/_base/lang","esri/config","esri/layers/BaseTileLayer","esri/request"],
    function (declare,lang,esriConfig,BaseTileLayer,esriRequest) {
    	esriConfig.request.corsEnabledServers.push("webst01.is.autonavi.com");
        return BaseTileLayer.createSubclass({
        properties: {
          urlTemplate: 'http://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
         
        },
        // generate the tile url for a given level, row and column
        getTileUrl: function(level, row, col) {
          return this.urlTemplate.replace("{z}", level).replace("{x}",
            col).replace("{y}", row);
        },
 
        // This method fetches tiles for the specified level and size.
        // Override this method to process the data returned from the server.
        fetchTile: function(level, row, col) { 
		  //构建切片URL
          var url = this.getTileUrl(level, row, col); 
          // request for tiles based on the generated url
          // set allowImageDataAccess to true to allow
          // cross-domain access to create WebGL textures for 3D.
          return esriRequest(url, {
              responseType: "image",
              allowImageDataAccess: true
            })
            .then(function(response) {
              // when esri request resolves successfully
              // get the image from the response
              var image = response.data;
              var width = this.tileInfo.size[0];
              var height = this.tileInfo.size[0]; 
              // create a canvas with 2D rendering context
              var canvas = document.createElement("canvas");
              var context = canvas.getContext("2d");
              canvas.width = width;
              canvas.height = height; 
              // Draw the blended image onto the canvas.
              context.drawImage(image, 0, 0, width, height); 
              return canvas;
            }.bind(this));
        }
      });
    }
)

