import React from 'react';
import Card from './Card';

export default function CardsContainer({ moveTypes }) {
    return (
        <section className="cards-container">
            {
                moveTypes
                    .map(moveType => (
                        <Card key={moveType.id} moveType={ moveType }/>
                    ))
            }
        </section>
    );
}
