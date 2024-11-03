import React, { useContext } from 'react';
import { TranslationContext} from "../../Contexts/TranslationContext";



function TranslatorForm() {
    const { inputText, setInputText, translatedText, translate } = useContext(TranslationContext);

    const handleKeyDown = (e) =>{
        if (e.key === 'Enter' && !e.shiftKey){
            e.preventDefault();
            handleTranslate();
        }
    }

    const handleTranslate = () => {
        if (inputText.trim()) {
            translate();
        }
    }

    return (
        <div className="translatorFormContainer">
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder="Type to Translate"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                />
            </div>
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder=""
                readOnly={true}
                value={translatedText}
                />
            </div>
        </div>
    )
}

export default TranslatorForm;