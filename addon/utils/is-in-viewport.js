import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

const defaultTolerance = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

export default function isInViewport(elementRect, contextRect, tolerance = defaultTolerance) {
  const { top, left, bottom, right } = elementRect;
  const { top: topMin, left: leftMin, bottom: bottomMax, right: rightMax } = contextRect;

  const tolerances = assign(assign({}, defaultTolerance), tolerance);
  const {
    top: topTolerance,
    left: leftTolerance,
    bottom: bottomTolerance,
    right: rightTolerance
  } = tolerances;

  return (
    (top + topTolerance)                   >= topMin &&
    (left + leftTolerance)                 >= leftMin &&
    (Math.round(bottom) - bottomTolerance) <= Math.round(bottomMax) &&
    (Math.round(right) - rightTolerance)   <= Math.round(rightMax)
  );
}
