export default function DashboardLayout({
  children,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isloggedin = true;
  return isloggedin ? (
    <>
      {children}
      {/* <Notifications />
      <RevenueMetrics />
      <div>hello world</div>
      <UserAnalyti /> */}
      {revenue}
      {notifications}
    </>
  ) : (
    login
  );
}
