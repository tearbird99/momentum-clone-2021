const quotes = [
  {
    quote: "What does not kill me, strengthens me.",
    book: "Twilight of the Idols (1889)",
  },
  {
    quote: "Against tedium even the Gods struggle in vain.",
    book: "The Antichrist (1888)",
  },
  {
    quote: "What a great in man is that he is a bridge and not a goal.",
    book: "Thus Spoke Zarathustra (1883)",
  },
  {
    quote: "Without music life would be a mistake.",
    book: "Twilight of the Idols (1889)",
  },
  {
    quote: "Convictions are more dangerous enemies of truth than lies.",
    book: "Human, All Too Human (1878)",
  },
  {
    quote: "Close beside my knowledge lieth my black ignorance.",
    book: "Thus Spoke Zarathustra (1883)",
  },
  {
    quote: "He who cannot give anything away cannot feel anything either.",
    book: "The Will to Power (1901)",
  },
  {
    quote: "Morality is the herd-instinct in the individual.",
    book: "The Gay Science or The Joyful Wisdom (1882)",
  },
  {
    quote: "To recognise untruth as a condition of life.",
    book: "Beyond Good and Evil (1886)",
  },
  {
    quote:
      "Live with the mind that it is okay to live this life completely the same once again.",
    book: "The Gay Science or The Joyful Wisdom (1882)",
  },
];

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
