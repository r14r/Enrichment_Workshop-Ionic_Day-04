import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSlidingPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: ItemSlidingPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ItemSlidingPageRoutingModule {}
