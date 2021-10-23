import styled from 'styled-components';

export const PagingNav = styled.div`
    width: 100%;
    height: 40px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PagingLink = styled.div`
display: flex;
justify-content: center;
align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const PagingNumArea = styled.ul`
display: flex;
justify-content: flex-start;
align-items: center;
  height: 100%;
  margin: auto 15px;
  font-size: 17px;
  color: #7e7e7e;
`;

export const PagingNum = styled.li<{ current: boolean }>`
  display: inline-block;
  margin: 5.5px 2px;
  font-weight: ${(props) => (props.current ? '800' : '600')};
  color: ${(props) => (props.current ? '#ddd' : 'default')};
  padding: 2px 6px;

  &:hover {
    cursor: pointer;
    color: #4d4d4d;
    text-decoration: underline;
    text-decoration-color: #4d4d4d;
  }
`;
