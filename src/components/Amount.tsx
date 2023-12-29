import React, { ChangeEvent } from 'react';

const Amount: React.FC = () => {

    const optionChosen = (e: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem('amount', e.target.value);
    };

    return(
        <div>
            <select onChange={optionChosen} defaultValue={"10"}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
        </div>
    );
};

export default Amount;