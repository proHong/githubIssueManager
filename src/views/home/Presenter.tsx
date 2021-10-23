import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Loader from "react-loader-spinner";

import * as s from './Styled';
import SearchBar from '../../components/searchBar';
import Card from '../../components/card';
import Pagination from '../../components/pagination';
import ListItem from '../../components/listItem';
import {Tab, IssuePerPage, RepoPerPage} from './Config';

interface Props extends RouteComponentProps {
  repos: any[];
  tab: Tab;
  totalRepoCount: number;
  option: {
    keyword: string;
    page: number;
  };
  toggleTab: () => void;
  onChangeKeyword: (value: string) => void;
  onChangeRepoPage: (value: number) => void;
  search: () => Promise<void>;
  registRepo: (repo: any) => void;
  registeredRepos: any[];
  unRegistRepo: (id: number) => void;
  issues: any[];
  totalIssueCount: number;
  onChangeIssuePage: (value: number) => void;
  page: number;
  repoLoading: boolean;
  issueLoading: boolean;
}

const Presenter = (props: Props) => {
  return (
    <s.Container>
      <s.ContentArea>
        <SearchBar 
          keyword={props.option.keyword} 
          onChangeKeyword={props.onChangeKeyword}
          search={props.search}
          placeHolder={"검색"}
        />
        <s.SearchRepoArea>
          <s.SearchRepoResultArea open={props.tab === Tab.REPO}>
            <s.SearchRepoResult>
              {
                props.repoLoading?
                <s.NoData>
                <Loader
                type="TailSpin"
                color="#fff"
                height={120}
                width={120}
                />
                </s.NoData>
                :props.repos.length === 0?
                <s.NoData>No Datas</s.NoData>
                :props.repos.map((item) =>
                <Card
                  key={item.id}
                  title={item.full_name}
                  subTitle={item.created_at.split('T')[0]}
                  avatarUrl={item.owner.avatar_url}
                  regist={()=>props.registRepo(item)}
                  delete={()=>{}}
                  type={"searchRepo"}
                  issue={item.open_issues_count}
                  star={item.stargazers_count}
                  openUrl={item.html_url}
                />
                )
              }
            </s.SearchRepoResult>
            <Pagination 
              currentPage={props.option.page} 
              onChangePage={props.onChangeRepoPage}
              totalItemCount={props.totalRepoCount}
              postsPerPage={RepoPerPage}
              blockPageLength={10}
            />
          </s.SearchRepoResultArea>
          <s.SearchRepoToggle onClick={props.toggleTab}>
            {
              props.tab === Tab.ISSUE?
              <FiChevronDown size={40}/>
              :
              <FiChevronUp size={40}/>
            }
          </s.SearchRepoToggle>
        </s.SearchRepoArea>
        <s.RegisteredRepoArea>
          {
            props.registeredRepos.map((item, index) => <Card 
              key={item.id}
              title={item.title}
              subTitle={item.subTitle.split('T')[0]}
              avatarUrl={item.avatarUrl}
              regist={()=>{}}
              delete={()=>props.unRegistRepo(item.id)}
              type={"registRepo"}
              star={item.star}
              issue={item.issue}
              openUrl={item.openUrl}
            />)
          }
        </s.RegisteredRepoArea>
        <s.IssueArea open={props.tab === Tab.ISSUE}>
        <s.IssueListArea>
          {
            props.issueLoading?
            <s.NoData>
            <Loader
            type="TailSpin"
            color="#fff"
            height={120}
            width={120}
            />
            </s.NoData>
            :props.issues.length === 0?
            <s.NoData>No Datas</s.NoData>
            :props.issues.map((item) => (
              <ListItem 
              key={item.id} 
              item={item} 
              />
            ))
          }
        </s.IssueListArea>
          <Pagination 
            currentPage={props.page} 
            onChangePage={props.onChangeIssuePage}
            totalItemCount={props.totalIssueCount}
            postsPerPage={IssuePerPage}
            blockPageLength={10}
          />
        </s.IssueArea>
      </s.ContentArea>
    </s.Container>
  );
};

Presenter.defaultProps = {
};

export default Presenter;
