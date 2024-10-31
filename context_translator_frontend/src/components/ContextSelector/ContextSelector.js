import React from 'react';
import "../../styles.css";

function ContextSelector() {
    return (
        <div className="contextSelector">
            <div className="contextSelectorItem">
                Formal
            </div>
            <div className="contextSelectorItem">
                Informal
            </div>
            <div className="contextSelectorItem">
                Additional Context?
            </div>
        </div>
    )
}

export default ContextSelector;