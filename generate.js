import { Methods, Mode, Roles, Routes } from '@shakerquiz/utilities'
import template from './template.txt' with { type: 'text' }

let field = (method, route, role) => '' + method + '/' + route + '/' + role

let schema = (method, route, role) => '' + method + '_' + route.replaceAll('/', '_') + '_' + role

let pathname = (method, route, role) => `'./fields/${method}/${route}/${role}.json'`

let imported = (...a) => `import ${schema(...a)} from ${pathname(...a)} with { type: 'json' }`

let key = (...a) => `  '${field(...a)}': '${field(...a)}'`

let value = (...a) => `  '${field(...a)}': ${schema(...a)}`

let A = Methods
  .flatMap(method => Routes.map(route => [method, route]))
  .flatMap(([method, route]) => Roles.concat(Mode['Unknown']).map(role => [method, route, role]))

Promise
  .all(
    A.map(([method, route, role]) =>
      Bun
        .file(`./source/fields/${method}/${route}/${role}.json`)
        .stat()
        .then(() => [method, route, role])
        .catch(() => null)
    ),
  )
  .then(components => components.filter(Boolean))
  .then(components =>
    Bun.write(
      './source/index.js',
      template
        .replace('/* {{ imports }} */', components.map(a => imported(...a)).join('\n'))
        .replace('/* {{ fields }} */', components.map(a => key(...a)).join(',\n'))
        .replace('/* {{ schemas }} */', components.map(a => value(...a)).join(',\n')),
    )
  )
