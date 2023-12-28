function QuoteGen() {
    return (
                <>

        /*This imports the necessary js to get the pretty X button*/
        window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
        }(document, "script", "twitter-wjs"));

        let quotes = [
            ["Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", "Benjamin Franklin"]
            ["The world is a wonderful place, full of variety", "David Hockney"],
            ["In the midst of chaos, there is also opportunity", "Sun Tzu"],
            ["To obtain better results than the others, you must do something different than the others", "Sir John Templeton"],
            ["Take up one idea. Make that idea your life. Think of it, dream it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", "Swami Vivekananda"],
            ["At first dreams seem impossible, then improbable, then inevitable.", "Christopher Reeve"],
            ["Make no small plans for they have no power to stir the soul", "Niccolo Machiavelli"],
            ["History shows us that the people who end up changing the world -- the great political, social, scientific, technological, artistic, even sports revolutionaries -- are always nuts, until they are right, and then they are geniuses.", "John Eliot"],
            ["All great changes are preceded by chaos", "Deepak Chopra"],
            ["Man's mind, once stretched to a new idea, never regains its original dimensions", "Oliver Wendell Holmes"],
            ["You're braver than you believe, and stronger than you seem, and smarter than you think", "A.A. Milne"],
            ["Life is either a daring adventure, or it is nothing", "Helen Keller"],
            ["Argue for your limitations and sure enough, they're yours", "Richard Bach"],
            ["Greatest success comes just one step beyond the point at which defeat overtakes you.", "Unknown"],
            ["Success is not built on success. It's built on failure. It's built on frustration, Sometimes it's built on catastrophe.", "Sumner Redstone"]
        ];


        /*This generates a random quote, and I call this function after it's definition in order to generate a random quote on page load*/
        function genQuote() {
            let randomNum = Math.round(Math.random(1) * quotes.length);
            document.getElementById('text').innerHTML = quotes[randomNum][0];
            document.getElementById('author').innerHTML = quotes[randomNum][1];
        }
        genQuote();

        /*This takes the current quote and converts it into the appropriate hyperlink for the tweet button*/
        let twitterHref;
        function getLinkString() {
        let stringQuote = document.getElementById('text').innerText;
        let stringAuthor = document.getElementById('author').innerText;
        let fullQuote = '""' + stringQuote + '""' + ' -' + stringAuthor;
        let converted = fullQuote.split(" ");
        let hyperlink = converted.join('%20');
        twitterHref = "https://twitter.com/intent/tweet?text=" + hyperlink;
        return twitterHref;
        }
        getLinkString();


        /*This renders the "generate new quote" button to the DOM*/
        const GenButton = () => {
        return (
            <div>
        <button id="new-quote" onClick={genQuote}>Generate Random Quote <i className="fa fa-refresh" aria-hidden="true" /></button>
            </div>
        );
        }
        ReactDOM.render(<GenButton />, document.getElementById("button1"));



        /*This renders the Twitter button to the DOM*/
        const TweetButton = () => {
        return (
        <a id="tweet-quote-2" data-size="large" class="twitter-share-button" href={twitterHref}></a>
        );
        }
        ReactDOM.render(<TweetButton />, document.getElementById("button2"));



        /*This renders the Night Mode button to the DOM, which I still can't figure out how to work.*/
        const NightMode = () => {
        let mode = "day";
        let buttonGraphic;
        const htmlNight = <i class="fa-solid fa-moon"></i>;
        const htmlDay = <i class="fa-solid fa-sun"></i>;
        
        if (mode == "night") {
            buttonGraphic = htmlDay;
        } else {
            buttonGraphic = htmlNight;
        }

        return (
        <button id="night-mode-style">{buttonGraphic}</button>
        );
        }
        ReactDOM.render(<NightMode />, document.getElementById("night-mode-button"));
        </>
            );
}

export default QuoteGen