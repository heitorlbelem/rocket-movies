import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
  border: none;
  border-radius: 10px;
  padding: 3.2rem;

  > h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1.6rem;
    font-family: 'Roboto' sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_150};
    text-align: justify;
  }
`

export const TagsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .8rem;

  span {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    padding: 5px 1.6rem;
  }
`