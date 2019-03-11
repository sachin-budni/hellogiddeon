import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-force-chart',
  templateUrl: './force-chart.component.html',
  styleUrls: ['./force-chart.component.scss']
})
export class ForceChartComponent implements OnInit {

  constructor() { }

  labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};

labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

radius = [40, 55];

option = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            'GoogleMaps','Facebook','Youtube','Google+','Weixin',
            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'
        ]
    },
    title : {
        text: 'The App World',
        subtext: 'from global web index',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : this.radius,
            x: '0%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : this.labelBottom},
                {name:'GoogleMaps', value:54,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : this.radius,
            x:'20%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : this.labelBottom},
                {name:'Facebook', value:44,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : this.radius,
            x:'40%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:65, itemStyle : this.labelBottom},
                {name:'Youtube', value:35,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : this.radius,
            x:'60%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:70, itemStyle : this.labelBottom},
                {name:'Google+', value:30,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '30%'],
            radius : this.radius,
            x:'80%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:73, itemStyle : this.labelBottom},
                {name:'Weixin', value:27,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['10%', '70%'],
            radius : this.radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : this.labelBottom},
                {name:'Twitter', value:22,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '70%'],
            radius : this.radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:78, itemStyle :this.labelBottom},
                {name:'Skype', value:22,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '70%'],
            radius : this.radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : this.labelBottom},
                {name:'Messenger', value:22,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '70%'],
            radius : this.radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:83, itemStyle : this.labelBottom},
                {name:'Whatsapp', value:17,itemStyle : this.labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '70%'],
            radius : this.radius,
            y: '55%',   // for funnel
            x:'80%', // for funnel
            itemStyle : this.labelFromatter,
            data : [
                {name:'other', value:89, itemStyle : this.labelBottom},
                {name:'Instagram', value:11,itemStyle : this.labelTop}
            ]
        }
    ]
};

  ngOnInit() {
    // this.forceMockThreeData()
    let myEchart = echarts.init(document.getElementById('main1'))
    myEchart.setOption(this.option)
  }


}
