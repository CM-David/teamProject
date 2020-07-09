$(() => {
    try{
        const url = 'https://api.edamam.com/search?';
        const appID = '629a402c';
        const appKey = 'ee641219e9b3411559d60ec0116cc570';
        const Q = 'q=';
        var ingList = JSON.parse(localStorage.ingredientArr);
        var selections = [];
        
        // API Call
        
        $.get(url + Q + ingList + '&app_id=' + appID + '&app_key=' + appKey)
            .done((results) =>{
                console.log(results);
                for (let i = 0; i<3; i++) {
                    console.log('attempt to read results');
                    console.log(results.hits[i]);
                }
            })
    }
    catch (err) {
        console.error(err);
    }



})