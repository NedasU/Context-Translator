import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import TranslatorForm from '../TranslatorForm/TranslatorForm';

function TranslationBox() {
    return (
        <div className="translationBox">
            <LanguageSelector />
            <TranslatorForm />
        </div>
    )
}

export default TranslationBox;