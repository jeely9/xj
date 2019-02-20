var width = (document.body.clientWidth)*98/100*49/100+'px';
var oneWidth = (document.body.clientWidth)*98/100*39/100+'px';
var height = 360+'px';
var width2 = (document.body.clientWidth)*98/100*35/100+'px';
var width3 = (document.body.clientWidth)*98/100*37/100+'px';
var height2 = 400+'px';
var height1 = 280+'px';
var widthM = (document.body.clientWidth)*98/100*56/100+'px';
var heightM = 500+'px';
var resizeCss = function(){
    $("#mixL").css("width", width).css("height", height);
    $("#mixR").css("width", width).css("height", height);
    $("#mixL2").css("width", width).css("height", height);
    $("#nameOne").css("width", oneWidth).css("height", height);
    $("#nameTwo").css("width", oneWidth).css("height", height2);
    $("#twoAllNameOne").css("width", oneWidth).css("height", height2);
    $("#twoAllNameTwo").css("width", oneWidth).css("height", height);
    $("#nameOneFive").css("width", oneWidth).css("height", height);
    $("#nameTwoFive").css("width", oneWidth).css("height", height2);
    $("#twoAllNameOneFive").css("width", oneWidth).css("height", height2);
    $("#twoAllNameTwoFive").css("width", oneWidth).css("height", height);
    $("#nameOneTen").css("width", oneWidth).css("height", height);
    $("#nameTwoTen").css("width", oneWidth).css("height", height2);
    $("#twoAllNameOneTen").css("width", oneWidth).css("height", height2);
    $("#twoAllNameTwoTen").css("width", oneWidth).css("height", height);
    $("#thirdLine").css("width", oneWidth).css("height", height);
    $("#FiveLine").css("width", oneWidth).css("height", height);
    $("#TenLine").css("width", oneWidth).css("height", height);
    $("#priceSixLine").css("width", oneWidth).css("height", height);
    $("#priceTwoLine").css("width", oneWidth).css("height", height);
    $("#priceTwentyLine").css("width", oneWidth).css("height", height);
    $("#repertorySixLine").css("width", oneWidth).css("height", height);
    $("#repertoryTwoLine").css("width", oneWidth).css("height", height);
    $("#repertoryTwentyLine").css("width", oneWidth).css("height", height);
    $("#transportSixLine").css("width", oneWidth).css("height", height);
    $("#transportTwoLine").css("width", oneWidth).css("height", height);
    $("#transportTwentyLine").css("width", oneWidth).css("height", height);
    $("#upDownCompareThirdLine").css("width", oneWidth).css("height", height);
    $("#upDownCompareFiveLine").css("width", oneWidth).css("height", height);
    $("#upDownCompareTenLine").css("width", oneWidth).css("height", height);
    $("#upThirdLine").css("width", oneWidth).css("height", height);
    $("#upFiveLine").css("width", oneWidth).css("height", height);
    $("#upTenLine").css("width", oneWidth).css("height", height);
    $("#downThirdLine").css("width", oneWidth).css("height", height);
    $("#downFiveLine").css("width", oneWidth).css("height", height);
    $("#downTenLine").css("width", oneWidth).css("height", height);
    $("#replaceThirdLine").css("width", oneWidth).css("height", height);
    $("#replaceFiveLine").css("width", oneWidth).css("height", height);
    $("#replaceTenLine").css("width", oneWidth).css("height", height);
    $("#fxtz").css("width", width3).css("height", height2);
    $("#jzdksh").css("width", width3).css("height", height2);
    $("#zqxksh").css("width", width2).css("height", height2);
    $("#pjblv").css("width", width2).css("height", height2);
    $("#xzcnThird").css("width", width2).css("height", height2);
    $("#xzcnThird2").css("width", width2).css("height", height2);
    $("#xzcn5").css("width", width2).css("height", height2);
    $("#xzcn52").css("width", width2).css("height", height2);
    $("#xzcn10").css("width", width2).css("height", height2);
    $("#xzcn102").css("width", width2).css("height", height2);
    $("#scrzThirdLine").css("width", width2).css("height", height2);
    $("#scrzFiveLine").css("width", width2).css("height", height2);
    $("#scrzTenLine").css("width", width2).css("height", height2);
    $("#zctz").css("width", width2).css("height", height1);
    $("#zclygc").css("width", width2).css("height", height1);
    $("#zctz5").css("width", width2).css("height", height1);
    $("#zclygc5").css("width", width2).css("height", height1);
    $("#zctz10").css("width", width2).css("height", height1);
    $("#zclygc10").css("width", width2).css("height", height1);
    $("#provinceFive").css("width", widthM).css("height", heightM);
    $("#billboardEchar").css("width", width).css("height", height2);
};
resizeCss();
//核心监测数据
var mixL = echarts.init(document.getElementById('mixL'));
var mixR = echarts.init(document.getElementById("mixR"));
var mixL2 = echarts.init(document.getElementById('mixL2'));
// var mixR2 = echarts.init(document.getElementById("mixR2"));
//运行信息中的总量值
var nameOne = echarts.init(document.getElementById('nameOne'));
var nameTwo = echarts.init(document.getElementById("nameTwo"));
var twoAllNameOne = echarts.init(document.getElementById('twoAllNameOne'));
// var twoAllNameTwo = echarts.init(document.getElementById("twoAllNameTwo"));
var nameOneFive = echarts.init(document.getElementById('nameOneFive'));
var nameTwoFive = echarts.init(document.getElementById("nameTwoFive"));
var twoAllNameOneFive = echarts.init(document.getElementById('twoAllNameOneFive'));
// var twoAllNameTwoFive = echarts.init(document.getElementById("twoAllNameTwoFive"));
var nameOneTen = echarts.init(document.getElementById('nameOneTen'));
var nameTwoTen = echarts.init(document.getElementById("nameTwoTen"));
var twoAllNameOneTen = echarts.init(document.getElementById('twoAllNameOneTen'));
// var twoAllNameTwoTen = echarts.init(document.getElementById("twoAllNameTwoTen"));

//运行信息中的增长率
var thirdLine = echarts.init(document.getElementById('thirdLine'));
var FiveLine = echarts.init(document.getElementById('FiveLine'));
var TenLine = echarts.init(document.getElementById('TenLine'));

//价格库存中的产品价格、价格库存、产品运输
var priceSixLine = echarts.init(document.getElementById('priceSixLine'));
var priceTwoLine = echarts.init(document.getElementById('priceTwoLine'));
var priceTwentyLine = echarts.init(document.getElementById('priceTwentyLine'));
var repertorySixLine = echarts.init(document.getElementById('repertorySixLine'));
var repertoryTwoLine = echarts.init(document.getElementById('repertoryTwoLine'));
var repertoryTwentyLine = echarts.init(document.getElementById('repertoryTwentyLine'));
var transportSixLine = echarts.init(document.getElementById('transportSixLine'));
var transportTwoLine = echarts.init(document.getElementById('transportTwoLine'));
var transportTwentyLine = echarts.init(document.getElementById('transportTwentyLine'));
//上下游影响
var upDownCompareThirdLine = echarts.init(document.getElementById('upDownCompareThirdLine'));
var upDownCompareFiveLine = echarts.init(document.getElementById('upDownCompareFiveLine'));
var upDownCompareTenLine = echarts.init(document.getElementById('upDownCompareTenLine'));
var upThirdLine = echarts.init(document.getElementById('upThirdLine'));
var upFiveLine = echarts.init(document.getElementById('upFiveLine'));
var upTenLine = echarts.init(document.getElementById('upTenLine'));
var downThirdLine = echarts.init(document.getElementById('downThirdLine'));
var downFiveLine = echarts.init(document.getElementById('downFiveLine'));
var downTenLine = echarts.init(document.getElementById('downTenLine'));
var replaceThirdLine = echarts.init(document.getElementById('replaceThirdLine'));
var replaceFiveLine = echarts.init(document.getElementById('replaceFiveLine'));
var replaceTenLine = echarts.init(document.getElementById('replaceTenLine'));
//风险特征
var fxtz = echarts.init(document.getElementById("fxtz"));
var jzdksh = echarts.init(document.getElementById("jzdksh"));
var zqxksh = echarts.init(document.getElementById("zqxksh"));
var pjblv = echarts.init(document.getElementById("pjblv"));
//行业投融资
var zctz = echarts.init(document.getElementById("zctz"));
var zclygc = echarts.init(document.getElementById("zclygc"));
var zctz5 = echarts.init(document.getElementById("zctz5"));
var zclygc5 = echarts.init(document.getElementById("zclygc5"));
var zctz10 = echarts.init(document.getElementById("zctz10"));
var zclygc10 = echarts.init(document.getElementById("zclygc10"));
var xzcnThird = echarts.init(document.getElementById("xzcnThird"));
var xzcnThird2 = echarts.init(document.getElementById("xzcnThird2"));
var xzcn5 = echarts.init(document.getElementById("xzcn5"));
var xzcn52 = echarts.init(document.getElementById("xzcn52"));
var xzcn10 = echarts.init(document.getElementById("xzcn10"));
var xzcn102 = echarts.init(document.getElementById("xzcn102"));
var scrzThirdLine = echarts.init(document.getElementById("scrzThirdLine"));
var scrzFiveLine = echarts.init(document.getElementById("scrzFiveLine"));
var scrzTenLine = echarts.init(document.getElementById("scrzTenLine"));
//百强各省市占比地图见map1.js
var billboardEchar= echarts.init(document.getElementById("billboardEchar"));

var optionmixL  = option1 = option2  = option4 = option5 = option6 = option7
    = option8 = option9 =option10 = option11= option12= option13= option14=
    optionpriceSixLine= optionpriceTwoLine=optionpriceTwentyLine=
        optionrepertorySixLine= optionrepertoryTwoLine=optionrepertoryTwentyLine=
            optiontransportSixLine=optiontransportTwoLine=optiontransportTwentyLine =
                optionupDownCompareThirdLine=optionupDownCompareFiveLine=optionupDownCompareTenLine=
                    optionupTenLine=optionupFiveLine=optionupThirdLine=optiondownThirdLine=
                        optiondownFiveLine=optiondownTenLine=optionreplaceThirdLine=
                            optionreplaceFiveLine=optionreplaceTenLine=optionfxtz  = optionjzdksh = optionzqxksh=
                                optionpjblv=optionxzcnThird=optionxzcn5=optionxzcn10=optionscrzThirdLine=optionscrzFiveLine=
                                    optionscrzTenLine=optionprovinceThird=optionprovinceFive=optionprovinceTen=
                                        optionzctz = optionzclygc= optionbillboardEchar=
                                            optionzctz5= optionzclygc5= optionzctz10=optionzclygc10=
                                                optionxzcn52=optionxzcnThird2=optionxzcn102=null;
