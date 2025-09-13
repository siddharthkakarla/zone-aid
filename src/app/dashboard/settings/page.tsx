import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Settings</CardTitle>
                <CardDescription>
                    Manage your account and notification preferences.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Dr. Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="jane.doe@hospital.com" />
                        </div>
                    </div>
                </div>

                 <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive updates on deliveries and system status.</p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="sms-notifications">SMS Alerts</Label>
                            <p className="text-sm text-muted-foreground">Get critical alerts via text message.</p>
                        </div>
                        <Switch id="sms-notifications" />
                    </div>
                </div>
                <Button>Save Changes</Button>
            </CardContent>
        </Card>
    )
}
