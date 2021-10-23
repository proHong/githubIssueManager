import React, {useEffect, useState} from 'react';

import * as s from './Styled';

interface Props {
  title: string;
  subTitle: string;
  avatarUrl: string;
  regist: () => void;
  delete: () => void;
  type:string;
  issue: number;
  star:number;
  openUrl: string;
}

const Card = (props: Props) => {

    const [openAction, setOpenAction] = useState(false);

    return (
        <s.Container type={props.type}>
          <s.HeaderArea>
          <s.AvatarArea>
            <s.AvatarRoot>
          <s.AvatarImg src={props.avatarUrl}/>
            </s.AvatarRoot>
          </s.AvatarArea>
          <s.InfoTextArea>
            <s.TextRow>
              {props.title}
            </s.TextRow>
            <s.SubTextRow>
              {props.subTitle}
            </s.SubTextRow>
          </s.InfoTextArea>
          <s.ActionArea>
            <s.ActionMenuIcon onClick={()=>setOpenAction(!openAction)} size={20}/>
            <s.ActionList open={openAction}>
              {
                props.type === "searchRepo"?
                <s.ActionItem onClick={()=>{
                  props.regist();
                  setOpenAction(false);
                  }}>
                  등록하기
                </s.ActionItem>
                :props.type === "registRepo"?
                <s.ActionItem onClick={()=>{
                  props.delete();
                  setOpenAction(false);
                  }}>
                  삭제하기
                </s.ActionItem>
                :null
              }
              <s.ActionDivItem/>
              <s.ActionItem onClick={()=>{
                window.open(props.openUrl);
                setOpenAction(false);
                }}>자세히보기</s.ActionItem>
              <s.ActionDivItem/>
              <s.ActionItem onClick={()=>setOpenAction(false)}>닫기</s.ActionItem>
            </s.ActionList>
          </s.ActionArea>
          </s.HeaderArea>
          {
            props.type === "searchRepo"?
            <s.FooterArea>
              <s.FooterItem>
                <s.FooterItemLabel>이슈 : </s.FooterItemLabel>
                <s.FooterItemCount>{props.issue}</s.FooterItemCount>
              </s.FooterItem>
              <s.FooterItem>
                <s.FooterItemLabel>스타 : </s.FooterItemLabel>
                <s.FooterItemCount>{props.star}</s.FooterItemCount>
              </s.FooterItem>
            </s.FooterArea>
            :null
          }
        </s.Container>
      );
}

Card.defaultProps = {};

export default Card;
