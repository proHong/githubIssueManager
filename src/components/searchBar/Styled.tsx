import styled from 'styled-components';

export const SearchBarArea = styled.div`
    align-items: center;
    border-bottom: 2px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    padding-bottom: .5rem; 
    width: 100%;
`;

export const SearchBarInput = styled.input`
-webkit-appearance: none;
background: none;
border: none;
color: #fff;
font-size: 36px;
font-weight: 500;
letter-spacing: -.02em;
padding-bottom: .25rem;
text-shadow: 0 4px 4px rgba(0,0,0,.25);
width: 100%;
`;

export const SearchBarButton = styled.div`
background: no-repeat 50% url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 39 40'%3E%3Ccircle cx='16.882' cy='16.882' r='14.882' stroke='%23FAF9F8' stroke-width='4'/%3E%3Cline x1='27.48' x2='37.48' y1='27.655' y2='38.655' stroke='%23FAF9F8' stroke-width='4'/%3E%3C/svg%3E");
height: 40px;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
width: 49px;
cursor: pointer;
&:active{
    opacity: .5;
}
`;