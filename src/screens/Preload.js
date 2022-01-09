import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

// Verifica e manda para uma tela
const Preload = (props) => {
    if(!props.token){ // Este token está vindo de nosso reducer
        //Caso não tenha
        //Loguin
        props.navigation.dispatch(StackActions.reset({
            index:0, // vai resetar o historico completamente, principalmente o usuario não vai poder apertar o botão de voltar para esta tela, porque vai ser resetado o historico
            actions:[
                NavigationActions.navigate({routeName:'Login'}) // dentro do arquivo MainStack você vai achar o login
            ]
        }))
    } else {
        //Caso tenha
        // Home
        props.navigation.dispatch(StackActions.reset({
            index:0, // vai resetar o historico completamente, principalmente o usuario não vai poder apertar o botão de voltar para esta tela, porque vai ser resetado o historico
            actions:[
                NavigationActions.navigate({routeName:'HomeStack'}) // dentro do arquivo MainStack você vai achar o HomeStack
            ]
        }))
    }
    return null
}

//Pegamos o token jogamos dentro de uma props para conseguir utilizar dentro de nosssa tela
const mapStateToProps = (state) => {
    return {
        token:state.userReducer.token
    }
}
export default connect(mapStateToProps)(Preload)