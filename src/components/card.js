import React from 'react'

export function Card ({ children }) {

    return (
        <div className="cell-x4">
            <div className="flipper clickable">
                <div className="card-content">
                    <div
                        className="card-content-main color-white icon"
                        onClick={() => undefined}
                        onKeyDown={() => undefined}
                        role="button"
                        tabIndex={0}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )

}