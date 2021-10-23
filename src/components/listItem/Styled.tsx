import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
border-radius: 14px;
background-color: #020B17;
color: #fff;
height: 80px;
cursor: pointer;
padding: 10px;

&:active{
    opacity: .5;
}
`;

export const HeaderArea = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
padding: 0 50px;
`;

export const State = styled.div<{state:string}>`
    padding: 3px 5px;
    background-color: ${(props)=>props.state==='closed'?'#A51409':'#006200'};
    color: #fff;
    border-radius: 15px;
    margin-right: 20px;
`;

export const Repo = styled.div`
    font-size: 14px;
    color: #aaa;
    margin-right: 10px;
`;

export const Title = styled.div`
    font-size: 15px;
    color: #ccc;
    margin-right: 10px;
`;

export const CreatedAt = styled.div`
    display: flex;
    align-items: flex-end;
    font-size: 10px;
    color: #ccc;
    opacity: .5;
`;

export const Body = styled.div`
    margin-top: 15px;
    width: 100%;
    font-size: 15px;
    color: #ccc;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: left;
`;