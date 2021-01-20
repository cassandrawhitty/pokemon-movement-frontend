import React from 'react'

export default function SearchTypeForm({ filterTypes }) {
    return (
        <form>
            <label>Search Pokemon by Type: </label>
            <input type="text" onChange={ filterTypes }></input>
        </form>
    );
}
