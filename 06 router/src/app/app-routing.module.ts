import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


const routes: Routes = [
  { path: " ", component: AppComponent },
  { path: "feature", component: FeaturesComponent },
  { path: "docs", component: DocsComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog/:id", component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
