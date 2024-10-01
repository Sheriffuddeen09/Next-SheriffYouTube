'use client'
import {FiSun, FiMoon} from "react-icons/fi"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
export default function ThemeSwitch(){

    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), [])
    if (!mounted) 
        return(
            <Image 
            src='data:next.svg'
            width={36}
            height={36}
            sizes="36x36"
            alt="loading Light/Dark Toggle"
            />
        )
        if (resolvedTheme === 'dark'){
            return <FiSun onClick={() => setTheme('light')} /> 
          }

          if (resolvedTheme === 'light'){
            return <FiMoon onClick={() => setTheme('dark')} /> 
          }
}