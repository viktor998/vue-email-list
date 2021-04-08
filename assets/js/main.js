var app = new Vue({
    el: '#root',
    data:{
        email: [],
        emailTwo: [],
    },
    created(){
            
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                this.emailTwo.push(response.data.response)
            })
        }
            console.log(this.emailTwo)
        
    },
    methods:{
        mailGen: function(){
            
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    this.email.push(response.data.response)
                })
            }
            
        }
    }
})