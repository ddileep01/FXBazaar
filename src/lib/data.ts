export type Category = "After Effects" | "Premiere Pro" | "VN Mobile" | "CapCut";

export interface Template {
  id: string;
  title: string;
  category: Category;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  tags: string[];
  description: string;
  features: string[];
  previewUrl?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  sales: number;
}

export const templates: Template[] = [
  {
    id: "ae-cinematic-title-01",
    title: "Cinematic Title Reveal",
    category: "After Effects",
    price: 12,
    originalPrice: 18,
    thumbnail: "/thumbnails/ae-cinematic.jpg",
    tags: ["cinematic", "title", "reveal", "film"],
    description:
      "A stunning cinematic title reveal with light leaks and depth-of-field blur. Perfect for film intros, YouTube channels, and brand reels.",
    features: [
      "Full HD & 4K resolution",
      "Easy text customization",
      "No plugins required",
      "After Effects CS6+",
      "30-second duration",
    ],
    isFeatured: true,
    isBestseller: true,
    rating: 4.9,
    sales: 240,
  },
  {
    id: "ae-glitch-logo-02",
    title: "Glitch Logo Sting",
    category: "After Effects",
    price: 10,
    thumbnail: "/thumbnails/ae-glitch.jpg",
    tags: ["glitch", "logo", "sting", "modern"],
    description:
      "Aggressive glitch logo animation with RGB split and chromatic aberration. Ideal for gaming channels, tech brands, and digital agencies.",
    features: [
      "Drag & drop logo placeholder",
      "Editable colors",
      "3 glitch intensity variants",
      "After Effects CC 2018+",
      "8-second sting",
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    sales: 185,
  },
  {
    id: "ae-particles-bg-03",
    title: "Luxury Particles Background",
    category: "After Effects",
    price: 15,
    thumbnail: "/thumbnails/ae-particles.jpg",
    tags: ["particles", "luxury", "background", "gold"],
    description:
      "Elegant gold particle background loop perfect for luxury brands, weddings, fashion, and corporate presentations.",
    features: [
      "Seamless loop",
      "Customizable particle color",
      "4K resolution",
      "After Effects CC 2020+",
      "10-second loop",
    ],
    isFeatured: false,
    rating: 4.7,
    sales: 120,
  },
  {
    id: "pr-luts-pack-04",
    title: "Cinematic LUTs Pack",
    category: "Premiere Pro",
    price: 8,
    originalPrice: 14,
    thumbnail: "/thumbnails/pr-luts.jpg",
    tags: ["luts", "color grading", "cinematic", "pack"],
    description:
      "20 handcrafted cinematic LUTs for Premiere Pro. Covers moody, teal & orange, vintage film, and vibrant looks.",
    features: [
      "20 unique LUTs",
      "Works in Premiere Pro & DaVinci",
      ".cube format",
      "Instant color grading",
      "All genres covered",
    ],
    isBestseller: true,
    rating: 4.9,
    sales: 410,
  },
  {
    id: "pr-social-lower-05",
    title: "Social Media Lower Thirds",
    category: "Premiere Pro",
    price: 9,
    thumbnail: "/thumbnails/pr-lower.jpg",
    tags: ["lower thirds", "social media", "minimal", "modern"],
    description:
      "Clean, modern lower third animations for YouTube, Instagram Reels, and social media content creators.",
    features: [
      "10 unique designs",
      "Motion graphics templates (.mogrt)",
      "Editable in Essential Graphics panel",
      "Premiere Pro CC 2019+",
      "Custom font support",
    ],
    isNew: true,
    rating: 4.6,
    sales: 98,
  },
  {
    id: "pr-transitions-06",
    title: "Smooth Transitions Pack",
    category: "Premiere Pro",
    price: 11,
    originalPrice: 16,
    thumbnail: "/thumbnails/pr-transitions.jpg",
    tags: ["transitions", "smooth", "pack", "whip"],
    description:
      "50+ smooth, whip pan, and zoom transitions for fast-paced edits. One-click drag and drop workflow.",
    features: [
      "50+ transitions",
      "Drag & drop workflow",
      "Premiere Pro CC 2020+",
      "4K compatible",
      "Tutorial included",
    ],
    isFeatured: true,
    isBestseller: true,
    rating: 5.0,
    sales: 530,
  },
  {
    id: "vn-aesthetic-07",
    title: "Aesthetic Beats Sync — VN Code",
    category: "VN Mobile",
    price: 4,
    thumbnail: "/thumbnails/vn-aesthetic.jpg",
    tags: ["aesthetic", "beats sync", "mobile", "trending"],
    description:
      "Trending VN template for aesthetic beat-sync edits. Works perfectly with trending audio. Just import and replace clips.",
    features: [
      "VN app compatible",
      "Beats pre-synced",
      "Easy clip replacement",
      "Trending transitions",
      "Works on iOS & Android",
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    sales: 670,
  },
  {
    id: "vn-cinematic-08",
    title: "Cinematic Travel Vlog — VN Code",
    category: "VN Mobile",
    price: 5,
    thumbnail: "/thumbnails/vn-travel.jpg",
    tags: ["travel", "vlog", "cinematic", "mobile"],
    description:
      "Cinematic travel vlog template with film grain, color grade baked in, and smooth transitions. Made for mobile creators.",
    features: [
      "Film grain overlay",
      "Cinematic color grade",
      "Smooth transitions",
      "VN app compatible",
      "4:5 & 9:16 aspect ratios",
    ],
    rating: 4.7,
    sales: 290,
  },
  {
    id: "vn-reels-09",
    title: "Instagram Reels Pack — VN Code",
    category: "VN Mobile",
    price: 6,
    originalPrice: 9,
    thumbnail: "/thumbnails/vn-reels.jpg",
    tags: ["instagram", "reels", "pack", "trending"],
    description:
      "5 trending Instagram Reels templates optimized for 9:16. Fast cuts, text animations, and music-synced transitions.",
    features: [
      "5 unique templates",
      "9:16 optimized",
      "Music sync built-in",
      "Text animations",
      "VN app compatible",
    ],
    isBestseller: true,
    rating: 4.9,
    sales: 820,
  },
  {
    id: "capcut-trending-10",
    title: "CapCut Trending Pack",
    category: "CapCut",
    price: 5,
    thumbnail: "/thumbnails/capcut-trending.jpg",
    tags: ["capcut", "trending", "viral", "pack"],
    description:
      "5 viral CapCut templates with trending effects, transitions, and text animations. Instant viral potential for your content.",
    features: [
      "5 trending templates",
      "Viral effects included",
      "Easy to use",
      "iOS & Android compatible",
      "Tutorial video",
    ],
    isNew: true,
    rating: 4.8,
    sales: 450,
  },
  {
    id: "ae-wedding-11",
    title: "Wedding Highlight Reel",
    category: "After Effects",
    price: 20,
    thumbnail: "/thumbnails/ae-wedding.jpg",
    tags: ["wedding", "highlight", "elegant", "reel"],
    description:
      "Elegant wedding highlight reel template with soft bokeh, floral overlays, and smooth transitions. Perfect for videographers.",
    features: [
      "5-minute template",
      "Elegant typography",
      "Floral overlay pack",
      "Custom audio sync",
      "After Effects CC 2019+",
    ],
    isFeatured: true,
    rating: 4.9,
    sales: 160,
  },
  {
    id: "pr-podcast-12",
    title: "Podcast Video Template",
    category: "Premiere Pro",
    price: 13,
    thumbnail: "/thumbnails/pr-podcast.jpg",
    tags: ["podcast", "interview", "youtube", "professional"],
    description:
      "Complete podcast/interview video template with animated waveforms, lower thirds, and B-roll transitions.",
    features: [
      "Animated waveform bars",
      "Guest lower thirds",
      "Intro/outro sequence",
      "Premiere Pro CC 2020+",
      ".mogrt file included",
    ],
    rating: 4.6,
    sales: 88,
  },
];

export const categories = ["All", "After Effects", "Premiere Pro", "VN Mobile", "CapCut"] as const;

export const stats = [
  { value: "200+", label: "Templates Available" },
  { value: "5K+", label: "Happy Creators" },
  { value: "15+", label: "Software Supported" },
  { value: "100%", label: "Custom Orders Done" },
];

export const testimonials = [
  {
    name: "Arjun Mehta",
    role: "YouTube Creator • 500K Subs",
    avatar: "AM",
    text: "FXBazaar templates completely transformed my channel aesthetic. The AE transitions pack is insane quality for the price. My views doubled after the rebrand.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Wedding Videographer",
    avatar: "PS",
    text: "Ordered a custom wedding highlight template — got it delivered in 2 days, exactly what I envisioned. Absolutely professional work.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Instagram Reels Creator",
    avatar: "RV",
    text: "The VN codes are a game changer for mobile editing. My reels are getting 10x more reach since I started using FXBazaar templates.",
    rating: 5,
  },
  {
    name: "Sneha Nair",
    role: "Digital Marketing Agency",
    avatar: "SN",
    text: "We bulk-ordered custom branded templates for all our clients. Fast turnaround, premium output. Will definitely come back.",
    rating: 5,
  },
];
