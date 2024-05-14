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

export const TagsSection = styled.section`
  width: 100%;

  > h3 {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.4rem;
  }

  > ul {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    display: flex;
    gap: 2rem;
  }
`

export const Tag = styled.li`
  max-width: 15%;

  list-style: none;
  padding: .8rem;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 2rem;

  background-color: ${({ theme, newTag }) => newTag ? 'transparent' : theme.COLORS.GRAY_300};
  color: ${({ theme }) =>  theme.COLORS.WHITE};
  border: 1px ${({ newTag }) => newTag ? 'dashed' : 'none'};

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`