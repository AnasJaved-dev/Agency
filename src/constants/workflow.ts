import { ClipboardList, MessageSquare, CreditCard, CheckCircle } from 'lucide-react';

export interface WorkflowStep {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    icon: ClipboardList,
    title: 'Choose Service',
    description: 'Select from our YouTube management or graphic design services based on your needs',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Talk to Us',
    description: 'Schedule a consultation to discuss your project requirements and goals',
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'Pay 25% Upfront',
    description: 'Secure your project with a small initial payment to get started',
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'We Deliver',
    description: 'Receive your completed work with revisions until you\'re 100% satisfied',
  },
]; 