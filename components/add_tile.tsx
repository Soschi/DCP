
import { CirclePlus } from "lucide-react"
import { AddTileDialog } from "./add_dialog";



export default function AddTile() {
  return (
    <div className="bg-main-900 p-4 rounded-xl shadow-md h-full flex flex-col basis-1/4">
        <div className="flex items-center justify-between mb-3 w-full">
            <h2 className="text-lg font-semibold text-main-50 text-center w-full">Add Tile</h2>
        </div>
        <AddTileDialog />
    </div>
  );
}
