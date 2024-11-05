import React, { createContext, useState } from 'react';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [sourceLanguage, setSourceLanguage] = useState('EN');
    const [targetLanguage, setTargetLanguage] = useState('EN');
    const [inputText, setInputText] = useState('');
    const [formality, setFormality] = useState('informal');
    const [context, setContext] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const translate = async () => {
        try {
            const response = await fetch("http://localhost:5000/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sourceLanguage,
                    targetLanguage,
                    inputText,
                    formality,
                    context
                }),
            });
            const data = await response.json();
            console.log(data)
            setTranslatedText(data.translatedText);
        } catch (error) {
            console.error("Error Translating Text: ", error);
        }
    };

    return (
        <TranslationContext.Provider value={{
            sourceLanguage,
            setSourceLanguage,
            targetLanguage,
            setTargetLanguage,
            inputText,
            setInputText,
            formality,
            setFormality,
            context,
            setContext,
            translatedText,
            setTranslatedText,
            translate
        }}>
            {children}
        </TranslationContext.Provider>
    );
};
