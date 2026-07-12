import { useEffect, useState } from "react";

const SECTIONS = ['about', 'skills', 'experience' , 'projects', 'certs', 'cv']

export function useActiveSection() {
    const [active, setActive] = useState('')

    useEffect(()=> {
        function onScrooll(){
            let current = ''
            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if(el && window.scrollY >= el.offsetTop -120) current = id
            }
            setActive(current)
        }
        window.addEventListener('scroll', onScrooll, {passive: true})
        return () => window.removeEventListener('scroll', onScrooll)
    },[])
    return active
}