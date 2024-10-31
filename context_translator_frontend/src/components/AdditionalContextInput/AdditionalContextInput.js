import React, { useContext, forwardRef } from 'react';
import { TranslationContext } from '../../Contexts/TranslationContext';

const AdditionalContextInput = forwardRef((props, ref) =>{
    const { context, setContext } = useContext(TranslationContext);
    return (
        <div className={`additionalContextContainer ${context !== "" ? "selected" : ""}`}>
            <textarea 
                className="additionalContextTextArea"
                placeholder="Additional Context?"
                value={context}
                ref={ref}
                onChange={(e) => {setContext(e.target.value)}}
            />
        </div>
    )
});

export default AdditionalContextInput;