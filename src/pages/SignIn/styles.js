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

  padding: 13.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }
`

export const FormTitle = styled.div`
  margin-bottom: 4.8rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 2.4rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.2rem;
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`