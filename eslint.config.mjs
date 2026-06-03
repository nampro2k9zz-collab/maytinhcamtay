// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Tắt rule báo lỗi useEffect thiếu dependency
      'react-hooks/exhaustive-deps': 'off',
      // Tắt rule báo lỗi setState trong useEffect
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  // Override default ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;