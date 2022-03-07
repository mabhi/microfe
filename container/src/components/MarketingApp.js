import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingIndex'

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref} />
}