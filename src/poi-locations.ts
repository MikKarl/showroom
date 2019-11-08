import { ApiInterface } from "@navvis/indoorviewer";

export class PoiLocations {

    public poi0() {
        this.ivApi.legacyApi.moveToImageId(282, { lon: 2.21, lat: -0.14 }, 115)
    };

    public poi1() {
        this.ivApi.legacyApi.moveToImageId(704, { lon: 2.98, lat: -0.29 }, 115)
    };

    public firstStep() {
        document.getElementById('poi1').addEventListener('click', (e: Event) => { this.poi1() });
        console.log("PAINALLUS", event)
    };

    public poi2() {
        this.ivApi.legacyApi.moveToImageId(393, { lon: -3.30, lat: -0.48 }, 115)
    };

    public poi3() {
        this.ivApi.legacyApi.moveToImageId(385, { lon: 3.85, lat: -0.06 }, 115)
    };

    public poi4() {
        this.ivApi.legacyApi.moveToImageId(428, { lon: 3.69, lat: -0.15 }, 115)
    };

    public poi5() {
        this.ivApi.legacyApi.moveToImageId(684, { lon: 4.67, lat: -0.16 }, 115)
    };

    public poi6() {
        this.ivApi.legacyApi.moveToImageId(222, { lon: 7.16, lat: -0.21 }, 115)
    };

    public poi7() {
        this.ivApi.legacyApi.moveToImageId(479, { lon: -4.90, lat: -0.28 }, 115)
    };

    public poi8() {
        this.ivApi.legacyApi.moveToImageId(284, { lon: -3.46, lat: -0.23 }, 115)
    };

    public poi9() {
        this.ivApi.legacyApi.moveToImageId(332, { lon: -1.00, lat: -0.22 }, 115)
    };

    public poi10() {
        this.ivApi.legacyApi.moveToImageId(43, { lon: 1.52, lat: -0.64 }, 115)
    };

    constructor(private ivApi: ApiInterface) {
        window.onload = () => {
            this.firstStep();
            /* document.getElementById('poi1').addEventListener('click', () => { this.poi1() });
            document.getElementById('poi2').addEventListener('click', () => { this.poi2() });
            document.getElementById('poi3').addEventListener('click', () => { this.poi3() });
            document.getElementById('poi4').addEventListener('click', () => { this.poi4() });
            document.getElementById('poi5').addEventListener('click', () => { this.poi5() });
            document.getElementById('poi6').addEventListener('click', () => { this.poi6() });
            document.getElementById('poi7').addEventListener('click', () => { this.poi7() });
            document.getElementById('poi8').addEventListener('click', () => { this.poi8() });
            document.getElementById('poi9').addEventListener('click', () => { this.poi9() });
            document.getElementById('poi10').addEventListener('click', () => { this.poi10() }); */
        };
    }
} 
