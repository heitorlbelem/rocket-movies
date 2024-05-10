import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  padding: 4.2rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  min-width: 19.8rem;
  
  & > section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: 1.4rem;

    p {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-decoration: none;
      transition: filter 0.2s;

      &:hover {
        cursor: pointer;
        filter: opacity(0.8);
      }
    }
  }
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};

  width: 6.4rem;
  height: 6.4rem;
`