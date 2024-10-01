import { cn, generateAvatarFallback } from "@/lib/utils";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarIndicator,
  AvatarIndicatorProps
} from "./ui/avatar";

type AvatarProps = {
  image?: string;
  indicator?: AvatarIndicatorProps["variant"];
  fallback?: string;
  className?: string;
};

export default function UserAvatar({ image, indicator, fallback = "AB", className }: AvatarProps) {
  return (
    <Avatar className={cn("h-12 w-12 border", className)}>
      <AvatarImage src={image} alt="avatar image" />
      <AvatarIndicator variant={indicator} />
      <AvatarFallback>{generateAvatarFallback(fallback)}</AvatarFallback>
    </Avatar>
  );
}
