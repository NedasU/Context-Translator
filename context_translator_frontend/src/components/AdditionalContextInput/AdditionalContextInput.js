import React from 'react';
import "../../styles.css";

function AdditionalContextInput() {
    return (
        <div className="additionalContextContainer">
            <textarea 
                className="additionalContextTextArea"
                placeholder="Additional Context?"
            />
        </div>
    )
}

export default AdditionalContextInput;