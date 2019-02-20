
function tipMount(){
    $.ajax({
        type: "get",
        // url: "http://"+host+"/financial/getMenuCount",
        url:"js/test.json",
        async: true,
        dataType: 'json',
        success: function (data) {
            // var obj=eval("("+data+")");
            // var datas = data.val;
            console.log(data);
            // console.log(obj);
            // $("#tipFinancial").html(datas.all_count);
            // $("#tipBank").html(datas.yh_count);
            // $("#tipZq").html(datas.zq_count);
            // $("#tipBX").html(datas.bx_count);
            // $("#tipXt").html(datas.xt_count);
            // $("#tipZl").html(datas.zl_count);
            // $("#tipJj").html(datas.jj_count);

        }
    })
}
function industryMount(){
    $.ajax({
        type: "get",
        url: "http://"+host+"/industry/getMenuCount",
        async: true,
        dataType: 'json',
        success: function (data) {
            var datas = data.val;
            var total = datas.zqx+datas.fdc+datas.ggp+datas.dxf+datas.jrmy+datas.xdfwy+datas.zlx;
            $("#indusTotal").html(total);
            $("#tipCycle").html(datas.zqx);
            $("#tipRealty").html(datas.fdc);
            $("#tipPublic").html(datas.ggp);
            $("#tipBig").html(datas.dxf);
            $("#tipFin").html(datas.jrmy);
            $("#tipMoser").html(datas.xdfwy);
            $("#tipBStrategic").html(datas.zlx);
        }
    })
}
function menu(){
	$(function () { $('#collapseFour').collapse({
		toggle: false
	})});
	$(function () { $('#collapseTwo').collapse('hide')});
	$(function () { $('#collapseThree').collapse('hide')});
	$(function () { $('#collapseOne').collapse('hide')});

//	点击li增加class样式
//
    $(".topInfo").click(function(event){
        event.stopPropagation();
        $(this).children('a').addClass('now');
        $(this).siblings().children('a').removeClass("now");
    });
    $("#collapseThree").click(function(event) {
        event.stopPropagation();
        $(this).children('.finance').slideToggle();
        $("#div1").hide();
    });
    $(".finactive").click(function(event) {
        event.stopPropagation();
        $("#div1").hide();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        var currentName = $(this).children("a").children("span").text();
        $("#currentName").html(currentName);
    });
    $("#collapseTwo").click(function(event) {
        event.stopPropagation();
        $(this).children('.indust').slideToggle();
        $("#div1").hide();
    });
    $(".indust").click(function(event) {
        event.stopPropagation();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        var currentName = $(this).children("a").children("span").text();
        $("#currentName").html(currentName);
        $("#div1").hide();
    });
    $("#collapseOne").click(function(event) {
        event.stopPropagation();
        $(this).children('.area').slideToggle();
        $("#div1").hide();
    });
    $(".area").click(function(event) {
        event.stopPropagation();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        var currentName = $(this).children("a").children("span").text();
        $("#currentName").html(currentName);
        $("#div1").hide();
    });
}
function user(userName){
    $("#userName").html(userName);
	// $(".user").click(function(){
	// 	if($(".userinfo").css("display")=="none"){
	// 		$(".userinfo").show();
	// 		}else{
	// 		$(".userinfo").hide();
	// 	}
	// })

}
function move(){
    var box = document.getElementById('boxFather');
    var title = document.getElementById('boxSon');
    //0.声明一个开关变量
    var off = 0;
    //0.1声明一个变量一保存鼠标与盒子之间的距离
    var cur = {};
    //1.给标题添加鼠标按下事件
    title.onmousedown = function(e){
        off = 1;
        //1.1 计算鼠标位置-盒子到页面的位置，得到一个差，永远不变
        cur.x = e.clientX-box.offsetLeft;
        cur.y = e.clientY-box.offsetTop;
        // console.log('鼠标按下');
    };
    //2.添加鼠标移动事件
    document.onmousemove = function(e){
        //2.1判断按下的开关状态  如果是真再运行
        $("#div1").show();
        if(!off) return;
        var left = e.clientX - cur.x;
        var tops = e.clientY - cur.y;
        //限制box不超出浏览器
        // left = left<0?0:left;
        // tops = tops<0?0:tops;
        // left = left >= window.innerWidth-400 ? window.innerWidth-400 : left;
        // tops = tops >= window.innerHeight-300 ? window.innerHeight-300 : tops;
        box.style.left = left+'px';
        box.style.top = tops+'px';
        // console.log(left);
        // console.log(tops);
        // console.log(''+left+';'+tops+'');
        app.sendMessage('app_move_window', 999, ''+left+';'+tops+'');

    };
    //3.添加鼠标抬起事件
    title.onmouseup = title.onmouseout= function(){
        // console.log('鼠标抬起');
        off = 0;
        $("#div1").hide();
    };
}
function big(){
    var clickNumber =1;
    $("#big").click(function(){
        if(clickNumber%2==0) {
            // console.log("huifu");
            app.sendMessage('app_restore_window');
            clickNumber++;
        }else{
            // console.log("放大");
            app.sendMessage('app_max_window');
            clickNumber++;
        }

    });
    $("#boxSon").dblclick(function(){
        if(clickNumber%2==0) {
            // console.log("huifu");
            app.sendMessage('app_restore_window');
            clickNumber++;
        }else{
            // console.log("放大");
            app.sendMessage('app_max_window');
            clickNumber++;
        }
    });
}
function versionList(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/version/getVerison",
        async: true,
        dataType: 'json',
        success: function (data) {
            var lists = data.val;
            // console.log(lists);
            $(".versionNum").text(lists.version);
        }
    })
}
function help() {
    $("#help").click(function () {
        app.sendMessage('app_get_cur_dll_path', 1, '', function (message, int_param, str_param) {
            //alert(message + "; " + int_param + "; " + str_param);
            app.sendMessage('app_open_path', 1, str_param + "\\help.pdf", function (message, int_param, str_param) {
                //alert(message + "; " + int_param + "; " + str_param);
            });
        })
    })

}

function openDownloadPath()
{
    $('#openDownloadPath').click(function(){
        app.sendMessage('app_get_download_path', 1, '', function (message, int_param, str_param) {
            //alert(message + "; " + int_param + "; " + str_param);
            app.sendMessage('app_open_path', 1, str_param, function (message, int_param, str_param) {
                //alert(message + "; " + int_param + "; " + str_param);
            });
        })
    });
}
function scroll() {
    $.fn.scrollUnique = function () {
        return $(this).each(function () {
            var eventType = 'mousewheel';
            // 火狐是DOMMouseScroll事件
            if (document.mozHidden !== undefined) {
                eventType = 'DOMMouseScroll';
            }
            $(this).on(eventType, function (event) {
                // 一些数据
                var scrollTop = this.scrollTop,
                    scrollHeight = this.scrollHeight,
                    height = this.clientHeight;

                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    this.scrollTop = delta > 0 ? 0 : scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault();
                }
            });
        });
    };
    $(".menu").scrollUnique();
}
$(function(){
    //获取地址栏参数
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
    var userName = $.getUrlParam('userName');
    // console.log(userName);
    // user(userName);         //用户信息
	// menu();                 //左侧菜单
    tipMount();             //金融机构左侧菜单栏总数
    // industryMount();         //行业左侧菜单栏总数
    // move();                 //窗口跟随鼠标移动
    // big();                  //窗口的放大还原
    // versionList();          //版本信息
    // help();                 //帮助信息
    // openDownloadPath();     //打开下载目录
    // scroll();
});
