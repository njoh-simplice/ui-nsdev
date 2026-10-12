import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Edit profile</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Change how you appear on the site. Save when you are done.</DialogDescription>
        </DialogHeader>
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="Njoh Simplice" />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save changes</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
