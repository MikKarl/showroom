import "./index.scss";
import { getApi, ApiInterface } from "@navvis/indoorviewer";
import { CustomSidebar } from "./custom-sidebar";
import { DisableContextMenu } from "./disable-context-menu";

class MetsoTour {
	public ivApi: ApiInterface;

	constructor() {

		getApi("https://demo.esitevr.com/iv.metso.vantaa/", { "core.init.image": 282, "ui.search.visible": false, "layers.map.visible": false, "menu.login.visible": false, "ui.floorchanger.visible": false, "poi.names.panoramas": true, "poi.names.map": true, "poi.fullscreen": true, "poi.share.enabled": false, "routing.enabled": false, "poi.editing.enabled": false })
			.then((iv: ApiInterface) => {
				this.ivApi = iv;

				new DisableContextMenu(this.ivApi.view.mainView);
				const modifier = new CustomSidebar(iv);
				console.log(modifier);
			});
	};
};

(<any>window).MetsoTour = new MetsoTour();
