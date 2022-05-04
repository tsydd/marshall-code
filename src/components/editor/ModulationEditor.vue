<template>
  <div class="row items-center">
    <div>
      <img
        alt="Modulation"
        src="~assets/modulation.svg"
        width="25"
        height="25"
      />
    </div>
    <q-select
      :model-value="modelValue.modulationType"
      :options="Object.values(ModulationType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      @update:model-value="(value) => onChange({ modulationType: value })"
    />
    <q-toggle
      :model-value="modelValue.modulationEnabled"
      @update:model-value="(value) => onChange({ modulationEnabled: value })"
    />
  </div>
  <div class="row">
    <template v-if="modelValue.modulationType === ModulationType.CHORUS">
      <q-select
        :model-value="converters.chorusModeByCode(modelValue.modulationParam3)"
        :options="Object.values(ChorusMode)"
        :option-label="$t"
        dense
        options-dense
        outlined
        hide-bottom-space
        @update:model-value="
          (value) =>
            onChange({ modulationParam3: converters.chorusModeToCode(value) })
        "
      ></q-select>
      <Knob
        :model-value="modelValue.modulationParam1 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam1: value * 10 })
        "
      >
        Speed
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam2 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam2: value * 10 })
        "
      >
        Depth
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam4 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam4: value * 10 })
        "
      >
        Tone
      </Knob>
    </template>
    <template v-else-if="modelValue.modulationType === ModulationType.FLANGER">
      <q-select
        :model-value="converters.flangerModeByCode(modelValue.modulationParam3)"
        :options="Object.values(FlangerMode)"
        :option-label="$t"
        dense
        options-dense
        outlined
        hide-bottom-space
        @update:model-value="
          (value) =>
            onChange({ modulationParam3: converters.flangerModeToCode(value) })
        "
      ></q-select>
      <Knob
        :model-value="modelValue.modulationParam1 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam1: value * 10 })
        "
      >
        Speed
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam2 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam2: value * 10 })
        "
      >
        Depth
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam4 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam4: value * 10 })
        "
      >
        Regen
      </Knob>
    </template>
    <template v-else-if="modelValue.modulationType === ModulationType.PHASER">
      <q-select
        :model-value="converters.phaserModeByCode(modelValue.modulationParam3)"
        :options="Object.values(PhaserMode)"
        :option-label="$t"
        dense
        options-dense
        outlined
        hide-bottom-space
        @update:model-value="
          (value) =>
            onChange({ modulationParam3: converters.phaserModeToCode(value) })
        "
      ></q-select>
      <Knob
        :model-value="modelValue.modulationParam1 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam1: value * 10 })
        "
      >
        Speed
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam2 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam2: value * 10 })
        "
      >
        Depth
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam4 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam4: value * 10 })
        "
      >
        Regen
      </Knob>
    </template>
    <template v-else-if="modelValue.modulationType === ModulationType.TREMOLO">
      <q-select
        :model-value="converters.tremoloModeByCode(modelValue.modulationParam3)"
        :options="Object.values(TremoloMode)"
        :option-label="$t"
        dense
        options-dense
        outlined
        hide-bottom-space
        @update:model-value="
          (value) =>
            onChange({ modulationParam3: converters.tremoloModeToCode(value) })
        "
      ></q-select>
      <Knob
        :model-value="modelValue.modulationParam1 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam1: value * 10 })
        "
      >
        Speed
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam2 / 10"
        @update:modelValue="
          (value) => onChange({ modulationParam2: value * 10 })
        "
      >
        Depth
      </Knob>
      <Knob
        :model-value="modelValue.modulationParam4 - 50"
        :min="-50"
        :max="50"
        :step="1"
        @update:modelValue="
          (value) => onChange({ modulationParam4: value + 50 })
        "
      >
        Skew
      </Knob>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import {
  ChorusMode,
  converters,
  FlangerMode,
  ModulationType,
  PhaserMode,
  Preset,
  TremoloMode,
} from 'marshall-code-api';
import Knob from 'components/editor/Knob.vue';

type Modulation = Pick<
  Preset,
  | 'modulationType'
  | 'modulationEnabled'
  | 'modulationParam1'
  | 'modulationParam2'
  | 'modulationParam3'
  | 'modulationParam4'
>;

defineProps({
  modelValue: {
    type: Object as PropType<Modulation>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Modulation>): void;
}>();

function onChange(changes: Partial<Modulation>) {
  emit('change', changes);
}
</script>
