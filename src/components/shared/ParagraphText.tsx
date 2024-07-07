import { cn } from "@/lib/utils";

const ParagraphText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p className={cn("tracking-tight font-medium text-[18px]", className)}>
      {text}
    </p>
  );
};

export default ParagraphText;
