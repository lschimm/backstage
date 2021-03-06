/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Command } from 'commander';
import { resolve as resolvePath } from 'path';
import { run } from '../../helpers/run';

export default async (cmd: Command) => {
  const args = [
    'test',
    '--config',
    resolvePath(__dirname, '../../../config/jest.js'),
  ];

  if (cmd.watch) {
    args.push('--watch');
  }
  if (cmd.coverage) {
    args.push('--coverage');
  }

  await run('web-scripts', args, { stdio: 'inherit' });
};
