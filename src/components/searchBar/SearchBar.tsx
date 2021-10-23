import React, {useEffect, useState} from 'react';

import * as s from './Styled';

interface Props {
    keyword: string;
    onChangeKeyword: (value: string) => void;
    search: () => Promise<void>;
    placeHolder: string;
}

const SearchBar = (props: Props) => {


    return (
        <s.SearchBarArea>
            <s.SearchBarInput
            type={"text"}
            value={props.keyword} 
            onChange={(e) => props.onChangeKeyword(e.target.value)}
            spellCheck={false}
            onKeyPress={(e) => e.key === 'Enter' && props.search()}
            placeholder={props.placeHolder}
            />
            <s.SearchBarButton onClick={props.search}/>
        </s.SearchBarArea>
      );
}

SearchBar.defaultProps = {};

export default SearchBar;
