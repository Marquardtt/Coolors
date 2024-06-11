"use client"

import React from "react"
import { useState, useEffect } from "react"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <></>
    )
}

export default ThemeSwitcher