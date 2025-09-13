import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PatientTrackingPage() {
    const patients = [
        { id: 'CASE-001', name: 'Ravi Kumar', condition: 'Cardiac Arrest', status: 'Critical', location: 'En-route to General Hospital', assigned: 'Dr. Singh' },
        { id: 'CASE-002', name: 'Priya Sharma', condition: 'Trauma Injury', status: 'Stable', location: 'South Clinic ER', assigned: 'Dr. Mehta' },
        { id: 'CASE-003', name: 'Amit Patel', condition: 'Stroke', status: 'Urgent', location: 'City Hospital, Ward 5', assigned: 'Dr. Chen' },
        { id: 'CASE-004', name: 'Sunita Devi', condition: 'Maternity', status: 'Monitoring', location: 'Home', assigned: 'Nurse Radha' },
    ];

    const statusVariant = (status: string) => {
        switch (status) {
            case 'Critical': return 'destructive';
            case 'Urgent': return 'secondary';
            case 'Stable':
            case 'Monitoring':
            default: return 'default';
        }
    }


    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="font-headline text-2xl">Patient Tracking</CardTitle>
                    <CardDescription>
                        Monitor patient status and location throughout their emergency journey.
                    </CardDescription>
                </div>
                <Button>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
