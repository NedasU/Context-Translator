import React, { useContext } from 'react';
import { TranslationContext } from '../../Contexts/TranslationContext';

function ContextSelector() {
    const { formality, setFormality, context } = useContext(TranslationContext);


    return (
        <div className="contextSelector">
            <button value={'formal'} className={`contextSelectorItem ${formality === 'formal' ? 'selected' : ''}`}
                onClick={(e) => {setFormality(e.target.value)}}>
                Formal
            </button>
            <button value={'informal'} className={`contextSelectorItem ${formality === 'informal' ? 'selected' : ''}`}
                onClick={(e) => {setFormality(e.target.value)}}>
                Informal
            </button>
            <button className={`contextSelectorItem ${context !== '' ? 'selected' : ''}`}>
                Additional Context?
            </button>
        </div>
    )
}

export default ContextSelector;