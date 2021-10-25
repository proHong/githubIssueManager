# GITHUB ISSUE MANAGER

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=TYPESCRIPT&logoColor=FFF"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=FFF"> 

깃헙 API를 사용하여 PUBLIC REPOSITORY를 검색하고 등록하여 등록되어있는 REPOSITORY의 이슈들을 보여주는 프로젝트

### 실행

아래 사항들로 현 프로젝트를 실행할 수 있습니다.

```
> git clone https://github.com/proHong/githubIssueManager.git
> cd githubIssueManager
> npm install
> npm start
```
### Getting Started
#### 시작화면
![시작화면](https://user-images.githubusercontent.com/42308891/138709069-3a599c05-648e-49d7-a23d-f12e7b796324.PNG)
- 검색창에서 레포지토리를 검색할 수 있습니다.
- 등록된 레포지토리가 있으면 아래에 등록된 레포지토리와 해당 레포지토리의 이슈리스트를 확인할 수 있습니다.
- 아래 화살표를 클릭하면 검색된 레포지토리를 확인 할 수 있습니다.

#### 검색
![search](https://user-images.githubusercontent.com/42308891/138709644-b8c3b7b1-9fca-4869-9768-64371146fb83.PNG)
- 레포지토리를 검색하면 레포지토리명, 사용자아바타, 생성일자, 이슈 수, 스타 수를 확인 할 수 있습니다.
- 위 화살표를 클릭하면 이슈리스트를 확인 할 수 있습니다.

![searchAction](https://user-images.githubusercontent.com/42308891/138710110-5ec2f8d1-b768-4c2a-978d-a1c7631acce9.PNG)
- 등록하기 버튼으로 레포지토리를 등록할 수 있습니다.
- 자세히보기 버튼으로 해당 레포지토리로 이동할 수 있습니다.

![addrepo](https://user-images.githubusercontent.com/42308891/138710630-66babf93-1f69-40b5-b888-0de5ae1a89ea.PNG)
- 레포지토리를 등록하면 아래와같이 등록된 레포지토리를 확인할 수 있습니다.

![addrepoAction](https://user-images.githubusercontent.com/42308891/138711245-41540e4d-95ec-4606-8638-09ee1a3707ed.PNG)
- 삭제하기 버튼을 클릭하면 등록 레포지토리 리스트에서 해당 레포지토리를 삭제할 수 있습니다.
- 자세히보기 버튼으로 해당 레포지토리로 이동할 수 있습니다.

![warning](https://user-images.githubusercontent.com/42308891/138710383-3b5e33d2-ed38-4585-8480-19ca98a33491.PNG)
- 레포지토리는 4개까지만 등록 가능합니다.

#### 이슈
![issue](https://user-images.githubusercontent.com/42308891/138710750-614165b4-ca22-4fc9-9279-bebcaab3c193.PNG)
- 이슈 리스트와 등록된 레포지토리를 확인할 수 있습니다.
- 이슈 상태, 레포지토리 이름, 이슈 제목, 이슈 생성일자, 이슈 내용을 확인할 수 있습니다.
- 이슈를 클릭하면 해당 이슈 링크로 이동할 수 있습니다.


### dependencies
- react
- react-scripts
- react-dom
- react-router-dom
- styled-components
- styled-normalize
- @octokit/rest
- react-loader-spinner
- react-icons
- react-toast-notifications
- usehooks-ts

### 만든사람

* [홍성현](https://oval-xylophone-d50.notion.site/16e4e6c93f2542878635241af9b9c5b9)
