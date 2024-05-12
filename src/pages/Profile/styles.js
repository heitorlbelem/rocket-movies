import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  padding: 4.7rem 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

  button {
    margin: 0;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin: -12.5rem auto 6.4rem;

  > img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: .8rem;
    bottom: .8rem;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    display: flex; 
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    transition: background-color 0.2s;
    
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
    }

    input {
      display: none;
    }
  }
`