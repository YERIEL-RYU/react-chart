import React from 'react';
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsTreeChart from "highcharts/modules/treemap";
import HighchartsReact from "highcharts-react-official";

HighchartsData(Highcharts);
HighchartsHeatmap(Highcharts);
HighchartsTreeChart(Highcharts);
HighchartsExporting(Highcharts);

const HighCharts = () => {
    const columnOptions = {
        chart :{
            type:'column'
        },
        title : {
            text : 'Weekly Column Chart'
        },
        series: [
            {
                name : 'upload',
                data : [1,2,3,4,5,6,7]
            },
            {
                name : 'download',
                data : [2,1,5,7,3,7,6]
            },
        ],
        xAxis: {
            categories : [
                'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
            ]
          },
    }
    const lineOptions = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Monthly Line Chart'
        },
        series: [
          {
            name : 'upload',
            data: [1, 2, 1, 4, 3, 6,6,8,7,9,6,15]
          },
          {
              name : 'download',
              data : [8,9,2,4,5,6,1,3,8,6,4,12]
          }
        ],
        xAxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
        }
      };
      const treemapOptions = {
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        title: {
            text: 'Condition treemap Chart'
          },
        series:[{
            type: 'treemap',
            layoutAlgorithm : 'squarified',
            data: [
                {
                    name : 'condition1',
                    value : 4,
                    colorValue :3
                },
                {
                    name : 'condition2',
                    value : 7,
                    colorValue:4
                },
                {
                    name : 'condition3',
                    value : 3,
                    colorValue:2
                },
                {
                    name : 'condition4',
                    value : 10,
                    colorValue:7
                },
                {
                    name : 'condition5',
                    value : 15,
                    colorValue:9
                },
                {
                    name : 'condition6',
                    value : 21,
                    colorValue : 10
                },
                {
                    name : 'condition7',
                    value : 13,
                    colorValue:8
                },
                {
                    name : 'condition8',
                    value : 8,
                    colorValue:5
                },
                {
                    name : 'condition9',
                    value : 1,
                    colorValue:1
                },
                {
                    name : 'condition10',
                    value : 9,
                    colorValue:6
                },
            ]
        }]
      }
    return (
        <div>
           <div id='ColumnChart' style={{marginBottom:'30px'}}>
                <HighchartsReact highcharts={Highcharts} options={columnOptions} />
           </div>
           <div id='LineChart' style={{marginBottom:'30px'}}>
                <HighchartsReact highcharts={Highcharts} options={lineOptions} />
           </div>
           <div id='LineChartDrilldown' style={{marginBottom:'30px'}}>
                <HighchartsReact highcharts={Highcharts} options={treemapOptions} />
           </div>
        </div>
    );
};

export default HighCharts;