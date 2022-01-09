import React from 'react';
import { Provider }  from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store'

import MainStack from './src/navigators/MainStack';
//Meu mainStack vai abrir meu Preload, meu preload vai jogar para login,e vai mostrar login

export default () => (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <MainStack />
   </PersistGate>

  </Provider>
)