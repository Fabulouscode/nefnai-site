import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell, accountsNotice } from '@/components/auth-shell';
import { PreviewForm } from '@/components/preview-form';

export const metadata: Metadata = { title: 'Reset your password', description: 'Reset the password for your NEFNAI member account.' };

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      intro="Enter your email, and we’ll send you a link to choose a new password."
      footer={<><Link href="/account/login" className="font-bold text-green-deep">Back to sign in</Link></>}
    >
      <PreviewForm single submitLabel="Send reset link" notice={accountsNotice} fields={[{ name: 'email', label: 'Email', type: 'email', required: true }]} />
    </AuthShell>
  );
}
