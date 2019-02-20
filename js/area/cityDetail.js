var width = (document.body.clientWidth)*(98/100)*(42/100)+'px';
var height = 400+'px';
var height1 = 200+"px";
var resizeCss = function() {
    $("#peopleCountLine").css("width", width).css("height", height);
    $("#thirdCountLine").css("width", width).css("height", height);
    $("#perCapitaLine").css("width", width).css("height", height);
    $("#lifeMoneyLine").css("width", width).css("height", height);
    $("#productValueLine").css("width", width).css("height", height);
    $("#productProfitLine").css("width", width).css("height", height);
    $("#fixInvestmentLine").css("width", width).css("height", height);
    $("#fixRealtyLine").css("width", width).css("height", height);
    $("#fixAreaLine").css("width", width).css("height", height);
    $("#fixSalesLine").css("width", width).css("height", height1);
    $("#fixSalesPriceLine").css("width", width).css("height", height1);
    $("#fixBasicsLine").css("width", width).css("height", height);
    $("#peoplePriceMountLine").css("width", width).css("height", height);
    $("#socialGoodsLine").css("width", width).css("height", height);
    $("#tradeTotalLine").css("width", width).css("height", height);
    $("#tradeCapitalLine").css("width", width).css("height", height);
    $("#financialRevenueLine").css("width", width).css("height", height);
    $("#financialFundLine").css("width", width).css("height", height);
    $("#financialOutLine").css("width", width).css("height", height);
    $("#financialDebtLine").css("width", width).css("height", height1);
    $("#financialDebtRadioLine").css("width", width).css("height", height1);
    $("#financialDepositLine").css("width", width).css("height", height);
    $("#financialCompanyLine").css("width", width).css("height", height);
    $("#electricityLine").css("width", width).css("height", height);
};
resizeCss();
var peopleCountLine = echarts.init(document.getElementById('peopleCountLine'));
var thirdCountLine = echarts.init(document.getElementById('thirdCountLine'));
var perCapitaLine = echarts.init(document.getElementById('perCapitaLine'));
var lifeMoneyLine = echarts.init(document.getElementById('lifeMoneyLine'));
var productValueLine = echarts.init(document.getElementById('productValueLine'));
var productProfitLine = echarts.init(document.getElementById('productProfitLine'));
var fixInvestmentLine = echarts.init(document.getElementById('fixInvestmentLine'));
var fixRealtyLine = echarts.init(document.getElementById('fixRealtyLine'));
var fixAreaLine = echarts.init(document.getElementById('fixAreaLine'));
var fixSalesLine = echarts.init(document.getElementById('fixSalesLine'));
var fixSalesPriceLine = echarts.init(document.getElementById('fixSalesPriceLine'));
var fixBasicsLine = echarts.init(document.getElementById('fixBasicsLine'));
var peoplePriceMountLine = echarts.init(document.getElementById('peoplePriceMountLine'));
var socialGoodsLine = echarts.init(document.getElementById('socialGoodsLine'));
var tradeTotalLine = echarts.init(document.getElementById('tradeTotalLine'));
var tradeCapitalLine  = echarts.init(document.getElementById('tradeCapitalLine'));
var financialRevenueLine  = echarts.init(document.getElementById('financialRevenueLine'));
var financialFundLine = echarts.init(document.getElementById('financialFundLine'));
var financialOutLine = echarts.init(document.getElementById('financialOutLine'));
var financialDebtLine = echarts.init(document.getElementById('financialDebtLine'));
var financialDebtRadioLine = echarts.init(document.getElementById('financialDebtRadioLine'));
var financialDepositLine = echarts.init(document.getElementById('financialDepositLine'));
var financialCompanyLine= echarts.init(document.getElementById('financialCompanyLine'));
var electricityLine = echarts.init(document.getElementById('electricityLine'));
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
                                    {
                                        name:'国内生产总值现价',
                                        type:'bar',
                                        data:[2.0, 4.9, 7.0, 23.2, 25.6]
                                    },
                                    {
                                        name:'国内生产总值不变价',
                                        type:'bar',
                                        data:[2.6, 5.9, 9.0, 26.4, 28.7]
                                    },
                                    {
                                        name:'第一产业增加值指数',
                                        type:'line',
                                        yAxisIndex: 1,
                                        data:[2.0, 2.2, 3.3, 4.5, 6.3]
                                    }
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
productValueLine.clear();
productValueLine.setOption(optionproductValue,true);
productProfitLine.clear();
productProfitLine.setOption(optionproductAssets,true);
fixInvestmentLine.clear();
fixInvestmentLine.setOption(optionfixInvestment,true);
fixRealtyLine.clear();
fixRealtyLine.setOption(optionfixRealty,true);
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
socialGoodsLine.clear();
socialGoodsLine.setOption(optionsocialGoods,true);
tradeTotalLine.clear();
tradeTotalLine.setOption(optiontradeTotal,true);
tradeCapitalLine.clear();
tradeCapitalLine.setOption(optiontradeCapital,true);
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
//Echars自适应浏览器大小
window.onresize = function() {
    resizeCss();
    peopleCountLine.resize();
    thirdCountLine.resize();
    lifeMoneyLine.resize();
    productValueLine.resize();
    productProfitLine.resize();
    fixInvestmentLine.resize();
    fixRealtyLine.resize();
    fixAreaLine.resize();
    fixSalesLine.resize();
    fixSalesPriceLine.resize();
    fixBasicsLine.resize();
    peoplePriceMountLine.resize();
    socialGoodsLine.resize();
    tradeTotalLine.resize();
    tradeCapitalLine.resize();
    financialRevenueLine.resize();
    financialFundLine.resize();
    financialOutLine.resize();
    financialDebtLine.resize();
    financialDebtRadioLine.resize();
    financialDepositLine.resize();
    financialCompanyLine.resize();
    electricityLine.resize();
};





