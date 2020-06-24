import React from 'react';
import { connect } from 'react-redux';
import { inc, dec, rnd } from '../actions';

const Counter = (props) => {
    const { inc, dec, rnd, counter } = props;
    return (
        <div className="Counter">
            <h1>{counter}</h1>
            <button
                onClick={dec}>DEC</button>
            <button
                onClick={rnd}>RND</button>
            <button
                onClick={inc}>INC</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => dispatch(rnd(Math.floor(Math.random() * 10)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);