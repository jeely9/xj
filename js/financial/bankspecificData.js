var width = (document.body.clientWidth)*98/100*33/100+'px';
var width1 = (document.body.clientWidth)*98/100*23/100+'px';
var width2 = (document.body.clientWidth)*98/100*46/100+'px';
var width3 = (document.body.clientWidth)*98/100*27/100+'px';
var width4 = (document.body.clientWidth)*98/100*50/100*46/100+'px';
var height = 400+'px';
var height1 = 200+'px';
var height2 = 320+'px';
var height3 = 250+'px';
var resizeCss = function() {
    $("#newpartnerpie").css("width", width).css("height", height);
    $("#oldpartnerpie1").css("width", width).css("height", height);
    $("#oldpartnerpie2").css("width", width).css("height", height);
    $("#managerpie").css("width", width4).css("height", height1);
    $("#bussTradepieL").css("width", width1).css("height", height2);
    $("#bussTradepieR").css("width", width1).css("height", height2);
    $("#bussAreapieL").css("width", width1).css("height", height2);
    $("#bussAreapieR").css("width", width1).css("height", height2);
    $("#bussAssurepie").css("width", width2).css("height", height1);

};
resizeCss();
var newpartnerpie = echarts.init(document.getElementById('newpartnerpie'));
var oldpartnerpie1 = echarts.init(document.getElementById('oldpartnerpie1'));
var oldpartnerpie2 = echarts.init(document.getElementById('oldpartnerpie2'));
var managerpie = echarts.init(document.getElementById('managerpie'));
//业务结构
var bussTradepie1L = echarts.init(document.getElementById('bussTradepieL'));
var bussTradepie1R = echarts.init(document.getElementById('bussTradepieR'));
var bussAreapieL = echarts.init(document.getElementById('bussAreapieL'));
var bussAreapieR = echarts.init(document.getElementById('bussAreapieR'));
var bussAssurepie = echarts.init(document.getElementById('bussAssurepie'));
var option = option1 = option1 = option3 = option4 = option5 = option6 = option7 = option8 =null;
option = option1 = option2 = option3 =option4 = option5 = option6 = option7 =option8 ={
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
bussTradepie1L.setOption(option4,true);
bussTradepie1R.setOption(option5,true);
bussAreapieL.setOption(option6,true);
bussAreapieR.setOption(option7,true);
bussAssurepie.setOption(option8,true);
//Echars自适应浏览器大小
window.onresize = function(){
    //重置容器高宽
    resizeCss();
    newpartnerpie.resize();
    oldpartnerpie1.resize();
    oldpartnerpie2.resize();
    managerpie.resize();
    bussTradepie1L.resize();
    bussTradepie1R.resize();
    bussAreapieL.resize();
    bussAreapieR.resize();
    bussAssurepie.resize();
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
function businessEpie1(bussEpie1data){
    bussTradepie1L.setOption({
        title : {
            text: '贷款余额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        series: [{
            name: '贷款余额占比',
            data: bussEpie1data
        }]
    })
}
function businessEpie2(bussEpie2data){
    bussTradepie1R.setOption({
        title : {
            text: '不良贷款余额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        //center: ['40%', '50%'],
        series: [{
            name: '不良贷款余额占比',
            data: bussEpie2data
        }]
    })
}
function businessEpie3(bussEpie3data){
    bussAreapieL.setOption({
        title : {
            text: '贷款余额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        series: [{
            name: '贷款余额占比',
            data: bussEpie3data
        }]
    })
}
function businessEpie4(bussEpie4data){
    bussAreapieR.setOption({
        title : {
            text: '不良贷款余额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        series: [{
            name: '不良贷款余额占比',
            data: bussEpie4data
        }]
    })
}
function businessEpie5(bussEpie5data){
    bussAssurepie.setOption({
        title : {
            //text: '贷款余额占比',
            //subtext: '纯属虚构',
            x:'center'
        },
        series: [{
            name: '余额占比',
            data: bussEpie5data
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
function businessEchars(list3,list4,list5){
    var bussEpie1name = [];
    var bussEpie2name = [];
    var bussEpie3name = [];
    var bussEpie4name = [];
    var bussEpie5name = [];
    var bussEpie1value = [];
    var bussEpie2value = [];
    var bussEpie3value = [];
    var bussEpie4value = [];
    var bussEpie5value = [];
    var bussEpie1data = [];
    var bussEpie2data = [];
    var bussEpie3data = [];
    var bussEpie4data = [];
    var bussEpie5data = [];
    // var list3.length=10;
    for (var i =0;i<10;i++){
        bussEpie1name.push(list3[i].name);
        bussEpie1value.push(list3[i].value[1]);
        bussEpie1data.push({name:list3[i].name,value:list3[i].value[1]});
        bussEpie2data.push({name:list3[i].name,value:list3[i].value[2]});
    }
    // console.log(bussEpie1data);
    businessEpie1(bussEpie1data);
    businessEpie2(bussEpie2data);
    // console.log(list4);
    for (var m =0;m< list4.length;m++){
        bussEpie3name.push(list4[m].name);
        bussEpie3value.push(list4[m].value[1]);
        bussEpie3data.push({name:list4[m].name,value:list4[m].value[1]});
        bussEpie4data.push({name:list4[m].name,value:list4[m].value[2]});
    }

    businessEpie3(bussEpie3data);
    businessEpie4(bussEpie4data);

    for (var m =0;m< list5.length;m++){
        bussEpie5name.push(list5[m].name);
        bussEpie5value.push(list5[m].value[1]);
        bussEpie5data.push({name:list5[m].name,value:list5[m].value[1]});
    }

    businessEpie5(bussEpie5data);

}
//----------------------------------------------------

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
function partner(seId){
    var seId = seId;
    // console.log(seId);
	newpartnerpie.showLoading();
	oldpartnerpie1.showLoading();
	oldpartnerpie2.showLoading();
	$.ajax({
		type:"get",
		url:"http://"+host+"/financial/shareholder",
		async:true,
        data:{'seId':seId},
		success: function(result){
		    // console.log(result);
			newpartnerpie.hideLoading();
			oldpartnerpie1.hideLoading();
			oldpartnerpie2.hideLoading();
			var newtabs = result.val[0];
			$(".newdate").text(newtabs.alterTime);
			var newtab = result.val[0].shareholderDetails;
            // console.log(newtab);
			newTableData(newtab);   //新股东
			newpie(newtab);    //新股东Echarts

			var oldtabs1 = result.val[1];
			$(".olddate1").text(oldtabs1.alterTime);
			var oldtab1 = result.val[1].shareholderDetails;
			oldTableData1(oldtab1);   //旧股东
			oldpie1(oldtab1);    //旧股东Echarts

			var oldtabs2 = result.val[2];
			$(".olddate2").text(oldtabs2.alterTime);
			var oldtab2 = result.val[2].shareholderDetails;
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
            $(add).appendTo(".addr");
        }
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
			var infom = data.val;
            // console.log(infom);
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
	//console.log(modal_id);
	var list = corpusContent[modal_id][modal_id];
	//console.log(list);
	document.getElementById("modal_context").innerHTML = '';
	var content = "";
	content += '<div class="mboxL left"><p><span class="mbname"  style="color: #90b9f0">'+ list.name + '</span><span class="mbbirth" style="color: #90b9f0">'+ list.birthday +'</span></p>';
    content += '<p class="mbtype">'+ list.position +'</p>';
    content += '<p>本届任期：<span class="mbdata">' + list.dismissionDate + '</span></p></div>';
    content += '<div class="mboxR right"><p class="mbintro">' + list.resume + '</p>';
    content += '<p>此简历更新于<span class="mbupdata">2017-04-07</span></p></div>';

	$("#modal_context").html(content);

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
            moneyReport(datas,seId);     //财务摘要
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
        flag = true;
        moneyDown(seId,year,flag);
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
            });
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
        $("#profitTableTitle").html("");
        $("#profitTable").html("");
        $("#cashflowTableTitle").html("");
        $("#cashflowTable").html("");
        mOther(seId,reportName,year,reportType,reportSource);
        mOtherSource(seId,reportName,year,reportType);              //报告来源
        mOtherYearDate(seId,reportName,reportType,reportSource);   //三期五期
        mOtherType(seId,reportName,year,reportSource);            //年报季报
    })
}
//年份获取和选择
function mOtherSource(seId,reportName,year,reportType){
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
}
function mOther(seId,reportName,year,reportType,reportSource){
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
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
            assetTable(datas);                     //资产负债表
            profitTable(datas);                      //利润表
            cashflowTable(datas);                    //现金流量表
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
}
function mOtherYearDate(seId,reportName,reportType,reportSource){
    var seId = seId;
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
}
function  mOtherType(seId,reportName,year,reportSource){
    var seId = seId;
    $("#assetTableTitle").html("");
    $("#assetTable").html("");
    $("#profitTableTitle").html("");
    $("#profitTable").html("");
    $("#cashflowTableTitle").html("");
    $("#cashflowTable").html("");
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
            var list5 = datas[4];
            var list6 = datas[5];
            //console.log(times);
            // console.log(datas);
            $("#supvName1").html(list1.title);
            $("#supvName2").html(list2.title);
            $("#supvName3").html(list3.title);
            $("#supvName4").html(list4.title);
            $("#supvName5").html(list5.title);
            $("#supvName6").html(list6.title);
            var titleContent = "<th>日期</th>";
            for (var t = 0; t<times.length;t++){
                titleContent += '<th>'+times[t]+'</th>';
            }
            $(".superTitle").html(titleContent);
            lists(list1,list2,list3,list4,list5,list6);
            supUnit(list1,list2,list3,list4,list5,list6);
        }
    })

}
function supUnit(list1,list2,list3,list4,list5,list6){
    $("#supervisionUnit").change(function(){
        var unit = $("#supervisionUnit option:selected").text();
        if(unit=="元"){
            lists(list1,list2,list3,list4,list5,list6);
        }else if(unit=="万元"){
            listsHundred(list1,list2,list3,list4,list5,list6);
        }else{
            listsMillion(list1,list2,list3,list4,list5,list6);
        }
    })
}
function lists(list1,list2,list3,list4,list5,list6){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var listcontent4="";
    var listcontent5="";
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    var list5s = list5.list;
    var list6s = list6.list;
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
    for (var i = 0;i < list5s.length;i++){
        listcontent4 += '<tr><td>'+list5s[i].name+'</td>';
        for (var m = 0;m < list5s[i].val.length;m++){
            if(reg.test(list5s[i].val[m])){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else if(list5s[i].val[m]==""){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else{
                listcontent4 += '<td>'+fmoney(list5s[i].val[m],2)+'</td>';
            }
        }
        listcontent4 += '</tr>';
    }
    $("#supervList4").html(listcontent4);
    for (var i = 0;i < list6s.length;i++){
        listcontent5 += '<tr><td>'+list6s[i].name+'</td>';
        for (var m = 0;m < list6s[i].val.length;m++){
            if(reg.test(list6s[i].val[m])){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else if(list6s[i].val[m]==""){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else{
                listcontent5 += '<td>'+fmoney(list6s[i].val[m],2)+'</td>';
            }
        }
        listcontent5 += '</tr>';
    }
    $("#supervList5").html(listcontent5);

}
function listsHundred(list1,list2,list3,list4,list5,list6){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var listcontent4="";
    var listcontent5="";
    var reg=/%+/;
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    var list5s = list5.list;
    var list6s = list6.list;
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
    for (var i = 0;i < list5s.length;i++){
        listcontent4 += '<tr><td>'+list5s[i].name+'</td>';
        for (var m = 0;m < list5s[i].val.length;m++){
            if(reg.test(list5s[i].val[m])){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else if(list5s[i].val[m]==""){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else{
                listcontent4 += '<td>'+fmoney(((list5s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent4 += '</tr>';
    }
    $("#supervList4").html(listcontent4);
    for (var i = 0;i < list6s.length;i++){
        listcontent5 += '<tr><td>'+list6s[i].name+'</td>';
        for (var m = 0;m < list6s[i].val.length;m++){
            if(reg.test(list6s[i].val[m])){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else if(list6s[i].val[m]==""){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else{
                listcontent5 += '<td>'+fmoney(((list6s[i].val[m])*10000/100000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent5 += '</tr>';
    }
    $("#supervList5").html(listcontent5);
}
function listsMillion(list1,list2,list3,list4,list5,list6){
    var listcontent="";
    var listcontent1="";
    var listcontent2="";
    var listcontent3="";
    var listcontent4="";
    var listcontent5="";
    var reg=/%+/;
    var list1s = list1.list;
    var list2s = list2.list;
    var list3s = list3.list;
    var list4s = list4.list;
    var list5s = list5.list;
    var list6s = list6.list;
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
            }else if(list4s[i].val[m]==""){
                listcontent3 += '<td>'+list4s[i].val[m]+'</td>';
            }else{
                listcontent3 += '<td>'+fmoney(((list4s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent3 += '</tr>';
    }
    $("#supervList3").html(listcontent3);
    for (var i = 0;i < list5s.length;i++){
        listcontent4 += '<tr><td>'+list5s[i].name+'</td>';
        for (var m = 0;m < list5s[i].val.length;m++){
            if(reg.test(list5s[i].val[m])){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else if(list5s[i].val[m]==""){
                listcontent4 += '<td>'+list5s[i].val[m]+'</td>';
            }else{
                listcontent4 += '<td>'+fmoney(((list5s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent4 += '</tr>';
    }
    $("#supervList4").html(listcontent4);
    for (var i = 0;i < list6s.length;i++){
        listcontent5 += '<tr><td>'+list6s[i].name+'</td>';
        for (var m = 0;m < list6s[i].val.length;m++){
            if(reg.test(list6s[i].val[m])){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else if(list6s[i].val[m]==""){
                listcontent5 += '<td>'+list6s[i].val[m]+'</td>';
            }else{
                listcontent5 += '<td>'+fmoney(((list6s[i].val[m])*10000/1000000000000).toFixed(2),2)+'</td>';
            }
        }
        listcontent5 += '</tr>';
    }
    $("#supervList5").html(listcontent5);
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
    $("#mangerDown").one("click",function(){
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

function business(seId) {
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
    bussTradepie1L.showLoading();
    bussTradepie1R.showLoading();
    bussAreapieL.showLoading();
    bussAreapieR.showLoading();
    bussAssurepie.showLoading();
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getBusinessStructure",
        async:true,
        data:{'seId':seId,'year':year},
        success: function(data){
            var datas = data.val.val;
            // console.log(datas);
            bussTradepie1L.hideLoading();
            bussTradepie1R.hideLoading();
            bussAreapieL.hideLoading();
            bussAreapieR.hideLoading();
            bussAssurepie.hideLoading();
            $("#title1").html(datas[0].title);
            $("#title2").html(datas[1].title);
            $("#title3").html(datas[2].title);
            $("#title4").html(datas[3].title);
            $("#title5").html(datas[4].title);
            businessTable(datas);
        }
    });
}
function businessTable(datas){
    // console.log(datas);
    var list1 = datas[0].list;
    var list2 = datas[1].list;
    var list3 = datas[2].list;
    var list4 = datas[3].list;
    var list5 = datas[4].list;
    var tableconcent1 = '';
    var tableconcent2 = '';
    var tableconcent3 = '';
    var tableconcent4 = '';
    var tableconcent5 = '';
    businessEchars(list3,list4,list5);
    for (var i =0;i<list1.length;i++){
        tableconcent1 += ' <tr><td>'+list1[i].name+'</td>';
        for (var j=0;j<list1[i].value.length;j++){
            tableconcent1 += '<td>'+list1[i].value[j]+'</td>';
        }
        tableconcent1 += '</tr>';
    }
    $("#businessTable1").html(tableconcent1);
    for (var i =0;i<list2.length;i++){
        tableconcent2 += ' <tr><td>'+list2[i].name+'</td>';
        for (var j=0;j<list2[i].value.length;j++){
            tableconcent2 += '<td>'+list2[i].value[j]+'</td>';
        }
        tableconcent2 += '</tr>';
    }
    $("#businessTable2").html(tableconcent2);
    for (var i =0;i<list3.length;i++){
        tableconcent3 += ' <tr><td>'+list3[i].name+'</td>';
        for (var j=0;j<list3[i].value.length;j++){
            if(list3[i].value.length<4){
                tableconcent3 += '<td>'+list3[i].value[j]+'</td>';
                for(var k=0;k<(4-list3[i].value.length);k++){
                    tableconcent3 += '<td></td>';
                }
            }else{
                tableconcent3 += '<td>'+list3[i].value[j]+'</td>';
            }
        }
        tableconcent3 += '</tr>';
    }
    $("#businessTable3").html(tableconcent3);

    for (var i =0;i<list4.length;i++){
        tableconcent4 += ' <tr><td>'+list4[i].name+'</td>';
        for (var j=0;j<list4[i].value.length;j++){
            if(list4[i].value.length<4){
                tableconcent4 += '<td>'+list4[i].value[j]+'</td>';
                for(var k=0;k<(4-list4[i].value.length);k++){
                    tableconcent4 += '<td></td>';
                }
            }else{
                tableconcent4 += '<td>'+list4[i].value[j]+'</td>';
            }
        }
        tableconcent4 += '</tr>';
    }
    $("#businessTable4").html(tableconcent4);
    for (var i =0;i<list5.length;i++){
        tableconcent5 += ' <tr><td>'+list5[i].name+'</td>';
        for (var j=0;j<list5[i].value.length;j++){
            tableconcent5 += '<td>'+list5[i].value[j]+'</td>';
        }
        tableconcent5 += '</tr>';
    }
    $("#businessTable5").html(tableconcent5);
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
    titleInfo(seId);     //标题信息
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
    };
    var seId = $.getUrlParam('seId');
    //console.log(seId);
	requst(seId);


});
