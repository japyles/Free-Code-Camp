$(document).ready(function(){
  $("#quoteButton").click(function() {
    $("#quote").html("");
    var quotes = [
      "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.<span><br/></br> -Bob Marley</span>",
      "The shortest and surest way to live with honour in the world, is to be in reality what we would appear to be; and if we observe, we shall find, that all human virtues increase and strengthen themselves by the practice of them.<span><br/></br> -Socrates</span>",
      "Yes,there are two paths you can go by, but in the long run, there's still time to change the road you're on.<span><br/></br> -Led Zeppelin</span>",
      "My fake plants died because I did not pretend to water them.<span><br/></br> -Mitch Hedberg</span>",
      "What isn't clear is why people always say 'goes without saying', yet still feel compelled to say the thing that was supposed to go without saying. Doesn't that bother you?<span><br/></br> -Shawn Spencer</span>",
      "Oh, you mean my pilot's license? That's out back in the Cessna. Or perhaps you're referring to my license to kill. Revoked. Trouble at the Kazakhstan border. I could give you the details but then I'd have to kill you, which I can't do because my license to kill has been revoked.<span><br/></br> -Shawn Spencer</span>",
      "We are men Gus. The world is our toilet.<span><br/></br> -Shawn Spencer</span>",
      "Anna Banana would like to hear 'Venus' by Bananarama. Banana!<span><br/></br> -Shawn Spencer</span>",
      "Dude, we actually started an urban legend!<span><br/></br> -Gus Burton</span>",
      "I'm not mad; I'm happy, I'm thrilled. I love looking like an idiot.<span><br/></br> -Gus Burton</span>",
      "Are you trying to tell me you went skydiving with a rabbi?<span><br/></br> -Gus Burton</span>",
      "I just work for Vizzini to pay the bills. There’s not a lot of money in revenge.<span><br/></br> -Inigo Montoya</span>",
      "You keep using that word. I do not think it means what you think it means.<span><br/></br> -Inigo Montoya</span>",
      "Hello! My name is Inigo Montoya! You killed my father! Prepare to die! <span><br/></br> -Inigo Montoya</span>"
    ];

    var random = Math.floor(Math.random() * quotes.length);
    $("#quote").append("<p>"+quotes[random]+"</p>");
    this.getElementsByTagName("title").innerHTML = quotes[random];
    //$("title").append(quotes[random]);

  });
});
