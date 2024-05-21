export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>hello second layout</h1>
    </>
  );
}
