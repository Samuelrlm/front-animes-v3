import PageWrapper from "@/components/PageWrapper"
import instance from "@/instance/api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Animes(){
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        async function getAnimes(){
            try {
                const response = await instance.get('/animes')

                setAnimes(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAnimes()
    }, [])

    return(
        <PageWrapper>
            {animes.map((anime) => {
                return (
                    <p>{anime.name}</p>
                )
            })}
        </PageWrapper>
    )
}