import './Loading.scss';

export default function LoadingSpinner({ size = 30 }: { size?: number }) {
  return (
    <div
      className="spinner"
      style={{ width: size, height: size, borderWidth: size / 8 }}
    ></div>
  );
}
