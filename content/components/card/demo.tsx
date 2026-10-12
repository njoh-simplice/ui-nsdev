import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Pro</CardTitle>
          <Badge variant="success">Popular</Badge>
        </div>
        <CardDescription>For small teams that ship often.</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <p className="text-3xl font-bold">
          $24<span className="text-base font-normal text-text/70"> / month</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button>Get started</Button>
        <Button variant="secondary">Learn more</Button>
      </CardFooter>
    </Card>
  );
}
