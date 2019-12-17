/**
 * Created by haifun on 2019/11/28.
 */

(function($){
    $('#downloadPic').click(function(){
        var self = this;
        var billNode = document.getElementById('post-content');
        //$("#mod-hd").add($("#post-cover")).add($("#post-hd")).hide();
        $("#post-content").addClass("sharebg")
        document.getElementById('post-content-header').style.display = 'block';
        document.getElementById('layer-mask').style.display = 'block';
        var clonedNode = document.body.appendChild(billNode);
        clonedNode.style.position = 'absolute';
        clonedNode.style.top = 0;
        clonedNode.style.left = 0;
        clonedNode.style.zIndex = -1;
        var width = clonedNode.offsetWidth;
        var height = clonedNode.offsetHeight;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = width * 3;
        canvas.height = height * 3;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        context.scale(3, 3);
        window.pageYOffset = 0;
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        html2canvas(clonedNode,
            {
                allowTaint: true, // 是否使用图片跨域
                useCORS: true,
                scale: 	window.devicePixelRatio,
                width: width,
                height: height
            }).then(function(canvas) {

            var imgData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            //window.location.href= imgData;
            //document.body.appendChild(canvas);
            // 下载后的文件名
            var t = document.getElementById('post-container').appendChild(clonedNode);
            document.getElementById('post-content-header').style.display = 'none';
            document.getElementById('layer-mask').style.display = 'none';
            $("#post-content").removeClass("sharebg")
            t.style.position = '';
            t.style.top = '';
            t.style.left = '';
            t.style.zIndex = '';

            var filename = '' + (new Date()).getTime() + '.png' ;
            // download
            saveFile(imgData,filename);
        });

        var saveFile = function(data, filename){
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };


    })

})(jQuery);
