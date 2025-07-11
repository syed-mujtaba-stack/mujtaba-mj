import Resume from '@/components/resume';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'View and download the professional resume of Syed Mujtaba Abbas Zaidi.',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <Resume />
    </div>
  );
}
