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

export default function PaymentsPage() {
    const payments = [
        { id: 'INV-001', caseId: 'CASE-001', amount: '₹1,500', method: 'Credit Card', status: 'Paid', date: '2024-09-12' },
        { id: 'INV-002', caseId: 'CASE-002', amount: '₹750', method: 'UPI', status: 'Paid', date: '2024-09-11' },
        { id: 'INV-003', caseId: 'CASE-003', amount: '₹2,200', method: 'Net Banking', status: 'Pending', date: '2024-09-10' },
        { id: 'INV-004', caseId: 'CASE-004', amount: '₹500', method: '-', status: 'Unpaid', date: '2024-09-09' },
    ];

    const statusVariant = (status: string) => {
        switch (status) {
            case 'Paid': return 'default';
            case 'Pending': return 'secondary';
            case 'Unpaid': return 'destructive';
            default: return 'outline';
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Payments & Receipts</CardTitle>
                <CardDescription>
                    View and manage all financial transactions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Case ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Payment Method</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map(payment => (
                            <TableRow key={payment.id}>
                                <TableCell className="font-medium">{payment.id}</TableCell>
                                <TableCell>{payment.caseId}</TableCell>
                                <TableCell>{payment.amount}</TableCell>
                                <TableCell>{payment.method}</TableCell>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>
                                    <Badge variant={statusVariant(payment.status)}>{payment.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Download Receipt</span>
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
