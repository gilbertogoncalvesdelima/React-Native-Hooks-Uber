import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Preload from '../screens/Preload'
import Login from '../Screens/Login'
//import HomeStack from './HomeStack'


//Navigator vai conter 3 telas
//Preload, sistema que vai precisar logar e ir para outra area, verificar se ela está logado ou não mandar para loguin ou para a tela principal de nosso aplicativo
//Login, tela de login
//HomeStack, conjunto de telas
export default createAppContainer(createStackNavigator({
Preload,
Login,
//HomeStack
}, {
    initialRouteName:'Preload',
// Este mainStack, não vai conter um header
defaultNavigationOptions:{
    header:null
}
}))