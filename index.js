// 46 PowerPoint Slides Data Source of Truth
const slidesData = [
  {
    "slide_index": 1,
    "title": "바이브 코딩 - 오프닝",
    "section": "준비하기",
    "desc": "교사가 직접 설계하는 맞춤형 교실.",
    "actions": [],
    "tip": "Antigravity IDE와 Supabase를 활용하여 교사가 개발 지식 없이도 단 몇 분만에 나만의 스마트 칭찬 노트를 제작하고 배포할 수 있는 실습 가이드입니다."
  },
  {
    "slide_index": 2,
    "title": "Antigravity IDE 설치 - 다운로드",
    "section": "준비하기",
    "desc": "Antigravity IDE 다운로드 주소를 확인하고 웹브라우저로 이동합니다. 설치 파일을 내려받습니다.",
    "actions": [
      {
        "type": "link",
        "label": "Antigravity IDE 다운로드 사이트",
        "value": "https://antigravity.google/product/antigravity-ide"
      }
    ],
    "tip": "Antigravity IDE는 AI 코드 지원 기능이 통합된 차세대 개발자용 웹 IDE 환경입니다."
  },
  {
    "slide_index": 3,
    "title": "Antigravity IDE 설치 - 확인",
    "section": "준비하기",
    "desc": "설치 프로그램 다운로드가 완료된 후 설치를 시작합니다. 안내에 따라 설치 완료 화면까지 확인합니다.",
    "actions": [],
    "tip": "설치가 진행되지 않는다면 백신 프로그램 일시 중지나 관리자 권한 실행을 해보세요."
  },
  {
    "slide_index": 4,
    "title": "Antigravity IDE 설치 - 폴더 생성",
    "section": "준비하기",
    "desc": "바이브 코딩 프로젝트를 진행할 컴퓨터 내의 새로운 작업 폴더를 생성하고 IDE에서 로드합니다.",
    "actions": [],
    "tip": "바탕화면이나 문서 폴더 등 찾기 쉽고 영문 경로로 구성된 폴더 생성을 추천합니다."
  },
  {
    "slide_index": 5,
    "title": "Antigravity - Git 연계 (1) 클릭",
    "section": "Git & GitHub 연동",
    "desc": "Antigravity IDE 내에서 Git과의 연동 설정을 시작합니다. 하단 상태 표시줄의 Git 상태창을 선택합니다.",
    "actions": [],
    "tip": "Git은 코드 버전 관리 및 GitHub 온라인 서버 업로드를 위해 반드시 필요한 기본 도구입니다."
  },
  {
    "slide_index": 6,
    "title": "Antigravity - Git 연계 (2) winget 설치",
    "section": "Git & GitHub 연동",
    "desc": "Git이 설치되어 있지 않은 경우, 터미널(Terminal)에서 아래 명령어를 복사하여 실행합니다.",
    "actions": [
      {
        "type": "cmd",
        "label": "Git 설치 명령어 복사",
        "value": "winget install --id Git.Git -e --source winget"
      }
    ],
    "tip": "Windows Package Manager(winget)를 사용하면 복잡한 설정 없이 간편하게 프로그램 설치가 가능합니다."
  },
  {
    "slide_index": 7,
    "title": "Antigravity - Git 연계 (3) 붙여넣기",
    "section": "Git & GitHub 연동",
    "desc": "복사한 winget 명령어를 IDE 내부의 터미널 창에 붙여넣고 엔터(Enter)를 입력해 실시간 다운로드를 개시합니다.",
    "actions": [
      {
        "type": "cmd",
        "label": "Git 설치 명령어 복사",
        "value": "winget install --id Git.Git -e --source winget"
      }
    ],
    "tip": "터미널에서 마우스 우클릭을 하거나 Shift + Insert 단축키를 쓰면 빠르게 붙여넣기할 수 있습니다."
  },
  {
    "slide_index": 8,
    "title": "Antigravity - Git 연계 (4) 설치 대기",
    "section": "Git & GitHub 연동",
    "desc": "Git 설치 과정이 터미널 화면에서 진행되므로 100% 완료 메시지가 나타날 때까지 잠시 기다립니다.",
    "actions": [],
    "tip": "중간에 권한 승인 팝업이 뜨면 '예(Yes)'를 선택하여 설치 진행을 승인해 줍니다."
  },
  {
    "slide_index": 9,
    "title": "Antigravity - Git 연계 (5) 재실행",
    "section": "Git & GitHub 연동",
    "desc": "Git 설치 완료 후, Antigravity IDE 메뉴에서 'Close Folder'를 클릭하여 폴더를 닫았다가 다시 열어 동기화 환경을 갱신합니다.",
    "actions": [],
    "tip": "설치가 끝난 후 IDE를 완전히 껐다가 켜주어야 환경 변수가 적용됩니다."
  },
  {
    "slide_index": 10,
    "title": "Antigravity - Git 초기화 (1) 터미널 설정",
    "section": "Git & GitHub 연동",
    "desc": "우측 상단 쉘 선택 드롭다운 메뉴를 클릭한 후 Git Bash 터미널을 활성화합니다.",
    "actions": [],
    "tip": "Windows 기본 cmd 쉘 대신 Git Bash 쉘을 사용해야 안정적으로 유닉스 기반 git 명령어 구동이 가능합니다."
  },
  {
    "slide_index": 11,
    "title": "Antigravity - Git 초기화 (2) gitmessage 파일 생성",
    "section": "Git & GitHub 연동",
    "desc": "Git Bash 터미널에 아래 명령어를 입력하여 커밋 메시지 기본 틀로 사용될 텍스트 파일을 생성합니다.",
    "actions": [
      {
        "type": "cmd",
        "label": "gitmessage 생성 명령어",
        "value": "echo \"update\" > ~/.gitmessage.txt"
      }
    ],
    "tip": "이 파일은 커밋 시마다 메시지를 매번 치지 않고 빠르게 지정된 키워드로 기록하기 위한 사전 작업입니다."
  },
  {
    "slide_index": 12,
    "title": "Antigravity - Git 초기화 (3) 커밋 템플릿 지정",
    "section": "Git & GitHub 연동",
    "desc": "커밋 메시지 작성 템플릿 파일의 글로벌 경로로 방금 생성한 텍스트 파일을 지정하여 설정합니다.",
    "actions": [
      {
        "type": "cmd",
        "label": "커밋 템플릿 설정 명령어",
        "value": "git config --global commit.template ~/.gitmessage.txt"
      }
    ],
    "tip": "이 설정이 활성화되면 깃허브 코드 푸시 커밋 단계가 훨씬 빠르고 간결해집니다."
  },
  {
    "slide_index": 13,
    "title": "Antigravity - Git 초기화 (4) 사용자 이름 지정",
    "section": "Git & GitHub 연동",
    "desc": "로컬 Git 시스템에 등록할 작성자 이름을 지정합니다. 오류 방지를 위해 가급적 영문 이름 지정을 강력 권장합니다.",
    "actions": [
      {
        "type": "cmd",
        "label": "Git 사용자 이름 설정 (변경하여 사용)",
        "value": "git config --global user.name \"my name\""
      }
    ],
    "tip": "\"my name\" 자리에 닉네임이나 성함을 영문으로 수정하여 작성해 주세요."
  },
  {
    "slide_index": 14,
    "title": "Antigravity - Git 초기화 (5) 사용자 이메일 지정",
    "section": "Git & GitHub 연동",
    "desc": "GitHub에 가입 시 연동해 둔 이메일 주소를 로컬 Git 인증 정보로 입력합니다. (구글 메일 주소 활용 권장)",
    "actions": [
      {
        "type": "cmd",
        "label": "Git 이메일 설정 (변경하여 사용)",
        "value": "git config --global user.email \"myEmail@goedu.kr\""
      }
    ],
    "tip": "\"myEmail@goedu.kr\" 자리에 깃허브 가입용 이메일을 대입하여 명령어를 실행하세요."
  },
  {
    "slide_index": 15,
    "title": "Antigravity - GitHub 연계 (1) 로그인",
    "section": "Git & GitHub 연동",
    "desc": "Antigravity IDE 하단의 파란색 상태바에 표시되는 GitHub 프로필 아이콘을 클릭해 연동 과정을 시작합니다.",
    "actions": [],
    "tip": "온라인 서버 저장을 위해 브라우저 인증을 통한 OAuth 계정 접근 권한 획득 절차입니다."
  },
  {
    "slide_index": 16,
    "title": "Antigravity - GitHub 연계 (2) 로그인 권한 승인",
    "section": "Git & GitHub 연동",
    "desc": "인증 승인 웹 브라우저 창이 열리면 녹색 'Authorize' 버튼을 눌러 연동 상태를 승인해 줍니다.",
    "actions": [],
    "tip": "창이 뜨지 않으면 크롬 등 기본 브라우저 설정 상태 및 인터넷 팝업 제어를 확인하세요."
  },
  {
    "slide_index": 17,
    "title": "Antigravity - GitHub 연계 (3) 인증 대기",
    "section": "Git & GitHub 연동",
    "desc": "브라우저 화면 상에 로그인 성공 체크 표시가 확인되면, 웹 창을 닫고 다시 IDE 창으로 포커스를 옮겨옵니다.",
    "actions": [],
    "tip": "연결 확인까지 약 2~3초의 통신 시간이 소요될 수 있습니다."
  },
  {
    "slide_index": 18,
    "title": "Antigravity - GitHub 연계 (4) 저장소 생성",
    "section": "Git & GitHub 연동",
    "desc": "GitHub 온라인 서버 상에 코드를 보관할 빈 저장소(Repository) 공간을 생성하는 버튼을 누릅니다.",
    "actions": [],
    "tip": "이 단계를 통해 PC의 작업 폴더가 원격 클라우드 깃허브 웹 주소와 한 쌍으로 엮이게 됩니다."
  },
  {
    "slide_index": 19,
    "title": "Antigravity - GitHub 연계 (5) 연동 대기",
    "section": "Git & GitHub 연동",
    "desc": "로컬 프로젝트와 원격 깃허브 서버 연결이 백그라운드 환경에서 정합성을 맞추는 것을 지켜봅니다.",
    "actions": [],
    "tip": "잠시 대기 중 화면으로 연동 처리가 완료될 때까지 다른 키를 조작하지 마세요."
  },
  {
    "slide_index": 20,
    "title": "Antigravity - GitHub 연계 (6) 링크 복사",
    "section": "Git & GitHub 연동",
    "desc": "원격 동기화가 끝나고 제공되는 해당 GitHub 레포지토리의 최종 웹 링크 주소를 복사 버튼을 눌러 확보합니다.",
    "actions": [],
    "tip": "이 웹 주소가 앞으로 작성할 스마트 칭찬 노트 웹 페이지의 깃 주소 기반이 됩니다."
  },
  {
    "slide_index": 21,
    "title": "Antigravity - GitHub 연계 (7) 커밋/푸시",
    "section": "Git & GitHub 연동",
    "desc": "수정 내용을 기록할 메시지를 남긴 후, 푸시(Upload) 버튼을 눌러 온라인 깃허브 클라우드로 업로드합니다.",
    "actions": [],
    "tip": "첫 푸시를 하고 나면 GitHub 웹사이트 내 레포지토리 페이지에서 업로드된 내 코드를 모니터링할 수 있습니다."
  },
  {
    "slide_index": 22,
    "title": "GitHub 자동 업로드 - Public 선택",
    "section": "Git & GitHub 연동",
    "desc": "GitHub Repository 신규 설정 단계에서 프로젝트 공개 범위 옵션을 꼭 **Public**(전체 공개)으로 설정합니다.",
    "actions": [],
    "tip": "Private(비공개)으로 진행 시에는 무료 정적 웹 호스팅 서비스인 GitHub Pages를 활성화할 수 없으니 필히 유의해 주세요."
  },
  {
    "slide_index": 23,
    "title": "GitHub 자동 업로드 - 확인",
    "section": "Git & GitHub 연동",
    "desc": "로컬에서 파일을 새로 생성하거나 수정하고 저장할 때마다 GitHub에 자동으로 변경 분이 감지되어 백업됩니다.",
    "actions": [],
    "tip": "수동으로 매번 add, commit, push할 필요 없이 코딩에만 몰입할 수 있는 환경입니다."
  },
  {
    "slide_index": 24,
    "title": "GitHub Pages 웹 주소 활성화 방법",
    "section": "Git & GitHub 연동",
    "desc": "코딩된 정적 웹앱을 외부 접속용 주소로 배포합니다.\n1. GitHub 레포 Settings 탭 클릭\n2. Pages 카테고리 클릭\n3. Build and deployment - Branch를 None에서 main으로 토글 변경\n4. 우측 Save 클릭 후 2~3분간 배포 완료 대기",
    "actions": [
      {
        "type": "link",
        "label": "GitHub 바로가기",
        "value": "https://github.com/"
      }
    ],
    "tip": "이 기능은 무료로 내 HTML/JS 파일을 상용 웹서버처럼 호스팅할 수 있게 도와주는 서비스입니다."
  },
  {
    "slide_index": 25,
    "title": "GitHub Pages 배포 주소 확인",
    "section": "Git & GitHub 연동",
    "desc": "빌드가 끝나면 상단에 활성화 완료 링크가 생성됩니다. 해당 주소를 눌러 웹 사이트 작동 상태를 최종 점검합니다.",
    "actions": [
      {
        "type": "link",
        "label": "교사 깃허브 페이지 예시 주소",
        "value": "https://teachercode.github.io/BingoApp/"
      }
    ],
    "tip": "완성된 주소 형식은 보통 https://[아이디].github.io/[레포지토리이름]/ 형태입니다."
  },
  {
    "slide_index": 26,
    "title": "Supabase 데이터베이스 가입",
    "section": "Supabase 데이터베이스 구축",
    "desc": "칭찬 내용 및 학생 정보 저장을 처리하기 위해, 무료 클라우드 백엔드 Supabase 사이트로 이동해 계정을 만듭니다.",
    "actions": [
      {
        "type": "link",
        "label": "Supabase 홈페이지 바로가기",
        "value": "https://supabase.com/"
      }
    ],
    "tip": "Supabase는 오픈소스 Firebase 대안으로 관계형 PostgreSQL DB를 매우 손쉽게 운영할 수 있도록 돕습니다."
  },
  {
    "slide_index": 27,
    "title": "Supabase - 깃허브 연동 로그인",
    "section": "Supabase 데이터베이스 구축",
    "desc": "웹 우측 상단 Sign in을 눌러 Sign In with GitHub를 활용해 간편 연결 가입합니다.",
    "actions": [
      {
        "type": "link",
        "label": "Supabase 홈페이지 바로가기",
        "value": "https://supabase.com/"
      }
    ],
    "tip": "이미 만들어 둔 깃허브 세션을 이용하므로 별도의 추가 비밀번호 설정 없이 가입이 완료됩니다."
  },
  {
    "slide_index": 28,
    "title": "Supabase - 대시보드 입장",
    "section": "Supabase 데이터베이스 구축",
    "desc": "로그인이 끝나면 수파베이스 메인 대시보드로 이동할 준비를 하고 관리자 화면으로 들어갑니다.",
    "actions": [],
    "tip": "여러 프로젝트 데이터베이스의 모니터링 및 설정이 가능한 홈화면입니다."
  },
  {
    "slide_index": 29,
    "title": "Supabase - 새 프로젝트 생성 시작",
    "section": "Supabase 데이터베이스 구축",
    "desc": "가운데 표시되는 '+ New Project' 버튼을 눌러 실습용 DB 프로젝트 설정을 개시합니다.",
    "actions": [],
    "tip": "수파베이스는 무료 플랜으로 최대 2개의 활성 프로젝트를 상시 운영할 수 있습니다."
  },
  {
    "slide_index": 30,
    "title": "Supabase - 프로젝트 상세 설정",
    "section": "Supabase 데이터베이스 구축",
    "desc": "프로젝트 이름을 idea-canvas로 적고 암호를 입력합니다. 아래로 스크롤하여 계속 진행합니다.",
    "actions": [
      {
        "type": "text",
        "label": "프로젝트명 복사",
        "value": "idea-canvas"
      }
    ],
    "tip": "DB 비밀번호는 외부 해킹 방지를 위해 문자/숫자/특수기호 혼합 형식의 영문으로 작성하여 안전하게 메모해 둡니다."
  },
  {
    "slide_index": 31,
    "title": "Supabase - 프로젝트 생성 완료",
    "section": "Supabase 데이터베이스 구축",
    "desc": "설정을 확인한 뒤 'Create new project' 녹색 버튼을 누릅니다. 시스템 프로비저닝 완료까지 잠시 기다립니다.",
    "actions": [],
    "tip": "클라우드 내에 나만의 전용 PostgreSQL 가상 리눅스 인스턴스가 셋팅되는 과정이므로 약 1분 정도가 걸립니다."
  },
  {
    "slide_index": 32,
    "title": "웹앱과 DB 연동 - 대시보드",
    "section": "Supabase 데이터베이스 구축",
    "desc": "생성 완료된 수파베이스 프로젝트의 연동 키값 확인을 위해 프로젝트 메인 홈으로 포커스를 둡니다.",
    "actions": [],
    "tip": "대시보드 메인에서 현재 DB 서버의 활성 세션 수, 디스크 사용량 등을 한눈에 확인 가능합니다."
  },
  {
    "slide_index": 33,
    "title": "웹앱과 DB 연동 - Org 선택",
    "section": "Supabase 데이터베이스 구축",
    "desc": "좌측 대시보드 메뉴 중에서 본인의 상위 Organization(기관) 탭 폴더 영역을 선택해 줍니다.",
    "actions": [],
    "tip": "기관별로 여러 개발용 프로젝트를 분류하여 관리할 수 있는 계층 구조입니다."
  },
  {
    "slide_index": 34,
    "title": "웹앱과 DB 연동 - 프로젝트 선택",
    "section": "Supabase 데이터베이스 구축",
    "desc": "생성 작업이 끝난 목록의 'idea-canvas' 프로젝트 카드를 클릭하여 셋팅 페이지에 접속합니다.",
    "actions": [],
    "tip": "목록에 프로젝트 상태가 Active로 정상 변경된 것을 확인한 후 들어가야 합니다."
  },
  {
    "slide_index": 35,
    "title": "웹앱과 DB 연동 - API URL 복사",
    "section": "Supabase 데이터베이스 구축",
    "desc": "프로젝트 설정 -> Integrations -> Data API 카테고리에 있는 내 서버 고유 API URL 주소를 복사해 둡니다.",
    "actions": [],
    "tip": "이 URL은 웹앱 클라이언트가 데이터를 보낼 때 사용할 통신 경로가 됩니다."
  },
  {
    "slide_index": 36,
    "title": "웹앱과 DB 연동 - API URL 붙여넣기",
    "section": "Supabase 데이터베이스 구축",
    "desc": "웹앱 폴더의 `supabase_config.js`를 열어 `SUPABASE_URL`에 복사한 주소를 넣어 셋팅합니다.",
    "actions": [],
    "tip": ".co 도메인 뒷부분의 불필요한 하위 디렉토리 스트링이 중복 삽입되지 않도록 정확히 도메인까지만 기입해 주세요."
  },
  {
    "slide_index": 37,
    "title": "웹앱과 DB 연동 - API Key 복사",
    "section": "Supabase 데이터베이스 구축",
    "desc": "Project Settings -> API 메뉴로 이동해 anon public key(Publishable Key)를 찾고 키 복사를 수행합니다.",
    "actions": [],
    "tip": "외부 누출에 안전한 읽기/쓰기 권한용 기본 암호키로, 웹브라우저 클라이언트 코드에 직접 담길 데이터입니다."
  },
  {
    "slide_index": 38,
    "title": "웹앱과 DB 연동 - API Key 붙여넣기",
    "section": "Supabase 데이터베이스 구축",
    "desc": "`supabase_config.js`에서 복사한 API Key를 `SUPABASE_KEY`에 대입하여 파일의 최종 저장을 완료합니다.",
    "actions": [],
    "tip": "이제 웹앱이 로드되는 순간 지정한 수파베이스 실시간 DB 서버 세션으로 직접 데이터 쓰기 요청이 가능해집니다."
  },
  {
    "slide_index": 39,
    "title": "Supabase SQL Editor 입장",
    "section": "Supabase 데이터베이스 구축",
    "desc": "데이터를 저장할 테이블 구조를 선언해 주기 위해 수파베이스 좌측 사이드바의 SQL Editor 탭으로 들어갑니다.",
    "actions": [],
    "tip": "SQL 에디터에서는 텍스트 쿼리를 입력해 클릭 몇 번으로 테이블을 설계하고 기본 데이터를 생성할 수 있습니다."
  },
  {
    "slide_index": 40,
    "title": "Supabase SQL 실행 및 테이블 생성",
    "section": "Supabase 데이터베이스 구축",
    "desc": "IDE 작업 공간에 자동 생성된 setup.sql 파일의 코드를 복사하여, SQL Query 에디터 창에 붙여넣고 Run을 누릅니다. Success가 나오는지 확인합니다.",
    "actions": [],
    "tip": "쿼리가 정상 처리되면 하단 터미널 콘솔 로그에 'Success'라는 메시지가 출력되며 테이블 배치가 완료됩니다."
  },
  {
    "slide_index": 41,
    "title": "수파베이스 - 회원 가입 기능 구현",
    "section": "Supabase 데이터베이스 구축",
    "desc": "개발 테스트 편의를 위해 신규 이메일 가입 시 메일 인증을 즉각 통과하도록 설정을 우회합니다.\n1. Supabase 관리 메뉴 Authentication -> Providers -> Email 선택\n2. 'Confirm email' 체크 옵션을 비활성화(OFF)\n3. 하단의 'Save changes'를 눌러 저장합니다.",
    "actions": [],
    "tip": "인증 옵션을 끄지 않으면 가입한 이메일 편지함으로 가서 매번 인증 확인을 눌러야 하므로, 실습 전 꼭 확인하세요."
  },
  {
    "slide_index": 42,
    "title": "Antigravity - Live Server 설치",
    "section": "Live Server 실행",
    "desc": "Antigravity IDE의 확장 기능 마켓플레이스에서 Live Server를 검색하여 설치합니다.\n1. 좌측 확장 기능(Extensions) 아이콘 클릭\n2. 'Live Server' 입력 검색\n3. 리스트에서 Live Server 확인 및 'Install' 클릭하여 설치 진행",
    "actions": [],
    "tip": "Live Server는 작성 중인 HTML, CSS, JS 코드를 로컬 웹 서버로 띄워 실시간으로 변경 사항을 브라우저에 확인해 볼 수 있게 돕는 필수 개발 도구입니다."
  },
  {
    "slide_index": 43,
    "title": "Antigravity - Live Server 실행",
    "section": "Live Server 실행",
    "desc": "설치된 Live Server를 사용해 내 HTML 파일을 로컬 웹 서버로 실행합니다.\n1. 우측 하단의 'Go Live' 클릭 또는 index.html 파일 우클릭\n2. 'Open with Live Server' 클릭\n3. 브라우저 창에서 로컬 서버 작동 상태 확인",
    "actions": [],
    "tip": "Live Server로 열린 브라우저 창은 코드를 수정하고 저장할 때마다 페이지가 자동으로 새로고침(Live Reload)되어 개발 속도가 매우 빨라집니다."
  },
  {
    "slide_index": 44,
    "title": "“Idea Canvas” 주요 기능 (1)",
    "section": "Idea Canvas 앱 제작",
    "desc": "실시간으로 아이디어를 포스트잇 형태로 작성하고 공유할 수 있는 핵심 보드 화면을 구성합니다.",
    "actions": [],
    "tip": "Supabase Realtime 또는 웹소켓을 연동하여 다른 사람이 추가한 메모도 새로고침 없이 실시간으로 화면에 렌더링되게 만듭니다."
  },
  {
    "slide_index": 45,
    "title": "“Idea Canvas” 주요 기능 (2)",
    "section": "Idea Canvas 앱 제작",
    "desc": "생성된 아이디어 보드 화면을 다른 기기(태블릿, 모바일)나 학생들과 편리하게 공유할 수 있도록 QR 코드를 화면에 표시하고 공유 링크를 생성합니다.",
    "actions": [],
    "tip": "무료 QR 코드 생성 API나 라이브러리를 사용해 웹앱 내에서 동적으로 현재 보드의 URL을 QR 이미지로 렌더링해 줍니다."
  },
  {
    "slide_index": 46,
    "title": "“Idea Canvas” 주요 기능 (3)",
    "section": "Idea Canvas 앱 제작",
    "desc": "교사가 작성된 전체 아이디어 목록을 모니터링하고, 메모를 관리(정렬, 삭제 등)할 수 있는 관리자 화면을 구성합니다.",
    "actions": [],
    "tip": "로그인한 사용자의 역할(Role)이나 이메일 주소를 체크하여 교사인 경우에만 관리 버튼과 대시보드가 보이도록 권한을 통제합니다."
  },
  {
    "slide_index": 47,
    "title": "주요 기능 (1) 로그인 & 가입",
    "section": "스마트 칭찬 노트 앱 제작",
    "desc": "학생과 교사가 개별 회원 가입을 하고 개인 계정별로 데이터 공간에 로그인해 접속하는 기능을 구현합니다.",
    "actions": [],
    "tip": "수파베이스에서 내장 제공하는 Email Auth 솔루션을 차용해 계정별 보안 접근을 안전하게 관리합니다."
  },
  {
    "slide_index": 48,
    "title": "주요 기능 (2) 아바타 & 펫 뽑기",
    "section": "스마트 칭찬 노트 앱 제작",
    "desc": "교실 활동에 기여해 모은 칭찬 포인트를 소모해 랜덤으로 아바타나 동물을 수집하는 게임 요소를 구현합니다.",
    "actions": [],
    "tip": "학생들이 웹앱에 흥미를 느끼고 더 적극적으로 참여할 수 있도록 돕는 게이미피케이션(Gamification) 요소입니다."
  },
  {
    "slide_index": 49,
    "title": "주요 기능 (3) 교사용 대시보드",
    "section": "스마트 칭찬 노트 앱 제작",
    "desc": "교사는 전체 학생들의 칭찬 내역 확인, 점수별 랭킹 보기, 수기 점수 조정이 가능한 통합 통계 대시보드를 운용합니다.",
    "actions": [],
    "tip": "대시보드는 교사의 피드백 시간을 획기적으로 줄여주며 효율적인 모둠 관리를 가능하게 합니다."
  },
  {
    "slide_index": 50,
    "title": "주요 기능 (4) 실시간 DB 운영",
    "section": "스마트 칭찬 노트 앱 제작",
    "desc": "Supabase와 실시간 통신하여 데이터를 유지합니다. 새로고침해도 학생들의 정보가 휘발되지 않도록 제어합니다.",
    "actions": [],
    "tip": "웹 브라우저의 LocalStorage를 넘어 온라인 클라우드 데이터 영속성 관리를 체험하는 단계입니다."
  }
];

