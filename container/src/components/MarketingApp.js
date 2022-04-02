import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingIndex'
import { useHistory } from 'react-router-dom'
export default () => {
    const ref = useRef(null)
    const history = useHistory() //Fetch current history in use in container.
    useEffect(() => {
        const {onParentNavigate } = mount(ref.current,{
            //user clicks link governed by child apps e.g. marketting app (memory history)
            //is communicated up to the container.
            onNavigate: ({pathname: nextPathname}) =>{
                const { pathname } = history.location
                //avoid recursion. say child updates path, parent notified, parent also tries to update history                
                if (nextPathname !== pathname) {
                    history.push(nextPathname)
                }
                
            }
        })
        //notify child apps about container's navigation
        history.listen(onParentNavigate)
    },[])

    return <div ref={ref} />
}