// https://web.dev/add-manifest/
// https://dev.to/jankapunkt/transform-any-meteor-app-into-a-pwa-4k44
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  navigator.serviceWorker
  .register('/sw.js')
  .then(() => console.info('service worker registered'))
  .catch(error => {
    console.log('ServiceWorker registration failed: ', error)
  })
})
