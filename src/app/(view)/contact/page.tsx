"use client";


import * as React from "react";
import { ChevronDown, Mail, Phone, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/* ---------------------------------- Types --------------------------------- */

const SUBJECTS = [
    { value: "general", label: "General enquiry" },
    { value: "buying", label: "Buying a property" },
    { value: "selling", label: "Selling a property" },
    { value: "account", label: "Account & billing" },
] as const;

type SubjectValue = (typeof SUBJECTS)[number]["value"];

interface ContactFormValues {
    name: string;
    email: string;
    subject: SubjectValue;
    message: string;
}

interface ContactMethod {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
    {
        icon: Mail,
        label: "Email us",
        value: "support@propmarket.com",
        href: "mailto:support@propmarket.com",
    },
    {
        icon: Phone,
        label: "Call us",
        value: "+1 (800) PROP-MKT",
        href: "tel:+18007767658",
    },
];

const INITIAL_VALUES: ContactFormValues = {
    name: "",
    email: "",
    subject: "general",
    message: "",
};

/* ---------------------------------- Page ---------------------------------- */

export default function ContactPage() {
    const [values, setValues] = React.useState<ContactFormValues>(INITIAL_VALUES);
    const [submitting, setSubmitting] = React.useState(false);

    const handleChange =
        (field: keyof ContactFormValues) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setValues((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            // TODO: send `values` to your API route / server action
            console.log(values);
            setValues(INITIAL_VALUES);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="relative isolate overflow-hidden bg-background text-foreground py-24 px-4 lg:px-[6%] xl:px-[8%]">
            {/* Subtle grid backdrop, built from the border token */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
            />

            <section
                aria-labelledby="contact-heading"
                className="grid items-start gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8"
            >
                {/* ------------------------------ Left ------------------------------ */}
                <div className="flex flex-col gap-10">
                    {/* `typeset` handles heading/paragraph rhythm */}
                    <header className="typeset typeset-contact">
                        <h1
                            id="contact-heading"
                            className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            Still have questions?
                            <span className="block text-muted-foreground">Contact our team</span>
                        </h1>
                        <p className="max-w-md text-muted-foreground mt-8">
                            Our dedicated support specialists are available 24/7
                            to help you navigate the property market with
                            confidence.
                        </p>
                    </header>

                    <section aria-labelledby="support-heading" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 id="support-heading" className="text-xl font-medium tracking-tight">
                                Contact support
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                We usually respond within 1 business day.
                            </p>
                        </div>

                        <address className="flex flex-col gap-3 not-italic">
                            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                                <a key={label} href={href} className="group flex items-center gap-3">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                                        <Icon className="size-4 text-[#00214C]" aria-hidden="true" />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                            {label}
                                        </span>
                                        <span className="text-sm font-medium group-hover:underline">{value}</span>
                                    </span>
                                </a>
                            ))}
                        </address>
                    </section>
                </div>

                {/* ------------------------------ Right ----------------------------- */}
                <div className="relative">
                    {/* Soft glow behind the card */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-6 -top-6 -z-10 h-56 w-4/5 rounded-3xl bg-gradient-to-bl from-glow to-transparent"
                    />

                    <Card className="rounded-2xl shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                <h2 className="text-xl font-semibold tracking-tight">Send us a message</h2>
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="name" className="text-xs">
                                            Your name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            autoComplete="name"
                                            placeholder="John Doe"
                                            required
                                            value={values.name}
                                            onChange={handleChange("name")}
                                            className="h-10 border-transparent bg-muted shadow-none"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="email" className="text-xs">
                                            Email address
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="john@example.com"
                                            required
                                            value={values.email}
                                            onChange={handleChange("email")}
                                            className="h-10 border-transparent bg-muted shadow-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="subject" className="text-xs">
                                        Subject
                                    </Label>
                                    <Select
                                        name="subject"
                                        value={values.subject}
                                        onValueChange={(subject: SubjectValue) =>
                                            setValues((prev) => ({ ...prev, subject }))
                                        }
                                    >
                                        <SelectTrigger
                                            id="subject"
                                            className="h-10 w-full border-transparent bg-muted shadow-none"
                                        >
                                            <SelectValue placeholder="Choose a subject" />

                                        </SelectTrigger>
                                        <SelectContent>
                                            {SUBJECTS.map((s) => (
                                                <SelectItem key={s.value} value={s.value}>
                                                    {s.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="message" className="text-xs">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        required
                                        rows={4}
                                        value={values.message}
                                        onChange={handleChange("message")}
                                        className="min-h-28 resize-none border-transparent bg-muted shadow-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="h-11 w-full rounded-full text-sm font-semibold bg-[#00214C]!"
                                >
                                    {submitting ? "Sending…" : "Send message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}