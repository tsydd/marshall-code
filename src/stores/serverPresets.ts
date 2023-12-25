import {
  MarshallCodeToolsPreset,
  MyMarshallComPreset,
  parseBase64Patch,
} from 'stores/preset';
import { parse } from 'csv-parse/browser/esm';

interface MyMarshallCodePresetCsv {
  id: number;
  updatedAt: string;
  name: string;
  artist?: string;
  track?: string;
  patch: string;
}

interface MarshallCodeToolsPresetCsv {
  id: number;
  updatedAt: string;
  artist: string;
  track: string;
  url: string;
  patch: string;
}

async function loadCsvContent(url: string): Promise<string> {
  const csvResponse = await fetch(url);
  return await csvResponse.text();
}

function toMyMarshallComPreset(
  csvPreset: MyMarshallCodePresetCsv
): MyMarshallComPreset {
  return {
    id: csvPreset.id,
    type: 'MY_MARSHALL_COM',
    name: csvPreset.name,
    artist: csvPreset.artist,
    createdAt: new Date(Date.parse(csvPreset.updatedAt)),
    patch: parseBase64Patch(csvPreset.patch),
    track: csvPreset.track,
  };
}

function toMarshallCodeToolsPreset(
  csvPreset: MarshallCodeToolsPresetCsv
): MarshallCodeToolsPreset {
  return {
    id: csvPreset.id,
    type: 'MARSHALL_CODE_TOOLS',
    createdAt: new Date(Date.parse(csvPreset.updatedAt)),
    artist: csvPreset.artist,
    track: csvPreset.track,
    url: csvPreset.url,
    patch: parseBase64Patch(csvPreset.patch),
  };
}

async function parseMyMarshallCodeCsv(
  csvContent: string
): Promise<MyMarshallCodePresetCsv[]> {
  return new Promise<MyMarshallCodePresetCsv[]>((resolve, reject) => {
    parse(
      csvContent,
      {
        columns: ['id', 'updatedAt', 'name', 'artist', 'track', 'patch'],
      },
      (err, records) => {
        if (err) {
          reject(err);
        }
        resolve(records);
      }
    );
  });
}

async function parseMarshallCodeToolsCsv(
  csvContent: string
): Promise<MarshallCodeToolsPresetCsv[]> {
  return new Promise<MarshallCodeToolsPresetCsv[]>((resolve, reject) => {
    parse(
      csvContent,
      {
        columns: ['id', 'updatedAt', 'artist', 'track', 'url', 'patch'],
      },
      (err, records) => {
        if (err) {
          reject(err);
        }
        resolve(records);
      }
    );
  });
}

async function loadMyMarshallCodePresets(): Promise<MyMarshallComPreset[]> {
  const csvContent = await loadCsvContent(
    'https://storage.googleapis.com/marshallcode-tsyd/my.marshall.com.presets.csv'
  );
  const csvPresets = await parseMyMarshallCodeCsv(csvContent);
  return csvPresets.map(toMyMarshallComPreset);
}

async function loadMarshallCodeToolsPresets(): Promise<
  MarshallCodeToolsPreset[]
> {
  const csvContent = await loadCsvContent(
    'https://storage.googleapis.com/marshallcode-tsyd/marshallcode.tools.presets.csv'
  );
  const csvPresets = await parseMarshallCodeToolsCsv(csvContent);
  return csvPresets.map(toMarshallCodeToolsPreset);
}

export { loadMyMarshallCodePresets, loadMarshallCodeToolsPresets };
