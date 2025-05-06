import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  description,
  className,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-32 pb-16 md:pb-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden",
        backgroundImage ? "min-h-[40vh]" : "min-h-[30vh]",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <h1
        className={cn(
          "text-3xl md:text-5xl font-bold mb-4 z-10",
          backgroundImage ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl mx-auto z-10",
            backgroundImage ? "text-gray-200" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}