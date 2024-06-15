import React, {useState} from "react";

export const TraffictLight = () => {
    // js
    const [color, setColor] = useState (' ')

    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="row">
                <div className="back d-block">
                    <div onClick={() => setColor('green')} className={`
                        green bg-success ${color == 'green' ? 'glow-green' : ''}`}>
                    </div>
                    <div onClick={() => setColor('yellow')} className={`
                        yellow bg-warning ${color == 'yellow' ? 'glow-yellow' : ''}`}>
                    </div>
                    <div onClick={() => setColor('red')} className={`
                        red bg-danger ${color == 'red' ? 'glow-red' : ''}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}