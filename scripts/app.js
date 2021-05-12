new Vue({
    el: "#app",
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {

           const albumsList = resp.data.response;

        })
    }
})