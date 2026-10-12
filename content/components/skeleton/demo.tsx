import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <>
      <div className="flex w-full max-w-sm items-center gap-4" aria-busy="true">
        <Skeleton className="size-12 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-3" aria-busy="true">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </>
  );
}
