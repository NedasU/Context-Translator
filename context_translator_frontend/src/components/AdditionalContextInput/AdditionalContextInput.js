import React, { useContext } from 'react';
import { TranslationContext } from '../../Contexts/TranslationContext';

function AdditionalContextInput() {
    const { context, setContext } = useContext(TranslationContext);
    return (
        <div className={`additionalContextContainer ${context !== "" ? "selected" : ""}`}>
            <textarea 
                className="additionalContextTextArea"
                placeholder="Additional Context?"
                value={context}
                onChange={(e) => {setContext(e.target.value)}}
            />
        </div>
    )
}

export default AdditionalContextInput;