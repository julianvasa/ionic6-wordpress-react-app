import sanitize from 'sanitize-html'
import React from 'react'

const defaultOptions = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'img'],
    allowedAttributes: {
        'a': ['href', 'target'],
        'img': ['src']
    },
}

export function SanitizeHTML(props: { html: string, options?: {[key: string]: string} }) {
    function sanitizeHtml(dirty: any, options: any) {
        return {
            __html: sanitize(dirty, {
                ...defaultOptions,
                ...options
            })
        }
    }

    return (
        <div dangerouslySetInnerHTML={sanitizeHtml(props.html, props.options)}/>
    )
}
