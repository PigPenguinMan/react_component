// 함수형 컴포넌트

import { useState } from "react";
const EventFuncComp = () => {
    const [num, setNum] = useState(0);
    const [name , setName] = useState("홍길동")
    // 익명함수 또는 화살표 함수로 작성해서 사용 
    const numPlus = function () {
        setNum(num + 1)
    }

    const nameChange = () =>{
        setName("다른이름")
    }
    return (
        <div>
            {/* 같은 함수안에 있는 내용이므로 이름만 작성 */}
            <button onClick={numPlus}>{num} </button>
            {/* name = "홍길동"을 작성후 버튼을 클릭하면 다른이름으로 바뀌는 함수작성  */}
            <h1>{name}</h1>
            <button onClick={nameChange}>이름 바꾸기</button>
        </div>
    )
}

export default EventFuncComp;