"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export default function ToastDemo() {
  const toast = useToast();

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => toast.add({ title: "Event created", description: "Friday, March 6 at 9:00 AM." })}
      >
        Show toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast.add({ type: "success", title: "Changes saved", description: "Your profile is up to date." })}
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({ type: "error", title: "Could not save", description: "Check your connection and try again." })
        }
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            title: "Message archived",
            actionProps: { children: "Undo", onClick: () => toast.add({ title: "Message restored" }) },
          })
        }
      >
        With undo
      </Button>
    </>
  );
}
