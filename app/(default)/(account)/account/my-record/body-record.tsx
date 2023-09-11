'use client';

import dayjs from 'dayjs';
import type {EChartsOption} from 'echarts';
import ReactECharts from 'echarts-for-react';
import {useMemo} from 'react';

import {Button} from '@/components/ui';

export default function BodyRecord() {
  const chartOptions = useMemo<EChartsOption>(() => {
    const category = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
    const mockData = [
      [200, 190, 120, 150, 165, 135, 130, 110, 90, 90, 90, 60],
      [200, 180, 170, 140, 140, 120, 95, 90, 75, 70, 80, 40],
    ];
    const markLineData = category.map((_, index) => ({
      xAxis: index,
    }));
    return {
      color: ['#FCA500', '#8FE9D0'],
      grid: {
        left: 0,
        right: '4%',
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
      series: mockData.map((groupData, index) => {
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
  }, []);

  return (
    <section id="body-record" className="container bg-dark-500 px-6 py-4">
      <h2 className="flex text-light">
        <span className="inline-block w-[96px] text-[15px] uppercase">
          Body
          <br />
          Record
        </span>
        <time dateTime="2021-05-21" className="text-xl font-medium">
          {dayjs('2021-05-21').format('YYYY.MM.DD')}
        </time>
      </h2>
      <div className="h-[200px] overflow-hidden">
        <ReactECharts
          theme="dark-light"
          lazyUpdate
          notMerge
          showLoading={false}
          option={chartOptions}
          className="!h-full"
        />
      </div>
      <div className="mt-1 flex items-center gap-4 pl-2 [&>button]:min-w-[56px]">
        <Button size="xs" color="light" rounded="full">
          日
        </Button>
        <Button size="xs" color="light" rounded="full">
          週
        </Button>
        <Button size="xs" color="light" rounded="full">
          月
        </Button>
        <Button size="xs" color="primary" rounded="full">
          年
        </Button>
      </div>
    </section>
  );
}
