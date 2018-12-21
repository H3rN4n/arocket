import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';
import { AdminComponent } from './admin.component';
import { AuthenticationAdminGuard } from '@app/core/authentication/authentication.admin.guard';

/**
 * Provides helper methods to create routes.
 */
export class Admin {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: 'admin',
      component: AdminComponent,
      children: routes,
      canActivate: [AuthenticationGuard, AuthenticationAdminGuard],
      // Reuse AdminComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
