import React, { useContext } from 'react';
import { TranslationContext} from "../../Contexts/TranslationContext";



function TranslatorForm() {
    const { inputText, setInputText, translatedText } = useContext(TranslationContext);

    return (
        <div className="translatorFormContainer">
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder="Type to Translate"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
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