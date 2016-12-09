
// global callback function for requested quote API data
function myJsonpCallback(data) {
   
   
   
   // makes p element text visible again
   window.setTimeout(textVisible, 1000);
   
   
   function textVisible() {
      
         document.getElementById('randomQuote').style.opacity = "1";
         document.getElementById('author').style.opacity = "1";
   }
   
   //Gets rid of previous quote & author - - - - - - - - - - - - - - - - - - - - 
   var pContainer = document.getElementById('aContainer');
   
   if(pContainer.children.length !== 0) {
      
         var oldQuote = document.getElementById('randomQuote');
         var oldAuthor = document.getElementById('author');
      
         pContainer.removeChild(oldQuote);
         pContainer.removeChild(oldAuthor);
      
         
      
   }
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   
   // Creates quote p element & appends to 'aContainer'
   var quoteP = document.createElement('p');
   quoteP.setAttribute('id', 'randomQuote');
   document.getElementById('aContainer').appendChild(quoteP);
   // - - - -- - - - - - - - - - - - - - - - -- - - - - - - - -
   
   // Creates author p element & appends to 'aContainer'
   var authorP = document.createElement('p');
   authorP.setAttribute('id', 'author');
   document.getElementById('aContainer').appendChild(authorP);
   // - - - -- - - - - - - - - - - - - - - - -- - - - - - - - -
   
   // default opacity in the css is 1, so have to reset to 0
   // put this here since affected elements have to exist before tuning their styles
   // the method is "getElement" not getstyling
   document.getElementById('randomQuote').style.opacity = "0";
   document.getElementById('author').style.opacity = "0";
   
   // creates text nodes out of received data
   var quoteNode = document.createTextNode(data.quoteText);
   var quoteAuthor = document.createTextNode('- ' + data.quoteAuthor);
   
   // sets href value of tweet button
   var tweetQuoteText = data.quoteText;
   var tweetAuthorText = data.quoteAuthor;
   
   document.getElementById('tweetButton').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + '"' + tweetQuoteText + '"' + '%20%20' + '-' + tweetAuthorText + '&hashtags=quotes');
   
   // appends text nodes to appropriate p element
   document.getElementById('randomQuote').appendChild(quoteNode);
   document.getElementById('author').appendChild(quoteAuthor);
   
   
   
   
   console.log(data.quoteText);
   //console.log(quoteAuthor);
}; //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// button event listener for quote API
document.getElementById('aButton').addEventListener('click', delayQuote, false);

//timeout for showMe

function delayQuote() {
   
   window.setTimeout(showMe, 2000);
}

// button click call handler: a JSONP api data request for random quote
function showMe() {
   
   
   var scriptEl = document.createElement('script');
   // scriptEl.setAttribute('type', 'text/javascript');
   scriptEl.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=myJsonpCallback&key=100000&lang=en';
   document.body.appendChild(scriptEl);
}


// button event listener for color API
document.getElementById('aButton').addEventListener('click', delayColor, false);

//timeout for showMe

function delayColor() {
   
   window.setTimeout(randomColor, 2000);
}

// button click call handler: an api data request for random color
function randomColor() {
   
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://www.colr.org/json/color/random');
   xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
         var hexCode = (JSON.parse(this.response).colors[0].hex);
         document.body.style.background = '#' + hexCode;
         document.getElementById('aButton').style.background = '#' + hexCode;
         console.log(hexCode);
      }
   }
   xhr.send();
}

// button event listener for textFades
document.getElementById('aButton').addEventListener('click', textFade, false);

function textFade() {
   
   var pContainer = document.getElementById('aContainer');
   
   if(pContainer.children.length !== 0) {
      
      document.getElementById('randomQuote').style.opacity = "0";
      document.getElementById('author').style.opacity = "0";
   }
   
}
