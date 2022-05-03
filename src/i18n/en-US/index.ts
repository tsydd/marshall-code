import {
  AutoWahMode,
  CabinetType,
  ChorusMode,
  DelayType,
  DistortionMode,
  FlangerMode,
  ModulationType,
  PedalType,
  PhaserMode,
  PowerAmpType,
  PreAmpType,
  ReverbType,
  TremoloMode,
} from 'marshall-code-api';

export default {
  [AutoWahMode.FLO]: 'FLO',
  [AutoWahMode.ENV]: 'ENV',

  [CabinetType._1960]: '1960',
  [CabinetType._1960V]: '1960V',
  [CabinetType._1960X]: '1960X',
  [CabinetType._1960HW]: '1960HW',
  [CabinetType._1936]: '1936',
  [CabinetType._1936V]: '1936V',
  [CabinetType._1912]: '1912',
  [CabinetType._1974CX]: '1974CX',

  [ChorusMode.CLS]: 'CLS',
  [ChorusMode.VIB]: 'VIB',

  [DelayType.STUDIO]: 'Studio',
  [DelayType.VINTAGE]: 'Vintage',
  [DelayType.MULTI]: 'Multi',
  [DelayType.REVERSE]: 'Reverse',

  [DistortionMode.GUV]: 'GUV',
  [DistortionMode.ODR]: 'ODR',
  [DistortionMode.DIS]: 'DIS',

  [FlangerMode.JET]: 'JET',
  [FlangerMode.MET]: 'MET',

  [ModulationType.CHORUS]: 'Chorus',
  [ModulationType.FLANGER]: 'Flanger',
  [ModulationType.PHASER]: 'Phaser',
  [ModulationType.TREMOLO]: 'Tremolo',

  [PedalType.COMPRESSOR]: 'Compressor',
  [PedalType.DISTORTION]: 'Distortion',
  [PedalType.AUTO_WAH]: 'Auto-Wah',
  [PedalType.PITCH_SHIFTER]: 'Pitch Shifter',

  [PhaserMode.CLS]: 'CLS',
  [PhaserMode.VBE]: 'VBE',

  [PowerAmpType.CLASSIC_MARSHALL_100W]: 'Classic Marshall 100W',
  [PowerAmpType.VINTAGE_MARSHALL_30W]: 'Vintage Marshall 30W',
  [PowerAmpType.BRITISH_CLASS_A]: 'British Class A',
  [PowerAmpType.AMERICAN_CLASS_A_B]: 'American Class A/B',

  [PreAmpType.JTM45]: 'JTM45',
  [PreAmpType.CL_DSL]: 'CL DSL',
  [PreAmpType.CL_AMERICAN]: 'CL AMERICAN',
  [PreAmpType.CL_JVM]: 'CL JVM',
  [PreAmpType.ACOUSTIC]: 'Acoustic',
  [PreAmpType.BLUESBREAKER]: 'Bluesbreaker',
  [PreAmpType.PLEXI]: 'Plexi',
  [PreAmpType.CR_AMERICAN]: 'CR American',
  [PreAmpType.JCM800]: 'JCM800',
  [PreAmpType._50S_BRITISH]: "50's British",
  [PreAmpType.OD_JVM]: 'OD JVM',
  [PreAmpType.OD_DSL]: 'OD DSL',
  [PreAmpType.OD_AMERICAN]: 'OD American',
  [PreAmpType.OD_SILVER_JUBILEE]: 'OD Silver Jubilee',
  [PreAmpType.NEUTRAL]: 'Neutral',

  [ReverbType.ROOM]: 'Room',
  [ReverbType.HALL]: 'Hall',
  [ReverbType.SPRING]: 'Spring',
  [ReverbType.STADIUM]: 'Stadium',

  [TremoloMode.VLV]: 'VLV',
  [TremoloMode.SQR]: 'SQR',
};
