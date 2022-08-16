import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FilmsComponent } from "./films/films.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MapboxComponent } from "./mapbox/mapbox.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: DashboardComponent },
      { path: "mapbox", component: MapboxComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "films", component: FilmsComponent },
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FilmsComponent,
    NavComponent,
    DashboardComponent,
    MapboxComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
