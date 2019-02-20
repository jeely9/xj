
function slider(){
    $(".slideBtn").click(function(){
        $(".cen-top").slideToggle("slow");
        $(this).toggleClass("active");
        $(".lists").css("min-eight","396px");
        return false;
    })
}
function listOption(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/report/getIndustryList",
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            $("#compny").html("");
            var box ='';
            box += '<option value="0">按行业找报告</option>';
            for(var i=0;i<datas.length;i++){
                box += '<option value='+datas[i].imId+'>'+ datas[i].industryName+ '</option>';
            }
            $("#compny").html(box);
        }
    })
    $("#compny").change(function(){
        var index = $("#compny option:selected").val();
        // console.log(index);
        indusSearch(index);   //行业报告查找
        $("#area").val(0);
    })
}
function areaOption(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/report/getRegEconomicsMainList",
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            $("#area").html("");
            var box ='';
            box += '<option value="0">按区域找报告</option>';
            for(var i=0;i<datas.length;i++){
                box += '<option value='+datas[i].remId+'>'+datas[i].provinceName+datas[i].cityName+datas[i].districtName+'</option>';
            }
            $("#area").html(box);
        }
    })
    $("#area").change(function(){
        var remId = $("#area option:selected").val();
        // console.log(index);
        indusSearch("",remId);   //区域报告查找
        $("#compny").val(0);
    })
}
function reportList(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/report/getResearchReportList",
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            listConent(datas);
            //分页
            tablePage(datas);
        }
    })
}
function listConent(datas){
    var list = datas.list;
    $(".lists").html("");
    var box = "";
    for(var i=0;i<list.length;i++){
        box += '<div class="list-box">';
        box += '<div class="list-box-title clearfix"><span class="title-name left">'+list[i].reportName+'</span><span class="title-time right">'+list[i].year+'</span></div>';
        box += '<div class="list-box-cen clearfix"><div class="list-cen-left left"><h6><span>'+list[i].regReportType+'</span><span>'+list[i].reportType+'</span></h6>';
        box += '<p class="intro"></p></div>';
        box += '<div class="list-cen-right right">';
        // box += '<p class="look"><a href="html/researchReport/reportDetail.html">查看详情</a></p>';
        box += '<p style="display: none">'+list[i].reportId+'</p>';
        box += '<p class="down">下载报告</p>';
        box += '<p style="display: none">'+list[i].reportTypeId+'</p>';
        box +=  '</div></div>';
        box += '</div>';
    }
    $(".lists").html(box);
    $(".down").click(function(){
        var reportId = $(this).prev("p").html();
        var reportTypeId = $(this).next("p").html();
        $.ajax({
            type: "get",
            url: "http://" + host + "/report/researchReportDownload",
            data: {"reportId": reportId,"reportTypeId":reportTypeId},
            async: true,
            success: function (data) {
                var datas = data.val;
                alert("后台下载中，请稍后...");
                app.sendMessage('app_download_file', 1, datas, function (message, int_param, str_param) {
                    // alert(message + int_param + str_param);
                    if(int_param >= 100){
                        app.sendMessage('app_get_download_path', 1, '', function (message, int_param, str_param) {
                            app.sendMessage('app_open_path', 1, str_param, function (message, int_param, str_param) {
                            });
                        });
                    }
                });
            }
        });
    })
}
function nameSearch(){
    $("#senameSeach").click(function(){
        var reportName = $("#seName").val();
        // console.log(reportName);
        $("#compny").val(0);
        $("#area").val(0);
        $.ajax({
            type: "get",
            url: "http://" + host + "/report/getResearchReportList",
            data:{"reportName":reportName},
            async: true,
            success: function (data) {
                var datas = data.val;
                listConent(datas);
                //分页
                tablePage(datas,reportName);
            }
        })
    })
}
function indusSearch(index,remId){
    $("#indexSure").click(function(){
        $("#seName").val("");
        $.ajax({
            type: "get",
            url: "http://" + host + "/report/getResearchReportList",
            data:{"imId":index,"remId":remId},
            async: true,
            success: function (data) {
                var datas = data.val;
                // console.log(datas);
                listConent(datas);
                //分页
                tablePage(datas,"",index,remId);
            }
        })
    })
}
function tablePage(datas,reportName,index,remId){
    var totals = datas.total;   //总的数据
    $("#bankPage").pagination(totals,{
        num_edge_entries: 1, //两侧首尾分页条目数
        num_display_entries: 4, //连续分页主体部分分页条目数
        items_per_page: 10, //每页显示数据
        prev_text: "前一页",
        next_text: "后一页",
        //current_page: 0,
        callback: pageCallback  //回调函数
    });
    function pageCallback(page_index,jq) {  //page_index表示当前点击的那个分页的页数索引值默认为0，后一个参数表示装载容器。
        var pageNo = page_index +1;  //传递的当前页数索引
        //console.log(page_index);
        var Datas = {
            'reportName':reportName,
            'imId':index,
            'remId':remId,
            'pageNo': pageNo
        };
        $.ajax({
            type:"get",
            url: "http://" + host + "/report/getResearchReportList",
            data:Datas,
            async:true,
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                listConent(datas);
            }
        });
        return false;
    }
}

$(function(){
    slider()  //收起
    listOption();     //行业下拉列表
    areaOption();      //区域下拉列表
    reportList();           //报告列表
    nameSearch();       //报告名称搜索
    // indusSearch();      //行业报告查找
});