function leader(regId,nowYear){
    //主要工业产品产量
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getMainProductYield",
        async: true,
        data:{"regId":regId,"date":nowYear},
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                mainProductTable(datas);
            }else{
                alert(data.message);
            }
        }
    });
    //除工业外的其他优势产业
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getRegResourceService",
        async: true,
        data:{"regId":regId,"date":nowYear},
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                productTable(datas);
            }else{
                alert(data.message);
            }
        }
    });
    //全国行业百强上榜企业名单
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getIndustryEnterpriseRank",
        async: true,
        data:{"regId":regId,"date":nowYear},
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                industryTable(datas);
            }else{
                alert(data.message);
            }
        }
    });
    //区域百强上榜企业名单
    $.ajax({
        type: "get",
        url: "http://" + host + "/regional/getRegEnterpriseRank",
        async: true,
        data:{"regId":regId,"date":nowYear},
        success: function (data) {
            if(data.code=="0"){
                var datas = data.data;
                indexTable(datas);
            }else{
                alert(data.message);
            }
        }
    });
    yearSure(regId);
}
function mainProductTable(datas){
    $("#mainProductBox").html("");
    var box = "";
    for(var i=0;i<datas.length;i++){
        box += '<tr>';
        box += '<td>'+datas[i].name+'</td>';
        box += '<td></td>';
        box += '<td>'+datas[i].value+'</td>';
        box += '<td>'+datas[i].ratio+'</td>';
    }
    box += '</tr>';
    $("#mainProductBox").html(box);
}
function productTable(datas){
    $("#productBox").html("");
    var box = "";
    for(var i=0;i<datas.length;i++){
        box += '<tr>';
        box += '<td>'+datas[i].name+'</td>';
        box += '<td></td>';
        box += '<td>'+datas[i].value+'</td>';
        box += '<td>'+datas[i].ratio+'</td>';
    }
    box += '</tr>';
    $("#productBox").html(box);
}
function industryTable(datas){
    $("#industryBox").html("");
}
function indexTable(datas){
    $("#productIndexBox").html("");
}
function yearSure(regId){
    $("#mainSure").click(function(){
        var year = $("#mainYear").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getMainProductYield",
            async: true,
            data:{"regId":regId,"date":year},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    mainProductTable(datas);
                }else{
                    alert(data.message);
                }
            }
        })
    });
    $("#productSure").click(function(){
        var year = $("#productYear").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getMainProductYield",
            async: true,
            data:{"regId":regId,"date":year},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    productTable(datas);
                }else{
                    alert(data.message);
                }
            }
        })
    });
    $("#industrySure").click(function(){
        var year = $("#industryYear").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getIndustryEnterpriseRank",
            async: true,
            data:{"regId":regId,"date":year},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    industryTable(datas);
                }else{
                    alert(data.message);
                }
            }
        })
    });
    $("#productIndexSure").click(function(){
        var year = $("#productIndexYear").val();
        $.ajax({
            type: "get",
            url: "http://" + host + "/regional/getRegEnterpriseRank",
            async: true,
            data:{"regId":regId,"date":year},
            success: function (data) {
                if(data.code=="0"){
                    var datas = data.data;
                    indexTable(datas);
                }else{
                    alert(data.message);
                }
            }
        })
    });
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
    var nowName = $.getUrlParam('nowName');
    function show(){
        var mydate = new Date();
        mydate.setFullYear(mydate.getFullYear()-2);
        var str = "" + mydate.getFullYear()+"年";
        return str;
    }
    var nowYear = show();
    $("#mainYear").val(nowYear);
    $("#productYear").val(nowYear);
    $("#industryYear").val(nowYear);
    $("#productIndexYear").val(nowYear);
    leader(440,nowYear);        //主导产业和资源情况


    choose();        //期数和年份二选一
});