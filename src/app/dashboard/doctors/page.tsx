'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, User, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const doctors = [
    { name: 'Dr. Evelyn Reed', specialty: 'Cardiology', location: 'Metropolis', avatar: 'https://picsum.photos/seed/doc1/100/100' },
    { name: 'Dr. Marcus Chen', specialty: 'Dermatology', location: 'Star City', avatar: 'https://picsum.photos/seed/doc2/100/100' },
    { name: 'Dr. Priya Sharma', specialty: 'Pediatrics', location: 'Gotham', avatar: 'https://picsum.photos/seed/doc3/100/100' },
    { name: 'Dr. Ben Carter', specialty: 'General Practice', location: 'Central City', avatar: 'https://picsum.photos/seed/doc4/100/100' },
];


export default function DoctorsPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Find a Doctor</CardTitle>
                    <CardDescription>Search for specialists and book your next appointment.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Input placeholder="Doctor name or specialty..." className="flex-grow" />
                     <Select>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Specialty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="dermatology">Dermatology</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="general-practice">General Practice</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button>
                        <Search className="mr-2 h-4 w-4" /> Search
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {doctors.map(doctor => (
                    <Card key={doctor.name}>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-4">
                                <AvatarImage src={doctor.avatar} />
                                <AvatarFallback><User /></AvatarFallback>
                            </Avatar>
                            <CardTitle className="text-xl">{doctor.name}</CardTitle>
                            <CardDescription>{doctor.specialty}</CardDescription>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                                <MapPin className="h-4 w-4" />
                                {doctor.location}
                            </div>
                            <Button className="mt-4 w-full">Book Appointment</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
