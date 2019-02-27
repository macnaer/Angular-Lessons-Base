import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: "feature", component: FeaturesComponent },
  { path: "docs", component: DocsComponent },
  { path: "resources", component: ResourcesComponent },
  {
    path: "blog",
    component: BlogComponent,
    children: [{ path: ":id/:title", component: BlogSinglePostComponent }]
  },
  {
    path: 'error-page',component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: '/error-page'
  }
  //{ path: "blog/:id", component: BlogPostComponent }
  //{ path: "blog/:id/:title/:post/:author", component: BlogSinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
