import { ApiInterface, IconInfoInterface, SidebarMenuItemInterface, PoiServiceInterface, PoiClickHandler, PoiOpenHandler } from "@navvis/indoorviewer";

export class CustomSidebar {

	private step0: any;
	private step1: any;
	private step2: any;
	private step3: any;
	private step4: any;
	private step5: any;
	private step6: any;
	private step7: any;
	private step8: any;
	private step9: any;
	private step10: any;

	/*** Menu Icons ***/

	private poiIcon: IconInfoInterface = {
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

	private poiList: SidebarMenuItemInterface = {
		title: "Point of interests",
		icon: this.poiIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { },
		template: "./poi-list.html",
		items: [],
		isFullscreen: false
	};

	private showInfo() {
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

	private showMap() {
		this.ivApi.legacyApi.getMapView().scene
		console.log("kartta")
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

	private toStart() {
		this.ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
	};

	private firstPoiMenuIcon: SidebarMenuItemInterface = {
		title: "To Start",
		icon: this.firstPoiIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this.toStart(); },
		items: [],
		isFullscreen: false
	};

	private stepTimer() {
		this.step0 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("Tour start")
		}, 0);
		this.step1 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(704, { lon: 2.98, lat: -0.29 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 1")
		}, 10000);
		this.step2 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(393, { lon: -3.30, lat: -0.48 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 2")
		}, 20000);
		this.step3 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(385, { lon: 3.85, lat: -0.06 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 3")
		}, 30000);
		this.step4 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(428, { lon: 3.69, lat: -0.15 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 4")
		}, 40000);
		this.step5 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(684, { lon: 4.67, lat: -0.16 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 5")
		}, 50000);
		this.step6 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(222, { lon: 7.16, lat: -0.21 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 6")
		}, 60000);
		this.step7 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(479, { lon: -4.90, lat: -0.28 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 7")
		}, 70000);
		this.step8 = setTimeout(() => {
			this.ivApi.legacyApi.moveToImageId(284, { lon: -3.46, lat: -0.23 }, 115)
			this.ivApi.legacyApi.getMainView().invalidateScene()
			this.ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 8")
		}, 80000);
		this.step9 = setTimeout(() => {
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

	private startTour() {
		this.stepTimer()
	};

	private stopTour() {
		clearTimeout(this.step0)
		clearTimeout(this.step1)
		clearTimeout(this.step2)
		clearTimeout(this.step3)
		clearTimeout(this.step4)
		clearTimeout(this.step5)
		clearTimeout(this.step6)
		clearTimeout(this.step7)
		clearTimeout(this.step8)
		clearTimeout(this.step9)
		clearTimeout(this.step10)
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

	constructor(private ivApi: ApiInterface) {
		const menuItems = this.ivApi.ui.sidebarMenuService.items;
		menuItems.splice(1, menuItems.length, this.firstPoiMenuIcon, this.startTourMenuIcon, this.stopTourMenuIcon, this.poiList/* , this.mapMenuIcon, this.infoMenuIcon */);
	}
}
