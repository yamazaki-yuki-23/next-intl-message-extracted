import {useExtracted} from 'next-intl';
import Counter from './Counter';

export default function Home() {
  const t = useExtracted();
  const user = {name: 'Mike'};
  return (
    <div>
      <h1>{t('Hey {name}', user)}</h1>
      <Counter />
    </div>
  );
}
