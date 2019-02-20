var width = (document.body.clientWidth)*98/100*39/100+'px';
var height = 286+'px';
var resizeCss = function() {
    $("#line").css("width", width).css("height", height);
    $("#twentyLine").css("width", width).css("height", height);
    $("#thirdLine").css("width", width).css("height", height);
};
resizeCss();
var indexLine = echarts.init(document.getElementById('line'));
var twentyLine = echarts.init(document.getElementById('twentyLine'));
var thirdLine = echarts.init(document.getElementById('thirdLine'));
var option  = option1 = option2  =   null;
option = option1 = option2  =  {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: false,top:-20},
        }
    },
    legend: {
        orient: 'horizontal',
        type:'scroll',
        // width:350,
        top: 0,
        formatter: function (name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        }
        // data: []
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月','10月','11月','12月']
    },
    grid: {
        left: '26',
        //right: '4%',
        bottom: '0',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        name: '相关值'
    },
    series: [
        // {
        //     name: '行业1',
        //     type: 'line',
        //     data: [1, 3, 9,21,16, 27,76, 81, 112,247,456, 741]
        // },
        // {
        //     name: '行业2',
        //     type: 'line',
        //     data: [1, 2, 4, 8, 16, 32, 64, 128, 256,123,456,546]
        // }
    ]
};
indexLine.clear();
indexLine.setOption(option,true);
twentyLine.clear();
twentyLine.setOption(option1,true);
thirdLine.clear();
thirdLine.setOption(option2,true);
//Echars自适应浏览器大小
window.onresize = function() {
    resizeCss();
    indexLine.resize();
    twentyLine.resize();
    thirdLine.resize();

};
function indexFirstLine(names,times,finals){
    indexLine.clear();
    indexLine.setOption(option,true);
    indexLine.setOption({
        legend: {
            data: names
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                formatter:function(value)
                {
                    // debugger;
                    var ret = "";//拼接加\n返回的类目项
                    var maxLength = 4;//每项显示文字个数
                    var valLength = value.length;//X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1)//如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = "";//每次截取的字符串
                            var start = i * maxLength;//开始截取的位置
                            var end = start + maxLength;//结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    }
                    else {
                        return value;
                    }
                }
            },
            data: times
        },
        series: finals

    })
}
function twentyLineIndex(names2,times,finals2){
    twentyLine.clear();
    twentyLine.setOption(option1,true);
    twentyLine.setOption({
        legend: {
            data: names2
        },
        xAxis: {
            axisLabel: {
                // interval: 0,
                tickInterval: 2,
                formatter:function(value)
                {
                    // debugger;
                    var ret = "";//拼接加\n返回的类目项
                    var maxLength = 4;//每项显示文字个数
                    var valLength = value.length;//X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1)//如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = "";//每次截取的字符串
                            var start = i * maxLength;//开始截取的位置
                            var end = start + maxLength;//结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    }
                    else {
                        return value;
                    }
                }
            },
            data: times
        },
        series: finals2
    })
}
function thirdLineIndex(names3,times,finals3){
    thirdLine.clear();
    thirdLine.setOption(option2,true);
    thirdLine.setOption({
        legend: {
            data: names3
        },
        xAxis: {
            axisLabel: {
                // interval: 0,
                tickInterval: 3,
                formatter:function(value)
                {
                    // debugger;
                    var ret = "";//拼接加\n返回的类目项
                    var maxLength = 4;//每项显示文字个数
                    var valLength = value.length;//X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1)//如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = "";//每次截取的字符串
                            var start = i * maxLength;//开始截取的位置
                            var end = start + maxLength;//结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    }
                    else {
                        return value;
                    }
                }
            },
            data: times
        },
        series: finals3
    })
}
//---------------------------图形
/**
 * 初始化相关参数，界面js调用
 * menucode：可以是js的名字
 */
function initLocalStorageArg(menucode){
//苹果手机不兼容出现input无法取值以下是解决方法
    $('.history>li').click(function(){
        var div = $(this).text();
        console.log(div);
        // $('#sec').val(div);
    });
    ItemName = "hist_"+menucode;
    ItemID = "";
    initlocalStorage();
    initIdStorage();
    showHistDom();
}
/**
 * 历史数据展示
 */
function showHistDom(){
    $(".history").html("");
    for(  var i=0,j=0 ; i<menuHistory.length,j<ids.length;i++,j++){
        $(".history").append('<li class="itemHistory" style="display: block;float: left">'+menuHistory[i]+'<span style="display: none;">'+ids[j]+'</span></li>');
    }
}
/**
 * 获取指定的localStorageobj对象，并转成Array对象。
 */
