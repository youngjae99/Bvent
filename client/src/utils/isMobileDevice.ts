export const isMobileDevice = (): boolean =>
  'ontouchstart' in window || 'onmsgesturechange' in window;