'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Lightbulb, Bot, User, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


type Symptom = string;

export default function SymptomCheckerPage() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<{conditions: string[], advice: string, urgency: string} | null>(null);

  const handleAddSymptom = () => {
    if (currentSymptom && !symptoms.includes(currentSymptom)) {
      setSymptoms([...symptoms, currentSymptom.trim()]);
      setCurrentSymptom("");
    }
  };

  const handleRemoveSymptom = (symptomToRemove: Symptom) => {
    setSymptoms(symptoms.filter(symptom => symptom !== symptomToRemove));
  };
  
  const handleAnalyze = () => {
      setIsLoading(true);
      setAnalysis(null);
      // Simulate AI analysis
      setTimeout(() => {
          setAnalysis({
              conditions: ["Common Cold", "Allergic Rhinitis", "Sinusitis"],
              advice: "Based on your symptoms, it's likely a minor upper respiratory issue. Rest, stay hydrated, and consider over-the-counter decongestants. If symptoms worsen or you develop a fever, consult a doctor.",
              urgency: "Low - Monitor Symptoms"
          });
          setIsLoading(false);
      }, 1500)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">AI Symptom Checker</CardTitle>
          <CardDescription>
            Enter your symptoms to get AI-powered insights. This is not a substitute for professional medical advice.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="symptom-input" className="font-medium text-sm">Add your symptoms (e.g., "headache", "sore throat")</label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="symptom-input"
                  value={currentSymptom}
                  onChange={(e) => setCurrentSymptom(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddSymptom()}
                  placeholder="Type a symptom and press Enter"
                />
                <Button onClick={handleAddSymptom}>Add</Button>
              </div>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Your Symptoms:</p>
              {symptoms.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {symptoms.map(symptom => (
                    <Badge key={symptom} variant="secondary" className="text-base py-1 pl-3 pr-2">
                      {symptom}
                      <button onClick={() => handleRemoveSymptom(symptom)} className="ml-2 rounded-full hover:bg-background/50 p-0.5">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No symptoms added yet.</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAnalyze} disabled={symptoms.length === 0 || isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
            Analyze Symptoms
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="lg:col-span-1">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                AI Analysis
            </CardTitle>
        </CardHeader>
        <CardContent>
            {isLoading && (
                 <div className="flex flex-col items-center justify-center h-full text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                    <p className="font-semibold">Analyzing your symptoms...</p>
                    <p className="text-sm text-muted-foreground">Please wait a moment.</p>
                </div>
            )}
            {!isLoading && !analysis && (
                <div className="text-center text-muted-foreground p-8">
                    <p>Analysis results will appear here once you enter symptoms and click "Analyze".</p>
                </div>
            )}
            {analysis && (
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold">Potential Conditions</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {analysis.conditions.map(cond => <Badge key={cond}>{cond}</Badge>)}
                        </div>
                    </div>
                     <div>
                        <h4 className="font-semibold">Urgency Level</h4>
                        <Badge variant={analysis.urgency.includes("Low") ? "default" : "destructive"}>{analysis.urgency}</Badge>
                    </div>
                    <div>
                        <h4 className="font-semibold">AI Advice</h4>
                        <p className="text-sm text-muted-foreground">{analysis.advice}</p>
                    </div>
                     <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Disclaimer</AlertTitle>
                        <AlertDescription>
                            This AI analysis is for informational purposes only and is not a medical diagnosis. Always consult with a qualified healthcare professional for any health concerns.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
