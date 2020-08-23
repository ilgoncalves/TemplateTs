
<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-template-aws-typescript.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-aws-typescript)
[![npm](https://img.shields.io/npm/dt/react-native-template-aws-typescript.svg)](https://www.npmjs.com/package/react-native-template-aws-typescript)
[![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-advanced.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-advanced/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/ilgoncalves/TemplateTs.svg)](https://github.com/ilgoncalves/TemplateTs/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-aws-typescript.svg)](https://choosealicense.com/licenses/mit)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="https://miro.medium.com/max/1838/1*KIvhyNif1TCFJxt6kz-gsA.jpeg" alt="Logo">
  </a>

  <h3 align="center">Template React-Native + TypeScript</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Esse projeto tem a intenção de criar um template com as melhores e mais atualizadas tecnologias relacionadas ao react-native já pre-configuradas, para simplesmente você instanciar e já começar a montar seus componentes e telas. 

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript. A versão utilizada, foi a mais recente no momento da criação desse template, a v5;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;

- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);

- [React Native SVG](https://github.com/react-native-community/react-native-svg) - A Bibliotec é indicada para quem deseja utilizar vetores em formato svg no react-native. Foi utilizada também a lib [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer), que serve para utiliza-los como TSX ou JSX ;

- [React Native Elements](https://react-native-elements.github.io/react-native-elements/) - Biblioteca com diversos componentes prontos para o uso.;

- [React Native Vector Icon](https://github.com/oblador/react-native-vector-icons) - Pacote com diversos ícones. Uma forma bacana de verificar como é o nome ou até mesmo procurar algum ícone ó o site ``https://oblador.github.io/react-native-vector-icons/``;


<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
your-project-name
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── svgs/
│   ├── components/
│   │   ├── atoms/
│   │   │   └── index.ts
│   │   ├── molecules/
│   │   │   └── index.ts
│   │   ├── organims/
│   │   │   └── index.ts
│   │   ├── pages/
│   │   │   └── index.ts
│   │   └── theme/
│   │       └── index.ts
│   ├── hooks/
│   │   └── index.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   ├── interfaces/
│   │   ├── models/
│   │   ├── shared/
│   │   └── utils/
│   │       ├── helperFunctions.ts
│   │       ├── index.ts
│   │       ├── sharedStyles.ts
│   │       └── Storage.ts
│   ├── store/
│   │   ├── ducks/
│   │   │   ├── userExample/
│   │   │   │   ├── actions.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── reducer.ts
│   │   │   │   ├── sagas.ts
│   │   │   │   └── types.ts
│   │   │   ├── rootReducers.ts
│   │   │   └── rootSaga.ts
│   │   ├── helpers/
│   │   │   └── actionsHelper.ts
│   │   └── index.ts
│   ├── index.tsx
│   └── routes.tsx
├── .buckconfig
├── .eslintrc.json
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.js
├── .app.json
├── babel.config.js
├── declarations.d.ts
├── dependencies.json
├── devDependencies.json
├── index.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── tsconfig.json
└── README.md
```


### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init YourProjectName --template react-native-template-aws-typescript
```

2. adicione isso no seu package.json:

```json
{
  ...
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
  "rnpm": {
    "assets": [
      "./src/assets/fonts"
    ]
  },
  "jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
}
```
3. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e comece importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NomeDaSuaFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature!`)
5. Faça o Push da Branch (`git push origin feature/NomeDaSuaFeature`)
6. Abra um Pull Request


<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Igor Lima Gonçalves - [Github](https://github.com/ilgoncalves) - **lima-igor@hotmail.com**