import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Truck, Map, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+2 from last hour</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Coverage Areas</CardTitle>
                  <Map className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">12 Cities</div>
                  <p className="text-xs text-muted-foreground">Expanding to 3 more next month</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Status</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold text-green-400">Operational</div>
                  <p className="text-xs text-muted-foreground">All systems are running smoothly</p>
              </CardContent>
          </Card>
      </div>
       <Card className="lg:col-span-3">
          <CardHeader>
              <CardTitle>Welcome to ZoneAid Dashboard</CardTitle>
              <CardDescription>
                  This is your control center for emergency logistics. Use the navigation on the left to access different tools.
              </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="mb-4">
                  Here you can monitor deliveries, optimize supply paths, and manage your hospital's integration with the ZoneAid network.
              </p>
              <Button asChild>
                  <Link href="/dashboard/optimize">
                      Optimize a Supply Path
                  </Link>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
