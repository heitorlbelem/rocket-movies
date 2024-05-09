import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  border-radius: 8px;
  padding: 1.9rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: none;
    outline: none;
    
    &::placeholder {
      opacity: 0.9;
    }
  }
`