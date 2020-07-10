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
                for (let i = 0; i<6; i++) {
                    console.log(results.hits[i].recipe)
                    
                    let $cardDiv = $('<div>', {
                        'class': 'col-6-sm col-4-md flex-wrap flex-column h-25 boxFont m-1',
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
                    let $cardButton = $('<button>', {
                        type: "button",
                        class: "btn btn-primary",
                        'data-toggle': "modal",
                        'data-target': "#exampleModal",
                        'data-whatever': results.hits[i].recipe.label,
                        'text': results.hits[i].recipe.label
                    })

                    $cardDiv.append($cardIMG)
                    $cardDiv.append($cardButton)
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
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })