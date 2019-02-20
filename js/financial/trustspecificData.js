var width = (document.body.clientWidth)*98/100*33/100+'px';
var width1 = (document.body.clientWidth)*98/100*46/100+'px';
var width2 = (document.body.clientWidth)*98/100*27/100+'px';
var width4 = (document.body.clientWidth)*98/100*50/100*46/100+'px';
var height = 400+'px';
var height1 = 300+'px';
var height2 = 320+'px';
var resizeCss = function() {
    $("#newpartnerpie").css("width", width).css("height", height2);
    $("#oldpartnerpie1").css("width", width).css("height", height);
    $("#oldpartnerpie2").css("width", width).css("height", height);
    $("#managerpie").css("width", width4).css("height", height1);
    $("#echarTwo1").css("width", width1).css("height", height1);
    $("#echarTwo2").css("width", width1).css("height", height1);
    $("#echarTwo3").css("width", width1).css("height", height1);
    $("#echarTwo4").css("width", width1).css("height", height1);
    $("#echarTwo5").css("width", width1).css("height", height1);
    $("#echarTwo6").css("width", width1).css("height", height1);
    $("#echarTwo7").css("width", width1).css("height", height1);

};
resizeCss();
var newpartnerpie = echarts.init(document.getElementById('newpartnerpie'));
var oldpartnerpie1 = echarts.init(document.getElementById('oldpartnerpie1'));
var oldpartnerpie2 = echarts.init(document.getElementById('oldpartnerpie2'));
var managerpie = echarts.init(document.getElementById('managerpie'));
var echarTwo1 = echarts.init(document.getElementById('echarTwo1'));
var echarTwo2 = echarts.init(document.getElementById('echarTwo2'));
var echarTwo3 = echarts.init(document.getElementById('echarTwo3'));
var echarTwo4 = echarts.init(document.getElementById('echarTwo4'));
var echarTwo5 = echarts.init(document.getElementById('echarTwo5'));
var echarTwo6 = echarts.init(document.getElementById('echarTwo6'));
var echarTwo7 = echarts.init(document.getElementById('echarTwo7'));
var option = option1 = option1 = option3 =  option4 =option5 =option6 =option7 =option8=
        option9 =option10 =null;
option = option1 = option2 = option3  =option4 =option5 =option6 =option7 =option8=
    option9 =option10 ={
        title : {
            //text: '出资占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} (%)"
        },
        legend: {
            orient: 'horizontal',
            type:'scroll',
            bottom: 10,
            formatter: function (name) {
                return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
            },
            tooltip: {
                show: true
            }
            // data: []
        },
        series : [
            {
                name: '出资占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '64%'],
                // size: ['80%', '90%'],
                labelLine:{
                    normal:{
                        length:5
                    }
                },
                label : {
                    normal : {
                        // formatter: '{b}',
                        formatter: function(params){
                            var name = params.name;
                            // console.log(name.length);
                            if(name.length>4){
                                return name.substring(0,4)+"…";
                            }else{
                                return name;
                            }

                        },
                        textStyle : {
                            fontWeight : 'normal',
                            fontSize : 12
                        }
                    }
                },
                // data:[{value:335, name:'直接访问'},
                //     {value:310, name:'邮件营销'},
                //     {value:234, name:'联盟广告'},
                //     {value:135, name:'视频广告'},
                //     {value:1548, name:'搜索引擎'}],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
};
newpartnerpie.setOption(option,true);
oldpartnerpie1.setOption(option1,true);
oldpartnerpie2.setOption(option2,true);
managerpie.setOption(option3,true);
echarTwo1.setOption(option4,true);
echarTwo2.setOption(option5,true);
echarTwo3.setOption(option6,true);
echarTwo4.setOption(option7,true);
echarTwo5.setOption(option8,true);
echarTwo6.setOption(option9,true);
echarTwo7.setOption(option10,true);

//Echars自适应浏览器大小
window.onresize = function(){
    resizeCss();
    newpartnerpie.resize();
    oldpartnerpie1.resize();
    oldpartnerpie2.resize();
    managerpie.resize();
    echarTwo1.resize();
    echarTwo2.resize();
    echarTwo3.resize();
    echarTwo4.resize();
    echarTwo5.resize();
    echarTwo6.resize();
    echarTwo7.resize();
};

function newEpie(newpardata,newpartners){
    newpartnerpie.setOption({
        title : {
            text: '出资占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        legend: {
            data: newpartners
        },
        series: [{
            data:newpardata
        }]
    })
}
function oldEpie1(oldpardata1,oldpartners1){
    oldpartnerpie1.setOption({
        title : {
            text: '出资占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        legend: {
            data: oldpartners1
        },
        series: [{
            data: oldpardata1
        }]
    })
}
function oldEpie2(oldpardata2,oldpartners2){
    oldpartnerpie2.setOption({
        title : {
            text: '出资占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        legend: {
            data: oldpartners2
        },
        series: [{
            data: oldpardata2
        }]
    })
}
function managerEpie(docNum,graNum,ungraNum,junNum,highNum){
    managerpie.setOption({
        legend: {
            orient: 'horizontal',
            type:'scroll',
            top: 0,
            data: ['博士','硕士','本科','大专','高中及其他']
        },
        series: [{
            name: '员工构成占比',
            data: [{value:docNum, name:'博士'},
                {value:graNum, name:'硕士'},
                {value:ungraNum, name:'本科'},
                {value:junNum, name:'大专'},
                {value:highNum, name:'高中及其他'}]
        }]
    })
}
function businessEpie1(bussEpie1name,bussEpie1data){
    echarTwo1.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie1name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie1data
        }]
    })
}
function businessEpie2(bussEpie2name,bussEpie2data){
    echarTwo2.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie2name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie2data
        }]
    })
}
function businessEpie3(bussEpie3name,bussEpie3data){
    echarTwo3.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie3name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie3data
        }]
    })
}
function businessEpie4(bussEpie4name,bussEpie4data){
    echarTwo4.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie4name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie4data
        }]
    })
}
function businessEpie5(bussEpie5name,bussEpie5data){
    echarTwo5.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie5name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie5data
        }]
    })
}
function businessEpie6(bussEpie6name,bussEpie6data){
    echarTwo6.setOption({
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie6name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie6data
        }]
    })
}
function businessEpie7(bussEpie7name,bussEpie7data){
    echarTwo7.setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} (%)"
        },
        legend: {
            // orient: 'vertical',
            top: 0,
            data: bussEpie7name
        },
        title : {
            // text: '金额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        grid: {
            //left: '10px',
            //right: '10px',
            bottom: '20px',
            containLabel: true
        },
        series: [{
            name: '金额占比',
            data: bussEpie7data
        }]
    })
}

