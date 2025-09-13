import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MapPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Coverage Map</CardTitle>
                <CardDescription>
                    Interactive map showing our service coverage and resource availability.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <Image 
                        src="https://picsum.photos/seed/map/1200/675" 
                        alt="Map of coverage area"
                        fill
                        className="object-cover"
                        data-ai-hint="city map"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <p className="text-2xl font-bold text-white">[Interactive Map Placeholder]</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
