function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// note to self: will do it after submission to challenge, what's important is to be able to submit first