var colors = ['#5793f3', '#d14a61', '#675bba'];
optionmixL = option1 = option2  = option3 = {
    color: colors,
    title : {
        show:false,
        text: '图表',
        //subtext: '纯属虚构',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
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
    xAxis: [
        {
            type: 'category',
            data: ['2016','2015','2014','2913','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            // max: 1000000,
            // interval: 2000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '',
            // min: 0,
            // max: 10,
            // interval: 1,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: []
};
option4 = option6 = option8 = option10 = optionnameOneTen= optiontwoAllNameOneTen={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
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
    xAxis: [
        {
            type: 'category',
            // data: ['2016','2015','2014','2913','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            // min: 0,
            // max: 100000,
            // interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '',
            // min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: []
};
option5  = option9 =optionnameTwoTen={
    color: ['#5793f3', '#d14a61'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
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
        },
        // data: []
        // data:['出口交货值','营业收入']
    },
    xAxis : [
        {
            type : 'category',
            data : ['2016', '2015', '2014', '2013', '2012'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        // {
        //     name:'出口交货值',
        //     type:'bar',
        //     barWidth: '30%',
        //     data:[10, 52, 200, 334, 390]
        // },
        // {
        //     name:'营业收入',
        //     type:'bar',
        //     barWidth: '30%',
        //     data:[20, 32, 100, 234, 330]
        // }
    ]
};
option12= option13= option14=optionpriceSixLine= optionpriceTwoLine=optionpriceTwentyLine
    =optionrepertorySixLine= optionrepertoryTwoLine=optionrepertoryTwentyLine
    =optiontransportSixLine=optiontransportTwoLine=optiontransportTwentyLine
    =optionupDownCompareThirdLine=optionupDownCompareFiveLine=optionupDownCompareTenLine
    =optionupThirdLine=optionupFiveLine=optionupTenLine=optiondownTenLine=optiondownFiveLine
    =optiondownThirdLine={
    title: {
        //text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
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
        },
        // data: []
        // data:['主要产品产量增长','联盟广告','视频广告','直接访问'],
        //bottom: "-10px"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {show: true,type:'png'}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016','2015','2014','2013','2012']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        // {
        //     name:'主要产品产量增长',
        //     type:'line',
        //     data:[120, 132, 101, 134, 90]
        // },
        // {
        //     name:'联盟广告',
        //     type:'line',
        //     data:[220, 182, 191, 234, 290]
        // },
        // {
        //     name:'视频广告',
        //     type:'line',
        //     data:[150, 232, 201, 154, 190]
        // },
        // {
        //     name:'直接访问',
        //     type:'line',
        //     data:[320, 332, 301, 334, 390]
        // }
    ]
};
optionfxtz=optionjzdksh = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            restore: {show: false},
            saveAsImage: {show: true}
        }
    },
    legend: {
        orient: 'horizontal',
        type:'scroll',
        // bottom: 10,
        formatter: function (name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        // data:['出口数值','进口数值','原材料进口占比(%)','产品出口占比(%)']
    },
    xAxis: [
        {
            type: 'category',
            // data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数值',
            // min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '占比',
            // min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: []
};
optionreplaceThirdLine=optionreplaceFiveLine
    =optionreplaceTenLine={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
        }
    },
    legend: {
        orient: 'horizontal',
        type:'scroll',
        // bottom: 10,
        formatter: function (name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        // data:['出口数值','进口数值','原材料进口占比(%)','产品出口占比(%)']
    },
    xAxis: [
        {
            type: 'category',
            // data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            // min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '',
            // min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: []
};
optionzqxksh={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
        }
    },
    legend: {
        orient: 'horizontal',
        type:'scroll',
        // width:350,
        bottom: 0,
        formatter: function (name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        // data: []
    },
    xAxis: [
        {
            type: 'category',
            // data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '系数',
            // min: 40,
            // max: 110,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{name:'与国内生产总值（GDP）相关系数',type:'line'}]
};
optionpjblv = optionxzcnThird=optionxzcn5=optionxzcn52=optionxzcn10=optionxzcnThird2=optionxzcn102=
    optionscrzThirdLine=optionscrzFiveLine=optionscrzTenLine={
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                restore: {show: false},
                saveAsImage: {show: true,type:'png'}
            }
        },
        legend: {
            orient: 'horizontal',
            type:'scroll',
            // width:350,
            bottom: 0,
            formatter: function (name) {
                return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
            },
            tooltip: {
                show: true
            },
            // data: []
        },
        xAxis: [
            {
                type: 'category',
                // data: ['2016','2015','2014','2013','2012'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '系数',
                // min: 40,
                // max: 110,
                // interval: 10,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: []
    };
optionzctz =optionzclygc=optionzctz5=optionzclygc5=optionzctz10= optionzclygc10 ={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: true,type:'png'}
        }
    },
    legend: {
        orient: 'horizontal',
        type:'scroll',
        // width:350,
        bottom: 0,
        formatter: function (name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        // data: []
        // data:['固定资产投资金额','私人固定资产投资金额','固定资产投资增速（%）']
    },
    xAxis: [
        {
            type: 'category',
            // data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            // max: 100,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '',
            // min: -15,
            // max: 20,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: []
};
optionbillboardEchar ={
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
            // name: '出资占比',
            type: 'pie',
            radius : '55%',
            // center: ['50%', '64%'],
            size: ['80%', '90%'],
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

mixL.setOption(optionmixL,true);
mixR.setOption(option1,true);
mixL2.setOption(option2,true);
nameOne.setOption(option4,true);
nameTwo.setOption(option5,true);
twoAllNameOne.setOption(option6,true);
nameOneFive.setOption(option8,true);
nameTwoFive.setOption(option9,true);
twoAllNameOneFive.setOption(option10,true);
nameOneTen.setOption(optionnameOneTen,true);
nameTwoTen.setOption(optionnameTwoTen,true);
twoAllNameOneTen.setOption(optiontwoAllNameOneTen,true);
thirdLine.setOption(option12,true);
FiveLine.setOption(option13,true);
TenLine.setOption(option14,true);
priceSixLine.setOption(optionpriceSixLine,true);
priceTwoLine.setOption(optionpriceTwoLine,true);
priceTwentyLine.setOption(optionpriceTwentyLine,true);
repertorySixLine.setOption(optionrepertorySixLine,true);
repertoryTwoLine.setOption(optionrepertoryTwoLine,true);
repertoryTwentyLine.setOption(optionrepertoryTwentyLine,true);
transportSixLine.setOption(optionrepertorySixLine,true);
transportTwoLine.setOption(optionrepertoryTwoLine,true);
transportTwentyLine.setOption(optionrepertoryTwentyLine,true);
upDownCompareThirdLine.setOption(optionupDownCompareThirdLine,true);
upDownCompareFiveLine.setOption(optionupDownCompareFiveLine,true);
upDownCompareTenLine.setOption(optionupDownCompareTenLine,true);
upThirdLine.setOption(optionupThirdLine,true);
upFiveLine.setOption(optionupFiveLine,true);
upTenLine.setOption(optionupTenLine,true);
downThirdLine.setOption(optiondownThirdLine,true);
downFiveLine.setOption(optiondownFiveLine,true);
downTenLine.setOption(optiondownTenLine,true);
replaceThirdLine.setOption(optionreplaceThirdLine,true);
replaceFiveLine.setOption(optionreplaceFiveLine,true);
replaceTenLine.setOption(optionreplaceTenLine,true);
fxtz.setOption(optionfxtz,true);
jzdksh.setOption(optionjzdksh,true);
zqxksh.setOption(optionzqxksh,true);
pjblv.setOption(optionpjblv,true);
xzcnThird.setOption(optionxzcnThird,true);
xzcnThird2.setOption(optionxzcnThird2,true);
xzcn5.setOption(optionxzcn5,true);
xzcn52.setOption(optionxzcn52,true);
xzcn10.setOption(optionxzcn10,true);
xzcn102.setOption(optionxzcn102,true);
scrzThirdLine.setOption(optionscrzThirdLine,true);
scrzFiveLine.setOption(optionscrzFiveLine,true);
scrzTenLine.setOption(optionscrzTenLine,true);
zctz.setOption(optionzctz,true);
zclygc.setOption(optionzclygc,true);
zctz5.setOption(optionzctz5,true);
zclygc5.setOption(optionzclygc5,true);
zctz10.setOption(optionzctz10,true);
zclygc10.setOption(optionzclygc10,true);
billboardEchar.setOption(optionbillboardEchar,true);
//Echars自适应浏览器大小
window.onresize = function(){
    //重置容器高宽
    resizeCss();
    mixL.resize();
    mixR.resize();
    mixL2.resize();
    nameOne.resize();
    nameTwo.resize();
    twoAllNameOne.resize();
    nameOneFive.resize();
    nameTwoFive.resize();
    twoAllNameOneFive.resize();
    nameOneTen.resize();
    nameTwoTen.resize();
    twoAllNameOneTen.resize();
    thirdLine.resize();
    FiveLine.resize();
    TenLine.resize();
    priceSixLine.resize();
    priceTwoLine.resize();
    priceTwentyLine.resize();
    repertorySixLine.resize();
    repertoryTwoLine.resize();
    repertoryTwentyLine.resize();
    transportSixLine.resize();
    transportTwoLine.resize();
    transportTwentyLine.resize();
    upDownCompareThirdLine.resize();
    upDownCompareFiveLine.resize();
    upDownCompareTenLine.resize();
    upThirdLine.resize();
    upFiveLine.resize();
    upTenLine.resize();
    downThirdLine.resize();
    downFiveLine.resize();
    downTenLine.resize();
    replaceThirdLine.resize();
    replaceFiveLine.resize();
    replaceTenLine.resize();
    fxtz.resize();
    jzdksh.resize();
    zqxksh.resize();
    pjblv.resize();
    xzcnThird.resize();
    xzcnThird2.resize();
    xzcn5.resize();
    xzcn52.resize();
    xzcn10.resize();
    xzcn102.resize();
    scrzThirdLine.resize();
    scrzFiveLine.resize();
    scrzTenLine.resize();
    zctz.resize();
    zclygc.resize();
    zctz5.resize();
    zclygc5.resize();
    zctz10.resize();
    zclygc10.resize();
    billboardEchar.resize();
};
//核心监测数据
function mointerOne(years1,names1,finals1,nameOne){
    mixL.setOption({
        title : {
            show:false,
            text: nameOne,
        },
        xAxis: {
            data: years1
        },
        legend: {
            data: names1
        },
        series: finals1
    })
}
function mointerTwo(years2,names2,finals2,nameTwo){
    mixL2.setOption({
        title : {
            show:false,
            text: nameTwo,
            //subtext: '纯属虚构',
            x:'left'
        },
        xAxis: {
            data: years2
        },
        legend: {
            data: names2
        },
        series: finals2
    })
}
function mointerThree(years3,names3,finals3,nameThree){
    mixR.setOption({
        title : {
            show:false,
            text: nameThree,
            //subtext: '纯属虚构',
            x:'left'
        },
        xAxis: {
            data: years3
        },
        legend: {
            bottom: 0,
            data: names3
        },
        series: finals3
    })
}

//运行信息
function name1Echars(years,name1,finals1,one){
    nameOne.setOption({
        title : {
            show:false,
            text: one
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name1
        },
        series: finals1
    })
}
function name2Echars(years,name2,finals2,Two){
    twoAllNameOne.setOption({
        title : {
            show:false,
            text: Two
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name2
        },
        series: finals2
    })
}
function name3Echars(years,name3,finals3,Three){
    nameTwo.setOption({
        title : {
            show:false,
            text: Three
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: name3
        },
        series: finals3
    })
}
function name1FiveEchars(years,name1,finals1,one){
    nameOneFive.setOption({
        title : {
            show:false,
            text: one
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name1
        },
        series: finals1
    })
}
function name2FiveEchars(years,name2,finals2,Two){
    twoAllNameOneFive.setOption({
        title : {
            show:false,
            text: Two
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name2
        },
        series: finals2
    })
}
function name3FiveEchars(years,name3,finals3,Three){
    nameTwoFive.setOption({
        title : {
            show:false,
            text: Three
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: name3
        },
        series: finals3
    })
}
function name1TenEchars(years,name1,finals1,one){
    nameOneTen.setOption({
        title : {
            show:false,
            text: one
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name1
        },
        series: finals1
    })
}
function name2TenEchars(years,name2,finals2,Two){
    twoAllNameOneTen.setOption({
        title : {
            show:false,
            text: Two
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: 0,
            data: name2
        },
        series: finals2
    })
}
function name3TenEchars(years,name3,finals3,Three){
    nameTwoTen.setOption({
        title : {
            show:false,
            text: Three
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: name3
        },
        series: finals3
    })
}
function thirdAddEchars(final,time,names,name){
    thirdLine.setOption({
        title : {
            show:false,
            text: name
        },
        xAxis: {
            data: time
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: final
    })
}
function fiveAddEchars(final,time,names,name){
    FiveLine.setOption({
        title : {
            show:false,
            text: name
        },
        xAxis: {
            data: time
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: final
    })
}
function tenAddEchars(final,time,names,name){
    TenLine.setOption({
        title : {
            show:false,
            text: name
        },
        xAxis: {
            data: time
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: final
    })
}

//价格库存
function monSixEchars(final,names,years,title){
    priceSixLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: names
        },
        series: final
    })
}
function monTwoEchars(final,names,years,title){
    priceTwoLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: names
        },
        series: final
    })
}
function monTwentyEchars(final,names,years,title){
    priceTwentyLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom: -6,
            data: names
        },
        series: final
    })
}
function repertorySixLineEchars(final,names,years,title){
    repertorySixLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}
function repertoryTwoLineEchars(final,names,years,title){
    repertoryTwoLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}
function repertoryTwentyLineEchars(final,names,years,title){
    repertoryTwentyLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}
function transportSixLineEchars(final,names,years,title){
    transportSixLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}
function transportTwoLineEchars(final,names,years,title){
    transportTwoLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}
function transportTwentyLineEchars(final,names,years,title){
    transportTwentyLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: final
    })
}

//上下游
function upDownThird(names,years,final,title){
    upDownCompareThirdLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}
function upDownFive(names,years,final,title){
    upDownCompareFiveLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}
function upDownTen(names,years,final,title){
    upDownCompareTenLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}
function upThird(years,finals,names,title){
    upThirdLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: finals
    })
}
function upFive(years,finals,names,title){
    upFiveLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: finals
    })
}
function upTen(years,finals,names,title){
    upTenLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: finals
    })
}
function downThird(years,finals,names,title){
    downThirdLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: finals
    })
}
function downFive(years,finals,names,title){
    downFiveLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: finals
    })
}
function downTen(years,finals,names,title){
    downTenLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data: names
        },
        series: finals
    })
}
function replaceThird(names,years,final,title){
    replaceThirdLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis:[
            {
                type: 'value',
                name: '增速',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '变动',
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}
function replaceFive(names,years,final,title){
    replaceFiveLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}
function replaceTen(names,years,final,title){
    replaceTenLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis:[
            {
                type: 'value',
                name: '增速',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '变动',
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        legend: {
            bottom:-6,
            data:names
        },
        series: final
    })
}

//行业融投资
function hytzFive(years,names,finals,title){
    zctz5.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: finals
    })
}
function hytzFive1(years,names,finals,title){
    zclygc5.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: finals
    })

}
function hytzThird(years,names,finals,title){
    zctz.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: finals
    })
}
function hytzThird1(years,names,finals,title){
    zclygc.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series: finals
    })

}
function hytzTen(years,names,finals,title){
    zctz10.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series:  finals
    })
}
function hytzTen1(years,names,finals,title){
    zclygc10.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names
        },
        series:  finals
    })

}
function xzcnFive(years,names,finals,title){
    xzcn5.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function xzcnFiveTwo(years,names,finals2,title2){
    xzcn52.setOption({
        title : {
            show:false,
            text: title2
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals2
    })

}
function xzcnThirdEchars(years,names,finals,title){
    xzcnThird.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function xzcnThirdEcharsTwo(years,names,finals2,title2){
    xzcnThird2.setOption({
        title : {
            show:false,
            text: title2
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals2
    })
}
function xzcnTen(years,names,finals,title){
    xzcn10.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function xzcnTenTwo(years,names,finals2,title2){
    xzcn102.setOption({
        title : {
            show:false,
            text: title2
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals2
    })
}
function scrzFive(years,names,finals,title){
    scrzFiveLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function scrzThirdEchars(years,names,finals,title){
    scrzThirdLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function scrzTen(years,names,finals,title){
    scrzTenLine.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        yAxis: [
            {
                name: '数值'
            }
        ],
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
//风险特征
function influenceEchars(years,names,finals,title){
    fxtz.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function focusEchars(years,names,finals,title){
    jzdksh.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names,
            bottom: -4,
        },
        series: finals
    })
}
function pjblvEchars(names,values1,years,values2,title){
    pjblv.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend: {
            data: names,
            bottom: -4,
        },
        series: [{
            name:names[0],
            type:'line',
            data: values1
        },{
            name:names[1],
            type:'line',
            data: values2
        }]
    })
}
function zqxEchars(years,values,title){
    zqxksh.setOption({
        title : {
            show:false,
            text: title
        },
        xAxis: {
            data: years
        },
        legend:{
            top:0,
            data:'与国内生产总值（GDP）相关系数'
        },
        series: [{data:values}]
    })
}
//各省市百强
function proNameMap(final,iseId,name){
    var pro = final;
    // 路径配置
    require.config({
        paths: {
            echarts: '../../js/build/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/map' // 使用地图就加载map模块，按需加载
        ],
        function (ec) {
            var provinceFive = ec.init(document.getElementById("provinceFive"));
            var option = null;
            var storage=window.localStorage;
            storage.setItem("iseId",iseId);
            storage.setItem("listName",name);
            option = {
                title : {
                    show:false,
                    text: name+'各省占比'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : true,
                    orient: 'vertical',
                    x:'right',
                    y:'top',
                    feature : {
                        mark : {show: false},
                        dataView : {show: true, readOnly: false},
                        saveAsImage:{show:true,type:"png"}
                    }
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'right',
                //     data: ['占比']
                // },
                dataRange: {
                    x: 'left',
                    y: '320px',
                    splitList: [
                        {start: 50,label:'>=50%', color: '#006edd'},
                        {start: 30, end: 50,label:'30-50%', color: '#147be0'},
                        {start: 10, end: 30,label:'10-30%', color: '#4097e6'},
                        {start: 5, end: 10, label: '5-10%', color: '#84c3f1'},
                        {start: 1, end: 5, label: '1-5%', color: '#b7e5f9'},
                        {end: 1,label:'<1%', color: '#dcfdff'}
                    ],
                    // color: ['orange', 'yellow'],
                    calculable: false
                },
                series : [
                    {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        name: '省占比',
                        type: 'map',
                        mapType: 'china',
                        hoverable:false,
                        mapLocation: {
                            x: 'left',
                            y: 'top',
                            width: '50%'
                        },
                        roam: true,
                        selectedMode : 'single',
                        itemStyle:{
                            normal:{label:{show:true}},
                            emphasis:{label:{show:true}}
                        },
                        data:final,
                        // data:[
                        //     {name: '北京', value:38},
                        //     {name: '天津', value:20},
                        //     {name: '上海', value:10},
                        //     {name: '重庆', value:15},
                        //     {name: '河北', value:10},
                        //     {name: '河南', value:18},
                        //     {name: '云南', value:10},
                        //     {name: '辽宁', value:25},
                        //     {name: '黑龙江', value:10},
                        //     {name: '湖南', value:10},
                        //     {name: '安徽', value:8},
                        //     {name: '山东', value:40},
                        //     {name: '新疆', value:46},
                        //     {name: '江苏', value:10},
                        //     {name: '浙江', value:3},
                        //     {name: '江西', value:8},
                        //     {name: '湖北', value:10},
                        //     {name: '广西', value:10},
                        //     {name: '甘肃', value:70},
                        //     {name: '山西', value:10},
                        //     {name: '内蒙古', value:10},
                        //     {name: '陕西', value:10},
                        //     {name: '吉林', value:4},
                        //     {name: '福建', value:10},
                        //     {name: '贵州', value:9},
                        //     {name: '广东', value:10},
                        //     {name: '青海', value:14},
                        //     {name: '西藏', value:19},
                        //     {name: '四川', value:24},
                        //     {name: '宁夏', value:10},
                        //     {name: '海南', value:27},
                        //     {name: '台湾', value:10},
                        //     {name: '香港', value:32},
                        //     {name: '澳门', value:10}
                        // ]
                    }
                ],
                animation: false
            };
            provinceFive.setOption(option, true);
            var ecConfig = require('echarts/config');
            provinceFive.on(ecConfig.EVENT.MAP_SELECTED, function (param){
                var selected = param.selected;
                var selectedProvince;
                var name;
                var proId;
                var iseId =storage.getItem("iseId");
                var listName = storage.getItem("listName");
                for (var i = 0, l = option.series[0].data.length; i < l; i++) {
                    name = option.series[0].data[i].name;
                    proId = option.series[0].data[i].proId;
                    option.series[0].data[i].selected = selected[name];
                    if (selected[name]) {
                        selectedProvince = name;
                        cityInfo(proId,iseId,selectedProvince,listName);
                        $("#provinceBox").css("display",'none');
                        $("#cityBox").css("display",'block');
                        $("#gradeTitle").html("行业各市占比");
                        city(iseId,proId);
                    }
                }
                if (typeof selectedProvince == 'undefined') {
                    option.series.splice(1);
                    // option.legend = null;
                    // option.dataRange = null;
                    provinceFive.setOption(option, true);
                    $("#cityBox").css("display",'none');
                    $("#provinceBox").css("display",'block');
                    $("#gradeTitle").html("行业各省占比");
                    return;
                }
                function cityInfo(proId,iseId,selectedProvince,listName){
                    $.ajax({
                        type:"get",
                        url:"http://"+host+"/industry/getIndustryRankingRatio",
                        data:{"iseId":iseId,"provinceId":proId},
                        success:function(data){
                            var datas = data.val;
                            // console.log(datas);
                            cityMap(datas,selectedProvince,listName);
                        }
                    });
                };
                function cityMap(datas,selectedProvince,listName){
                    var cityFinal = [];
                    // console.log(datas);
                    for(var m=0;m<datas.length;m++){
                        cityFinal.push({name:datas[m].cityName,value:(datas[m].ratio).replace(/%/g, "")});
                    }
                    var title = listName+selectedProvince+"省各市占比";
                    option.title = {
                        show:false,
                        text: title
                    },
                        option.series[1] = {
                            name: '市占比',
                            type: 'map',
                            hoverable:false,
                            mapType: selectedProvince,
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            mapLocation: {
                                x: '50%'
                            },
                            roam: true,
                            data: cityFinal
                            // data:[
                            //     {name: '重庆市',value: Math.round(Math.random()*1000)},
                            //     {name: '北京市',value: Math.round(Math.random()*1000)},
                            //     {name: '天津市',value: Math.round(Math.random()*1000)},
                            //     {name: '上海市',value: Math.round(Math.random()*1000)},
                            //     {name: '香港',value: Math.round(Math.random()*1000)},
                            //     {name: '澳门',value: Math.round(Math.random()*1000)},
                            //     {name: '巴音郭楞蒙古自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '和田地区',value: Math.round(Math.random()*1000)},
                            //     {name: '哈密地区',value: Math.round(Math.random()*1000)},
                            //     {name: '阿克苏地区',value: Math.round(Math.random()*1000)},
                            //     {name: '阿勒泰地区',value: Math.round(Math.random()*1000)},
                            //     {name: '喀什地区',value: Math.round(Math.random()*1000)},
                            //     {name: '塔城地区',value: Math.round(Math.random()*1000)},
                            //     {name: '昌吉回族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '克孜勒苏柯尔克孜自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '吐鲁番地区',value: Math.round(Math.random()*1000)},
                            //     {name: '伊犁哈萨克自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '博尔塔拉蒙古自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '乌鲁木齐市',value: Math.round(Math.random()*1000)},
                            //     {name: '克拉玛依市',value: Math.round(Math.random()*1000)},
                            //     {name: '阿拉尔市',value: Math.round(Math.random()*1000)},
                            //     {name: '图木舒克市',value: Math.round(Math.random()*1000)},
                            //     {name: '五家渠市',value: Math.round(Math.random()*1000)},
                            //     {name: '石河子市',value: Math.round(Math.random()*1000)},
                            //     {name: '那曲地区',value: Math.round(Math.random()*1000)},
                            //     {name: '阿里地区',value: Math.round(Math.random()*1000)},
                            //     {name: '日喀则地区',value: Math.round(Math.random()*1000)},
                            //     {name: '林芝地区',value: Math.round(Math.random()*1000)},
                            //     {name: '昌都地区',value: Math.round(Math.random()*1000)},
                            //     {name: '山南地区',value: Math.round(Math.random()*1000)},
                            //     {name: '拉萨市',value: Math.round(Math.random()*1000)},
                            //     {name: '呼伦贝尔市',value: Math.round(Math.random()*1000)},
                            //     {name: '阿拉善盟',value: Math.round(Math.random()*1000)},
                            //     {name: '锡林郭勒盟',value: Math.round(Math.random()*1000)},
                            //     {name: '鄂尔多斯市',value: Math.round(Math.random()*1000)},
                            //     {name: '赤峰市',value: Math.round(Math.random()*1000)},
                            //     {name: '巴彦淖尔市',value: Math.round(Math.random()*1000)},
                            //     {name: '通辽市',value: Math.round(Math.random()*1000)},
                            //     {name: '乌兰察布市',value: Math.round(Math.random()*1000)},
                            //     {name: '兴安盟',value: Math.round(Math.random()*1000)},
                            //     {name: '包头市',value: Math.round(Math.random()*1000)},
                            //     {name: '呼和浩特市',value: Math.round(Math.random()*1000)},
                            //     {name: '乌海市',value: Math.round(Math.random()*1000)},
                            //     {name: '海西蒙古族藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '玉树藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '果洛藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '海南藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '海北藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '黄南藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '海东地区',value: Math.round(Math.random()*1000)},
                            //     {name: '西宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '甘孜藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '阿坝藏族羌族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '凉山彝族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '绵阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '达州市',value: Math.round(Math.random()*1000)},
                            //     {name: '广元市',value: Math.round(Math.random()*1000)},
                            //     {name: '雅安市',value: Math.round(Math.random()*1000)},
                            //     {name: '宜宾市',value: Math.round(Math.random()*1000)},
                            //     {name: '乐山市',value: Math.round(Math.random()*1000)},
                            //     {name: '南充市',value: Math.round(Math.random()*1000)},
                            //     {name: '巴中市',value: Math.round(Math.random()*1000)},
                            //     {name: '泸州市',value: Math.round(Math.random()*1000)},
                            //     {name: '成都市',value: Math.round(Math.random()*1000)},
                            //     {name: '资阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '攀枝花市',value: Math.round(Math.random()*1000)},
                            //     {name: '眉山市',value: Math.round(Math.random()*1000)},
                            //     {name: '广安市',value: Math.round(Math.random()*1000)},
                            //     {name: '德阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '内江市',value: Math.round(Math.random()*1000)},
                            //     {name: '遂宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '自贡市',value: Math.round(Math.random()*1000)},
                            //     {name: '黑河市',value: Math.round(Math.random()*1000)},
                            //     {name: '大兴安岭地区',value: Math.round(Math.random()*1000)},
                            //     {name: '哈尔滨市',value: Math.round(Math.random()*1000)},
                            //     {name: '齐齐哈尔市',value: Math.round(Math.random()*1000)},
                            //     {name: '牡丹江市',value: Math.round(Math.random()*1000)},
                            //     {name: '绥化市',value: Math.round(Math.random()*1000)},
                            //     {name: '伊春市',value: Math.round(Math.random()*1000)},
                            //     {name: '佳木斯市',value: Math.round(Math.random()*1000)},
                            //     {name: '鸡西市',value: Math.round(Math.random()*1000)},
                            //     {name: '双鸭山市',value: Math.round(Math.random()*1000)},
                            //     {name: '大庆市',value: Math.round(Math.random()*1000)},
                            //     {name: '鹤岗市',value: Math.round(Math.random()*1000)},
                            //     {name: '七台河市',value: Math.round(Math.random()*1000)},
                            //     {name: '酒泉市',value: Math.round(Math.random()*1000)},
                            //     {name: '张掖市',value: Math.round(Math.random()*1000)},
                            //     {name: '甘南藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '武威市',value: Math.round(Math.random()*1000)},
                            //     {name: '陇南市',value: Math.round(Math.random()*1000)},
                            //     {name: '庆阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '白银市',value: Math.round(Math.random()*1000)},
                            //     {name: '定西市',value: Math.round(Math.random()*1000)},
                            //     {name: '天水市',value: Math.round(Math.random()*1000)},
                            //     {name: '兰州市',value: Math.round(Math.random()*1000)},
                            //     {name: '平凉市',value: Math.round(Math.random()*1000)},
                            //     {name: '临夏回族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '金昌市',value: Math.round(Math.random()*1000)},
                            //     {name: '嘉峪关市',value: Math.round(Math.random()*1000)},
                            //     {name: '普洱市',value: Math.round(Math.random()*1000)},
                            //     {name: '红河哈尼族彝族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '文山壮族苗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '曲靖市',value: Math.round(Math.random()*1000)},
                            //     {name: '楚雄彝族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '大理白族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '临沧市',value: Math.round(Math.random()*1000)},
                            //     {name: '迪庆藏族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '昭通市',value: Math.round(Math.random()*1000)},
                            //     {name: '昆明市',value: Math.round(Math.random()*1000)},
                            //     {name: '丽江市',value: Math.round(Math.random()*1000)},
                            //     {name: '西双版纳傣族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '保山市',value: Math.round(Math.random()*1000)},
                            //     {name: '玉溪市',value: Math.round(Math.random()*1000)},
                            //     {name: '怒江傈僳族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '德宏傣族景颇族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '百色市',value: Math.round(Math.random()*1000)},
                            //     {name: '河池市',value: Math.round(Math.random()*1000)},
                            //     {name: '桂林市',value: Math.round(Math.random()*1000)},
                            //     {name: '南宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '柳州市',value: Math.round(Math.random()*1000)},
                            //     {name: '崇左市',value: Math.round(Math.random()*1000)},
                            //     {name: '来宾市',value: Math.round(Math.random()*1000)},
                            //     {name: '玉林市',value: Math.round(Math.random()*1000)},
                            //     {name: '梧州市',value: Math.round(Math.random()*1000)},
                            //     {name: '贺州市',value: Math.round(Math.random()*1000)},
                            //     {name: '钦州市',value: Math.round(Math.random()*1000)},
                            //     {name: '贵港市',value: Math.round(Math.random()*1000)},
                            //     {name: '防城港市',value: Math.round(Math.random()*1000)},
                            //     {name: '北海市',value: Math.round(Math.random()*1000)},
                            //     {name: '怀化市',value: Math.round(Math.random()*1000)},
                            //     {name: '永州市',value: Math.round(Math.random()*1000)},
                            //     {name: '邵阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '郴州市',value: Math.round(Math.random()*1000)},
                            //     {name: '常德市',value: Math.round(Math.random()*1000)},
                            //     {name: '湘西土家族苗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '衡阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '岳阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '益阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '长沙市',value: Math.round(Math.random()*1000)},
                            //     {name: '株洲市',value: Math.round(Math.random()*1000)},
                            //     {name: '张家界市',value: Math.round(Math.random()*1000)},
                            //     {name: '娄底市',value: Math.round(Math.random()*1000)},
                            //     {name: '湘潭市',value: Math.round(Math.random()*1000)},
                            //     {name: '榆林市',value: Math.round(Math.random()*1000)},
                            //     {name: '延安市',value: Math.round(Math.random()*1000)},
                            //     {name: '汉中市',value: Math.round(Math.random()*1000)},
                            //     {name: '安康市',value: Math.round(Math.random()*1000)},
                            //     {name: '商洛市',value: Math.round(Math.random()*1000)},
                            //     {name: '宝鸡市',value: Math.round(Math.random()*1000)},
                            //     {name: '渭南市',value: Math.round(Math.random()*1000)},
                            //     {name: '咸阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '西安市',value: Math.round(Math.random()*1000)},
                            //     {name: '铜川市',value: Math.round(Math.random()*1000)},
                            //     {name: '清远市',value: Math.round(Math.random()*1000)},
                            //     {name: '韶关市',value: Math.round(Math.random()*1000)},
                            //     {name: '湛江市',value: Math.round(Math.random()*1000)},
                            //     {name: '梅州市',value: Math.round(Math.random()*1000)},
                            //     {name: '河源市',value: Math.round(Math.random()*1000)},
                            //     {name: '肇庆市',value: Math.round(Math.random()*1000)},
                            //     {name: '惠州市',value: Math.round(Math.random()*1000)},
                            //     {name: '茂名市',value: Math.round(Math.random()*1000)},
                            //     {name: '江门市',value: Math.round(Math.random()*1000)},
                            //     {name: '阳江市',value: Math.round(Math.random()*1000)},
                            //     {name: '云浮市',value: Math.round(Math.random()*1000)},
                            //     {name: '广州市',value: Math.round(Math.random()*1000)},
                            //     {name: '汕尾市',value: Math.round(Math.random()*1000)},
                            //     {name: '揭阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '珠海市',value: Math.round(Math.random()*1000)},
                            //     {name: '佛山市',value: Math.round(Math.random()*1000)},
                            //     {name: '潮州市',value: Math.round(Math.random()*1000)},
                            //     {name: '汕头市',value: Math.round(Math.random()*1000)},
                            //     {name: '深圳市',value: Math.round(Math.random()*1000)},
                            //     {name: '东莞市',value: Math.round(Math.random()*1000)},
                            //     {name: '中山市',value: Math.round(Math.random()*1000)},
                            //     {name: '延边朝鲜族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '吉林市',value: Math.round(Math.random()*1000)},
                            //     {name: '白城市',value: Math.round(Math.random()*1000)},
                            //     {name: '松原市',value: Math.round(Math.random()*1000)},
                            //     {name: '长春市',value: Math.round(Math.random()*1000)},
                            //     {name: '白山市',value: Math.round(Math.random()*1000)},
                            //     {name: '通化市',value: Math.round(Math.random()*1000)},
                            //     {name: '四平市',value: Math.round(Math.random()*1000)},
                            //     {name: '辽源市',value: Math.round(Math.random()*1000)},
                            //     {name: '承德市',value: Math.round(Math.random()*1000)},
                            //     {name: '张家口市',value: Math.round(Math.random()*1000)},
                            //     {name: '保定市',value: Math.round(Math.random()*1000)},
                            //     {name: '唐山市',value: Math.round(Math.random()*1000)},
                            //     {name: '沧州市',value: Math.round(Math.random()*1000)},
                            //     {name: '石家庄市',value: Math.round(Math.random()*1000)},
                            //     {name: '邢台市',value: Math.round(Math.random()*1000)},
                            //     {name: '邯郸市',value: Math.round(Math.random()*1000)},
                            //     {name: '秦皇岛市',value: Math.round(Math.random()*1000)},
                            //     {name: '衡水市',value: Math.round(Math.random()*1000)},
                            //     {name: '廊坊市',value: Math.round(Math.random()*1000)},
                            //     {name: '恩施土家族苗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '十堰市',value: Math.round(Math.random()*1000)},
                            //     {name: '宜昌市',value: Math.round(Math.random()*1000)},
                            //     {name: '襄樊市',value: Math.round(Math.random()*1000)},
                            //     {name: '黄冈市',value: Math.round(Math.random()*1000)},
                            //     {name: '荆州市',value: Math.round(Math.random()*1000)},
                            //     {name: '荆门市',value: Math.round(Math.random()*1000)},
                            //     {name: '咸宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '随州市',value: Math.round(Math.random()*1000)},
                            //     {name: '孝感市',value: Math.round(Math.random()*1000)},
                            //     {name: '武汉市',value: Math.round(Math.random()*1000)},
                            //     {name: '黄石市',value: Math.round(Math.random()*1000)},
                            //     {name: '神农架林区',value: Math.round(Math.random()*1000)},
                            //     {name: '天门市',value: Math.round(Math.random()*1000)},
                            //     {name: '仙桃市',value: Math.round(Math.random()*1000)},
                            //     {name: '潜江市',value: Math.round(Math.random()*1000)},
                            //     {name: '鄂州市',value: Math.round(Math.random()*1000)},
                            //     {name: '遵义市',value: Math.round(Math.random()*1000)},
                            //     {name: '黔东南苗族侗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '毕节地区',value: Math.round(Math.random()*1000)},
                            //     {name: '黔南布依族苗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '铜仁地区',value: Math.round(Math.random()*1000)},
                            //     {name: '黔西南布依族苗族自治州',value: Math.round(Math.random()*1000)},
                            //     {name: '六盘水市',value: Math.round(Math.random()*1000)},
                            //     {name: '安顺市',value: Math.round(Math.random()*1000)},
                            //     {name: '贵阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '烟台市',value: Math.round(Math.random()*1000)},
                            //     {name: '临沂市',value: Math.round(Math.random()*1000)},
                            //     {name: '潍坊市',value: Math.round(Math.random()*1000)},
                            //     {name: '青岛市',value: Math.round(Math.random()*1000)},
                            //     {name: '菏泽市',value: Math.round(Math.random()*1000)},
                            //     {name: '济宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '德州市',value: Math.round(Math.random()*1000)},
                            //     {name: '滨州市',value: Math.round(Math.random()*1000)},
                            //     {name: '聊城市',value: Math.round(Math.random()*1000)},
                            //     {name: '东营市',value: Math.round(Math.random()*1000)},
                            //     {name: '济南市',value: Math.round(Math.random()*1000)},
                            //     {name: '泰安市',value: Math.round(Math.random()*1000)},
                            //     {name: '威海市',value: Math.round(Math.random()*1000)},
                            //     {name: '日照市',value: Math.round(Math.random()*1000)},
                            //     {name: '淄博市',value: Math.round(Math.random()*1000)},
                            //     {name: '枣庄市',value: Math.round(Math.random()*1000)},
                            //     {name: '莱芜市',value: Math.round(Math.random()*1000)},
                            //     {name: '赣州市',value: Math.round(Math.random()*1000)},
                            //     {name: '吉安市',value: Math.round(Math.random()*1000)},
                            //     {name: '上饶市',value: Math.round(Math.random()*1000)},
                            //     {name: '九江市',value: Math.round(Math.random()*1000)},
                            //     {name: '抚州市',value: Math.round(Math.random()*1000)},
                            //     {name: '宜春市',value: Math.round(Math.random()*1000)},
                            //     {name: '南昌市',value: Math.round(Math.random()*1000)},
                            //     {name: '景德镇市',value: Math.round(Math.random()*1000)},
                            //     {name: '萍乡市',value: Math.round(Math.random()*1000)},
                            //     {name: '鹰潭市',value: Math.round(Math.random()*1000)},
                            //     {name: '新余市',value: Math.round(Math.random()*1000)},
                            //     {name: '南阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '信阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '洛阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '驻马店市',value: Math.round(Math.random()*1000)},
                            //     {name: '周口市',value: Math.round(Math.random()*1000)},
                            //     {name: '商丘市',value: Math.round(Math.random()*1000)},
                            //     {name: '三门峡市',value: Math.round(Math.random()*1000)},
                            //     {name: '新乡市',value: Math.round(Math.random()*1000)},
                            //     {name: '平顶山市',value: Math.round(Math.random()*1000)},
                            //     {name: '郑州市',value: Math.round(Math.random()*1000)},
                            //     {name: '安阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '开封市',value: Math.round(Math.random()*1000)},
                            //     {name: '焦作市',value: Math.round(Math.random()*1000)},
                            //     {name: '许昌市',value: Math.round(Math.random()*1000)},
                            //     {name: '濮阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '漯河市',value: Math.round(Math.random()*1000)},
                            //     {name: '鹤壁市',value: Math.round(Math.random()*1000)},
                            //     {name: '大连市',value: Math.round(Math.random()*1000)},
                            //     {name: '朝阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '丹东市',value: Math.round(Math.random()*1000)},
                            //     {name: '铁岭市',value: Math.round(Math.random()*1000)},
                            //     {name: '沈阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '抚顺市',value: Math.round(Math.random()*1000)},
                            //     {name: '葫芦岛市',value: Math.round(Math.random()*1000)},
                            //     {name: '阜新市',value: Math.round(Math.random()*1000)},
                            //     {name: '锦州市',value: Math.round(Math.random()*1000)},
                            //     {name: '鞍山市',value: Math.round(Math.random()*1000)},
                            //     {name: '本溪市',value: Math.round(Math.random()*1000)},
                            //     {name: '营口市',value: Math.round(Math.random()*1000)},
                            //     {name: '辽阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '盘锦市',value: Math.round(Math.random()*1000)},
                            //     {name: '忻州市',value: Math.round(Math.random()*1000)},
                            //     {name: '吕梁市',value: Math.round(Math.random()*1000)},
                            //     {name: '临汾市',value: Math.round(Math.random()*1000)},
                            //     {name: '晋中市',value: Math.round(Math.random()*1000)},
                            //     {name: '运城市',value: Math.round(Math.random()*1000)},
                            //     {name: '大同市',value: Math.round(Math.random()*1000)},
                            //     {name: '长治市',value: Math.round(Math.random()*1000)},
                            //     {name: '朔州市',value: Math.round(Math.random()*1000)},
                            //     {name: '晋城市',value: Math.round(Math.random()*1000)},
                            //     {name: '太原市',value: Math.round(Math.random()*1000)},
                            //     {name: '阳泉市',value: Math.round(Math.random()*1000)},
                            //     {name: '六安市',value: Math.round(Math.random()*1000)},
                            //     {name: '安庆市',value: Math.round(Math.random()*1000)},
                            //     {name: '滁州市',value: Math.round(Math.random()*1000)},
                            //     {name: '宣城市',value: Math.round(Math.random()*1000)},
                            //     {name: '阜阳市',value: Math.round(Math.random()*1000)},
                            //     {name: '宿州市',value: Math.round(Math.random()*1000)},
                            //     {name: '黄山市',value: Math.round(Math.random()*1000)},
                            //     {name: '巢湖市',value: Math.round(Math.random()*1000)},
                            //     {name: '亳州市',value: Math.round(Math.random()*1000)},
                            //     {name: '池州市',value: Math.round(Math.random()*1000)},
                            //     {name: '合肥市',value: Math.round(Math.random()*1000)},
                            //     {name: '蚌埠市',value: Math.round(Math.random()*1000)},
                            //     {name: '芜湖市',value: Math.round(Math.random()*1000)},
                            //     {name: '淮北市',value: Math.round(Math.random()*1000)},
                            //     {name: '淮南市',value: Math.round(Math.random()*1000)},
                            //     {name: '马鞍山市',value: Math.round(Math.random()*1000)},
                            //     {name: '铜陵市',value: Math.round(Math.random()*1000)},
                            //     {name: '南平市',value: Math.round(Math.random()*1000)},
                            //     {name: '三明市',value: Math.round(Math.random()*1000)},
                            //     {name: '龙岩市',value: Math.round(Math.random()*1000)},
                            //     {name: '宁德市',value: Math.round(Math.random()*1000)},
                            //     {name: '福州市',value: Math.round(Math.random()*1000)},
                            //     {name: '漳州市',value: Math.round(Math.random()*1000)},
                            //     {name: '泉州市',value: Math.round(Math.random()*1000)},
                            //     {name: '莆田市',value: Math.round(Math.random()*1000)},
                            //     {name: '厦门市',value: Math.round(Math.random()*1000)},
                            //     {name: '丽水市',value: Math.round(Math.random()*1000)},
                            //     {name: '杭州市',value: Math.round(Math.random()*1000)},
                            //     {name: '温州市',value: Math.round(Math.random()*1000)},
                            //     {name: '宁波市',value: Math.round(Math.random()*1000)},
                            //     {name: '舟山市',value: Math.round(Math.random()*1000)},
                            //     {name: '台州市',value: Math.round(Math.random()*1000)},
                            //     {name: '金华市',value: Math.round(Math.random()*1000)},
                            //     {name: '衢州市',value: Math.round(Math.random()*1000)},
                            //     {name: '绍兴市',value: Math.round(Math.random()*1000)},
                            //     {name: '嘉兴市',value: Math.round(Math.random()*1000)},
                            //     {name: '湖州市',value: Math.round(Math.random()*1000)},
                            //     {name: '盐城市',value: Math.round(Math.random()*1000)},
                            //     {name: '徐州市',value: Math.round(Math.random()*1000)},
                            //     {name: '南通市',value: Math.round(Math.random()*1000)},
                            //     {name: '淮安市',value: Math.round(Math.random()*1000)},
                            //     {name: '苏州市',value: Math.round(Math.random()*1000)},
                            //     {name: '宿迁市',value: Math.round(Math.random()*1000)},
                            //     {name: '连云港市',value: Math.round(Math.random()*1000)},
                            //     {name: '扬州市',value: Math.round(Math.random()*1000)},
                            //     {name: '南京市',value: Math.round(Math.random()*1000)},
                            //     {name: '泰州市',value: Math.round(Math.random()*1000)},
                            //     {name: '无锡市',value: Math.round(Math.random()*1000)},
                            //     {name: '常州市',value: Math.round(Math.random()*1000)},
                            //     {name: '镇江市',value: Math.round(Math.random()*1000)},
                            //     {name: '吴忠市',value: Math.round(Math.random()*1000)},
                            //     {name: '中卫市',value: Math.round(Math.random()*1000)},
                            //     {name: '固原市',value: Math.round(Math.random()*1000)},
                            //     {name: '银川市',value: Math.round(Math.random()*1000)},
                            //     {name: '石嘴山市',value: Math.round(Math.random()*1000)},
                            //     {name: '儋州市',value: Math.round(Math.random()*1000)},
                            //     {name: '文昌市',value: Math.round(Math.random()*1000)},
                            //     {name: '乐东黎族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '三亚市',value: Math.round(Math.random()*1000)},
                            //     {name: '琼中黎族苗族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '东方市',value: Math.round(Math.random()*1000)},
                            //     {name: '海口市',value: Math.round(Math.random()*1000)},
                            //     {name: '万宁市',value: Math.round(Math.random()*1000)},
                            //     {name: '澄迈县',value: Math.round(Math.random()*1000)},
                            //     {name: '白沙黎族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '琼海市',value: Math.round(Math.random()*1000)},
                            //     {name: '昌江黎族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '临高县',value: Math.round(Math.random()*1000)},
                            //     {name: '陵水黎族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '屯昌县',value: Math.round(Math.random()*1000)},
                            //     {name: '定安县',value: Math.round(Math.random()*1000)},
                            //     {name: '保亭黎族苗族自治县',value: Math.round(Math.random()*1000)},
                            //     {name: '五指山市',value: Math.round(Math.random()*1000)}
                            // ]
                        };
                    option.dataRange = {
                        x: 'left',
                        y: '320px',
                        splitList: [
                            {start: 50,label:'>=50%', color: '#006edd'},
                            {start: 30, end: 50,label:'30-50%', color: '#147be0'},
                            {start: 10, end: 30,label:'10-30%', color: '#4097e6'},
                            {start: 5, end: 10, label: '5-10%', color: '#84c3f1'},
                            {start: 1, end: 5, label: '1-5%', color: '#b7e5f9'},
                            {end: 1,label:'<1%', color: '#dcfdff'}
                        ],
                        // color: ['orange', 'yellow'],
                        calculable: false
                    };
                    provinceFive.setOption(option, true);
                }

            })
            window.onresize = function(){
                //重置容器高宽
                resizeCss();
                provinceFive.resize();
            };

        }
    )


}
function billboardEchars(names,finals){
    billboardEchar.setOption({
        legend: {
            data: names
        },
        series: [{
            data:finals
        }]
    })
}

//------------------------------------图形

function grade(imId){
    //首页表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryMain",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            gradeTableFirst(datas);
        }
    });
    finalCount();
}
function gradeTableFirst(datas){
    $("#gradeFirstBody").html("");
    var content = '';
    for(var i=0;i<datas.length;i++){
        content += '<tr><td>'+(i+1)+'</td>';
        content += '<td class="rankName">'+datas[i].rankName+'</td>';
        // content += '<td style="display: none;">'+datas[i].imId+'</td>';
        content += '<td>'+datas[i].year+'</td>';
        content += '<td><span class="reportDown">下载报告</span></td>';
        // content += '<a href="#" class="preview" target="_self"><span class="reportPreview">报告预览</span></a></td>';
        content += '<td style="display: none;">'+datas[i].iseId+'</td>';
        content += '<td><a href="javascript:void(0)" class="addUp">生成统计</a></td>';
        content += '<td class="gradeWeb"><a href="'+datas[i].websites+'"  target="_Blank">'+datas[i].websites+'</a></td>';
    }
    content += '</tr>';
    $("#gradeFirstBody").html(content);
    $("#gradeFirstBody tr td:nth-child(6)").click(function(){
        $(".gradeConent").css("display",'none');
        $("#gradeTab").css("display",'block');
        $("#gradeTabContent").css("display",'block');
        var seId = $(this).prev("td").html();
        var name = $(this).prevAll(".rankName").html();
        // alert(seId);
        province(seId,name);
        billboardList(seId);
    });
    $(".reportDown").click(function(){
        var iseId = $(this).parent("td").next("td").html();
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/industryStatEnterpriseRankDownload",
            async: true,
            data: {'iseId': iseId},
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
function finalCount(){
    $("#gradeList").click(function(){
        $("#gradeTab").css("display",'none');
        $(".gradeConent").css("display",'block');
        $("#gradeTabContent").css("display",'none');
    })
    $("#cityList").click(function(){
        $("#cityBox").css("display",'none');
        $("#provinceBox").css("display",'block');
        $("#gradeTitle").html("行业各省占比");
    })
}
function billboardList(seId){
    var iseId = seId;
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryCR8",
        data: {"iseId": iseId},
        success: function (data) {
            var datas = data.val;
            var box = '';
            for(var i=0;i<datas.length;i++){
                box += '<tr>';
                for(var m=0;m<datas[i].length;m++){
                    box += '<td>'+datas[i][m]+'</td>>';
                }
            }
            box += '</tr>';
            $("#billboardBody").html(box);
            billboardPhoto(datas);
        }
    })
}
function billboardPhoto(datas){
    var names = [];
    var finals = [];
    for(var i=0;i<datas.length-2;i++){
        names.push(datas[i][1]);
        finals.push({name: datas[i][1], value: (datas[i][3]).replace(/%/g, "")});
    }
    billboardEchars(names,finals);
}
function province(seId,name){
    var iseId = seId;
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryRankingRatio",
        data:{"iseId":iseId},
        success:function(data){
            var datas = data.val;
            var mapType = [];
            $("#provinceBody").html("");
            var box = "";
            for(var i=0;i<datas.length;i++){
                box += '<tr><td style="display: none;">'+datas[i].provinceId+'</td>';
                box += '<td class="badYear">'+datas[i].provinceName+'</td>';
                box += '<td>'+datas[i].rankValue+'</td>';
                box += '<td>'+datas[i].ratio+'</td>';
                mapType.push({name:datas[i].provinceName,proId:datas[i].provinceId,ratio:datas[i].ratio});
            }
            box += '</tr>';
            $("#provinceBody").html(box);
            // console.log(mapType);
            $("#provinceBody tr td:nth-child(2)").click(function(){
                $("#provinceBox").css("display",'none');
                $("#cityBox").css("display",'block');
                $("#gradeTitle").html("行业各市占比");
                var provinceId = $(this).prev("td").html();
                // alert(seId);
                city(iseId,provinceId);
            });
            provinceMap(datas,iseId,name);
        }
    });
}
function city(iseId,provinceId){
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryRankingRatio",
        data: {"iseId": iseId,"provinceId":provinceId},
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            $("#cityBody").html("");
            var box = "";
            // box += '';
            for(var i=0;i<datas.length;i++){
                box += '<tr><td style="display: none;">'+datas[i].cityId+'</td>';
                box += '<td>'+datas[i].cityName+'</td>';
                box += '<td>'+datas[i].rankValue+'</td>';
                box += '<td>'+datas[i].ratio+'</td>';
            }
            box += '</tr>';
            $("#cityBody").html(box);
        }
    })
}
function provinceMap(datas,iseId,name){
    // console.log(datas);
    var proName = [];
    var final =[];
    for(var i=0;i<datas.length;i++){
        proName.push(datas[i].provinceName);
        // console.log(proName);
        final.push({name:(((((((datas[i].provinceName).replace(/省/g, "")).replace(/市/g, "")).replace(/自治区/g, "")).replace(/特别行政区/g, "")).replace(/壮族/g, "")).replace(/回族/g, "")).replace(/维吾尔/g, ""),
            value:(datas[i].ratio).replace(/%/g, ""),proId:datas[i].provinceId});
    }
    // console.log(final);
    proNameMap(final,iseId,name);
}

