"use client"

import { ColorRetangle } from "@/components/ColorComponent"
import React, { useEffect, useState } from "react";

export default function InitialPage() {
    const [colors, setColors] = useState<string[]>([]);

    const generateColors = () => {
        const newColors = [];
        for (let i = 0; i < 5; i++) {
            newColors.push(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`);
        }
        setColors(newColors);
    };

    useEffect(() => {
        generateColors();
    }, []);

    useEffect(()=>{

    },[])

    return (
        <>
            <div className="flex">
                {colors.map((color, index) => (
                    <ColorRetangle key={index} color={color}></ColorRetangle>
                ))}
            </div>
        </>
    );
}