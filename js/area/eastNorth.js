var width = (document.body.clientWidth)*(98/100)*(30/100)+'px';
var height = 250+'px';
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
        },
        data: ['齐齐哈尔市','大庆市']
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
        {
            name: '齐齐哈尔市',
            type: 'line',
            data: [1, 3, 9,21,16, 27,76, 81, 112,247,456, 741]
        },
        {
            name: '大庆市',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256,123,456,546]
        }
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


























function index(){
    var test = $("#areaQuarter option").val();
    console.log(test);
}






$(function(){
    index();

});