"use client";

import DataTile from "@/components/data_tile";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";



export default function Dashboard() {

  return (
    <div style={ {display: 'flex', flexWrap:'wrap', maxWidth:"100%"} }>
      
      <DataTile  title="test" children={undefined} />
    </div>
    
  );
}