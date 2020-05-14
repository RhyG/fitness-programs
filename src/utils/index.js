const emojis = {
  strength_training: "🏋️",
  muscle_building: "💪",
  beginner_friendly: "👶",
  compound_lift_focused: "🏋️‍♂️",
  cardio: "🏃‍♂️",
  conditioning: "🚴‍♂️",
  bodyweight: "🤸‍♀️",
  dumbbell_focused: "💪",
  military_and_law_enforcement: "👮",
  running: "🏃‍♂️",
}

// Get the emoji corresponding to the tag
export const getEmoji = tag => {
  const key = tag.replace(/\s/g, "_")
  return emojis[key]
}

// Filter all programs for any with the passed tag
export const getProgramsFromTag = (programs, tag) => {
  return programs.filter(program => program.tags.includes(tag))
}
