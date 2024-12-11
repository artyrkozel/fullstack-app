
module.exports = {
    api: {
      input: 'http://localhost:3000/api-json',
      output: {
        target: './src/shared/api/generated.ts',
        client: 'axios',
        prettier: true,
        override: {
          mutator: {
            path: './src/shared/api/api-instance.ts',
            name: 'createInstance',
          },
        },
      },
    },
  };