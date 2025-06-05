import { defineConfig } from 'cypress';
import fs from 'fs';

function getConfigurationByFile(file) {
  const pathToConfigFile = `cypress.env.${file}.json`;

  return fs.existsSync(pathToConfigFile)
    ? JSON.parse(fs.readFileSync(pathToConfigFile, 'utf-8'))
    : {};
}

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'staging';
      const customEnv = getConfigurationByFile(file);

      config.env = { ...config.env, ...customEnv };
      return config;
    },
  },
});