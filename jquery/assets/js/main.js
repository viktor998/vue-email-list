function randMail(){
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        method: 'GET',
        success: function(data){
            $("#block").append(`<span>${data.response}<span>`)

            console.log((`<span>${data.response}<span>`))
        },
        error: function(richiesta, stato, errori){
            alert("ERRORE"+ errori)
        }
    })
}


$('#btn').click(function(){
    for (let i = 0; i < 10; i++) {
        randMail()
        
    }
})

