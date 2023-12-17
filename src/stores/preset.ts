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
  createdAt: Date;
  id: number;
  name: string;
  artist?: string | null;
  song?: string | null;
  patch: Preset;
}

export interface MyMarshallComPreset {
  type: 'MY_MARSHALL_COM';
  createdAt: Date;
  id: number;
  name: string;
  artist?: string | null;
  song?: string | null;
  patch: Preset;
}

export interface MarshallCodeToolsPreset {
  type: 'MARSHALL_CODE_TOOLS';
  createdAt: Date;
  id: number;
  artist: string | null;
  song: string | null;
  url: string;
  patch: Preset;
}

export function parseBase64Patch(patchBase64: string): Preset {
  const bytesString = atob(patchBase64);
  const bytes = new Uint8Array(
    Array.from(bytesString, (ch) => ch.charCodeAt(0))
  );
  return presetFromArray(bytes);
}