function danger(imId,nowYear,preYear){
//    世界经济影响
//    ----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryEconmicImpact",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $("#jjyxHeader").html("");
            $("#jjyxBody").html("");
            var TitleContent = '';
            var TableContent = '';
            var titles = datas[0];
            TitleContent += '<tr>';
            for (var i = 0;i<titles.length;i++){
                TitleContent += '<th>'+titles[i]+'</th>';
            }
            TitleContent += '</tr>';
            $("#jjyxHeader").html(TitleContent);
            for (var n=1;n<datas.length;n++) {
                TableContent += '<tr>';
                for(var m=0;m<datas[n].length;m++){
                    TableContent += '<td>'+datas[n][m]+'</td>';
                }
                TableContent += '</tr>';
            }
            $("#jjyxBody").html(TableContent);
            influencePhoto(datas);
        }
    });
    influenceOut(imId);
    //    ----》世界经济影响和行业集中度图形
//    行业集中度
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryconcentration",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $("#jzdHeader").html("");
            $("#jzdBody").html("");
            var TitleContent = '';
            var TableContent = '';
            var titles = datas[0];
            TitleContent += '<tr>';
            for (var i = 0;i<titles.length;i++){
                TitleContent += '<th>'+titles[i]+'</th>';
            }
            TitleContent += '</tr>';
            $("#jzdHeader").html(TitleContent);
            for (var n=1;n<datas.length;n++) {
                TableContent += '<tr>';
                for(var m=0;m<datas[n].length;m++){
                    TableContent += '<td>'+datas[n][m]+'</td>';
                }
                TableContent += '</tr>';
            }
            $("#jzdBody").html(TableContent);
            focusPhoto(datas);
        }
    });
    focusOut(imId);
