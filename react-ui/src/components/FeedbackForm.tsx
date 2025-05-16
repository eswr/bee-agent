import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface FeedbackFormProps {
  orderId: string;
}

const FeedbackForm = ({ orderId }: FeedbackFormProps) => {
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3008/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `Submit feedback for order ${orderId}: ${feedback}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Feedback Submitted",
          description: "Thank you for your feedback!",
        });
        setFeedback('');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
      <h3 className="font-medium mb-2">Provide Feedback</h3>
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback here..."
        className="mb-3"
      />
      <Button onClick={handleSubmit} disabled={!feedback.trim()}>
        Submit Feedback
      </Button>
    </div>
  );
};

export default FeedbackForm;