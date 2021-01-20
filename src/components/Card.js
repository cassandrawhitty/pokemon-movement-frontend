import React from 'react';

export default function Card({ moveType }) {

    return (
        <div className="card">
            <h1>Move: {moveType.name.toUpperCase()}</h1>
            <h2>Type: {moveType.move_type.toUpperCase()}</h2>
        </div>
    );
}
