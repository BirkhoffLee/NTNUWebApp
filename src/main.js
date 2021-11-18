import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://a962ff61cf1e402eaa78b8a2755f417b@o304195.ingest.sentry.io/5826119",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.4,
})


const vm = app.mount('#app');
