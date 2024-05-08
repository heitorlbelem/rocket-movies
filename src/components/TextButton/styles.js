import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  background: transparent;

  margin-top: 4.2rem;

  border: none;
  outline: none;

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
`