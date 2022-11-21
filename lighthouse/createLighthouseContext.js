const fs = require('fs');
const puppeteer = require('puppeteer');
const { startFlow } = require('lighthouse/lighthouse-core/fraggle-rock/api');

const createLighthouseContext = () => {
  let flow;
  let port;

  return {
    init(launchOptions) {
      port = launchOptions.args
        .find((config) => config.startsWith('--remote-debugging-port'))
        .split('=')
        .at(1);
      return null;
    },

    async startFlow({ name }) {
      const browser = await puppeteer.connect({
        browserURL: `http://localhost:${port}`,
      });

      const pages = await browser.pages();

      flow = await startFlow(pages.at(0), { name });

      return null;
    },

    async startTimespan({ stepName }) {
      if (flow) {
        await flow.startTimespan({ stepName });
      }

      return null;
    },

    async endTimespan() {
      if (flow) {
        await flow.endTimespan();
      }

      return null;
    },

    async generateReport() {
      const report = await flow.generateReport();
      fs.writeFileSync('flow.report.html', report);

      return null;
    },
  };
};

module.exports = createLighthouseContext;
