import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 12.3rem;
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    width: 20rem;
  }
`