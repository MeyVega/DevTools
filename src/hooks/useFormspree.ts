import { useForm } from '@formspree/react';
import { FieldValues } from 'react-hook-form';

export const useFormspree = <T extends FieldValues>(formId: string) => {
  const [state, handleSubmit] = useForm<T>(formId);

  return {
    isLoading: state.submitting,
    isSuccess: state.succeeded,
    error: state.errors,
    handleSubmit: (data: T) => handleSubmit(data as any)
  };
}; 