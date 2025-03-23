
import { toast } from "@/hooks/use-toast";

interface FormSubmitOptions {
  formType: 'contact' | 'quote';
  data: Record<string, any>;
  onSuccess?: () => void;
  onError?: () => void;
}

export const submitFormToAPI = async ({
  formType,
  data,
  onSuccess,
  onError
}: FormSubmitOptions) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        formType
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Something went wrong');
    }

    toast({
      title: "Success!",
      description: formType === 'contact' 
        ? "Your message has been sent. We'll get back to you soon!" 
        : "Your quote request has been submitted successfully!",
      variant: "default",
    });

    if (onSuccess) onSuccess();
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    toast({
      title: "Error",
      description: "Failed to submit form. Please try again later.",
      variant: "destructive",
    });
    
    if (onError) onError();
    return false;
  }
};
