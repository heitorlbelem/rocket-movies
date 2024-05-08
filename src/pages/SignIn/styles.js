import styled from 'styled-components'
import backgroundImg from '../../assets/background_sign_in.png'

export const Container = styled.div`
  display: flex;
  height: 100vh;

  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 13.6rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 4.8rem 0;
    font-size: 2.4rem;
    font-weight: 500;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`