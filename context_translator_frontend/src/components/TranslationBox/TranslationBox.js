import React from 'react';
import "../../styles.css";
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import TranslatorForm from '../TranslatorForm/TranslatorForm';
import TranslatedOutput from '../TranslatedOutput/TranslatedOutput';

function TranslationBox() {
    return (
        <div className="translationBox">
            <LanguageSelector />
            <TranslatorForm />
        </div>
    )
}

export default TranslationBox;