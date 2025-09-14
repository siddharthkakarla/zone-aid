'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Droplets } from "lucide-react";

export default function BloodDeliveryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <Droplets className="h-6 w-6" /> Blood Delivery
                </CardTitle>
                <CardDescription>
                    Manage and track all blood deliveries.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Blood delivery tracking and management features will be implemented here.</p>
            </CardContent>
        </Card>
    )
}