function newpie(newtab){
    var newAmount = [];
    var newpartners = [];
    var newpardata = [];
    // console.log(newtab);
    for (var i =0; i<newtab.length;i++ ){
        newAmount.push(newtab[i].contributionAmount);
        newpartners.push(newtab[i].shareholders);
        newpardata.push({name: newtab[i].shareholders, value: (newtab[i].ratio).replace(/%/g, "")});
    }
    newEpie(newpardata,newpartners); //Echars渲染页面

}
function oldpie1(oldtab1){
    var oldAmount1 = [];
    var oldpartners1 = [];
    var oldpardata1 = [];
    for (var i =0; i<oldtab1.length;i++ ){
        oldAmount1.push(oldtab1[i].contributionAmount);
        oldpartners1.push(oldtab1[i].shareholders);
        oldpardata1.push({name: oldtab1[i].shareholders, value: (oldtab1[i].ratio).replace(/%/g, "")});
    }
    oldEpie1(oldpardata1,oldpartners1); //Echars渲染页面
}
function oldpie2(oldtab2){
    var oldAmount2 = [];
    var oldpartners2 = [];
    var oldpardata2 = [];
    for (var i =0; i<oldtab2.length;i++ ){
        oldAmount2.push(oldtab2[i].contributionAmount);
        oldpartners2.push(oldtab2[i].shareholders);
        oldpardata2.push({name: oldtab2[i].shareholders, value: (oldtab2[i].ratio).replace(/%/g, "")});
    }
    oldEpie2(oldpardata2,oldpartners2); //Echars渲染页面
}
function businessEchars(list5,list6,list7,list8,list9,list10,list11){
    var bussEpie1name = [];
    var bussEpie2name = [];
    var bussEpie3name = [];
    var bussEpie4name = [];
    var bussEpie5name = [];
    var bussEpie6name = [];
    var bussEpie7name = [];
    var bussEpie1value = [];
    var bussEpie2value = [];
    var bussEpie3value = [];
    var bussEpie4value = [];
    var bussEpie5value = [];
    var bussEpie6value = [];
    var bussEpie7value = [];
    var bussEpie1data = [];
    var bussEpie2data = [];
    var bussEpie3data = [];
    var bussEpie4data = [];
    var bussEpie5data = [];
    var bussEpie6data = [];
    var bussEpie7data = [];
    for (var i =0;i<list5.length;i++){
        bussEpie1name.push(list5[i].name);
        bussEpie1value.push(list5[i].value[1]);
        bussEpie1data.push({name:list5[i].name,value:(list5[i].value[1]).replace(/%/g, "")});
    }
    businessEpie1(bussEpie1name,bussEpie1data);
    for (var m =0;m< list6.length;m++){
        bussEpie2name.push(list6[m].name);
        bussEpie2value.push(list6[m].value[1]);
        bussEpie2data.push({name:list6[m].name,value:(list6[m].value[1]).replace(/%/g, "")});
    }
    businessEpie2(bussEpie2name,bussEpie2data);
    for (var m =0;m< list7.length;m++){
        bussEpie3name.push(list7[m].name);
        bussEpie3value.push(list7[m].value[1]);
        bussEpie3data.push({name:list7[m].name,value:(list7[m].value[1]).replace(/%/g, "")});
    }
    businessEpie3(bussEpie3name,bussEpie3data);
    for (var m =0;m< list8.length;m++){
        bussEpie4name.push(list8[m].name);
        bussEpie4value.push(list8[m].value[1]);
        bussEpie4data.push({name:list8[m].name,value:(list8[m].value[2]).replace(/%/g, "")});
    }
    businessEpie4(bussEpie4name,bussEpie4data);
    for (var m =0;m< list9.length;m++){
        bussEpie5name.push(list9[m].name);
        bussEpie5value.push(list9[m].value[1]);
        bussEpie5data.push({name:list9[m].name,value:(list9[m].value[2]).replace(/%/g, "")});
    }
    businessEpie5(bussEpie5name,bussEpie5data);
    for (var m =0;m< list10.length;m++){
        bussEpie6name.push(list10[m].name);
        bussEpie6value.push(list10[m].value[1]);
        bussEpie6data.push({name:list10[m].name,value:(list10[m].value[2]).replace(/%/g, "")});
    }
    businessEpie6(bussEpie6name,bussEpie6data);
    for (var m =0;m< list11.length;m++){
        bussEpie7name.push(list11[m].name);
        bussEpie7value.push(list11[m].value[1]);
        bussEpie7data.push({name:list11[m].name,value:(list11[m].value[1]).replace(/,/g, "")});
    }
    businessEpie7(bussEpie7name,bussEpie7data);

}
//------------------------------

