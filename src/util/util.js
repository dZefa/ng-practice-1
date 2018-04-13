const provideStates = (states, stateProvider) => {
  states.map((config) => {
    const name = config.state;
    delete config.state;
    return { name, config };
  }).forEach((state) => 
    stateProvider.state(state.name, state.config)
  );
};

export { provideStates };
