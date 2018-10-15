import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                            className={props.focused ? 'focused' : ''}
                        ></NavSearch>
                    </CSSTransition>
                    <i
                        className={props.focused ? 'focused iconfont' : 'iconfont'}
                    >
                        &#xe6a7;
                        </i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">
                    <i className="iconfont">&#xe608;</i>
                    写文章
                    </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);