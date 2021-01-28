// eslint-disable-next-line @typescript-eslint/ban-types
export const initApplication: Function = () => {
  return () =>
    new Promise(async (resolve, reject) => {
      /**
       * TODO: Realize toda a lógica necessária antes de iniciar o app.component.ts.
       * Retorne resolve() para sinalizar que aplicação pode inicializar normalmente
       * ou reject() para barrar a inicialização da aplicação.
       */
      resolve('Deu tudo certo!');
    }).then(console.log);
};
