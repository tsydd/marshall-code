import { ServerPreset } from 'stores/preset';
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

interface State {
  presets: Record<number, ServerPreset>;
}

const localStorageKey = 'favoritePresets';

export const useFavoritePresetsStore = defineStore('favoritePresets', {
  state: (): State => ({
    presets: LocalStorage.getItem(localStorageKey) || {},
  }),

  actions: {
    toggleFavorite(preset: ServerPreset) {
      if (this.presets.hasOwnProperty(preset.id)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [preset.id]: _, ...presets } = this.presets;
        this.presets = presets;
      } else {
        this.presets = {
          [preset.id]: preset,
          ...this.presets,
        };
      }
    },
  },

  getters: {
    isFavorite(state: State): (id: number) => boolean {
      return (id: number) => state.presets.hasOwnProperty(id);
    },
  },
});

useFavoritePresetsStore().$subscribe((mutation, { presets }) => {
  LocalStorage.set(localStorageKey, presets);
});
