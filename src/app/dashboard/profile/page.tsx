
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Profile</CardTitle>
                <CardDescription>
                    This is your public display name and avatar.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                 <div className="flex items-center space-x-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://picsum.photos/seed/user-avatar/100/100" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Dr. Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="jane.doe@hospital.com" disabled />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="title">Title / Role</Label>
                            <Input id="title" defaultValue="Emergency Physician" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="hospital">Hospital / Affiliation</Label>
                            <Input id="hospital" defaultValue="General Hospital" />
                        </div>
                    </div>
                </div>

                <Button>Update Profile</Button>
            </CardContent>
        </Card>
    )
}
