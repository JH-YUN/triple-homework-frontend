# triple frontend 사전과제

## [데모페이지🔗](https://jh-yun.github.io/triple-homework-frontend)

[데모페이지 미리보기](https://jh-yun.github.io/triple-homework-frontend)

---

## 실행방법

### 패키지 설치

    $ yarn install

### 실행

    $ yarn start

### Storybook 실행

    $ yarn storybook

---

## 사용한 기술

`React`

- 필수 조건

`TypeScript`

- JavaScript에 정적 타입을 추가한 슈퍼셋입니다.
- 정적 타입 지원으로 실수를 줄여줍니다.
- 코드 자동완성으로 생산성이 향상됩니다.
- 코드 작성량 증가로 단기적으론 생산성이 줄어드는것 같지만 장기적으로 유지보수의 관점까지 생각할 경우 장점이 더 크다고 생각해 채택하였습니다.

`styled-component`

- 스크립트 내에서 스타일 작성을 지원하는 CSS-in-JS 방식을 지원하는 라이브러리입니다.
- css가 중첩되는 문제를 사전에 방지하고 컴포넌트 재사용에 유리한 구조를 가지고있습니다.
- 재사용을 위한 컴포넌트 구조에는 CSS-in-JS를 택하였고 귀사의 채용공고에서 기술스택을 참고하여 해당 라이브러리로 채택하였습니다.

`Storybook`

- 독립된 환경에서 컴포넌트를 빌드하여 테스트 하기 위한 툴입니다.
- 샌드박스 환경 제공으로 다양한 상태나 상황을 부여하여 특정 컴포넌트만을 테스트할수 있습니다.
- 컴포넌트를 하나하나 테스트하기 편리하기 때문에 채택하였습니다.