//    周期性
//    ----->表格
    zqxCountIndex(imId);
    cycleTable(imId,preYear,nowYear);
    indexSelect(imId,preYear,nowYear);   //指标选择;
    indexTwo(imId,preYear,nowYear);
    zqxSure(imId);
    cycleOut(imId,preYear,nowYear);
//    技术变革风险
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryTechnologicalChange",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $("#bgfxHead").html("");
            $("#bgfxBody").html("");
            var TitleContent = '';
            var TableContent = '';
            var titles = datas[0];
            TitleContent += '<tr>';
            for (var i = 0;i<titles.length;i++){
                TitleContent += '<th>'+titles[i]+'</th>';
            }
            TitleContent += '</tr>';
            $("#bgfxHead").html(TitleContent);
            for (var n=1;n<datas.length;n++) {
                TableContent += '<tr>';
                for (var m=0;m<datas[n].length;m++){
                    TableContent += '<td>'+datas[n][m]+'</td>';
                }
                TableContent += '</tr>';
            }
            $("#bgfxBody").html(TableContent);

        }
    });
    tecnOut(imId);
//----》风险事件敏感性
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryRiskEvent",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $(".dangerTip").html(datas[0].industry_risk);
            $("#dangerSensitive").html("");
            var content = "";
            for(var i=1;i<datas.length;i++){
                content += '<tr><td>'+datas[i].date+'</td><td>'+datas[i].event_name+'</td><td class="dangerInfluence">'+datas[i].influence+'</td>';
            }
            content += '</tr>';
            $("#dangerSensitive").html(content);

        }
    });
    sensitiveOut(imId);
//    商业银行不良率
//    ---->表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryBankAdverseRatio",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $("#blvHeader").html("");
            $("#blvBody").html("");
            var TitleContent = '';
            var TableContent = '';
            var titles = datas[0];
            // console.log(datasList);
            TitleContent += '<tr><th>时间</th>';
            for (var i = 1;i<titles.length;i++){
                TitleContent += '<th class="badYear">'+titles[i]+'</th>';
            }
            TitleContent += '</tr>';
            $("#blvHeader").html(TitleContent);
            for (var n=1;n<datas.length;n++) {
                TableContent += '<tr>';
                for(var m=0;m<datas[n].length;m++){
                    TableContent += '<td>'+datas[n][m]+'</td>';
                }
                TableContent += '</tr>';
            }
            $("#blvBody").html(TableContent);
            blvPhoto(datas);
        }
    });
    badBank(imId);
    badOut(imId);
//    ----》图形
}
function influenceOut(imId){
    $("#influenceOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryEconmicImpact",
            data:{"imId":imId},
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
                $("#influenceOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function focusOut(imId){
    $("#focusOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryConcentration",
            data:{"imId":imId},
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
                $("#focusOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function cycleOut(imId,startTime,endTime,industryIndexName,macroeconomicIndexName){
    $("#cycleOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPeriodicity",
            data:{
                "imId":imId,
                "startTime":startTime,
                "endTime":endTime,
                "industryIndexName":industryIndexName,
                "macroeconomicIndexName":macroeconomicIndexName
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
                $("#cycleOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function tecnOut(imId){
    $("#tecnOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryTechnologicalChange",
            data:{"imId":imId},
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
                $("#tecnOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function sensitiveOut(imId){
    $("#sensitiveOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryRiskEvent",
            data:{"imId":imId},
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
                $("#sensitiveOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function badOut(imId){
    $("#badOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryBankAdverseRatio",
            data:{"imId":imId},
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
                $("#badOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function zqxCountIndex(imId){
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPeriodicityIndex",
        data:{"imId":imId},
        async:true,
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            var datas1 = datas.industryIndexNameList;
            var datas2 = datas.MacroeconomicIndexNameList;
            for ( var i = 0; i < datas1.length; i++) {
                $("#indusSelect").append( '<option value='+i+'>'+ datas1[i] + '</option>');
            }
            for ( var i = 0; i < datas2.length; i++) {
                $("#finalSelect").append( '<option value='+i+'>'+ datas2[i] + '</option>');
            }

        }
    });
}
function cycleTable(imId,startTime,endTime,industryIndexName,macroeconomicIndexName){
    $.ajax({
        type: "get",
        url: "http://" + host + "/industry/getIndustryPeriodicity",
        // url: "http://192.168.3.4:8081/industry/getIndustryPeriodicity",
        data:{
            "imId":imId,
            "startTime":startTime,
            "endTime":endTime,
            "industryIndexName":industryIndexName,
            "macroeconomicIndexName":macroeconomicIndexName
        },
        async: true,
        success: function (data) {
            var datas = data.val;
            // console.log(datas);
            var titles= datas[0];
            var titleBox = "";
            var content = "";
            $("#zqxHead").html("");
            $("#zqxBody").html("");
            titleBox += '<tr>';
            for(var i=0;i<titles.length;i++){
                titleBox += '<th>'+titles[i]+'</th>';
            }
            titleBox += '</tr>';
            $("#zqxHead").html(titleBox);
            content += '<tr>';
            for(var m=1;m<datas.length;m++){
                for(var n=0;n<datas[m].length;n++){
                    content += '<td>'+datas[m][n]+'</td>';
                }
                if(datas[m].length<3){
                    content += '<td></td>';
                }else{
                }
                content += '</tr>';
            }
            $("#zqxBody").html(content);
            cyclePhoto(datas,startTime,endTime,industryIndexName,macroeconomicIndexName);
        }
    })
}
function cyclePhoto(datas,startTime,endTime,industryIndexName,macroeconomicIndexName){
    var title = startTime+"-"+endTime+industryIndexName+"与GDP相关系数图";
    var years = [];
    var values = [];
    var finals =[];
    var name = '与国内生产总值（GDP）相关系数';
    for(var m=1;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    for(var i=1;i<datas[3].length;i++){
        values.push(datas[3][i]);
    }
    zqxEchars(years,values,title);
}
function zqxSure(imId){
    $("#zqxSure").click(function(){
        var startTime = $("#dateZqx1").val();
        var endTime = $("#dateZqx2").val();
        cycleTable(imId,startTime,endTime);
        indexSelect(imId,startTime,endTime);
        indexTwo(imId,startTime,endTime);
        cycleOut(imId,startTime,endTime);
    })
}
function indexSelect(imId,startTime,endTime){
    $("#indusSelect").change(function(){
        var industryIndexName = $("#indusSelect option:selected").text();
        cycleTable(imId,startTime,endTime,industryIndexName);
        indexTwo(imId,startTime,endTime,industryIndexName);
        cycleOut(imId,startTime,endTime,industryIndexName);
    });
}
function indexTwo(imId,startTime,endTime,industryIndexName){
    $("#finalSelect").change(function(){
        var macroeconomicIndexName = $("#finalSelect option:selected").text();
        if(industryIndexName =="undefined"){
            cycleTable(imId,startTime,endTime,"",macroeconomicIndexName);
            // cyclePhoto(imId,startTime,endTime,industryIndexName);
        }else{
            cycleTable(imId,startTime,endTime,industryIndexName,macroeconomicIndexName);
            // cyclePhoto(imId,startTime,endTime,industryIndexName,macroeconomicIndexName);
        }
    });
}
function influencePhoto(datas){
    var title = "世界经济影响图";
    var years = [];
    var name1Data = [];
    var name2Data = [];
    var name3Data = [];
    var name4Data = [];
    var names = [];
    var finals = [];
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[3].length;m++){
        name1Data.push(datas[3][m]);
    }
    for(var n=1;n<datas[7].length;n++){
        name2Data.push(datas[7][n]);
    }
    for(var k=1;k<datas[4].length;k++){
        name3Data.push(datas[4][k]);
    }
    for(var k=1;k<datas[8].length;k++){
        name4Data.push(datas[8][k]);
    }
    names.push(datas[3][0],datas[7][0],datas[4][0],datas[8][0]);
    finals.push({name:datas[3][0],type:'bar',data:name1Data},
        {name:datas[7][0],type:'bar',data:name2Data},
        {name:datas[4][0],type:'line',yAxisIndex: 1,data:name3Data},
        {name:datas[8][0],type:'line',yAxisIndex: 1,data:name4Data});
    influenceEchars(years,names,finals,title);
}
function focusPhoto(datas){
    var title = "行业集中度统计图";
    var years = [];
    var name1Data = [];
    var name2Data = [];
    var name3Data = [];
    var names = [];
    var finals = [];
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[3].length;m++){
        name1Data.push(datas[3][m]);
    }
    for(var n=1;n<datas[4].length;n++){
        name2Data.push(datas[4][n]);
    }
    for(var k=1;k<datas[5].length;k++){
        name3Data.push(datas[5][k]);
    }
    names.push(datas[3][0],datas[4][0],datas[5][0]);
    finals.push({name:datas[3][0],type:'bar',data:name1Data},
        {name:datas[4][0],type:'line',yAxisIndex: 1,data:name2Data},
        {name:datas[5][0],type:'line',yAxisIndex: 1,data:name3Data});
    focusEchars(years,names,finals,title);
}
function badBank(imId){
    $(document).on('click','.badYear',function() {
        var date = $(this).html();
        //    统计不良银行名单
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryBankList",
            data:{
                "imId":imId,
                "date":date
            },
            async:true,
            success:function(data) {
                var datas = data.val;
                $("#badBank").html("");
                var box = "";
                var result = [];
                for(var m=0,len=datas.length;m<len;m+=5){
                    result.push(datas.slice(m,m+5));
                }
                for (var i=0;i<result.length;i++){
                    box += '<tr>';
                    for(var n=0;n<result[i].length;n++){
                        box += '<td><button type="button" class="btn" data-toggle="tooltip" data-placement="top"  title="不良率为'+result[i][n][0].value+'">'+result[i][n][1].value+'</button></td>';
                    }
                    box += '</tr>';
                }
                $(box).appendTo("#badBank");
                $("[data-toggle='tooltip']").tooltip();
            }
        })
    });

}
function blvPhoto(datas){
    var title = "主要银行平均不良率图";
    var names =[];
    var years =[];
    var values1 =[];
    var values2 =[];
    for(var i=1;i<datas.length;i++){
        names.push(datas[i][0]);
    }
    for (var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for (var i=1;i<datas[1].length;i++){
        values1.push(datas[1][i]);
    }
    for (var i=1;i<datas[2].length;i++){
        values2.push(datas[2][i]);
    }
    pjblvEchars(names,values1,years,values2,title);
}

function money(imId){
    //主要经济指标
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryEconomic?dateType=3", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            mainTable(datas);
        }
    });
    jjzbOut(imId,3);
    //月度
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryEconomic?dateType=1", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datasMonth = data.val;
            // console.log(datasMonth);
            mainMonthTable(datasMonth);
        }
    });
    jjzbOut(imId,1);
//行业财务指标年度3表示,月度1表示
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryFinancialIndicators?dateType=3", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            moneyYearTable(datas);
        }
    });
    cwzbOut(imId,3);
    //月度
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryFinancialIndicators?dateType=1", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datasMonth = data.val;
            // console.log(datasMonth);
            moneyMonthTable(datasMonth);
        }
    });
    cwzbOut(imId,1);
