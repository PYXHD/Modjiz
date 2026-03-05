export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>App Navigation</header>

      <main>{children}</main>
    </div>
  );
}
