import AuthShell from "@/components/auth/modals/AuthShell";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthShell>{children}</AuthShell>;
}

export default AuthLayout;
