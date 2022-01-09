//Aqui não importa o metodo que vou buscar, posso escolher qual eu quero exemplo firebase
export default () => ({
    signin:(email, password) => {
    return new Promise((resolve, reject)=> {  //Aqui depois de 1 segundo que vou dar a resposta
        setTimeout(()=>{
         let json = {
             error:'',
             token:'123'
         }
            resolve(json)
        }, 1000)
    })
    },
    signup:(name, email, password) => {
        return new Promise((resolve, reject)=> {  //Aqui depois de 1 segundo que vou dar a resposta
            setTimeout(()=>{
             let json = {
                 error:''
             }
             if(email == 'erro@hotmail.com') {
                 json.error = 'E-mail já existe!'
             } else {
                 json.token = '123'
             }
                resolve(json)
            }, 1000)
        })
    }
})
        