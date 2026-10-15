"use client";

import { ArrowRight, CopyPlus, Archive, Share2, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/toast";

// Every button here does something: Save and the arrows show a toast, Delete asks first in an
// alert dialog and then offers Undo, and More opens a menu whose items show a toast.
export function ButtonsTile() {
  const toast = useToast();
  const next = () => toast.add({ title: "Next step", description: "Moved on to the next step." });

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        onClick={() => toast.add({ type: "success", title: "Changes saved", description: "Everything is up to date." })}
      >
        Save
      </Button>
      <Button variant="secondary" onClick={() => toast.add({ title: "Changes discarded" })}>
        Cancel
      </Button>

      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" />}>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this project?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the project and everything in it. You can undo it for a few seconds afterwards.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="secondary" />}>Cancel</AlertDialogClose>
            <AlertDialogClose
              render={<Button variant="destructive" />}
              onClick={() =>
                toast.add({
                  title: "Project deleted",
                  data: { icon: <Trash2 /> },
                  actionProps: {
                    children: "Undo",
                    onClick: () => toast.add({ type: "success", title: "Project restored" }),
                  },
                })
              }
            >
              Delete
            </AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" />}>More</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => toast.add({ type: "success", title: "Project duplicated" })}>
            <CopyPlus aria-hidden />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.add({ title: "Project archived", data: { icon: <Archive /> } })}>
            <Archive aria-hidden />
            Archive
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.add({ title: "Link copied", data: { icon: <Share2 /> } })}>
            <Share2 aria-hidden />
            Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button size="sm" onClick={() => toast.add({ title: "Small button", description: "Same actions, less space." })}>
        Small
      </Button>
      <Button size="icon" aria-label="Go to the next step" onClick={next}>
        <ArrowRight />
      </Button>
      <Button size="icon-sm" variant="secondary" aria-label="Go to the next step, small" onClick={next}>
        <ArrowRight />
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
