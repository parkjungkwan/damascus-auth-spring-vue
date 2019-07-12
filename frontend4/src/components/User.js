import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserCompo extends Component{
    /** 컴포넌트가 DOM에 추가되기 직전 */
    UNSAFE_componentWillMount(){
        this.props.onMount(this.props.user);
    }
    /** 컴포넌트가 props 값을 전달 받았을 때 */
    getDerivedStateFromProps({nextProps}){
        if(this.props.user !== nextProps.user){
            this.props.onUpdate(nextProps.user)
        }
    }
    render (){
        const { category, repos, error } = this.props;
        return (
            <div>
                <h2>{
                    typeof category !== 'undefined'
                    ? `${category.name}의 리포지토리`
                    : ''
                }</h2>
                <p>User: {this.props.user}</p>
            </div>
        );
    }
    
}
User.propTypes = {
    user: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    // category, repos, error 자료형 추가
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    repos: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}
User.defaultProps = {
    /** 기본값으로 apple 에 연결*/
    user: 'apple'
} 

