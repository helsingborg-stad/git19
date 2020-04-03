import { css } from 'styled-components';

const z = {};

z[4] = css`
  box-shadow: 0px 26px 32px rgba(98, 98, 98, 0.12), 0px 10px 16px rgba(98, 98, 98, 0.12),
    0px 6px 8px rgba(98, 98, 98, 0.12), 0px 3px 2px rgba(98, 98, 98, 0.12),
    0px 0px 2px rgba(98, 98, 98, 0.18);
`;
z[3] = css`
  box-shadow: 0px 10px 16px rgba(98, 98, 98, 0.12), 0px 6px 4px rgba(98, 98, 98, 0.12),
    0px 3px 2px rgba(98, 98, 98, 0.12), 0px 0px 2px rgba(98, 98, 98, 0.18);
`;

z[2] = css`
  box-shadow: 0px 6px 8px rgba(98, 98, 98, 0.18), 0px 2px 2px rgba(98, 98, 98, 0.18),
    0px 0px 2px rgba(98, 98, 98, 0.18);
`;

z[1] = css`
  box-shadow: 0px 6px 8px rgba(98, 98, 98, 0.18), 0px 2px 2px rgba(98, 98, 98, 0.18),
    0px 0px 2px rgba(98, 98, 98, 0.18);
`;

z[0] = css`
  box-shadow: none;
`;

export default z;
