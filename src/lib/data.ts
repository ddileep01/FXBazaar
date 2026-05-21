export interface VideoTemplate {
  id: string;
  title: string;
  thumbnail: string;
  tags: string[];
  description: string;
  whatWeEdit: string[];
  deliveryTime: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  orders: number;
}

export const videoTemplates: VideoTemplate[] = [
  {
    id: "wedding-elegant-invite-01",
    title: "Elegant Wedding Invitation",
    thumbnail: "/thumbnails/wedding-elegant.jpg",
    tags: ["wedding", "elegant", "invitation", "cinematic"],
    description:
      "A stunning cinematic wedding invitation video with soft bokeh, floral overlays, and elegant typography. Perfect for sharing on WhatsApp and Instagram.",
    whatWeEdit: [
      "Bride & Groom names",
      "Wedding date & time",
      "Venue name & address",
      "Family names (optional)",
      "Background music preference",
    ],
    deliveryTime: "24 hours",
    isFeatured: true,
    isBestseller: true,
    rating: 4.9,
    orders: 312,
  },
  {
    id: "wedding-traditional-invite-02",
    title: "Traditional Indian Wedding Invite",
    thumbnail: "/thumbnails/wedding-traditional.jpg",
    tags: ["wedding", "traditional", "indian", "shaadi"],
    description:
      "Vibrant traditional Indian wedding invitation with classical music, floral motifs, and warm golden tones. Ideal for Hindu, Muslim, and Christian ceremonies.",
    whatWeEdit: [
      "Bride & Groom names",
      "Wedding date & time",
      "Venue name & address",
      "Parents & family names",
      "Event details (Mehndi, Sangeet, etc.)",
    ],
    deliveryTime: "24 hours",
    isFeatured: true,
    rating: 4.8,
    orders: 278,
  },
  {
    id: "wedding-simple-invite-03",
    title: "Simple & Sweet Wedding Invite",
    thumbnail: "/thumbnails/wedding-simple.jpg",
    tags: ["wedding", "minimal", "simple", "clean"],
    description:
      "Clean minimal wedding invitation with soft pastel tones and modern typography. Great for intimate gatherings and court marriages.",
    whatWeEdit: [
      "Bride & Groom names",
      "Wedding date & time",
      "Venue details",
      "Contact number for RSVP",
    ],
    deliveryTime: "12 hours",
    isNew: true,
    rating: 4.7,
    orders: 134,
  },
  {
    id: "birthday-grand-04",
    title: "Grand Birthday Celebration Video",
    thumbnail: "/thumbnails/birthday-grand.jpg",
    tags: ["birthday", "celebration", "grand", "party"],
    description:
      "A festive birthday celebration video with balloons, confetti animations, and upbeat music. Makes the birthday person feel truly special.",
    whatWeEdit: [
      "Birthday person's name",
      "Age (optional)",
      "Date of birthday",
      "Venue or event details",
      "Personal message / wishes",
    ],
    deliveryTime: "12 hours",
    isFeatured: true,
    isBestseller: true,
    rating: 4.9,
    orders: 521,
  },
  {
    id: "birthday-kids-05",
    title: "Kids Birthday Party Invite",
    thumbnail: "/thumbnails/birthday-kids.jpg",
    tags: ["birthday", "kids", "cartoon", "party"],
    description:
      "Fun and colorful kids birthday invitation with cartoon-style animations, cheerful music, and bright colors that children love.",
    whatWeEdit: [
      "Child's name",
      "Age turning",
      "Party date & time",
      "Venue & address",
      "Parent's contact number",
    ],
    deliveryTime: "12 hours",
    isNew: true,
    rating: 4.8,
    orders: 198,
  },
  {
    id: "anniversary-golden-06",
    title: "Golden Anniversary Special",
    thumbnail: "/thumbnails/anniversary-golden.jpg",
    tags: ["anniversary", "golden", "romantic", "couple"],
    description:
      "A heartwarming anniversary video with golden tones, romantic music, and elegant title cards. Perfect for sharing with family and friends.",
    whatWeEdit: [
      "Couple names",
      "Years together",
      "Anniversary date",
      "Special message",
    ],
    deliveryTime: "24 hours",
    isFeatured: true,
    rating: 4.9,
    orders: 167,
  },
  {
    id: "anniversary-simple-07",
    title: "Simple Anniversary Reel",
    thumbnail: "/thumbnails/anniversary-simple.jpg",
    tags: ["anniversary", "simple", "reel", "love"],
    description:
      "A short and sweet anniversary reel with soft music and minimal text. Perfect for Instagram Reels and WhatsApp status.",
    whatWeEdit: [
      "Couple names",
      "Anniversary year",
      "Short message",
    ],
    deliveryTime: "6 hours",
    rating: 4.7,
    orders: 89,
  },
  {
    id: "engagement-invite-08",
    title: "Engagement Ceremony Invitation",
    thumbnail: "/thumbnails/engagement-invite.jpg",
    tags: ["engagement", "ring ceremony", "invitation", "couple"],
    description:
      "Elegant engagement ceremony invitation with ring animation, soft romantic music, and stylish typography for the special announcement.",
    whatWeEdit: [
      "Bride & Groom names",
      "Engagement date & time",
      "Venue details",
      "Family names (optional)",
    ],
    deliveryTime: "24 hours",
    isFeatured: true,
    rating: 4.8,
    orders: 143,
  },
  {
    id: "naming-ceremony-09",
    title: "Naamkaran Naming Ceremony",
    thumbnail: "/thumbnails/naming-ceremony.jpg",
    tags: ["naming ceremony", "naamkaran", "baby", "celebration"],
    description:
      "A beautiful naming ceremony invitation video with soft colors, gentle music, and traditional elements to celebrate your baby's first big occasion.",
    whatWeEdit: [
      "Baby's name",
      "Parents' names",
      "Ceremony date & time",
      "Venue details",
      "Family names (optional)",
    ],
    deliveryTime: "12 hours",
    rating: 4.8,
    orders: 76,
  },
  {
    id: "baby-shower-10",
    title: "Baby Shower Invitation Video",
    thumbnail: "/thumbnails/baby-shower.jpg",
    tags: ["baby shower", "invitation", "baby", "cute"],
    description:
      "An adorable baby shower invitation with soft pastel colors, cute animations, and sweet background music that sets the perfect mood.",
    whatWeEdit: [
      "Mother-to-be's name",
      "Event date & time",
      "Venue & address",
      "RSVP contact",
      "Boy / Girl / Surprise theme",
    ],
    deliveryTime: "12 hours",
    isNew: true,
    rating: 4.7,
    orders: 54,
  },
  {
    id: "festival-diwali-11",
    title: "Diwali Wishes & Greetings Video",
    thumbnail: "/thumbnails/festival-diwali.jpg",
    tags: ["diwali", "festival", "wishes", "greetings"],
    description:
      "A warm and festive Diwali wishes video with diya animations, sparkling effects, and heartfelt greetings. Great for businesses and personal use.",
    whatWeEdit: [
      "Your name / business name",
      "Personal message or wishes",
      "Logo (for business — optional)",
    ],
    deliveryTime: "6 hours",
    isBestseller: true,
    rating: 4.9,
    orders: 445,
  },
  {
    id: "festival-holi-12",
    title: "Holi Celebration Greetings",
    thumbnail: "/thumbnails/festival-holi.jpg",
    tags: ["holi", "colors", "festival", "greetings"],
    description:
      "A vibrant and colorful Holi celebration video with color splash effects and festive music. Share the joy of Holi with everyone.",
    whatWeEdit: [
      "Your name / business name",
      "Short wishes message",
    ],
    deliveryTime: "6 hours",
    rating: 4.8,
    orders: 312,
  },
  {
    id: "farewell-13",
    title: "Farewell Memory Video",
    thumbnail: "/thumbnails/farewell.jpg",
    tags: ["farewell", "memories", "goodbye", "tribute"],
    description:
      "A touching farewell video montage to bid goodbye to a colleague, friend, or teacher. Filled with warm messages and memorable moments.",
    whatWeEdit: [
      "Person's name",
      "Organisation / school / college name",
      "Years of association",
      "Messages from team members (up to 5)",
      "Farewell date",
    ],
    deliveryTime: "24 hours",
    isNew: true,
    rating: 4.8,
    orders: 67,
  },
  {
    id: "corporate-promo-14",
    title: "Business Promo Reel",
    thumbnail: "/thumbnails/corporate-promo.jpg",
    tags: ["business", "promo", "corporate", "brand"],
    description:
      "A professional business promotion reel with clean animations, brand colors, and a strong call to action. Perfect for Instagram and WhatsApp marketing.",
    whatWeEdit: [
      "Business name & tagline",
      "Services / products offered",
      "Contact number & address",
      "Logo (preferred)",
      "Brand colors (optional)",
    ],
    deliveryTime: "48 hours",
    isFeatured: true,
    rating: 4.9,
    orders: 98,
  },
  {
    id: "reels-instagram-15",
    title: "Instagram Reel Edit",
    thumbnail: "/thumbnails/reels-instagram.jpg",
    tags: ["reels", "instagram", "trending", "social media"],
    description:
      "A trending-style Instagram Reel with beat-sync cuts, smooth transitions, and text overlays. Send your footage and we'll turn it into a viral reel.",
    whatWeEdit: [
      "Your footage / photos (send via WhatsApp)",
      "Caption / text overlays",
      "Music preference",
      "Reel style (fast cuts / slow / cinematic)",
    ],
    deliveryTime: "24 hours",
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    orders: 156,
  },
  {
    id: "reels-youtube-shorts-16",
    title: "YouTube Shorts Style Edit",
    thumbnail: "/thumbnails/reels-shorts.jpg",
    tags: ["youtube shorts", "short video", "trending", "edit"],
    description:
      "A punchy YouTube Shorts style edit with dynamic transitions, bold text, and attention-grabbing hooks. Perfect for growing your YouTube channel.",
    whatWeEdit: [
      "Your footage / photos (send via WhatsApp)",
      "Channel name / watermark",
      "Text overlays & captions",
      "Hook / intro text",
    ],
    deliveryTime: "24 hours",
    rating: 4.7,
    orders: 87,
  },
];

