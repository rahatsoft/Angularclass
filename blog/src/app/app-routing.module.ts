import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostABlogComponent } from './post-a-blog/post-a-blog.component';
import { HomeComponent } from './home/home.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowsignupdataComponent } from './component/showsignupdata/showsignupdata.component';
import { EditComponent } from './component/edit/edit.component';
import { CategoryComponent } from './category/category.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { OpinionComponent } from './Specific_Category/opinion/opinion.component';
import { BangladeshComponent } from './Specific_Category/bangladesh/bangladesh.component';
import { InternationalComponent } from './Specific_Category/international/international.component';
import { EducationComponent } from './Specific_Category/education/education.component';
import { SportsComponent } from './Specific_Category/sports/sports.component';
import { EntertainmentComponent } from './Specific_Category/entertainment/entertainment.component';
import { FeaturesComponent } from './Specific_Category/features/features.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomePageComponent },
  { path: 'post_a_new_blog', component: PostABlogComponent },

  { path: 'Comments', component: AdminBlogComponent },
  { path: 'AdminBlog', component: AdminBlogComponent },

  { path: 'blogDetails/:blog_id', component: BlogDetailsComponent },
  { path: 'blogcategory/:category', component: CategoryComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Showsignup', component: ShowsignupdataComponent },
  { path: 'edit', component: EditComponent },
// export class DivisionsComponent implements OnInit {
  {path:'divisions', component:DivisionsComponent},

  {path:'bangladesh', component:BangladeshComponent},
  {path:'international', component:InternationalComponent},
  {path:'education', component:EducationComponent},
  {path:'sports', component:SportsComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'features', component:FeaturesComponent},
  {path:'opinion', component:OpinionComponent}


  // user link
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
