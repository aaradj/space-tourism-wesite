const Fspliter = (path: string): string => {
  const splited = path.split("/");
  const newtext = splited[1];
  return newtext;
};

export { Fspliter };
