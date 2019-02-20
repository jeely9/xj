
function area(){
    // 加载省
    loadProvince ();
    $("#province").change(function() {
        var curProvince = $(this).val();
        if (curProvince !== "") {
            loadCity(curProvince);
        } else {
            $("#citys").empty().append('<option value="">--请选择城市--</option>');
            $("#county").empty().append('<option value="">--请选择地区--</option>');
        }
    });
    // 加载地区
    $("#citys").change(function() {
        var curCity = $(this).val(); //
        if (curCity !== "") {
            loadCounty(curCity);
        }else{
            $("#county").empty().append('<option value="">--请选择地区--</option>');
        }
    });

}
//-----------------------------------------------------------
// 加载省份
function loadProvince () {

    //console.log(2);
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getProvinceList",
        async:true,
        success: function(data){
            var data = data.val;
            // console.log(data);
            for ( var i = 0; i < data.length; i++) {
                $("#province").append( '<option value=' + data[i].id + '>'+ data[i].province + '</option>');
            }

        }
    })

};
// 加载城市
function loadCity (curProvince) {
    //$("#city option[value='']").attr("selected", true);
    //$("#citys").html("");
    $("#citys").empty().append('<option value="">--请选择城市--</option>');
    $("#county").empty().append('<option value="">--请选择地区--</option>');

    var value = curProvince;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getCityList",
        data:{'province':value},
        async:true,
        success: function(data){
            data = data.val;
            // console.log(data);
            for ( var i = 0; i < data.length; i++) {
                $("#citys").append('<option value=' + data[i].id + '>'+ data[i].city + '</option>');
            }

        }
    })

};
// 加载地区
function loadCounty (curCity) {
    $("#county").empty().append('<option value="">--请选择地区--</option>');
    //$("#county option[value='']").attr("selected", true);
    var value1 = curCity;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getDistrictList",
        data:{'city':value1},
        async:true,
        success: function(data){
            data = data.val;
            // console.log(data);
            for ( var i = 0; i < data.length; i++) {
                $("#county").append('<option value=' + data[i].id + '>' + data[i].district + '</option>');
            }
        }
    })


};




function search(fieldNames){
    var storage=window.localStorage;
    storage.setItem("fieldNames",fieldNames);
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#senameSeach").trigger("click");
        }
    });
    $("#senameSeach").click(function(){
        var fieldNames=storage.getItem("fieldNames");
        var seName = $("#sename").val();
        //console.log(fieldNames);
        if(fieldNames == 'undefined'){
            Tabledata('',seName,'','','',2016);
            sorter('',seName,'','','',2016);
        }else{
            Tabledata(fieldNames,seName,'','','',2016);
            sorter(fieldNames,seName,'','','',2016);
        }
        Indexsname(seName,'','','',2016);
    });
    $("#allsearch").click(function(){
        var fieldNames=storage.getItem("fieldNames");
        // console.log(fieldNames);
        var seName = $("#sename").val();
        // console.log(seName);
        var proptions = $("#province option:selected");
        var province = proptions.val();
        // console.log(province);
        var cityoptions = $("#citys option:selected");
        var city = cityoptions.val();
        // console.log(city);
        var disoptions = $("#county option:selected");
        var district = disoptions.val();
        // console.log(district);
        var year = $("#mydatepicker").val();
        // console.log(year);
        if( seName == ''){
            Tabledata(fieldNames,'',province,city,district,year);
            sorter(fieldNames,'',province,city,district,year);
        }else if(fieldNames == 'undefined'){
            Tabledata('',seName,province,city,district,year);
            sorter('',seName,province,city,district,year);
        }else{
            Tabledata(fieldNames,seName,province,city,district,year);
            sorter(fieldNames,seName,province,city,district,year);
        }
        Indexsname(seName,province,city,district,year);
    });
}

