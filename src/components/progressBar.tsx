import { useAppSelector } from '../hooks/useStore';

export default function ProgressBar() {
  const loading = useAppSelector((state) => state.product.loading);

  return (
    <>
      {loading && (
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      )}
    </>
  );
};