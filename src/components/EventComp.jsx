// 클래스 컴포넌트 이벤트
import {Component} from 'react'; 
class EventComp extends  Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true,
            num : 1,
        }
        this.handleClick = this.handleClick.bind(this);
        this.doubleNum = this.doubleNum.bind(this);
    }
    // 메소드로만 사용하면 this의 위치를 찾지 못해서 오류발생 : this 를 bind로 연결 
    handleClick(){
        // 실행하는 공간이 바뀌어서 값을 가져오는 공간이 바뀜
        // render() : render안에서 가져온 this.state
        // 메소드 : constructor에서 가져온 this.state
        this.setState({isToggleOn:!this.state.isToggleOn})
        console.log("확인");
    }
    // 값을 두배로 만들어주는 메소드
    // *********cunstructor 에 bind 해줘야함*********** 
    doubleNum(){
        this.setState({num : this.state.num *2})
    }
    render (){
        const {isToggleOn, num} = this.state;
        return (
            <div>
            <button onClick={this.handleClick}>{isToggleOn ? 'On':'Off'}</button>
            {/** num= 1 이라는 숫자값을 추가해서 , 버튼을 클릭할때만 2배로 늘어나수 있게 */}
            {/** 값은 번호에 출력 */}
            <button onClick={this.doubleNum}>{num}</button>
            </div>
        )
    }
}

export default EventComp;