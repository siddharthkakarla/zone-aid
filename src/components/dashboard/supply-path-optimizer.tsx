'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { optimizeSupplyPaths, OptimizeSupplyPathsOutput } from '@/ai/flows/optimize-supply-paths';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Route, Clock, Truck, AlertTriangle } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  startFacility: z.string().min(1, 'Start facility is required.'),
  endFacility: z.string().min(1, 'End facility is required.'),
  supplyType: z.string().min(1, 'Supply type is required.'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1.'),
  transportationOptions: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  currentConditions: z.string().min(1, 'Current conditions are required.'),
});

type FormValues = z.infer<typeof formSchema>;

const transportationOptionsList = [
  { id: 'drone', label: 'Drone' },
  { id: 'ambulance', label: 'Ambulance' },
  { id: 'ground', label: 'Ground Transport' },
];

export default function SupplyPathOptimizer() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<OptimizeSupplyPathsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startFacility: '',
      endFacility: '',
      supplyType: '',
      quantity: 1,
      transportationOptions: ['drone', 'ambulance', 'ground'],
      currentConditions: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await optimizeSupplyPaths(values);
      setResult(output);
    } catch (error) {
      console.error('Error optimizing supply path:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get optimization suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="startFacility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Facility</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., City Hospital - Main Branch" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endFacility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Facility</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Northside Clinic" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supply Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a supply type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="blood">Blood</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="equipment">Medical Equipment</SelectItem>
                      <SelectItem value="organs">Organs</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transportationOptions"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Available Transportation</FormLabel>
                  </div>
                  <div className="space-y-2">
                  {transportationOptionsList.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="transportationOptions"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="md:col-span-2">
                <FormField
                control={form.control}
                name="currentConditions"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Current Conditions</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="e.g., Heavy rain, moderate traffic on highways, festival procession on Main St."
                        className="resize-none"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <div className="md:col-span-2 flex justify-end">
                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Optimize Path
                </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      {result && (
        <CardFooter className="flex-col items-start gap-4 border-t pt-6">
           <h3 className="font-headline text-xl font-semibold">Optimization Result</h3>
           <div className="grid gap-6 w-full md:grid-cols-2">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Truck className="h-6 w-6 text-primary" />
                    <CardTitle>Recommended Transport</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">{result.recommendedTransportation}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Estimated Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">{result.estimatedTime}</p>
                </CardContent>
            </Card>
            <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Route className="h-6 w-6 text-primary" />
                    <CardTitle>Optimal Path</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{result.optimalPath}</p>
                </CardContent>
            </Card>
             <Card className="md:col-span-2 border-accent/50">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 text-accent">
                    <AlertTriangle className="h-6 w-6" />
                    <CardTitle>Potential Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground">{result.potentialChallenges}</p>
                </CardContent>
            </Card>
           </div>
        </CardFooter>
      )}
    </>
  );
}
