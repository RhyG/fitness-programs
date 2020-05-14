const programs = [
  {
    program: "5/3/1 Boring But Big",
    description:
      "One of the most popular 5/3/1 programs built for size and strength.",
    url: "https://jimwendler.com/blogs/jimwendler-com/101077382-boring-but-big",
    tags: [
      "strength strength",
      "muscle building",
      "5/3/1",
      "compound lift focused",
    ],
    days: "3-5",
  },
  {
    program: "5/3/1 For Beginners",
    description: "A beginner friendly variety of the renowned 5/3/1 program.",
    url: "https://thefitness.wiki/routines/5-3-1-for-beginners/",
    tags: [
      "strength training",
      "muscle building",
      "5/3/1",
      "compound lift focused",
      "beginner friendly",
    ],
    days: "3-5",
  },
  {
    program: "5/3/1 Building the Monolight",
    description: "3 day routine focused on building size.",
    url:
      "https://jimwendler.com/blogs/jimwendler-com/101078918-building-the-monolith-5-3-1-for-size",
    tags: [
      "strength training",
      "muscle building",
      "5/3/1",
      "compound lift focused",
    ],
    days: "3",
  },
  {
    program: "Greyskull LP",
    description:
      "A beginner 3-day per week powerbuilding program great for strength and size.",
    url:
      "https://physiqz.com/powerlifting-programs/greyskull-lp-best-powerbuilding-routine-beginners-gslp/",
    tags: [
      "strength training",
      "muscle building",
      "compound lift focused",
      "beginner friendly",
    ],
    days: "3",
  },
  {
    program: "Strong Curves",
    description:
      "Developed by world-renowned gluteal expert Bret Contreras, Strong Curves offers an extensive fitness and nutrition guide for women seeking to improve their physique, function, strength, and mobility.",
    url: "https://www.bretcontreras.store/products/strong-curves",
    tags: [
      "strength training",
      "muscle building",
      "compound lift focused",
      "women",
    ],
  },
  {
    program: "nSuns LP",
    description: "",
    url: "https://www.google.com",
    tags: ["strength training", "muscle building", "compound lift focused"],
    days: "3-6",
  },
  {
    program: "Westside for Skinny Bastards",
    description:
      "An effective strength training program developed by Joe DeFranco for beginner atheletes.",
    url:
      "https://www.defrancostraining.com/westside-for-skinny-bastards-part3/",
    tags: ["strength training, muscle building, compound lift focused"],
  },
  {
    program: "Couch to 5k",
    description:
      "9 week program to take people from their couch to running to 5km.",
    url: "http://runmoreapp.com/couch-to-5k/#workout-schedule",
    tags: ["cardio", "running", "beginner friendly"],
  },
  {
    program: "Mettalicdpas PPL",
    description: "Linear progression based push/pull/legs program.",
    url:
      "https://www.reddit.com/r/Fitness/comments/37ylk5/a_linear_progression_based_ppl_program_for/",
    tags: ["strength training", "muscle building", "beginner friendly"],
    days: "6",
  },
  {
    program: "Tactical Barbell",
    description:
      "A comprehensive strength and conditioning system – for the operational athlete that requires elite levels of physical performance across multiple fitness domains.",
    url: "http://tacticalbarbell.com/",
    tags: ["military and law enforcement", "strength training", "conditioning"],
    days: "2-6",
  },
  {
    program: "GZCL Method",
    description:
      "A flexible training program by Cody LeFever suitable for a variety of different goals.",
    url:
      "http://swoleateveryheight.blogspot.com/2014/07/the-gzcl-method-simplified_13.html",
    tags: ["muscle building", "strength training", "compound lift focused"],
  },
  {
    program: "Average to Savage",
    description:
      "A paid strength and muscle building program, Average to Savage 2.0 is a full 21-week macrocycle designed to adapt to your schedule, your preferences, and your rate of progress.",
    url: "https://www.strongerbyscience.com/average-to-savage/",
    tags: ["muscle building", "strength training"],
  },
  {
    program: "Average to Savage",
    description:
      "A paid strength and muscle building program, Average to Savage 2.0 is a full 21-week macrocycle designed to adapt to your schedule, your preferences, and your rate of progress.",
    url: "https://www.strongerbyscience.com/average-to-savage/",
    tags: ["muscle building", "strength training"],
  },
  {
    program: "PHUL (Power Hypertrophy Upper Lower)",
    description: "A 4-day strength and size program by Brandon Campbell.",
    url: "https://www.muscleandstrength.com/workouts/phul-workout",
    tags: ["muscle building", "strength training"],
  },
  {
    program: "PHAT (Power Hypertrophy Adaptive Training)",
    description: "A 5-day strength and size program by Dr. Layne Norton.",
    url: "https://www.muscleandstrength.com/workouts/phul-workout",
    tags: ["muscle building", "strength training"],
  },
  {
    program: "Arnold Schwarzenegger's Splits",
    description:
      "Body part splits from Arnold Schwarzenegger. Two variations, both are 6 day programs.",
    url:
      "https://www.muscleandstrength.com/workouts/arnold-schwarzenegger-volume-workout-routines",
    tags: ["muscle building"],
  },
  {
    program: "r/bodyweightfitness Routine",
    description:
      "The recommended routine from r/BodyWeightFitness. Provides many variations of the classic bodyweight movements for different levels of strength and skill.",
    url:
      "http://old.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine",
    tags: ["muscle building", "beginner friendly", "bodyweight"],
  },
  {
    program: "Start Bodyweight Basic Routine",
    description:
      "A simple and effective bodyweight routine that requires almost no equipment.",
    url: "http://www.startbodyweight.com/p/start-bodyweight-basic-routine.html",
    tags: ["muscle building", "beginner friendly", "bodyweight"],
  },
  {
    program: "Greg Nuckols - How to Make Gains Without A Gym",
    description:
      "A bunch of exercises and advice on training without access to traditional gym equipment.",
    url: "https://www.strongerbyscience.com/no-gym/",
    tags: ["muscle building", "beginner friendly", "bodyweight"],
  },
  {
    program: "Brian Alsruhe's Conditioning Templates",
    description:
      "Conditioning exercises and advice from strongman Brian Alsruhe.",
    url: "https://www.youtube.com/watch?v=FQCpoALd3Nw",
    tags: ["conditioning"],
  },
  {
    program: "Jim Wendler - Conditioning 101",
    description: "A list of awesome conditioning exercises and advice.",
    url: "https://www.t-nation.com/training/conditioning-101",
    tags: ["conditioning"],
  },
  {
    program: "Tactical Barbell II - Conditioning",
    description:
      "A book containing structured, battle tested conditioning protocols and advice guaranteed to get you fitter.",
    url:
      "https://www.amazon.com.au/Tactical-Barbell-II-Conditioning-Black-ebook/dp/B0143HDCWS",
    tags: ["conditioning"],
  },
  {
    program: "Hal Higdon's Novice 5k Program",
    description:
      "Designed for beginning runners or for runners who want to take a low-mileage approach to their training.",
    url: "https://www.halhigdon.com/training-programs/5k-training/novice-5k/",
    tags: ["cardio"],
  },
]

const tags = [
  "strength training",
  "muscle building",
  "beginner friendly",
  "compound lift focused",
  "cardio",
  "conditioning",
  "bodyweight",
  "dumbbell focused",
  "running",
  "military and law enforcement",
]

module.exports = { programs, tags }
