/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { IAlltimeStatistic } from '../../../interfaces/interfaces';

interface IDataGrafStatistis {
  title: string;
  titleX: string;
  titleY: string;
  allTimeStatistic: IAlltimeStatistic;
  amountY: string;
}
const amountDateLength = 10;

export default function GrafStatictics({ title, titleX, titleY, allTimeStatistic, amountY }: IDataGrafStatistis) {
  const data = [...allTimeStatistic.daysProgress];
  data.forEach((a) => {
    if ((a.date as string).length > amountDateLength) {
      a.date = `${`${a.date}`.slice(8, 10)}.${`${a.date}`.slice(5, 7)}.${`${a.date}`.slice(0, 4)}`;
    }

    if ((a.newWordsOfDay as Array<string>).length) a.newWordsOfDay = (a.newWordsOfDay as Array<string>).length;
  });

  return (
    <div className="graficStatistics">
      <p className="nameGrafic">
        {' '}
        {title}
      </p>
      <div className="graficStatisticsView">
        <p className="nameGraficY">
          {' '}
          {titleY}
        </p>
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" domain={['-', '-']} />
          <YAxis
            domain={['-', '-']}
          />
          <Tooltip />
          <Line type="monotone" dataKey={amountY} fill="black" />
        </LineChart>
        <p className="nameGraficX">
          {' '}
          {titleX}
        </p>
      </div>
    </div>
  );
}
