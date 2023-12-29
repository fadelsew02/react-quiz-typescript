import React, { useState } from 'react';
import { Wrapper, ButtonWrapper, ComponentWrapper } from './Settings.styles';
import Difficulty from './Difficulty';
import Amount from './Amount';

const Settings: React.FC = () => {

    const [amount, setAmount] = useState(false);
    const [difficulty, setDifficulty] = useState(false);
    const chooseAmount = () => {
        setAmount(true);
      };

      const chooseDifficulty = () => {
        setDifficulty(true);
      };
    return(
        <Wrapper>
            <p>Settings</p>
            <ButtonWrapper>
                <button onClick={chooseAmount}>Amount</button>    
            </ButtonWrapper>
            <ComponentWrapper><Amount /></ComponentWrapper>
            <ButtonWrapper>
                <button onClick={chooseDifficulty}>Difficulty</button>    
            </ButtonWrapper> 
            <ComponentWrapper><Difficulty /></ComponentWrapper>
        </Wrapper>
    );
};


export default Settings;



