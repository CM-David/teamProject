// Script will do two main things, add/remove from ingredients item list, and send list to recipe page

$(() => {
    $("#mainInput").keypress(function (e) {
        console.log('keypress'); 
        if(e.which === 13){                 // Upon hitting return, do the following:
            let item = $(this).val();       // Save input text as variable item
            
            let li = $("<li>",{             // make li element
                "class":"list-item",
                "text": item
            });
           
            let span = $("<span>",{"class":"trash"});
                        let i = $('<i>',{"class":"fas fa-trash-alt"});
                        span.append(i);
                        li.prepend(span);
                        $('ul').append(li);
                        $('input').val('');                                 // clear input field
        }
    });

    $('#submitButton').on('click',function(event){              // On sumbit, save ingredients list to local storage
        let ingredients = '';                                   // Init ingredients variable
        var listEl = $('ul li')
        console.log(listEl);
        for (var j=0; j<(('ul li').length);j++){     // For each ingredient in list
            var li = $('ul li')[j];                  // Init list element
            if (li !== undefined){                              // Only for valid inputs
                var text = li.innerText;                        // Save innertext of list element
                ingredients += text;                            // Add ingredient to list of ingredients
                ingredients += ',';                             // add comma for more ingredients
                
                // window.location.pathname = '/new'
            }
        }
    ingredients = ingredients.slice(0,-1);                      // Not sure what this is for yet??
    console.log(ingredients);
    localStorage.ingredientArr = JSON.stringify(ingredients)      // Save ingredients list in local storage
    window.location='HTML/page2Layout.html';                             // send browser to recipes landing
    });



    $('#mainUL').on('click','.trash',function(){
        $(this).parent().fadeOut(400,function(){
            $(this).remove();
        })
    });
    


})
