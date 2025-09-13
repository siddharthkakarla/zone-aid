'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Ambulance, Hospital } from "lucide-react";
import Image from "next/image";

export default function MapPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Ambulance Live Tracking</CardTitle>
                <CardDescription>
                    Real-time view of ambulance locations and hospital service areas.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <Image
                        src="https://picsum.photos/seed/map/1200/675"
                        alt="Map of ambulance and hospital locations"
                        fill
                        className="object-cover"
                        data-ai-hint="map city"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute top-[40%] left-[55%]">
                        <div className="group flex flex-col items-center">
                            <div className="p-2 bg-blue-500 rounded-full shadow-lg animate-pulse">
                                <Ambulance className="h-6 w-6 text-white" />
                            </div>
                            <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                AMB-001
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[30%]">
                        <div className="group flex flex-col items-center">
                            <div className="p-2 bg-blue-500 rounded-full shadow-lg animate-pulse">
                                <Ambulance className="h-6 w-6 text-white" />
                            </div>
                            <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                AMB-003
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[20%] left-[70%]">
                        <div className="group flex flex-col items-center">
                           <div className="p-2 bg-primary rounded-full shadow-lg">
                            <Hospital className="h-5 w-5 text-primary-foreground" />
                           </div>
                           <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               General Hospital
                           </div>
                       </div>
                    </div>
                     <div className="absolute top-[80%] left-[15%]">
                        <div className="group flex flex-col items-center">
                           <div className="p-2 bg-primary rounded-full shadow-lg">
                            <Hospital className="h-5 w-5 text-primary-foreground" />
                           </div>
                           <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               South Clinic
                           </div>
                       </div>
                    </div>
                     <div className="absolute top-[30%] left-[25%]">
                        <div className="group flex flex-col items-center">
                           <div className="p-2 bg-primary rounded-full shadow-lg">
                            <Hospital className="h-5 w-5 text-primary-foreground" />
                           </div>
                           <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               City Hospital
                           </div>
                       </div>
                    </div>
                </div>
                 <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-bold mb-2">Legend</h4>
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-blue-500 rounded-full"><Ambulance className="h-4 w-4 text-white" /></div>
                            <span>Ambulance (Live)</span>
                        </div>
                         <div className="flex items-center gap-2 mt-2">
                            <div className="p-1.5 bg-primary rounded-full"><Hospital className="h-4 w-4 text-primary-foreground" /></div>
                            <span>Hospital / Clinic</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-end text-muted-foreground text-sm">
                        Map service is not configured. Add a Mapbox token to enable live tracking.
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
