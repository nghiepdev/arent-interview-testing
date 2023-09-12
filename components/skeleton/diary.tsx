export default function DiarySkeleton() {
  return (
    <div className="flex aspect-1 w-full animate-pulse flex-col gap-3 bg-gray-400/10 p-4">
      <div className="space-y-1">
        <div className="h-[21px] w-1/2 bg-gray-400/10"></div>
        <div className="h-[20px] w-10 bg-gray-400/10"></div>
      </div>
      <div className="space-y-1">
        <div className="h-[20px] w-full shrink-0 rounded bg-gray-400/10"></div>
        <div className="h-[20px] w-5 shrink-0 rounded bg-gray-400/10"></div>
      </div>
      <div className="mb-2 h-[18px] w-full grow rounded bg-gray-400/5"></div>
    </div>
  );
}
