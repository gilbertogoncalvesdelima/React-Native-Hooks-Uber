Canal do youtube:

```js
https://www.youtube.com/engenheiroyoutuber
```

## Uber

### Introdução 

Neste projeto vamos se inspitar no uber, vamos fazer, uma tela de loguin, tekla de cadastro, tela de esqueci minha senha, tela principal aonde aparece o mapa, vamos manipular este mapa, éga a localização do usuário, destino do usuário, rota, calcula preço, procura motorista, todo o procedimento e vai para a corrida avalia o morista.

Vamos lá.


### Emulando o projeto

Você pode emular seu aplicativo, no android studio ou pelo expo

Este projeto estou emulando com o expo.

Para você rodar o expo você precisar instalar o node, recomendavel você instalar a versão LTS, é a mais estavel.

No terminal, digite.

npm -v = Verificar a versão do gerenciador de pacotes

Conando para navegar entre pastas
cd (Destino que você queira), a tecla tab completa no nome se você quiser
Para limpar o terminal
cls ou clear

Intalando o expo,:

 -g quer dizer instalando global, independente aonde você estiver
```js
npm install -g expo-cli
```

Para verificar se o expo está instalado

```js
expo --version
```
Para abrir seu projeto no android studio caso ja tenha instalado

```js
react-native run-ios  
```
 Para emular o aplicativo no expo 

Comando:

```js
expo start
```

### Criando um projeto

Instalar o node, da versão 8 para cima.

Comando para criar o projeto:

```js
react-native init (Nome do projeto)
```
ou 

```js
create-react-native-app (Nome do projeto)
```

## Configurando o Navigation 

Sempre quando for utilizar o react navigation, verificar a documentação, isso é muito importante

Site:

```js
reactnavigation.org
```
### Installing dependencies into a bare React Native project:

```js
yarn add react-navigation react-native-gesture-handler react-native-reanimated react-native-screens --save
```

Package.json, verificar, tem que ser maior que 0.60, para estar Ok

```js
},
  "dependencies": {
    "react-native": "0.64.3",
  },
```

Se você estiver utilizando ios

```js
cd ios
pod install
```

Dentro de pasta, app/src/build.gradle

```js
dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules
    implementation 'androidx.appcompat:appcompat:1.1.0-rc01' // Adicionado linha 1
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02' // Adicionado linha 2
    ``` 

Para finalizar react-native-gesture-handler android, modificar o arquivo MainActivity.java

```js
android/app/src/main/java/com/myreactapp/MainActivity.java
``` 

Acrescentar neste aquivo, apezar quando eu criei o projeto, já veio instalado caso não tiver no seu, import estas tres linhas abaixo

```js
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
``` 

Acrecente também, este códido abaixo caso não vim, quando você instalar seu projeto

```js
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(
      this,
      new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    });
  }
  ``` 

Agora vá no arquivo index.js ou no app.js

Agora você deve ir até a pasta index.js
No meu caso, quando eu criei o projeto ele já importou automaticamente, caso o seu não tiver importe o código abaixo

```js
import 'react-native-gesture-handler';
 ``` 

Parabéns agora está pronto nosso react-navigation

## Configurando Redux

Agora vamos configura nosso redux, para transferir dados de uma tela para outra, guardar informações do usuário
e tambpem vamos utilizar o redux persist para persistir os dados utilizando o asinc storage, uma vez que a pessoa logar no aplicativo, ele pode fechar o aplicativo, quando ele voltar e abrir o aplicativo novamente ele vai ter as mesma informações dentro dos reducer em nosso redux, vamos saber quem está logado etc...

Comando para instalar:

```js
yarn add redux react-redux redux-persist --save
```
## Instalando nosso asinc storage

```js
yarn add @react-native-community/async-storage --save
```




