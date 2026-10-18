import Footer from '@/components/core/footer'
import Navbar from '@/components/core/navbar'
import React, { Suspense } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Suspense fallback={<div className="h-24 lg:h-16" />}>
                <Navbar />
            </Suspense>
            {children}
            <Footer />
        </>
    )
}
