import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDemo() {
  return (
    <>
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Button>
        <Spinner aria-hidden />
        Saving
      </Button>
      <Button variant="secondary">
        <Spinner aria-hidden />
        Loading
      </Button>
    </>
  );
}
