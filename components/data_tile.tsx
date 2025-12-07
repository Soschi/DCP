
import { Trash2 } from "lucide-react";
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
    <div className="bg-main-700 p-4 rounded-xl shadow-md h-full flex flex-col basis-1/4">
      <div className="flex items-center justify-between mb-3 w-full">
        <h2 className="text-lg font-semibold text-main-50 w-full order-1 pl-[30]">{title}</h2>
        <div className="order-2 pr-[30]">
          <div className="hover:bg-destructive rounded-sm">
            <a>
              <Trash2 />
            </a>
          </div>
          {actions && <div>{actions}</div>}
        </div>
        
      </div>

      <div className=" bg-white rounded-sm">
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
