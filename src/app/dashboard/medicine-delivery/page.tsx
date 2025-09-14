'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Pill } from "lucide-react";

export default function MedicineDeliveryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <Pill className="h-6 w-6" /> Medicine Delivery
                </CardTitle>
                <CardDescription>
                    Manage and track all medicine deliveries.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Medicine delivery tracking and management features will be implemented here.</p>
            </CardContent>
        </Card>
    )
}
