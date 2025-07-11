import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SubnavbarComponent } from './shared/subnavbar/subnavbar.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MarcasComponent } from './shared/marcas/marcas.component';
import { SectionInvernoComponent } from './home/section-inverno/section-inverno.component';
import { SectionMaisVendidosComponent } from './home/section-mais-vendidos/section-mais-vendidos.component';
import { SectionPromocoesComponent } from './home/section-promocoes/section-promocoes.component';
import { SectionChegandoAgoraComponent } from './home/section-chegando-agora/section-chegando-agora.component';
import { SectionLuxoEleganciaComponent } from './home/section-luxo-elegancia/section-luxo-elegancia.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent, // ✅ Aqui está certo
    BannerComponent,
    SubnavbarComponent,
    MarcasComponent,
    SectionInvernoComponent,
    SectionMaisVendidosComponent,
    SectionPromocoesComponent,
    SectionChegandoAgoraComponent,
    SectionLuxoEleganciaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     CommonModule,
     SharedModule,
    HttpClientModule // ✅ Aqui também
    
  ],
  providers: [{
     provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}