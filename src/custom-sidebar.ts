import { ApiInterface, IconInfoInterface, SidebarMenuItemInterface, PoiServiceInterface, PoiClickHandler, PoiOpenHandler } from "@navvis/indoorviewer";

export class CustomSidebar {

	/*** onClick callback functions ***/

	private step00: any;
	private step01: any;
	private step02: any;
	private step03: any;
	private step04: any;
	private step05: any;
	private step06: any;
	private step07: any;
	private step08: any;
	private step09: any;
	private step10: any;

	private showInfo() {
	};

	private showMap() {
		this.ivApi.legacyApi.getMapView().scene
		console.log("kartta")
	};

	private toStart() {
		this.ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
	};

	private startTour() {
		this.stepTimer()
	};

	private stepTimer() {
		this.step00 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("tour start")
		}, 0);
		this.step01 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(704, { lon: 2.98, lat: -0.29 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 1")
		}, 10000);
		this.step02 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(393, { lon: -3.30, lat: -0.48 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 2")
		}, 20000);
		this.step03 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(385, { lon: 3.85, lat: -0.06 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 3")
		}, 30000);
		this.step04 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(428, { lon: 3.69, lat: -0.15 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 4")
		}, 40000);
		this.step05 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(684, { lon: 4.67, lat: -0.16 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 5")
		}, 50000);
		this.step06 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(222, { lon: 7.16, lat: -0.21 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 6")
		}, 60000);
		this.step07 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(479, { lon: -4.90, lat: -0.28 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 7")
		}, 70000);
		this.step08 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(284, { lon: -3.46, lat: -0.23 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 8")
		}, 80000);
		this.step09 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(332, { lon: -1.00, lat: -0.22 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 9")
		}, 90000);
		this.step10 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(43, { lon: 1.52, lat: -0.64 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 10")
		}, 100000);
	};

	private stopTour() {
		clearTimeout(this.step00);
		clearTimeout(this.step01);
		clearTimeout(this.step02);
		clearTimeout(this.step03);
		clearTimeout(this.step04);
		clearTimeout(this.step05);
		clearTimeout(this.step06);
		clearTimeout(this.step07);
		clearTimeout(this.step08);
		clearTimeout(this.step09);
		clearTimeout(this.step10);
		console.log("STOP");
	};

	/*** Menu Icons ***/

	private poiListIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "list",
		path: ""
	};

	private infoIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "info",
		path: ""
	};

	private mapIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "map",
		path: ""
	};

	private firstPoiIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "home",
		path: ""
	};

	private startTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "play_arrow",
		path: ""
	};

	private pauseTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "pause",
		path: ""
	};

	private stopTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "stop",
		path: ""
	};

	/*** Menu Items ***/

	private firstPoiMenuIcon: SidebarMenuItemInterface = {
		title: "To Start",
		icon: this.firstPoiIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this.toStart(); },
		items: [],
		isFullscreen: false
	};

	private startTourMenuIcon: SidebarMenuItemInterface = {
		title: "Start Tour",
		icon: this.startTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this.startTour(); },
		items: [],
		isFullscreen: false
	};

	private stopTourMenuIcon: SidebarMenuItemInterface = {
		title: "Stop Tour",
		icon: this.stopTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this.stopTour(); },
		items: [],
		isFullscreen: false
	};

	private pauseTourMenuIcon: SidebarMenuItemInterface = {
		title: "Pause Tour",
		icon: this.pauseTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { },
		items: [],
		isFullscreen: false
	};

	private poiListMenuIcon: SidebarMenuItemInterface = {
		title: "Point of interests",
		icon: this.poiListIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { },
		template: "./poi-list.html",
		items: [],
		isFullscreen: false
	};

	private infoMenuIcon: SidebarMenuItemInterface = {
		title: "Info",
		icon: this.infoIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		items: [],
		onClick: () => { this.showInfo(); },
		isFullscreen: false
	};

	private mapMenuIcon: SidebarMenuItemInterface = {
		title: "Map",
		icon: this.mapIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this.showMap(); },
		items: [],
		isFullscreen: false
	};

	constructor(private ivApi: ApiInterface) {
		const menuItems = this.ivApi.ui.sidebarMenuService.items;
		menuItems.splice(1, menuItems.length, this.firstPoiMenuIcon, this.startTourMenuIcon, this.pauseTourMenuIcon, this.stopTourMenuIcon, this.poiListMenuIcon/* , this.mapMenuIcon, this.infoMenuIcon */);
	};
};
