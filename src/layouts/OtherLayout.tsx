type Props = {
  children: string | JSX.Element | JSX.Element[] | JSX.Element;
};

function OtherLayout({ children }: Props) {
  return (
    <div>
      <h1>This is other layout</h1>
      {children}
    </div>
  );
}

export default OtherLayout;
