<template>
  <div class="row items-center">
    <div>
      <img alt="pedal" src="~assets/pedal.svg" width="25" height="25" />
    </div>
    <q-select
      :model-value="modelValue.pedalType"
      :options="Object.values(PedalType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      @update:model-value="(value) => onChange({ pedalType: value })"
    />
    <q-toggle
      :model-value="modelValue.pedalEnabled"
      @update:model-value="(value) => onChange({ pedalEnabled: value })"
    />
  </div>
  <div class="row">
    <template v-if="modelValue.pedalType === PedalType.COMPRESSOR">
      <Knob
        :model-value="modelValue.pedalParam1 / 10"
        @update:modelValue="(value) => onChange({ pedalParam1: value * 10 })"
      >
        Tone
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam2 / 10"
        @update:modelValue="(value) => onChange({ pedalParam2: value * 10 })"
      >
        Ratio
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam3 / 10"
        @update:modelValue="(value) => onChange({ pedalParam3: value * 10 })"
      >
        Compression
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam4 / 10"
        @update:modelValue="(value) => onChange({ pedalParam4: value * 10 })"
      >
        Level
      </Knob>
    </template>
    <template v-else-if="modelValue.pedalType === PedalType.DISTORTION">
      <div class="column items-center">
        <q-select
          :model-value="distortionModeByCode(modelValue.pedalParam1)"
          :options="Object.values(DistortionMode)"
          :option-label="$t"
          outlined
          dense
          options-dense
          hide-bottom-space
          @update:model-value="
            (value) => onChange({ pedalParam1: distortionModeToCode(value) })
          "
        ></q-select>
        <div>Mode</div>
      </div>
      <Knob
        :model-value="modelValue.pedalParam2 / 10"
        @update:modelValue="(value) => onChange({ pedalParam2: value * 10 })"
      >
        Drive
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam3 / 10"
        @update:modelValue="(value) => onChange({ pedalParam3: value * 10 })"
      >
        Tone
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam4 / 10"
        @update:modelValue="(value) => onChange({ pedalParam4: value * 10 })"
      >
        Level
      </Knob>
    </template>
    <template v-else-if="modelValue.pedalType === PedalType.AUTO_WAH">
      <div class="column items-center">
        <q-select
          :model-value="autoWahModeByCode(modelValue.pedalParam1)"
          :options="Object.values(AutoWahMode)"
          :option-label="$t"
          outlined
          dense
          options-dense
          hide-bottom-space
          @update:model-value="
            (value) => onChange({ pedalParam1: autoWahModeToCode(value) })
          "
        ></q-select>
        <div>Mode</div>
      </div>
      <Knob
        :model-value="modelValue.pedalParam2 / 10"
        @update:modelValue="(value) => onChange({ pedalParam2: value * 10 })"
      >
        Frequency
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam3 / 10"
        @update:modelValue="(value) => onChange({ pedalParam3: value * 10 })"
      >
        Sensitivity
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam4 / 10"
        @update:modelValue="(value) => onChange({ pedalParam4: value * 10 })"
      >
        Res
      </Knob>
    </template>
    <template v-else-if="modelValue.pedalType === PedalType.PITCH_SHIFTER">
      <Knob
        :model-value="modelValue.pedalParam1 - 12"
        :min="-12"
        :max="12"
        :step="1"
        @update:modelValue="(value) => onChange({ pedalParam1: value + 12 })"
      >
        Semitone
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam2 - 50"
        :min="-50"
        :max="50"
        :step="1"
        @update:modelValue="(value) => onChange({ pedalParam2: value + 50 })"
      >
        Fine
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam3 / 10"
        @update:modelValue="(value) => onChange({ pedalParam3: value * 10 })"
      >
        Regen
      </Knob>
      <Knob
        :model-value="modelValue.pedalParam4 / 10"
        @update:modelValue="(value) => onChange({ pedalParam4: value * 10 })"
      >
        Mix
      </Knob>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import {
  AutoWahMode,
  DistortionMode,
  PedalType,
  Preset,
} from 'marshall-code-api';
import {
  autoWahModeByCode,
  autoWahModeToCode,
  distortionModeByCode,
  distortionModeToCode,
} from 'marshall-code-api/lib/converters';
import Knob from 'components/Knob.vue';

type Pedal = Pick<
  Preset,
  | 'pedalType'
  | 'pedalParam1'
  | 'pedalParam2'
  | 'pedalParam3'
  | 'pedalParam4'
  | 'pedalEnabled'
>;

defineProps({
  modelValue: {
    type: Object as PropType<Pedal>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Pedal>): void;
}>();

function onChange(changes: Partial<Pedal>) {
  emit('change', changes);
}
</script>
