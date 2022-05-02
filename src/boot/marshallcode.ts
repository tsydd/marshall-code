import { boot } from 'quasar/wrappers';
import { useMarshallCodeStore } from 'stores/marshallcode';

export default boot(async () => {
  await useMarshallCodeStore().init();
});
