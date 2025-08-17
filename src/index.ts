import minimal from './minimal.js';
import { ignores } from './ignores.js';

export { minimal, ignores };
// optional: default export = minimal to make ESM default-import “just work”
export default minimal;

// Do NOT import "./react" here; it requires optional plugins.
// Consumers should import the React preset via the subpath:
//   import react from '@codeiqlabs/eslint-config/react';
