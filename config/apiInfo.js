import path from 'path';
import dotenv from 'dotenv';
import { DEFAULT_STATE, DEFAULT_COUNTRY } from '../src/utils/constants';
// Load environment variables from .env file using absolute path
const EnvInfo = dotenv.config({ path: path.resolve(__dirname, '.env') });

const { parsed } = EnvInfo;

export const CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_STATE},${DEFAULT_COUNTRY}&APPID=${parsed.APPID}`