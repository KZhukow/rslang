import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { amountDateLength, axisX, axisY } from '../const/const';
import { IDataGrafStatistis } from '../interfaces/interfaces';
// Толщина  рисуемой линии графика и ее цвет
const strokeWidth = 3;
const stroke = 'black';

export default function GrafStatictics(
  { title, titleX = axisX, titleY = axisY, allTimeStatistic, amountY }: IDataGrafStatistis,
) {
  const data = [...allTimeStatistic.daysProgress];
  data.forEach((a) => {
    if ((a.date as string).length > amountDateLength) {
      a.date = `${`${a.date}`.slice(8, 10)}.${`${a.date}`.slice(5, 7)}.${`${a.date}`.slice(0, 4)}`;
    }

    if ((a.newWordsOfDay as Array<string>).length) {
      a.newWordsOfDay = (a.newWordsOfDay as Array<string>).length;
    }
  });

  return (
    <div className="statistics_graph">
      <h3 className="graphic_title">
        {title}
      </h3>
      <div className="graphic_content">
        <h5 className="graphic_y_line">
          {titleY}
        </h5>
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" domain={['-', '-']} />
          <YAxis domain={['-', '-']} />
          <Tooltip />
          <Line type="monotone" dataKey={amountY} strokeWidth={strokeWidth} stroke={stroke} />
        </LineChart>
        <h5 className="graphic_x_line">
          {' '}
          {titleX}
        </h5>
      </div>
    </div>
  );
}
