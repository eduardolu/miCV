interface LogoMarkProps {
  className?: string;
  title?: string;
}

export default function LogoMark({ className = '', title = 'Eduardo Lu' }: LogoMarkProps) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src="/logo-el.png"
      alt={title}
      draggable="false"
    />
  );
}
