export default function MealSkeleton() {
  return (
    <div className="relative flex aspect-1 w-full animate-pulse flex-col gap-3 bg-primary-300/20 p-4">
      <div className="absolute bottom-0 left-0 h-8 w-3/5 bg-primary-300/20"></div>
    </div>
  );
}
