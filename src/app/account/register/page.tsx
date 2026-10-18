import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell, accountsNotice } from '@/components/auth-shell';
import { PreviewForm } from '@/components/preview-form';

export const metadata: Metadata = { title: 'Become a member', description: 'Register as a NEFNAI member: you’ll be trained, inducted and certified.' };

export default function RegisterPage() {
  return (
    <AuthShell
      title="Become a member"
      intro="Join the struggle for a new Africa. Every new member is trained, inducted and certified, in person or online."
      footer={<>Already a member? <Link href="/account/login" className="font-bold text-green-deep">Sign in</Link></>}
    >
      <PreviewForm
        single
        submitLabel="Create my account"
        notice={accountsNotice}
        fields={[
          { name: 'name', label: 'Full name', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', required: true },
          { name: 'location', label: 'Town and state', required: true },
          { name: 'password', label: 'Password', type: 'password', required: true },
          { name: 'confirm', label: 'Confirm password', type: 'password', required: true },
        ]}
      />
    </AuthShell>
  );
}
