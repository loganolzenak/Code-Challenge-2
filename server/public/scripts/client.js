console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJokeButtonClick);
    getJokes();

    //add post

    function addJokeButtonClick() {
        console.log('joke button clicked!')
        var data = {};
    
        data.whoseJoke = $('#whoseJoke').val();
        data.question = $('#question').val();
        data.punchLine = $('#punchLine').val();
    
        $.ajax({
        type: 'POST',
        url: '/joke',
        data: data,
        success: function() {
            console.log("success on post!")
            getJokes();
        },
        error: function() {
            console.error("failure on post!")
            //dont make the getHistory call
        }    
        })
        //make actual request
        //display result
    }

    function getJokes(){

        $.ajax({
            type: 'GET',
            url: '/joke',
            success: function(result){
                console.log('success on getJokes GET', result);
                displayResults(result); 
            },
            error: function(){
                console.error('failure on the getJokes GET');
            },
        })

        function displayResults(results){
            const htmlArray = [];
            //loop through the results
            for (let i = 0; i < results.length; i++) {
                let data = results[i];
                //get the data off the object and into html
                const htmlString = 
                '<li>' +
                data.whoseJoke + ' ' + 
                data.question + ' ' + 
                data.punchLine + ' ' +
                '</li>';
                
                htmlArray.push(htmlString);
            }
            $('#outputDiv').empty().append(htmlArray)
        }

    //add display results

    }
}