// App State variables
let currentSlideIndex = 0;
let autoplayActive = false;
let autoplayTimer = null;
let autoplayInterval = null;
const autoplayDuration = 6000; // 6 seconds per slide
let autoplayTimeElapsed = 0;
let activeTab = 'presentation';
let customUsername = '';
let customEmail = '';
let customRepoName = 'IdeaCanvas';

// DOM Elements
const slideImg = document.getElementById('slide-img');
const activeSectionTag = document.getElementById('active-section');
const activeSlideTitle = document.getElementById('active-slide-title');
const slideCounter = document.getElementById('slide-counter');
const progressBar = document.getElementById('progress-bar');
const timerBar = document.getElementById('timer-bar');
const btnAutoplay = document.getElementById('btn-autoplay');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');
const slideActionsList = document.getElementById('slide-actions-list');
const tipContent = document.getElementById('tip-content');
const slideWrapper = document.getElementById('slide-wrapper');
const btnFullscreen = document.getElementById('btn-fullscreen');
const tocContainer = document.getElementById('toc-container');
const copyCenterGrid = document.getElementById('copycenter-grid');

// Sections Map for TOC categorization
const sections = [
  { id: "준비하기", title: "준비하기", slides: [] },
  { id: "Git & GitHub 연동", title: "Git & GitHub 연동", slides: [] },
  { id: "Supabase 데이터베이스 구축", title: "Supabase DB 구축", slides: [] },
  { id: "Live Server 실행", title: "Live Server 실행", slides: [] },
  { id: "Idea Canvas 앱 제작", title: "Idea Canvas 제작", slides: [] },
  { id: "스마트 칭찬 노트 앱 제작", title: "칭찬 노트 앱 제작", slides: [] }
];

