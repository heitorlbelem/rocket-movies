import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 12.3rem;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  & > main {
    overflow-y: scroll;
  }
`

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  & > button {
    width: 20rem;
  }
`

export const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 45rem;
`

export const MovieItem = styled.div`
`

