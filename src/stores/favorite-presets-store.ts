import { ServerPreset } from 'stores/preset';
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

interface State {
  presets: Record<string, ServerPreset>;
}

const localStorageKey = 'favoritePresets';

function getPresetKey(preset: ServerPreset): string {
  return `${preset.type}-${preset.id}`;
}

export const useFavoritePresetsStore = defineStore('favoritePresets', {
  state: (): State => ({
    presets: LocalStorage.getItem(localStorageKey) || {},
  }),

  actions: {
    toggleFavorite(preset: ServerPreset) {
      const key = getPresetKey(preset);
      if (this.presets.hasOwnProperty(key)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [key]: _, ...presets } = this.presets;
        this.presets = presets;
      } else {
        this.presets = {
          [key]: preset,
          ...this.presets,
        };
      }
    },
  },

  getters: {
    isFavorite(state: State): (preset: ServerPreset) => boolean {
      return (preset: ServerPreset) =>
        state.presets.hasOwnProperty(getPresetKey(preset));
    },
  },
});

useFavoritePresetsStore().$subscribe((mutation, { presets }) => {
  LocalStorage.set(localStorageKey, presets);
});
