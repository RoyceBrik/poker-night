function countdownToWednesday() {
    const now = new Date();
    const nextWednesday = new Date();
    nextWednesday.setDate(now.getDate() + ((3 - now.getDay() + 7) % 7));
    nextWednesday.setHours(20, 0, 0, 0);
    
    const timeDifference = nextWednesday - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countdownToWednesday, 1000);

const pokerQuotes = [
    "I never bluff... except when I'm lying about not bluffing.",
    "The only thing straighter than my poker face is my losing streak.",
    "I never fold… unless it’s laundry.",
    "In poker, like in life, it's all about timing... and how much coffee you’ve had.",
    "I'm not addicted to poker, we're just in a committed relationship.",
    "I'm so good at poker, even my dog doesn't believe my bluffs.",
    "Aces are like toilet paper... you can never have too many.",
    "Poker is the only game where you can win big by losing small... and vice versa.",
    "I have a poker face, but my wallet always gives me away.",
    "My poker strategy? Fold before I get emotionally involved.",
    "In poker, it's not about winning, it's about making your friends think you're winning.",
    "Bluffing is like flirting, sometimes you just have to smile and hope for the best.",
    "You can't lose if you never play… but you also can’t drink beer and pretend you're a high roller.",
    "I'm raising... because I have absolutely no idea what I'm doing."
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * pokerQuotes.length);
    document.getElementById('quote').textContent = pokerQuotes[randomIndex];
}

displayRandomQuote();
setInterval(displayRandomQuote, 10000);
