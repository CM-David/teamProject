$(() => {
    try{
        const appID = config.appID;
        const appKey = config.appKey;
        const url = 'https://api.edamam.com/search?';
        const Q = 'q=';
        var ingList = JSON.parse(localStorage.ingredientArr);
        var selections = [];
        
        // API Call
        
        let $recipeBox = $('#recipeBox')

        $.get(url + Q + ingList + '&app_id=' + appID + '&app_key=' + appKey)
            .done((results) =>{
                console.log(results);
                localStorage.resultsList = JSON.stringify(results)

                for (let i = 0; i<9; i++) {
                    console.log(results.hits[i].recipe)
                    
                    let $cardDiv = $('<div>', {

                        'class': 'col-sm-6 col-md-3 col-lg-2 flex-wrap flex-column h-25 boxFont m-1 align-items-center',
                    });

                    let $cardIMG = $('<img>', {
                        'class': "foodImage rounded-lg",
                        'src': results.hits[i].recipe.image,
                        'alt': results.hits[i].recipe.label

                    });

                    // let $cardPar = $('<p>', {
                    //     'class': "p-1 text-center font font-weight-bold",
                    //     'text': results.hits[i].recipe.label
                    // })

                    let $buttonDiv = $('<div>', {

                        class: "w-100 p-2 d-flex flex-row justify-content-center align-items-center"
                    })

                    let $cardButton = $('<button>', {
                        type: "button",

                        class: "btn2 second",

                        'data-toggle': "modal",
                        'data-target': "#exampleModal",
                        'data-whatever': results.hits[i].recipe.label,
                        'text': results.hits[i].recipe.label,
                        'data-index': i
                    })

                    $buttonDiv.append($cardButton)
                    $cardDiv.append($cardIMG)
                    $cardDiv.append($buttonDiv)
                    $recipeBox.append($cardDiv)

                    
                      
                }
                
            })
    }
    catch (err) {
        console.error(err);
    }



})

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipeName = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text("Nutrition Information for: ")
    modal.find('.modal-recipe').text(recipeName)
    

    var index = button.data('index')
    var resultsList = JSON.parse(localStorage.resultsList)
    var nutrition = resultsList.hits[index].recipe.totalDaily
    var recipeURL = resultsList.hits[index].recipe.url
    console.log(nutrition);
    console.log(Object.keys(nutrition).length);
    var len = Object.keys(nutrition).length

    let $nutritionBox = $('.nutrition-div')

    $('#urlLink').attr('href', recipeURL)

    for (k of Object.keys(nutrition)) {
        console.log(k);
        let text = nutrition[k].label + ': ' + nutrition[k].quantity.toFixed(0) + '% DV'
        let $nutrient = $('<p>', {
            'text': text,
            'class' : 'font p-0'
            })
        console.log(text);
        $nutritionBox.append($nutrient)
      }

    

  })