<template>
  <div class="row details">
    <div class="column">
      <div class="row">
        <div class="pre-amp">{{ $t(modelValue.preAmpType) }}</div>
        <div class="cabinet">{{ $t(modelValue.cabinetType) }}</div>
      </div>
      <div>{{ $t(modelValue.powerAmpType) }}</div>
    </div>

    <div class="column">
      <div class="row">
        <SmallKnob :model-value="modelValue.bass" />
        <SmallKnob :model-value="modelValue.middle" />
        <SmallKnob :model-value="modelValue.treble" />
      </div>
      <div class="row">
        <SmallKnob :model-value="modelValue.gain" />
        <SmallKnob :model-value="modelValue.volume" />
        <SmallKnob :model-value="modelValue.gate" />
      </div>
    </div>

    <div class="column q-ml-sm">
      <div class="row">
        <div class="pedal">{{ $t(modelValue.pedalType) }}</div>
        <div class="modulation">{{ $t(modelValue.modulationType) }}</div>
      </div>
      <div class="row">
        <div class="pedal">{{ $t(modelValue.delayType) }}</div>
        <div class="modulation">{{ $t(modelValue.reverbType) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Preset } from 'marshall-code-api';
import SmallKnob from 'components/SmallKnob.vue';

defineProps({
  modelValue: {
    type: Object as PropType<Preset>,
    required: true,
  },
});
</script>

<style>
.details {
  width: 470px;
}

.pre-amp {
  width: 140px;
}

.cabinet {
  width: 60px;
}

.pedal {
  width: 100px;
}

.modulation {
  width: 100px;
}
</style>
