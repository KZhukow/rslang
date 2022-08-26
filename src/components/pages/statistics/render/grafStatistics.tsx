/* eslint-disable max-len */
/* eslint-disable no-console */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { amountDateLength, axisX, axisY } from '../const/const';
import { IDataGrafStatistis } from '../interfaces/interfaces';
// Толщина  рисуемой линии графика и ее цвет
const strokeWidth = 3;
const stroke = 'black';

export default function GrafStatictics({ title, titleX = axisX, titleY = axisY, allTimeStatistic, amountY }: IDataGrafStatistis) {
  const data = [...allTimeStatistic.daysProgress];
  data.forEach((a) => {
    if ((a.date as string).length > amountDateLength) {
      a.date = `${`${a.date}`.slice(8, 10)}.${`${a.date}`.slice(5, 7)}.${`${a.date}`.slice(0, 4)}`;
    }

    if ((a.newWordsOfDay as Array<string>).length) a.newWordsOfDay = (a.newWordsOfDay as Array<string>).length;
  });
  // в lineChart  - размеры самого графика 700/400;
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
          <Line type="monotone" dataKey={amountY} strokeWidth={strokeWidth} stroke={stroke} />
        </LineChart>
        <p className="nameGraficX">
          {' '}
          {titleX}
        </p>
      </div>
    </div>
  );
}
