module.exports = function (plop) {
  plop.setGenerator('component:styled', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/styled/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/styled/index.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/styled/spec.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/styled/stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.styles.ts',
        templateFile: 'templates/styled/styles.ts.hbs'
      }
    ]
  })
}
