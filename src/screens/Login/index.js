import React, { useState } from 'react'
import { StatusBar, Platform } from 'react-native'

import { 
  Container, 
  Header, 
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemText,
  Input,
  ActionButton,
  ActionButtonText
} from './styled'

const Page = () => {

  const [activeMenu, setActiveMenu] = useState('signin')

  return (
    <Container behavior={Platform.OS === 'ios'?'padding':null}> {/*Resolvendo problema de teclado, ajustes, behavior={Platform.OS === 'ios'?'padding':null}> */}
    <StatusBar barStyle="light-content"/>
      <Header>
        <HeaderTitle>Uber Clone</HeaderTitle>
      </Header>

      <Menu>
        <MenuItem active={activeMenu =='signin'} onPress={()=>setActiveMenu('signin')} underlayColor="transparent"> 
        {/*active={true seleciona o item} */}
          <MenuItemText>Login</MenuItemText>
        </MenuItem>

        <MenuItem active={activeMenu == 'signup'} onPress={()=>setActiveMenu('signup')} underlayColor="transparent">
          <MenuItemText>Cadastrar</MenuItemText>
        </MenuItem>
      </Menu>
     
    {activeMenu == 'signup' && 
    <Input placeholder="Nome"/>
    }  
     
    
    <Input placeholder="E-mail"/> 

    <Input placeholder="Senha"/> 
    
    {activeMenu == 'signin' && 
    <ActionButton>
    <ActionButtonText>Login</ActionButtonText>  
    </ActionButton>
    }
    
    {activeMenu == 'signup' && 
    <ActionButton>
    <ActionButtonText>Cadastar</ActionButtonText>  
    </ActionButton>
  }

    </Container>
  );
};

export default Page;