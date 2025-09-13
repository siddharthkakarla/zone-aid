'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Ambulance, Hospital } from "lucide-react";
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapPage() {
    const locations = [
        { type: 'ambulance', id: 'AMB-001', lat: 17.43, lng: 78.48, top: '40%', left: '55%' },
        { type: 'ambulance', id: 'AMB-003', lat: 17.38, lng: 78.45, top: '65%', left: '30%' },
        { type: 'hospital', name: 'General Hospital', lat: 17.45, lng: 78.50, top: '20%', left: '70%' },
        { type: 'hospital', name: 'South Clinic', lat: 17.36, lng: 78.47, top: '80%', left: '15%' },
        { type: 'hospital', name: 'City Hospital', lat: 17.40, lng: 78.4, top: '30%', left: '25%' },
    ];
    
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

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
                    {mapboxToken ? (
                        <Map
                            initialViewState={{
                                longitude: 78.47,
                                latitude: 17.40,
                                zoom: 11
                            }}
                            mapStyle="mapbox://styles/mapbox/dark-v11"
                            mapboxAccessToken={mapboxToken}
                        >
                            {locations.map((loc, index) => (
                                <Marker key={index} longitude={loc.lng} latitude={loc.lat}>
                                   {loc.type === 'ambulance' ? (
                                       <div className="group flex flex-col items-center">
                                           <div className="p-2 bg-blue-500 rounded-full shadow-lg animate-pulse">
                                             <Ambulance className="h-6 w-6 text-white" />
                                           </div>
                                           <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                               {loc.id}
                                           </div>
                                       </div>
                                   ) : (
                                       <div className="group flex flex-col items-center">
                                           <div className="p-2 bg-primary rounded-full shadow-lg">
                                            <Hospital className="h-5 w-5 text-primary-foreground" />
                                           </div>
                                           <div className="mt-2 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                               {loc.name}
                                           </div>
                                       </div>
                                   )}
                                </Marker>
                            ))}
                        </Map>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted-foreground/20">
                            <div className="text-center text-muted-foreground">
                                <p>Map service is not configured.</p>
                                <p className="text-xs">Please provide a Mapbox token in your environment variables.</p>
                            </div>
                        </div>
                    )}
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
                </div>
            </CardContent>
        </Card>
    )
}
