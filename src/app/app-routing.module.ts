import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { MainLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouteEnum.Dashboard,
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: RouteEnum.Dashboard,
        loadChildren: () => import('./pages/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: RouteEnum.Digest,
        loadChildren: () => import('./pages/post-pages/digest/digest.module')
          .then(m => m.DigestModule)
      },
      {
        path: RouteEnum.Reviews,
        loadChildren: () => import('./pages/post-pages/reviews/reviews.module')
          .then(m => m.ReviewsModule)
      },
      {
        path: RouteEnum.Blog,
        loadChildren: () => import('./pages/post-pages/blog/blog.module')
          .then(m => m.BlogModule)
      },
      {
        path: `${PostEnum.Blog}/${RouteEnum.Details}/:id`,
        loadChildren: () => import('./pages/details/details.module')
          .then(m => m.DetailsModule)
      },
      {
        path: `${PostEnum.Digest}/${RouteEnum.Details}/:id`,
        loadChildren: () => import('./pages/details/details.module')
          .then(m => m.DetailsModule)
      },
      {
        path: `${PostEnum.Review}/${RouteEnum.Details}/:id`,
        loadChildren: () => import('./pages/details/details.module')
          .then(m => m.DetailsModule)
      },
      {
        path: RouteEnum.Create,
        loadChildren: () => import('./pages/create-page/create-page.module')
          .then(m => m.CreatePageModule)
      },
      {
        path: `${RouteEnum.Search}/:query`,
        loadChildren: () => import('./pages/response-page/response.module')
          .then(m => m.ResponseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
