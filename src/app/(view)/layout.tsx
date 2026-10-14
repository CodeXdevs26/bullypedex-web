import Navbar from '@/components/core/navbar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
