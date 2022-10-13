// 클래스형 컴포넌트 
// props 값을 login과 name을 받아와서 
// login이 true일때 , 
// 로그인이 성공하였습니다 . name 입니다 를 출력하고 
// 아닐때 , 로그인이 필요합니다 를 출력하는 컴포넌트
import {Component} from 'react';

class MyLogin extends Component{
    render(){
        const { login, name } = this.props;
        return (
        <div>
            {login ? (
                <div>
                    <h1>로그인에 성공하였습니다</h1>
                    <p>{name}입니다</p>
                </div>
            ) : (
                <div>
                    <h1>로그인이 필요합니다</h1>
                </div>
            )}
        </div>
        )
    }
}


export default MyLogin;