// Group slides by section
slidesData.forEach(slide => {
  const section = sections.find(s => s.id === slide.section);
  if (section) {
    section.slides.push(slide);
  }
});

// Initialize Application
function init() {
  buildTOC();
  buildCopyCenter();
  goToSlide(0);
  setupEventListeners();
  feather.replace();
}

// 1. Build Table of Contents Sidebar
function buildTOC() {
  tocContainer.innerHTML = '';
  sections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'toc-section';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'toc-section-title';
    titleDiv.textContent = section.title;
    sectionDiv.appendChild(titleDiv);
    
    const list = document.createElement('ul');
    list.className = 'toc-list';
    
    section.slides.forEach(slide => {
      const item = document.createElement('li');
      item.className = 'toc-item';
      item.id = `toc-item-${slide.slide_index - 1}`;
      item.onclick = () => {
        if (autoplayActive) toggleAutoplay(); // stop autoplay on manual navigation
        goToSlide(slide.slide_index - 1);
        switchTab('presentation');
      };
      
      const idxSpan = document.createElement('span');
      idxSpan.className = 'toc-item-index';
      idxSpan.textContent = String(slide.slide_index).padStart(2, '0');
      
      const titleSpan = document.createElement('span');
      titleSpan.textContent = slide.title
        .replace(/^(Antigravity|GitHub|Supabase|웹앱과|주요) /, '') // strip tags to keep it clean
        .replace(/^-\s*/, ''); // remove leading dash and spaces
      
      item.appendChild(idxSpan);
      item.appendChild(titleSpan);
      list.appendChild(item);
    });
    
    sectionDiv.appendChild(list);
    tocContainer.appendChild(sectionDiv);
  });
}

