import styled from 'styled-components';
import { Style } from './Style';

const LightTheme: Style = {
  name: 'Light',
  maintenanceContainer: styled.div`
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
}

export default LightTheme;