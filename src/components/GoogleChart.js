import React from 'react';
import Chart from "react-google-charts";

const GoogleChart = () => {
    const columnData =[
        ['Day', 'Upload', 'Download'],
        ['Sun', 8175000, 8008000],
        ['Mon', 3792000, 3694000],
        ['Tue', 2695000, 2896000],
        ['Wed', 2099000, 1953000],
        ['Thu', 1526000, 1517000],
        ['Fri', 4526000, 3517000],
        ['Sat', 5526000, 7517000],
    ];

    const lineData = [
        ['Month', 'Upload', 'Download'],
        ['Jan', 8175000, 8008000],
        ['Feb', 3792000, 3694000],
        ['Mar', 2695000, 2896000],
        ['Apr', 2099000, 1953000],
        ['May', 1526000, 1517000],
        ['Jun', 4526000, 3517000],
        ['Jul', 5526000, 7517000],
        ['Aug', 3526000, 787000],
        ['Sep', 1226000, 9817000],
        ['Oct', 4526000, 7437000],
        ['Nov', 3226000, 1717000],
        ['Dec', 3224800, 6317000],
    ];

    const treemapUploadData = [
        ['ID', 'Parent', 'Count'],
        ['upload', null, 0],
        ['condition1', 'upload', 10],
        ['condition2', 'upload', 110],
        ['condition3', 'upload', 120],
        ['condition4', 'upload', 80],
        ['condition5', 'upload', 300],
        ['condition6', 'upload', 50],
        ['condition7', 'upload', 30],
        ['condition8', 'upload', 19],
        ['condition9', 'upload', 52],
        ['condition10', 'upload', 75],
        
    ];
    const treemapDownloadData =[
        ['Condition', 'Parent', 'Count'],
        ['download',null,0],
        ['condition1', 'download', 10],
        ['condition2', 'download', 110],
        ['condition3', 'download', 120],
        ['condition4', 'download', 80],
        ['condition5', 'download', 300],
        ['condition6', 'download', 50],
        ['condition7', 'download', 30],
        ['condition8', 'download', 19],
        ['condition9', 'download', 52],
        ['condition10', 'download', 75],
    ]
    return (
        <div>
            <div>
                <Chart
                    height={350}
                    chartType="ColumnChart"
                    loader={<div>Weekly Column Chart</div>}
                    data={columnData}
                    options={{
                        title: 'Weekly Column Chart',
                    }}
                    legendToggle
                />
            </div>
            <div>
                <Chart
                    height={350}
                    chartType="LineChart"
                    loader={<div>Weekly Column Chart</div>}
                    data={lineData}
                    options={{
                        title: 'Mothly Line Chart',
                    }}
                    legendToggle
                />
            </div>
            <div>
                <Chart
                    height={350}
                    chartType="TreeMap"
                    loader={<div>Condtion Treemap Chart</div>}
                    data={treemapUploadData}
                    options={{
                        highlightOnMouseOver: true,
                        maxDepth: 1,
                        maxPostDepth: 2,
                        minHighlightColor: '#8c6bb1',
                        midHighlightColor: '#9ebcda',
                        maxHighlightColor: '#edf8fb',
                        minColor: '#009688',
                        midColor: '#f7f7f7',
                        maxColor: '#ee8100',
                        headerHeight: 15,
                        showScale: true,
                        height: 500,
                        useWeightedAverageForAggregation: true,
                      }}
                      rootProps={{ 'data-testid': '2' }}
                />
            </div>
            <div>
                <Chart
                    height={350}
                    chartType="TreeMap"
                    loader={<div>Condtion Treemap Chart</div>}
                    data={treemapDownloadData}
                    options={{
                        highlightOnMouseOver: true,
                        maxDepth: 1,
                        maxPostDepth: 2,
                        minHighlightColor: '#8c6bb1',
                        midHighlightColor: '#9ebcda',
                        maxHighlightColor: '#edf8fb',
                        minColor: '#009688',
                        midColor: '#f7f7f7',
                        maxColor: '#ee8100',
                        headerHeight: 15,
                        showScale: true,
                        height: 500,
                        useWeightedAverageForAggregation: true,
                      }}
                      rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </div>
    );
};

export default GoogleChart;