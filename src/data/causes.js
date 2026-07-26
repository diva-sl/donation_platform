import {
  Landmark,
  GraduationCap,
  HeartPulse,
  Utensils,
  Users,
  Ambulance,
  HandHeart,
} from "lucide-react";
import { MdTempleHindu } from "react-icons/md";

export const causes = [
  {
    slug: "temple-renovation",

    title: "Temple Renovation",

    icon: MdTempleHindu,

    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",

    description:
      "Preserve sacred heritage through temple restoration, kumbabishekam ceremonies, annadanam programs, and community spiritual development.",

    raised: 1850000,

    donors: 1125,

    campaigns: 28,

    benefits: [
      {
        id: 1,

        title: "Temple Restoration",

        icon: MdTempleHindu,

        description:
          "Restore and maintain historical temple structures for future generations.",

        points: [
          "Structural repairs",
          "Painting and maintenance",
          "Temple architecture protection",
        ],
      },

      {
        id: 2,

        title: "Kumbabishekam Support",

        icon: HandHeart,

        description:
          "Support sacred consecration ceremonies and spiritual traditions.",

        points: [
          "Ceremony arrangements",
          "Devotee participation",
          "Temple rituals",
        ],
      },

      {
        id: 3,

        title: "Annadanam Programs",

        icon: Utensils,

        description: "Provide free meals to devotees and people in need.",

        points: ["Daily meals", "Festival food service", "Community kitchens"],
      },

      {
        id: 4,

        title: "Heritage Preservation",

        icon: MdTempleHindu,

        description: "Protect cultural and spiritual landmarks.",

        points: [
          "Ancient structures",
          "Traditional arts",
          "Historical records",
        ],
      },
    ],
  },

  {
    slug: "education",

    title: "Education Support",

    icon: GraduationCap,

    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    description:
      "Help children access quality education, scholarships, digital learning, and school resources.",

    raised: 1250000,

    donors: 856,

    campaigns: 42,

    benefits: [
      {
        id: 1,

        title: "Scholarships",

        icon: GraduationCap,

        description: "Provide educational opportunities to deserving students.",

        points: ["School fees", "College support", "Merit scholarships"],
      },

      {
        id: 2,

        title: "School Supplies",

        icon: GraduationCap,

        description:
          "Provide books, uniforms, and essential educational materials.",

        points: ["Books", "Stationery", "Uniforms"],
      },

      {
        id: 3,

        title: "Digital Learning",

        icon: GraduationCap,

        description: "Support access to technology and online education.",

        points: ["Laptops", "Internet access", "Online courses"],
      },

      {
        id: 4,

        title: "Teacher Support",

        icon: Users,

        description: "Empower educators through resources and training.",

        points: ["Training programs", "Teaching aids", "Community learning"],
      },
    ],
  },

  {
    slug: "medical",

    title: "Medical Support",

    icon: HeartPulse,

    heroImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",

    description:
      "Support patients and families with life-saving healthcare and medical assistance.",

    raised: 2450000,

    donors: 1245,

    campaigns: 61,

    benefits: [
      {
        id: 1,

        title: "Surgeries",

        icon: HeartPulse,

        description: "Fund critical surgeries and medical procedures.",

        points: [
          "Heart surgery",
          "Emergency operations",
          "Life-saving treatments",
        ],
      },

      {
        id: 2,

        title: "Medicines",

        icon: HeartPulse,

        description: "Provide essential medicines to patients in need.",

        points: [
          "Prescription drugs",
          "Emergency medicines",
          "Long-term treatment",
        ],
      },

      {
        id: 3,

        title: "Cancer Care",

        icon: HeartPulse,

        description: "Support patients fighting cancer.",

        points: ["Chemotherapy", "Radiation therapy", "Recovery support"],
      },

      {
        id: 4,

        title: "Emergency Healthcare",

        icon: Ambulance,

        description: "Immediate assistance during emergencies.",

        points: ["Hospital admission", "Critical care", "Ambulance services"],
      },
    ],
  },
  {
    slug: "food",

    title: "Mysticpace Donation",

    icon: Utensils,

    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",

    description:
      "Provide nutritious meals, grocery kits, and hunger relief support to underprivileged families and communities.",

    raised: 950000,

    donors: 625,

    campaigns: 31,

    benefits: [
      {
        id: 1,

        title: "Daily Meals",

        icon: Utensils,

        description: "Serve nutritious meals to people facing food insecurity.",

        points: ["Fresh meals", "Community feeding", "Festival food drives"],
      },

      {
        id: 2,

        title: "Food Kits",

        icon: Utensils,

        description: "Distribute monthly grocery kits to families in need.",

        points: ["Rice and grains", "Cooking essentials", "Family support"],
      },

      {
        id: 3,

        title: "Community Kitchens",

        icon: Users,

        description: "Support local kitchens serving vulnerable communities.",

        points: ["Kitchen supplies", "Volunteer programs", "Meal preparation"],
      },

      {
        id: 4,

        title: "Nutrition Programs",

        icon: HandHeart,

        description: "Improve nutrition for children and elderly citizens.",

        points: ["Healthy meals", "Child nutrition", "Senior nutrition care"],
      },
    ],
  },
  {
    slug: "old-age",

    title: "Old Age Care",

    icon: Users,

    heroImage: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f",

    description:
      "Support senior citizens through healthcare, shelter, emotional care, and daily living assistance.",

    raised: 720000,

    donors: 432,

    campaigns: 18,

    benefits: [
      {
        id: 1,

        title: "Healthcare Support",

        icon: HeartPulse,

        description: "Provide medical care and regular health checkups.",

        points: [
          "Medical consultations",
          "Health monitoring",
          "Medicine assistance",
        ],
      },

      {
        id: 2,

        title: "Food & Nutrition",

        icon: Utensils,

        description: "Ensure nutritious meals for elderly individuals.",

        points: ["Daily meals", "Special diets", "Nutrition support"],
      },

      {
        id: 3,

        title: "Shelter Assistance",

        icon: HandHeart,

        description: "Provide safe and comfortable living environments.",

        points: ["Housing support", "Care homes", "Basic amenities"],
      },

      {
        id: 4,

        title: "Emotional Care",

        icon: Users,

        description: "Promote dignity and companionship for seniors.",

        points: ["Counseling", "Community engagement", "Social activities"],
      },
    ],
  },
  {
    slug: "emergency",

    title: "Emergency Relief",

    icon: Ambulance,

    heroImage: "https://images.unsplash.com/photo-1469571486292-b53601020fbb",

    description:
      "Deliver urgent relief during floods, fires, earthquakes, pandemics, and other disasters.",

    raised: 3200000,

    donors: 1850,

    campaigns: 75,

    benefits: [
      {
        id: 1,

        title: "Relief Kits",

        icon: HandHeart,

        description: "Distribute emergency survival kits.",

        points: ["Food supplies", "Blankets", "Essential items"],
      },

      {
        id: 2,

        title: "Medical Aid",

        icon: HeartPulse,

        description: "Provide healthcare support during emergencies.",

        points: ["First aid", "Emergency medicines", "Medical camps"],
      },

      {
        id: 3,

        title: "Temporary Shelter",

        icon: Users,

        description: "Help families displaced by disasters.",

        points: ["Safe housing", "Shelter materials", "Family assistance"],
      },

      {
        id: 4,

        title: "Rescue Operations",

        icon: Ambulance,

        description: "Support rescue teams and emergency response efforts.",

        points: [
          "Rescue equipment",
          "Transportation",
          "Volunteer coordination",
        ],
      },
    ],
  },
  {
    slug: "community",

    title: "Community Welfare",

    icon: HandHeart,

    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",

    description:
      "Empower communities through social welfare programs, skill development, and sustainable growth initiatives.",

    raised: 1850000,

    donors: 945,

    campaigns: 36,

    benefits: [
      {
        id: 1,

        title: "Community Projects",

        icon: HandHeart,

        description: "Support infrastructure and welfare initiatives.",

        points: ["Clean water", "Community centers", "Public facilities"],
      },

      {
        id: 2,

        title: "Youth Programs",

        icon: Users,

        description: "Encourage leadership and development among youth.",

        points: ["Training", "Workshops", "Skill development"],
      },

      {
        id: 3,

        title: "Women Empowerment",

        icon: HandHeart,

        description: "Create opportunities for women through support programs.",

        points: ["Entrepreneurship", "Education", "Financial independence"],
      },

      {
        id: 4,

        title: "Social Welfare",

        icon: Users,

        description: "Provide assistance to vulnerable groups.",

        points: ["Family support", "Awareness campaigns", "Community outreach"],
      },
    ],
  },
];
