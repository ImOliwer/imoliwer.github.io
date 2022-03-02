import styled from 'styled-components';
import { Style } from './Style';

const DarkTheme: Style = {
  name: 'Dark',
  maintenanceContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3B3C49;

    & > h2 {
      padding: 0;
      margin: 0;
      font-family: Arial, sans-serif;
      font-size: 34px;
      font-weight: 300;
      color: #F5F5F5;
    }
  `
}

export default DarkTheme;