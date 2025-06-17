import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Animes(){
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token){
            router.push('/')
        }

        setLoading(false)
    }, [])
    
    return(
        <div className="">
            {loading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ): <p>ESSA PAGINA É PRIVADA</p>}
        </div>
    )
}