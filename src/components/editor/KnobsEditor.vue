<template>
  <div class="row">
    <Knob
      :model-value="modelValue.gain / 10"
      @update:model-value="(value) => onChange({ gain: value * 10 })"
    >
      Gain
    </Knob>
    <Knob
      :model-value="modelValue.bass / 10"
      @update:model-value="(value) => onChange({ bass: value * 10 })"
    >
      Bass
    </Knob>
    <Knob
      :model-value="modelValue.middle / 10"
      @update:model-value="(value) => onChange({ middle: value * 10 })"
    >
      Middle
    </Knob>
    <Knob
      :model-value="modelValue.treble / 10"
      @update:model-value="(value) => onChange({ treble: value * 10 })"
    >
      Treble
    </Knob>
    <Knob
      :model-value="modelValue.volume / 10"
      @update:model-value="(value) => onChange({ volume: value * 10 })"
    >
      Volume
    </Knob>
    <Knob
      :model-value="modelValue.gate / 10"
      @update:model-value="(value) => onChange({ gate: value * 10 })"
    >
      Gate
    </Knob>
    <Knob
      :model-value="modelValue.presence / 10"
      @update:model-value="(value) => onChange({ presence: value * 10 })"
    >
      Presence
    </Knob>
    <Knob
      :model-value="modelValue.resonance / 10"
      @update:model-value="(value) => onChange({ resonance: value * 10 })"
    >
      Resonance
    </Knob>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Preset } from 'marshall-code-api';
import Knob from 'components/Knob.vue';

type Knobs = Pick<
  Preset,
  | 'bass'
  | 'middle'
  | 'treble'
  | 'volume'
  | 'gain'
  | 'gate'
  | 'resonance'
  | 'presence'
>;

defineProps({
  modelValue: {
    type: Object as PropType<Knobs>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Knobs>): void;
}>();

function onChange(changes: Partial<Knobs>) {
  emit('change', changes);
}
</script>
