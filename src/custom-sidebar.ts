import { ApiInterface, IconInfoInterface, SidebarMenuItemInterface, PoiServiceInterface, PoiClickHandler, PoiOpenHandler, MapViewInterface } from "@navvis/indoorviewer";

export class CustomSidebar {

	/*** onClick callback functions ***/

	private _step00: any;
	private _step01: any;
	private _step02: any;
	private _step03: any;
	private _step04: any;
	private _step05: any;
	private _step06: any;
	private _step07: any;
	private _step08: any;
	private _step09: any;
	private _step10: any;

	private _showInfo() {
	};

	private _showMap() {
		// this._ivApi.legacyApi.getMapView().addToScene
		// this._ivApi.legacyApi.getMapView().active = true
		// this._ivApi.legacyApi.getMainView().invalidateScene()
	};

	/* Move to the starting location */
	private _toStart() {
		this._ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
	};

	/* start tour */
	private _startTour() {
		this._stepTimer()
	};

	/* POI locations and delay for automated tour */
	private _stepTimer() {
		// this._ivApi.poi.service.onPoiOpen.connect(this._stopTour);
		this._step00 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("tour start")
		}, 0);
		this._step01 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(704, { lon: 2.98, lat: -0.29 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 1")
		}, 10000);
		this._step02 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(393, { lon: -3.30, lat: -0.48 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 2")
		}, 20000);
		this._step03 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(385, { lon: 3.85, lat: -0.06 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 3")
		}, 30000);
		this._step04 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(428, { lon: 3.69, lat: -0.15 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 4")
		}, 40000);
		this._step05 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(684, { lon: 4.67, lat: -0.16 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 5")
		}, 50000);
		this._step06 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(222, { lon: 7.16, lat: -0.21 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 6")
		}, 60000);
		this._step07 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(479, { lon: -4.90, lat: -0.28 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 7")
		}, 70000);
		this._step08 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(284, { lon: -3.46, lat: -0.23 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 8")
		}, 80000);
		this._step09 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(332, { lon: -1.00, lat: -0.22 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 9")
		}, 90000);
		this._step10 = setTimeout(() => {
			this._ivApi.legacyApi.moveToImageId(43, { lon: 1.52, lat: -0.64 }, 115)
			this._ivApi.legacyApi.getMainView().invalidateScene()
			this._ivApi.legacyApi.getMainView().currViewingDir
			console.log("step 10")
		}, 100000);
	};

	/* stop tour */
	private _stopTour() {
		clearTimeout(this._step00);
		clearTimeout(this._step01);
		clearTimeout(this._step02);
		clearTimeout(this._step03);
		clearTimeout(this._step04);
		clearTimeout(this._step05);
		clearTimeout(this._step06);
		clearTimeout(this._step07);
		clearTimeout(this._step08);
		clearTimeout(this._step09);
		clearTimeout(this._step10);
		console.log("STOP");
	};

	private _pauseTour() {
	};

	/*** Menu Icons ***/

	private _poiListIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "list",
		path: ""
	};

	private _infoIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "info",
		path: ""
	};

	private _mapIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "map",
		path: ""
	};

	private _firstPoiIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "home",
		path: ""
	};

	private _startTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "play_arrow",
		path: ""
	};

	private _pauseTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "pause",
		path: ""
	};

	private _stopTourIcon: IconInfoInterface = {
		className: "material-icons",
		ligature: "stop",
		path: ""
	};

	/*** Menu Items ***/

	private _firstPoiMenuIcon: SidebarMenuItemInterface = {
		title: "To Start",
		icon: this._firstPoiIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this._toStart(); },
		items: [],
		isFullscreen: false
	};

	private _startTourMenuIcon: SidebarMenuItemInterface = {
		title: "Start Tour",
		icon: this._startTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this._stepTimer(); },
		items: [],
		isFullscreen: false
	};

	private _stopTourMenuIcon: SidebarMenuItemInterface = {
		title: "Stop Tour",
		icon: this._stopTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this._stopTour(); },
		items: [],
		isFullscreen: false
	};

	private _pauseTourMenuIcon: SidebarMenuItemInterface = {
		title: "Pause Tour",
		icon: this._pauseTourIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this._pauseTour() },
		items: [],
		isFullscreen: false
	};

	private _poiListMenuIcon: SidebarMenuItemInterface = {
		title: "Points of interest",
		icon: this._poiListIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { },
		template: "./poi-list.html",
		items: [],
		isFullscreen: false
	};

	private _infoMenuIcon: SidebarMenuItemInterface = {
		title: "Info",
		icon: this._infoIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		items: [],
		onClick: () => { },
		template: "",
		isFullscreen: false
	};

	private _mapMenuIcon: SidebarMenuItemInterface = {
		title: "Map",
		icon: this._mapIcon,
		isPreviewIconVisible: () => true,
		isVisible: () => true,
		onClick: () => { this._showMap(); },
		items: [],
		isFullscreen: false,
	};

	constructor(private _ivApi: ApiInterface) {
		const menuItems = this._ivApi.ui.sidebarMenuService.items;
		
		/* hide default menu icons and display custom ones */
		menuItems.splice(1, menuItems.length, this._firstPoiMenuIcon, this._startTourMenuIcon, this._stopTourMenuIcon, this._poiListMenuIcon);
	};
};
