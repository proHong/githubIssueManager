import React, {useEffect, useState} from 'react';

import * as s from './Styled';

interface Props {
  item: any;
}

const ListItem = (props: Props) => {

    return (
        <s.Container onClick={()=>window.open(props.item.html_url)}>
          <s.HeaderArea>
            <s.State state={props.item.state}>{props.item.state}</s.State>
            <s.Repo>[{props.item.repository_url.split('repos/')[1]}]</s.Repo>
            <s.Title>{props.item.title}</s.Title>
            <s.CreatedAt>{props.item.created_at.split('T')[0]}</s.CreatedAt>
            <s.Body>{props.item.body}</s.Body>
          </s.HeaderArea>
        </s.Container>
      );
}

ListItem.defaultProps = {};

export default ListItem;
