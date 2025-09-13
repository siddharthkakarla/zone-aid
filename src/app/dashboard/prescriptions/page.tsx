'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PrescriptionsPage() {
    const prescriptions = [
        { id: 'PRES-001', doctor: 'Dr. Evelyn Reed', date: '2024-10-15', status: 'Active' },
        { id: 'PRES-002', doctor: 'Dr. Marcus Chen', date: '2024-10-01', status: 'Active' },
        { id: 'PRES-003', doctor: 'Dr. Priya Sharma', date: '2024-09-15', status: 'Expired' },
        { id: 'PRES-004', doctor: 'Dr. Ben Carter', date: '2024-08-20', status: 'Filled' },
    ];

    const statusVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'default';
            case 'Expired': return 'destructive';
            case 'Filled': return 'secondary';
            default: return 'outline';
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">My Prescriptions</CardTitle>
                <CardDescription>
                    View and download your current and past prescriptions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Prescription ID</TableHead>
                            <TableHead>Doctor</TableHead>
                            <TableHead>Date Issued</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {prescriptions.map(prescription => (
                            <TableRow key={prescription.id}>
                                <TableCell className="font-medium">{prescription.id}</TableCell>
                                <TableCell>{prescription.doctor}</TableCell>
                                <TableCell>{prescription.date}</TableCell>
                                <TableCell>
                                    <Badge variant={statusVariant(prescription.status)}>{prescription.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Download Prescription</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
