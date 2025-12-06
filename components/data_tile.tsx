
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  {
    name: '1',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: '3',
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: '4',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: '5',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: '6',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

type TileProps = {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export default function DataTile({ title, actions, children }: TileProps) {
  return (
    <div className="bg-main-900 p-4 rounded-xl shadow-md w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-3 w-full">
        <h2 className="text-lg font-semibold text-black text-center w-full">{title}</h2>
        {actions && <div>{actions}</div>}
      </div>

      <div className="flex-1 bg-white">
        {children}
        <LineChart width={500} height={500} responsive data={data}>
            <CartesianGrid/>
            <Line dataKey="uv"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Legend/>
      </LineChart>
      </div>
    </div>
  );
}
