import type { ConfigurationOptions } from '@c8y/devkit';
import { author, description, version, name } from './package.json';
import { gettext } from '@c8y/ngx-components/gettext';

const defaultDescription = gettext(
  'The Administration application enables account administrators to manage their users, roles, tenants, applications and business rules and lets them configure a number of settings for their account.'
);

export default {
  runTime: {
    author,
    description: description || defaultDescription,
    version,
    name,
    globalTitle: 'Cumulocity',
    rightDrawer: true,
    tabsHorizontal: true,
    dynamicOptionsUrl: true,
    contextHelp: true,
    contentSecurityPolicy:
      "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' http: https: ws: wss:;  script-src 'self' *.bugherd.com *.twitter.com *.twimg.com *.aptrinsic.com  'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; media-src 'self' blob:; img-src * data: blob:; font-src * data:; frame-src *; worker-src 'self' blob:;",
    upgrade: true,
    exports: [
      {
        module: 'BaseBrandingModule',
        name: gettext('Branding base editor'),
        path: '@c8y/ngx-components/branding/base-branding',
        description: gettext('Allows to make basic changes to the tenants branding.'),
        scope: 'self'
      },
      {
        module: 'DarkThemeModule',
        name: gettext('Branding dark theme editor'),
        path: '@c8y/ngx-components/branding/dark-theme',
        description: gettext('Allows editing the dark theme variables.'),
        scope: 'self'
      },
      {
        module: 'ExtraCssBrandingEditorModule',
        name: gettext('Branding custom CSS editor'),
        path: '@c8y/ngx-components/branding/extra-css-branding-editor',
        description: gettext('Allows to add and edit a custom style sheet to the branding.'),
        scope: 'self'
      },
      {
        module: 'PlainBrandingEditorModule',
        name: gettext('Branding JSON editor'),
        path: '@c8y/ngx-components/branding/plain-branding-editor',
        description: gettext('Allows to edit the plain JSON of the branding.'),
        scope: 'self'
      }
    ]
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'angular',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
