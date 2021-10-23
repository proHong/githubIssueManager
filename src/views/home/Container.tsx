import React, {useEffect, useState} from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useToasts } from 'react-toast-notifications';

import Presenter from './Presenter';
import {Tab, RepoPerPage, IssuePerPage} from './Config';
import {searchRepos, getIssues} from '../../api/api-github';

interface Props extends RouteComponentProps {}

const Container = (props: Props) => {

    const { addToast } = useToasts();

    const [tab, setTab] = useState<Tab>(Tab.ISSUE);
    const [option, setOption] = useState<{keyword:string, page:number}>({
        keyword: "",
        page: 1,
    })
    const [page, setPage] = useState<number>(1);
    const [repos, setRepos] = useState<any[]>([]);
    const [totalRepoCount, setTotalRepoCount] = useState<number>(0);
    const [issues, setIssues] = useState<any[]>([]);
    const [totalIssueCount, setTotalIssueCount] = useState<number>(0);

    const [registeredRepos, setRegisteredRepos] = useLocalStorage<any[]>('repos', []);

    const [repoLoading, setRepoLoading] = useState<boolean>(false);
    const [issueLoading, setIssueLoading] = useState<boolean>(false);

    const toggleTab = () => {
        if(tab === Tab.ISSUE){
            setTab(Tab.REPO);
        } else {
            setTab(Tab.ISSUE)
        }
    }

    const onChangeKeyword = (value:string) => {
        setOption({
            ...option,
            keyword: value,
        })
    }
    const onChangeRepoPage = (value:number) => {
        setOption({
            ...option,
            page: value,
        })
    }
    const onChangeIssuePage = (value:number) => {
        setPage(value)
    }

    const search = async() => {
        if(!option.keyword){
            setTab(Tab.ISSUE);
            setOption({
                keyword:'',
                page: 1,
            })
            setRepos([]);
            setTotalRepoCount(0);
            return;
        }
        setRepoLoading(true);
        const q = `${option.keyword} in:name`;
        await searchRepos(q, RepoPerPage, option.page).then(res => {
            if(res.status === 200) {
                console.log(res.data.items);
                setRepos(res.data.items);
                setTotalRepoCount(res.data.total_count);
            }
        })
        setRepoLoading(false);
        setTab(Tab.REPO);
    }
    const fetchIssues = async() => {
        if(registeredRepos.length === 0){
            setIssues([]);
            setTotalIssueCount(0);
            return;
        }

        setIssueLoading(true);
        let q:string = '';
        registeredRepos.forEach((item) => {
            q += `repo:${item.title} `;
        })
        q += `type:issue`;
        await getIssues(q, IssuePerPage, page).then(res => {
            if(res.status === 200) {
                setIssues(res.data.items);
                setTotalIssueCount(res.data.total_count);
            }
        })
        setIssueLoading(false);
    }

    useEffect(() => {
        setRepoLoading(false);
        setIssueLoading(false);
        setOption({
            keyword:'',
            page: 1,
        })
        setPage(1);
        setRepos([]);
        setIssues([]);
        setTab(Tab.ISSUE);
        search();
        fetchIssues();
    }, [])

    const registRepo = (repo:any) => {
        if(registeredRepos.length<4){
            let tempList = [...registeredRepos];
            tempList.push({
                id: repo.id,
                title: repo.full_name,
                subTitle: repo.created_at,
                avatarUrl: repo.owner.avatar_url,
                star:repo.stargazers_count,
                issue:repo.open_issues_count,
                openUrl: repo.html_url,
            });
            setRegisteredRepos([...tempList]);
        } else {
            addToast("레포지토리는 4개까지 등록이 가능합니다.", { 
                appearance: 'error',
                autoDismiss: true, 
            })
        }
    }

    const unRegistRepo = (id:number) => {
        let tempList = [...registeredRepos];
        let unRegistIndex = tempList.findIndex((item)=> item.id == id);
        tempList.splice(unRegistIndex, 1)
        setRegisteredRepos([...tempList]);
    }
    useEffect(() => {
        search();
    }, [option.page])

    useEffect(() => {
        fetchIssues();
    }, [page, registeredRepos])

    return (
          <Presenter
            {...props}
            repos={repos}
            totalRepoCount={totalRepoCount}
            tab={tab}
            option={option}
            toggleTab={toggleTab}
            onChangeKeyword={onChangeKeyword}
            onChangeRepoPage={onChangeRepoPage}
            search={search}
            registRepo={registRepo}
            registeredRepos={registeredRepos}
            unRegistRepo={unRegistRepo}
            issues={issues}
            totalIssueCount={totalIssueCount}
            onChangeIssuePage={onChangeIssuePage}
            page={page}
            repoLoading={repoLoading}
            issueLoading={issueLoading}
          />
      );
}

Container.defaultProps = {};

export default Container;
