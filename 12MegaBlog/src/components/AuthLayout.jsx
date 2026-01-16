import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const authStatus = useSelector((state) => state.auth.status)
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if(authentication && authStatus !== authentication) {
            navigate('/login')
        } else if(!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    
    return loader ? (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <h1 className="text-sm font-medium text-slate-500 tracking-wide">
                Loading…
            </h1>
        </div>
    ) : (
        <>{children}</>
    )
}
