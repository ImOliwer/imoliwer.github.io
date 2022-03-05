import styled from 'styled-components';
import { Style } from './Style';

const DarkTheme: Style = {
  name: 'Dark',
  maintenance: {
    container: styled.div``
  },
  main: {
    container: styled.div``
  },
  navigation: {
    container: styled.div``,
    header: {
      container: styled.div``,
      title: styled.h2``,
      subtitle: styled.h2``
    },
    body: styled.div``,
    content: {
      container: styled.div``
    },
    divider: styled.hr``,
    footer: {
      container: styled.div``
    }
  }
}

export default DarkTheme;