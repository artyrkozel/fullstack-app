
module.exports = {
    api: {
      input: 'http://localhost:3000/api-json',
      output: {
        target: './app/api/generated.ts',
        client: 'axios',
        prettier: true,
        override: {
          mutator: {
            path: './app/api/api-instance.ts',
            name: 'createInstance',
          },
        },
      },
    },
  };