// 2. Build the centralized Copy Center
function buildCopyCenter() {
  copyCenterGrid.innerHTML = '';
  
  // A. Special card for Slide 40 (SQL DB Schema Creation script) - Full Width
  const sqlSlide = slidesData.find(s => s.slide_index === 40);
  const sqlAction = sqlSlide ? sqlSlide.actions.find(a => a.type === 'sql') : null;
  if (sqlAction) {
    const card = document.createElement('div');
    card.className = 'copy-card grid-fullwidth';
    card.innerHTML = `
      <div class="card-header">
        <span class="card-tag sql">Database SQL Schema</span>
        <div class="card-title">스마트 칭찬 노트 - 수파베이스 DB 테이블 및 보안 정책(RLS) SQL</div>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom: 5px;">
        수파베이스(Supabase) 대시보드 내의 SQL Editor에 아래 쿼리를 입력해 칭찬 저장용 테이블 두 개(profiles, praises)를 자동 생성하고 보안 설정(RLS)을 완료합니다.
      </p>
      <div class="card-content-wrapper">
        <div class="card-content-text multiline" id="cc-sql-code">${escapeHtml(sqlAction.value)}</div>
        <button class="copy-btn" onclick="copyTextFromElement('cc-sql-code', 'SQL 스크립트')" title="복사하기">
          <i data-feather="copy"></i>
        </button>
      </div>
    `;
    copyCenterGrid.appendChild(card);
  }
  
  // ZIP Link Card - Full Width (Fixed URL)
  const zipCard = document.createElement('div');
  zipCard.className = 'copy-card grid-fullwidth';
  const fixedZipUrl = 'https://github.com/Hydrocho/VibeCoding_Basic/raw/main/data/IdeaCanvas.zip';
  
  zipCard.innerHTML = `
    <div class="card-header">
      <span class="card-tag link" style="background-color: rgba(16, 185, 129, 0.15); color: var(--success);">IdeaCanvas ZIP</span>
      <div class="card-title">IdeaCanvas 실습 자료 다운로드 (.ZIP)</div>
    </div>
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom: 8px;">
      교실 수업에 사용될 IdeaCanvas 실습 자료 압축 파일입니다. 아래 링크 주소를 복사하여 배포하거나 직접 다운로드할 수 있습니다.
    </p>
    <div class="card-content-wrapper">
      <div class="card-content-text" id="cc-zip-fixed-url" style="font-size: 0.85rem;">${fixedZipUrl}</div>
      <button class="copy-btn" onclick="copyTextFromElement('cc-zip-fixed-url', 'IdeaCanvas ZIP 다운로드 링크')" title="링크 복사">
        <i data-feather="copy"></i>
      </button>
      <button class="copy-btn" onclick="window.open(document.getElementById('cc-zip-fixed-url').textContent, '_blank')" title="직접 다운로드" style="border-left: 1px solid var(--border-color);">
        <i data-feather="download"></i>
      </button>
    </div>
  `;
  copyCenterGrid.appendChild(zipCard);

  // GrowthNote ZIP Link Card - Full Width (Fixed URL)
  const growthZipCard = document.createElement('div');
  growthZipCard.className = 'copy-card grid-fullwidth';
  const growthZipUrl = 'https://github.com/Hydrocho/VibeCoding_Basic/raw/main/data/GrowthNote.zip';
  
  growthZipCard.innerHTML = `
    <div class="card-header">
      <span class="card-tag link" style="background-color: rgba(16, 185, 129, 0.15); color: var(--success);">GrowthNote ZIP</span>
      <div class="card-title">GrowthNote 실습 자료 다운로드 (.ZIP)</div>
    </div>
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom: 8px;">
      교실 수업에 사용될 GrowthNote 실습 자료 압축 파일입니다. 아래 링크 주소를 복사하여 배포하거나 직접 다운로드할 수 있습니다.
    </p>
    <div class="card-content-wrapper">
      <div class="card-content-text" id="cc-growth-zip-url" style="font-size: 0.85rem;">${growthZipUrl}</div>
      <button class="copy-btn" onclick="copyTextFromElement('cc-growth-zip-url', 'GrowthNote ZIP 다운로드 링크')" title="링크 복사">
        <i data-feather="copy"></i>
      </button>
      <button class="copy-btn" onclick="window.open(document.getElementById('cc-growth-zip-url').textContent, '_blank')" title="직접 다운로드" style="border-left: 1px solid var(--border-color);">
        <i data-feather="download"></i>
      </button>
    </div>
  `;
  copyCenterGrid.appendChild(growthZipCard);

  // GitHub Pages Dynamic URL Card - Full Width
  const ccPageCard = document.createElement('div');
  ccPageCard.className = 'copy-card grid-fullwidth';
  const ccPageUrl = `https://${(customUsername || 'username').toLowerCase()}.github.io/${customRepoName || 'repository'}/`;
  
  ccPageCard.innerHTML = `
    <div class="card-header">
      <span class="card-tag link">LINK</span>
      <div class="card-title">교사 깃허브 페이지 예시 주소</div>
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 12px;">
      <div>
        <label style="font-size: 0.78rem; color: var(--text-secondary); display: block; margin-bottom: 5px; font-weight: 500;">GitHub 아이디 입력:</label>
        <input type="text" id="input-cc-page-username" placeholder="GitHub 아이디 (예: gildong)" value="${customUsername}" class="custom-action-input" style="width: 100%; box-sizing: border-box;" oninput="updatePageUsername(this.value)">
      </div>
      <div>
        <label style="font-size: 0.78rem; color: var(--text-secondary); display: block; margin-bottom: 5px; font-weight: 500;">저장소 이름 입력:</label>
        <input type="text" id="input-cc-page-repo" placeholder="저장소 이름 (예: IdeaCanvas)" value="${customRepoName}" class="custom-action-input" style="width: 100%; box-sizing: border-box;" oninput="updatePageRepo(this.value)">
      </div>
    </div>
    <div class="card-content-wrapper">
      <div class="card-content-text" id="cc-action-25" style="font-size: 0.85rem;">${ccPageUrl}</div>
      <button class="copy-btn" id="btn-copy-cc-pageurl" onclick="copyTextFromElement('cc-action-25', '교사 깃허브 페이지 예시 주소')" title="링크 복사">
        <i data-feather="copy"></i>
      </button>
      <button class="copy-btn" id="btn-visit-cc-pageurl" onclick="window.open(document.getElementById('cc-action-25').textContent, '_blank')" title="새 창으로 이동" style="border-left: 1px solid var(--border-color);">
        <i data-feather="external-link"></i>
      </button>
    </div>
  `;
  copyCenterGrid.appendChild(ccPageCard);

  // B. Standard card items for links and commands
  slidesData.forEach(slide => {
    slide.actions.forEach(action => {
      // Skip the large SQL action since we already created a special full-width card for it
      if (action.type === 'sql') return;
      
      // Skip Slide 25 since we already created a special full-width dynamic card for it above
      if (slide.slide_index === 25) return;
      
      const card = document.createElement('div');
      card.className = 'copy-card';
      
      let tagClass = action.type;
      let tagLabel = action.type.toUpperCase();
      let icon = action.type === 'link' ? 'external-link' : 'terminal';
      if (action.type === 'cmd') tagLabel = 'Command';
      
      let actionValue = action.value;
      
      const isLink = action.type === 'link';
      card.innerHTML = `
        <div class="card-header">
          <span class="card-tag ${tagClass}">${tagLabel}</span>
          <div class="card-title" style="font-size:0.85rem;">[슬라이드 ${slide.slide_index}] ${action.label}</div>
        </div>
        <p style="font-size:0.8rem; color:var(--text-muted); line-height: 1.4; margin-bottom: 5px;">
          ${slide.title.substring(0, 30)}...
        </p>
        <div class="card-content-wrapper">
          <div class="card-content-text" id="cc-action-${slide.slide_index}">${escapeHtml(actionValue)}</div>
          <button class="copy-btn" onclick="copyTextFromElement('cc-action-${slide.slide_index}', '${action.label}')" title="복사하기">
            <i data-feather="copy"></i>
          </button>
          ${isLink ? `
          <button class="copy-btn" onclick="window.open(document.getElementById('cc-action-${slide.slide_index}').textContent, '_blank')" title="새 창으로 이동" style="border-left: 1px solid var(--border-color);">
            <i data-feather="external-link"></i>
          </button>
          ` : ''}
        </div>
      `;
      copyCenterGrid.appendChild(card);
    });
  });

  // C. GitHub Existing Repo Link Card - Full Width (At the very bottom)
  const ccDeployCard = document.createElement('div');
  ccDeployCard.className = 'copy-card grid-fullwidth';
  
  const initStep1 = `git remote add origin https://github.com/${customUsername || '<본인_GitHub_ID>'}/${customRepoName || '<레파지토리_이름>'}.git`;
  const initStep2 = `git push -u origin main --force`;

  ccDeployCard.innerHTML = `
    <div class="card-header">
      <span class="card-tag cmd" style="background-color: rgba(99, 102, 241, 0.15); color: var(--primary);">GitHub Existing Repo</span>
      <div class="card-title" style="font-weight: 700; font-size: 1.05rem;">GitHub에 이미 존재하는 레파지토리로 배포(연결)하고 싶을 때</div>
    </div>
    <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom: 12px; line-height: 1.6;">
      GitHub에 이미 존재하는 레파지토리로 배포(연결)하고 싶을 때는 프로젝트 폴더에서 터미널(git bash)을 열고 아래 명령어를 입력해주세요.
    </p>
    
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; padding: 15px; background-color: var(--bg-sidebar); border-radius: 8px; border: 1px solid var(--border-color);">
      <div>
        <label style="font-size: 0.78rem; color: var(--text-secondary); display: block; margin-bottom: 5px; font-weight: 600;">GitHub 아이디 입력:</label>
        <input type="text" id="input-cc-deploy-username" placeholder="GitHub 아이디 (예: Hydrocho)" value="${customUsername}" class="custom-action-input" style="width: 100%; box-sizing: border-box;" oninput="updatePageUsername(this.value)">
      </div>
      <div>
        <label style="font-size: 0.78rem; color: var(--text-secondary); display: block; margin-bottom: 5px; font-weight: 600;">레파지토리 이름 입력:</label>
        <input type="text" id="input-cc-deploy-repo" placeholder="레파지토리 이름 (예: IdeaCanvas_3)" value="${customRepoName}" class="custom-action-input" style="width: 100%; box-sizing: border-box;" oninput="updatePageRepo(this.value)">
      </div>
    </div>

    <!-- Step 1 -->
    <div style="margin-bottom: 20px;">
      <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
        <span style="background-color: var(--primary); color: white; border-radius: 4px; padding: 2px 6px; font-size: 0.75rem;">1단계</span>
        기존 저장소 연결하기
      </div>
      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 8px; padding-left: 4px;">원격 저장소(GitHub) 주소를 로컬 프로젝트에 등록합니다.</div>
      <div class="card-content-wrapper">
        <div class="card-content-text" id="cc-deploy-step1-code" style="font-size: 0.82rem;">${initStep1}</div>
        <button class="copy-btn" id="btn-copy-cc-deploy-step1" onclick="copyTextFromElement('cc-deploy-step1-code', '기존 저장소 연결 명령어')" title="명령어 복사">
          <i data-feather="copy"></i>
        </button>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px; font-style: italic; padding-left: 4px;">
        (예: git remote add origin https://github.com/Hydrocho/IdeaCanvas_3.git)
      </div>
    </div>

    <!-- Step 2 -->
    <div style="margin-bottom: 5px;">
      <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
        <span style="background-color: var(--secondary); color: white; border-radius: 4px; padding: 2px 6px; font-size: 0.75rem;">2단계</span>
        코드 올리기 (선택)
      </div>
      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 8px; padding-left: 4px;">기존 원격 저장소 내용을 무시하고 내 컴퓨터 코드로 완전히 덮어쓰기</div>
      <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 8px; padding-left: 4px; line-height: 1.4;">기존 GitHub에 들어있는 파일(예: 자동 생성된 README.md 등)이 중요하지 않을 때 사용합니다.</div>
      <div class="card-content-wrapper">
        <div class="card-content-text" id="cc-deploy-step2-code" style="font-size: 0.82rem;">${initStep2}</div>
        <button class="copy-btn" id="btn-copy-cc-deploy-step2" onclick="copyTextFromElement('cc-deploy-step2-code', '코드 덮어쓰기 명령어')" title="명령어 복사">
          <i data-feather="copy"></i>
        </button>
      </div>
    </div>
  `;
  copyCenterGrid.appendChild(ccDeployCard);
}