function Indexsname(seName,province,city,district,year){
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getFinancialQueryField?typeName=%E4%BF%A1%E6%89%98",
        async:true,
        success: function(data){
            var datas = data.val;
            // console.log(datas);
            var IndexContent = "";
            IndexContent += '<button class="sure right" id="modalClose">关闭</button><button id="sures" class="sure right">确定</button>';
            IndexContent += '<div class="indexHeight">';
            IndexContent += '<div class="indexTitle">'+datas[0].name+'</div>';
            IndexContent += '<div class="indexList">';
            IndexContent += '<label><input name="checkbox" type="checkbox" checked="checked" value="' + datas[0].value[0] + '" /><i id="indexname">'+datas[0].value[0]+'</i><span></span></label>';
            for (var m=1;m<datas[0].value.length;m++){
                IndexContent += '<label><input name="checkbox" type="checkbox" value="' + datas[0].value[m] + '" /><i id="indexname">'+datas[0].value[m]+'</i><span></span></label>';
            }
            IndexContent += '</div>';
            for (var i =1;i<datas.length;i++){
                IndexContent += '<div class="indexTitle">'+datas[i].name+'</div>';
                IndexContent += '<div class="indexList">';
                for (var m=0;m<datas[i].value.length;m++){
                    IndexContent += '<label><input name="checkbox" type="checkbox" value="' + datas[i].value[m] + '" /><i id="indexname">'+datas[i].value[m]+'</i><span></span></label>';
                }
                IndexContent += '</div>';
            }
            IndexContent += '</div>';
            $("#index").html(IndexContent);
            $("#sures").click(function(){
                var obj = document.getElementsByName("checkbox");
                var check_val = '';
                for(k in obj){
                    if(obj[k].checked){
                        check_val += obj[k].value + ",";
                    }
                }
                check_val = check_val.slice(0,-1); //去掉最后一个符号
                // console.log(check_val);
                var fieldNames = check_val;
                Tabledata(fieldNames,seName,province,city,district,year);
                //  搜索
                search(fieldNames);
                $("#index").css("display","none");
            });
            $("#modalClose").click(function(){
                $("#index").css("display","none");
            });
            $("#indexBank").click(function(){
                $("#index").css("display","block");
            })
        }
    })


}

