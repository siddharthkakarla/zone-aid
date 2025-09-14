'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Pill, PlusCircle, Search } from "lucide-react";
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

export default function MedicineDeliveryPage() {
    const { toast } = useToast();

    const deliveries = [
        { id: 'MD-001', items: 'Epinephrine x5, Ibuprofen x20', destination: 'General Hospital', status: 'Delivered', eta: '-' },
        { id: 'MD-002', items: 'Atropine x10', destination: 'South Clinic', status: 'In Transit', eta: '25 min' },
        { id: 'MD-003', items: 'Antibiotics Kit', destination: 'ER @ Main', status: 'Delivered', eta: '-' },
        { id: 'MD-004', items: 'Saline Solution x50', destination: 'General Hospital', status: 'Pending', eta: '45 min' },
    ];

    const handleNewRequest = () => {
        toast({
            title: "Feature not available",
            description: "Creating new medicine orders is not yet implemented.",
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
                            <Pill className="h-6 w-6" /> Medicine Delivery
                        </CardTitle>
                        <CardDescription>
                            Manage and track all medicine deliveries.
                        </CardDescription>
                    </div>
                     <Button onClick={handleNewRequest}>
                        <PlusCircle className="mr-2 h-4 w-4" /> New Order
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                 <div className="flex justify-end mb-4">
                     <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search orders..." className="pl-8" />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Items</TableHead>
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
                                <TableCell>{delivery.items}</TableCell>
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
                    Showing <strong>{deliveries.length}</strong> of <strong>{deliveries.length}</strong> orders.
                </div>
            </CardFooter>
        </Card>
    )
}
