import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SituationComponent } from './situation/situation.component';
import { NewComponent } from './new/new.component';
import { UnitsComponent } from './units/units.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SearchComponent } from './search/search.component';
import { ReportsComponent } from './reports/reports.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ChatComponent } from './chat/chat.component';
import { LogComponent } from './log/log.component';
import { RoadConditionsComponent } from './road-conditions/road-conditions.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { LinksComponent } from './links/links.component';
import { BoardComponent } from './board/board.component';
import { MobileComponent } from './mobile/mobile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IncidentsComponent } from './situation/incidents/incidents.component';
import { IncidentComponent } from './situation/incidents/incident/incident.component';


@NgModule({
  declarations: [
    AppComponent,
    SituationComponent,
    NewComponent,
    UnitsComponent,
    PageNotFoundComponent,
    FacilitiesComponent,
    SearchComponent,
    ReportsComponent,
    ConfigurationComponent,
    ChatComponent,
    LogComponent,
    RoadConditionsComponent,
    FullScreenComponent,
    LinksComponent,
    BoardComponent,
    MobileComponent,
    IncidentsComponent,
    IncidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
