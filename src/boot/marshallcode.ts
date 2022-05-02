import { boot } from 'quasar/wrappers';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { codeApi } from 'marshall-code-api';

export default boot(async () => {
  const store = useMarshallCodeStore();
  codeApi.debug = true;
  codeApi.onConnected = (connected) => {
    store.setConnected(connected);
  };
  await codeApi.init();
});
