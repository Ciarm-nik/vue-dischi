Descrizione:
// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS:
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.



// Ricavo le chiavi dal software postman:

// Esempio album:
// {
//     "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//     "title": "New Jersey",
//     "author": "Bon Jovi",
//     "genre": "Rock",
//     "year": "1988"
// },


new Vue({
    el: "#app",
    data: {
        // Creo un array vuoto
        dischi: []
    },
    mounted() {
        // Utilizzo axios per estrarre i dati e faccio un console log dell'oggetto
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                this.dischi = resp.data.response;

                console.log(this.dischi);

                
                // Utilizzo il sort per ordinare gli album dal più recente al meno recente utilizzando prima b e poi a(per ottenere il risultato opposto devo invertire nel return a e b)
                this.dischi.sort(function (a, b) {
                    return b.year - a.year
                })
            })
    }
})