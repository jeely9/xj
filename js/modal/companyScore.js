
function result(industryId,chooseVal){
    var storage=window.localStorage;
    storage.setItem("industryId",industryId);
    storage.setItem("orgId",chooseVal);
    $("#allSure").click(function(){
        var industryId = storage.getItem("industryId");
        var orgId = storage.getItem("orgId");
        var year = $("#mydatepicker").val();
        // console.log(year);
        if(orgId == 'undefined'){
            modalList(industryId,year);
        }else{
            modalList(industryId,year,orgId);
            turnAsc(industryId,year,orgId);
        }
        gradeIntro(industryId,orgId);
    })
}
function gradeIntro(industryId,orgId) {
    $("#intro").html("");
    if(industryId == null){
        industryId = "1";
    }
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getItemDesc",
        data:{
            "industryId": industryId,
            "orgId":orgId
        },
        async:true,
        success: function(data) {
            var datas = data.val;
            var content = '';
            for (var i =0; i<datas.length;i++){
                var address = datas[i].indexValue;
                if (typeof(address) == "undefined"){
                    content += '<tr><td>'+datas[i].name+'</td><td>'+datas[i].itemDesc+'</td><td></td></tr>';
                }else{
                    content += '<tr><td>'+datas[i].name+'</td><td>'+datas[i].itemDesc+'</td><td>'+datas[i].indexValue+'</td></tr>';
                }
            }
            $("#intro").html(content);
        }
    })
}
function modalSeach(industryId) {
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#senameSeach").trigger("click");
        }
    });
    if(industryId ==null){
        industryId = "1";
    }
    $("#senameSeach").click(function () {
        var orgName = $("#seName").val();
        $.ajax({
            type:"get",
            url:"http://"+host+"/financial/getOrgList",
            data: {
                    'orgName': orgName
                    },
            async:true,
            success: function(data) {
                var datas = data.val;
                var content = '';
                for (var i =0; i<datas.length;i++){
                    content += '<tr><td class="test"><input type="radio" name="choose" value='+datas[i].orgId+'></td>';
                    var address = datas[i].address;
                    if (typeof(address) == "undefined") {
                        content += '<td>'+datas[i].orgId+'</td><td class="orgName">'+datas[i].orgName+'</td><td></td></tr>';
                    }else{
                        content += '<td>'+datas[i].orgId+'</td><td class="orgName">'+datas[i].orgName+'</td><td>'+datas[i].address+'</td></tr>';
                    }
                }
                $("#orgList").html(content);
                $(".test").click(function(){
                    var chooseVal = $(".test input[name='choose']:checked").val();
                    var chooseName = $(this).parent().children(".orgName").html();
                    $("#seName").html(chooseName);
                    $("#comTitle").html(chooseName);
                    result(industryId,chooseVal);
                    modalData("",chooseVal);
                })
            }
        });
    });
}
function modalList(industryId,year,orgId){
    if(year ==null){
        year = "2016";
    }
    if(industryId==null){
        industryId = "1";
    }
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getOrgEvaluate",
        data:{
            "industryId":industryId,
            "orgId":orgId,
            "year":year
        },
        async:true,
        success: function(data) {
            var datas = data.val;
            if(data.res==false){
                $('.isNoData').show(); //显示暂无数据的行
                var tip = datas;
                $('.isNoData').html(tip);  //显示暂无数据的行
                $("#tableContent").html("");
                // $("#seName").val("");
                // $("#comTitle").html("");
            }else if(datas.length > 0){
                $('.isNoData').hide(); //隐藏暂无数据的行
                list(datas);           //处理数据并展示
            }else{
                $('.isNoData').show(); //显示暂无数据的行
                list(datas);           //处理数据并展示
            }
        },
        error: function(error){
            console.log(error);
        }
    });
}
function list(datas){
    $("#tableContent").html("");
    var box = '';
    for (var i=0;i<datas.length;i++){
        box += '<tr><td>'+datas[i].upperItemName+'</td>';
        box += '<td>';
        for (var  m=0; m<datas[i].itemNameList.length;m++){
            box += '<p>'+datas[i].itemNameList[m]+'</p>';
        }
        box += '</td>';
        box += '<td>';
        for (var n=0;n<datas[i].weightList.length;n++){
            box += '<p>'+datas[i].weightList[n]+'</p>';
        }
        box += '</td>';
        box += '<td>'+datas[i].fullScore+'</td>';
        box += '<td>'+datas[i].totalScore+'</td>';
        box += '<td class="rank">'+datas[i].ranking+'</td></tr>';
    }
    $("#tableContent").html(box);
}
function turnAsc(industryId,year,orgId){
    $(document).on('click',".rank",function(){
        $.ajax({
            type:"get",
            url:"http://"+host+"/financial/goScoreSort",
            data:{
                "industryId":industryId,
                "orgId":orgId,
                "year":year
            },
            async:true,
            success: function(data) {
                //给下一页传参
                window.location.href="finaGradAsc.html?datas="+data;
            }
        })
    })
}
function modalData(year,chooseVal){
    $("#compny").html("");
    if(year == null){
        year = "2016";
    }
    $.ajax({
        type:"get",
        url:"http://"+host+"/financial/getEvaluates",
        async:true,
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            for ( var i = 0; i < datas.length; i++) {
                $("#compny").append( '<option value=' + datas[i].typeId + '>'+ datas[i].typeName + '</option>');
            }
        }
    });
    $("#compny").change(function(){
        var modalOptions = $("#compny option:selected");
        var industryId = modalOptions.val();
        $("#seName").focus();
        modalList(industryId,year);                //模型列表内容
        gradeIntro(industryId);               //评级指示说明
        $("#seName").focus().html("");
        result(industryId,chooseVal);                   //最后打分结果
        modalSeach(industryId);               //模型模糊搜索
    });
}
function now(){
    var today=new Date();
    var h=today.getFullYear();
    return h;
}
$(function(){
    //获取地址栏参数
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        if(r != null) return decodeURI(r[2]); //decodeURI参数内容对中文解码。
        return null;
    };
    var orgId = $.getUrlParam('seId');
    var nowName = $.getUrlParam('nowName');
    var industryId = $.getUrlParam('industryId');
    var year = $.getUrlParam('year');
    $("#comTitle").html(nowName);
    turnAsc(industryId,year,orgId);
    modalData(year);         //模型内容下拉列表
    modalList(industryId,year,orgId);        //模型列表内容默认模型id为1,默认年份为2016
    modalSeach(industryId);    //模糊搜索列表
    gradeIntro(industryId,orgId);     //评级指示说明默认模型id为1
    result(1);          //最后打分结果
    now();       //当前日期
    var today = $("#mydatepicker").val = now();//获取文本id并且传入当前日期
    // document.getElementById("mydatepicker").value(today);
});
