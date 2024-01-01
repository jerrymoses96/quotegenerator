// get quotes from API
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-Quote");

// let apiQuotes = [];

// show new quote

function newQuote() {
  // pick a random quote
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  console.log(quote.author);
//   check if author field is blank
if(!quote.author){
    authorText.textContent = 'Unknown';
}
else{
    authorText.textContent = quote.author;
}


  quoteText.textContent = quote.text;
}

// get quotes from api 
// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // catching errors
//   }
// }
// tweet quote 

function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

// event listners

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
// on load
newQuote();

// getQuotes();
