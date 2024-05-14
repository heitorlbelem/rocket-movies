import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 12.3rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  > button {
    margin-bottom: 2.4rem;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;

  :first-child {
    flex: 1;
  }
  
  :nth-child(2) {
    flex: 1;
  }

  > textarea {
    width: 100%;
    height: 28rem;
    padding: 1.9rem;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border: none;
    outline: none;

    resize: none;
    
    &::placeholder {
      opacity: 0.9;
    }
  }

  > button {
    flex: 1;
  }
`