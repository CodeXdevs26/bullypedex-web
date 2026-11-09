import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MailSearch } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <div className="p-3 border rounded-full aspect-square w-min mx-auto">
                    <MailSearch className="size-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-center font-bold">Check Your Email</CardTitle>
                <CardDescription>We’ve sent a 6 digit verification code to you@example.com.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}
