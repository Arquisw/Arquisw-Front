import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { InicioComponent } from './feature/inicio/inicio.component';
import { FundamentacionComponent } from './feature/fundamentacion/fundamentacion.component';
import { AcercanosotrosComponent } from './feature/acercanosotros/acercanosotros.component';
import { PresentacionComponent } from './feature/presentacion/presentacion.component';
import { AsociacionModule } from './feature/asociacion/asociacion.module';
import { ConfiguracionModule } from './feature/configuracion/configuracion.module';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FundamentacionComponent,
    AcercanosotrosComponent,
    PresentacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AsociacionModule,
    ConfiguracionModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
