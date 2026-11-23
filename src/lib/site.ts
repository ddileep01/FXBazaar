// All site content lives here. Edit this file to update the site.

export const WHATSAPP_NUMBER = "917032769747";
export const INSTAGRAM_URL = "https://www.instagram.com/fx_bazaar/";
export const INSTAGRAM_HANDLE = "@fx_bazaar";
export const EMAIL = "dileep18052001@gmail.com";

export function whatsappLink(message = "Hi FXBazaar! I'd like to order a video.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface Showcase {
  /** Full Instagram link, e.g. https://www.instagram.com/reel/ABC123/ or https://www.instagram.com/p/ABC123/ */
  url: string;
  /** Optional name, shown under the video and used in the WhatsApp order message */
  title?: string;
}

// Your Instagram reels / posts, newest first. To add one: open it → ⋯ → Copy link, paste below.
export const showcase: Showcase[] = [
  { url: "https://www.instagram.com/reel/Df6_GdyCM1R/" },
  { url: "https://www.instagram.com/p/Df64xhwiSS3/" },
  { url: "https://www.instagram.com/reel/Df0DlBSTWwK/" },
  { url: "https://www.instagram.com/reel/DfxB40hi10l/" },
  { url: "https://www.instagram.com/reel/DfnFlOvvohB/" },
  { url: "https://www.instagram.com/reel/Dfl2XTWCw-K/" },
  { url: "https://www.instagram.com/reel/DfbYy67C9yG/" },
  { url: "https://www.instagram.com/reel/Dd1w82TvpBe/" },
  { url: "https://www.instagram.com/p/DY4ParUCOqI/" },
  { url: "https://www.instagram.com/reel/DYmQdOUC1NM/" },
];

export interface Testimonial {
  name: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  { name: "Vows By Vinq", message: "Thank you so much for the beautiful invitation video! ❤️ We absolutely loved the design and the way everything was presented. It turned out exactly as we expected. Really happy with your work! 😊" },
  { name: "Rikith", message: "The invitation video came out amazing! Everyone in our family loved it. The animations, music and overall presentation were just perfect. Thank you for making our special occasion even more memorable! ❤️" },
  { name: "Vybhavi Desai", message: "Had a wonderful experience with FXBazaar. The response was quick, customisation was smooth, and the final video was beautifully designed. The quality and attention to detail were impressive. Highly recommended! ✨" },
  { name: "Pranati", message: "Thank you for the wedding invitation. It’s crisp and cute. You made the changes again and again when I asked and delivered it overnight. 😊" },
  { name: "Hindu Krishna", message: "The video came out really good! Exactly how I wanted it. Loved the detailing and the overall output. Thank you so much 😊" },
  { name: "P. Darshet", message: "Ordered it for a special occasion and everyone loved it! The template looked even better with our details. Great work!" },
  { name: "N. Dinesh", message: "Intha thakkuva time lo intha quality video expect cheyaledhu. Chala ba chesaru, thank you ❤️" },
  { name: "T. Ganesh", message: "Chala easy process! Details pampinchanu, video ready chesi pampincharu. Andhulo na details chala neat ga add chesaru ❤️" },
  { name: "A. Sai Kumar", message: "Honestly, I was a little doubtful initially, but the final video was amazing. Loved the concept and editing. Will order again!" },
  { name: "Harshini", message: "Video chusaka full happy ga anipinchindhi 😍 Chala creative ga design chesaru. Friends andhariki share chesanu!" },
  { name: "A. Chiradeep", message: "The best part is we can check the video before making payment. Such a nice experience. Really happy with the service!" },
  { name: "Santhosh", message: "Asalu chala ba vachindi video 😍 Nenu expect chesindhi kante inka better ga chesaru. Thank you so much!" },
  { name: "Dr. Vishnu", message: "Received the video within a few hours. Quality is super and the personalisation was perfect. Definitely worth it!" },
];

/** Turns an Instagram post/reel link into its embeddable iframe URL. */
export function toEmbed(url: string) {
  const match = url.match(/instagram\.com\/(?:[^/]+\/)?(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  const kind = match[1] === "reels" ? "reel" : match[1];
  return { src: `https://www.instagram.com/${kind}/${match[2]}/embed`, isReel: kind !== "p" };
}
