import React, { useContext } from 'react';
import { TranslationContext } from '../../Contexts/TranslationContext';

function ContextSelector( { contextInputRef} ) {
    const { formality, setFormality, context } = useContext(TranslationContext);

    const handleContextInputClick = () => {
        if (contextInputRef.current){
            contextInputRef.current.focus();
        }
    }
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
            <button className={`contextSelectorItem ${context !== '' ? 'selected' : ''}`}
                onClick={handleContextInputClick}>
                Additional Context?
            </button>
        </div>
    )
}

export default ContextSelector;