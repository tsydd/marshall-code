import { defineStore } from 'pinia';
import {
  CabinetType,
  codeApi,
  DelayType,
  DeviceInformation,
  ModulationType,
  PedalType,
  PowerAmpType,
  PreAmpType,
  Preset,
  ReverbType,
} from 'marshall-code-api';
import { LocalStorage } from 'quasar';
import {
  DevicePreset,
  devicePresetInstance,
  ServerPreset,
} from 'stores/preset';

interface State {
  connected: boolean;
  deviceInfo?: DeviceInformation;
  bluetoothAddress?: string;
  bluetoothVersion?: string;
  ampPresets: Preset[];
  patch: Preset;
  preset: DevicePreset | ServerPreset;
}

async function sleep(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export const useMarshallCodeStore = defineStore('marshallCode', {
  state: (): State => ({
    connected: false,
    deviceInfo: undefined,
    bluetoothAddress: undefined,
    bluetoothVersion: undefined,
    ampPresets: LocalStorage.getItem('presets') ?? [],
    patch: {
      gain: 0,
      bass: 0,
      middle: 0,
      treble: 0,
      volume: 0,

      pedalEnabled: false,
      pedalType: PedalType.COMPRESSOR,
      pedalParam1: 0,
      pedalParam2: 0,
      pedalParam3: 0,
      pedalParam4: 0,

      preAmpEnabled: false,
      preAmpType: PreAmpType.JTM45,

      gate: 0,

      modulationEnabled: false,
      modulationType: ModulationType.CHORUS,
      modulationParam1: 0,
      modulationParam2: 0,
      modulationParam3: 0,
      modulationParam4: 0,

      delayEnabled: false,
      delayType: DelayType.STUDIO,
      delayTimeMsb: 0,
      delayTimeLsb: 0,
      delayParam2: 0,
      delayParam3: 0,
      delayParam4: 0,

      reverbEnabled: false,
      reverbType: ReverbType.ROOM,
      reverbParam1: 0,
      reverbParam2: 0,
      reverbParam3: 0,
      reverbParam4: 0,

      powerAmpEnabled: false,
      powerAmpType: PowerAmpType.CLASSIC_MARSHALL_100W,

      cabinetEnabled: false,
      cabinetType: CabinetType._1960,

      presence: 0,
      resonance: 0,
    },
    preset: devicePresetInstance,
  }),

  getters: {
    currentDevicePresetNumber(state: State): number | undefined {
      return state.preset.type === 'device' ? state.patch.number : undefined;
    },
    currentServerPresetId(state: State): number | undefined {
      const preset = state.preset;
      return preset.type === 'server' ? preset.id : undefined;
    },
  },

  actions: {
    async init() {
      const storePresets = this.ampPresets;
      codeApi.debug = true;
      codeApi.onConnected = async (connected) => {
        this.connected = connected;
        if (connected) {
          codeApi.requestCurrentPreset();
          await sleep(50);
          codeApi.requestDeviceInfo();
          await sleep(50);
          codeApi.requestBluetoothVersion();
          await sleep(50);
          codeApi.requestBluetoothAddress();
        }
        for (let i = 0; i < 100; i++) {
          // CODE fails to load all patches at once
          if (i > 0 && i % 5 == 0) {
            await sleep(30);
          }
          codeApi.requestPreset(i);
        }
        await sleep(100);
        LocalStorage.set('presets', storePresets);
      };
      codeApi.onPresetNumberChanged = () => {
        codeApi.requestCurrentPreset();
      };
      codeApi.onCurrentPresetReceived = (preset) => {
        this.preset = devicePresetInstance;
        this.patch = preset;
      };
      codeApi.onPresetModified = (changes: Partial<Preset>) => {
        Object.assign(this.patch, changes);
      };
      codeApi.onPresetReceived = (preset) => {
        this.ampPresets[preset.number as number] = preset;
      };
      codeApi.onDeviceInfo = (info) => {
        this.deviceInfo = info;
      };
      codeApi.onBluetoothAddress = (address) => {
        this.bluetoothAddress = address.address;
      };
      codeApi.onBluetoothVersion = (version) => {
        this.bluetoothVersion = version.version;
      };
      await codeApi.init();
    },

    modifyPreset(changes: Partial<Preset>) {
      codeApi.modifyPreset(changes);
      Object.assign(this.patch, changes);
    },

    switchToServerPreset(preset: ServerPreset) {
      this.preset = preset;
      this.patch = Object.assign({}, preset.patch);
      codeApi.modifyPreset(preset.patch);
    },

    switchToDevicePreset(number: number) {
      codeApi.switchToPreset(number);
    },
  },
});
