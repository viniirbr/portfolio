interface Props {
  children: React.ReactNode;
}

export function Grid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-4 md:gap-24 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
      {children}
    </div>
  );
}
