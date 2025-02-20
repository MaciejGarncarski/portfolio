import type {
  TransitionAnimation,
  TransitionAnimationPair,
  TransitionDirectionalAnimations
} from "astro";

export const mainEntranceAnimationIn: TransitionAnimation = {
  name: "mainEntrance",
  duration: "0.15s"
};

export const mainEntranceAnimationOut: TransitionAnimation = {
  name: "mainEntranceOut",
  duration: "0.05s"
};

export const mainEntrancePair: TransitionAnimationPair = {
  old: mainEntranceAnimationOut,
  new: mainEntranceAnimationIn
};

export const mainEntrance: TransitionDirectionalAnimations = {
  forwards: mainEntrancePair,
  backwards: mainEntrancePair
};
