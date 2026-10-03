// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
testDir : './tests',
timeout : 90000,
excepts:{
  timeout : 5000,

},
reporter : 'html',
use:{
  headless : false,
  browserName : 'chromium',
  navigation : 90000,
}
});

module.exports=config