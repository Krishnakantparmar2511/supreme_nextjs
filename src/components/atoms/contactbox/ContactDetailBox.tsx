interface ContactDetailBoxProps {
  label: string;
  value: string;
  className?: string;
}
export const ContactDetailBox = ({
  label,
  value,
  className,
}: ContactDetailBoxProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div>
        <p className="font-semibold text-xl">{label}</p>
        <p className="font-normal text-xl mt-[15px]">{value}</p>
      </div>
    </div>
  );
};
