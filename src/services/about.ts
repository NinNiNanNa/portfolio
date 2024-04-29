export interface IList {
  period: string;
  name: string;
  position?: string;
  explain?: string;
  fullname?: string;
}
export interface ISkill {
  icon: string;
  name: string;
  explain: string;
}

export interface IGetResult {
  career: IList[];
  education: IList[];
  frontendSkills: ISkill[];
  backendSkills: ISkill[];
  usingTool: ISkill[];
}

const about = {
  career: [
    {
      period: "2020.11 - 2023.04",
      name: "제이엔이시스텍",
      position: "PUBLISHER",
      explain: "사이트 제작과 유지보수 운영을 담당하였습니다.",
    },
  ],
  education: [
    {
      period: "2023.05 - 2023.12",
      name: "더조은컴퓨터아카데미",
      position: "K디지털트레이닝",
      fullname:
        "클라우드(AWS)환경에서 개발하는 풀스택(프론트엔드&백엔드) 자바(JAVA) 웹&앱",
    },
    {
      period: "2020.04 - 2020.09",
      name: "더조은컴퓨터아카데미",
      position: "국가기간전략훈련",
      fullname: "웹디자인(웹퍼블리셔) 프론트엔드실무자양성_A",
    },
    {
      period: "2016.03 - 2020.02",
      name: "신구대학교",
      position: "IT미디어학과 웹IT전공",
    },
  ],
  frontendSkills: [
    {
      icon: "react.png",
      name: "React",
      explain:
        "React 구조와 여러가지 hook들을 잘 알고 있으며, 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
    },
    {
      icon: "js.png",
      name: "Javascript",
      explain:
        "Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.",
    },
    {
      icon: "typescript.png",
      name: "Typescript",
      explain:
        "Props에 올바른 타입의 값이 들어올 수 있도록 typescript를 사용합니다.",
    },
    {
      icon: "sc.png",
      name: "Styled-Components",
      explain:
        "React 컴포넌트를 스타일링하여 스타일의 재사용성을 높이고, Props를 통한 조건부 스타일링을 할 수 있습니다.",
    },
    {
      icon: "html5.png",
      name: "HTML5",
      explain:
        "웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
    },
    {
      icon: "css3.png",
      name: "CSS3",
      explain:
        "여러 속성을 이해하고 적절하게 사용하여 상황에 맞게 적용할 수 있습니다.",
    },
    {
      icon: "jquery.png",
      name: "JQuery",
      explain:
        "관련 라이브러리와 애니메이션, 여러 메소드들을 잘 활용할 수 있습니다.",
    },
  ],
  backendSkills: [
    {
      icon: "java.png",
      name: "JAVA",
      explain: "JDBC 개념 이해 및 데이터베이스와 연동 할 수 있습니다.",
    },
    {
      icon: "jsp.png",
      name: "JSP",
      explain:
        "MVC model2방식을 사용하여 설계할 수 있고 JSTL과 EL문을 활용하여 html내에서 자바 문법을 표현할 수 있습니다.",
    },
    {
      icon: "sb.png",
      name: "Spring Boot",
      explain:
        "어노테이션 기반 Controller 구현이 가능하고 REST API를 개발하여 프로젝트를 진행한 경험이 있습니다.",
    },
    {
      icon: "oracle.png",
      name: "Oracle DB",
      explain:
        "DDL,DML을 사용하여 테이블 조작 및 제어 관련 쿼리문 작성과 CRUD를 할 수 있고 join을 활용하여 테이블을 합쳐서 사용할 수 있습니다.",
    },
  ],
  usingTool: [
    {
      icon: "vscode.png",
      name: "VS Code",
      explain:
        "주로 사용하는 코딩툴이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.",
    },
    {
      icon: "eclipse.png",
      name: "Eclipse",
      explain:
        "필요에 따라 다양한 jar 파일을 가져올 수 있고 코딩에 편리한 플러그인을 설치해 사용하고 있습니다.",
    },
    {
      icon: "figma.png",
      name: "Figma",
      explain:
        "피그마를 활용하여 와이어프레임 및 프로토타입을 구성할 수 있습니다.",
    },
    {
      icon: "photoshop.png",
      name: "PHOTOSHOP",
      explain:
        "마스크효과, 레이어 활용 등을 이용해 다양한 그래픽 요소를 제작할 수 있습니다.",
    },
    {
      icon: "illustrator.png",
      name: "ILLUSTRATOR",
      explain: "간단한 로고디자인, 이미지 제작을 할 수 있습니다.",
    },
    {
      icon: "git.png",
      name: "Git",
      explain:
        "commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.",
    },
    {
      icon: "aws.png",
      name: "AWS",
      explain: "인스턴스 생성을 통해 서버 배포 및 관리를 할 수 있습니다.",
    },
  ],
};

export default about;
