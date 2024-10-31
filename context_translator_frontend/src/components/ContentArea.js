import React from 'react';
import "../styles.css";
import ContextSelector from './ContextSelector/ContextSelector';
import TranslationBox from './TranslationBox/TranslationBox';
import AdditionalContextInput from './AdditionalContextInput/AdditionalContextInput';
function ContentArea() {
    return (
        <div className="contentArea">
            <ContextSelector />
            <TranslationBox />
            <AdditionalContextInput />
        </div>
    )
}

export default ContentArea;


