import React, { useContext, useState } from 'react';
import { TranslationContext} from "../../Contexts/TranslationContext";



function TranslatorForm() {
    const { inputText, setInputText, translatedText, setTranslatedText, translate, sourceLanguage, targetLanguage } = useContext(TranslationContext);
    const [outputPlaceholder, setOutputPlaceholder] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        if (!e.target.value.trim()) {
            setTranslatedText("");
            setOutputPlaceholder("");
        } else {
            setOutputPlaceholder("Click Enter to Translate!");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputText.trim()) {
                setOutputPlaceholder("Translating...");
                handleTranslate();
            }
        }
    }

    const handleTranslate = () => {
        if (inputText.trim()) {
            if (sourceLanguage === targetLanguage) {
                setTranslatedText(inputText);
                setOutputPlaceholder("");
            } else {
                translate();
            }
        }
    }

    return (
        <div className="translatorFormContainer">
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder="Type to Translate"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
            </div>
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder={outputPlaceholder}
                readOnly={true}
                value={translatedText}
                />
            </div>
        </div>
    )
}

export default TranslatorForm;