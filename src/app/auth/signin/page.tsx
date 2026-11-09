import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardDescription className="text-primary">Member Login</CardDescription>
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>New user? <Link href="/auth/signup" className="text-foreground font-semibold hover:underline">Create an account</Link></CardDescription>
            </CardHeader>
            <CardContent>
                <Label className="text-xs font-semibold text-muted-foreground" htmlFor="email">
                    Email address
                </Label>
                <Input id="email" className="w-full border-0 rounded-none border-b! border-primary" placeholder="you@example.com" />
                <div className="flex items-center justify-between">
                    <Link href="/auth/verify" className="text-sm text-foreground hover:underline">
                        Can’t sign in?
                    </Link>
                    <Button className="px-12 py-5 rounded-xl" asChild>
                        <Link href="/auth/verify">Sign in</Link>
                    </Button>
                </div>
                <p>Protected by reCAPTCHA and subject to the <Link href="/privacy" className="hover:underline text-primary">Privacy Policy</Link> and <Link href="/terms" className="text-foreground hover:underline text-primary">Terms of Service</Link>.</p>
            </CardContent>
        </Card>
    )
}
