import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryLabelPipe } from './pipes/category-label.pipe';

registerLocaleData(localeFr);

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
    PostTemplateCookComponent,
    ProjectsComponent,
    NotFoundComponent,
    CategoryLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
