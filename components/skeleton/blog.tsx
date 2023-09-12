export default function BlogSkeleton() {
  return (
    <div className="flex aspect-1 w-full animate-pulse flex-col gap-2">
      <div className="relative aspect-[5/3] grow rounded bg-gray-400/10">
        <div className="absolute bottom-0 left-0 h-[24px] w-4/5 bg-gray-400/10"></div>
      </div>
      <div className="h-[35px] shrink-0 rounded bg-gray-400/10"></div>
      <div className="h-[18px] w-3/4 shrink-0 rounded bg-gray-400/10"></div>
    </div>
  );
}
