

var quotes = [ 

               {quote: "\"Nothing is impossible, the word itself says \'I\'m possible'! \"",
                author: "-- Audrey Hepburn",
                image: " http://www.wallpapers13.com/wp-content/uploads/2016/01/Mountains-landscapes-nature-trees-wallpaper-Hd-915x515.jpg" 
                },

               {quote : "\"Keep your face always toward the sunshine - and shadows will fall behind you.\"" ,
                author: "-- Walt Whitman",
                <!-- image : url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDIqdUBFLnDN_hSHN_uvc_HWcItRuz27C_04A1x6WdnCTEoV_1ew") -->
                },

               {quote : "\"Happiness is not something you postpone for the future; it is something you design for the      present\"", 
                author: "-- Jim Rohn",
                <!-- image : url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZF-NkNgQnoOOD4oYVf8CqYU5NBkcHkLpOpiGh67iH3MHd9HTEQQ") -->
                },

               {quote : "\"I can't change the direction of the wind, but I can adjust my sails to always reach my   destination\"" ,
                author: "-- Jimmy Dean",
                <!-- image : url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1VrdXdHtv7rpjiatXhN7lqLyvrggTks-LOHPonkqPwVywmG2lA") -->
                },
               
               {quote : "\"Put your heart, mind, and soul into even your smallest acts. This is the secret of success\"",
                author: " -- Swami Sivananda",
                <!-- image : url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT29E_IsB0_0K3ZlWWUMumUrm9yq4CVxfb77ZnbsDouu0FRSiaQ3w") -->
                },

              
               {quote : "\"It is during our darkest moments that we must focus to see the light. Aristotle Onassis\"",
                author: " -- Aristotle Onassis ",
                <!-- image : url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-TYGRwPAQef-2a77OZqyu-MxP6VLiDTejjj92XYGkq-CEr3amjQ") -->
                },
                

               {quote : "\"Love the moment and the energy of that moment will spread beyond all boundaries \"",
                author: " -- Corita Kent ",
                <!-- image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2f8tgwUNptk5zuwk-uNqXPMtRqgIYRKoA5srzoAjvKiltuiWXHA" -->
                },
                    
               {quote : "\"Perfection is not attainable, but if we chase perfection we can catch excellence\"",
                author: " -- Vince Lombardi ",
                <!-- image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSumB5S8I_2i8zoYgYCmcPCwIR8z8Cp85fPsNcWWvUEgGB6PpCQhQ" -->
                },
                
                {quote : "\"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky\"",
                author: " -- Rabindranath Tagore ",
                <!-- image : "http://renatures.com/wp-content/uploads/2016/09/other-shine-colors-nice-branches-golden-mirrored-pretty-lovely-beautiful-autumn-october-colorful-foliage-falling-glow-leaves-reflection-tree-nature-fall-cool-wallpapers-1366x768.jpg" -->
                }     

              ]


 


var button = document.querySelector(".button");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");
var image = document.querySelector("img");



 button.addEventListener("click", function(){
    var randomNumber = Math.floor( Math.random() * quotes.length );

    quote.innerHTML = quotes[0].quote;
    author.innerHTML = quotes[0].author;
    document.body.style.backgroundImage= url("quotes[0].image");
 
 });