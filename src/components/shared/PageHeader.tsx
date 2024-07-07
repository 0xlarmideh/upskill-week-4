const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-6">
      <p className="text-[30px] text-gray-800 font-semibold">{title}</p>
      <p className="italic tracking-tight text-green-600">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
