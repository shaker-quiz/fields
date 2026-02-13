import template from './template.js' with { type: 'text' }

import { Contracts } from '@shakerquiz/contracts'
import { Mode } from '@shakerquiz/utilities'
import { $ } from 'bun'

let FormDatas = [
  'POST/theme/cover/admin',
  'PUT/theme/cover/admin',
]

let path = x => x.join('/')

let schema = x => path(x).replaceAll('/', '_')

let raw = await $`find ./source/forms -type f -name '*.json'`

let exists = raw
  .text()
  .split('\n')
  .filter(Boolean)
  .map(x => x.replace('./source/forms/', '').replace('.json', '').split('/'))

let imports = exists
  .map(x => `import ${schema(x)} from './forms/${path(x)}.json' with { type: 'json' }`)
  .join('\n')

let formSchema = exists
  .map(x => `'${path(x)}': ${schema(x)}`)
  .join(',\n    ')

let formKind = exists
  .map(x => {
    if (Contracts.includes(path(x)))
      return `'${path(x)}': 'Schema'`
    else if (FormDatas.includes(path(x)))
      return `'${path(x)}': 'FormData'`
    else
      return `'${path(x)}': '${Mode['Unknown']}'`
  })
  .join(',\n    ')

Bun.write(
  './source/index.js',
  template
    .replace('/* imports */', imports)
    .replace('/* form -> schema */', formSchema)
    .replace('/* form -> kind */', formKind),
)
