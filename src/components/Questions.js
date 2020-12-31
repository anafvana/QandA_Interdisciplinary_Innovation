import React from 'react';
import Entry from './Entry'

const Questions = () => {
    const selectedQs = [{q: "what?", a: "that", kw:["a", "b"], categories:["1", "2"]}]
    return (
        <section name="Questions matching your query">
            {selectedQs.map(q_and_a => (
                <Entry question={q_and_a.q} answer={q_and_a.a} kw={q_and_a.kw} categories={q_and_a.categories}/>
            ))}
        </section>
    );
}

export default Questions;   