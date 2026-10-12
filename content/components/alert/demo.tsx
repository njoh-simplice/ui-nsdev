import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your project at any time.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Saved</AlertTitle>
        <AlertDescription>Your changes are live.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Almost full</AlertTitle>
        <AlertDescription>You have used 90% of your storage.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Your card was declined. Try a different card.</AlertDescription>
      </Alert>
    </div>
  );
}
