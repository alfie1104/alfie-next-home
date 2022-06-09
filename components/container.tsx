const Container: React.FC<{ children: any }> = ({ children }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

export default Container;
