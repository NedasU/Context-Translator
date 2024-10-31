import React from 'react';
import "../../styles.css";



function TranslatorForm() {
    return (
        <div className="translatorFormContainer">
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder="Type to Translate"
                // value={inputText}
                // onChange={(e) => setInputText(e.target.value)}
                />
            </div>
            <div className="translatorForm">
                <textarea 
                className="translatorFormTextArea"
                placeholder="Translated Output"
                readOnly={true}
                // value={outputText}
                />
            </div>
        </div>
    )
}

export default TranslatorForm;