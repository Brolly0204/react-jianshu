import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/store'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SwitchInfoItem,
  SearchInfoList
} from './style'

const getListArea = show => {
  const SearchInfoCom = (
    <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>
          <i className='iconfont'>&#xe635;</i>
          换一批
        </SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        <SwitchInfoItem>教育</SwitchInfoItem>
        <SwitchInfoItem>教育</SwitchInfoItem>
        <SwitchInfoItem>教育</SwitchInfoItem>
        <SwitchInfoItem>教育</SwitchInfoItem>
        <SwitchInfoItem>教育</SwitchInfoItem>
        <SwitchInfoItem>教育</SwitchInfoItem>
      </SearchInfoList>
    </SearchInfo>
  )
  return show ? SearchInfoCom : null
}

const { handlerInputFocus, handlerInputBlur } = actions

// 函数式组件
const Header = props => {
  const { focused, handlerInputFocus, handlerInputBlur } = props
  console.log(props)

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>

        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handlerInputFocus}
              onBlur={handlerInputBlur}
            />
          </CSSTransition>
          <i className={focused ? 'iconfont magnifier focused' : 'iconfont magnifier'}>&#xe637;</i>
          {getListArea(focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="write">
          <i className="iconfont">&#xe6af;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

export default connect(
  // state => ({ focused: state.get('header').get('focused') }),
  state => ({ focused: state.getIn(['header', 'focused'])}),
  {
    handlerInputFocus,
    handlerInputBlur 
  }
)(Header)


// class Header extends Component {

//   render() {
//     const { focused, handlerInputFocus, handlerInputBlur } = this.props
//     return (
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right">登录</NavItem>
//           <NavItem className="right">
//             <i className="iconfont">&#xe636;</i>
//           </NavItem>

//           <SearchWrapper>
//             <CSSTransition
//               in={focused}
//               timeout={300}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={focused ? 'focused' : ''}
//                 onFocus={handlerInputFocus}
//                 onBlur={handlerInputBlur}
//               />
//             </CSSTransition>
//             <i className={focused ? 'iconfont magnifier focused' : 'iconfont magnifier'}>&#xe637;</i>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="write">
//             <i className="iconfont">&#xe6af;</i>
//             写文章
//           </Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }
// }