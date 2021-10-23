import styled from 'styled-components';

import {FiMoreVertical} from 'react-icons/fi';

export const Container = styled.div<{type:string}>`
width: 260px;
border-radius: 14px;
background-color: #09172B;
color: #fff;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const HeaderArea = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
padding: 10px 20px;
`;

export const AvatarArea = styled.div`
display: flex;
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
margin-right: 16px;
`;

export const AvatarRoot = styled.div`
position: relative;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
flex-shrink: 0;
width: 40px;
height: 40px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-size: 1.25rem;
line-height: 1;
border-top-left-radius: 50%;
border-top-right-radius: 50%;
border-bottom-right-radius: 50%;
border-bottom-left-radius: 50%;
overflow-x: hidden;
overflow-y: hidden;
-webkit-user-select: none;
`;

export const AvatarImg = styled.img`
width: 100%;
height: 100%;
text-align: center;
object-fit: cover;
color: transparent;
text-indent: 10000px;
`;

export const InfoTextArea = styled.div`
flex: 1 1 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100px;
`;

export const TextRow = styled.div`
margin-top: 0px;
width: 120px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.43;
letter-spacing: 0.01071em;
display: block;
text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;

export const SubTextRow = styled.div`
margin-top: 0px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.43;
letter-spacing: 0.01071em;
color: rgba(255, 255, 255, 0.7);
display: block;
`;
export const ActionArea = styled.div`
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
`;

export const ActionMenuIcon = styled(FiMoreVertical)`
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;

&:active{
    opacity: .5;
}
`;
export const ContentsArea = styled.div`
padding-bottom: 20px;
`;

export const ContentsText = styled.div`
margin-top: 0px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.43;
letter-spacing: 0.01071em;
color: rgba(154, 61, 61, 0.7);
`;

export const ActionList = styled.div<{open:boolean}>`
position: absolute;
width: 180px;
background-color: #111;
right: -10px;
top: 24px;
z-index: 99;
border-radius: 20px;
display: ${(props)=>props.open?'flex':'none'};
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0;

-webkit-transition: display 1s ease-in-out;
-moz-transition: display 1s ease-in-out;
transition: heigdisplayht 1s ease-in-out;
`;

export const ActionItem = styled.div`
width: 100%;
font-size: 16px;
color: #cecece;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

export const ActionDivItem = styled.div`
width: 120px;
border: 1px solid #aaa;
margin: 5px;
`;

export const FooterArea = styled.div`
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
justify-content: space-around;
padding: 0 20px 10px;
`;

export const FooterItem = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`;

export const FooterItemLabel = styled.div`
    font-size: 16px;
    margin-right: 5px;
`;

export const FooterItemCount = styled.div`
font-size: 16px;
    
`;


