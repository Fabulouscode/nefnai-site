import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell, accountsNotice } from '@/components/auth-shell';
import { PreviewForm } from '@/components/preview-form';

export const metadata: Metadata = { title: 'Sign in', description: 'Sign in to your NEFNAI member account.' };

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      intro="Sign in to your NEFNAI member account."
      footer={<>New to NEFNAI? <Link href="/account/register" className="font-bold text-green-deep">Become a member</Link></>}
    >
      <PreviewForm
        single
        submitLabel="Sign in"
        notice={accountsNotice}
        fields={[
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'password', label: 'Password', type: 'password', required: true },
        ]}
      />
      <p className="mt-4 text-center">
        <Link href="/account/forgot-password" className="text-[15px] font-semibold text-sky-deep">Forgot your password?</Link>
      </p>
    </AuthShell>
  );
}
