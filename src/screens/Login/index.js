import React, { useState } from 'react'
import { 
  Container, 
  Header, 
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemText
} from './styled'

const Page = () => {

  const [activeMenu, setActiveMenu] = useState('signin')

  return (
    <Container>
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


      
    </Container>
  );
};

export default Page;