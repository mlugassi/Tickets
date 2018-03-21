import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { MapsComponent} from './maps/maps.component';

const appRoutes: Routes = [
  {path: '', component: SituationComponent },
  {path: 'new', component: NewComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'facilities', component: FacilitiesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'configurtion', component: ConfigurationComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'log', component: LogComponent},
  {path: 'road-conditions', component: RoadConditionsComponent},
  {path: 'full-screen', component: FullScreenComponent},
  {path: 'links', component: LinksComponent},
  {path: 'board', component: BoardComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }