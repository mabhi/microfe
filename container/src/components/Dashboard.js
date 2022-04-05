import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardIndex'

export default () => {
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current)
    },[])

    return <div ref={ref} />
}