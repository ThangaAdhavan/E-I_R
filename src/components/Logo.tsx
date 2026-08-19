export default function Logo({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`nib-logo ${className}`} style={style}>
      <span className="nib-logo__normal">EXACTIV</span>
      <span className="nib-logo__group">
        <span className="nib-logo__is">is</span>
        <span className="nib-logo__boring">
          RighT<span className="reg">®</span>
        </span>
      </span>
    </div>
  );
}
