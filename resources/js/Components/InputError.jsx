import React from 'react'

export default function InputError({ error, name }) {
    if (!error) return null
    return (
        <div>
            {error[name] && (
                <p className="text-red-500 text-sm">{error[name]}</p>
            )}
        </div>
    )
}
