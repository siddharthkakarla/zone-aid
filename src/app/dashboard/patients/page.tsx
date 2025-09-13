'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const patientSchema = z.object({
    name: z.string().min(1, "Patient name is required"),
    condition: z.string().min(1, "Condition is required"),
    status: z.enum(["Critical", "Urgent", "Stable", "Monitoring"]),
    location: z.string().min(1, "Location is required"),
    assigned: z.string().min(1, "Assigned to is required"),
});

type PatientFormValues = z.infer<typeof patientSchema>;

type Patient = PatientFormValues & {
    id: string;
};

const initialPatients: Patient[] = [
    { id: 'CASE-001', name: 'Ravi Kumar', condition: 'Cardiac Arrest', status: 'Critical', location: 'En-route to General Hospital', assigned: 'Dr. Singh' },
    { id: 'CASE-002', name: 'Priya Sharma', condition: 'Trauma Injury', status: 'Stable', location: 'South Clinic ER', assigned: 'Dr. Mehta' },
    { id: 'CASE-003', name: 'Amit Patel', condition: 'Stroke', status: 'Urgent', location: 'City Hospital, Ward 5', assigned: 'Dr. Chen' },
    { id: 'CASE-004', name: 'Sunita Devi', condition: 'Maternity', status: 'Monitoring', location: 'Home', assigned: 'Nurse Radha' },
];

export default function PatientTrackingPage() {
    const [patients, setPatients] = useState<Patient[]>(initialPatients);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<PatientFormValues>({
        resolver: zodResolver(patientSchema),
        defaultValues: {
            name: '',
            condition: '',
            status: 'Stable',
            location: '',
            assigned: '',
        }
    });

    const statusVariant = (status: string) => {
        switch (status) {
            case 'Critical': return 'destructive';
            case 'Urgent': return 'secondary';
            case 'Stable':
            case 'Monitoring':
            default: return 'default';
        }
    }

    const handleAddPatient = (data: PatientFormValues) => {
        const newPatient: Patient = {
            id: `CASE-${String(patients.length + 1).padStart(3, '0')}`,
            ...data
        };
        setPatients(prev => [...prev, newPatient]);
        setIsDialogOpen(false);
        reset();
    };

    const handleDeletePatient = (id: string) => {
        setPatients(prev => prev.filter(p => p.id !== id));
    };


    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl">Patient Tracking</CardTitle>
                        <CardDescription>
                            Monitor patient status and location throughout their emergency journey.
                        </CardDescription>
                    </div>
                    <Button onClick={() => setIsDialogOpen(true)}>
                        <PlusCircle className="mr-2" />
                        New Patient Case
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Case ID</TableHead>
                                <TableHead>Patient Name</TableHead>
                                <TableHead>Condition</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Assigned To</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patients.map(patient => (
                                <TableRow key={patient.id}>
                                    <TableCell className="font-medium">{patient.id}</TableCell>
                                    <TableCell>{patient.name}</TableCell>
                                    <TableCell>{patient.condition}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant(patient.status)}>{patient.status}</Badge>
                                    </TableCell>
                                    <TableCell>{patient.location}</TableCell>
                                    <TableCell>{patient.assigned}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" onClick={() => handleDeletePatient(patient.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Patient Case</DialogTitle>
                        <DialogDescription>
                            Fill in the details to create a new patient case.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(handleAddPatient)}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <div className="col-span-3">
                                    <Input id="name" {...register("name")} />
                                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="condition" className="text-right">Condition</Label>
                                <div className="col-span-3">
                                    <Input id="condition" {...register("condition")} />
                                    {errors.condition && <p className="text-destructive text-sm mt-1">{errors.condition.message}</p>}
                                </div>
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right">Status</Label>
                                 <div className="col-span-3">
                                    <Controller
                                        name="status"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Critical">Critical</SelectItem>
                                                    <SelectItem value="Urgent">Urgent</SelectItem>
                                                    <SelectItem value="Stable">Stable</SelectItem>
                                                    <SelectItem value="Monitoring">Monitoring</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                     {errors.status && <p className="text-destructive text-sm mt-1">{errors.status.message}</p>}
                                 </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="location" className="text-right">Location</Label>
                                 <div className="col-span-3">
                                    <Input id="location" {...register("location")} />
                                     {errors.location && <p className="text-destructive text-sm mt-1">{errors.location.message}</p>}
                                 </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="assigned" className="text-right">Assigned To</Label>
                                 <div className="col-span-3">
                                    <Input id="assigned" {...register("assigned")} />
                                     {errors.assigned && <p className="text-destructive text-sm mt-1">{errors.assigned.message}</p>}
                                 </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save Case</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
