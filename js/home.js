var width = (document.body.clientWidth)*98/100*40/100+'px';
var width1 = (document.body.clientWidth)*98/100*49/100+'px';
var height = 280+'px';
var height1 = 250+'px';
var resizeCss = function() {
	$("#homeljz").css("width", width).css("height", height);
	$("#homeljz1").css("width", width).css("height", height);
	//  $("#homemap").css("width", width).css("height", height);
};
resizeCss();
var homeljz = echarts.init(document.getElementById('homeljz'));
var homeljz1 = echarts.init(document.getElementById('homeljz1'));
//var homemap = echarts.init(document.getElementById('homemap'));

option = {
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
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	legend: {
		data: ['系列1', '系列2']
	},
	xAxis: [{
		type: 'category',
		data: ['2017年第三季度', '2017年第二季度', '2017年第一季度', '2016年第四季度'],
		axisPointer: {
			type: 'shadow'
		}
	}],
	yAxis: [{
		type: 'value',
		name: '',
		min: 0,
		max: 2000,
		interval: 500,
		axisLabel: {
			formatter: '{value} '
		}
	}],
	series: [{
			name: '系列1',
			type: 'bar',
			data: [1000, 1200, 1100, 1700]
		},
		{
			name: '系列2',
			type: 'bar',
			data: [800, 750, 1300, 1200]
		}
	]
};
option1 = {
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
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	legend: {
		data: ['系列1', '系列2']
	},
	xAxis: [{
		type: 'category',
		data: ['2017年第三季度', '2017年第二季度', '2017年第一季度', '2016年第四季度'],
		axisPointer: {
			type: 'shadow'
		}
	}],
	yAxis: [{
		type: 'value',
		name: '',
		min: 0,
		max: 2000,
		interval: 500,
		axisLabel: {
			formatter: '{value} '
		}
	}],
	series: [{
			name: '系列1',
			type: 'bar',
			data: [1000, 1200, 1100, 1700]
		},
		{
			name: '系列2',
			type: 'bar',
			data: [800, 750, 1300, 1200]
		}
	]
};

require.config({
	paths: {
		echarts: 'js/build/dist'
	}
});
require(
	[
		'echarts',
		'echarts/chart/map' // 使用地图就加载map模块，按需加载
	],
	function(ec) {
		var homemap = ec.init(document.getElementById("homemap"));
		var option = null;

		option2 = {
			title: {
				text: '',
				subtext: '',
				x: ''
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data: ['优先支持区域(西部地区)', '重点支持区域(东部地区)', '重点支持区域(中部地区)', '一般支持区域', '风险警告区域', '风险规避区域']
			},
			dataRange: {
				min: 0,
				max: 2500,
				x: 'left',
				y: 'bottom',
				text: ['高', '低'], // 文本，默认为数值文本
				calculable: true
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				x: 'right',
				y: 'center',
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			roamController: {
				x: 'right',
				mapTypeControl: {
					'china': true
				}
			},
			series: [{
					name: '优先支持区域(西部地区)',
					type: 'map',
					mapType: 'china',
					roam: false,
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '重庆',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '河北',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '河南',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '云南',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '辽宁',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '黑龙江',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '湖南',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '安徽',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '山东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '新疆',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '江苏',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '浙江',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '江西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '湖北',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '甘肃',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '山西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '内蒙古',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '陕西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '吉林',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '福建',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '贵州',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '青海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '西藏',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '四川',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '宁夏',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '海南',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '台湾',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				},
				{
					name: '重点支持区域(东部地区)',
					type: 'map',
					mapType: 'china',
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '重庆',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '河北',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '安徽',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '新疆',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '浙江',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '江西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '山西',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '内蒙古',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '吉林',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '福建',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '西藏',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '四川',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '宁夏',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				},
				{
					name: '重点支持区域(中部地区)',
					type: 'map',
					mapType: 'china',
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '台湾',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				},
				{
					name: '一般支持区域',
					type: 'map',
					mapType: 'china',
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '台湾',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				},
				{
					name: '风险警告区域',
					type: 'map',
					mapType: 'china',
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '台湾',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				},
				{
					name: '风险规避区域',
					type: 'map',
					mapType: 'china',
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '北京',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '天津',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '上海',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '广东',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '台湾',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '香港',
							value: Math.round(Math.random() * 1000)
						},
						{
							name: '澳门',
							value: Math.round(Math.random() * 1000)
						}
					]
				}

			]
		};
		homemap.setOption(option2, true);
		var resizeCss = function() {
			$("#homemap").css("width", width).css("height", height1);
		};
		resizeCss();
		window.onresize = function() {
			//重置容器高宽
			resizeCss();
			homemap.resize();
		};
	}

)
//option2 = {
//  tooltip : {
//      trigger: 'item',
//      formatter: '{b}'
//  },
//  series : [
//      {
//          name: '中国',
//          type: 'map',
//          mapType: 'china',
//          selectedMode : 'multiple',
//          itemStyle:{
//              normal:{label:{show:true}},
//              emphasis:{label:{show:true}}
//          },
//          data:[
//              {name:'广东',selected:true}
//          ]
//      }
//  ]
//};
//var ecConfig = require('echarts/config');
//myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
//  var selected = param.selected;
//  var str = '当前选择： ';
//  for (var p in selected) {
//      if (selected[p]) {
//          str += p + ' ';
//      }
//  }
//  document.getElementById('wrong-message').innerHTML = str;
//})

homeljz.setOption(option, true);
homeljz1.setOption(option1, true);

window.onresize = function() {
	//重置容器高宽
	resizeCss();
	homeljz.resize();
	homeljz1.resize();
	//  homemap.resize();
};