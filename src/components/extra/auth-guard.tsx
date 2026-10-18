import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { ArrowLeftIcon } from 'lucide-react'

export default function AuthGuard({ children, withApp }: { children: React.ReactNode, withApp?: boolean }) {
    return (
        <Dialog >
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="lg:min-w-2xl! overflow-hidden p-0!" showCloseButton={false}>
                <DialogHeader className="hidden">
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className="px-6!">
                    <div className="flex justify-center items-center border-b pb-2 pt-2">
                        <DialogClose asChild>
                            <Button variant="ghost" className="text-muted-foreground">
                                <ArrowLeftIcon />Back to pricing
                            </Button>
                        </DialogClose>
                    </div>
                    <div className="mt-4 space-y-2">
                        <h2 className="text-2xl text-center">Sign in to continue or Download App</h2>
                        <p className="text-center text-muted-foreground mb-10">You need a free account to register a dog</p>

                        {
                            withApp && <Button className="w-full p-5">Download App</Button>
                        }
                        <div className="grid grid-cols-2 gap-2">
                            <Button className="w-full p-5">Create Account</Button>
                            <Button className="w-full p-5" variant="outline">Log In</Button>
                        </div>
                    </div>
                </div>
                <DialogFooter className="flex flex-row justify-center! items-center w-full px-6! py-3 bg-muted">
                    <Button variant="link" className="text-foreground text-xs!">Privacy Policy</Button>
                    <Button variant="link" className="text-foreground text-xs!">Terms of Service</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
