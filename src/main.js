import Vue from 'vue'
import App from './App.vue'
// 引入Sentry
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: 'https://5a57da1694ba4702b2ac9a86a5a5b1ed@o473804.ingest.sentry.io/5509157',
  integrations: [
    new VueIntegration({
      Vue,
      logErrors: true,
      tracing: true
    }),
    new Integrations.BrowserTracing()
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