function Tabledata(fieldNames,seName,province,city,district,year,sortColumn,sortSC){
    $("#bankBoxTitle").html("");
    $("#bankBoxTable").html("");
    $("#bankPage").html("");
    var Data = {
        'fieldNames': fieldNames,
        'seName': seName,
        'province': province,
        'city': city,
        'district':district,
        'year':year,
        'sortColumn': sortColumn,
        'sortSC': sortSC
    };
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/fiList?pageNo=1&typeName=%E4%BF%A1%E6%89%98",
        data:Data,
        async:true,
        success: function(data){
            // console.log(data);
            var  datas = data.val;
            var lists = datas.list;
            // console.log(lists);
            //    分页容器
            $("#bankPage").html();
            if(lists.length > 0){
                $('.isNoData').hide(); //隐藏暂无数据的行
                TabledataList(datas);  //处理数据并展示
            }else{
                $('.isNoData').show(); //显示暂无数据的行
                TabledataList(datas);  //处理数据并展示
            }
            //分页
            tablePage(datas,fieldNames,seName,province,city,district,year,sortColumn,sortSC);
            //下载
            downList(fieldNames,seName,province,city,district,year,sortColumn,sortSC);
        }
    })


}
function TabledataList(datas){
    var lists = datas.list;
    //console.log(lists);
    $("#bankBoxTitle").html("");
    $("#bankBoxTable").html("");
    var bankBoxTitleContent = '';
    var bankBoxTableContent = '';
    bankBoxTitleContent += '<tr><th>序号</th>';
    // console.log(lists[0]);
    for (var m=0;m<lists[0].length;m++){
        bankBoxTitleContent += '<th class="sorter">'+lists[0][m].name+'</th>';
    }
    bankBoxTitleContent += '</tr>';
    $("#bankBoxTitle").html(bankBoxTitleContent);
    for (var i=0;i<lists.length;i++){
        bankBoxTableContent += '<tr><td>'+(i+1)+'</td>';
        for (var k =0;k<lists[i].length;k++){
            // bankBoxTitleContent += '<th>'+lists[0][k].name+'</th>';
            bankBoxTableContent += '<td class="tdpointer">'+lists[i][k].value+'</td>';
        }
        bankBoxTableContent += '</tr>';
    }
    $("#bankBoxTable").html(bankBoxTableContent);
    $("#bankBoxTable tr td:nth-child(3)").click(function(){
        var seId = $(this).prev("td").html();
        $(this).addClass('tdpointer');
        //alert($(this).prev("td").html());
        //给下一页传参
        window.location.href="trustspecificData.html?seId="+seId;
    })
}
function sorter(fieldNames,seName,province,city,district,year){
    var clickNumber =false;
    var sortSC = "asc";
    var storage=window.localStorage;
    storage.setItem("fieldNames",fieldNames);
    storage.setItem("seName",seName);
    storage.setItem("province",province);
    storage.setItem("city",city);
    storage.setItem("district",district);
    storage.setItem("year",year);
    $(document).on('click','.sorter',function() {
        var fieldNames = storage.getItem("fieldNames");
        var seName = storage.getItem("seName");
        var province = storage.getItem("province");
        var city = storage.getItem("city");
        var district = storage.getItem("district");
        var year = storage.getItem("year");
        if(clickNumber) {
            $(this).addClass("headerSortUp");
            $(this).removeClass("headerSortDown");
            clickNumber = false;
            sortSC = "asc";
            var sortColumn = $(this).html();
            // console.log(sortSC);
            // console.log($(this).attr('class'));
            Tabledata(fieldNames,seName,province,city,district,year,sortColumn,sortSC);
        } else {
            $(this).removeClass("headerSortUp");
            $(this).addClass("headerSortDown");
            clickNumber = true;
            var sortColumn = $(this).html();
            sortSC = "desc";
            // console.log(sortSC);
            // console.log($(this).attr('class'));
            Tabledata(fieldNames,seName,province,city,district,year,sortColumn,sortSC);
        }
        // Tabledata(fieldNames,seName,province,city,district,year,sortColumn,sortSC);
    });
}
function tablePage(datas,fieldNames,seName,province,city,district,year,sortColumn,sortSC){
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
            'fieldNames': fieldNames,
            'pageNo': pageNo,
            'seName': seName,
            'province': province,
            'city': city,
            'district':district,
            'year':year,
            'sortColumn': sortColumn,
            'sortSC': sortSC

        };
        $.ajax({
            type:"get",
            url:"http://"+host+"/financial/fiList?typeName=%E4%BF%A1%E6%89%98",
            data:Datas,
            async:true,
            success:function(data){
                var datas = data.val;
                //console.log(datas);
                TabledataList(datas);
            }
        });

        return false;
    }

}
function downList(fieldNames,seName,province,city,district,year,sortColumn,sortSC){
    var Data = {
        'fieldNames': fieldNames,
        'seName': seName,
        'province': province,
        'city': city,
        'district':district,
        'year':year,
        'sortColumn': sortColumn,
        'sortSC': sortSC
    };
    $("#testDown").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/fiListDownload?pageNo=1&typeName=%E9%93%B6%E8%A1%8C&year=2016",
            data: Data,
            dataType: "json",
            async: true,
            success: function (data) {
                var datas = data.val;
                alert("后台下载中，请稍后...");
                app.sendMessage('app_download_file', 1,datas, function (message, int_param, str_param) {
                    // alert(message + int_param + str_param);
                    if(int_param >= 100){
                        app.sendMessage('app_get_download_path', 1, '', function (message, int_param, str_param) {
                            app.sendMessage('app_open_path', 1, str_param, function (message, int_param, str_param) {
                            });
                        });
                    }
                });
                $("#testDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })

    });

}
$(function(){
    area(); //省市区三级联动
    search('');  //全局搜索
    Indexsname('','','','',2016); //指标名字
    Tabledata('','','','','',2016);  //表格数据
    sorter('','','','','',2016);    //排序
});
