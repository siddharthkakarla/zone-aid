'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Droplets, PlusCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import DeliveryStatusBadge from "@/components/dashboard/delivery-status-badge";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export default function BloodDeliveryPage() {
    const { toast } = useToast();

    const deliveries = [
        { id: 'BD-001', type: 'A+', origin: 'City Blood Bank', destination: 'General Hospital', status: 'In Transit', eta: '12 min' },
        { id: 'BD-002', type: 'O-', origin: 'Red Cross Center', destination: 'South Clinic', status: 'Delivered', eta: '-' },
        { id: 'BD-003', type: 'B+', origin: 'City Blood Bank', destination: 'ER @ Main', status: 'Pending', eta: '30 min' },
        { id: 'BD-004', type: 'AB+', origin: 'Community Hospital', destination: 'General Hospital', status: 'Delivered', eta: '-' },
    ];

    const handleNewRequest = () => {
        toast({
            title: "Feature not available",
            description: "Creating new blood requests is not yet implemented.",
            variant: "destructive"
        });
    }

    const handleTrack = (deliveryId: string) => {
         toast({
            title: "Tracking Delivery",
            description: `Showing live location for delivery ${deliveryId}.`,
        });
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                            <Droplets className="h-6 w-6" /> Blood Delivery
                        </CardTitle>
                        <CardDescription>
                            Manage and track all blood deliveries.
                        </CardDescription>
                    </div>
                    <Button onClick={handleNewRequest}>
                        <PlusCircle className="mr-2 h-4 w-4" /> New Request
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-end mb-4">
                     <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search deliveries..." className="pl-8" />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Request ID</TableHead>
                            <TableHead>Blood Type</TableHead>
                            <TableHead>Origin</TableHead>
                            <TableHead>Destination</TableHead>
                            <TableHead>ETA</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {deliveries.map(delivery => (
                            <TableRow key={delivery.id}>
                                <TableCell className="font-medium">{delivery.id}</TableCell>
                                <TableCell>{delivery.type}</TableCell>
                                <TableCell>{delivery.origin}</TableCell>
                                <TableCell>{delivery.destination}</TableCell>
                                <TableCell>{delivery.eta}</TableCell>
                                <TableCell>
                                    <DeliveryStatusBadge status={delivery.status} />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm" onClick={() => handleTrack(delivery.id)} disabled={delivery.status !== 'In Transit'}>
                                        Track
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>{deliveries.length}</strong> of <strong>{deliveries.length}</strong> requests.
                </div>
            </CardFooter>
        </Card>
    )
}
