function area(){
    //加载区域
    loadArea();
    $("#area").change(function() {
        var curArea = $(this).val();
        if (curArea !== "") {
            loadProvince(curArea);
        } else {
            $("#province").empty().append('<option value="">--选择省份--</option>');
            $("#citys").empty().append('<option value="">--选择城市--</option>');
            $("#county").empty().append('<option value="">--选择地区--</option>');
        }
    });
    // 加载省
    loadProvince ();
    $("#province").change(function() {
        var curProvince = $(this).val();
        if (curProvince !== "") {
            loadCity(curProvince);
        } else {
            $("#citys").empty().append('<option value="">--选择城市--</option>');
            $("#county").empty().append('<option value="">--选择地区--</option>');
        }
    });
    // 加载地区
    $("#citys").change(function() {
        var curCity = $(this).val(); //
        if (curCity !== "") {
            loadCounty(curCity);
        }else{
            $("#county").empty().append('<option value="">--选择地区--</option>');
        }
    });
}//-----------------------------------------------------------
//加载区域
function loadArea(){
    var data = ["东北地区","东部地区","中部地区","西部地区"];
    for(var i=0;i<data.length;i++){
        $("#area").append( '<option value=' + data[i] + '>'+ data[i]+ '</option>');
    }
}
// 加载省份
function loadProvince(curArea){
    $("#province").empty().append('<option value="">--选择省份--</option>');
    $("#citys").empty().append('<option value="">--选择城市--</option>');
    $("#county").empty().append('<option value="">--选择地区--</option>');
    var region = curArea;
    $.ajax({
        type:"get",
        url: "http://"+host+"/financial/getProvinceList",
        data:{'region':region},
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
    $("#citys").empty().append('<option value="">--选择城市--</option>');
    $("#county").empty().append('<option value="">--选择地区--</option>');
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
    $("#county").empty().append('<option value="">--选择地区--</option>');
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



















function tree(){
    var setting = {
        view: {
            showLine: true,
            showIcon: true,
            selectedMulti: false,
            dblClickExpand: false
        },
        check: {
            enable: true,
            autoCheckTrigger:true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            beforeCheck: beforeCheck,
            onCheck: onCheck
        }
    };
    $.ajax({
        url:'../../js/area/menu.json',
        type:'get',
        data:'',
        dataType:'json',
        success:function (data) {
            $.fn.zTree.init($("#areaTree"), setting, data);
        }
    });
    var code, log, className = "dark";
    function beforeCheck(treeId, treeNode) {
        className = (className === "dark" ? "":"dark");
        // console.log("[beforeCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
        return (treeNode.doCheck !== false);
    }
    function onCheck(event, treeId, treeNode) {
//                    if(treeNode.page != undefined) {
//                        var isExists = $("#et").tabs("exists", treeNode.name);
//                        if(isExists) {
//                            $("#et").tabs("select", treeNode.name);
//                        } else {
//                            $("#et").tabs("add", {
//                                title:treeNode.name,
//                                closable:true,
//                                iconCls:"icon-edit",
//                                content:"<iframe frameborder='no' height='100%' width='100%' src='"+ treeNode.page +"'></iframe>"
//                            });
//                        }
//                    }
        if(treeNode.checked==true){
            var areaNames = "";
            areaNames += treeNode.name;
            console.log(areaNames);
        }else{
            return false;
        }
//         console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);

    }
}

function searchResult(){
    $("#superSearch").click(function(){
        $(".navOne").css("display","none");
        $(".navTwo").css("display","none");
        $(".searchResult").css("display","block");
    })
    $("#backList").click(function(){
        $(".searchResult").css("display","none");
        $(".navOne").css("display","block");
        $(".navTwo").css("display","block");
    })
}
function areaCity(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getMajorReg?date=2018年第一季度&pageNo=1&pageSize=4",
        async: true,
        success: function (data) {
            var datas = data.data.list;
            // console.log(datas);
        },
        error:function (e) {
            console.log(e);
        }
    });
}

$(function(){
    $("#season").val("2018年第1季度");
    area();                    //省市区三级联动
    tree();                   //高级搜索中地区选择树形菜单
    searchResult();          //高级搜索结果
    areaCity();             //区域市
});