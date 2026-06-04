type MaxtronLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function MaxtronLogo({ size = 40, className = "", priority = false }: MaxtronLogoProps) {
  return (
    <img
      src="/maxtronlogo.svg"
      alt="Maxtron White-Label Solutions"
      width={size}
      height={size}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