function initlocalStorage(){
    var localStorageobj = localStorage.getItem(ItemName);
    if(localStorageobj){
    }else{
        localStorage.setItem( ItemName,"[]");
        localStorageobj = localStorage.getItem(ItemName);
    }
    menuHistory=JSON.parse( localStorageobj);
}
function initIdStorage(){
    var localId = localStorage.getItem(ItemID);
    if(localId){
    }else{
        localStorage.setItem( ItemID,"[]");
        localId = localStorage.getItem(ItemID);
    }
    ids=JSON.parse( localId);
}
/**
 * 执行记录历史数据
 */
function local(chooseName){
    initlocalStorage();
    var value = chooseName;

    if(!value){ //这里判断输入的value是否合法，也可以用自己的判断方式
        alert("你未输入搜索内容");
        return false;
    }
//输入的内容localStorage有记录
    if($.inArray(value,menuHistory)>=0){
        var keyval = Object.keys(menuHistory).filter(function(x){return menuHistory[x] == value}).toString() ;
        menuHistory.splice(Number(keyval), 1); //splice(index,1):index代表value值在数组中对应到下标，1：表示删除
    }else {
        if (menuHistory.length > 9) {
            menuHistory.pop();
        }else {
        }
    }
    menuHistory.push(value);
    localStorage.removeItem(ItemName);
    localStorage.setItem( ItemName,JSON.stringify(menuHistory)); // 因为localStorage的value不能直接放数组，所以转换程json串后，再set
    showHistDom();
}
function localId(imIdArr,indexList){
    initIdStorage();
    var imIdArr = imIdArr;
    if(!imIdArr){ //这里判断输入的imIdArr是否合法，也可以用自己的判断方式
        alert("你未输入搜索内容");
        return false;
    }
    if($.inArray(imIdArr,ids)>=0){
        var keyvalId = Object.keys(ids).filter(function(x){return ids[x] == imIdArr}).toString() ;
        console.log(keyvalId);
        ids.splice(Number(keyvalId), 1); //splice(index,1):index代表value值在数组中对应到下标，1：表示删除
        console.log(ids);
    }else {
        if (ids.length > 9) {
            ids.pop();
        }else {
        }
    }
    ids.push(imIdArr);
    var imIdArr=ids.join(",");
    localStorage.removeItem(ItemID);
    localStorage.setItem( ItemID,JSON.stringify(ids)); // 因为localStorage的value不能直接放数组，所以转换程json串后，再set
    showHistDom();
    localCount(imIdArr,indexList);
    // clearOne(indexList);
}
function localCount(imIdArr,indexList){
    if(indexList=="undefined"){
        countDate("",imIdArr);
    }else{
        countDate(indexList,imIdArr);
        indexList1("",imIdArr);
    }
}
//清除记录功能
$(".btnEmpty").click(function(){
    localStorage.setItem( ItemName,JSON.stringify([]));
    localStorage.setItem( ItemID,JSON.stringify([]));
    initlocalStorage();
    initIdStorage();
    showHistDom();
    countDate("");
});
// function clearOne(indexList){
//     $(document).on('click','.itemHistory',function() {
//         $(this).remove();
//         var removeId = $(this).children("span").html();
//         console.log(removeId);
//         localId(removeId);
//     });
// }
function intoClear(){
    localStorage.setItem( ItemName,JSON.stringify([]));
    localStorage.setItem( ItemID,JSON.stringify([]));
    initlocalStorage();
    initIdStorage();
    showHistDom();
}
function echars0(imIdArr,year){
    $("#priceQuarter").html("");
    $("#indexOneTab a:first").tab('show');
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryCoreData?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        // url:"http://192.168.3.4:8081/industry/getIndustryCoreData?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        data:{"imIdArr":imIdArr,"date":year},
        async: true,
        success: function (data) {
            var datas = data.val;
            $("#priceQuarter").html("");
            var indexList = datas[0];
            for(var i=3;i<indexList.length;i++){
                $("#priceQuarter").append( '<option value='+i+'>'+ indexList[i]+ '</option>');
            }
            var indexArr = $("#priceQuarter option:selected").html();
            // console.log(indexArr);
            startPhoto(indexArr,imIdArr);
            monitorTable(datas);   //核心监测数据
        }
    });
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        // url:"http://192.168.3.4:8081/industry/getIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        data:{"imIdArr":imIdArr,"date":year},
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            commentBox(datas);     //运行点评
        }
    })
    indexChange(imIdArr);
    talkDown(year);
}
function talkDown(year){
    $("#talkDown").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
            data:{"date":year},
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
                $("#talkDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function echars(indexList,imIdArr){
    $("#priceQuarter").html("");
    $("#indexOneTab a:first").tab('show');
    var indexArr = indexList.split(",");
    for(var i=0;i<indexArr.length;i++){
        $("#priceQuarter").append( '<option value='+i+'>'+ indexArr[i]+ '</option>');
    }
    var indexArr = $("#priceQuarter option:selected").html();
    startPhoto(indexArr,imIdArr);
    indexChange(imIdArr);
}
function linePhoto(datas){
    var finals=[];
    var names=[];
    var times = datas[0].date;
    for(var i=0;i<datas.length;i++){
        names.push(datas[i].industry_name);
        finals.push({name:datas[i].industry_name,type:'line',data:datas[i].indexValue});
    }
    indexFirstLine(names,times,finals);
}
function linePhotoTwo(datas){
    // console.log(datas);
    var finals2=[];
    var names2=[];
    var times = datas[0].date;
    for(var m=0;m<datas.length;m++){
        names2.push(datas[m].industry_name);
        finals2.push({name:datas[m].industry_name,type:'line',data:datas[m].indexValue});
    }
    // console.log(names2);
    twentyLineIndex(names2,times,finals2);
}
function linePhotoThree(datas){
    var finals3=[];
    var names3=[];
    var times = datas[0].date;
    for(var n=0;n<datas.length;n++){
        names3.push(datas[n].industry_name);
        finals3.push({name:datas[n].industry_name,type:'line',data:datas[n].indexValue});
    }
    thirdLineIndex(names3,times,finals3);
}
function startPhoto(indexArr,imIdArr,year){
    var storage=window.localStorage;
    storage.setItem("indexArr",indexArr);
    storage.setItem("imIdArr",imIdArr);
    if(indexArr== null){
        indexArr="主要产品产量累计增长(%)";
    }
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7&periods=12",
        // url:"http://192.168.3.4:8081/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7&periods=12",
        data:{"indexArr":indexArr,"imIdArr":imIdArr,"date":year},
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            linePhoto(datas);
        }
    });
    timeChange(indexArr,imIdArr,year);
}
function indexChange(indexArr,imIdArr,year){
    var storage=window.localStorage;
    storage.setItem("indexArr",indexArr);
    storage.setItem("imIdArr",imIdArr);
    storage.setItem("year",year);
    $("#priceQuarter").one("change",function(){
        var indexArr = $("#priceQuarter option:selected").html();
        var imIdArr = storage.getItem("imIdArr");
        var year = storage.getItem("year");
        if(indexArr== null){
            indexArr="主要产品产量累计增长(%)";
        }
        if(imIdArr=="undefined"){
            imIdArr="";
        }
        if(year=="undefined"){
            year="";
        }
        $.ajax({
            type: "get",
            url: "http://" + host + "/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7&periods=12",
            // url:"http://192.168.3.4:8081/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7&periods=12",
            data:{
                "indexArr":indexArr,
                "imIdArr":imIdArr,
                "date":year
            },
            async: true,
            success: function (data) {
                var datas = data.val;
                // console.log(datas);
                linePhoto(datas);
                linePhotoTwo(datas);
                linePhotoThree(datas);
            }
        });
        $("#indexOneTab a:first").tab('show');
        timeChange(indexArr,imIdArr,year);
    })
}
function timeChange(indexArr,imIdArr,year){
    var storage=window.localStorage;
    storage.setItem("indexArr",indexArr);
    storage.setItem("imIdArr",imIdArr);
    storage.setItem("year",year);
    $("#indexOneTab li a").one("click",function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var indexArr = storage.getItem("indexArr");
        var imIdArr = storage.getItem("imIdArr");
        var year = storage.getItem("year");
        if(indexArr== null){
            indexArr="主要产品产量累计增长(%)";
        }
        if(year=="undefined"){
            year="";
        }
        var num = $(this).html().replace(/个月/g, '');
        $.ajax({
            type: "get",
            url: "http://" + host + "/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
            // url:"http://192.168.3.4:8081/industry/getIndustryCoreDataImage?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
            data:{"periods":num,"indexArr":indexArr,"imIdArr":imIdArr,"date":year},
            async: true,
            success: function (data) {
                var datas = data.val;
                // console.log(datas);
                linePhoto(datas);
                linePhotoTwo(datas);
                linePhotoThree(datas);
            }
        });
    })
}
function countDate(indexList,imIdArr){
    var storage=window.localStorage;
    storage.setItem("indexArr",indexList);
    storage.setItem("imIdArr",imIdArr);
    $("#count").click(function() {
        var indexArr = storage.getItem("indexList");
        var imIdArr = storage.getItem("imIdArr");
        var year = $("#yearDate").val();
        $(".curTime").html(year);
        if(indexArr=="undefined" & imIdArr=="undefined"){
            tables(year);
        }
        else if(imIdArr=="undefined"){
            $("#seName").html("");
            tables(year,indexArr);
        }else if(indexArr=="undefined"){
            tables(year,"",imIdArr);
        }else{
            tables(year,indexArr,imIdArr);
        }
        $("#seName").val("");
        talkDown(year);
        indexList1(year);
    })
}
function tables(year,indexArr,imIdArr){
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryCoreData?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        // url:"http://192.168.3.4:8081/industry/getIndustryCoreData?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        data:{
            "date":year,
            "indexArr":indexArr,
            "imIdArr":imIdArr
        },
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            monitorTable(datas);   //核心监测数据
        }
    })
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        // url:"http://192.168.3.4:8081/industry/getIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
        data:{
            "date":year,
            "imIdArr":imIdArr
        },
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            // $(".curTime").html(year);
            commentBox(datas);     //运行点评
        }
    })
    startPhoto(indexArr,imIdArr,year);
    indexChange(indexArr,imIdArr,year);
}
function search(indexList){
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#senameSeach").trigger("click");
        }
    });
    $("#senameSeach").click(function () {
        var industryName = $("#seName").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/industry/getIndustryList?xjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
            data: {
                'industryName': industryName
            },
            async: true,
            success: function (data) {
                var datas = data.val;
                // console.log(datas);
                var content = '';
                for (var i =0; i<datas.length;i++){
                    content += '<tr><td class="test"><input type="checkbox" name="choose" value='+datas[i].imId+'></td>';
                    content += '<td>'+datas[i].imId+'</td><td class="orgName">'+datas[i].industryName+'</td>';
                    // content += '<td>'+datas[i].industryAssociation+'</td><td>'+datas[i].industryDepartment+'</td></tr>';
                }
                $("#orgList").html(content);
                $(".test").click(function(){
                    var imIdArr = '';
                    var chooseName ="";
                    $(".test input[name='choose']:checked").each(function() {
                        // imIdArr += $(this).val() + ",";
                        imIdArr = $(this).parent().next("td").html();
                        chooseName = $(this).parent().nextAll(".orgName").html();
                    });
                    // imIdArr = imIdArr.slice(0, -1); //去掉最后一个符号
                    $("#seName").html(chooseName);
                    local(chooseName);
                    localId(imIdArr,indexList);
                })
            }
        })
    })
}
function monitorTable(datas){
    // console.log(datas);
    var lists = datas;
    var titles = datas[0];
    var names = [];
    for(var k=0;k<titles.length;k++){
        if(titles[k].length>4){
            var subStr0 = getSubStr(titles[k]);
            // console.log(subStr0);
        }else{
            var subStr0 = titles[k];
            // console.log(titles[k]);
        }
        names.push(subStr0);
        // console.log(names);
    }
    //表格截取字符串省略号
    function getSubStr (str){
        //var str = "可以用详细代码解决吗？急需，谢谢!";
        var subStr1 = str.substr(0,4);
        var subStr2 = str.substr(str.length-2,4);
        var subStr = subStr1 + "<br/>..." + subStr2 ;
        return subStr;
    }
    $("#mointerHead").html("");
    $("#mointerBody").html("");
    var titleBox = '';
    var listContent = '';
    titleBox += '<tr><th class="headCount"><a href="#" data-toggle="tooltip" data-placement="top"  title="序号">序号</a></th>';
    for (var i=0;i<names.length;i++){
        titleBox += '<th class="headCount"><a href="#" data-toggle="tooltip" data-placement="top"  title="'+titles[i]+'">'+names[i]+'</a></th>';
    }
    titleBox += '</tr>';
    $("#mointerHead").html(titleBox);
    for(var m=1;m<lists.length;m++){
        listContent += '<tr><td class="tdpointer">'+m+'</td>';
        for(var n=0;n<lists[m].length;n++){
            // listContent += '<td class="tdpointer">'+n+'</td>';
            listContent += '<td class="tdpointer">'+lists[m][n]+'</td>';
        }
        listContent += '</tr>';
    }
    $("[data-toggle='tooltip']").tooltip();
    $("#mointerBody").html(listContent);
    $("#mointerBody tr td:nth-child(3)").click(function(){
        var seId = $(this).prev("td").html();
        var nowName = $(this).html();
        $(this).addClass('tdpointer');
        // alert($(this).prev("td").html());
        //给下一页传参
        window.location.href="realtySpecificData.html?seId="+seId+"&nowName="+nowName;
    });

}
function sorter(date){
    var clickNumber =false;
    var sortSC = "asc";
    var storage=window.localStorage;
    storage.setItem("date",date);
    $(document).on('click','.headCount',function() {
        var date = storage.getItem("date");
        if(clickNumber) {
            // $(this).addClass("headerSortUp");
            // $(this).removeClass("headerSortDown");
            clickNumber = false;
            sortSC = "asc";
            // var sortColumn = $(this).html();
            var sortColumn = $(this).children().children("div[class='tooltip-inner']").html();
            // console.log(sortSC);
            tables(date,sortColumn,sortSC);
        } else {
            // $(this).removeClass("headerSortUp");
            // $(this).addClass("headerSortDown");
            clickNumber = true;
            var sortColumn = $(this).children().children("div[class='tooltip-inner']").html();
            sortSC = "desc";
            // console.log(sortSC);
            tables(date,sortColumn,sortSC);
        }
    })
}
function commentBox(datas){
    var list = datas;
    // console.log(list);
    $("#commentBox").html("");
    var box = '';
    var result = [];
    for(var i=0,len=list.length;i<len;i+=4){
        result.push(list.slice(i,i+4));
    }
    for(var i=0;i<result.length;i++){
        box += '<ul class="hang">';
        for(var m=0;m<result[i].length;m++){
            var cont = result[i][m].content;
            box += '<li class="box"><p class="addBox-title"><img src="../../img/industry/hy.png" alt="加载中">'+result[i][m].title+'</p>';
            box += '<span class="addBox-con">'+cont.substr(0, 40)+ '...'+'</span>' ;
            box += '<span class="addBox-con" style="display: none">'+cont+'</span>' ;
            box +='<a class="lue" href="javascript:void(0)">[详情]</a></li>';
        }
        box += '</ul>';
    }
    $("#commentBox").html(box);
    var pen  = true;
    $(document).on('click','.lue',function() {
        if (pen) {
            $(this).parent("li").children("span").css("display","none");
            $(this).prev("span").css("display","block");
            pen = false;
            $(this).html("[收起]");
        } else {
            $(this).parent("li").children("span").css("display","block");
            $(this).prev("span").css("display","none");
            pen = true;
            this.innerHTML = '[详情]';
        }
    })
}
function indexList1(year,imIdArr){
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndexList",
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            var IndexContent = "";
            IndexContent += '<button class="sure right" id="modalClose">关闭</button><button id="sures" class="sure right">确定</button>';
            IndexContent += '<div class="indexHeight">';
            for (var i =0;i<datas.length;i++){
                IndexContent += '<div class="indexTitle">'+datas[i].name+'</div>';
                IndexContent += '<div class="indexList">';
                for (var m=0;m<datas[i].val.length;m++){
                    IndexContent += '<label><input name="checkbox" type="checkbox" value="' + datas[i].val[m] + '" /><i id="indexname">'+datas[i].val[m]+'</i><span></span></label>';
                }
                IndexContent += '</div>';
            }
            IndexContent += '</div>';
            $("#index").html(IndexContent);
            $("#sures").click(function() {
                var obj = document.getElementsByName("checkbox");
                var check_val = '';
                for (k in obj) {
                    if (obj[k].checked) {
                        check_val += obj[k].value + ",";
                    }
                }
                check_val = check_val.slice(0, -1); //去掉最后一个符号
                // console.log(check_val);
                var indexList = check_val;
                if(year==""){
                    tables("",indexList,imIdArr);
                }else{
                    tables(year,indexList,imIdArr);
                }
                countDate(indexList,imIdArr);
                search(indexList);
                echars(indexList,imIdArr);
                $("#index").css("display","none");
            });
            $("#modalClose").click(function(){
                $("#index").css("display","none");
            });
            $(".indexBtn").click(function(){
                $("#index").css("display","block");
            })
        }
    })
}
$(function(){
    function show(){
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = mydate.getMonth();
        var preMouth = 0;
        if(month>1){
            preMouth = month-1;
        }else{
            preMouth = 12+(month-1);
            year = mydate.getFullYear()-1;
        }
        var str = "" + year + "年";
        str += preMouth + "月";
        return str;
    }
    var year = show();
    indexList1(year);      //指标列表
    search();         //模糊搜索
    countDate();          //统计
    echars0("",year);
    // sorter('');          //排序
    initLocalStorageArg("hi_001");    //记录历史
    intoClear();                      //每次进入页面清除历史
});
