

var quotes = [ 

               {quote: "\"Nothing is impossible, the word itself says \'I\'m possible'! \"",
                author: "-- Audrey Hepburn",
                },

               {quote : "\"Keep your face always toward the sunshine - and shadows will fall behind you.\"" ,
                author: "-- Walt Whitman"
                },

               {quote : "\"Happiness is not something you postpone for the future; it is something you design for the      present\"", 
                author: "-- Jim Rohn"
                },

               {quote : "\"I can't change the direction of the wind, but I can adjust my sails to always reach my   destination\"" ,
                author: "-- Jimmy Dean"
                },
               
               {quote : "\"Put your heart, mind, and soul into even your smallest acts. This is the secret of success\"",
                author: " -- Swami Sivananda"
                },

              
               {quote : "\"It is during our darkest moments that we must focus to see the light\"",
                author: " -- Aristotle Onassis "
                },
                

               {quote : "\"Love the moment and the energy of that moment will spread beyond all boundaries \"",
                author: " -- Corita Kent "
                },
                    
               {quote : "\"Perfection is not attainable, but if we chase perfection we can catch excellence\"",
                author: " -- Vince Lombardi "
                },
                
                {quote : "\"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky\"",
                author: " -- Rabindranath Tagore "
                }     

              ]


 


var button = document.querySelector(".button");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");



 button.addEventListener("click", function(){
    var randomNumber = Math.floor( Math.random() * quotes.length );
    
    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
    <!-- document.body.style.backgroundImage = "url('assests/images/1.jpg')"; -->
 });