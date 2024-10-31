import React, { useRef } from 'react';
import ContextSelector from '../ContextSelector/ContextSelector';
import TranslationBox from '../TranslationBox/TranslationBox';
import AdditionalContextInput from '../AdditionalContextInput/AdditionalContextInput';

function ContentArea() {
    const contextInputRef = useRef(null);
    return (
        <div className="contentArea">
            <ContextSelector contextInputRef={contextInputRef} />
            <TranslationBox />
            <AdditionalContextInput ref={contextInputRef} />
        </div>
    )
}

export default ContentArea;


