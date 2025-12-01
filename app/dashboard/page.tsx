"use client";

import { ResizablePanelGroup } from "@/components/ui/resizable";
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

export default function Dashboard() {

  return (
    <div style={ {display: 'flex', flexWrap:'wrap', maxWidth:"100%"} }>
      <LineChart width={500} height={500} responsive data={data}>
        <CartesianGrid/>
        <Line dataKey="uv"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend/>
      </LineChart>
      <LineChart width={500} height={500} responsive data={data}>
        <CartesianGrid/>
        <Line dataKey="uv"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend/>
      </LineChart>
      <LineChart width={500} height={500} responsive data={data}>
        <CartesianGrid/>
        <Line dataKey="uv"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend/>
      </LineChart>
      <LineChart width={500} height={500} responsive data={data}>
        <CartesianGrid/>
        <Line dataKey="uv"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend/>
      </LineChart>
    </div>
    
  );
}