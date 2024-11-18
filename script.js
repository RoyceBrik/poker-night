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
    "avi-wins": 0,
};
for (const key in tally) {
    const tallyElement = document.getElementById(key);
    if (tallyElement) {
        tallyElement.textContent = tally[key];
    }
}

// Cycling Poker Quotes
const quotes = [
    "I never bluff... except when I'm lying about not bluffing.",
    "The only thing straighter than my poker face is my losing streak.",
    "Why do they call it a 'river'? Because that’s where all my money goes.",
    "I told my wife I won at poker. She asked why I was still broke.",
    "I never fold… unless it’s laundry.",
    "The only thing I’m good at bluffing is my way out of doing chores.",
    "In poker, like in life, it's all about timing... and how much coffee you’ve had.",
    "I'm not addicted to poker, we're just in a committed relationship.",
    "I'm so good at poker, even my dog doesn't believe my bluffs.",
    "Aces are like toilet paper... you can never have too many.",
    "Poker is the only game where you can win big by losing small.",
    "I have a poker face, but my wallet always gives me away.",
    "In poker, it's not about winning, it's about making your friends think you're winning.",
    "Bluffing is like flirting, sometimes you just have to smile and hope for the best.",
    "You can't lose if you never play… but you also can’t drink beer and pretend you're a high roller.",
    "I'm raising... because I have absolutely no idea what I'm doing."
];
const quoteElement = document.getElementById("quote");

function changeQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[index];
}
changeQuote();
setInterval(changeQuote, 3600000); // Change every hour (3,600,000 ms)
