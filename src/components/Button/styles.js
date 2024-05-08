import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: none;
  outline: none;
  border-radius: 8px;
  transition: filter 0.2s;

  &:hover{
    cursor: pointer;
    filter: opacity(0.9);
  }
`