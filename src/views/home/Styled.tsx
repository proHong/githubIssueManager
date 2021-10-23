import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-width: 1180px;
display: flex;
flex: 1;
position: relative;
z-index: 1;
text-align: center;
padding: 20px;
height: 100vh;
background-color: #152740;

@media screen and (max-width: 1180px) {
  min-width: 100%;
}
`;

export const ContentArea = styled.div`
width: 1180px;
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 20px;
margin: 0 auto;
border-radius: 20px;
padding: 20px;
color: #fff;
`;

export const SearchRepoArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 10px;
`;

export const SearchRepoResultArea = styled.div<{open:boolean}>`
  width: 100%;
  display: block;
  height: ${(props) => props.open?"52vh":"0"};
  overflow-y: ${(props) => props.open?"auto":"hidden"};
  padding-top: 20px;

  -webkit-transition: height 1s ease-in-out;
  -moz-transition: height 1s ease-in-out;
  transition: height 1s ease-in-out;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #243853;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: #3B4F6B;
    border-radius: 20px;
  }
`;

export const SearchRepoResult = styled.div`
width: 1070px;
min-height: 45vh;
margin: 0 auto;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
gap:10px;
`;

export const SearchRepoToggle = styled.div`
margin: 0 auto;
cursor: pointer;
&:active{
    opacity: .5;
}
`;


export const RegisteredRepoArea = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 31px;
gap: 16px;
`;

export const IssueArea = styled.div<{open: boolean}>`
width: 100%;
height: ${(props) => props.open?"55vh":"0"};
overflow-y: ${(props) => props.open?"auto":"hidden"};

-webkit-transition: height 1s ease-in-out;
  -moz-transition: height 1s ease-in-out;
  transition: height 1s ease-in-out;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #243853;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: #3B4F6B;
    border-radius: 20px;
  }
`;

export const IssueListArea = styled.div`
display: flex;
min-height: 50vh;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0 31px;
gap: 16px;

`;

export const NoData = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
font-size: 24px;
font-weight: 700;
`;