import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const SearchInfoList = styled.div`
`

export const SwitchInfoItem = styled.a.attrs({
  href: '/'
})`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin: 0 4px 8px;
  text-decoration: none;
`

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 860px;
  height: 100%;
  padding-right: 40px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333333;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #EA6F5A;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin: 9px 0 0 15px;

  .iconfont {
    &.magnifier {
      position: absolute;
      right: 5px;
      bottom: 4px;
      width: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
    }
    &.focused {
      color: #fff;
      background: #999;
    }
  }
`

export const SearchInfoSwitch = styled.span`
  float: right;
  & > .iconfont {
    font-size: 13px;
    margin-right: 3px;
  }
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 15px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 6px;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 19px;
  font-size: 14px;
  background: #eeeeee;
  padding: 0 40px 0 20px;
  color: #777;

  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }

  &.slide-enter {
    width: 160px;
    transition: all .3s ease-in;
  }

  &.slide-enter-active {
    width: 240px; 
  }

  &.slide-exit {
    transition: all .3s ease-in;
  }

  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin: 9px 0 0 15px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;s
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`