export const stats = [
  { value: "17", label: "Video Templates" },
  { value: "35+", label: "Orders Delivered" },
  { value: "24 hrs", label: "Avg. Delivery Time" },
  { value: "100%", label: "Satisfaction Rate" },
];

export const testimonials = [
  {
    name: "Reeshma Pulaparthi",
    role: "Wedding Invitation — Hyderabad",
    avatar: "PR",
    text: "We ordered the elegant wedding invitation and it was beyond our expectations! Delivered in less than 24 hours. All our guests loved it on WhatsApp.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    role: "Business Promo — Bangalore",
    avatar: "SK",
    text: "Ordered a business promo reel for our new product launch. The quality was professional and the turnaround was super fast. Will order again!",
    rating: 5,
  },
  {
    name: "Meena Iyer",
    role: "Birthday Celebration — Chennai",
    avatar: "MI",
    text: "Got a birthday video made for my mom's 60th. She cried happy tears when she saw it! The team was very responsive and made all the changes I asked for.",
    rating: 5,
  },
  {
    name: "Arun Patel",
    role: "Diwali Greetings — Ahmedabad",
    avatar: "AP",
    text: "Ordered Diwali greetings for my shop. Got it in just 6 hours with our brand name. All customers loved it. Already booked for next festival season!",
    rating: 5,
  },
];
