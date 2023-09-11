'use client';

import type {EChartsOption} from 'echarts';
import ReactECharts from 'echarts-for-react';
import Image from 'next/image';
import {useMemo} from 'react';

import {PercentCircle} from '@/components/ui';
import mainPhoto from '@/public/photos/main_photo.png';

export default function AchievementRate() {
  const chartOptions = useMemo<EChartsOption>(() => {
    const category = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
    const mockData = [
      [200, 190, 160, 150, 165, 135, 130, 110, 90, 90, 90, 140],
      [200, 180, 170, 140, 140, 120, 95, 90, 75, 70, 80, 90],
    ];
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
    <div className="flex flex-col items-stretch gap-y-0 overflow-hidden sm:flex-row">
      <section className="relative w-full shrink-0 sm:w-2/5 lg:w-[540px]">
        <Image
          src={mainPhoto}
          quality={100}
          priority
          placeholder="blur"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PercentCircle
            size={181 + 20}
            progress={75}
            circleColor="transparent"
            progressColor="white"
            progressShape="square"
            progressWidth={3}
            filter="drop-shadow(0px 0px 1px red)"
            renderText={progress => (
              <div
                className="whitespace-nowrap text-light"
                style={{
                  textShadow: '0px 0px 6px #FCA500',
                }}
              >
                <span className="text-lg">05/21</span>{' '}
                <span className="text-2xl">{progress}%</span>
              </div>
            )}
          />
        </div>
      </section>
      <section className="h-[316px] grow overflow-hidden bg-dark-600">
        <ReactECharts
          theme="dark"
          lazyUpdate
          notMerge
          showLoading={false}
          option={chartOptions}
          className="!h-full"
        />
      </section>
    </div>
  );
}
