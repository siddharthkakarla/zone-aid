'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function PrivacyPage() {
    const { toast } = useToast();

    const handleSaveChanges = () => {
        toast({
            title: "Privacy Settings Saved",
            description: "Your preferences have been updated.",
        });
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Data & Privacy</CardTitle>
        <CardDescription>
          Manage how your health data is used and shared.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Data Sharing</h3>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="research-sharing">Contribute to Research</Label>
              <p className="text-sm text-muted-foreground">
                Allow your anonymized data to be used for medical research.
              </p>
            </div>
            <Switch id="research-sharing" defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="partner-sharing">Partner Integrations</Label>
              <p className="text-sm text-muted-foreground">
                Share data with integrated partner apps (e.g., fitness trackers).
              </p>
            </div>
            <Switch id="partner-sharing" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Communication Preferences</h3>
           <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="newsletter">HealthPlus Newsletter</Label>
              <p className="text-sm text-muted-foreground">
                Receive health tips, news, and updates from HealthPlus.
              </p>
            </div>
            <Switch id="newsletter" defaultChecked />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Data</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline">Download My Data</Button>
            <Button variant="destructive">Request Account Deletion</Button>
          </div>
        </div>
        
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </CardContent>
    </Card>
  );
}
