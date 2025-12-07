import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CirclePlus } from "lucide-react"

export function AddTileDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <div className="w-[500] h-[500] bg-main-800 rounded-sm place-items-center place-content-center">
                <CirclePlus className="w-25 h-25"/>
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Configure new Tile</DialogTitle>
            <DialogDescription>
              Configure data to be displayed in new Tile
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="name" defaultValue="New Tile" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
