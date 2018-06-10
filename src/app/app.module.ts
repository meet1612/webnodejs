import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { Calc1Component } from './calc1/calc1.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ProductappComponent } from './productapp/productapp.component';
import { StudentappComponent } from './studentapp/studentapp.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    Calc1Component,
    TodolistComponent,
    ProductappComponent,
    StudentappComponent,
    BootstrapdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
