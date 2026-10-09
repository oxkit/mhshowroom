const h = React.createElement;
const { useState, useRef } = React;
const { Button } = window.MattressHubDesignSystem_7b8009;
function Icon({ type }) {
  const paths = { arrow: 'M4 12h16m-6-6 6 6-6 6', zoom: 'M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5', close: 'm6 6 12 12M18 6 6 18', check: 'm5 12 4 4L19 6', copy: 'M8 8h12v12H8zM16 8V4H4v12h4' };
  return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }, h('path', { d: paths[type] }));
}
function Logo() {
  return h('div', { className: 'wordmark', 'aria-label': 'MattressHub' },
    h('svg', { viewBox: '0 0 64 64', width: 38, height: 38, 'aria-hidden': true },
      h('path', { d: 'M47 9a10 10 0 1 0 8.5 16.5A8 8 0 1 1 47 9Z', fill: '#d8a72b' }),
      h('rect', { x: 7, y: 30, width: 8, height: 22, rx: 3.4, fill: '#1a2440' }),
      h('rect', { x: 17, y: 33, width: 14, height: 8, rx: 4, fill: '#d8a72b' }),
      h('rect', { x: 13, y: 40, width: 44, height: 7, rx: 3.5, fill: '#d8a72b' }),
      h('rect', { x: 13, y: 46, width: 44, height: 9, rx: 3, fill: '#1a2440' })),
    h('span', null, 'Mattress', h('b', null, 'Hub')));
}
