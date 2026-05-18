import {
  Plane,
  Crown,
  Gift,
  Users,
  Heart,
  Music,
  Star,
  Zap,
  Palette,
  TrendingUp,
} from "lucide-react";
import type { VideoCategory } from "@/lib/data";

const icons: Record<VideoCategory, React.ElementType> = {
  Travel:     Plane,
  Wedding:    Crown,
  Birthday:   Gift,
  Friendship: Users,
  Couple:     Heart,
  Concert:    Music,
  Festival:   Star,
  Motivation: Zap,
  Aesthetic:  Palette,
  Trending:   TrendingUp,
};

export default function CategoryIcon({
  category,
  className,
}: {
  category: VideoCategory;
  className?: string;
}) {
  const Icon = icons[category];
  return <Icon className={className} />;
}
