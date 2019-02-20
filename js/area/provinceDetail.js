var width = (document.body.clientWidth)*(98/100)*(39/100)+'px';
var height = 400+'px';
var height1 = 200+"px";
var resizeCss = function() {
    $("#peopleCountLine").css("width", width).css("height", height);
    $("#thirdCountLine").css("width", width).css("height", height);
    $("#perCapitaLine").css("width", width).css("height", height);
    $("#lifeMoneyLine").css("width", width).css("height", height);
    $("#lifePayLine").css("width", width).css("height", height);
    $("#productValueLine").css("width", width).css("height", height);
    $("#productAssetsLine").css("width", width).css("height", height);
    $("#productProfitLine").css("width", width).css("height", height);
    $("#productIndexLine").css("width", width).css("height", height);
    $("#fixInvestmentLine").css("width", width).css("height", height);
    $("#fixRealtyLine").css("width", width).css("height", height);
    $("#fixFinishLine").css("width", width).css("height", height);
    $("#fixAreaLine").css("width", width).css("height", height);
    $("#fixSalesLine").css("width", width).css("height", height1);
    $("#fixSalesPriceLine").css("width", width).css("height", height1);
    $("#fixBasicsLine").css("width", width).css("height", height);
    $("#peoplePriceMountLine").css("width", width).css("height", height);
    $("#peoplePriceRatioLine").css("width", width).css("height", height);
    $("#peoplePriceTownLine").css("width", width).css("height", height);
    $("#peoplePriceIndexLine").css("width", width).css("height", height);
    $("#peoplePriceManagerLine").css("width", width).css("height", height);
    $("#socialGoodsLine").css("width", width).css("height", height);
    $("#tradeTotalLine").css("width", width).css("height", height);
    $("#tradeCapitalLine").css("width", width).css("height", height);
    $("#tradeRMBLine").css("width", width).css("height", height);
    $("#financialRevenueLine").css("width", width).css("height", height);
    $("#financialFundLine").css("width", width).css("height", height);
    $("#financialOutLine").css("width", width).css("height", height);
    $("#financialDebtLine").css("width", width).css("height", height1);
    $("#financialDebtRadioLine").css("width", width).css("height", height1);
    $("#financialDepositLine").css("width", width).css("height", height);
    $("#financialCompanyLine").css("width", width).css("height", height);
    // $("#financialSupplyLine").css("width", width).css("height", height);
    $("#electricityLine").css("width", width).css("height", height);
    $("#protectionEnvironmentalLine").css("width", width).css("height", height);
    $("#protectionEnergyLine").css("width", width).css("height", height);
    $("#technologyResearchLine").css("width", width).css("height", height);
    $("#technologyNewLine").css("width", width).css("height", height);
    $("#technologyPatentLine").css("width", width).css("height", height);
    $("#technologyContractLine").css("width", width).css("height", height);
    $("#agricultureLine").css("width", width).css("height", height);
    $("#trafficLine").css("width", width).css("height", height1);
    $("#trafficTravelLine").css("width", width).css("height", height1);
    $("#travalLine").css("width", width).css("height", height);
    $("#educationLine").css("width", width).css("height", height1);
    $("#educationHospitalLine").css("width", width).css("height", height1);
};
resizeCss();
var peopleCountLine = echarts.init(document.getElementById('peopleCountLine'));
var thirdCountLine = echarts.init(document.getElementById('thirdCountLine'));
var perCapitaLine = echarts.init(document.getElementById('perCapitaLine'));
var lifeMoneyLine = echarts.init(document.getElementById('lifeMoneyLine'));
var lifePayLine = echarts.init(document.getElementById('lifePayLine'));
var productValueLine = echarts.init(document.getElementById('productValueLine'));
var productAssetsLine = echarts.init(document.getElementById('productAssetsLine'));
var productProfitLine = echarts.init(document.getElementById('productProfitLine'));
var productIndexLine = echarts.init(document.getElementById('productIndexLine'));
var fixInvestmentLine = echarts.init(document.getElementById('fixInvestmentLine'));
var fixRealtyLine = echarts.init(document.getElementById('fixRealtyLine'));
var fixFinishLine = echarts.init(document.getElementById('fixFinishLine'));
var fixAreaLine = echarts.init(document.getElementById('fixAreaLine'));
var fixSalesLine = echarts.init(document.getElementById('fixSalesLine'));
var fixSalesPriceLine = echarts.init(document.getElementById('fixSalesPriceLine'));
var fixBasicsLine = echarts.init(document.getElementById('fixBasicsLine'));
var peoplePriceMountLine = echarts.init(document.getElementById('peoplePriceMountLine'));
var peoplePriceRatioLine = echarts.init(document.getElementById('peoplePriceRatioLine'));
var peoplePriceTownLine = echarts.init(document.getElementById('peoplePriceTownLine'));
var peoplePriceIndexLine = echarts.init(document.getElementById('peoplePriceIndexLine'));
var peoplePriceManagerLine = echarts.init(document.getElementById('peoplePriceManagerLine'));
var socialGoodsLine = echarts.init(document.getElementById('socialGoodsLine'));
var tradeTotalLine = echarts.init(document.getElementById('tradeTotalLine'));
var tradeCapitalLine  = echarts.init(document.getElementById('tradeCapitalLine'));
var tradeRMBLine  = echarts.init(document.getElementById('tradeRMBLine'));
var financialRevenueLine  = echarts.init(document.getElementById('financialRevenueLine'));
var financialFundLine = echarts.init(document.getElementById('financialFundLine'));
var financialOutLine = echarts.init(document.getElementById('financialOutLine'));
var financialDebtLine = echarts.init(document.getElementById('financialDebtLine'));
var financialDebtRadioLine = echarts.init(document.getElementById('financialDebtRadioLine'));
var financialDepositLine = echarts.init(document.getElementById('financialDepositLine'));
var financialCompanyLine= echarts.init(document.getElementById('financialCompanyLine'));
// var financialSupplyLine = echarts.init(document.getElementById('financialSupplyLine'));
var electricityLine = echarts.init(document.getElementById('electricityLine'));
var protectionEnvironmentalLine = echarts.init(document.getElementById('protectionEnvironmentalLine'));
var protectionEnergyLine = echarts.init(document.getElementById('protectionEnergyLine'));
var technologyResearchLine = echarts.init(document.getElementById('technologyResearchLine'));
var technologyNewLine = echarts.init(document.getElementById('technologyNewLine'));
var technologyPatentLine = echarts.init(document.getElementById('technologyPatentLine'));
var technologyContractLine = echarts.init(document.getElementById('technologyContractLine'));
var agricultureLine = echarts.init(document.getElementById('agricultureLine'));
var trafficLine = echarts.init(document.getElementById('trafficLine'));
var trafficTravelLine = echarts.init(document.getElementById('trafficTravelLine'));
var travalLine = echarts.init(document.getElementById('travalLine'));
var educationLine = echarts.init(document.getElementById('educationLine'));
var educationHospitalLine = echarts.init(document.getElementById('educationHospitalLine'));
var option = optionThird = optionperCapital= optionlifeMoney =optionlifePay=
    optionproductValue=optionproductAssets=optionproductProfit=optionproductIndex=
    optionfixInvestment=optionfixRealty=optionfixFinish=optionfixArea=optionfixSales=
  optionfixSalesPrice=optionfixBasics=optionpeoplePriceMount=optionpeoplePriceRatio=
 optionpeoplePriceTown=optionpeoplePriceIndex =optionpeoplePriceManager=optionsocialGoods=