// 3. Navigation core function
function goToSlide(index) {
  if (index < 0 || index >= slidesData.length) return;
  
  // Remove active state on old slide
  const oldActive = document.querySelector('.toc-item.active');
  if (oldActive) oldActive.classList.remove('active');
  
  currentSlideIndex = index;
  const slide = slidesData[currentSlideIndex];
  
  // Update view elements
  const slideNumStr = String(slide.slide_index).padStart(3, '0');
  slideImg.src = `slides/slide_${slideNumStr}.png`;
  slideImg.alt = slide.title;
  
  activeSectionTag.textContent = slide.section;
  activeSlideTitle.textContent = slide.title;
  slideCounter.textContent = `${slide.slide_index} / ${slidesData.length}`;
  
  // Calculate progress bar
  const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  // Update detail pane content
  detailTitle.textContent = slide.title;
  detailDesc.textContent = slide.desc;
  
  if (slide.tip) {
    tipContent.textContent = slide.tip;
  } else {
    tipContent.textContent = "Antigravity IDE와 Supabase를 결합하여 나만의 모둠 활동 칭찬 웹앱을 배포하는 실습 과정입니다.";
  }
  
  // Render slide actions list
  renderSlideActions(slide);
  
  // Highlight TOC item
  const newActive = document.getElementById(`toc-item-${currentSlideIndex}`);
  if (newActive) {
    newActive.classList.add('active');
    // Scroll element into view smoothly in the sidebar
    newActive.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // Reset autoplay timer bar
  autoplayTimeElapsed = 0;
  timerBar.style.width = '0%';
  
  // Refit feather icons
  feather.replace();
}

// Render dynamic contextual actions in the Detail Panel
function renderSlideActions(slide) {
  slideActionsList.innerHTML = '';
  
  if (!slide.actions || slide.actions.length === 0) {
    slideActionsList.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 10px 0;">
        이 슬라이드에는 복사 또는 이동해야 할 링크/명령어가 없습니다.
      </div>
    `;
    return;
  }
  
  slide.actions.forEach((action, actIdx) => {
    const card = document.createElement('div');
    card.className = 'copy-card';
    
    let tagClass = action.type;
    let tagLabel = action.type.toUpperCase();
    if (action.type === 'cmd') tagLabel = 'Terminal Command';
    if (action.type === 'sql') tagLabel = 'Supabase SQL Script';
    
    const targetId = `slide-act-val-${currentSlideIndex}-${actIdx}`;
    const isMultiline = action.type === 'sql';
    
    if (slide.slide_index === 13) {
      card.innerHTML = `
        <div class="card-header">
          <span class="card-tag ${tagClass}">${tagLabel}</span>
          <div class="card-title">${action.label}</div>
        </div>
        <div style="margin-top: 5px;">
          <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">영문 사용자 이름 입력:</label>
          <input type="text" id="input-git-username" placeholder="영문 이름을 입력하세요 (예: gildong)" value="${customUsername}" class="custom-action-input" oninput="updateUsernameCommand(this.value)">
        </div>
        <div class="card-content-wrapper" style="margin-top: 10px;">
          <div class="card-content-text" id="${targetId}">git config --global user.name "${customUsername}"</div>
          <button class="copy-btn" id="btn-copy-username" onclick="copyTextFromElement('${targetId}', '${action.label}')" title="클립보드로 복사" ${customUsername ? '' : 'disabled style="opacity: 0.4; cursor: not-allowed;"'}>
            <i data-feather="copy"></i>
          </button>
        </div>
      `;
    } else if (slide.slide_index === 14) {
      card.innerHTML = `
        <div class="card-header">
          <span class="card-tag ${tagClass}">${tagLabel}</span>
          <div class="card-title">${action.label}</div>
        </div>
        <div style="margin-top: 5px;">
          <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">이메일 주소 입력:</label>
          <input type="text" id="input-git-email" placeholder="이메일 주소를 입력하세요 (예: gildong@goedu.kr)" value="${customEmail}" class="custom-action-input" oninput="updateEmailCommand(this.value)">
        </div>
        <div class="card-content-wrapper" style="margin-top: 10px;">
          <div class="card-content-text" id="${targetId}">git config --global user.email "${customEmail}"</div>
          <button class="copy-btn" id="btn-copy-email" onclick="copyTextFromElement('${targetId}', '${action.label}')" title="클립보드로 복사">
            <i data-feather="copy"></i>
          </button>
        </div>
      `;
    } else if (slide.slide_index === 25) {
      const pageUrl = `https://${(customUsername || 'username').toLowerCase()}.github.io/${customRepoName || 'repository'}/`;
      card.innerHTML = `
        <div class="card-header">
          <span class="card-tag ${tagClass}">${tagLabel}</span>
          <div class="card-title">${action.label}</div>
        </div>
        <div style="margin-top: 5px; display: flex; gap: 8px; flex-direction: column;">
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">GitHub 아이디 입력:</label>
            <input type="text" id="input-page-username" placeholder="GitHub 아이디 (예: gildong)" value="${customUsername}" class="custom-action-input" oninput="updatePageUsername(this.value)">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">저장소 이름 입력:</label>
            <input type="text" id="input-page-repo" placeholder="저장소 이름 (예: IdeaCanvas)" value="${customRepoName}" class="custom-action-input" oninput="updatePageRepo(this.value)">
          </div>
        </div>
        <div class="card-content-wrapper" style="margin-top: 10px;">
          <div class="card-content-text" id="${targetId}">${pageUrl}</div>
          <button class="copy-btn" id="btn-copy-pageurl" onclick="copyTextFromElement('${targetId}', '${action.label}')" title="클립보드로 복사">
            <i data-feather="copy"></i>
          </button>
          <button class="copy-btn" id="btn-visit-pageurl" onclick="window.open(document.getElementById('${targetId}').textContent, '_blank')" title="새 창으로 이동" style="border-left: 1px solid var(--border-color);">
            <i data-feather="external-link"></i>
          </button>
        </div>
      `;
    } else {
      const isLink = action.type === 'link';
      card.innerHTML = `
        <div class="card-header">
          <span class="card-tag ${tagClass}">${tagLabel}</span>
          <div class="card-title">${action.label}</div>
        </div>
        <div class="card-content-wrapper">
          <div class="card-content-text ${isMultiline ? 'multiline' : ''}" id="${targetId}">${escapeHtml(action.value)}</div>
          <button class="copy-btn" onclick="copyTextFromElement('${targetId}', '${action.label}')" title="클립보드로 복사">
            <i data-feather="copy"></i>
          </button>
          ${isLink ? `
          <button class="copy-btn" onclick="window.open(document.getElementById('${targetId}').textContent, '_blank')" title="새 창으로 이동" style="border-left: 1px solid var(--border-color);">
            <i data-feather="external-link"></i>
          </button>
          ` : ''}
        </div>
      `;
    }
    
    slideActionsList.appendChild(card);
  });
}

