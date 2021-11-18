import React from "react";
// import PropTypes from "react";
import { Component } from "react";

//1. 클래스형(을 빌린) 컴포넌트
class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   // 함수생성, state 생성 영역
  render() {
    const { name, color } = this.props;
    //     //함수 사용, 값처리
    return <div style={{ color: color }}>{name} 첫 컴포넌트야</div>; //렌더링 영역
  }
}

//2. 함수형(을 빌린) 컴포넌트
// const MyFirstComponent = ({ children, color, name, age }) => {
//   //   //여기서 다해
//   return (
//     <>
//       <div style={{ color: color }}>
//         {age}살 {name} 첫 컴포넌트야
//       </div>
//       {children}
//     </> //여기서 보여줘
//   );
// };

MyFirstComponent.defaultProps = {
  name: "이름없음",
  age: 0,
};
// MyFirstComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };
export default MyFirstComponent;
