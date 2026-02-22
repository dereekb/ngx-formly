import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

import 'jest-extended';
import './jestGlobalMocks';
// https://github.com/thymikee/jest-preset-angular/issues/347
import '@angular/localize/init';

setupZonelessTestEnv();
