import { ServerPreset } from 'stores/preset';
import { defineStore } from 'pinia';

interface State {
  presets: Record<number, ServerPreset>;
}

export const userFavoritePresetsStore = defineStore('favoritePresets', {
  state: (): State => ({
    presets: {},
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
