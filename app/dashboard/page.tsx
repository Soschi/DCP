"use client";

import AddTile from "@/components/add_tile";
import DataTile from "@/components/data_tile";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";



export default function Dashboard() {

  return (
    <div className="flex flex-wrap p-5 gap-5 justify-center"  >
      
      <DataTile  title="IMU FRONT X by sec" children={undefined} />
      <AddTile />

    </div>
    
  );
}