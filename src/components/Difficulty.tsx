import React,{ ChangeEvent }  from 'react';

const Difficulty: React.FC = () => {

    const optionChosen = (e: ChangeEvent<HTMLSelectElement>) => {

        localStorage.setItem('difficulty', e.target.value);
    };

    return(
        <select onChange={optionChosen} defaultValue={"easy"}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    );
};

export default Difficulty;






