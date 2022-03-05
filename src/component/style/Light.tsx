import styled from 'styled-components';
import { Style } from './Style';

const LightTheme: Style = {
  name: 'Light',
  maintenance: {
    container: styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F5F5F5;

      & > h2 {
        padding: 0;
        margin: 0;
        font-family: Arial, sans-serif;
        font-size: 34px;
        font-weight: 300;
        color: #545454;
      }
    `
  },
  main: {
    container: styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      flex-direction: row;
      background-color: #F6F6F6;
    `
  },
  navigation: {
    container: styled.div`
      display: flex;
      width: 250px;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F1F1F1;
    `,
    header: {
      container: styled.div`
        display: flex;
        width: 100%;
        height: 10%;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > h2 {
          font-family: 'Roboto', sans-serif;
          color: #5C5C5C;
        }
      `,
      title: styled.h2`
        font-size: 34px;
        font-weight: 500;
        line-height: 80%;
      `,
      subtitle: styled.h2`
        font-size: 14px;
        font-weight: 400;
      `
    },
    body: styled.div`
      display: flex;
      flex-grow: 1;
      width: 80%;
      flex-direction: column;
    `,
    content: {
      container: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-grow: 1;
        margin: 25px 0 25px 0;
      `
    },
    divider: styled.div`
      width: 100%;
      height: 1px;
      background-color: #E0E0E0;
    `,
    footer: {
      container: styled.div`
        display: flex;
        width: 100%;
        height: 5%;
      `
    }
  }
}

export default LightTheme;