import MainLayout from "@/components/main-layout";

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
