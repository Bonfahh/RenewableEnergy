import {useSelector} from 'react-redux';

import createRouter from './routes';
import {IRootState} from './@types/store';

export default function Index() {
  const signed = useSelector((state: IRootState) => state.global.signed);

  return createRouter(signed);
}