function report(seId){
    var seId = seId;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/seReportList?pageNo=1",
        async:true,
        data:{'seId':seId},
        success: function(data){
            var datas = data.val;
            //console.log(datas);
            var lists = datas.list;
            //console.log(lists);
            //    分页容器
            $("#reportPage").html();
            var pages = datas.pages;
            var Pagecontent = "";
            Pagecontent = '<li class="active"><a href="####">1</a></li>';
            for (var i = 1; i < pages; i++){

                Pagecontent += '<li><a href="####">'+(i+1)+'</a></li>';
            }
            $(Pagecontent).appendTo("#reportPage");
            reportTableList(lists,seId);

        }
    });
}
function reportTableList(lists,seId){
    $("#reportTbody").innerHTML = "";
    var reporthtml = "";
    for (var i = 0;i<lists.length;i++){
        reporthtml += '<tr><td>'+(i+1)+'</td>';
        reporthtml += '<td class="reportBName">'+lists[i].reportName+'</td><td class="reportType">'+lists[i].reportTypeName+'</td><td class="reportYear">'+lists[i].arYear+'</td>';
        reporthtml += '<td style="display: none;">'+lists[i].reportId+'</td>';
        reporthtml += '<td class="reportTool"><span class="reportDown">下载报告</span></td>';
        reporthtml += '<td class="reportOrign"><a href="'+lists[i].websites+'"  target="_Blank">'+lists[i].websites+'</a></td>';
    }
    $("#reportTbody").html(reporthtml);
    reportpageClick(seId);  //分页跳转
    $(".reportDown").click(function(){
        var reportId = $(this).parent("td").prev("td").html();
        // console.log(reportId);
        $.ajax({
            type: "get",
            url: "http://" + host + "/financial/fianacialReportDownload",
            async: true,
            data: {'reportId': reportId},
            success: function (data) {
                var datas = data.val;
                // console.log(datas);
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
function reportpageClick(seId){
    $("#reportPage li a").click(function (){
        //alert($(this).html());
        $(this).parent('li').siblings('li').removeClass('active');
        $(this).parent('li').addClass('active');
        var pageNo = $(this).html();
        $.ajax({
            type: "get",
            url: "http://"+host+"/financial/seReportList",
            data:{
                'seId': seId,
                'pageNo':pageNo
            },
            async: true,
            success: function (data) {
                var datas = data.val;
                var lists = datas.list;
                reportTableList(lists);
            }
        });

    })
}

function finance(seId){
    var seId = seId;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getFinancingInformation",
        async:true,
        data:{'seId':seId},
        success: function(data){
            var market = data.val.ipo;
            var bond = data.val.bond;
            var marketbox = "",bondbox = "";
            marketbox += '<tr><td>是否上市</td><td colspan="3">'+market.is_ipo+'</td></tr>';
            bondbox  +='<tr><td>是否发债</td><td colspan="3">'+bond.is_bond+'</td></tr>';
            for (var i=0;i<market.list.length;i++){
                marketbox += '<tr><td>上市交易所</td><td colspan="3">'+market.list[i].exchange+'</td></tr><tr><td>上市时间</td><td>'+market.list[i].ipoDate+'</td><td>上市代码</td><td>'+market.list[i].ipoCode+'</td></tr>';

            }
            $(marketbox).appendTo('#market');
            for (var m=0;m<bond.list.length;m++){
                bondbox += '<tr><td>评级机构</td><td colspan="3">'+bond.list[m].ratingAgencies+'</td></tr><tr><td>主体长期信用等级</td><td>'+bond.list[m].creditRating+'</td><td>评级时间</td>\<td>'+bond.list[m].ratingTime+'</td></tr>';
            }
            $(bondbox).appendTo("#bond");
        }
    });
    financeDown(seId);
}
function financeDown(seId){
    $("#financDown").click(function (){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/exportFinancingInformation",
            data:{
                'seId':seId
            },
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
                $("#financDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}

function business(seId){
    var seId = seId;
    businessYear(seId,2016);
    $("#businessSearch").click(function(){
        var year=$("#businessYear").val();
        businessYear(seId,year);
        bussinessDown(seId,year);
    })
    bussinessDown(seId);
}
function bussinessDown(seId,year){
    $("#businessDown").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/exportBusinessStructure",
            data:{
                'seId':seId,
                'year':year
            },
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
                $("#businessDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function businessYear(seId,year){
    echarTwo1.showLoading();
    echarTwo2.showLoading();
    echarTwo3.showLoading();
    echarTwo4.showLoading();
    echarTwo5.showLoading();
    echarTwo6.showLoading();
    echarTwo7.showLoading();
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getBusinessStructure",
        async:true,
        data:{'seId':seId,'year':year},
        success: function(data){
            echarTwo1.hideLoading();
            echarTwo2.hideLoading();
            echarTwo3.hideLoading();
            echarTwo4.hideLoading();
            echarTwo5.hideLoading();
            echarTwo6.hideLoading();
            echarTwo7.hideLoading();
            var datas = data.val.val;
            // console.log(datas);
            businessTable(datas);
        }
    });
}
function businessTable(datas) {
    console.log(datas);
    var list1 = datas[0].list;
    var list2 = datas[1].list;
    var list3 = datas[2].list;
    var list4 = datas[3].list;
    var list5 = datas[4].list;
    var list6 = datas[5].list;
    var list7 = datas[6].list;
    var list8 = datas[7].list;
    var list9 = datas[8].list;
    var list10 = datas[9].list;
    var list11 = datas[10].list;
    var list12 = datas[11].list;
    var list13 = datas[12].list;
    var list14 = datas[13].list;
    var list15 = datas[14].list;
    var tableconcent1 = tableconcent2 = tableconcent3 = tableconcent4 = tableconcent5 ='';
    var tableconcent6 = tableconcent7 = tableconcent8 = tableconcent9 = tableconcent10 ='';
    var tableconcent11 = tableconcent12 = tableconcent13 = tableconcent14 = tableconcent15 ='';
    for (var i =0;i<list1.length;i++){
        tableconcent1 += ' <tr><td>'+list1[i].name+'</td>';
        for (var j=0;j<list1[i].value.length;j++){
            tableconcent1 += '<td>'+list1[i].value[j]+'</td>';
        }
        tableconcent1 += '</tr>';
    }
    $("#use").html(tableconcent1);
    for (var i =0;i<list2.length;i++){
        tableconcent2 += ' <tr><td>'+list2[i].name+'</td>';
        for (var j=0;j<list2[i].value.length;j++){
            tableconcent2 += '<td>'+list2[i].value[j]+'</td>';
        }
        tableconcent2 += '</tr>';
    }
    $("#fB").html(tableconcent2);
    for (var i =0;i<list3.length;i++){
        tableconcent3 += ' <tr><td>'+list3[i].name+'</td>';
        for (var j=0;j<list3[i].value.length;j++){
            tableconcent3 += '<td>'+list3[i].value[j]+'</td>';
        }
        tableconcent3 += '</tr>';
    }
    $("#useR").html(tableconcent3);
    for (var i =0;i<list4.length;i++){
        tableconcent4 += ' <tr><td>'+list4[i].name+'</td>';
        for (var j=0;j<list4[i].value.length;j++){
            if(list4[i].value.length<2){
                tableconcent4 += '<td>'+list4[i].value[j]+'</td>';
                for(var k=0;k<(2-list4[i].value.length);k++){
                    tableconcent4 += '<td></td>';
                }
            }else{
                tableconcent4 += '<td>'+list4[i].value[j]+'</td>';
            }
        }
        tableconcent4 += '</tr>';
    }
    $("#fBR").html(tableconcent4);
    for (var i =0;i<list5.length;i++){
        tableconcent5 += ' <tr><td>'+list5[i].name+'</td>';
        for (var j=0;j<list5[i].value.length;j++){
            tableconcent5 += '<td>'+list5[i].value[j]+'</td>';

        }
        tableconcent5 += '</tr>';
    }
    $("#Two1").html(tableconcent5);
    for (var i =0;i<list6.length;i++){
        tableconcent6 += ' <tr><td>'+list6[i].name+'</td>';
        for (var j=0;j<list6[i].value.length;j++){
            tableconcent6 += '<td>'+list6[i].value[j]+'</td>';
        }
        tableconcent6 += '</tr>';
    }
    $("#Two2").html(tableconcent6);
    for (var i =0;i<list7.length;i++){
        tableconcent7 += ' <tr><td>'+list7[i].name+'</td>';
        for (var j=0;j<list7[i].value.length;j++){
            tableconcent7 += '<td>'+list7[i].value[j]+'</td>';
        }
        tableconcent7 += '</tr>';
    }
    $("#Two3").html(tableconcent7);
    for (var i =0;i<list8.length;i++){
        tableconcent8 += ' <tr><td>'+list8[i].name+'</td>';
        for (var j=1;j<list8[i].value.length;j++){
             tableconcent8 += '<td>'+list8[i].value[j]+'</td>';
        }
        tableconcent8 += '</tr>';
    }
    $("#Two4").html(tableconcent8);
    for (var i =0;i<list9.length;i++){
        tableconcent9 += ' <tr><td>'+list9[i].name+'</td>';
        for (var j=1;j<list9[i].value.length;j++){
            tableconcent9 += '<td>'+list9[i].value[j]+'</td>';
        }
        tableconcent9 += '</tr>';
    }
    $("#Two5").html(tableconcent9);
    for (var i =0;i<list10.length;i++){
        tableconcent10 += ' <tr><td>'+list10[i].name+'</td>';
        for (var j=1;j<list10[i].value.length;j++){
            tableconcent10 += '<td>'+list10[i].value[j]+'</td>';
        }
        tableconcent10 += '</tr>';
    }
    $("#Two6").html(tableconcent10);
    for (var i =0;i<list11.length;i++){
        tableconcent11 += ' <tr><td>'+list11[i].name+'</td>';
        for (var j=0;j<list11[i].value.length;j++){
            tableconcent11 += '<td>'+list11[i].value[j]+'</td>';
        }
        tableconcent11 += '</tr>';
    }
    $("#Two7").html(tableconcent11);
    for (var i =0;i<list12.length;i++){
        tableconcent12 += ' <tr><td>'+list12[i].name+'</td>';
        for (var j=0;j<list12[i].value.length;j++){
            tableconcent12 += '<td>'+list12[i].value[j]+'</td>';
        }
        tableconcent12 += '</tr>';
    }
    $("#tzStyle").html(tableconcent12);
    for (var i =0;i<list13.length;i++){
        tableconcent13 += ' <tr><td>'+list13[i].name+'</td>';
        for (var j=0;j<list13[i].value.length;j++){
            tableconcent13 += '<td>'+list13[i].value[j]+'</td>';
        }
        tableconcent13 += '</tr>';
    }
    $("#tzFive").html(tableconcent13);
    for (var i =0;i<list14.length;i++){
        tableconcent14 += ' <tr><td>'+list14[i].name+'</td>';
        for (var j=0;j<list14[i].value.length;j++){
            tableconcent14 += '<td>'+list14[i].value[j]+'</td>';
        }
        tableconcent14 += '</tr>';
    }
    $("#dkFive").html(tableconcent14);
    businessEchars(list5,list6,list7,list8,list9,list10,list11);
}

function managerpieData(datas){
    var docNum = (datas.doctor.ratio).replace(/%/g, "");
    var graNum = (datas.graduate.ratio).replace(/%/g, "");
    var ungraNum = (datas.undergraduate.ratio).replace(/%/g, "");
    var junNum = (datas.juniorCollege.ratio).replace(/%/g, "");
    var highNum = (datas.highSchool.ratio).replace(/%/g, "");
    managerEpie(docNum,graNum,ungraNum,junNum,highNum)
}
function  manage(seId) {
    var seId = seId;
    yearChoose(seId);
    $("#manageSearch").click(function(){
        var year=$("#manageYear").val();
        yearChoose(seId,year);
        manageDown(seId,year);
    })
    manageDown(seId);
}
function manageDown(seId,year){
    $("#mangerDown").one("click",function (){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/exportManagementSituation",
            data:{
                'seId':seId,
                'year':year
            },
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
                $("#mangerDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function yearChoose(seId,year){
    managerpie.showLoading();
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getManagementSituation",
        async:true,
        data:{'seId':seId,"year":year},
        success: function(data){
            managerpie.hideLoading();
            var datas = data.val;
            // console.log(datas);
            $(".bankT").html(datas.bankType);
            $(".netnum").html(datas.businessOutlets);
            $(".companyIntro").html(datas.seIntroduction);
            $("#analyNav").html(datas.analysis);
            $("#riskNav").html(datas.riskManagement);
            $(".docNum").html(datas.doctor.number);
            $(".docRat").html(datas.doctor.ratio);
            $(".graNum").html(datas.graduate.number);
            $(".graRat").html(datas.graduate.ratio);
            $(".ungraNum").html(datas.undergraduate.number);
            $(".ungraRat").html(datas.undergraduate.ratio);
            $(".juniorNum").html(datas.juniorCollege.number);
            $(".juniorRat").html(datas.juniorCollege.ratio);
            $(".heightNum").html(datas.highSchool.number);
            $(".heightRat").html(datas.highSchool.ratio);
            $("#comMoreBox").html(datas.seIntroduction);
            $("#comMoreBox1").html(datas.analysis);
            $("#comMoreBox2").html(datas.riskManagement);
            managerpieData(datas);
        }
    });
}

function supervision(seId){
    var seId = seId;
    totalList(seId);
    $("#search").click(function(){
        var year=$("#supYear").val();
        totalList(seId,year);
    });
    superDown(seId);
}
function superDown(seId){
    $("#superDown").click(function (){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/supervisionDownload",
            data:{
                'seId':seId
            },
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
                $("#superDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function totalList(seId,year){
    $.ajax({
        type: "get",
        url: "http://"+host+"/financial/getSupervision",
        data:{'seId':seId,"year":year},
        success: function(data){
            var times = data.val.header;
            var datas = data.val.val;
            var list1 = datas[0];
            var list2 = datas[1];
            var list3 = datas[2];
            var list4 = datas[3];
            //console.log(times);
            $("#supvName1").html(list1.title);
            $("#supvName2").html(list2.title);
            $("#supvName3").html(list3.title);
            $("#supvName4").html(list4.title);
            var titleContent = "<th>日期</th>";
            for (var t = 0; t<times.length;t++){
                titleContent += '<th>'+times[t]+'</th>';
            }
            $(".superTitle").html(titleContent);
            lists(list1,list2,list3,list4);
            supUnit(list1,list2,list3,list4);
        }
    })

}
function supUnit(list1,list2,list3,list4){
    $("#supervisionUnit").change(function(){
        var unit = $("#supervisionUnit option:selected").text();
        if(unit=="元"){
            lists(list1,list2,list3,list4);
        }else if(unit=="万元"){
            listsHundred(list1,list2,list3,list4);
        }else{
            listsMillion(list1,list2,list3,list4);
        }
    })
}
function lists(list1,list2,list3,list4){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    var reg=/%+/;
    for (var i = 0;i < list1s.length;i++){
        listcontent += '<tr><td>'+list1s[i].name+'</td>';
        for (var m = 0;m < list1s[i].val.length;m++){
            if(reg.test(list1s[i].val[m])){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else if(list1s[i].val[m]==""){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else{
                listcontent += '<td>'+fmoney(list1s[i].val[m],2)+'</td>';
            }
        }
        listcontent += '</tr>';
    }
    $("#supervList").html(listcontent);
    for (var i = 0;i < list2s.length;i++){
        listcontent1 += '<tr><td>'+list2s[i].name+'</td>';
        for (var m = 0;m < list2s[i].val.length;m++){
            if(reg.test(list2s[i].val[m])){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else if(list2s[i].val[m]==""){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else{
                listcontent1 += '<td>'+fmoney(list2s[i].val[m],2)+'</td>';
            }
        }
        listcontent1 += '</tr>';
    }
    $("#supervList1").html(listcontent1);
    for (var i = 0;i < list3s.length;i++){
        listcontent2 += '<tr><td>'+list3s[i].name+'</td>';
        for (var m = 0;m < list3s[i].val.length;m++){
            if(reg.test(list3s[i].val[m])){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else if(list3s[i].val[m]==""){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else{
                listcontent2 += '<td>'+fmoney(list3s[i].val[m],2)+'</td>';
            }
        }
        listcontent2 += '</tr>';
    }
    $("#supervList2").html(listcontent2);
    for (var i = 0;i < list4s.length;i++){
        listcontent3 += '<tr><td>'+list4s[i].name+'</td>';
        for (var m = 0;m < list4s[i].val.length;m++){
            if(reg.test(list4s[i].val[m])){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else if(list4s[i].val[m]==""){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else{
                listcontent3 += '<td>'+fmoney(list4s[i].val[m],2)+'</td>';
            }
        }
        listcontent3 += '</tr>';
    }
    $("#supervList3").html(listcontent3);
}
function listsHundred(list1,list2,list3,list4){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var reg=/%+/;
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    for (var i = 0;i < list1s.length;i++){
        listcontent += '<tr><td>'+list1s[i].name+'</td>';
        for (var m = 0;m < list1s[i].val.length;m++){
            if(reg.test(list1s[i].val[m])){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else if(list1s[i].val[m]==""){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else{
                listcontent += '<td>'+fmoney(((list1s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent += '</tr>';
    }
    $("#supervList").html(listcontent);
    for (var i = 0;i < list2s.length;i++){
        listcontent1 += '<tr><td>'+list2s[i].name+'</td>';
        for (var m = 0;m < list2s[i].val.length;m++){
            if(reg.test(list2s[i].val[m])){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else if(list2s[i].val[m]==""){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else{
                listcontent1 += '<td>'+fmoney(((list2s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent1 += '</tr>';
    }
    $("#supervList1").html(listcontent1);
    for (var i = 0;i < list3s.length;i++){
        listcontent2 += '<tr><td>'+list3s[i].name+'</td>';
        for (var m = 0;m < list3s[i].val.length;m++){
            if(reg.test(list3s[i].val[m])){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else if(list3s[i].val[m]==""){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else{
                listcontent2 += '<td>'+fmoney(((list3s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent2 += '</tr>';
    }
    $("#supervList2").html(listcontent2);
    for (var i = 0;i < list4s.length;i++){
        listcontent3 += '<tr><td>'+list4s[i].name+'</td>';
        for (var m = 0;m < list4s[i].val.length;m++){
            if(reg.test(list4s[i].val[m])){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else if(list4s[i].val[m]==""){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else{
                listcontent3 += '<td>'+fmoney(((list4s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent3 += '</tr>';
    }
    $("#supervList3").html(listcontent3);
}
function listsMillion(list1,list2,list3,list4){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var reg=/%+/;
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    for (var i = 0;i < list1s.length;i++){
        listcontent += '<tr><td>'+list1s[i].name+'</td>';
        for (var m = 0;m < list1s[i].val.length;m++){
            if(reg.test(list1s[i].val[m])){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else if(list1s[i].val[m]==""){
                listcontent += '<td>'+list1s[i].val[m]+'</td>';
            }else{
                listcontent += '<td>'+fmoney(((list1s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent += '</tr>';
    }
    $("#supervList").html(listcontent);
    for (var i = 0;i < list2s.length;i++){
        listcontent1 += '<tr><td>'+list2s[i].name+'</td>';
        for (var m = 0;m < list2s[i].val.length;m++){
            if(reg.test(list2s[i].val[m])){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else if(list2s[i].val[m]==""){
                listcontent1 += '<td>'+list2s[i].val[m]+'</td>';
            }else{
                listcontent1 += '<td>'+fmoney(((list2s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent1 += '</tr>';
    }
    $("#supervList1").html(listcontent1);
    for (var i = 0;i < list3s.length;i++){
        listcontent2 += '<tr><td>'+list3s[i].name+'</td>';
        for (var m = 0;m < list3s[i].val.length;m++){
            if(reg.test(list3s[i].val[m])){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else if(list3s[i].val[m]==""){
                listcontent2 += '<td>'+list3s[i].val[m]+'</td>';
            }else{
                listcontent2 += '<td>'+fmoney(((list3s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent2 += '</tr>';
    }
    $("#supervList2").html(listcontent2);
    for (var i = 0;i < list4s.length;i++){
        listcontent3 += '<tr><td>'+list4s[i].name+'</td>';
        for (var m = 0;m < list4s[i].val.length;m++){
            if(reg.test(list4s[i].val[m])){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else if(list3s[i].val[m]==""){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else{
                listcontent3 += '<td>'+fmoney(((list4s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent3 += '</tr>';
    }
    $("#supervList3").html(listcontent3);
}

function money(seId){
    var seId = seId;
    $.ajax({
        type: "get",
        url: "http://"+host+"/financial/getFinancialSummary",
        data:{'seId':seId},
        success: function(data){
            var datas = data.val;
            // console.log(datas);
            moneyYear(seId,datas); //获取年份
            moneyMainUnit(datas);
            moneyMonitorUnit(datas);
            moneyReport(datas);     //财务摘要

        }
    });
    moneyDown(seId);
    moneyOtherReport(seId);
}
var flag = false;
function moneyDown(seId,year,flag){
    if(flag){
        if(year == "时间"){
            year = "五期";
        }
        $("#finaDown").one("click",function(){
            $.ajax({
                type: "get",
                url: "http://" + host + "/financialExport/financialSummaryDownload",
                data:{'seId':seId,'year':year},
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
                    $("#finaDown").html('<a href="'+datas+'" download="">下载数据</a>');
                }
            })
        })
    }else{
        $("#finaDown").one("click",function(){
            $.ajax({
                type: "get",
                url: "http://" + host + "/financialExport/financialSummaryDownload",
                data:{'seId':seId},
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
                    $("#finaDown").html('<a href="'+datas+'" download="">下载数据</a>');
                }
            })
        })
    }

}
function moneyYear(seId,datas) {
    //主要财务数据切换年份
    $("#MainDate").change(function(){
        var year = $("#MainDate option:selected").text();
        // console.log(year);
        if( year == "时间"){
            moneyReport(datas);
        }else{
            $.ajax({
                type: "get",
                url: "http://"+host+"/financial/getFinancialSummary",
                data:{'seId':seId,'year':year},
                success: function(data){
                    var datas = data.val;
                    //console.log(datas);
                    moneyMain(datas);
                    moneyMainUnit(datas);
                }
            })

        }
    });
//    监测数据切换年份
    $("#MonitorDate").change(function(){
        var year = $("#MonitorDate option:selected").text();
        //console.log(year);
        if( year == "时间"){
            moneyReport(datas);
        }else{
            $.ajax({
                type: "get",
                url: "http://"+host+"/financial/getFinancialSummary",
                data:{'seId':seId,'year':year},
                success: function(data){
                    var datas = data.val;
                    //console.log(datas);
                    moneyMonitor(datas);
                    moneyMonitorUnit(datas);
                }
            })

        }
    });

}
function moneyMainUnit(datas){
    $("#MainDateUnit").change(function(){
        var unit = $("#MainDateUnit option:selected").text();
        if(unit=="元"){
            moneyReport(datas);
        }else if(unit=="万元"){
            mainHundred(datas);
        }else{
            mainMillion(datas);
        }
    })
}
function moneyMonitorUnit(datas){
    $("#MonitorDateUnit").change(function(){
        var unit = $("#MonitorDateUnit option:selected").text();
        if(unit=="元"){
            moneyReport(datas);
        }else if(unit=="万元"){
            mointerHundred(datas);
        }else{
            mointerMillion(datas);
        }
    })
}
//财务摘要 主要财务数据 元
function moneyMain(datas) {
    $("#mainTableTitle").html("");
    $("#mainTable").html("");
    var mainDatas = datas.main_data;
    var years = datas.years;
    var mainTableTitleBox = '';
    var mainTableContent = '';
    var reg=/%+/;
    mainTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        mainTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(mainTableTitleBox).appendTo("#mainTableTitle");
    for (var m=0;m<mainDatas.length;m++){
        mainTableContent += '<tr><td>'+mainDatas[m].name+'</td>';
        for (var n=0;n<mainDatas[m].value.length;n++){
            if(reg.test(mainDatas[m].value[n])){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==""){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==null){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else{
                mainTableContent += '<td>'+fmoney(mainDatas[m].value[n],2)+'</td>';
            }
        }
        mainTableContent += '</tr>';
    }
    $("#mainTable").html(mainTableContent);
}
function mainHundred(datas){
    $("#mainTableTitle").html("");
    $("#mainTable").html("");
    var mainDatas = datas.main_data;
    var years = datas.years;
    var mainTableTitleBox = '';
    var mainTableContent = '';
    var reg=/%+/;
    mainTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        mainTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(mainTableTitleBox).appendTo("#mainTableTitle");
    for (var m=0;m<mainDatas.length;m++){
        mainTableContent += '<tr><td>'+mainDatas[m].name+'</td>';
        for (var n=0;n<mainDatas[m].value.length;n++){
            if(reg.test(mainDatas[m].value[n])){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==""){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==null){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else{
                mainTableContent += '<td>'+fmoney(((mainDatas[m].value[n])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        mainTableContent += '</tr>';
    }
    $("#mainTable").html(mainTableContent);
}
function mainMillion(datas){
    $("#mainTableTitle").html("");
    $("#mainTable").html("");
    var mainDatas = datas.main_data;
    var years = datas.years;
    var mainTableTitleBox = '';
    var mainTableContent = '';
    var reg=/%+/;
    mainTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        mainTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(mainTableTitleBox).appendTo("#mainTableTitle");
    for (var m=0;m<mainDatas.length;m++){
        mainTableContent += '<tr><td>'+mainDatas[m].name+'</td>';
        for (var n=0;n<mainDatas[m].value.length;n++){
            if(reg.test(mainDatas[m].value[n])){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==""){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else if(mainDatas[m].value[n]==null){
                mainTableContent += '<td>'+mainDatas[m].value[n]+'</td>';
            }else{
                mainTableContent += '<td>'+fmoney(((mainDatas[m].value[n])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        mainTableContent += '</tr>';
    }
    $("#mainTable").html(mainTableContent);
}
//财务摘要 监测数据 元
function moneyMonitor(datas){
    $("#monitorTableTitle").html("");
    $("#monitorTable").html("");
    var reg=/%+/;
    var monitorDatas = datas.monitor_data;
    var years = datas.years;
    var monitorTableTitleBox = '';
    var monitorTableContent = '';
    monitorTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        monitorTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(monitorTableTitleBox).appendTo("#monitorTableTitle");

    for (var j =0;j<monitorDatas.length;j++){
        monitorTableContent += '<tr><td>'+monitorDatas[j].name+'</td>';
        for (var k=0;k<monitorDatas[j].value.length;k++){
            if(reg.test(monitorDatas[j].value[k])){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else if(monitorDatas[j].value[k]==""){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else{
                monitorTableContent += '<td>'+fmoney(monitorDatas[j].value[k],2)+'</td>';
            }
        }
        monitorTableContent += '</tr>';
    }
    $("#monitorTable").html(monitorTableContent);

}
function mointerHundred(datas){
    $("#monitorTableTitle").html("");
    $("#monitorTable").html("");
    var monitorDatas = datas.monitor_data;
    var years = datas.years;
    var monitorTableTitleBox = '';
    var monitorTableContent = '';
    var reg=/%+/;
    monitorTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        monitorTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(monitorTableTitleBox).appendTo("#monitorTableTitle");
    for (var j =0;j<monitorDatas.length;j++){
        monitorTableContent += '<tr><td>'+monitorDatas[j].name+'</td>';
        for (var k=0;k<monitorDatas[j].value.length;k++){
            if(reg.test(monitorDatas[j].value[k])){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else if(monitorDatas[j].value[k]==""){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else{
                monitorTableContent += '<td>'+fmoney(((monitorDatas[j].value[k])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        monitorTableContent += '</tr>';
    }
    $("#monitorTable").html(monitorTableContent);
}
function mointerMillion(datas){
    $("#monitorTableTitle").html("");
    $("#monitorTable").html("");
    var monitorDatas = datas.monitor_data;
    var years = datas.years;
    var monitorTableTitleBox = '';
    var monitorTableContent = '';
    var reg=/%+/;
    monitorTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        monitorTableTitleBox += '<th>'+years[i]+'</th>';
    }
    $(monitorTableTitleBox).appendTo("#monitorTableTitle");
    for (var j =0;j<monitorDatas.length;j++){
        monitorTableContent += '<tr><td>'+monitorDatas[j].name+'</td>';
        for (var k=0;k<monitorDatas[j].value.length;k++){
            if(reg.test(monitorDatas[j].value[k])){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else if(monitorDatas[j].value[k]==""){
                monitorTableContent += '<td>'+monitorDatas[j].value[k]+'</td>';
            }else{
                monitorTableContent += '<td>'+fmoney(((monitorDatas[j].value[k])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        monitorTableContent += '</tr>';
    }
    $("#monitorTable").html(monitorTableContent);
}
function moneyReport(datas){
    moneyMain(datas);    //财务摘要 主要财务数据
    moneyMonitor(datas);    //财务摘要 监测数据

}
//资产负债表、利润表、现金流量表
function moneyOtherReport(seId){
    var seId = seId;
    $("#myTab2 li a").click(function(event){
        event.stopPropagation();
        var reportName = $(this).html();
        var reportSource = $("#reportType option:selected").text();
        var year = $("#assetDate option:selected").text();
        var reportType = $("#assetType option:selected").text();
        $("#assetTableTitle").html("");
        $("#assetTable").html("");
        $("#profitTable").html("");
        $("#cashflowTable").html("");
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherReportSource(seId,reportName,year,reportType);    //报告来源
        mOtherYearDate(seId,reportName,reportType,reportSource);   //年份获取和选择
        mOtherType(seId,reportName,year,reportSource);            //年报季报
    })
}
//报告来源
function mOtherReportSource(seId,reportName,year,reportType){
    var seId = seId;
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    $("#reportType").change(function(){
        var reportSource = $("#reportType option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherYearDate(seId,reportName,reportType,reportSource);
        $("#assetDate").val(0);
        $("#assetType").val(0);
        $("#assetUnit").val(0);
    });
    $("#profitReport").change(function(){
        var reportSource = $("#profitReport option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherYearDate(seId,reportName,reportType,reportSource);
        $("#profitDate").val(0);
        $("#profitType").val(0);
        $("#profitUnit").val(0);
    });
    $("#cashReport").change(function(){
        var reportSource = $("#cashReport option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherYearDate(seId,reportName,reportType,reportSource);
        $("#cashflowDate").val(0);
        $("#cashflowType").val(0);
        $("#cashUnit").val(0);
    });
    $("#projectReport").change(function(){
        var reportSource = $("#projectReport option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherYearDate(seId,reportName,reportType,reportSource);
        $("#projectProfitDate").val(0);
        $("#projectProfitType").val(0);
        $("#projectProfitUnit").val(0);
    });
}
//年份获取和选择
function mOther(seId,reportName,year,reportType,reportSource){
    $.ajax({
        type: "get",
        url: "http://"+host+"/financial/getReport",
        data:{
            'seId':seId,
            'reportName':reportName,
            'reportType':reportType,
            'year':year,
            'rmnType_name':reportSource
        },
        success: function(data){
            var datas = data.val;
            //console.log(datas);
            assetTable(datas);                       //资产负债表
            profitTable(datas);                      //利润表
            cashflowTable(datas);                    //现金流量表
            projectProfitTable(datas);               //项目利润表
            mOtherUnit(datas);
            otherDown(seId,reportName,reportType,year);  //下载
        }
    });
}
function otherDown(seId,reportName,reportType,year){
    $("#assetDown").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/reportDownload",
            data:{
                'seId':seId,
                'reportName':reportName,
                'reportType':reportType,
                'year':year
            },
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
                $("#assetDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
    $("#profitDown").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/reportDownload",
            data:{
                'seId':seId,
                'reportName':reportName,
                'reportType':reportType,
                'year':year
            },
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
                $("#profitDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
    $("#cashflowDown").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/reportDownload",
            data:{
                'seId':seId,
                'reportName':reportName,
                'reportType':reportType,
                'year':year
            },
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
                $("#cashflowDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function mOtherUnit(datas){
    $("#assetUnit").change(function(){
        var unit = $("#assetUnit option:selected").text();
        if(unit=="元"){
            assetTable(datas);
        }else if(unit=="万元"){
            assetHundred(datas);
        }else{
            assetMillion(datas);
        }
    });
    $("#profitUnit").change(function(){
        var unit = $("#profitUnit option:selected").text();
        if(unit=="元"){
            profitTable(datas);
        }else if(unit=="万元"){
            profitHundred(datas);
        }else{
            profitMillion(datas);
        }
    });
    $("#cashUnit").change(function(){
        var unit = $("#cashUnit option:selected").text();
        if(unit=="元"){
            cashflowTable(datas);
        }else if(unit=="万元"){
            cashHundred(datas);
        }else{
            cashMillion(datas);
        }
    })
    $("#projectProfitUnit").change(function(){
        var unit = $("#projectProfitUnit option:selected").text();
        if(unit=="元"){
            projectProfitTable(datas);
        }else if(unit=="万元"){
            projectProfitHundred(datas);
        }else{
            projectProfitMillion(datas);
        }
    })
}
function mOtherYearDate(seId,reportName,reportType,reportSource){
    var seId = seId;
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    $("#projectProfitTableTitle").html("");
    $("#projectProfitTable").html("");
    //资产负债表年份切换
    $("#assetDate").change(function(){
        var year = $("#assetDate option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        $("#assetType").val(0);
        mOtherType(seId,reportName,year,reportType,reportSource);
    });
    //利润表年份切换
    $("#profitDate").change(function(){
        var year = $("#profitDate option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        $("#profitType").val(0);
        mOtherType(seId,reportName,year,reportType,reportSource);
    });
    // //现金流量表年份切换
    $("#cashflowDate").change(function(){
        var year = $("#cashflowDate option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        $("#cashflowType").val(0);
        mOtherType(seId,reportName,year,reportType,reportSource);
    });
    //项目利润表年份切换
    $("#projectProfitDate").change(function(){
        var year = $("#cashflowDate option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
        $("#projectProfitType").val(0);
        mOtherType(seId,reportName,year,reportType,reportSource);
    });
}
function  mOtherType(seId,reportName,year,reportSource){
    var seId = seId;
    // mOther(seId,reportName,year);
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    $("#projectProfitTableTitle").html("");
    $("#projectProfitTable").html("");
    //资产负债表
    $("#assetType").change(function(){
        var reportType = $("#assetType option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
    });
    //利润表
    $("#profitType").change(function(){
        var reportType = $("#profitType option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
    });
    // //现金流量表
    $("#cashflowType").change(function(){
        var reportType = $("#cashflowType option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
    });
    //项目利润表
    $("#projectProfitType").change(function(){
        var reportType = $("#projectProfitType option:selected").text();
        mOther(seId,reportName,year,reportType,reportSource);
    });
}
//资产负债表数据
function assetTable(datas){
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(lists[m].value[n],2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#assetTableTitle");
    $("#assetTable").html(otherTableContent);

}
function assetHundred(datas){
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#assetTableTitle");
    $("#assetTable").html(otherTableContent);
}
function assetMillion(datas){
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#assetTableTitle");
    $("#assetTable").html(otherTableContent);
}
//利润表数据
function profitTable(datas){
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(lists[m].value[n],2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#profitTableTitle");
    $("#profitTable").html(otherTableContent);
}
function profitHundred(datas){
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#profitTableTitle");
    $("#profitTable").html(otherTableContent);
}
function profitMillion(datas){
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#profitTableTitle");
    $("#profitTable").html(otherTableContent);
}
//现金流量表数据
function cashflowTable(datas){
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(lists[m].value[n],2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#cashflowTableTitle");
    $("#cashflowTable").html(otherTableContent);
}
function cashHundred(datas){
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#cashflowTableTitle");
    $("#cashflowTable").html(otherTableContent);
}
function cashMillion(datas){
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#cashflowTableTitle");
    $("#cashflowTable").html(otherTableContent);
}
//项目利润表数据
function projectProfitTable(datas){
    $("#projectProfitTableTitle").html("");
    $("#projectProfitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(lists[m].value[n],2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#projectProfitTableTitle");
    $("#projectProfitTable").html(otherTableContent);
}
function projectProfitHundred(datas){
    $("#projectProfitTableTitle").html("");
    $("#projectProfitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#projectProfitTableTitle");
    $("#projectProfitTable").html(otherTableContent);
}
function projectProfitMillion(datas){
    $("#projectProfitTableTitle").html("");
    $("#projectProfitTable").html("");
    var years = datas.years;
    var lists = datas.list;
    var otherTableTitleBox = '';
    var otherTableContent = '';
    var reg=/%+/;
    otherTableTitleBox += '<th>名称</th>';
    for (var i =0;i<years.length;i++){
        otherTableTitleBox += '<th>'+years[i]+'</th>';
    }
    for (var m =0;m<lists.length;m++){
        otherTableContent += '<tr><td>'+lists[m].name+'</td>';
        for (var n=0;n<lists[m].value.length;n++){
            if(reg.test(lists[m].value[n])){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else if(lists[m].value[n]==""){
                otherTableContent += '<td>'+lists[m].value[n]+'</td>';
            }else{
                otherTableContent += '<td>'+fmoney(((lists[m].value[n])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        otherTableContent += '</tr>';
    }
    $(otherTableTitleBox).appendTo("#projectProfitTableTitle");
    $("#projectProfitTable").html(otherTableContent);
}

function leaders(seId){
    var seId = seId;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/seniorManager",
        async:true,
        data:{'seId':seId},
        success: function(data){
            var infos = data.val;
            //console.log(infos);
            Divinfo(infos);
        }
    });

}
var corpusContent = new Array();//全局变量用于存放所有的corpusContent
function Divinfo(infos){
    //console.log(infos);
    var html = '';
    var j = 0;
    var m = 0;
    for(var i = 0;i< infos.length;i++){
        corpusContent[j] = infos;
        // var positions = infos[i].position.replace(/\s/g, "");
        var positions = infos[i].positionLevel;
        if(positions < 50){
            html += '<div  class="info" onclick="modalContext(this)" name="'+m+'"><ul class="info-text"><p><span class="name">'+ infos[i].name + '</span><span class="birthdata">'+ infos[i].birthday +'</span></p>';
            html += '<p>职位：<span class="prome">'+ infos[i].position +'</span></p>';
            html += '<p>入职日期：<span class="workdata">'+ infos[i].dismissionDate +'</span></p>';
            html += '<p>简历简介：<span class="intro">' + infos[i].resume + '</span></p></ul>';
            html += '<button  class="more" data-toggle="modal" data-target="#myModal">了解详情</button></div>';
        }else {
            html += '<div  class="info" onclick="modalContext(this)" name="'+m+'"><ul class="info-text"><p><span>'+ infos[i].name + '</span><span class="birthdata">'+ infos[i].birthday +'</span></p>';
            html += '<p>职位：<span class="prome">'+ infos[i].position +'</span></p>';
            html += '<p>入职日期：<span class="workdata">'+ infos[i].dismissionDate +'</span></p>';
            html += '<p>简历简介：<span class="intro">' + infos[i].resume + '</span></p></ul>';
            html += '<button  class="more" data-toggle="modal" data-target="#myModal">了解详情</button></div>';
        }
        m++;
        j++;

    }
    $("#leader").html(html);
}
function modalContext(id){
    var modal_id = id.outerHTML.split('name="')[1].substr(0,1);
    console.log(modal_id);
    var list = corpusContent[modal_id][modal_id];
    console.log(list);
    document.getElementById("modal_context").innerHTML = '';
    var content = "";
    content += '<div class="mboxL left"><p><span class="mbname"  style="color: #90b9f0">'+ list.name + '</span><span class="mbbirth" style="color: #90b9f0">'+ list.birthday +'</span></p>';
    content += '<p class="mbtype">'+ list.position +'</p>';
    content += '<p>本届任期：<span class="mbdata">' + list.dismissionDate + '</span></p></div>';
    content += '<div class="mboxR right"><p class="mbintro">' + list.resume + '</p>';
    content += '<p>此简历更新于<span class="mbupdata">2017-04-07</span></p></div>';

    $("#modal_context").html(content);

}

function partner(seId){
    var seId = seId;
    newpartnerpie.showLoading();
    oldpartnerpie1.showLoading();
    oldpartnerpie2.showLoading();
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/shareholder",
        async:true,
        data:{'seId':seId},
        success: function(result){
            newpartnerpie.hideLoading();
            oldpartnerpie1.hideLoading();
            oldpartnerpie2.hideLoading();
            var newtabs = result.val[0];
            $(".newdate").text(newtabs.alterTime);
            var newtab = result.val[0].shareholderDetails
            //			console.log(newtab);
            newTableData(newtab);   //新股东
            newpie(newtab);    //新股东Echarts

            var oldtabs1 = result.val[1];
            $(".olddate1").text(oldtabs1.alterTime);
            var oldtab1 = result.val[1].shareholderDetails
            oldTableData1(oldtab1);   //旧股东
            oldpie1(oldtab1);    //旧股东Echarts

            var oldtabs2 = result.val[2];
            $(".olddate2").text(oldtabs2.alterTime);
            var oldtab2 = result.val[2].shareholderDetails
            oldTableData2(oldtab2);   //旧股东
            oldpie2(oldtab2);    //旧股东Echarts
        }
    });
    partnerDown(seId);
}
function partnerDown(seId){
    $("#partnerDown").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/shareholderDownload",
            data:{'seId':seId},
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
                $("#partnerDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function newTableData(newtab){
    var tr = $("#trtemplate");
    $.each(newtab,function(index, item){
        var items = tr.clone();
        var _index = index +1 ;
        items.children("td").each(function (innerindex) {
            switch (innerindex) {
                case 0:
                    $(this).html(_index);
                    break;
                case 1:
                    $(this).html(item.shareholders);
                    break;
                case 2:
                    $(this).html(item.contributionAmount);
                    break;;
                case 3:
                    $(this).html(item.ratio);
                    break;
                case 4:
                    $(this).html(item.sbTypeName);
                    break;
            }
        })
        items.insertBefore(tr);
    })
}
function oldTableData1(oldtab1){
    var tr = $("#trtemplate1");
    $.each(oldtab1,function(index, item){
        var items = tr.clone();
        var _index = index +1 ;
        items.children("td").each(function (innerindex) {
            switch (innerindex) {
                case 0:
                    $(this).html(_index);
                    break;
                case 1:
                    $(this).html(item.shareholders);
                    break;
                case 2:
                    $(this).html(item.contributionAmount);
                    break;;
                case 3:
                    $(this).html(item.ratio);
                    break;
                case 4:
                    $(this).html(item.sbTypeName);
                    break;
            }
        })
        items.insertBefore(tr);
    })
}
function oldTableData2(oldtab2){
    var tr = $("#trtemplate2");
    $.each(oldtab2,function(index, item){
        var items = tr.clone();
        var _index = index +1 ;
        items.children("td").each(function (innerindex) {
            switch (innerindex) {
                case 0:
                    $(this).html(_index);
                    break;
                case 1:
                    $(this).html(item.shareholders);
                    break;
                case 2:
                    $(this).html(item.contributionAmount);
                    break;;
                case 3:
                    $(this).html(item.ratio);
                    break;
                case 4:
                    $(this).html(item.sbTypeName);
                    break;
            }
        })
        items.insertBefore(tr);
    })
}

function register(seId){
    var seId = seId;
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/detials",
        async:true,
        dataType: 'json',
        data:{'seId':seId},
        success:function(data){
            //console.log(data);
            var infom = data.val;
            $(".seCreditCode").text(infom.seCreditCode);
            $(".legalRepresentative").text(infom.legalRepresentative);
            $(".regmoney").text(infom.seRegisteredCapital);
            $(".settime").text(infom.establishmentDate);
            $(".seType").text(infom.seType);
            $(".regzt").text(infom.registrationStatus);
            $(".scopeOfBusiness").text(infom.scopeOfBusiness);
            $(".mainBusiness").text(infom.mainBusiness);
            $(".staffNumber").text(infom.staffNumber);
            $(".seRegisteredAddress").text(infom.informationContact.officeAddress);
            $(".bankPhone").text(infom.informationContact.phone);
            $(".bankpostCode").text(infom.informationContact.postCode);
            $(".bankWeb").text(infom.informationContact.website);
            $(".bankEmail").text(infom.informationContact.email);
        }
    });
    registerDown(seId);
}
function registerDown(seId){
    $("#testDown2").click(function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/financialExport/signleEnterpriseDownload",
            data:{'seId':seId},
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
                $("#partnerDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}

function titleInfo(seId){
    var seId = seId;
    $.ajax({
        type: "get",
        url: "http://"+host+"/financial/getTitileDetial",
        async: true,
        dataType: 'json',
        data: {'seId': seId},
        success: function (data) {
            var infos = data.val;
            $(".bankName").text(infos.name);
            $(".tip").text(infos.registratrion);
            $(".bankNum").text(infos.ipo_code);
            var add = '<a href="'+infos.website+'" target="_Blank">'+infos.website+'</a>';
            $(add).appendTo(".faddr");

        }
    })
}

//数字每三个加上逗号
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}
function requst(seId){
    titleInfo(seId);  //标题信息
    register(seId);  //注册信息
    partner(seId);   //股东信息
    leaders(seId);   //高管信息
    money(seId);         //财务报表
    supervision(seId); //监管指标
    manage(seId);    //经营情况
    business(seId);   //业务结构
    finance(seId);    //融资情况
    report(seId);    //报告下载
}



$(function(){
    //获取地址栏参数
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    var seId = $.getUrlParam('seId');
    // console.log(seId);
    requst(seId);


})