//企业绩效评价年度3表示,月度1表示
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPerformanceEvaluation?dateType=3", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            companyYearTable(datas);
        }
    });
    pjbzOut(imId,3);
    //月度
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPerformanceEvaluation?dateType=1", //3表示年度,1表示月度
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datasMonth = data.val;
            // console.log(datasMonth);
            companyMonthTable(datasMonth);
        }
    });
    pjbzOut(imId,1);
}
function jjzbOut(imId,dateType){
    $("#jjzbOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryEconomic",
            data:{"imId":imId,"dateType":dateType},
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
                $("#jjzbOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function cwzbOut(imId,dateType){
    $("#cwzbOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryFinancialIndicators",
            data:{"imId":imId,"dateType":dateType},
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
                $("#cwzbOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function pjbzOut(imId,dateType){
    $("#pjbzOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPerformanceEvaluation",
            data:{"imId":imId,"dateType":dateType},
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
                $("#pjbzOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function mainTable(datas){
    $("#jjzbYear").html("");
    $("#jjzbYearBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datas[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#jjzbYear").html(TitleContent);
    for (var n=1;n<datas.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datas[n].length;m++){
            TableContent += '<td>'+datas[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#jjzbYearBody").html(TableContent);

}
function mainMonthTable(datasMonth){
    $("#jjzbMonth").html("");
    $("#jjzbMonthBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datasMonth[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#jjzbMonth").html(TitleContent);
    for (var n=1;n<datasMonth.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datasMonth[n].length;m++){
            TableContent += '<td>'+datasMonth[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#jjzbMonthBody").html(TableContent);
}
function moneyYearTable(datas){
    $("#cwzbYearHead").html("");
    $("#cwzbYearBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datas[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#cwzbYearHead").html(TitleContent);
    for (var n=1;n<datas.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datas[n].length;m++){
            TableContent += '<td>'+datas[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#cwzbYearBody").html(TableContent);

}
function moneyMonthTable(datasMonth){
    $("#cwzbMonthHead").html("");
    $("#cwzbMonthBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datasMonth[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#cwzbMonthHead").html(TitleContent);
    for (var n=1;n<datasMonth.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datasMonth[n].length;m++){
            TableContent += '<td>'+datasMonth[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#cwzbMonthBody").html(TableContent);
}
function companyYearTable(datas){
    $("#pjbzHeader").html("");
    $("#pjbzBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datas[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#pjbzHeader").html(TitleContent);
    for (var n=1;n<datas.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datas[n].length;m++){
            TableContent += '<td>'+datas[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#pjbzBody").html(TableContent);
}
function companyMonthTable(datasMonth){
    $("#pjbzMonthHeader").html("");
    $("#pjbzMonthBody").html("");
    var TitleContent = '';
    var TableContent = '';
    var titles = datasMonth[0];
    TitleContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleContent += '<th>'+titles[i]+'</th>';
    }
    TitleContent += '</tr>';
    $("#pjbzMonthHeader").html(TitleContent);
    for (var n=1;n<datasMonth.length;n++) {
        TableContent += '<tr>';
        for (var m=0;m<datasMonth[n].length;m++){
            TableContent += '<td>'+datasMonth[n][m]+'</td>';
        }
        TableContent += '</tr>';
    }
    $("#pjbzMonthBody").html(TableContent);
}

function indus(imId){
//    行业投资
    //-----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInvestmentFinancing?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            hytzFiveTable(datas);
            hytzFivePhoto(datas,5);
        }
    });
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInvestmentFinancingSource?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            hytzSourceFiveTable(datas);
            hytzSourceFivePhoto(datas,5);

        }
    });
    hytzOther(imId);  //行业投资其他表格和图
    hytzOut(imId,5);
//    新增产能
//    -----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryIifMainProducts?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            $(".proOneName").html(datas[2][1]);
            $(".proTwoName").html(datas[7][1]);
            xzcnFiveTable(datas);
            xzcnFivePhoto(datas,5);
        }
    });
    xzcnOther(imId);
    xzcnOut(imId,5);
//    资本市场融资
//    -----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryCapitalFinancing?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            scrzFiveTable(datas);
            scrzFivePhoto(datas,5);
        }
    });
    scrzOther(imId);
    scrzOut(imId,5);
}
function hytzThirdTable(datas){
    $("#investThird1Head").html("");
    $("#investThird1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#investThird1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#investThird1Body").html(content);
}
function hytzFiveTable(datas){
    $("#investFive1Head").html("");
    $("#investFive1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#investFive1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#investFive1Body").html(content);
}
function hytzTenTable(datas){
    $("#investTen1Head").html("");
    $("#investTen1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#investTen1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#investTen1Body").html(content);
}
function hytzSourceFiveTable(datas){
    $("#sourceFive1Head").html("");
    $("#sourceFive1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#sourceFive1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#sourceFive1Body").html(content);
}
function hytzSourceThirdTable(datas){
    $("#sourceThird1Head").html("");
    $("#sourceThird1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#sourceThird1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#sourceThird1Body").html(content);
}
function hytzSourceTenTable(datas){
    $("#sourceTen1Head").html("");
    $("#sourceTen1Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#sourceTen1Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#sourceTen1Body").html(content);
}
function hytzOther(imId){
    $("#indusInfoTab1 li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $("#investThird1Head").html("");
        $("#investThird1Body").html("");
        $("#sourceThird1Head").html("");
        $("#sourceThird1Body").html("");
        $("#sourceFive1Head").html("");
        $("#sourceFive1Body").html("");
        $("#investFive1Head").html("");
        $("#investFive1Body").html("");
        $("#investTen1Head").html("");
        $("#investTen1Body").html("");
        $("#sourceTen1Head").html("");
        $("#sourceTen1Body").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInvestmentFinancing",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                hytzThirdTable(datas);
                hytzThirdPhoto(datas);
                hytzFiveTable(datas);
                hytzFivePhoto(datas,num);
                hytzTenTable(datas,num);
                hytzTenPhoto(datas,num);
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInvestmentFinancingSource",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                hytzSourceThirdTable(datas);
                hytzSourceThirdPhoto(datas);
                hytzSourceFiveTable(datas);
                hytzSourceFivePhoto(datas,num);
                hytzSourceTenTable(datas,num);
                hytzSourceTenPhoto(datas,num);
            }
        });
        hytzOut(imId,num);
    })
}
function hytzOut(imId,num){
    $("#indusInfoOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryInvestment",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#indusInfoOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function hytzSourceThirdPhoto(datas,num){
    var title = "固定资产投资资金来源构成"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var finals = [];
    names.push(datas[1][0],datas[2][0],datas[3][0],datas[4][0],datas[5][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    finals.push({name:datas[1][0],stack: '国家预算金',type:'bar',data:values1},
        {name:datas[2][0],stack: '国家预算金',type:'bar',data:values2},{name:datas[3][0],stack: '国家预算金',type:'bar',data:values3},
        {name:datas[4][0],stack: '国家预算金',type:'bar',data:values4},
        {name:datas[5][0],stack: '国家预算金',type:'bar',data:values5});
    hytzThird1(years,names,finals,title);
}
function hytzSourceFivePhoto(datas,num){
    var title = "固定资产投资资金来源构成"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var finals = [];
    names.push(datas[1][0],datas[2][0],datas[3][0],datas[4][0],datas[5][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    finals.push({name:datas[1][0],stack: '国家预算金',type:'bar',data:values1},
        {name:datas[2][0],stack: '国家预算金',type:'bar',data:values2},
        {name:datas[3][0],stack: '国家预算金',type:'bar',data:values3},
        {name:datas[4][0],stack: '国家预算金',type:'bar',data:values4},
        {name:datas[5][0],stack: '国家预算金',type:'bar',data:values5});
    hytzFive1(years,names,finals,title);

}
function hytzSourceTenPhoto(datas,num){
    var title = "固定资产投资资金来源构成"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var finals = [];
    names.push(datas[1][0],datas[2][0],datas[3][0],datas[4][0],datas[5][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    finals.push({name:datas[1][0],stack: '国家预算金',type:'bar',data:values1},
        {name:datas[2][0],stack: '国家预算金',type:'bar',data:values2},{name:datas[3][0],stack: '国家预算金',type:'bar',data:values3},
        {name:datas[4][0],stack: '国家预算金',type:'bar',data:values4},
        {name:datas[5][0],stack: '国家预算金',type:'bar',data:values5});
    hytzTen1(years,names,finals,title);
}
function hytzFivePhoto(datas,num){
    var title = "固定资产投资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    for(var k=1;k<datas.length;k++){
        names.push(datas[k][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[3].length;n++){
        values2.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values3.push(datas[4][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values4.push(datas[2][n]);
    }
    finals.push({name:datas[1][0],type:'bar',data:values1},
        {name:datas[3][0],type:'bar',data:values2},
        {name:datas[4][0],type:'line',yAxisIndex: 1,data:values3},
        {name:datas[2][0],type:'line',yAxisIndex: 1,data:values4});
    hytzFive(years,names,finals,title);
}
function hytzThirdPhoto(datas,num){
    var title = "固定资产投资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    for(var k=1;k<datas.length;k++){
        names.push(datas[k][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[3].length;n++){
        values2.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values3.push(datas[4][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values4.push(datas[2][n]);
    }
    finals.push({name:datas[1][0],type:'bar',data:values1},
        {name:datas[3][0],type:'bar',data:values2},
        {name:datas[4][0],type:'line',yAxisIndex: 1,data:values3},
        {name:datas[2][0],type:'line',yAxisIndex: 1,data:values4});
    hytzThird(years,names,finals,title);
}
function hytzTenPhoto(datas,num){
    var title = "固定资产投资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    for(var k=1;k<datas.length;k++){
        names.push(datas[k][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[3].length;n++){
        values2.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values3.push(datas[4][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values4.push(datas[2][n]);
    }
    finals.push({name:datas[1][0],type:'bar',data:values1},
        {name:datas[3][0],type:'bar',data:values2},
        {name:datas[4][0],type:'line',yAxisIndex: 1,data:values3},
        {name:datas[2][0],type:'line',yAxisIndex: 1,data:values4});
    hytzTen(years,names,finals,title);
}
function xzcnThirdTable(datas){
    $("#allThird11Head").html("");
    $("#allThird11Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#allThird11Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#allThird11Body").html(content);
}
function xzcnFiveTable(datas){
    $("#allFive11Head").html("");
    $("#allFive11Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#allFive11Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#allFive11Body").html(content);
}
function xzcnTenTable(datas){
    $("#allTen11Head").html("");
    $("#allTen11Body").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#allTen11Head").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#allTen11Body").html(content);
}
function xzcnOther(imId){
    $("#xzcnInfoTab1 li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryIifMainProducts",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                $(".proOneName").html(datas[2][1]);
                $(".proTwoName").html(datas[7][1]);
                xzcnThirdTable(datas);
                xzcnThirdPhoto(datas);
                xzcnFiveTable(datas);
                xzcnFivePhoto(datas,num);
                xzcnTenTable(datas,num);
                xzcnTenPhoto(datas,num);
            }
        });
        xzcnOut(imId,num);
    })
}
function xzcnOut(imId,num){
    $("#zxcnOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryIifMainProducts",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#zxcnOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function xzcnFivePhoto(datas,num){
    var title = $("#proTabFOneName").html()+num+"期图";
    var title2 = $("#proTabFTwoName").html()+num+"期图";
    var years = [];
    var values1 = [];
    var values0 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    var finals2 = [];
    var names = [];
    names.push(datas[4][0],datas[6][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[4].length;m++){
        values0.push(datas[4][m]);
    }
    for(var m=1;m<datas[6].length;m++){
        values1.push(datas[6][m]);
    }
    for(var m=1;m<datas[9].length;m++){
        values3.push(datas[9][m]);
    }
    for(var m=1;m<datas[11].length;m++){
        values4.push(datas[11][m]);
    }
    finals.push({name:datas[4][0],type:'bar',data:values0},{name:datas[6][0],type:'line',data:values1});
    finals2.push({name:datas[9][0],type:'bar',data:values3},{name:datas[11][0],type:'line',data:values4});
    xzcnFive(years,names,finals,title);
    xzcnFiveTwo(years,names,finals2,title2);
}
function xzcnThirdPhoto(datas,num){
    var title = $("#proTabFOneName").html()+num+"期图";
    var title2 = $("#proTabFTwoName").html()+num+"期图";
    var years = [];
    var values1 = [];
    var values0 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    var finals2 = [];
    var names = [];
    names.push(datas[4][0],datas[6][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[4].length;m++){
        values0.push(datas[4][m]);
    }
    for(var m=1;m<datas[6].length;m++){
        values1.push(datas[6][m]);
    }
    for(var m=1;m<datas[9].length;m++){
        values3.push(datas[9][m]);
    }
    for(var m=1;m<datas[11].length;m++){
        values4.push(datas[11][m]);
    }
    finals.push({name:datas[4][0],type:'bar',data:values0},{name:datas[6][0],type:'line',data:values1});
    finals2.push({name:datas[9][0],type:'bar',data:values3},{name:datas[11][0],type:'line',data:values4});
    xzcnThirdEchars(years,names,finals,title);
    xzcnThirdEcharsTwo(years,names,finals2,title2);
}
function xzcnTenPhoto(datas,num){
    var title = $("#proTabFOneName").html()+num+"期图";
    var title2 = $("#proTabFTwoName").html()+num+"期图";
    var years = [];
    var values1 = [];
    var values0 = [];
    var values3 = [];
    var values4 = [];
    var finals = [];
    var finals2 = [];
    var names = [];
    names.push(datas[4][0],datas[6][0]);
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[4].length;m++){
        values0.push(datas[4][m]);
    }
    for(var m=1;m<datas[6].length;m++){
        values1.push(datas[6][m]);
    }
    for(var m=1;m<datas[9].length;m++){
        values3.push(datas[9][m]);
    }
    for(var m=1;m<datas[11].length;m++){
        values4.push(datas[11][m]);
    }
    finals.push({name:datas[4][0],type:'bar',data:values0},{name:datas[6][0],type:'line',data:values1});
    finals2.push({name:datas[9][0],type:'bar',data:values3},{name:datas[11][0],type:'line',data:values4});
    xzcnTen(years,names,finals,title);
    xzcnTenTwo(years,names,finals2,title2);
}
function scrzThirdTable(datas){
    $("#scrzThirdHead").html("");
    $("#scrzThirdBody").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#scrzThirdHead").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#scrzThirdBody").html(content);
}
function scrzFiveTable(datas){
    $("#scrzFiveHead").html("");
    $("#scrzFiveBody").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#scrzFiveHead").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#scrzFiveBody").html(content);
}
function scrzTenTable(datas){
    $("#scrzTenHead").html("");
    $("#scrzTenBody").html("");
    var titles = datas[0];
    var box = '';
    var content = '';
    box += '<tr>';
    for(var m=0;m<titles.length;m++){
        box += '<th>'+titles[m]+'</th>';
    }
    box += '</tr>';
    $("#scrzTenHead").html(box);
    content += '<tr>';
    for(var i=1;i<datas.length;i++){
        for (var n=0;n<datas[i].length;n++){
            content += '<td>'+datas[i][n]+'</td>';
        }
        content += '<tr>';
    }
    $("#scrzTenBody").html(content);
}
function scrzOther(imId){
    $("#scrzTab li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryCapitalFinancing",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                scrzThirdTable(datas);
                scrzThirdPhoto(datas);
                scrzFiveTable(datas);
                scrzFivePhoto(datas,num);
                scrzTenTable(datas,num);
                scrzTenPhoto(datas,num);
            }
        });
        scrzOut(imId,num);
    })
}
function scrzOut(imId,num){
    $("#scrzOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryCapitalFinancing",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#scrzOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function scrzFivePhoto(datas,num){
    var title = "资本市场融资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var values6 = [];
    var values7 = [];
    var values8 = [];
    var values9 = [];
    var values10 = [];
    var values11 = [];
    var values12 = [];
    var values13 = [];
    var values14 = [];
    var finals = [];
    for(var s=1;s< datas.length-2;s++){
        names.push(datas[s][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    for(var t=1;t<datas[6].length;t++){
        values6.push(datas[6][t]);
    }
    for(var p=1;p<datas[7].length;p++){
        values7.push(datas[7][p]);
    }
    for(var q=1;q<datas[8].length;q++){
        values8.push(datas[8][q]);
    }
    for(var u=1;u<datas[9].length;u++){
        values9.push(datas[9][u]);
    }
    for(var v=1;v<datas[10].length;v++){
        values10.push(datas[10][v]);
    }
    for(var m=1;m<datas[11].length;m++){
        values11.push(datas[11][m]);
    }
    for(var n=1;n<datas[12].length;n++){
        values12.push(datas[12][n]);
    }
    for(var j=1;j<datas[13].length;j++){
        values13.push(datas[13][j]);
    }
    for(var k=1;k<datas[14].length;k++){
        values14.push(datas[14][k]);
    }
    finals.push({name:datas[1][0],stack: '家数',type:'bar',data:values1},{name:datas[2][0],stack: '金额',type:'bar',data:values2},
        {name:datas[3][0],stack: '家数',type:'bar',data:values3},{name:datas[4][0],stack: '金额',type:'bar',data:values4},
        {name:datas[5][0],stack: '家数',type:'bar',data:values5},{name:datas[6][0],stack: '金额',type:'bar',data:values6},
        {name:datas[7][0],stack: '家数',type:'bar',data:values7},{name:datas[8][0],stack: '金额',type:'bar',data:values8},
        {name:datas[9][0],stack: '家数',type:'bar',data:values9},{name:datas[10][0],stack: '金额',type:'bar',data:values10},
        {name:datas[11][0],stack: '家数',type:'bar',data:values11},{name:datas[12][0],stack: '金额',type:'bar',data:values12},
        {name:datas[13][0],stack: '家数',type:'bar',data:values13},{name:datas[14][0],stack: '金额',type:'bar',data:values14});
    scrzFive(years,names,finals,title);
}
function scrzThirdPhoto(datas,num){
    var title = "资本市场融资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var values6 = [];
    var values7 = [];
    var values8 = [];
    var values9 = [];
    var values10 = [];
    var values11 = [];
    var values12 = [];
    var values13 = [];
    var values14 = [];
    var finals = [];
    for(var s=1;s< datas.length;s++){
        names.push(datas[s][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    for(var t=1;t<datas[6].length;t++){
        values6.push(datas[6][t]);
    }
    for(var p=1;p<datas[7].length;p++){
        values7.push(datas[7][p]);
    }
    for(var q=1;q<datas[8].length;q++){
        values8.push(datas[8][q]);
    }
    for(var u=1;u<datas[9].length;u++){
        values9.push(datas[9][u]);
    }
    for(var v=1;v<datas[10].length;v++){
        values10.push(datas[10][v]);
    }
    for(var m=1;m<datas[11].length;m++){
        values11.push(datas[11][m]);
    }
    for(var n=1;n<datas[12].length;n++){
        values12.push(datas[12][n]);
    }
    for(var j=1;j<datas[13].length;j++){
        values13.push(datas[13][j]);
    }
    for(var k=1;k<datas[14].length;k++){
        values14.push(datas[14][k]);
    }
    finals.push({name:datas[1][0],stack: '家数',type:'bar',data:values1},{name:datas[2][0],stack: '金额',type:'bar',data:values2},
        {name:datas[3][0],stack: '家数',type:'bar',data:values3},{name:datas[4][0],stack: '金额',type:'bar',data:values4},
        {name:datas[5][0],stack: '家数',type:'bar',data:values5},{name:datas[6][0],stack: '金额',type:'bar',data:values6},
        {name:datas[7][0],stack: '家数',type:'bar',data:values7},{name:datas[8][0],stack: '金额',type:'bar',data:values8},
        {name:datas[9][0],stack: '家数',type:'bar',data:values9},{name:datas[10][0],stack: '金额',type:'bar',data:values10},
        {name:datas[11][0],stack: '家数',type:'bar',data:values11},{name:datas[12][0],stack: '金额',type:'bar',data:values12},
        {name:datas[13][0],stack: '家数',type:'bar',data:values13},{name:datas[14][0],stack: '金额',type:'bar',data:values14});
    scrzThirdEchars(years,names,finals,title);
}
function scrzTenPhoto(datas,num){
    var title = "资本市场融资"+num+"期图";
    var years = [];
    var names = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var values6 = [];
    var values7 = [];
    var values8 = [];
    var values9 = [];
    var values10 = [];
    var values11 = [];
    var values12 = [];
    var values13 = [];
    var values14 = [];
    var finals = [];
    for(var s=1;s< datas.length;s++){
        names.push(datas[s][0]);
    }
    for(var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for(var m=1;m<datas[1].length;m++){
        values1.push(datas[1][m]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var j=1;j<datas[3].length;j++){
        values3.push(datas[3][j]);
    }
    for(var k=1;k<datas[4].length;k++){
        values4.push(datas[4][k]);
    }
    for(var s=1;s<datas[5].length;s++){
        values5.push(datas[5][s]);
    }
    for(var t=1;t<datas[6].length;t++){
        values6.push(datas[6][t]);
    }
    for(var p=1;p<datas[7].length;p++){
        values7.push(datas[7][p]);
    }
    for(var q=1;q<datas[8].length;q++){
        values8.push(datas[8][q]);
    }
    for(var u=1;u<datas[9].length;u++){
        values9.push(datas[9][u]);
    }
    for(var v=1;v<datas[10].length;v++){
        values10.push(datas[10][v]);
    }
    for(var m=1;m<datas[11].length;m++){
        values11.push(datas[11][m]);
    }
    for(var n=1;n<datas[12].length;n++){
        values12.push(datas[12][n]);
    }
    for(var j=1;j<datas[13].length;j++){
        values13.push(datas[13][j]);
    }
    for(var k=1;k<datas[14].length;k++){
        values14.push(datas[14][k]);
    }
    finals.push({name:datas[1][0],stack: '家数',type:'bar',data:values1},{name:datas[2][0],stack: '金额',type:'bar',data:values2},
        {name:datas[3][0],stack: '家数',type:'bar',data:values3},{name:datas[4][0],stack: '金额',type:'bar',data:values4},
        {name:datas[5][0],stack: '家数',type:'bar',data:values5},{name:datas[6][0],stack: '金额',type:'bar',data:values6},
        {name:datas[7][0],stack: '家数',type:'bar',data:values7},{name:datas[8][0],stack: '金额',type:'bar',data:values8},
        {name:datas[9][0],stack: '家数',type:'bar',data:values9},{name:datas[10][0],stack: '金额',type:'bar',data:values10},
        {name:datas[11][0],stack: '家数',type:'bar',data:values11},{name:datas[12][0],stack: '金额',type:'bar',data:values12},
        {name:datas[13][0],stack: '家数',type:'bar',data:values13},{name:datas[14][0],stack: '金额',type:'bar',data:values14});
    scrzTen(years,names,finals,title);
}

function upDown(imId){
    //上下游综合比较
    //-----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInpactGlobal?periodsNumber=5",
        // url: "http://192.168.3.4:8081/industry/getIndustryInpactGlobal?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            upDownFiveTable(datas);
            //----->图形
            upDownFivePhoto(datas,5);
        }
    });
    upDownOther(imId);
    upDownOut(imId,5);
    //上游影响
    //-----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInpactUp?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            upFiveTable(datas);
            //----->图形
            upFivePhoto(datas,5);
        }
    });
    upOther(imId);   //其他的表格和图形
    upOut(imId,5);
//    下游影响
    //-----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInpactDown?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            downFiveTable(datas);
            //----->图形
            downFivePhoto(datas,5);
        }
    });
    downOther(imId);   //其他的表格和图形
    downOut(imId,5);
    //    替代品影响
    //-----》表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryInpactReplacement?periodsNumber=5",
        data:{"imId":imId},
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            replaceFiveTable(datas);
            replaceFivePhoto(datas,5);
        }
    });
    replaceOther(imId);   //其他的表格和图形
    replaceOut(imId,5);
}
function upDownThirdTable(datas){
    $("#upDownCompareThirdHead").html("");
    $("#upDownCompareThirdBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upDownCompareThirdHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        for(var n=0;n<datas[m].length;n++){
            conent += '<td>'+datas[m][n]+'</td>';
        }
        conent += '</tr>';
    }
    $("#upDownCompareThirdBody").html(conent);
}
function upDownFiveTable(datas){
    $("#upDownCompareFiveHead").html("");
    $("#upDownCompareFiveBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upDownCompareFiveHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        for(var n=0;n<datas[m].length;n++){
            conent += '<td>'+datas[m][n]+'</td>';
        }
        conent += '</tr>';
    }
    $("#upDownCompareFiveBody").html(conent);
}
function upDownTenTable(datas){
    $("#upDownCompareTenHead").html("");
    $("#upDownCompareTenBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upDownCompareTenHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        for(var n=0;n<datas[m].length;n++){
            conent += '<td>'+datas[m][n]+'</td>';
        }
        conent += '</tr>';
    }
    $("#upDownCompareTenBody").html(conent);
}
function upDownOther(imId){
    $("#upDownCompareTab li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $("#upDownCompareThirdHead").html("");
        $("#upDownCompareThirdBody").html("");
        $("#upDownCompareFiveHead").html("");
        $("#upDownCompareFiveBody").html("");
        $("#upDownCompareTenHead").html("");
        $("#upDownCompareTenBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInpactGlobal",
            // url: "http://192.168.3.4:8081/industry/getIndustryInpactGlobal",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                upDownThirdTable(datas);         //3期
                upDownFiveTable(datas);         //5期
                upDownTenTable(datas);         //10期
                upDownThirdPhoto(datas,num);
                upDownFivePhoto(datas,num);
                upDownTenPhoto(datas,num);
            }
        });
        upDownOut(imId,num);
    });
}
function upDownOut(imId,num){
    $("#upDownOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryInpactGlobal",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#upDownOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function upDownFivePhoto(datas,num){
    var title = $(".upDownIndusName").html()+"行业上下游影响"+num+"期图";
    var years = [];
    var names = [];
    var value1 = [];
    var value2 = [];
    var value3 = [];
    var values = [];
    var final = [];
    for(var m=1;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    for(var n=1;n<datas.length;n++){
        names.push(datas[n][0]);
    }
    for(var j=1;j<datas[1].length;j++){
        value1.push(datas[1][j]);
    }
    for(var j=1;j<datas[2].length;j++){
        value2.push(datas[2][j]);
    }
    for(var j=1;j<datas[3].length;j++){
        value3.push(datas[3][j]);
    }
    values.push(value1,value2,value3);
    for(var i=0,k=0;i<values.length,k<names.length;i++,k++){
        final.push({name:names[k],type:'line',data:values[i]});
    }
    upDownFive(names,years,final,title);
}
function upDownThirdPhoto(datas,num){
    var title = $(".upDownIndusName").html()+"行业上下游影响"+num+"期图";
    var years = [];
    var names = [];
    var value1 = [];
    var value2 = [];
    var value3 = [];
    var values = [];
    var final = [];
    for(var m=1;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    for(var n=1;n<datas.length;n++){
        names.push(datas[n][0]);
    }
    for(var j=1;j<datas[1].length;j++){
        value1.push(datas[1][j]);
    }
    for(var j=1;j<datas[2].length;j++){
        value2.push(datas[2][j]);
    }
    for(var j=1;j<datas[3].length;j++){
        value3.push(datas[3][j]);
    }
    values.push(value1,value2,value3);
    for(var i=0,k=0;i<values.length,k<names.length;i++,k++){
        final.push({name:names[k],type:'line',data:values[i]});
    }
    upDownThird(names,years,final,title);
}
function upDownTenPhoto(datas,num){
    var title = $(".upDownIndusName").html()+"行业上下游影响"+num+"期图";
    var years = [];
    var names = [];
    var value1 = [];
    var value2 = [];
    var value3 = [];
    var values = [];
    var final = [];
    for(var m=1;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    for(var n=1;n<datas.length;n++){
        names.push(datas[n][0]);
    }
    for(var j=1;j<datas[1].length;j++){
        value1.push(datas[1][j]);
    }
    for(var j=1;j<datas[2].length;j++){
        value2.push(datas[2][j]);
    }
    for(var j=1;j<datas[3].length;j++){
        value3.push(datas[3][j]);
    }
    values.push(value1,value2,value3);
    for(var i=0,k=0;i<values.length,k<names.length;i++,k++){
        final.push({name:names[k],type:'line',data:values[i]});
    }
    upDownTen(names,years,final,title);
}
function upOther(imId){
    $("#upTab li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $("#upThirdHead").html("");
        $("#upThirdBody").html("");
        $("#upFiveHead").html("");
        $("#upFiveBody").html("");
        $("#upTenHead").html("");
        $("#upTenBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInpactUp",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                upThirdTable(datas);         //3期
                upFiveTable(datas);         //5期
                upTenTable(datas);         //10期
                upThirdPhoto(datas,num);
                upFivePhoto(datas,num);
                upTenPhoto(datas,num);
            }
        });
        upOut(imId,num);
    });
}
function upOut(imId,num){
    $("#upOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryInpactUp",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#upOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function upThirdTable(datas){
    $("#upThirdHead").html("");
    $("#upThirdBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upThirdHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';

        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#upThirdBody").html(conent);
}
function upFiveTable(datas){
    $("#upFiveHead").html("");
    $("#upFiveBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upFiveHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#upFiveBody").html(conent);
}
function upTenTable(datas){
    $("#upTenHead").html("");
    $("#upTenBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#upTenHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#upTenBody").html(conent);
}
function upThirdPhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业上游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    upThird(years,finals,names,title);
}
function upFivePhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业上游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    upFive(years,finals,names,title);
}
function upTenPhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业上游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    upTen(years,finals,names,title);
}
function downOther(imId){
    $("#downTab li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $("#downThirdHead").html("");
        $("#downThirdBody").html("");
        $("#downFiveHead").html("");
        $("#downFiveBody").html("");
        $("#downTenHead").html("");
        $("#downTenBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInpactDown",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                downThirdTable(datas);         //3期
                downFiveTable(datas);         //5期
                downTenTable(datas);         //10期
                downThirdPhoto(datas,num);
                downFivePhoto(datas,num);
                downTenPhoto(datas,num);
            }
        });
        downOut(imId,num);
    });
}
function downOut(imId,num){
    $("#downOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryInpactDown",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#downOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function downThirdTable(datas){
    $("#downThirdHead").html("");
    $("#downThirdBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#downThirdHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#downThirdBody").html(conent);
}
function downFiveTable(datas){
    $("#downFiveHead").html("");
    $("#downFiveBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#downFiveHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#downFiveBody").html(conent);
}
function downTenTable(datas){
    $("#downTenHead").html("");
    $("#downTenBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#downTenHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length-1;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    conent += '<tr><td colspan="2">'+datas[datas.length-1][0]+'</td>';
    for(var n=1;n<datas[datas.length-1].length;n++){
        conent += '<td>'+datas[datas.length-1][n]+'</td>';
    }
    conent += '</tr>';
    $("#downTenBody").html(conent);
}
function downThirdPhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业下游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    downThird(years,finals,names,title);
}
function downFivePhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业下游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    downFive(years,finals,names,title);
}
function downTenPhoto(datas,num){
    var title = $(".currentIndusName").html()+"行业下游影响"+num+"期图";
    var years = [];
    for(var m=0;m<datas[0].length;m++){
        years.push(datas[0][m]);
    }
    var names = [];
    var upDatas = [];
    var weight = [];
    var finals = [];
    for(var i=1;i<datas.length-1;i++){
        names.push(datas[i].indexName+'增速');
        datas[i].itemList1.shift();
        upDatas.push(datas[i].itemList1);
    }
    for(var n=1;n<datas[datas.length-1].length;n++){
        weight.push(datas[datas.length-1][n]);
    }
    names.push(datas[datas.length-1][0]);
    upDatas.push(weight);
    for(var j=0;j<names.length,j<upDatas.length;j++){
        finals.push({name:names[j],type:'line',data:upDatas[j]});
    }
    downTen(years,finals,names,title);
}
function replaceOther(imId){
    $("#replaceTab li a").click(function(event) {
        event.stopPropagation();
        //alert($(this).html());
        var num = $(this).html().replace(/期/g, '');
        $("#replaceThirdHead").html("");
        $("#replaceThirdBody").html("");
        $("#replaceFiveHead").html("");
        $("#replaceFiveBody").html("");
        $("#replaceTenHead").html("");
        $("#replaceTenBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryInpactReplacement",
            data:{
                'imId':imId,
                'periodsNumber':num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                replaceThirdTable(datas);         //3期
                replaceFiveTable(datas);         //5期
                replaceTenTable(datas);         //10期
                replaceThirdPhoto(datas,num);
                replaceFivePhoto(datas,num);
                replaceTenPhoto(datas,num);
            }
        });
        replaceOut(imId,num);
    });
}
function replaceOut(imId,num){
    $("#replaceOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryInpactReplacement",
            data:{"imId":imId,"periodsNumber":num},
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
                $("#replaceOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function replaceThirdTable(datas){
    $("#replaceThirdHead").html("");
    $("#replaceThirdBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#replaceThirdHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    $("#replaceThirdBody").html(conent);
}
function replaceFiveTable(datas){
    $("#replaceFiveHead").html("");
    $("#replaceFiveBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#replaceFiveHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    $("#replaceFiveBody").html(conent);
}
function replaceTenTable(datas){
    $("#replaceTenHead").html("");
    $("#replaceTenBody").html("");
    var titles = datas[0];
    var titleBox = "";
    var conent = '';
    titleBox += '<tr><th colspan="2"></th>';
    for(var i=0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#replaceTenHead").html(titleBox);
    conent += '<tr>';
    for(var m=1;m<datas.length;m++){
        conent += '<td>'+datas[m].indexName+'</td>';
        for(var n=0;n<datas[m].itemList1.length;n++){
            conent += '<td><p>'+datas[m].itemList1[n]+'</p><p>'+datas[m].itemList2[n]+'</p></td>';
        }
        conent += '</tr>';
    }
    $("#replaceTenBody").html(conent);
}
function replaceThirdPhoto(datas,num){
    var title = "替代品影响"+num+"期图";
    var years = datas[0];
    var names = [];
    var names1 = [];
    var names2 = [];
    var data1 = [];
    var data2 = [];
    var final = [];
    for (var i=1;i<datas.length;i++){
        names.push(datas[i].indexName+'产量增速',datas[i].indexName+'价格变动');
        names1.push(datas[i].indexName+'产量增速');
        names2.push(datas[i].indexName+'价格变动');
        datas[i].itemList1.splice(0,1);
        datas[i].itemList2.splice(0,1);
    }
    for (var i=1;i<datas.length;i++){
        // names.push(datas[i].indexName);
        data1.push(datas[i].itemList1);
        data2.push(datas[i].itemList2);
    }
    for(var m=0,n=0;m<names1.length,m<names2.length,n<data2.length,n<data1.length;m++,n++){
        final.push({name:names1[m],type:'bar',data:data1[m]},
            {name:names2[m],yAxisIndex: 1,type:'line',data:data2[m]})
    }
    replaceThird(names,years,final,title);
}
function replaceFivePhoto(datas,num){
    var title = "替代品影响"+num+"期图";
    var years = datas[0];
    var names = [];
    var names1 = [];
    var names2 = [];
    var data1 = [];
    var data2 = [];
    var final = [];
    for (var i=1;i<datas.length;i++){
        names.push(datas[i].indexName+'产量增速',datas[i].indexName+'价格变动');
        names1.push(datas[i].indexName+'产量增速');
        names2.push(datas[i].indexName+'价格变动');
        datas[i].itemList1.splice(0,1);
        datas[i].itemList2.splice(0,1);
    }
    for (var i=1;i<datas.length;i++){
        // names.push(datas[i].indexName);
        data1.push(datas[i].itemList1);
        data2.push(datas[i].itemList2);
    }
    for(var m=0,n=0;m<names1.length,m<names2.length,n<data2.length,n<data1.length;m++,n++){
        final.push({name:names1[m],type:'bar',data:data1[m]},
            {name:names2[m],yAxisIndex: 1,type:'line',data:data2[m]})
    }
    replaceFive(names,years,final,title);
}
function replaceTenPhoto(datas,num){
    var title = "替代品影响"+num+"期图";
    var years = datas[0];
    var names = [];
    var names1 = [];
    var names2 = [];
    var data1 = [];
    var data2 = [];
    var final = [];
    for (var i=1;i<datas.length;i++){
        names.push(datas[i].indexName+'产量增速',datas[i].indexName+'价格变动');
        names1.push(datas[i].indexName+'产量增速');
        names2.push(datas[i].indexName+'价格变动');
        datas[i].itemList1.splice(0,1);
        datas[i].itemList2.splice(0,1);
    }
    for (var i=1;i<datas.length;i++){
        // names.push(datas[i].indexName);
        data1.push(datas[i].itemList1);
        data2.push(datas[i].itemList2);
    }
    for(var m=0,n=0;m<names1.length,m<names2.length,n<data2.length,n<data1.length;m++,n++){
        final.push({name:names1[m],type:'bar',data:data1[m]},
            {name:names2[m],yAxisIndex: 1,type:'line',data:data2[m]})
    }
    replaceTen(names,years,final,title);
}

function price(imId){
    var dateType = $("#priceQuarter option[value='0']").text();
//产品价格
// ---》月度表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getindustryPsPrice?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val[0].PsPrice;
            // console.log(datas);
            priceMonTabele(datas);

        }
    });
//--->月度图形
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getindustryPsPriceGraph?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            priceMonPhoto(datas,dateType,6);

        }
    });
    priceMonOtherTable(imId,dateType);  //产品价格6,12,24 表格和图形
    priceYearChangeTable(imId);        //产品价格月度和年度切换 表格和图形
    priceOut(imId,dateType,6);                        //产品价格导出
