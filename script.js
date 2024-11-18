// Countdown Timer to Next Wednesday at 8 PM PST
function getNextWednesday() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hourNow = now.getHours();
    const minuteNow = now.getMinutes();
    const secondNow = now.getSeconds();

    // Calculate days until next Wednesday
    let daysUntilWednesday = (3 - dayOfWeek + 7) % 7;

    // If today is Wednesday but it's past 8 PM, set it to the next week
    if (daysUntilWednesday === 0 && (hourNow > 20 || (hourNow === 20 && (minuteNow > 0 || secondNow > 0)))) {
        daysUntilWednesday = 7;
    }

    // Create the date for next Wednesday at 8 PM PST (PST is UTC-8)
    const nextWednesday = new Date();
    nextWednesday.setDate(now.getDate() + daysUntilWednesday);
    nextWednesday.setHours(20, 0, 0, 0); // 8 PM PST

    return nextWednesday;
}

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const targetDate = getNextWednesday().getTime();
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

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately

// Winner Tally
const tally = {
    "john-wins": 5,
    "jane-wins": 3,
    "royce-wins": 7
};
for (const key in tally) {
    const tallyElement = document.getElementById(key);
    if (tallyElement) {
        tallyElement.textContent = tally[key];
    }
}

// Cycling Poker Quotes
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
