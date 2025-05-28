import { FieldValues } from 'react-hook-form';

export interface SuggestFormState extends FieldValues {
  toolName: string;
  toolUrl: string;
  category: string;
  description: string;
  tags: string;
  isFree: boolean;
  hasFreeOption: boolean;
  authorName: string;
  authorEmail: string;
  whyRecommend: string;
}

export interface ContactFormState extends FieldValues {
  name: string;
  email: string;
  subject: string;
  message: string;
} 