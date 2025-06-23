import targetImage from "../assets/bulls-eye.webp";
import mehImage from "../assets/meh.webp";
import thumbsUpImage from "../assets/thumbs-up.webp";

function getEmojiByRating(rating: number) {
  if (rating >= 4.5) return targetImage; // Exceptional
  else if (rating >= 4.0) return mehImage; // Recommended
  else if (rating >= 3.0) return thumbsUpImage; // Meh
  else return null; // Skip
}

export default getEmojiByRating;
