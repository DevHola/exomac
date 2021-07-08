import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5521883c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _76b02a4c = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _fff534a4 = () => interopDefault(import('..\\pages\\meet-the-team.vue' /* webpackChunkName: "pages/meet-the-team" */))
const _1ffc8da4 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _9ca1618e = () => interopDefault(import('..\\pages\\services\\HRAdvisory-Services.vue' /* webpackChunkName: "pages/services/HRAdvisory-Services" */))
const _ee7f3d52 = () => interopDefault(import('..\\pages\\services\\Outsourcing.vue' /* webpackChunkName: "pages/services/Outsourcing" */))
const _1c4bc936 = () => interopDefault(import('..\\pages\\services\\Recruitment-and-Selection.vue' /* webpackChunkName: "pages/services/Recruitment-and-Selection" */))
const _38188582 = () => interopDefault(import('..\\pages\\services\\Strategy-and-Learning.vue' /* webpackChunkName: "pages/services/Strategy-and-Learning" */))
const _0456eecb = () => interopDefault(import('..\\pages\\services\\_id.vue' /* webpackChunkName: "pages/services/_id" */))
const _74d96301 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5521883c,
    name: "about"
  }, {
    path: "/contact-us",
    component: _76b02a4c,
    name: "contact-us"
  }, {
    path: "/meet-the-team",
    component: _fff534a4,
    name: "meet-the-team"
  }, {
    path: "/service",
    component: _1ffc8da4,
    name: "service"
  }, {
    path: "/services/HRAdvisory-Services",
    component: _9ca1618e,
    name: "services-HRAdvisory-Services"
  }, {
    path: "/services/Outsourcing",
    component: _ee7f3d52,
    name: "services-Outsourcing"
  }, {
    path: "/services/Recruitment-and-Selection",
    component: _1c4bc936,
    name: "services-Recruitment-and-Selection"
  }, {
    path: "/services/Strategy-and-Learning",
    component: _38188582,
    name: "services-Strategy-and-Learning"
  }, {
    path: "/services/:id?",
    component: _0456eecb,
    name: "services-id"
  }, {
    path: "/",
    component: _74d96301,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
