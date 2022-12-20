import { PresetCompact } from 'src/api';
import { presetFromArray } from 'marshall-code-api/lib/converters';
import { Preset } from 'marshall-code-api';

export interface DevicePreset {
  type: 'device';
}

export const devicePresetInstance: DevicePreset = {
  type: 'device',
};

export interface ServerPreset {
  type: 'server';
  id: number;
  name: string;
  artist?: string | null;
  song?: string | null;
  createdAt: Date;
  patch: Preset;
}

export function parsePresets(presets: PresetCompact[]): ServerPreset[] {
  return presets.map((preset) => {
    const parsedPreset = presetFromArray(new Uint8Array(preset.patch));
    return {
      type: 'server',
      id: preset.id,
      name: preset.name,
      artist: preset.artist,
      song: preset.song,
      createdAt: preset.createdAt,
      patch: parsedPreset,
    };
  });
}
