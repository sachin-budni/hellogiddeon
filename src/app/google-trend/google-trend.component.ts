import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import "echarts-wordcloud";
@Component({
  selector: 'app-google-trend',
  templateUrl: './google-trend.component.html',
  styleUrls: ['./google-trend.component.scss']
})
export class GoogleTrendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let myChart = echarts.init(document.getElementById('main2'));
    myChart.setOption(this.option); 
  }

  createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
  }  

  option = {
    title: {
        text: 'Google Trends',
        link: 'http://www.google.com/trends/hottrends'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: 'Google Trends',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            { 
                name: "Sachin",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "Deep",
                value: 6181,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Rishabh",
                value: 4386,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Jurassic World",
                value: 4055,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Charter Communications",
                value: 2467,
                itemStyle: this.createRandomItemStyle()
            }, 
            {
                name: "Chick Fil A",
                value: 2244,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Planet Fitness",
                value: 1898,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Pitch Perfect",
                value: 1484,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Express",
                value: 1112,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Home",
                value: 965,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Johnny Depp",
                value: 847,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Lena Dunham",
                value: 582,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Lewis Hamilton",
                value: 555,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "KXAN",
                value: 550,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Mary Ellen Mark",
                value: 462,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Farrah Abraham",
                value: 366,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Rita Ora",
                value: 360,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Serena Williams",
                value: 282,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "NCAA baseball tournament",
                value: 273,
                itemStyle: this.createRandomItemStyle()
            },
            {
                name: "Point Break",
                value: 265,
                itemStyle: this.createRandomItemStyle()
            }
        ]
    }]
};
}
