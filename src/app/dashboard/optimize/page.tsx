import SupplyPathOptimizer from '@/components/dashboard/supply-path-optimizer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function OptimizePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Supply Path Optimizer</CardTitle>
          <CardDescription>
            Use our AI-powered tool to find the fastest and most efficient path for transporting critical supplies between facilities.
          </CardDescription>
        </CardHeader>
        <SupplyPathOptimizer />
      </Card>
    </div>
  );
}
