import React, {useEffect, useState} from 'react';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import * as s from './Styled';

interface Props {
  currentPage: number;
  onChangePage: (value: number) => void;
  totalItemCount: number;
  postsPerPage: number;
  blockPageLength: number;
}

const Pagination = (props: Props) => {

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [lastPage, setLastPage] = useState<any>(null);

  const fetchPageList = () => {
    setPageNumbers([]);
    if(props.totalItemCount>0){
      let temps = []
      let lastPage = Math.ceil(props.totalItemCount / props.postsPerPage);
      let pageFirst = props.currentPage%props.blockPageLength === 0?
      props.blockPageLength*Math.floor((props.currentPage-1)/props.blockPageLength)+1:
      props.blockPageLength*Math.floor(props.currentPage/props.blockPageLength)+1;
      for (
        let i = pageFirst; 
        i <= lastPage && i<=pageFirst+9;
        i++) {
          temps.push(i);
      }
      setLastPage(lastPage);
      setPageNumbers([...temps]);
    } else {
      setPageNumbers([]);
    }
  }
  useEffect(() => {
    fetchPageList();
  }, [props.totalItemCount])

    return (
        <s.PagingNav>
          {
            props.currentPage !== 1?
            <s.PagingLink onClick={()=>props.onChangePage(props.currentPage-1)}>
              <FiChevronLeft size={16}/>
            </s.PagingLink>
            :null
          }
          <s.PagingNumArea>
            {
              pageNumbers.map((item, index)=>(
                <s.PagingNum 
                key={`page-${index}`}
                onClick={()=>props.onChangePage(item)}
                current={props.currentPage === item}
                >{item}</s.PagingNum>
              ))
            }
          </s.PagingNumArea>
          {
            props.currentPage !== lastPage && pageNumbers.length > 0?
            <s.PagingLink onClick={()=>props.onChangePage(props.currentPage+1)}>
              <FiChevronRight size={16}/>
            </s.PagingLink>
            :null
          }
        </s.PagingNav>
      );
}

Pagination.defaultProps = {};

export default Pagination;
