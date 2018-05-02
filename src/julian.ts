
export interface IJulianConverter {
    julianToJsDate(julian: number): Date;
}

/**
 * @class JulianConverter
 * @description Converts Julian dates to standard JS dates
 */
export class JulianConverter implements IJulianConverter {

    private SecondsInADay: number = 86400000;
    private EpochJulianDay: number = 719162;

    /**
     * @method julianToJsDate
     * @param {number} julian The julian date to convert
     * @returns {Date} JS Date that represents the julian date provided
     */
    julianToJsDate = (julian: number): Date => {
        return new Date((julian - this.EpochJulianDay) * this.SecondsInADay);
    }
}
