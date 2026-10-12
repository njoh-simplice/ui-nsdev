import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge render={<a href="/components" />}>
        New component
        <ArrowRight />
      </Badge>
    </>
  );
}
