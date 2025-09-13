'use server';

/**
 * @fileOverview An AI agent for suggesting the fastest and most efficient path for transporting supplies between hospital facilities during emergencies.
 *
 * - optimizeSupplyPaths - A function that handles the supply path optimization process.
 * - OptimizeSupplyPathsInput - The input type for the optimizeSupplyPaths function.
 * - OptimizeSupplyPathsOutput - The return type for the optimizeSupplyPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeSupplyPathsInputSchema = z.object({
  startFacility: z.string().describe('The name of the facility where the supplies are starting from.'),
  endFacility: z.string().describe('The name of the facility where the supplies need to be delivered to.'),
  supplyType: z.string().describe('The type of supply that needs to be transported (e.g., blood, medicine, equipment).'),
  quantity: z.number().describe('The quantity of the supply needed.'),
  transportationOptions: z.array(z.string()).describe('A list of available transportation options (e.g., drone, ambulance, ground transport).'),
  currentConditions: z.string().describe('Description of current conditions, such as weather, traffic, or road closures.'),
});
export type OptimizeSupplyPathsInput = z.infer<typeof OptimizeSupplyPathsInputSchema>;

const OptimizeSupplyPathsOutputSchema = z.object({
  optimalPath: z.string().describe('A detailed description of the fastest and most efficient path for transporting the supplies.'),
  estimatedTime: z.string().describe('The estimated time for the supplies to reach the destination facility.'),
  recommendedTransportation: z.string().describe('The recommended mode of transportation for this particular situation.'),
  potentialChallenges: z.string().describe('Any potential challenges or obstacles that might be encountered during transportation.'),
});
export type OptimizeSupplyPathsOutput = z.infer<typeof OptimizeSupplyPathsOutputSchema>;

export async function optimizeSupplyPaths(input: OptimizeSupplyPathsInput): Promise<OptimizeSupplyPathsOutput> {
  return optimizeSupplyPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeSupplyPathsPrompt',
  input: {schema: OptimizeSupplyPathsInputSchema},
  output: {schema: OptimizeSupplyPathsOutputSchema},
  prompt: `You are an expert in emergency logistics, specializing in optimizing supply chains for hospitals.

  Based on the following information, determine the fastest and most efficient path for transporting the required supplies between facilities.

  Start Facility: {{{startFacility}}}
  End Facility: {{{endFacility}}}
  Supply Type: {{{supplyType}}}
  Quantity: {{{quantity}}}
  Transportation Options: {{#each transportationOptions}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Current Conditions: {{{currentConditions}}}

  Consider all available transportation options, current conditions, and potential challenges to recommend the optimal path, estimated time, and the most suitable transportation method.

  Respond with a detailed description of the optimal path, estimated time, recommended transportation, and any potential challenges.
  `,
});

const optimizeSupplyPathsFlow = ai.defineFlow(
  {
    name: 'optimizeSupplyPathsFlow',
    inputSchema: OptimizeSupplyPathsInputSchema,
    outputSchema: OptimizeSupplyPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
