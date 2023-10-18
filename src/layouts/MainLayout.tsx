type Props = {
  children: string | JSX.Element | JSX.Element[] | JSX.Element;
};

function MainLayout({ children }: Props) {
  return (
    <div>
      <h1>Main Layout</h1>
      {children}
    </div>
  );
}

export default MainLayout;
