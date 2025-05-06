export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    role: "Entrepreneur",
    content: "Inmaa Group a été une révélation pour moi. J'ai acheté un Toyota Land Cruiser pour mon entreprise et le processus a été transparent et professionnel. Le véhicule est exactement comme décrit et le service après-vente est exceptionnellement réactif.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    name: "Sophie Martin",
    role: "Expatriée",
    content: "En tant qu'expatriée à Djibouti, j'avais besoin d'une voiture fiable. J'ai loué une Hyundai Tucson chez Inmaa Group pendant six mois et l'expérience a été parfaite. Service clientèle excellent, véhicule bien entretenu et assistance rapide quand j'en avais besoin.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    name: "Omar Youssouf",
    role: "Médecin",
    content: "Le garage d'Inmaa Group a sauvé ma voiture après une panne complexe que d'autres n'arrivaient pas à résoudre. Leur équipe technique est compétente et honnête. Les prix sont justes et le travail est de qualité. Je recommande vivement leurs services de réparation.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];