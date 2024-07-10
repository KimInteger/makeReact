import React from "react";

function setStorage() {
  window.localStorage.setItem('넌', '버튼이야.');
}


function MyButton({title}:{title:string}) {
  return(
    <button onClick={setStorage}>{title}</button>
  )
}

const App: React.FC = () => {
  return (
    <div>
      <h1>하이!</h1>
      <MyButton title={'난 버튼이야.'} />
    </div>
  );
};

export default App;