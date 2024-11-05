import React, { useContext, useState } from 'react';
import { TranslationContext } from '../../Contexts/TranslationContext';


function LanguageSelector() {
    const {sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage, inputText, setInputText, translatedText, setTranslatedText} = useContext(TranslationContext);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const Languages = [
        {code: "EN", name: "English"},
        {code: "LT", name: "Lithuanian"},
        {code: "FR", name: "French"},
        {code: "DE", name: "German"},
        {code: "ES", name: "Spanish"},
        {code: "IT", name: "Italian"},
        {code: "NL", name: "Dutch"},
        {code: "PL", name: "Polish"},
        {code: "PT", name: "Portuguese"},
        {code: "RU", name: "Russian"},
        {code: "ZH", name: "Chinese"},
        {code: "JA", name: "Japanese"},
        {code: "KO", name: "Korean"},
        {code: "AR", name: "Arabic"},
        {code: "HI", name: "Hindi"},
        {code: "TR", name: "Turkish"},
        {code: "SV", name: "Swedish"},
    ];

    function handleSwitch(){
        const temp = sourceLanguage;
        setSourceLanguage(targetLanguage);
        setTargetLanguage(temp);
        const textTemp = inputText;
        setInputText(translatedText);
        setTranslatedText(textTemp);
    }

    return (
        <div className="languageSelector">
            <div className="languageBox">
                <div
                    className="languageButton"
                    onClick={() => setActiveDropdown(activeDropdown === 'source' ? null : 'source')}
                >
                    {Languages.find(lang => lang.code === sourceLanguage)?.name || 'Select Language'}
                </div>
                <div className={`dropdown-grid ${activeDropdown === 'source' ? 'active' : ''}`}>
                    {Languages.map(lang => (
                        <button 
                            key={lang.code} 
                            className={`language-option ${sourceLanguage === lang.code ? 'selected' : ''}`}
                            onClick={() => {
                                setSourceLanguage(lang.code);
                                setActiveDropdown(null);
                            }}
                            type="button"  
                        >
                            {lang.name} 
                        </button>
                    ))}
                </div>
            </div>
        <button 
            className="switchLanguagesButton"
            onClick={handleSwitch}
            aria-label="Switch Languages"
        >
            ⇄
        </button>
        <div className="languageBox">
            <div className="languageButton"
                onClick={() => setActiveDropdown(activeDropdown === 'target' ? null : 'target')}
            >
                {Languages.find(lang => lang.code === targetLanguage)?.name || 'Select Language'}
            </div>
            <div className={`dropdown-grid ${activeDropdown === 'target' ? 'active' : ''}`}>
                {Languages.map(lang => (
                    <button 
                        key={lang.code} 
                        className={`language-option ${targetLanguage === lang.code ? 'selected' : ''}`}
                        onClick={() => {
                            setTargetLanguage(lang.code);
                            setActiveDropdown(null);
                            setTranslatedText("");
                        }}
                        type="button"  
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    </div>
    )
}

export default LanguageSelector;