// 4. Autoplay functions
function toggleAutoplay() {
  autoplayActive = !autoplayActive;
  
  if (autoplayActive) {
    btnAutoplay.innerHTML = '<i data-feather="pause"></i> 정지';
    btnAutoplay.classList.add('active');
    autoplayTimeElapsed = 0;
    
    // Timer interval triggers every 100ms
    autoplayInterval = setInterval(() => {
      autoplayTimeElapsed += 100;
      const pct = (autoplayTimeElapsed / autoplayDuration) * 100;
      timerBar.style.width = `${pct}%`;
      
      if (autoplayTimeElapsed >= autoplayDuration) {
        autoplayTimeElapsed = 0;
        nextSlide();
      }
    }, 100);
  } else {
    btnAutoplay.innerHTML = '<i data-feather="play"></i> Auto';
    btnAutoplay.classList.remove('active');
    clearInterval(autoplayInterval);
    timerBar.style.width = '0%';
  }
  feather.replace();
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  } else {
    // Wrap around to end
    goToSlide(slidesData.length - 1);
  }
}

function nextSlide() {
  if (currentSlideIndex < slidesData.length - 1) {
    goToSlide(currentSlideIndex + 1);
  } else {
    // Wrap around to start and pause autoplay
    if (autoplayActive) toggleAutoplay();
    goToSlide(0);
  }
}

