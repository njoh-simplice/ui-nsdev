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

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete your account?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently deletes your account and all of its data. This can&apos;t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose render={<Button variant="secondary" />}>Cancel</AlertDialogClose>
          <AlertDialogClose render={<Button variant="destructive" />}>Delete account</AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
