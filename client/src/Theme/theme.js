import {createGlobalStyle} from 'styled-components'


export const lightTheme = {
    body: '#fff',
    panelHeaderBG: '#f0f2f5',
    colorText: '#2e2e2e ',
    iconColor: '#54656f',
    dropdownBG: '#fff',
    bgHover: '#f5f6f6',
    secondColorBG: '#ececec',
    bgDefault: '#ffff',
    searchInput: '#f0f2f5',
    bgSecond: '#efeae2',
    bgImg: '/static/media/bg-chat-dark.39f53e74.png',
    messageChatOWN: '#d9fdd3',
    bgMessage: '#fff',
    welcomeIMG: '/static/media/welcomeL.e8a752cb.svg'



}

export const darkTheme = {
    body: '#000',
    panelHeaderBG: '#2a2f32',
    colorText: '#e1e1e3',
    iconColor: '#ffff',
    dropdownBG: '#2a2f32',
    bgHover: '#131c219c',
    secondColorBG: '#323739',
    bgDefault: '#131c21',
    searchInput: '#323739',
    bgSecond: '#0d1418',
    bgImg: './static/media/bg-chat.c4a96903.png',
    messageChatOWN: '#005c4b ',
    bgMessage: '#202c33',
    welcomeIMG: '/static/media/welcomeD.e45ffdf2.svg'
}

export const GlobalStyled = createGlobalStyle`

    body {
        background-color : '${(props) => props.theme.body}';
  transition: --time-transition all;

    }

    .text {
        background: ${(props) => props.theme.bgMessage}
    }
    .h-info-option i {
        color: ${(props) => props.theme.iconColor}
    }

    .menu-item:hover {
        background-color: ${(props) => props.theme.bgHover} !important;
    
    }

    .ui.icon.input i {
        color: ${(props) => props.theme.iconColor}
    
    }

    .own{

    background-color: ${(props) => props.theme.messageChatOWN} !important;

    }

    .welcome img {
        background-image: url(${(props) => props.theme.welcomeIMG})
    }

    .chat-message{ background-image: url('${(props) => props.theme.bgImg}'); }

    :root{
        --icon-color: ${(props) => props.theme.iconColor};
        --color-text: ${(props) => props.theme.colorText} !important;
        --welcomeIMG: ${(props) => props.theme.welcomeIMG} ;

        --app-background: #090e11;
        --app-background-rgb: 9,14,17;
        --app-background-deeper: #090e11;
        --second-color: ${(props) => props.theme.secondColorBG};
        --search-input: ${(props) => props.theme.searchInput} !important;
      
        /* Lateral Izquierdo */
        --background-default: ${(props) => props.theme.bgDefault};
      
        --bg-second: ${(props) => props.theme.bgSecond} ;
        --panel-header-background: ${(props) => props.theme.panelHeaderBG} !important;
        --background-default-active:${(props) => props.theme.bgHover} !important;
        --search-input: #323739;
        --size-normal: 1.4rem;
        --font-weight: 500;
        --dropdown-bg: ${(props) => props.theme.dropdownBG};
        --green-sure: #10e762;
        --shadow-rgb: 0,0,0;
      }

`;