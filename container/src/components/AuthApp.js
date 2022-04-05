import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthIndex'
import { useHistory } from 'react-router-dom'
export default ({onSignIn}) => {
    const ref = useRef(null)
    const history = useHistory() //Fetch current history in use in container.
    useEffect(() => {
        const {onParentNavigate } = mount(ref.current,{
            initialPath: history.location.pathname,
            //user clicks link governed by child apps e.g. marketting app (memory history)
            //is communicated up to the container.
            onNavigate: ({pathname: nextPathname}) =>{
                const { pathname } = history.location
                //avoid recursion. say child updates path, parent notified, parent also tries to update history                
                if (nextPathname !== pathname) {
                    history.push(nextPathname)
                }
                
            },
            onSignIn
        })
        //notify child apps about container's navigation
        history.listen(onParentNavigate)
    },[])

    return <div ref={ref} />
}