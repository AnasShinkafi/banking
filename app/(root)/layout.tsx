
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      {/* <Sidebar /> */}
      {children}
    </main>
  );
}