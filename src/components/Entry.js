import './Entry.css'

import React from 'react';

import Keywords from './Keywords'

const Entry = (props) => {
    return (
        <article tabIndex="0">
            <h4>Question: {props.question}</h4>
            <p>Answer: {props.answer}</p>
            <Keywords kw={props.kw} />
        </article>
    );
}

export default Entry;