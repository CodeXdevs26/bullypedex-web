import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { FlaskConical, InfoIcon, MarsIcon, SearchIcon, VenusIcon } from 'lucide-react'
import React from 'react'

export default function Mating() {
    return (
        <section>
            <div className="text-sm text-primary flex items-center gap-2 mt-4">
                <InfoIcon className="size-4" /> How It’s Work
            </div>

            <div className="mt-4 grid grid-cols-2 gap-6">
                <Card>
                    <CardContent>
                        <Badge variant="outline" className="text-blue-600"><MarsIcon /> Sire (Male)</Badge>
                        <CardTitle className="font-semibold">Search Male Dog</CardTitle>
                        <CardDescription>Choose a sire from the database.</CardDescription>
                        <InputGroup className="bg-secondary rounded-full px-1">
                            <InputGroupInput placeholder="Search Sire" />
                            <InputGroupAddon><SearchIcon /></InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Badge variant="outline" className="text-pink-600"><VenusIcon /> Dam (Female)</Badge>
                        <CardTitle className="font-semibold">Search Female Dog</CardTitle>
                        <CardDescription>Choose a dam from the database.</CardDescription>
                        <InputGroup className="bg-secondary rounded-full px-1">
                            <InputGroupInput placeholder="Search Dam" />
                            <InputGroupAddon><SearchIcon /></InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>

                <Button size="lg" className="col-span-2">
                    <FlaskConical /> Run Simulation
                </Button>
                <p className="text-sm text-muted-foreground text-center col-span-2">
                    Select both dogs to continue
                </p>
            </div>
        </section>
    )
}
