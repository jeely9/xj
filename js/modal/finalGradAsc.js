
function searchAll(){
    $("#searchAll").click(function(){
        var modalOptions = $("#select option:selected");
        var industryId = modalOptions.val();
        var year = $("#mydatepicker").val();
        // console.log(industryId);
        tableData(industryId,year);
        sorter(industryId,year);
    });
}
function tableData(industryId,year,sortColumn,sortSC){
    $("#BoxTitle").html("");
    $("#BoxTable").html("");
    $("#Page").html("");
    // console.log(industryId);
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getScoreSort?pageNo=1",
        // url:"http://192.168.3.4:8081/financial/getScoreSort?pageNo=1",
        data:{
            'industryId':industryId,
            'year': year,
            'sortColumn': sortColumn,
            'sortSC': sortSC
        },
        async:true,
        success: function(data){
            var datas = data.val;
            var lists = datas.data.list;
            // console.log(lists);
            if(lists== ""){
                // console.log(lists.length);
                $('.isNoData').show(); //显示暂无数据的行
                $("#BoxTitle").html("");
                $("#BoxTable").html("");
            }else{
                $('.isNoData').hide(); //隐藏暂无数据的行
                tableList(datas,industryId,year);  //处理数据并展示
                turnScore(industryId,year);
            }
            //分页
            tablePage(datas,industryId,year,sortColumn,sortSC);
        }
    })
}
function tableList(datas){
    $("#BoxTitle").html("");
    $("#BoxTable").html("");
    var lists = datas.data.list;
    // console.log(lists);
    var titles = datas.tableHeader;
    var TitleContent = '';
    var TableContent = '';
    TitleContent += '<tr><th>序号</th><th>企业名称</th>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th class="sorter">'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#BoxTitle").html(TitleContent);
    for (var i=0;i<lists.length;i++) {
        TableContent += '<tr><td>'+(i + 1)+'</td>';
        for (var m=0;m<lists[i].length;m++){
            TableContent += '<td class="tdpointer">'+lists[i][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#BoxTable").html(TableContent);
}
function turnScore(industryId,year){
    $("#BoxTable").delegate('td:nth-child(3)','click',function(){
        var seId = $(this).prev("td").html();
        var nowName = $(this).html();
        //给下一页传参
        window.location.href=encodeURI("companyScore.html?seId="+seId+"&nowName="+nowName+"&industryId="+industryId+"&year="+year);
    });
}
function sorter(industryId,year){
    var clickNumber =false;
    var sortSC = "asc";
    var storage=window.localStorage;
    storage.setItem("industryId",industryId);
    storage.setItem("year",year);
    $(document).on('click','.sorter',function() {
        var industryId = storage.getItem("industryId");
        var year = storage.getItem("year");
        if(clickNumber) {
            $(this).addClass("headerSortUp");
            $(this).removeClass("headerSortDown");
            clickNumber = false;
            sortSC = "asc";
            var sortColumn = $(this).html();
        } else {
            $(this).removeClass("headerSortUp");
            $(this).addClass("headerSortDown");
            clickNumber = true;

            var sortColumn = $(this).html();
            sortSC = "desc";

        }
        tableData(industryId,year,sortColumn,sortSC);
    });

}
function tablePage(datas,industryId,year,sortColumn,sortSC){
    $("#Page").html("");
    var totals = datas.data.total;
    // console.log(totals);
    $("#Page").pagination(totals,{
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
        $.ajax({
            type:"get",
            url:"http://"+host+"/financial/getScoreSort",
            data:{
                'pageNo': pageNo,
                'industryId': industryId,
                'year': year,
                'sortColumn': sortColumn,
                'sortSC': sortSC
            },
            async:true,
            success:function(data){
                var datas = data.val;
                 // console.log(datas);
                tableList(datas);
            }
        });

        return false;
    }
}
function selectList(){
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getEvaluates",
        async:true,
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            for ( var i = 0; i < datas.length; i++) {
                $("#select").append( '<option value=' + datas[i].typeId + '>'+ datas[i].typeName + '</option>');
            }
        }
    });

}

$(function(){
    //获取地址栏参数
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        if(r != null) return decodeURI(r[2]); //decodeURI参数内容对中文解码。
        return null;
        var datas = data;
        tableList(datas);
    };
    selectList();       //行业下拉列表
    tableData(1,2016);        //表格数据
    sorter(1,2016);      //排序
    searchAll();        //最后搜索
});
