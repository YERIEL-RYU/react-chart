import React from 'react';
import ReactApexChart from "react-apexcharts";

const ApexCharts = () => {
    //Column
    const columnSeries = [
        {
            name : "Upload",
            data : [
                123,
                1235,
                4325,
                545,
                53,
                636,
                6
            ],
        },
        {
            name : "Download",
            data : [
                45,
                135,
                455,
                5785,
                530,
                1631,
                644
            ],
        },
    ];
    const columnOptions = {
        chart: {
            type : 'bar',
            height : '350'
        },
        xaxis : {
            categories : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        title: {
            text: 'Weekly Column Chart',
            align : 'center'
        },
        legend: {
            show : false
        },
        dataLabels: {
            enabled: false
        },
    };

    //Line
    const lineSerise = [
        {
            name : 'Upload',
            data : [
                123456,
                45621,
                487431,
                5648,
                478765,
                24654,
                16896,
                789231,
                1355467,
                1321351,
                468465,
                13153
            ]
        },
        {
            name : 'Download',
            data : [
                1286435,
                456468,
                41874,
                564856,
                47872,
                465457,
                216896,
                89231,
                94678,
                121351,
                18465,
                781315
            ]
        },
    ];
    const lineOptions = {
        chart: {
            type : 'bar',
            height : '350'
        },
        xaxis : {
            categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        title: {
            text: 'Monthly Column Chart',
            align : 'center'
        },
        legend: {
            show : false
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
    };

    //Treemap
    const treemapSerise = [
        {
            name : 'Upload',
            data :[
                {x:'condition 1', y : 7},
                {x:'condition 2', y : 12},
                {x:'condition 3', y : 4},
                {x:'condition 4', y : 19},
                {x:'condition 5', y : 23},
                {x:'condition 6', y : 25},
                {x:'condition 7', y : 13},
                {x:'condition 8', y : 2},
                {x:'condition 9', y : 9},
                {x:'condition 10', y : 10},
            ]
        },
        {
            name : 'Download',
            data :[
                {x:'condition 6', y : 25},
                {x:'condition 5', y : 23},
                {x:'condition 4', y : 19},
                {x:'condition 7', y : 13},
                {x:'condition 2', y : 12},
                {x:'condition 10', y : 10},
                {x:'condition 9', y : 9},
                {x:'condition 1', y : 7},
                {x:'condition 3', y : 4},
                {x:'condition 8', y : 2},
            ]
        },
    ];
    const treemapOptions = {
        legend: {
            show: false
          },
          chart: {
            height: 350,
            type: 'treemap'
          },
          title: {
            text: 'Conditon Treemap Chart',
            align: 'center'
          }
    }
    return (
        <div>
            <div style={{marginBottom:'30px'}}>
                <ReactApexChart
                    options={columnOptions}
                    series={columnSeries}
                    type="bar"
                    height="350px"
                />
            </div>
            <div style={{marginBottom:'30px'}}>
                <ReactApexChart
                    options={lineOptions}
                    series={lineSerise}
                    type="line"
                    height="350px"
                />
            </div>
            <div style={{marginBottom:'30px'}}>
                <ReactApexChart
                    options={treemapOptions}
                    series={treemapSerise}
                    type="treemap"
                    height="350px"
                />
            </div>
        </div>
    );
};

export default ApexCharts;