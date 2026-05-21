import {
  Crown,
  Gift,
  Heart,
  Gem,
  Star,
  Sun,
  Sparkles,
  Users,
  Briefcase,
  Film,
} from "lucide-react";
const icons: Record<string, React.ElementType> = {
  Wedding:           Crown,
  Birthday:          Gift,
  Anniversary:       Heart,
  Engagement:        Gem,
  "Naming Ceremony": Star,
  "Baby Shower":     Sun,
  Festival:          Sparkles,
  Farewell:          Users,
  Corporate:         Briefcase,
  Reels:             Film,
};

export default function CategoryIcon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const Icon = icons[category];
  return <Icon className={className} />;
}