optiontradeTotal=optiontradeCapital=optiontradeRMB=optionfinancialRevenue=optionfinancialFund=
optionfinancialOut=optionfinancialDebt=optionfinancialDebtRadio=optionfinancialDeposit=
optionfinancialCompany=optionfinancialSupply=optionelectricity=optionprotectionEnvironmental=
optionprotectionEnergy=optiontechnologyResearch=optiontechnologyNew=optiontechnologyPatent=
optiontechnologyContract=optionagriculture=optiontraffic=optiontrafficTravel=optiontraval=
optioneducation=optioneducationHospital=null;
//折柱混合
option = optionperCapital=optionlifeMoney =optionlifePay=optionproductValue=
    optionproductAssets=optionproductProfit=optionfixInvestment=optionfixRealty=
    optionfixFinish=optionfixArea=optionfixSales=optionfixBasics=optionpeoplePriceMount=
 optionpeoplePriceTown=optionsocialGoods=optiontradeTotal=optiontradeCapital=
 optionfinancialRevenue=optionfinancialFund=optionfinancialOut=optionfinancialDebt=
 optionfinancialDeposit=optionfinancialCompany=optionfinancialSupply=optionelectricity=
optionprotectionEnvironmental=optionprotectionEnergy=optiontechnologyResearch=optiontechnologyNew=
 optiontechnologyContract=optionagriculture=optiontraval= {
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
        data: ["国内生产总值现价","国内生产总值不变价","第一产业增加值指数"]
    },
    xAxis: [
        {
            type: 'category',
            data: ['2016','2015','2014','2013','2012'],
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
    series: [
        // {
        //     name:'国内生产总值现价',
        //     type:'bar',
        //     data:[2.0, 4.9, 7.0, 23.2, 25.6]
        // },
        // {
        //     name:'国内生产总值不变价',
        //     type:'bar',
        //     data:[2.6, 5.9, 9.0, 26.4, 28.7]
        // },
        // {
        //     name:'第一产业增加值指数',
        //     type:'line',
        //     yAxisIndex: 1,
        //     data:[2.0, 2.2, 3.3, 4.5, 6.3]
        // }
    ]
};
//柱状堆叠
optionThird = {
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
        data:['第一产业增加值占比','第二产业增加值占比','第三产业增加值占比']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2016','2015','2014','2013','2012'],
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
    series: [
        {
            name:'第一产业增加值占比',
            type:'bar',
            stack: '第一产业增加值占比',
            barWidth : 10,
            data:[2.0, 2.2, 3.3, 4.5, 6.3]
        },
        {
            name:'第二产业增加值占比',
            type:'bar',
            stack: '第一产业增加值占比',
            data:[3.0, 2.0, 1.3, 3.5, 4.3]
        },
        {
            name:'第三产业增加值占比',
            type:'bar',
            stack: '第一产业增加值占比',
            data:[1.0, 1.2, 3.3, 4.5, 6.4]
        }
    ]
};
//折线
optionproductIndex =optionfixSalesPrice=optionpeoplePriceRatio=optionpeoplePriceIndex=
optionpeoplePriceManager=optiontradeRMB=optionfinancialDebtRadio= {
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
        data: ["工业产品产销率","资产负债率","亏损企业占比"]
    },
    xAxis: [
        {
            type: 'category',
            data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            // min: 40,
            // max: 110,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
    {
        name:'工业产品产销率',
        type:'line',
        data:[2.0, 4.9, 7.0, 23.2, 25.6]
    },
    {
        name:'资产负债率',
        type:'line',
        data:[2.6, 5.9, 9.0, 26.4, 28.7]
    },
    {
        name:'亏损企业占比',
        type:'line',
        data:[2.0, 2.2, 3.3, 4.5, 6.3]
    }
]
};
//柱状
optiontechnologyPatent=optiontraffic=optiontrafficTravel=optioneducation=optioneducationHospital= {
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
        data: ["工业产品产销率","资产负债率","亏损企业占比"]
    },
    xAxis: [
        {
            type: 'category',
            data: ['2016','2015','2014','2013','2012'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            // min: 40,
            // max: 110,
            // interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'工业产品产销率',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6]
        },
        {
            name:'资产负债率',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7]
        },
        {
            name:'亏损企业占比',
            type:'bar',
            data:[2.0, 2.2, 3.3, 4.5, 6.3]
        }
    ]
};
peopleCountLine.clear();
peopleCountLine.setOption(option,true);
thirdCountLine.clear();
thirdCountLine.setOption(optionThird,true);
perCapitaLine.clear();
perCapitaLine.setOption(optionperCapital,true);
lifeMoneyLine.clear();
lifeMoneyLine.setOption(optionlifeMoney,true);
lifePayLine.clear();
lifePayLine.setOption(optionlifePay,true);
productValueLine.clear();
productValueLine.setOption(optionproductValue,true);
productAssetsLine.clear();
productAssetsLine.setOption(optionproductAssets,true);
productProfitLine.clear();
productProfitLine.setOption(optionproductAssets,true);
productIndexLine.clear();
productIndexLine.setOption(optionproductIndex,true);
fixInvestmentLine.clear();
fixInvestmentLine.setOption(optionfixInvestment,true);
fixRealtyLine.clear();
fixRealtyLine.setOption(optionfixRealty,true);
fixFinishLine.clear();
fixFinishLine.setOption(optionfixFinish,true);
fixAreaLine.clear();
fixAreaLine.setOption(optionfixArea,true);
fixSalesLine.clear();
fixSalesLine.setOption(optionfixSales,true);
fixSalesPriceLine.clear();
fixSalesPriceLine.setOption(optionfixSalesPrice,true);
fixBasicsLine.clear();
fixBasicsLine.setOption(optionfixBasics,true);
peoplePriceMountLine.clear();
peoplePriceMountLine.setOption(optionpeoplePriceMount,true);
peoplePriceRatioLine.clear();
peoplePriceRatioLine.setOption(optionpeoplePriceRatio,true);
peoplePriceTownLine.clear();
peoplePriceTownLine.setOption(optionpeoplePriceTown,true);
peoplePriceIndexLine.clear();
peoplePriceIndexLine.setOption(optionpeoplePriceIndex,true);
peoplePriceManagerLine.clear();
peoplePriceManagerLine.setOption(optionpeoplePriceManager,true);
socialGoodsLine.clear();
socialGoodsLine.setOption(optionsocialGoods,true);
tradeTotalLine.clear();
tradeTotalLine.setOption(optiontradeTotal,true);
tradeCapitalLine.clear();
tradeCapitalLine.setOption(optiontradeCapital,true);
tradeRMBLine.clear();
tradeRMBLine.setOption(optiontradeRMB,true);
financialRevenueLine.clear();
financialRevenueLine.setOption(optionfinancialRevenue,true);
financialFundLine.clear();
financialFundLine.setOption(optionfinancialFund,true);
financialOutLine.clear();
financialOutLine.setOption(optionfinancialOut,true);
financialDebtLine.clear();
financialDebtLine.setOption(optionfinancialDebt,true);
financialDebtRadioLine.clear();
financialDebtRadioLine.setOption(optionfinancialDebtRadio,true);
financialDepositLine.clear();
financialDepositLine.setOption(optionfinancialDeposit,true);
financialCompanyLine.clear();
financialCompanyLine.setOption(optionfinancialCompany,true);
electricityLine.clear();
electricityLine.setOption(optionelectricity,true);
protectionEnvironmentalLine.clear();
protectionEnvironmentalLine.setOption(optionprotectionEnvironmental,true);
protectionEnergyLine.clear();
protectionEnergyLine.setOption(optionprotectionEnergy,true);
technologyResearchLine.clear();
technologyResearchLine.setOption(optiontechnologyResearch,true);
technologyNewLine.clear();
technologyNewLine.setOption(optiontechnologyNew,true);
technologyPatentLine.clear();
technologyPatentLine.setOption(optiontechnologyPatent,true);
technologyContractLine.clear();
technologyContractLine.setOption(optiontechnologyContract,true);
agricultureLine.clear();
agricultureLine.setOption(optionagriculture,true);
trafficLine.clear();
trafficLine.setOption(optionagriculture,true);
trafficTravelLine.clear();
trafficTravelLine.setOption(optionagriculture,true);
travalLine.clear();
travalLine.setOption(optiontraval,true);
educationLine.clear();
educationLine.setOption(optioneducation,true);
educationHospitalLine.clear();
educationHospitalLine.setOption(optioneducation,true);
//Echars自适应浏览器大小
window.onresize = function() {
    resizeCss();
    peopleCountLine.resize();
    thirdCountLine.resize();
    lifeMoneyLine.resize();
    lifePayLine.resize();
    productValueLine.resize();
    productAssetsLine.resize();
    productProfitLine.resize();
    productIndexLine.resize();
    fixInvestmentLine.resize();
    fixRealtyLine.resize();
    fixFinishLine.resize();
    fixAreaLine.resize();
    fixSalesLine.resize();
    fixSalesPriceLine.resize();
    fixBasicsLine.resize();
    peoplePriceMountLine.resize();
    peoplePriceRatioLine.resize();
    peoplePriceTownLine.resize();
    peoplePriceIndexLine.resize();
    peoplePriceManagerLine.resize();
    socialGoodsLine.resize();
    tradeTotalLine.resize();
    tradeCapitalLine.resize();
    tradeRMBLine.resize();
    financialRevenueLine.resize();
    financialFundLine.resize();
    financialOutLine.resize();
    financialDebtLine.resize();
    financialDebtRadioLine.resize();
    financialDepositLine.resize();
    financialCompanyLine.resize();
    electricityLine.resize();
    protectionEnvironmentalLine.resize();
    protectionEnergyLine.resize();
    technologyResearchLine.resize();
    technologyNewLine.resize();
    technologyPatentLine.resize();
    technologyContractLine.resize();
    agricultureLine.resize();
    trafficLine.resize();
    trafficTravelLine.resize();
    travalLine.resize();
    educationLine.resize();
    educationHospitalLine.resize();
};
//----------------------------------------
function peopleAllLine(years,names,finals,title){
    peopleCountLine.setOption({
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
function peopleThirdLine(title,years,names,finals){
    thirdCountLine.setOption({
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
function peoplePerCapitaLine(title,names,years,finals){
    perCapitaLine.setOption({
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





function areaGrade(){
    gradeTable();
    finalCount();
}
function gradeTable(){
    $("#gradeFirstBody tr td:nth-child(6)").click(function(){
        $(".gradeConent").css("display",'none');
        $("#gradeTab").css("display",'block');
        $("#gradeTabContent").css("display",'block');
        // var seId = $(this).prev("td").html();
        // var name = $(this).prevAll(".rankName").html();
        // // alert(seId);
        // province(seId,name);
        // billboardList(seId);
    });
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
    })
}

function life(){
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getPeopleLife?regId=10&periods=3&dateType=3",
        async: true,
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                lifeTable(datas);
            }else{
                alert(data.message);
            }
        }
    });
}
function lifeTable(datas){
    console.log(datas);
}

function choose(){
    $(".choose").click(function(){
        var val=$('input:radio[name="choose"]:checked').val();
        if(val==null){
            alert("什么也没选中!");
            return false;
        }else if(val==0){
            $("#countChoose").css("display","block");
            $("#yearChoose").css("display","none");
            $("#thirdCountChoose").css("display","block");
            $("#thirdYearChoose").css("display","none");
            $("#perCapitaChoose").css("display","block");
            $("#perCapitaYearChoose").css("display","none");
            $("#lifeMoneyChoose").css("display","block");
            $("#lifeMoneyYearChoose").css("display","none");
            $("#lifePayChoose").css("display","block");
            $("#lifePayYearChoose").css("display","none");
            $("#productValueChoose").css("display","block");
            $("#productValueYearChoose").css("display","none");
            $("#productAssetsChoose").css("display","block");
            $("#productAssetsYearChoose").css("display","none");
            $("#productProfitChoose").css("display","block");
            $("#productProfitYearChoose").css("display","none");
            $("#productIndexChoose").css("display","block");
            $("#productIndexYearChoose").css("display","none");
            $("#fixInvestmentChoose").css("display","block");
            $("#fixInvestmentYearChoose").css("display","none");
            $("#fixRealtyChoose").css("display","block");
            $("#fixRealtyYearChoose").css("display","none");
            $("#fixFinishChoose").css("display","block");
            $("#fixFinishYearChoose").css("display","none");
            $("#fixAreaChoose").css("display","block");
            $("#fixAreaYearChoose").css("display","none");
            $("#fixSalesChoose").css("display","block");
            $("#fixSalesYearChoose").css("display","none");
            $("#fixBasicsChoose").css("display","block");
            $("#fixBasicsYearChoose").css("display","none");
            $("#peoplePriceMountChoose").css("display","block");
            $("#peoplePriceMountYearChoose").css("display","none");
            $("#peoplePriceRatioChoose").css("display","block");
            $("#peoplePriceRatioYearChoose").css("display","none");
            $("#peoplePriceTownChoose").css("display","block");
            $("#peoplePriceTownYearChoose").css("display","none");
            $("#peoplePriceIndexChoose").css("display","block");
            $("#peoplePriceIndexYearChoose").css("display","none");
            $("#peoplePriceManagerChoose").css("display","block");
            $("#peoplePriceManagerYearChoose").css("display","none");
            $("#socialGoodsChoose").css("display","block");
            $("#socialGoodsYearChoose").css("display","none");
            $("#tradeTotalChoose").css("display","block");
            $("#tradeTotalYearChoose").css("display","none");
            $("#tradeCapitalChoose").css("display","block");
            $("#tradeCapitalYearChoose").css("display","none");
            $("#tradeRMBChoose").css("display","block");
            $("#tradeRMBYearChoose").css("display","none");
            $("#financialFundChoose").css("display","block");
            $("#financialFundYearChoose").css("display","none");
            $("#financialOutChoose").css("display","block");
            $("#financialOutYearChoose").css("display","none");
            $("#financialDebtChoose").css("display","block");
            $("#financialDebtYearChoose").css("display","none");
            $("#financialDepositChoose").css("display","block");
            $("#financialDepositYearChoose").css("display","none");
            $("#financialCompanyChoose").css("display","block");
            $("#financialCompanyYearChoose").css("display","none");
            $("#financialSupplyChoose").css("display","block");
            $("#financialSupplyYearChoose").css("display","none");
            $("#electricityChoose").css("display","block");
            $("#electricityYearChoose").css("display","none");
            $("#protectionEnvironmentalChoose").css("display","block");
            $("#protectionEnvironmentalYearChoose").css("display","none");
            $("#protectionEnergyChoose").css("display","block");
            $("#protectionEnergyYearChoose").css("display","none");
            $("#technologyResearchChoose").css("display","block");
            $("#technologyResearchYearChoose").css("display","none");
            $("#technologyNewChoose").css("display","block");
            $("#technologyNewYearChoose").css("display","none");
            $("#technologyPatentChoose").css("display","block");
            $("#technologyPatentYearChoose").css("display","none");
            $("#technologyContractChoose").css("display","block");
            $("#technologyContractYearChoose").css("display","none");
            $("#agricultureChoose").css("display","block");
            $("#agricultureYearChoose").css("display","none");
            $("#trafficChoose").css("display","block");
            $("#trafficYearChoose").css("display","none");
            $("#travalChoose").css("display","block");
            $("#travalYearChoose").css("display","none");
            $("#educationChoose").css("display","block");
            $("#educationYearChoose").css("display","none");
        }else{
            $("#yearChoose").css("display","block");
            $("#countChoose").css("display","none");
            $("#thirdYearChoose").css("display","block");
            $("#thirdCountChoose").css("display","none");
            $("#perCapitaYearChoose").css("display","block");
            $("#perCapitaChoose").css("display","none");
            $("#lifeMoneyYearChoose").css("display","block");
            $("#lifeMoneyChoose").css("display","none");
            $("#lifePayYearChoose").css("display","block");
            $("#lifePayChoose").css("display","none");
            $("#productValueYearChoose").css("display","block");
            $("#productValueChoose").css("display","none");
            $("#productAssetsYearChoose").css("display","block");
            $("#productAssetsChoose").css("display","none");
            $("#productProfitYearChoose").css("display","block");
            $("#productProfitChoose").css("display","none");
            $("#productIndexYearChoose").css("display","block");
            $("#productIndexChoose").css("display","none");
            $("#fixInvestmentYearChoose").css("display","block");
            $("#fixInvestmentChoose").css("display","none");
            $("#fixRealtyYearChoose").css("display","block");
            $("#fixRealtyChoose").css("display","none");
            $("#fixFinishYearChoose").css("display","block");
            $("#fixFinishChoose").css("display","none");
            $("#fixAreaYearChoose").css("display","block");
            $("#fixAreaChoose").css("display","none");
            $("#fixSalesYearChoose").css("display","block");
            $("#fixSalesChoose").css("display","none");
            $("#fixBasicsYearChoose").css("display","block");
            $("#fixBasicsChoose").css("display","none");
            $("#peoplePriceMountYearChoose").css("display","block");
            $("#peoplePriceMountChoose").css("display","none");
            $("#peoplePriceRatioYearChoose").css("display","block");
            $("#peoplePriceRatioChoose").css("display","none");
            $("#peoplePriceTownYearChoose").css("display","block");
            $("#peoplePriceTownChoose").css("display","none");
            $("#peoplePriceIndexYearChoose").css("display","block");
            $("#peoplePriceIndexChoose").css("display","none");
            $("#peoplePriceManagerYearChoose").css("display","block");
            $("#peoplePriceManagerChoose").css("display","none");
            $("#socialGoodsYearChoose").css("display","block");
            $("#socialGoodsChoose").css("display","none");
            $("#tradeTotalYearChoose").css("display","block");
            $("#tradeTotalChoose").css("display","none");
            $("#tradeCapitalYearChoose").css("display","block");
            $("#tradeCapitalChoose").css("display","none");
            $("#tradeRMBYearChoose").css("display","block");
            $("#tradeRMBChoose").css("display","none");
            $("#financialFundYearChoose").css("display","block");
            $("#financialFundChoose").css("display","none");
            $("#financialOutYearChoose").css("display","block");
            $("#financialOutChoose").css("display","none");
            $("#financialDebtYearChoose").css("display","block");
            $("#financialDebtChoose").css("display","none");
            $("#financialDepositYearChoose").css("display","block");
            $("#financialDepositChoose").css("display","none");
            $("#financialCompanyYearChoose").css("display","block");
            $("#financialCompanyChoose").css("display","none");
            $("#financialSupplyYearChoose").css("display","block");
            $("#financialSupplyChoose").css("display","none");
            $("#electricityYearChoose").css("display","block");
            $("#electricityChoose").css("display","none");
            $("#protectionEnvironmentalYearChoose").css("display","block");
            $("#protectionEnvironmentalChoose").css("display","none");
            $("#protectionEnergyYearChoose").css("display","block");
            $("#protectionEnergyChoose").css("display","none");
            $("#technologyResearchYearChoose").css("display","block");
            $("#technologyResearchChoose").css("display","none");
            $("#technologyNewYearChoose").css("display","block");
            $("#technologyNewChoose").css("display","none");
            $("#technologyPatentYearChoose").css("display","block");
            $("#technologyPatentChoose").css("display","none");
            $("#technologyContractYearChoose").css("display","block");
            $("#technologyContractChoose").css("display","none");
            $("#agricultureYearChoose").css("display","block");
            $("#agricultureChoose").css("display","none");
            $("#trafficYearChoose").css("display","block");
            $("#trafficChoose").css("display","none");
            $("#travalYearChoose").css("display","block");
            $("#travalChoose").css("display","none");
            $("#educationYearChoose").css("display","block");
            $("#educationChoose").css("display","none");
        }
    })
}


function peopleCount(regId){
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getNationEconomy?periods=5&dateType=3",
        async: true,
        data:{"regId":regId},
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                peopleAllTable(datas);          //国内生产总值(GDP)总量和增速
                peopleThird(datas);             //三次产业构成
                peoplePerCapita(datas);         //人均GDP总量和增速
            }else{
                alert(data.message);
            }
        }
    });
    peopleChoose(regId);
    numChoose(regId,3);
    dateChoose(regId,3);
}
function peopleChoose(regId){
    $("#allYearList li a").click(function(event) {
        // event.stopPropagation();
        var item = $(this).html();
        if(item=="年度"){
            var dateType = 3;
            var box = "";
            box += '<input id="ljTime1" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="ljTime2" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#yearChoose").html(box);
        }else if(item == "季度"){
            var dateType = 2;
            $("#yearChoose").html("");
            var box = "";
            box += '<input id="ljTime1" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="ljTime2" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#yearChoose").html(box);
        }else{
            var dateType = 1;
            var box = "";
            box += '<input id="ljTime1" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="ljTime2" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#yearChoose").html(box);
        }
        numChoose(regId,dateType);
        dateChoose(regId,dateType);
    });
    $("#thirdYearList li a").click(function(event) {
        // event.stopPropagation();
        var item = $(this).html();
        if(item=="年度"){
            var dateType = 3;
            var box = "";
            $("#thirdYearChoose").html("");
            box += '<input id="thirdpre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="thirdNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#thirdYearChoose").html(box);
        }else if(item == "季度"){
            var dateType = 2;
            $("#thirdYearChoose").html("");
            var box = "";
            box += '<input id="thirdpre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="thirdNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#thirdYearChoose").html(box);
        }else{
            var dateType = 1;
            var box = "";
            $("#thirdYearChoose").html("");
            box += '<input id="thirdpre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="thirdNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#thirdYearChoose").html(box);
        }
        numChoose(regId,dateType);
        dateChoose(regId,dateType);
    });
    $("#perCapitaYear li a").click(function(event) {
        // event.stopPropagation();
        var item = $(this).html();
        if(item=="年度"){
            var dateType = 3;
            $("#perCapitaYearChoose").html("");
            var box = "";
            box += '<input id="perCapitaPre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="perCapitaNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#perCapitaYearChoose").html(box);
        }else if(item == "季度"){
            var dateType = 2;
            $("#perCapitaYearChoose").html("");
            var box = "";
            box += '<input id="perCapitaPre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="perCapitaNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年第M季度\',disabledDates:[\'....-0[5-9]-..\',\'....-1[0-2]-..\']})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#perCapitaYearChoose").html(box);
        }else{
            var dateType = 1;
            $("#perCapitaYearChoose").html("");
            var box = "";
            box += '<input id="perCapitaPre" type="text" runat="server" value=""  onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            box +='<span class="left" style="margin-left: 2px;">-</span>';
            box +='<input id="perCapitaNext" type="text" runat="server" value="" onfocus="WdatePicker({skin:\'default\',dateFmt:\'yyyy年M月\'})" class="Wdate left" style=" width:140px;height:32px;margin-left:4px;border:1px solid #ccc;border-radius:4px"/>';
            $("#perCapitaYearChoose").html(box);
        }
        numChoose(regId,dateType);
        dateChoose(regId,dateType);
    });
}
function numChoose(regId,dateType){
    $("#countChoose li a").click(function(event) {
        // event.stopPropagation();
        var periods = $(this).html().replace(/期/g, '');
        peopleSure(regId,dateType,periods);
    });
    $("#thirdCountChoose li a").click(function(event) {
        // event.stopPropagation();
        var periods = $(this).html().replace(/期/g, '');
        peopleSure(regId,dateType,periods);
    });
    $("#perCapitaChoose li a").click(function(event) {
        // event.stopPropagation();
        var periods = $(this).html().replace(/期/g, '');
        peopleSure(regId,dateType,periods);
    });
}
function dateChoose(regId,dateType){
    peopleSure(regId,dateType,3);
}
function peopleSure(regId,dateType,periods){
    $("#allSure").off().click(function(){
        var starTime = $("#ljTime1").val();
        var endTime = $("#ljTime2").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getNationEconomy",
            async: true,
            data:{"regId":regId,"periods":periods,"dateType":dateType,"starTime":starTime,"endTime":endTime},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    peopleAllTable(datas);          //国内生产总值(GDP)总量和增速
                }else{
                    alert(data.message);
                }
            }
        });
    });
    $("#thirdSure").off().click(function(){
        var starTime = $("#thirdpre").val();
        var endTime = $("#thirdNext").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getNationEconomy",
            async: true,
            data:{"regId":regId,"periods":periods,"dateType":dateType,"starTime":starTime,"endTime":endTime},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    peopleThird(datas);             //三次产业构成
                }else{
                    alert(data.message);
                }
            }
        });
    });
    $("#perCapitaSure").off().click(function(){
        var starTime = $("#perCapitaPre").val();
        var endTime = $("#perCapitaNext").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getNationEconomy",
            async: true,
            data:{"regId":regId,"periods":periods,"dateType":dateType,"starTime":starTime,"endTime":endTime},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    peoplePerCapita(datas);         //人均GDP总量和增速
                }else{
                    alert(data.message);
                }
            }
        });
    });
}
function peopleAllTable(datas){
    $("#allTitle").html("");
    $("#allBox").html("");
    var list = datas[0].val;
    var title = "";
    var box = "";
    title += '<tr>';
    for(var i=0;i<list[0].length;i++){
        title += '<th>'+list[0][i].value+'</th>';
    }
    title += '</tr>';
    $("#allTitle").html(title);
    for(var m=1;m<list.length;m++){
        box += '<tr>';
        for(var n=0;n<list[m].length;n++){
            box += '<td>'+list[m][n].value+'</td>';
        }
    }
    box += '<tr>';
    $("#allBox").html(box);
    peopleAllPhoto(list);
}
function peopleAllPhoto(list){
    var years = [];
    var title = $("#allName").html();
    for(var i=1;i<list[0].length;i++){
        years.push(list[0][i].value);
    }
    var val1 = [];
    var val1Name = list[1][0].value;
    for(var m=1;m<list[1].length;m++){
        val1.push(list[1][m].value);
    }
    var val2 = [];
    var val2Name = list[3][0].value;
    for(var m=1;m<list[3].length;m++){
        val2.push(list[3][m].value);
    }
    var val3 = [];
    var val3Name = list[5][0].value;
    for(var m=1;m<list[5].length;m++){
        val3.push(list[5][m].value);
    }
    var val4 = [];
    var val4Name = list[6][0].value;
    for(var m=1;m<list[6].length;m++){
        val4.push(list[6][m].value);
    }
    var val5 = [];
    var val5Name = list[7][0].value;
    for(var m=1;m<list[7].length;m++){
        val5.push(list[7][m].value);
    }
    var val6 = [];
    var val6Name = list[8][0].value;
    for(var m=1;m<list[8].length;m++){
        val6.push(list[8][m].value);
    }
    var val7 = [];
    var val7Name = list[9][0].value;
    for(var m=1;m<list[9].length;m++){
        val7.push(list[9][m].value);
    }
    var val8 = [];
    var val8Name = list[10][0].value;
    for(var m=1;m<list[10].length;m++){
        val8.push(list[10][m].value);
    }
    var names = [];
    names.push(val1Name,val2Name,val3Name,val4Name,val5Name,val6Name,val7Name,val8Name);
    var finals= [];
    finals.push({name:val1Name,type:'bar',data:val1},
        {name:val3Name,type:'bar',data:val3},
        {name:val5Name,type:'bar',data:val5},
        {name:val7Name,type:'bar',data:val7},
        {name:val2Name,type:'line',yAxisIndex: 1,data:val2},
        {name:val4Name,type:'line',yAxisIndex: 1,data:val4},
        {name:val6Name,type:'line',yAxisIndex: 1,data:val6},
        {name:val8Name,type:'line',yAxisIndex: 1,data:val8}
    );
    peopleAllLine(years,names,finals,title);
}
function peopleThird(datas){
    $("#thirdTitle").html("");
    $("#thirdBox").html("");
    var list = datas[1].val;
    var title = "";
    var box = "";
    title += '<tr>';
    for(var i=0;i<list[0].length;i++){
        title += '<th>'+list[0][i].value+'</th>';
    }
    title += '</tr>';
    $("#thirdTitle").html(title);
    for(var m=1;m<list.length;m++){
        box += '<tr>';
        for(var n=0;n<list[m].length;n++){
            box += '<td>'+list[m][n].value+'</td>';
        }
    }
    box += '<tr>';
    $("#thirdBox").html(box);
    peopleThirdPhoto(list);
}
function peopleThirdPhoto(list){
    var years = [];
    var title = $("#thirdName").html();
    for(var i=1;i<list[0].length;i++){
        years.push(list[0][i].value);
    }
    var val1 = [];
    var val1Name = list[1][0].value;
    for(var m=1;m<list[1].length;m++){
        val1.push(list[1][m].value);
    }
    var val2 = [];
    var val2Name = list[2][0].value;
    for(var m=1;m<list[2].length;m++){
        val2.push(list[2][m].value);
    }
    var val3 = [];
    var val3Name = list[3][0].value;
    for(var m=1;m<list[3].length;m++){
        val3.push(list[3][m].value);
    }
    var names = [];
    names.push(val1Name,val2Name,val3Name);
    var finals = [];
    finals.push({name:val1Name,type:'bar',stack:val1Name,barWidth : 10,data:val1},
        {name:val2Name,type:'bar',stack:val1Name,barWidth : 10,data:val2},
        {name:val3Name,type:'bar',stack:val1Name,barWidth : 10,data:val3})
    peopleThirdLine(title,years,names,finals);
}
function peoplePerCapita(datas){
    $("#perCapitaTitle").html("");
    $("#perCapitaBox").html("");
    var list = datas[2].val;
    var title = "";
    var box = "";
    title += '<tr>';
    for(var i=0;i<list[0].length;i++){
        title += '<th>'+list[0][i].value+'</th>';
    }
    title += '</tr>';
    $("#perCapitaTitle").html(title);
    for(var m=1;m<list.length;m++){
        box += '<tr>';
        for(var n=0;n<list[m].length;n++){
            box += '<td>'+list[m][n].value+'</td>';
        }
    }
    box += '<tr>';
    $("#perCapitaBox").html(box);
    peoplePerCapitaPhoto(list);
}
function peoplePerCapitaPhoto(list){
    var years = [];
    var title = $("#perCapitaName").html();
    for(var i=1;i<list[0].length;i++){
        years.push(list[0][i].value);
    }
    var val1 = [];
    var val1Name = list[1][0].value;
    for(var m=1;m<list[1].length;m++){
        val1.push(list[1][m].value);
    }
    var val2 = [];
    var val2Name = list[2][0].value;
    for(var m=1;m<list[2].length;m++){
        val2.push(list[2][m].value);
    }
    var names = [];
    names.push(val1Name,val2Name);
    var finals = [];
    finals.push({name:val1Name,type:'bar',data:val1},
        {name:val2Name,type:'line',yAxisIndex: 1,data:val2}
    );
    peoplePerCapitaLine(title,names,years,finals);
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
    var regId = $.getUrlParam('seId');
    peopleCount(12);     //国民经济合算
    // life();            //城乡人民生活

    choose();        //期数和年份二选一
    areaGrade();        //区域百强
});