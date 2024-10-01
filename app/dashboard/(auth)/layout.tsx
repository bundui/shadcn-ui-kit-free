import Providers from "@/components/providers";
import MainLayout from "@/components/main-layout";

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <MainLayout>{children}</MainLayout>
    </Providers>
  );
}
