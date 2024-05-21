export const metadata = {
  title: "about ",
  description: "layout metadata deta description",
};
export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>about layout</h1>
      {children}
    </>
  );
}
