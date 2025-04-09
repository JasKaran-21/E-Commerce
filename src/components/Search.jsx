// components/SearchBar.jsx
import React from 'react';

function SearchBar({ value, onChange }) {
    return (
        <input
            name='search'
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search products..."
            className="max-w-96 min-w-80 px-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default SearchBar;
