document.querySelector('.get-jokes').addEventListener('click', loadData)

function loadData(e){

    const number = document.querySelector('input[type = "number"]').value 

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function(){
        if( this.status === 200){
            const response =JSON.parse(this.responseText)
            // console.log(response)

            let output = ''
            if(response.type === 'success'){
                response.value.forEach(function(jokes){
                    output += `<li>${jokes.joke}</li>`
                });
            }else{
                output = `<li>Something went wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output

        }
    }
    document.querySelector('.jokes').innerHTML = ''
    
    xhr.send()

    e.preventDefault()
}