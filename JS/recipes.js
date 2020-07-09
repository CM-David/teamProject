$(() => {
    try{
        const url = 'https://api.edamam.com/search?';
        const appID = '629a402c';
        const appKey = 'ee641219e9b3411559d60ec0116cc570';
        const Q = 'q=';
        var ingList = JSON.parse(localStorage.ingredientArr);
        var selections = [];
        
        // API Call
        
        let $recipeBox = $('#recipeBox')

        $.get(url + Q + ingList + '&app_id=' + appID + '&app_key=' + appKey)
            .done((results) =>{
                console.log(results);
                for (let i = 0; i<3; i++) {
                    console.log(results.hits[i].recipe)
                    
                    let $cardDiv = $('<div>', {
                        'class': 'col flex-column h-25 boxFont m-1',
                    });

                    let $cardIMG = $('<img>', {
                        'class': "foodImage rounded-lg",
                        'src': results.hits[i].recipe.image,
                        'alt': results.hits[i].recipe.label

                    });

                    let $cardPar = $('<p', {
                        'class': "p-1 text-center font font-weight-bold",
                        'text': results.hits[i].recipe.label
                    })

                    $cardDiv.append($cardIMG)
                    $cardDiv.append($cardPar)
                    $recipeBox.append($cardDiv)
                      
                }
            })
    }
    catch (err) {
        console.error(err);
    }



})