// Progress Bar clicking navigation
function handleProgressClick(e) {
  const container = e.currentTarget;
  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const clickPct = clickX / width;
  
  const targetIndex = Math.floor(clickPct * slidesData.length);
  if (autoplayActive) toggleAutoplay();
  goToSlide(Math.min(slidesData.length - 1, Math.max(0, targetIndex)));
}

// Tab Selector logic
function switchTab(tab) {
  activeTab = tab;
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));
  
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.remove('active'));
  
  if (tab === 'presentation') {
    document.querySelector(`.tab-btn[onclick="switchTab('presentation')"]`).classList.add('active');
    document.getElementById('panel-presentation').classList.add('active');
  } else {
    document.querySelector(`.tab-btn[onclick="switchTab('copycenter')"]`).classList.add('active');
    document.getElementById('panel-copycenter').classList.add('active');
  }
}

// 5. Clipboard Helpers & Toast Alerts
function copyTextFromElement(elementId, label) {
  // If it's the email command from Slide 14 or the Copy Center
  if (elementId === 'slide-act-val-13-0' || elementId === 'cc-action-14') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customEmail) {
      showToast("이메일 주소를 입력해 주세요.", "warning");
      return;
    }
    if (!emailRegex.test(customEmail)) {
      showToast("이메일 주소 형식이 올바르지 않습니다.", "warning");
      return;
    }
  }

  const el = document.getElementById(elementId);
  if (!el) return;
  
  const textToCopy = el.textContent || el.innerText;
  copyToClipboard(textToCopy, label);
}

function copyToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(`${label} 복사 완료!`))
      .catch(err => {
        console.error("Clipboard copy failed:", err);
        fallbackCopy(text, label);
      });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";  // prevent scrolling to bottom of page
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToast(`${label} 복사 완료! (호환성 모드)`);
    } else {
      showToast("복사 실패. 수동으로 드래그 복사해 주세요.");
    }
  } catch (err) {
    console.error("Fallback copy failed:", err);
    showToast("복사 중 오류 발생.");
  }
  document.body.removeChild(textArea);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'warning' ? 'warning' : ''}`;
  
  let icon = 'check-circle';
  let color = 'var(--success)';
  if (type === 'warning') {
    icon = 'alert-triangle';
    color = 'hsl(15, 100%, 60%)';
  }
  
  toast.innerHTML = `<i data-feather="${icon}" style="color:${color}; width: 18px; height: 18px;"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  feather.replace();
  
  // Automatically remove toast element after animation completes
  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// Utility html escaping helper
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function updateUsernameCommand(value) {
  customUsername = value.trim();
  const codeDiv = document.getElementById('slide-act-val-12-0'); // Slide 13 (index 12), first action
  const copyBtn = document.getElementById('btn-copy-username');
  
  if (codeDiv) {
    codeDiv.textContent = `git config --global user.name "${customUsername}"`;
  }
  
  if (copyBtn) {
    if (customUsername.length > 0) {
      copyBtn.removeAttribute('disabled');
      copyBtn.style.opacity = '1';
      copyBtn.style.cursor = 'pointer';
    } else {
      copyBtn.setAttribute('disabled', 'true');
      copyBtn.style.opacity = '0.4';
      copyBtn.style.cursor = 'not-allowed';
    }
  }
  
  // Also update in Copy Center
  const ccDiv = document.getElementById('cc-action-13');
  if (ccDiv) {
    ccDiv.textContent = `git config --global user.name "${customUsername || 'my name'}"`;
  }
}

function updateEmailCommand(value) {
  customEmail = value.trim();
  const codeDiv = document.getElementById('slide-act-val-13-0'); // Slide 14 (index 13), first action
  
  if (codeDiv) {
    codeDiv.textContent = `git config --global user.email "${customEmail}"`;
  }
  
  // Also update in Copy Center
  const ccDiv = document.getElementById('cc-action-14');
  if (ccDiv) {
    ccDiv.textContent = `git config --global user.email "${customEmail || 'myEmail@goedu.kr'}"`;
  }
}

function updatePageUsername(value) {
  customUsername = value.trim();
  
  // Sync back to slide 13 input if present
  const slide13Input = document.getElementById('input-git-username');
  if (slide13Input) slide13Input.value = customUsername;
  
  const pageUsernameInput = document.getElementById('input-page-username');
  if (pageUsernameInput) pageUsernameInput.value = customUsername;

  const ccPageUsernameInput = document.getElementById('input-cc-page-username');
  if (ccPageUsernameInput) ccPageUsernameInput.value = customUsername;

  const ccDeployUsernameInput = document.getElementById('input-cc-deploy-username');
  if (ccDeployUsernameInput) ccDeployUsernameInput.value = customUsername;

  // Sync to slide 13 command display if visible
  const gitNameCmd = document.getElementById('slide-act-val-12-0');
  if (gitNameCmd) {
    gitNameCmd.textContent = `git config --global user.name "${customUsername}"`;
  }
  
  // Enable/disable copy button on Slide 13
  const copyBtn = document.getElementById('btn-copy-username');
  if (copyBtn) {
    if (customUsername.length > 0) {
      copyBtn.removeAttribute('disabled');
      copyBtn.style.opacity = '1';
      copyBtn.style.cursor = 'pointer';
    } else {
      copyBtn.setAttribute('disabled', 'true');
      copyBtn.style.opacity = '0.4';
      copyBtn.style.cursor = 'not-allowed';
    }
  }
  
  // Sync to Copy Center name command
  const ccNameDiv = document.getElementById('cc-action-13');
  if (ccNameDiv) {
    ccNameDiv.textContent = `git config --global user.name "${customUsername || 'my name'}"`;
  }

  // Update URL displays
  updatePageUrlDisplay();

  // Update Deploy Step 1 command display
  const ccDeployStep1 = document.getElementById('cc-deploy-step1-code');
  if (ccDeployStep1) {
    ccDeployStep1.textContent = `git remote add origin https://github.com/${customUsername || '<본인_GitHub_ID>'}/${customRepoName || '<레파지토리_이름>'}.git`;
  }
}

function updatePageRepo(value) {
  customRepoName = value.trim();
  
  // Sync page repo input
  const pageRepoInput = document.getElementById('input-page-repo');
  if (pageRepoInput) pageRepoInput.value = customRepoName;

  const ccPageRepoInput = document.getElementById('input-cc-page-repo');
  if (ccPageRepoInput) ccPageRepoInput.value = customRepoName;

  const ccDeployRepoInput = document.getElementById('input-cc-deploy-repo');
  if (ccDeployRepoInput) ccDeployRepoInput.value = customRepoName;

  // Update URL displays
  updatePageUrlDisplay();

  // Update Deploy Step 1 command display
  const ccDeployStep1 = document.getElementById('cc-deploy-step1-code');
  if (ccDeployStep1) {
    ccDeployStep1.textContent = `git remote add origin https://github.com/${customUsername || '<본인_GitHub_ID>'}/${customRepoName || '<레파지토리_이름>'}.git`;
  }
}

function updatePageUrlDisplay() {
  const pageUrl = `https://${(customUsername || 'username').toLowerCase()}.github.io/${customRepoName || 'repository'}/`;
  
  // Update Slide 25 (index 24) URL element
  const urlDiv = document.getElementById('slide-act-val-24-0'); 
  if (urlDiv) {
    urlDiv.textContent = pageUrl;
  }
  
  // Update Copy Center slide 25 URL element
  const ccDiv = document.getElementById('cc-action-25');
  if (ccDiv) {
    ccDiv.textContent = pageUrl;
  }
}


// 6. Fullscreen & Key events handlers
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const btn = document.getElementById('btn-toggle-sidebar');
  sidebar.classList.toggle('collapsed');
  
  if (sidebar.classList.contains('collapsed')) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function toggleDetails() {
  const details = document.querySelector('.slide-details');
  const btn = document.getElementById('btn-toggle-details');
  details.classList.toggle('collapsed');
  
  if (details.classList.contains('collapsed')) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    slideWrapper.requestFullscreen().then(() => {
      slideWrapper.classList.add('fullscreen');
      btnFullscreen.innerHTML = '<i data-feather="minimize-2"></i>';
      feather.replace();
    }).catch(err => {
      console.error(`Fullscreen request failed: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

function setupEventListeners() {
  // Listen for fullscreen change state
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      slideWrapper.classList.remove('fullscreen');
      btnFullscreen.innerHTML = '<i data-feather="maximize-2"></i>';
      feather.replace();
    }
  });
  
  // Fullscreen button click handler
  btnFullscreen.onclick = toggleFullscreen;
  
  // Keyboard arrow keys controls
  document.addEventListener('keydown', (e) => {
    if (activeTab !== 'presentation') return;
    
    // Ignore input focus bindings
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    
    if (e.key === 'ArrowRight') {
      if (autoplayActive) toggleAutoplay();
      nextSlide();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      if (autoplayActive) toggleAutoplay();
      prevSlide();
      e.preventDefault();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      if (autoplayActive) toggleAutoplay();
      nextSlide();
      e.preventDefault();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
      e.preventDefault();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleSidebar();
      e.preventDefault();
    } else if (e.key === 'd' || e.key === 'D') {
      toggleDetails();
      e.preventDefault();
    }
  });
}

// Run app init on DOM load
window.addEventListener('DOMContentLoaded', init);
