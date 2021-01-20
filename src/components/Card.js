import React from 'react';

export default function Card({ moveType }) {

    return (
        <div className="card">
            <h1>{moveType.name}</h1>
        </div>
    );
}
