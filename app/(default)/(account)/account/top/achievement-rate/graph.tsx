'use client';

import type {EChartsOption} from 'echarts';
import ReactECharts from 'echarts-for-react';
import {useMemo} from 'react';
import {suspend} from 'suspend-react';

import {apiCaller} from '@/lib/api-caller';

export default function Graph() {
  const {category, data: chartData} = suspend(async () => {
    const {data} = await apiCaller.get<{
      category: number[];
      data: [number[], number[]];
    }>('/v1/top/graph');
    return data;
  }, ['top', 'graph']);

  const chartOptions = useMemo<EChartsOption>(() => {
    const markLineData = category.map((_, index) => ({
      xAxis: index,
    }));
    return {
      color: ['#FCA500', '#8FE9D0'],
      grid: {
        left: '4%',
        right: '5%',
        bottom: '3%',
        top: 10,
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          label: {
            formatter: '{value}月',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}月',
          color: 'white',
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: chartData.map((groupData, index) => {
        return {
          type: 'line',
          name: `Line ${index + 1}`,
          symbolSize: 10,
          symbol: 'circle',
          lineStyle: {
            width: 3,
          },
          markLine: {
            label: {
              show: false,
            },
            symbol: 'none',
            lineStyle: {
              type: 'solid',
              color: '#777777',
            },
            data: markLineData,
          },
          data: category.map((cate, index) => [cate, groupData[index]]),
        };
      }),
    };
  }, [category, chartData]);

  return (
    <ReactECharts
      theme="dark"
      lazyUpdate
      notMerge
      showLoading={false}
      option={chartOptions}
      className="!h-full"
    />
  );
}
