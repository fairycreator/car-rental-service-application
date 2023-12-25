import PuffLoader from 'react-spinners/PuffLoader';

export const Loader = () => {
  return (
    <PuffLoader
      color="var(--primary-color-green-lite)"
      cssOverride={{ margin: '30vh auto 0 auto' }}
    />
  );
};
