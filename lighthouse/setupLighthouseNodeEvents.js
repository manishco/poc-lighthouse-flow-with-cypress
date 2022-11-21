const createLighthouseContext = require('./createLighthouseContext');

const setupLighthouseNodeEvents = (on) => {
  const context = createLighthouseContext();

  on('before:browser:launch', (browser, launchOptions) => {
    context.init(launchOptions);
  });

  on('task', {
    lighthouseStartTimespan: context.startTimespan,
    lighthouseEndTimespan: context.endTimespan,
    lighthouseStartFlow: context.startFlow,
    lighthouseGenerateReport: context.generateReport,
  });
};

module.exports = setupLighthouseNodeEvents;
