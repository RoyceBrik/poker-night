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
    "Why do they call it a 'river'? Because that’s where all my money goes.",
    "Poker is like sex: If you don't have a good partner, you better have a good hand.",
    "Aces are like toilet paper... you can never have too many.",
    "I never fold… unless it’s laundry.",
    "I'm raising... because I have absolutely no idea what I'm doing."
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * pokerQuotes.length);
    document.getElementById('quote').textContent = pokerQuotes[randomIndex];
}

displayRandomQuote();
setInterval(displayRandomQuote, 10000);
