import {useState} from "react";
import Head from "next/head";

/**
 * 버튼 클릭을 통해 기능 활성화 여부를 토글합니다.
 * 기능이 활성화된 상태에서는 부모로부터 전달받은 pageName 문자열로 페이지 제목을 재설정하고,
 * 그렇지 않으면 아무 일도 하지 않습니다.
 * @param pageName
 * @constructor
 */
function TitleChanger({ pageName }: { pageName: string; }) {

  // 이 컴포넌트의 기능을 활성화할 지 사용 여부를 관리합니다.
  const [active, setActive] = useState(false);

  // 이 컴포넌트의 기능이 활성화된 상태라면, 부모로부터 전달받은 문자열로 페이지 타이틀을 재설정합니다.
  if (active) return (
    <>
      <Head>
        <title>pageName: {pageName}</title>
      </Head>
      <div>
        <button onClick={() => setActive(prevState => !prevState)}>
          {active ? 'stop' : 'start'}
        </button>
        <span>{active ? 'activated' : 'deactivated'}</span>
      </div>
    </>
  );

  // 이 컴포넌트의 기능이 활성화 되지 않았다면, 페이지 타이틀을 변경하지 않습니다.
  return (
    <>
      <div>
        <button onClick={() => setActive(prevState => !prevState)}>
          {active ? 'stop' : 'start'}
        </button>
        <span>{active ? 'activated' : 'deactivated'}</span>
      </div>
    </>
  );
}

export default TitleChanger;
