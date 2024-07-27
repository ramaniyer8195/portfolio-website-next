import PageTransition from "@/components/transition/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