//价格库存
    var dateType1 = $("#repertoryQuarter option[value='0']").text();
    // ---》月度表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPsStock?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val[0].PsStock;
            // console.log(datas);
            repertoryMonTabele(datas);
        }
    });
//--->月度图形
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPsStockGraph?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            repertoryMonPhoto(datas,dateType1,6);

        }
    });
    repertoryMonOtherTable(imId,dateType1);  //价格库存6,12,24 表格和图形
    repertoryYearChangeTable(imId);        //价格库存月度和年度切换 表格和图形
    repertoryOut(imId,dateType1,6);        //价格库存导出
//    产品运输
    // ---》月度表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPsTransport?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val[0].PsTransport;
            // console.log(datas);
            transportMonTabele(datas);
        }
    });
    //--->月度图形
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getIndustryPsTransportGraph?num=6&dateType=%E6%9C%88%E5%BA%A6",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            transportMonPhoto(datas,dateType1,6);
        }
    });
    transportMonOtherTable(imId,dateType1);  //产品运输,12,24 表格和图形
    transportYearChangeTable(imId);        //产品运输月度和年度切换 表格和图形
    transportOut(imId,dateType1,6);           //产品运输导出
}
function priceYearChangeTable(imId){
    $("#priceQuarter").change(function(){
        var dateType = $("#priceQuarter option:selected").text();
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getindustryPsPrice?num=6",
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success: function(data){
                var datas = data.val[0].PsPrice;
                //console.log(datas);
                priceMonTabele(datas);
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getindustryPsPriceGraph?num=6",
            async:true,
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success:function(data){
                var datas = data.val;
                priceMonPhoto(datas,dateType,6);
            }
        });
        priceMonOtherTable(imId,dateType);
        priceOut(imId,dateType,6);
    });
}
function priceMonTabele(datas){
    $("#priceSixHead").html("");
    $("#priceSixBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#priceSixHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#priceSixBody").html(conent);

}
function priceMonTwoTabele(datas){
    $("#priceTwoHead").html("");
    $("#priceTwoBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#priceTwoHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#priceTwoBody").html(conent);
}
function priceMonTwentyTabele(datas){
    $("#priceTwentyHead").html("");
    $("#priceTwentyBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#priceTwentyHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#priceTwentyBody").html(conent);
}
function priceMonOtherTable(imId,dateType){
    var storage=window.localStorage;
    storage.setItem("dateType",dateType);
    $("#priceTab1 li a").click(function(event){
        event.stopPropagation();
        var num = $(this).html().replace(/期/g, '');
        var dateType =storage.getItem("dateType");
        $("#priceSixHead").html("");
        $("#priceSixBody").html("");
        $("#priceTwoHead").html("");
        $("#priceTwoBody").html("");
        $("#priceTwentyHead").html("");
        $("#priceTwentyBody").html("");
        // $("#priceSixLine").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getindustryPsPrice",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                var datas = data.val[0].PsPrice;
                // console.log(datas);
                priceMonTabele(datas);  //6期表格
                priceMonTwoTabele(datas);  //12期
                priceMonTwentyTabele(datas);  //24期
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getindustryPsPriceGraph",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                priceMonPhoto(datas,dateType,num);  //6期图形
                priceMonTwoPhoto(datas,dateType,num);  //12期
                priceMonTwentyPhoto(datas,dateType,num);  //24期
            }
        });
        priceOut(imId,dateType,num);
    })
}
function priceOut(imId,dateType,num){
    $("#priceOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPsPrice",
            data:{"imId":imId,"dateType":dateType,"num":num},
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
                $("#priceOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function priceMonPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    monSixEchars(final,names,years,title);
}
function priceMonTwoPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    monTwoEchars(final,names,years,title);
}
function priceMonTwentyPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    monTwentyEchars(final,names,years,title);
}
function repertoryYearChangeTable(imId){
    $("#repertoryQuarter").change(function(){
        var dateType = $("#repertoryQuarter option:selected").text();
        //console.log(year);
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryPsStock?num=6",
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success: function(data){
                var datas = data.val[0].PsStock;
                //console.log(datas);
                repertoryMonTabele(datas);
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsStockGraph?num=6",
            async:true,
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                repertoryMonPhoto(datas,dateType,6);

            }
        });
        repertoryMonOtherTable(imId,dateType);
        repertoryOut(imId,dateType,6);
    });
}
function repertoryMonTabele(datas){
    $("#repertorySixHead").html("");
    $("#repertorySixBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#repertorySixHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#repertorySixBody").html(conent);
}
function repertoryMonOtherTable(imId,dateType1){
    var storage=window.localStorage;
    storage.setItem("dateType",dateType1);
    $("#repertoryTab1 li a").click(function(event){
        event.stopPropagation();
        var num = $(this).html().replace(/期/g, '');
        var dateType =storage.getItem("dateType");
        $("#repertorySixHead").html("");
        $("#repertorySixBody").html("");
        $("#repertoryTwoHead").html("");
        $("#repertoryTwoBody").html("");
        $("#repertoryTwentyHead").html("");
        $("#repertoryTwentyBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsStock",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                // console.log(data.val);
                var datas = data.val[0].PsStock;
                // console.log(datas);
                repertoryMonTabele(datas);  //6期表格
                repertoryMonTwoTabele(datas);  //12期
                repertoryMonTwentyTabele(datas);  //24期
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsStockGraph",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                // console.log(data);
                var datas = data.val;
                // console.log(datas);
                repertoryMonPhoto(datas,dateType,num);  //6期图形
                repertoryMonTwoPhoto(datas,dateType,num);  //12期
                repertoryMonTwentyPhoto(datas,dateType,num);  //24期
            }
        });
        repertoryOut(imId,dateType,num);
    })
}
function repertoryOut(imId,dateType,num){
    $("#repertOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPsStock",
            data:{"imId":imId,"dateType":dateType,"num":num},
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
                $("#repertOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function repertoryMonTwoTabele(datas){
    $("#repertoryTwoHead").html("");
    $("#repertoryTwoBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#repertoryTwoHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#repertoryTwoBody").html(conent);
}
function repertoryMonTwentyTabele(datas){
    $("#repertoryTwentyHead").html("");
    $("#repertoryTwentyBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#repertoryTwentyHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#repertoryTwentyBody").html(conent);
}
function repertoryMonPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    repertorySixLineEchars(final,names,years,title);
}
function repertoryMonTwoPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    repertoryTwoLineEchars(final,names,years,title);
}
function repertoryMonTwentyPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    repertoryTwentyLineEchars(final,names,years,title);
}
function transportMonTabele(datas){
    $("#transportSixHead").html("");
    $("#transportSixBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#transportSixHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#transportSixBody").html(conent);
}
function transportMonTwoTabele(datas){
    $("#transportTwoHead").html("");
    $("#transportTwoBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#transportTwoHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#transportTwoBody").html(conent);
}
function transportMonTwentyTabele(datas){
    $("#transportTwentyHead").html("");
    $("#transportTwentyBody").html("");
    var titles = datas[0];
    var titleBox = '';
    var conent = '';
    titleBox += '<tr>';
    for (var i = 0;i<titles.length;i++){
        titleBox += '<th>'+titles[i]+'</th>';
    }
    titleBox += '</tr>';
    $("#transportTwentyHead").html(titleBox);
    for (var i=1;i<datas.length;i++) {
        conent += '<tr>';
        for (var m=0;m<datas[i].length;m++){
            conent += '<td>'+datas[i][m]+'</td>';
        }
        conent += '</tr>';
    }
    $("#transportTwentyBody").html(conent);
}
function transportMonPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    transportSixLineEchars(final,names,years,title);
}
function transportMonTwentyPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    transportTwentyLineEchars(final,names,years,title);
}
function transportMonTwoPhoto(datas,dateType,num){
    var title = $(".currentIndusName").html()+"价格走势"+dateType+num+"期图";
    var years = datas[0].time;
    var lists = datas[1].data;
    var names = [];
    var final = [];
    for(var i=0;i<lists.length;i++){
        names.push(lists[i].name);
        final.push({name:lists[i].name,type:'line',data:lists[i].val});
    }
    transportTwoLineEchars(final,names,years,title);
}
function transportMonOtherTable(imId,dateType1){
    var storage=window.localStorage;
    storage.setItem("dateType",dateType1);
    $("#transportTab1 li a").click(function(event) {
        event.stopPropagation();
        var num = $(this).html().replace(/期/g, '');
        var dateType = storage.getItem("dateType");
        $("#transportSixHead").html("");
        $("#transportSixBody").html("");
        $("#transportTwoHead").html("");
        $("#transportTwoBody").html("");
        $("#transportTwentyHead").html("");
        $("#transportTwentyBody").html("");
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsTransport",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                // console.log(data.val);
                var datas = data.val[0].PsTransport;
                // console.log(datas);
                transportMonTabele(datas);  //6期表格
                transportMonTwoTabele(datas);  //12期
                transportMonTwentyTabele(datas);  //24期
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsTransportGraph",
            async:true,
            data:{
                "imId":imId,
                "dateType":dateType,
                "num":num
            },
            success:function(data){
                // console.log(data);
                var datas = data.val;
                // console.log(datas);
                transportMonPhoto(datas,dateType,num);  //6期图形
                transportMonTwoPhoto(datas,dateType,num);  //12期
                transportMonTwentyPhoto(datas,dateType,num);  //24期
            }
        });
        transportOut(imId,dateType,num);
    })
}
function transportYearChangeTable(imId){
    $("#transportQuarter").change(function(){
        var dateType = $("#transportQuarter option:selected").text();
        //console.log(year);
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryPsTransport?num=6",
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success: function(data){
                var datas = data.val[0].PsTransport;
                //console.log(datas);
                transportMonTabele(datas);
            }
        });
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getIndustryPsTransportGraph?num=6",
            async:true,
            data:{
                'imId':imId,
                'dateType':dateType
            },
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                transportMonPhoto(datas,dateType,6);

            }
        });
        transportMonOtherTable(imId,dateType);
        transportOut(imId,dateType,6);
    });
}
function transportOut(imId,dateType,num){
    $("#transportOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPsTransport",
            data:{"imId":imId,"dateType":dateType,"num":num},
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
                $("#transportOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}

function move(imId){
    //总量值表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getOperationInformation?periods=5",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            fiveTable(datas);
            fiveAllPhoto(datas);
        }
    });
    //增长率表格
    $.ajax({
        type:"get",
        url:"http://"+host+"/industry/getOperationIncrease?periods=5",
        data:{"imId":imId},
        async:true,
        success:function(data){
            var datas = data.val;
            // console.log(datas);
            fiveAddTable(datas);
            fiveAddPhoto(datas);
        }
    });
    moveOtherTable(imId);
    moveAllOut(imId,5);
    moveAddOut(imId,5);
}
function thirdTable(datas){
    $("#allThirdHeader").html("");
    $("#allThirdBody").html("");
    var lists = datas;
    var titles = datas[0];
    var TitleThirdContent = '';
    var TableThirdContent = '';
    TitleThirdContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleThirdContent += '<th>'+titles[i]+'</th>';
    }
    TitleThirdContent += '</tr>';
    $("#allThirdHeader").html(TitleThirdContent);
    for (var i=1;i<lists.length;i++) {
        TableThirdContent += '<tr>';
        for (var m=0;m<lists[i].length;m++){
            TableThirdContent += '<td>'+lists[i][m]+'</td>';
        }
        TableThirdContent += '</tr>';
    }
    $("#allThirdBody").html(TableThirdContent);
}
function fiveTable(datas){
    $("#allFiveHeader").html("");
    $("#allFiveBody").html("");
    var lists = datas;
    var titles = datas[0];
    var TitleThirdContent = '';
    var TableThirdContent = '';
    TitleThirdContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleThirdContent += '<th>'+titles[i]+'</th>';
    }
    TitleThirdContent += '</tr>';
    $("#allFiveHeader").html(TitleThirdContent);
    for (var i=1;i<lists.length;i++) {
        TableThirdContent += '<tr>';
        for (var m=0;m<lists[i].length;m++){
            TableThirdContent += '<td>'+lists[i][m]+'</td>';
        }
        TableThirdContent += '</tr>';
    }
    $("#allFiveBody").html(TableThirdContent);
}
function tenTable(datas){
    $("#allTenHeader").html("");
    $("#allTenBody").html("");
    var lists = datas;
    var titles = datas[0];
    var TitleThirdContent = '';
    var TableThirdContent = '';
    TitleThirdContent += '<tr>';
    for (var i = 0;i<titles.length;i++){
        TitleThirdContent += '<th>'+titles[i]+'</th>';
    }
    TitleThirdContent += '</tr>';
    $("#allTenHeader").html(TitleThirdContent);
    for (var i=1;i<lists.length;i++) {
        TableThirdContent += '<tr>';
        for (var m=0;m<lists[i].length;m++){
            TableThirdContent += '<td>'+lists[i][m]+'</td>';
        }
        TableThirdContent += '</tr>';
    }
    $("#allTenBody").html(TableThirdContent);
}
function thirdAddTable(datas){
    $("#addThirdHeader").html("");
    $("#addThirdBody").html("");
    var listsAdd = datas;
    var addTitles = datas[0];
    var addTitleThirdContent = '';
    var addTableThirdContent = '';
    addTitleThirdContent += '<tr>';
    for (var i = 0;i<addTitles.length;i++){
        addTitleThirdContent += '<th>'+addTitles[i]+'</th>';
    }
    addTitleThirdContent += '</tr>';
    $("#addThirdHeader").html(addTitleThirdContent);
    for (var i=1;i<listsAdd.length;i++) {
        addTableThirdContent += '<tr>';
        for (var m=0;m<listsAdd[i].length;m++){
            addTableThirdContent += '<td>'+listsAdd[i][m]+'</td>';
        }
        addTableThirdContent += '</tr>';
    }
    $("#addThirdBody").html(addTableThirdContent);
}
function fiveAddTable(datas){
    $("#addFiveHeader").html("");
    $("#addFiveBody").html("");
    var listsAdd = datas;
    var addTitles = datas[0];
    var addTitleThirdContent = '';
    var addTableThirdContent = '';
    addTitleThirdContent += '<tr>';
    for (var i = 0;i<addTitles.length;i++){
        addTitleThirdContent += '<th>'+addTitles[i]+'</th>';
    }
    addTitleThirdContent += '</tr>';
    $("#addFiveHeader").html(addTitleThirdContent);
    for (var i=1;i<listsAdd.length;i++) {
        addTableThirdContent += '<tr>';
        for (var m=0;m<listsAdd[i].length;m++){
            addTableThirdContent += '<td>'+listsAdd[i][m]+'</td>';
        }
        addTableThirdContent += '</tr>';
    }
    $("#addFiveBody").html(addTableThirdContent);
}
function tenAddTable(datas){
    $("#addTenHeader").html("");
    $("#addTenBody").html("");
    var listsAdd = datas;
    var addTitles = datas[0];
    var addTitleThirdContent = '';
    var addTableThirdContent = '';
    addTitleThirdContent += '<tr>';
    for (var i = 0;i<addTitles.length;i++){
        addTitleThirdContent += '<th>'+addTitles[i]+'</th>';
    }
    addTitleThirdContent += '</tr>';
    $("#addTenHeader").html(addTitleThirdContent);
    for (var i=1;i<listsAdd.length;i++) {
        addTableThirdContent += '<tr>';
        for (var m=0;m<listsAdd[i].length;m++){
            addTableThirdContent += '<td>'+listsAdd[i][m]+'</td>';
        }
        addTableThirdContent += '</tr>';
    }
    $("#addTenBody").html(addTableThirdContent);
}
function moveOtherTable(imId){
    //总量值
    $("#runInfoTab1 li a").click(function(event){
        event.stopPropagation();
        var num = $(this).html().replace(/期/g, '');
        $("#allThirdHeader").html("");
        $("#allThirdBody").html("");
        $("#addThirdHeader").html("");
        $("#addThirdBody").html("");
        $("#allFiveHeader").html("");
        $("#allFiveBody").html("");
        $("#allTenHeader").html("");
        $("#allTenBody").html("");
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getOperationInformation",
            data:{
                'imId':imId,
                'periods':num
            },
            success: function(data) {
                var datas = data.val;
                // console.log(datas);
                thirdTable(datas);           //3期
                thirdAllPhoto(datas);
                fiveTable(datas);            //5期
                fiveAllPhoto(datas);
                tenTable(datas);            //10期
                tenAllPhoto(datas);

            }
        });
        moveAllOut(imId,num);
    });
    //增长率
    $("#runInfoAddTab1 li a").click(function(event){
        event.stopPropagation();
        var num = $(this).html().replace(/期/g, '');
        //增长率表格
        $.ajax({
            type:"get",
            url:"http://"+host+"/industry/getOperationIncrease",
            data:{"imId":imId,'periods':num},
            async:true,
            success:function(data){
                var datas = data.val;
                // console.log(datas);
                thirdAddTable(datas);
                thirdAddPhoto(datas);
                fiveAddTable(datas);
                fiveAddPhoto(datas);
                tenAddTable(datas);
                tenAddPhoto(datas);
            }
        });
        moveAddOut(imId,num);
    })
}
function moveAllOut(imId,num){
    $("#runAllOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportOperationInformation",
            data:{"imId":imId,"periods":num},
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
                $("#runAllOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function moveAddOut(imId,num){
    $("#runAddOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportOperationIncrease",
            data:{"imId":imId,"periods":num},
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
                $("#runAddOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function thirdAllPhoto(datas){
    var name11 = datas[3][0];
    var name12 = datas[9][0];
    $("#oneAllThirdName1").html(name11);
    $("#oneAllThirdName2").html(name12);
    var one = name11+'3期';
    var Two = name12+'3期';
    var Three = $("#oneAllThirdName3").html()+'3期';
    var years = [];
    var name1 = [];
    var values1 = [];
    var values11 = [];
    var value1 = [];
    var value2 = [];
    var finals1 = [];
    name1.push(datas[3][0],datas[4][0],datas[5][0],datas[6][0]);
    for (var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for (var m=1;m<datas[3].length;m++){
        values1.push(datas[3][m]);
    }
    for (var n=1;n<datas[4].length;n++){
        values11.push(datas[4][n]);
    }
    for (var m=1;m<datas[5].length;m++){
        value1.push(datas[5][m]);
    }
    for (var m=1;m<datas[6].length;m++){
        value2.push(datas[6][m]);
    }
    finals1.push({name:datas[3][0],type:'bar',data:values1},
        {name:datas[4][0],type:'bar',data:values11},
        {name:datas[5][0],yAxisIndex: 1,type:'line',data:value1},
        {name:datas[6][0],yAxisIndex: 1,type:'line',data:value2});
    name1Echars(years,name1,finals1,one);
    var name2 = [];
    var values2 = [];
    var values21 = [];
    var value3 = [];
    var value4 = [];
    var finals2 = [];
    name2.push(datas[9][0],datas[10][0],datas[11][0],datas[12][0]);
    for (var m=1;m<datas[9].length;m++){
        values2.push(datas[9][m]);
    }
    for (var n=1;n<datas[10].length;n++){
        values21.push(datas[10][n]);
    }
    for (var m=1;m<datas[11].length;m++){
        value3.push(datas[11][m]);
    }
    for (var m=1;m<datas[12].length;m++){
        value4.push(datas[12][m]);
    }
    finals2.push({name:datas[9][0],type:'bar',data:values2},
        {name:datas[10][0],type:'bar',data:values21},
        {name:datas[11][0],yAxisIndex: 1,type:'line',data:value3},
        {name:datas[12][0],yAxisIndex: 1,type:'line',data:value4});
    name2Echars(years,name2,finals2,Two);
    var name3 = [];
    var values3 = [];
    var values31 = [];
    var finals3 = [];
    name3.push(datas[13][0],datas[14][0]);
    for (var m=1;m<datas[13].length;m++){
        values3.push(datas[13][m]);
    }
    for (var n=1;n<datas[14].length;n++){
        values31.push(datas[14][n]);
    }
    finals3.push({name:datas[13][0],type:'bar',data:values3},{name:datas[14][0],type:'bar',data:values31});
    name3Echars(years,name3,finals3,Three);
}
function fiveAllPhoto(datas){
    var name11 = datas[3][0];
    var name12 = datas[9][0];
    var one = name11+'5期';
    var Two = name12+'5期';
    var Three = $("#oneAllThirdName3").html()+'5期';
    $("#oneAllFiveName1").html(name11);
    $("#oneAllFiveName2").html(name12);
    var years = [];
    var name1 = [];
    var values1 = [];
    var values11 = [];
    var value1 = [];
    var value2 = [];
    var finals1 = [];
    name1.push(datas[3][0],datas[4][0],datas[5][0],datas[6][0]);
    for (var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for (var m=1;m<datas[3].length;m++){
        values1.push(datas[3][m]);
    }
    for (var n=1;n<datas[4].length;n++){
        values11.push(datas[4][n]);
    }
    for (var m=1;m<datas[5].length;m++){
        value1.push(datas[5][m]);
    }
    for (var m=1;m<datas[6].length;m++){
        value2.push(datas[6][m]);
    }
    finals1.push({name:datas[3][0],type:'bar',data:values1},
        {name:datas[4][0],type:'bar',data:values11},
        {name:datas[5][0],yAxisIndex: 1,type:'line',data:value1},
        {name:datas[6][0],yAxisIndex: 1,type:'line',data:value2});
    name1FiveEchars(years,name1,finals1,one);
    var name2 = [];
    var values2 = [];
    var values21 = [];
    var value3 = [];
    var value4 = [];
    var finals2 = [];
    name2.push(datas[9][0],datas[10][0],datas[11][0],datas[12][0]);
    for (var m=1;m<datas[9].length;m++){
        values2.push(datas[9][m]);
    }
    for (var n=1;n<datas[10].length;n++){
        values21.push(datas[10][n]);
    }
    for (var m=1;m<datas[11].length;m++){
        value3.push(datas[11][m]);
    }
    for (var m=1;m<datas[12].length;m++){
        value4.push(datas[12][m]);
    }
    finals2.push({name:datas[9][0],type:'bar',data:values2},
        {name:datas[10][0],type:'bar',data:values21},
        {name:datas[11][0],yAxisIndex: 1,type:'line',data:value3},
        {name:datas[12][0],yAxisIndex: 1,type:'line',data:value4});
    name2FiveEchars(years,name2,finals2,Two);
    var name3 = [];
    var values3 = [];
    var values31 = [];
    var finals3 = [];
    name3.push(datas[13][0],datas[14][0]);
    for (var m=1;m<datas[13].length;m++){
        values3.push(datas[13][m]);
    }
    for (var n=1;n<datas[14].length;n++){
        values31.push(datas[14][n]);
    }
    finals3.push({name:datas[13][0],type:'bar',data:values3},{name:datas[14][0],type:'bar',data:values31});
    name3FiveEchars(years,name3,finals3,Three);
}
function tenAllPhoto(datas){
    var name11 = datas[3][0];
    var name12 = datas[9][0];
    var one = name11+'10期';
    var Two = name12+'10期';
    var Three = $("#oneAllThirdName3").html()+'10期';
    $("#oneAllTenName1").html(name11);
    $("#oneAllTenName2").html(name12);
    var years = [];
    var name1 = [];
    var values1 = [];
    var values11 = [];
    var value1 = [];
    var value2 = [];
    var finals1 = [];
    name1.push(datas[3][0],datas[4][0],datas[5][0],datas[6][0]);
    for (var i=1;i<datas[0].length;i++){
        years.push(datas[0][i]);
    }
    for (var m=1;m<datas[3].length;m++){
        values1.push(datas[3][m]);
    }
    for (var n=1;n<datas[4].length;n++){
        values11.push(datas[4][n]);
    }
    for (var m=1;m<datas[5].length;m++){
        value1.push(datas[5][m]);
    }
    for (var m=1;m<datas[6].length;m++){
        value2.push(datas[6][m]);
    }
    finals1.push({name:datas[3][0],type:'bar',data:values1},
        {name:datas[4][0],type:'bar',data:values11},
        {name:datas[5][0],yAxisIndex: 1,type:'line',data:value1},
        {name:datas[6][0],yAxisIndex: 1,type:'line',data:value2});
    name1TenEchars(years,name1,finals1,one);
    var name2 = [];
    var values2 = [];
    var values21 = [];
    var value3 = [];
    var value4 = [];
    var finals2 = [];
    name2.push(datas[9][0],datas[10][0],datas[11][0],datas[12][0]);
    for (var m=1;m<datas[9].length;m++){
        values2.push(datas[9][m]);
    }
    for (var n=1;n<datas[10].length;n++){
        values21.push(datas[10][n]);
    }
    for (var m=1;m<datas[11].length;m++){
        value3.push(datas[11][m]);
    }
    for (var m=1;m<datas[12].length;m++){
        value4.push(datas[12][m]);
    }
    finals2.push({name:datas[9][0],type:'bar',data:values2},
        {name:datas[10][0],type:'bar',data:values21},
        {name:datas[11][0],yAxisIndex: 1,type:'line',data:value3},
        {name:datas[12][0],yAxisIndex: 1,type:'line',data:value4});
    name2TenEchars(years,name2,finals2,Two);
    var name3 = [];
    var values3 = [];
    var values31 = [];
    var finals3 = [];
    name3.push(datas[13][0],datas[14][0]);
    for (var m=1;m<datas[13].length;m++){
        values3.push(datas[13][m]);
    }
    for (var n=1;n<datas[14].length;n++){
        values31.push(datas[14][n]);
    }
    finals3.push({name:datas[13][0],type:'bar',data:values3},{name:datas[14][0],type:'bar',data:values31});
    name3TenEchars(years,name3,finals3,Three);
}
function thirdAddPhoto(datas){
    var name = $(".currentIndusName").html()+'行业增长率3期';
    var time =[];
    var names =[];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var final =[];
    for(var m=1;m<datas[0].length;m++){
        time.push(datas[0][m]);
    }
    for(var i=1;i<datas.length;i++){
        names.push(datas[i][0]);
        // final.push({name:datas[i][0],type:'line',data:datas[i].val});
    }
    for(var n=1;n<datas[1].length;n++){
        values1.push(datas[1][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var n=1;n<datas[3].length;n++){
        values3.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values4.push(datas[4][n]);
    }
    for(var n=1;n<datas[5].length;n++){
        values5.push(datas[5][n]);
    }
    final.push({name:datas[1][0],type:'line',data:values1},{name:datas[2][0],type:'line',data:values2},
        {name:datas[3][0],type:'line',data:values3},{name:datas[4][0],type:'line',data:values4},
        {name:datas[5][0],type:'line',data:values5});
    thirdAddEchars(final,time,names,name);
}
function fiveAddPhoto(datas){
    var name = $(".currentIndusName").html()+'行业增长率5期';
    var time =[];
    var names =[];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var final =[];
    for(var m=1;m<datas[0].length;m++){
        time.push(datas[0][m]);
    }
    for(var i=1;i<datas.length;i++){
        names.push(datas[i][0]);
        // final.push({name:datas[i][0],type:'line',data:datas[i].val});
    }
    for(var n=1;n<datas[1].length;n++){
        values1.push(datas[1][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var n=1;n<datas[3].length;n++){
        values3.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values4.push(datas[4][n]);
    }
    for(var n=1;n<datas[5].length;n++){
        values5.push(datas[5][n]);
    }
    final.push({name:datas[1][0],type:'line',data:values1},{name:datas[2][0],type:'line',data:values2},
        {name:datas[3][0],type:'line',data:values3},{name:datas[4][0],type:'line',data:values4},
        {name:datas[5][0],type:'line',data:values5});
    fiveAddEchars(final,time,names,name);
}
function tenAddPhoto(datas){
    var name = $(".currentIndusName").html()+'行业增长率10期';
    var time =[];
    var names =[];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var final =[];
    for(var m=1;m<datas[0].length;m++){
        time.push(datas[0][m]);
    }
    for(var i=1;i<datas.length;i++){
        names.push(datas[i][0]);
        // final.push({name:datas[i][0],type:'line',data:datas[i].val});
    }
    for(var n=1;n<datas[1].length;n++){
        values1.push(datas[1][n]);
    }
    for(var n=1;n<datas[2].length;n++){
        values2.push(datas[2][n]);
    }
    for(var n=1;n<datas[3].length;n++){
        values3.push(datas[3][n]);
    }
    for(var n=1;n<datas[4].length;n++){
        values4.push(datas[4][n]);
    }
    for(var n=1;n<datas[5].length;n++){
        values5.push(datas[5][n]);
    }
    final.push({name:datas[1][0],type:'line',data:values1},{name:datas[2][0],type:'line',data:values2},
        {name:datas[3][0],type:'line',data:values3},{name:datas[4][0],type:'line',data:values4},
        {name:datas[5][0],type:'line',data:values5});
    tenAddEchars(final,time,names,name);
}

function mointer(imId,starTime,endTime){
//累计值/增长值
    $("#ljTime1").val(starTime);
    $("#ljTime2").val(endTime);
    $("#dpTime1").val(starTime);
    $("#dpTime2").val(endTime);
//  ----->  表格
    $.ajax({
        type: "get",
        url: "http://"+host+"/industry/getIndustryCoreDataDetail",
        data:{"imId":imId,"starTime":starTime,"endTime":endTime},
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            tables(datas);
        }
    });
    accountValDown(imId,starTime,endTime);   //累计值下载
    accountAddDown(imId,starTime,endTime);   //累计增长下载
// ----->图表
    $.ajax({
        type: "get",
        url: "http://"+host+"/industry/getIndustryCoreDataIncreaseGraph",
        data:{"imId":imId,"starTime":starTime,"endTime":endTime},
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            mointerPhoto(datas);
        }
    });
    mointerSearch(imId);
//行业政策
    policy(imId);
    policyOut(imId,5);    //行业政策导出
//行业风险点评
    $.ajax({
        type: "get",
        url: "http://"+host+"/industry/getIndustryRiskAssessment",
        data:{"imId":imId,"starTime":starTime,"endTime":endTime},
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            var year = datas[0].createDate;
            var currentYear = year.split("年");
            $("#dpYear").html(currentYear[0]);
            $("#hisBox").html("");
            var box = "";
            for(var i=0;i<datas.length;i++){
                box += '<li><h3><b>'+datas[i].createDate+'</b></h3><div><dt>'+datas[i].content+'</dt></div>';
            }
            box += '</li>';
            $("#hisBox").html(box);

        }
    });
    tipOut(imId,starTime,endTime);    //风险点评导出
    yearSure(imId);
}
function policy(imId){
    $.ajax({
        type: "get",
        url: "http://"+host+"/industry/getIndustryPolicy?periods=5",  //3记得去掉
        data:{"imId":imId},
        success: function(data) {
            var datas = data.val;
            // console.log(datas);
            policyList(datas);
        }
    });
    optionChange(imId);
}
function policyList(datas){
    var spec = datas[0].supportDegree;
    $(".zcSpecial").html(spec);
    $("#zcBody").html("");
    var content = "";
    for(var i=1;i<datas.length;i++){
        content += '<tr><td>'+datas[i].releaseDate+'</td><td class="depart">'+datas[i].releaseDepartment+'</td><td class="eventTip">'+datas[i].eventName+'</td>';
        content += '<td class="conentTip"><a href="#" data-toggle="tooltip" data-placement="top"  title="'+datas[i].mainContent+'">'+datas[i].mainContent+'</a></td><td>'+datas[i].policy+'</td>';
        content += '<td>'+datas[i].influenceDegree+'</td>';
        content += '<td style="display: none;">'+datas[i].attachment+'</td>';
        content += '<td><span class="policyDown">下载文件</span></td>';
        // content += '<br/><span class="reportPreview">文件预览</span></td>';
    }
    content += '</tr>';
    $("#zcBody").html(content);
    $(".policyDown").click(function(){
        var datas = $(this).parent("td").prev("td").html();
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
    })
}
function optionChange(imId){
    $("#zcNum").change(function(){
        var periods = $("#zcNum option:selected").val();
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryPolicy",
            data:{"imId":imId,"periods":periods},
            success: function(data) {
                var datas = data.val;
                // console.log(datas);
                policyList(datas);
            }
        });
        policyOut(imId,periods);
    })
}
function policyOut(imId,periods){
    $("#policyOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryPolicy",
            data:{"imId":imId,"periods":periods},
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
                $("#policyOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function tables(datas){
    $("#valTitle").html("");
    $("#valBody").html("");
    $("#addTitle").html("");
    $("#addBody").html("");
    var data1= datas[0].val;
    var data2= datas[1].val;
    var valTitlt = data1[0];
    var addTitle = data2[0];
    // console.log(data1);
    var valTitltBox='';
    var valBox = "";
    var addTitltBox='';
    var addBox = "";
    //累计值
    valTitltBox += '<tr>';
    for(var i=0;i<valTitlt.length;i++){
        valTitltBox += '<th>'+valTitlt[i]+'</th>';
    }
    valTitltBox += '</tr>';
    $("#valTitle").html(valTitltBox);
    for(var m=1;m<data1.length;m++){
        valBox += '<tr>';
        for(var n=0;n<data1[m].length;n++){
            valBox += '<td>'+data1[m][n]+'</td>';
        }
    }
    valBox += '</tr>';
    $("#valBody").html(valBox);
    //累计增长
    addTitltBox += '<tr>';
    for(var i=0;i<addTitle.length;i++){
        addTitltBox += '<th>'+addTitle[i]+'</th>';
    }
    addTitltBox += '</tr>';
    $("#addTitle").html(addTitltBox);
    for(var m=1;m<data2.length;m++){
        addBox += '<tr>';
        for(var n=0;n<data2[m].length;n++){
            addBox += '<td>'+data2[m][n]+'</td>';
        }
    }
    addBox += '</tr>';
    $("#addBody").html(addBox);


}
function mointerPhoto(datas){
    $("#productOneName").html(datas[0].tittle);
    $("#productTwoName").html(datas[1].tittle);
    $("#productThreeName").html(datas[2].tittle);
    var vals1 = datas[0].val;
    // console.log(vals1);
    var years1 = vals1[0].year;
    var names1 = [];
    var finals1 = [];
    for(var m=1;m<vals1.length;m++){
        names1.push(vals1[m].name);

    }
    finals1.push({name:vals1[1].name,type:'bar',data:vals1[1].data},
        {name:vals1[2].name,type:'line',yAxisIndex: 1,data:vals1[2].data});
    var nameOne = datas[0].tittle;
    mointerOne(years1,names1,finals1,nameOne);
    var vals2 = datas[1].val;
    // console.log(vals2);
    var years2 = vals2[0].year;
    var names2 = [];
    var finals2 = [];
    for(var m=1;m<vals2.length;m++){
        names2.push(vals2[m].name);

    }
    finals2.push({name:vals2[1].name,type:'bar',data:vals2[1].data},
        {name:vals2[2].name,type:'line',yAxisIndex: 1,data:vals2[2].data});
    var nameTwo = datas[1].tittle;
    mointerTwo(years2,names2,finals2,nameTwo);
    var vals3 = datas[2].val;
    var years3 = vals3[0].year;
    var names3 = [];
    var finals3 = [];
    for(var m=1;m<vals3.length;m++){
        names3.push(vals3[m].name);
    }
    finals3.push({name:vals3[1].name,type:'bar',data:vals3[1].data},
        {name:vals3[3].name,type:'bar',data:vals3[3].data},
        {name:vals3[2].name,yAxisIndex: 1,type:'line',data:vals3[2].data},
        {name:vals3[4].name,yAxisIndex: 1,type:'line',data:vals3[4].data});
    var nameThree = datas[2].tittle;
    mointerThree(years3,names3,finals3,nameThree);
}
function mointerSearch(imId){
    $("#mointerSure").click(function(){
        var year1 = $("#ljTime1").val();
        var year2 = $("#ljTime2").val();
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryCoreDataDetail",
            data: {
                "imId":imId,
                "starTime": year1,
                "endTime": year2
            },
            success: function(data) {
                var datas = data.val;
                // console.log(datas);
                tables(datas);
            }
        });
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryCoreDataIncreaseGraph",
            data: {
                "imId":imId,
                "starTime": year1,
                "endTime": year2
            },
            success: function(data) {
                var datas = data.val;
                // console.log(datas);
                mointerPhoto(datas);

            }
        });
        accountValDown(imId,year1,year2);
        accountAddDown(imId,year1,year2);
    })
}
function yearSure(imId){
    $("#dpSure").click(function(){
        var starTime = $("#dpTime1").val();
        var endTime = $("#dpTime2").val();
        $.ajax({
            type: "get",
            url: "http://"+host+"/industry/getIndustryRiskAssessment",
            // url:"http://192.168.3.4:8081/industry/getIndustryRiskAssessment",
            data:{"imId":imId,"starTime":starTime,"endTime":endTime},
            success: function(data) {
                var datas = data.val;
                // console.log(datas);
                var year = datas[0].createDate;
                var currentYear = year.split("年");
                $("#dpYear").html(currentYear[0]);
                $("#hisBox").html("");
                var box = "";
                for(var i=0;i<datas.length;i++){
                    box += '<li><h3><b>'+datas[i].createDate+'</b></h3><div><dt>'+datas[i].content+'</dt></div>';
                }
                box += '</li>';
                $("#hisBox").html(box);

            }
        });
        tipOut(imId,starTime,endTime);
    })
}
function tipOut(imId,starTime,endTime){
    $("#tipOut").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryRiskeAssessment?imXjCategoryName=%E6%88%BF%E5%9C%B0%E4%BA%A7",
            data:{"imId":imId,"starTime":starTime,"endTime":endTime},
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
                $("#tipOut").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function accountValDown(imId,starTime,endTime){
    $("#accountValDown").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportCumulativeValue",
            data:{"imId":imId,"starTime":starTime,"endTime":endTime},
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
                $("#accountValDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}
function accountAddDown(imId,starTime,endTime){
    $("#accountAddDown").one("click",function(){
        $.ajax({
            type: "get",
            url: "http://" + host + "/industryRiskExport/exportIndustryCoreDataIncrease",
            data:{"imId":imId,"starTime":starTime,"endTime":endTime},
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
                $("#accountAddDown").html('<a href="'+datas+'" download="">下载数据</a>');
            }
        })
    })
}

function look(){
    $("#valLook").click(function(){
        $(".listData").css("display",'none');
        $(".ljValBackList").css("display",'block');
    });
    $("#backList").click(function(){
        $(".ljValBackList").css("display",'none');
        $(".listData").css("display",'block');
    })
    // $("#valLook2").click(function(){
    //     $(".listData").css("display",'none');
    //     $(".ljAddBackList").css("display",'block');
    // });
    // $("#backList2").click(function(){
    //     $(".ljAddBackList").css("display",'none');
    //     $(".listData").css("display",'block');
    // })
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
    var imId = $.getUrlParam('seId');
    var nowName = $.getUrlParam('nowName');
    $(".currentIndusName").html(nowName);
    $(".upDownIndusName").html(nowName);
    function show(){
        var mydate = new Date();
        mydate.setFullYear(mydate.getFullYear()-2);
        var str = "" + mydate.getFullYear();
        // str += (mydate.getMonth()+1) + "月";
//                str += mydate.getDate() + "日";
        return str;
    }
    var nowYear = show();
    var preYear = nowYear-5;
    $("#dateZqx2").val(nowYear);
    $("#dateZqx1").val(preYear);
    function now(){
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
        var str = "" + year + "-";
        str += preMouth;
        return str;
    }
    function preMounth() {
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = mydate.getMonth();
        var preMouth = 0;
        if(month>7){
            preMouth = month-7;
        }else{
            preMouth = 12+(month-7);
            year = mydate.getFullYear()-1;
        }
        var str = "" + year + "-";
        str += preMouth;
        return str;
    }
    var endTime = now();
    var starTime = preMounth();
    look();    //可视化
    mointer(imId,starTime,endTime);  //核心监测数据
    move(imId);    //运行信息
    price(imId);   //价格库存
    upDown(imId);  //上下游影响
    indus(imId);   //行业融投资
    money(imId);   //财务表现
    danger(imId,nowYear,preYear);   //风险特征
    grade(imId);     //行业百强

});
