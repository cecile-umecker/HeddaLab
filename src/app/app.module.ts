import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { PostTemplateArticleComponent } from './template/post-template-article/post-template-article.component';
import { PostTemplateGalleryComponent } from './template/post-template-gallery/post-template-gallery.component';
import { PostTemplateMixteComponent } from './template/post-template-mixte/post-template-mixte.component';
import { PostTemplateCookComponent } from './template/post-template-cook/post-template-cook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExploreComponent,
    PostDetailComponent,
    AboutComponent,
    PostTemplateArticleComponent,
    PostTemplateGalleryComponent,
    PostTemplateMixteComponent,
    PostTemplateCookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
