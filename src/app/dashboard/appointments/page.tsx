'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Calendar, Clock, Video } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

type Appointment = {
    id: string;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    type: 'In-Person' | 'Video';
    status: 'Upcoming' | 'Completed' | 'Canceled';
};

const initialAppointments: Appointment[] = [
    { id: 'APT-001', doctor: 'Dr. Evelyn Reed', specialty: 'Cardiology', date: '2024-10-15', time: '10:30 AM', type: 'In-Person', status: 'Upcoming' },
    { id: 'APT-002', doctor: 'Dr. Marcus Chen', specialty: 'Dermatology', date: '2024-10-18', time: '02:00 PM', type: 'Video', status: 'Upcoming' },
    { id: 'APT-003', doctor: 'Dr. Priya Sharma', specialty: 'Pediatrics', date: '2024-09-28', time: '11:00 AM', type: 'In-Person', status: 'Completed' },
    { id: 'APT-004', doctor: 'Dr. Ben Carter', specialty: 'General Practice', date: '2024-09-25', time: '09:00 AM', type: 'Video', status: 'Canceled' },
];

export default function AppointmentsPage() {
    const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
    const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    const statusVariant = (status: string) => {
        switch (status) {
            case 'Upcoming': return 'default';
            case 'Completed': return 'secondary';
            case 'Canceled': return 'destructive';
            default: return 'outline';
        }
    }
    
    const handleRescheduleClick = (appointment: Appointment) => {
        setSelectedAppointment(appointment);
        setIsRescheduleOpen(true);
    }
    
    const handleCancelClick = (appointment: Appointment) => {
        setSelectedAppointment(appointment);
        setIsCancelOpen(true);
    }

    const confirmCancel = () => {
        if(selectedAppointment) {
            setAppointments(prev => prev.map(apt => apt.id === selectedAppointment.id ? {...apt, status: 'Canceled'} : apt));
        }
        setIsCancelOpen(false);
        setSelectedAppointment(null);
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl">My Appointments</CardTitle>
                        <CardDescription>
                            View, schedule, and manage your appointments.
                        </CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2" />
                        New Appointment
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Doctor</TableHead>
                                <TableHead>Specialty</TableHead>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {appointments.map(appointment => (
                                <TableRow key={appointment.id}>
                                    <TableCell className="font-medium">{appointment.doctor}</TableCell>
                                    <TableCell>{appointment.specialty}</TableCell>
                                    <TableCell>{appointment.date} at {appointment.time}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {appointment.type === 'Video' ? <Video className="h-4 w-4 text-muted-foreground" /> : <Calendar className="h-4 w-4 text-muted-foreground" />}
                                            {appointment.type}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant(appointment.status)}>{appointment.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        {appointment.status === 'Upcoming' && (
                                          <>
                                            <Button variant="outline" size="sm" onClick={() => handleRescheduleClick(appointment)}>Reschedule</Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleCancelClick(appointment)}>Cancel</Button>
                                          </>
                                        )}
                                        {appointment.status === 'Completed' && <Button variant="outline" size="sm">View Notes</Button>}
                                        {appointment.type === 'Video' && appointment.status === 'Upcoming' && <Button size="sm">Join Call</Button>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Reschedule Dialog */}
            <Dialog open={isRescheduleOpen} onOpenChange={setIsRescheduleOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Reschedule Appointment</DialogTitle>
                        <DialogDescription>
                            Select a new date and time for your appointment with {selectedAppointment?.doctor}.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                       <p className="text-center text-muted-foreground">(Rescheduling interface would go here)</p>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            
            {/* Cancel Confirmation Dialog */}
            <Dialog open={isCancelOpen} onOpenChange={setIsCancelOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Cancellation</DialogTitle>
                        <DialogDescription>
                           Are you sure you want to cancel your appointment with {selectedAppointment?.doctor} on {selectedAppointment?.date}?
                        </DialogDescription>
                    </DialogHeader>
                     <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Go Back</Button>
                        </DialogClose>
                        <Button type="button" variant="destructive" onClick={confirmCancel}>Yes, Cancel</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
