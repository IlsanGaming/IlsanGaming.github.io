import './AIWorkflowCase.css'

export default function AIWorkflowCase() {
  return <article className="workflow-case" aria-labelledby="workflow-case-title">
    <div className="workflow-case-heading">
      <p className="eyebrow">실제 구현 사례 · 병원 로비</p>
      <h3 id="workflow-case-title">좀비의 등장 시점을 조정해 플레이어의 동선 선택을 유도했습니다.</h3>
      <p>생성 조건과 이동 경로는 Unreal MCP로 구현하고, 등장 타이밍은 직접 플레이하며 조정했습니다.</p>
    </div>
    <ol className="workflow-case-steps">
      <li>
        <span className="workflow-case-step">01 · 바꾸려던 부분</span>
        <h4>좀비 등장을 제어반 조작·알람과 연결했습니다.</h4>
        <p>처음에는 제어반 조작이나 알람과 관계없이, 플레이어가 가까이 가면 좀비가 생성됐습니다.</p>
        <p>기존 AGLS를 사용한 프로젝트에서는 유리를 깨고 나오거나 2층에서 떨어진 뒤, 연결된 PathTrack 액터가 없어 좀비가 제자리에 서 있었습니다.</p>
      </li>
      <li>
        <span className="workflow-case-step">02 · AI 활용</span>
        <h4>유리를 깬 뒤에도 플레이어를 쫓도록 했습니다.</h4>
        <p>Unreal MCP로 알람 이후 좀비가 생성되도록 조건과 대기 시간을 구현했습니다.</p>
        <p>2층에서 유리창까지 PathTrack을 연결하고, 유리를 깬 뒤에는 플레이어 쪽으로 짧은 경로를 지정했습니다. 이동 중 플레이어가 시야에 들어오면 추적을 시작하게 했습니다.</p>
      </li>
      <li>
        <span className="workflow-case-step">03 · 직접 확인하고 수정한 부분</span>
        <h4>컷신이 끝날 때 가까워지는 위협을 의도했습니다.</h4>
        <p>가까이 접근한 좀비를 보고 플레이어가 이동할 동선을 선택하게 하고 싶었습니다.</p>
        <p>제작 후반 컷신을 넣자 좀비가 너무 일찍 등장했습니다. 생성 대기 시간을 외부에서 바꿀 수 있게 변수로 빼두고, 직접 플레이하며 컷신이 끝날 즈음 접근하도록 조정했습니다.</p>
      </li>
    </ol>
  </article>
}
