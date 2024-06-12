import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from  '@angular/common/http';
import { ServiceService } from './Services/service.service';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonBlogComponent } from './common-blog/common-blog.component';
import { PostABlogComponent } from './post-a-blog/post-a-blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { ShowsignupdataComponent } from './component/showsignupdata/showsignupdata.component';
import { EditComponent } from './component/edit/edit.component';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';
import { CategoryComponent } from './category/category.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { OpinionComponent } from './Specific_Category/opinion/opinion.component';
import { BangladeshComponent } from './Specific_Category/bangladesh/bangladesh.component';
import { InternationalComponent } from './Specific_Category/international/international.component';
import { EducationComponent } from './Specific_Category/education/education.component';
import { SportsComponent } from './Specific_Category/sports/sports.component';
import { EntertainmentComponent } from './Specific_Category/entertainment/entertainment.component';
import { FeaturesComponent } from './Specific_Category/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    BlogDetailsComponent,
    HomeComponent,
    SideBarComponent,
    CommonBlogComponent,
    PostABlogComponent,
    AdminBlogComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ShowsignupdataComponent,
    EditComponent,
    SearchbynameComponent,
    CategoryComponent,
    TexteditorComponent,
    DivisionsComponent,
    OpinionComponent,
    BangladeshComponent,
    InternationalComponent,
    EducationComponent,
    SportsComponent,
    EntertainmentComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
