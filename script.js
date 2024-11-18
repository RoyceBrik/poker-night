// Countdown Timer
const targetDate = new Date("2024-12-01T19:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        timerElement.textContent = "It's Poker Night!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Winner Tally (Sample data)
const tally = {
    "john-wins": 5,
    "jane-wins": 3,
    "royce-wins": 7
};
for (const key in tally) {
    document.getElementById(key).textContent = tally[key];
}

// Cycling Quotes
const quotes = [
    "Poker is war. People pretend it is a game.",
    "You will show your poker greatness by the hands you fold, not the hands you play.",
    "The smarter you play, the luckier you’ll be.",
    "Trust everyone, but always cut the cards.",
    "Life is not always a matter of holding good cards, but sometimes, playing a poor hand well."
];
const quoteElement = document.getElementById("quote");

function changeQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[index];
}
changeQuote();
setInterval(changeQuote, 3600000); // Change every hour (3,600,000 ms)
